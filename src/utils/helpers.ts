export const currencyNumberFormat = (num: number): string => {
	const formatter = new Intl.NumberFormat("en-US", {
		maximumFractionDigits: 2,
	});

	if (num >= 1_000_000_000_000) {
		return `${formatter.format(num / 1_000_000_000)}trn`;
	} else if (num >= 1_000_000_000) {
		return `${formatter.format(num / 1_000_000_000)}bn`;
	} else if (num >= 1_000_000) {
		return `${formatter.format(num / 1_000_000)}m`;
	} else {
		return formatter.format(num);
	}
};

export const mockProducts = Array.from({ length: 16 }, () => {
	return {
		id: Math.floor(Math.random() * 1000).toString(),
		productName: "Rice Bags",
		productImage: "/static-images/rice-bags.jpg",
		price: 20 * Math.floor(Math.random() * 10) + 8,
		weights: [5, 25, 80, 100],
		availableQuantity: Math.floor(Math.random() * 8),
	};
});
