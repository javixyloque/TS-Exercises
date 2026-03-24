type GroceryStore<N, C> = {
	name: N;
	city: C;
};

type GroceryItem<N, P, S> = {
	name: N;
	price: P;
	inStock: S;
};

type CapreseSalad = GroceryItem<"Caprese Salad", 14.99, true>;
const capreseSalad: CapreseSalad = {
    name: "Caprese Salad",
    price: 14.99,
    inStock:    true,
};
console.log(capreseSalad);