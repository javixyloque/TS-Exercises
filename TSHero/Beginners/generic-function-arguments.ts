const identity = <T,>(arg: T): T => {
	return arg;
};


const mapArray = <T,>(arr: T[], fn: (arg: T) => T): T[] => arr.map(fn);

