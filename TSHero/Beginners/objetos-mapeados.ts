type MovieInfoByGenre<MoviesByGenre> = {
	[K in keyof MoviesByGenre]:{
		name: string,
		year: number,
		director: string
	}
};