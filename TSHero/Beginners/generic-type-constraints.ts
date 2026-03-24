type AllowString<S extends string> = S;
type AllowNumber<N extends number> = N;

type CreateLogger<T extends (...args: [number]) => void> = {
	log: T;
	exit: () => void;
};
