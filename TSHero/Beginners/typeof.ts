const width = 100;

type Width = typeof width;
type Margin<Top = number, Right = number, Bot = number, Left = number> = {
	top: Top,
	right: Right,
	bottom: Bot,
	left: Left
};

type Data<C = string, V = number> = {
	category: C,
	value: V
}[];
type YScale <S = string, D = number[], R = number[]> = {
	type: S,
	domain: D,
	range: R
};

type D3ChartConfig = {
	width: number,
	height: number,
	margin: Margin,
	data: Data,
	xScale: {
		type: string,
		domain: number[],
		range: number[]
	},
	yScale: YScale, // reutilizacion de YScale
	xAxis:{
		label: string,
		tickSize: number
	},
	yAxis: {
		label: string,
		tickSize: number
	},
	bar: {
		fill: string
	}
};