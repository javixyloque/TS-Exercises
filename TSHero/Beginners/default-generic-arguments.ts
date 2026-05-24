type ApiRequest<D, M = "GET"> = {
	data: D;
	method: M;
};

type TSConfig<Param extends { strict: boolean } = {strict: true}> = {
	strict: Param['strict'];
};