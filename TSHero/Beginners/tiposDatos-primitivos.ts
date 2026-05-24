const playSong = (artistName: string, year: number) => {
	return `${artistName} was released in the year ${year}`;
};

let artistName = "Frank Zappa";

let age = 52;

interface Musician {
	artistName: string;
	age: number;
	deceased: boolean;
	// add the rest
}

const musicianInfo = ({ artistName, age, deceased }: Musician) => {
	return `${artistName}, age ${age}${deceased ? " (deceased)" : ""}`;
};

musicianInfo({
	artistName,
	age,
	deceased: true,
});


console.log(musicianInfo({
    artistName,
    age,
    deceased: true,
}));