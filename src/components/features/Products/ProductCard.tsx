import { useState } from "react";
import type { ProductType } from "../../../types";

import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";
import { currencyNumberFormat } from "../../../utils/helpers";

const ProductCard = (props: ProductType) => {
	const { productImage, productName, weights, id, availableQuantity, price } =
		props;

	const [quantity, setQuantity] = useState<number>(1);
	const [calculatedPrice, setCalculatedPrice] = useState<number>(weights[0] * price);

	const increaseQuantity = () => {
		setQuantity((prevQuantity) => prevQuantity + 1);
	};

    const calculatePrice = (size: number) => {
        setCalculatedPrice(price * size);
    }

	const decreaseQuantity = () => {
		setQuantity((prevQuantity) => {
			if (prevQuantity === 1) {
				return 1;
			} else {
				return prevQuantity - 1;
			}
		});
	};

	const addToCart = () => {
		alert("Item added to basket");
	};

	const productIsNotAvailable = availableQuantity <= 0

	return (
		<div
			className="w-full h-full flex flex-col justify-between gap-2 md:gap-0 relative border border-gray-200 shadow-md rounded-lg
			"
		>
			<a
				href={`/products/${id}`}
				className="relative w-full h-full overflow-clip"
			>
				<img
					src={productImage}
					alt="product"
					className="mb-2 relative w-full h-[200px] object-cover object-center rounded-lg"
				/>
			</a>

			<div className="mb-[6px] p-3">
				<p
					className={`${
						productIsNotAvailable
							? "text-red-700"
							: "text-green-700"
					} italic text-sm mb-2`}
				>
					{productIsNotAvailable ? "Out of stock" : "In stock"}
				</p>
				<p className="w-3/5 text-base md:text-lg font-light text-nowrap whitespace-nowrap text-ellipsis overflow-hidden capitalize">
					{productName}
				</p>
				<p
					className="text-lg text-center text-secondary font-semibold py-1 w-fit rounded-full flex items-center m-0"
					title="price per kg"
				>
					${currencyNumberFormat(price)}/kg
				</p>

				<div className="flex items-center justify-center gap-1.5 bg-[#f2e3c4] text-[#c7880b] rounded-md py-1 px-3 w-fit">
					<p>select size:</p>
					<select
						onChange={(e) => {
							calculatePrice(Number(e.target.value));
						}}
					>
						{weights.map((weight) => (
							<option key={weight} value={weight}>
								{weight} kg
							</option>
						))}
					</select>
					<p>${currencyNumberFormat(calculatedPrice ?? 0)}</p>
				</div>

				{availableQuantity > 0 && (
					<div className="w-full flex flex-col xs:flex-row items-start xs:items-center justify-between mt-3 gap-4">
						<div
							className={`flex w-full xs:w-fit items-center justify-start`}
						>
							<AiFillMinusCircle
								size={30}
								onClick={decreaseQuantity}
								color={quantity <= 1 ? "#D9D9D9" : "#9DA4AE"}
							/>
							<p
								className={`text-[18px] m-0 px-3 py-1 text-center`}
							>
								{quantity} bag(s)
							</p>
							<BsFillPlusCircleFill
								size={30}
								onClick={increaseQuantity}
								color="#9DA4AE"
							/>
						</div>
						<button
							type="button"
							className="bg-stone-950 text-white w-full xs:w-[124px] gap-2 border border-slate-500 border-none px-3 py-3 text-xs font-normal rounded-md"
							onClick={addToCart}
						>
							Add to cart
						</button>
					</div>
				)}

				{availableQuantity <= 0 && (
					<div className="w-full flex flex-col xs:flex-row items-start xs:items-center justify-between mt-3 gap-4">
						<button
							type="button"
							className="bg-stone-950 text-white w-full xs:w-[124px] gap-2 border border-slate-500 border-none px-3 py-3 text-xs font-normal rounded-md"
						>
							Pre-order
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default ProductCard;
