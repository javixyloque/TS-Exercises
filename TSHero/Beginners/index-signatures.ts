type GroceryList = {
	[item: string]: number;
};

type InappropriateActionBySituation = {
	[situation: string]: any[];
};

type CharactersById = {
	[index: number]: {
		id: number,
		name: string,
		status: string,
		species: string
	};
};