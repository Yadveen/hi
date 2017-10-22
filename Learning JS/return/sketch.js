function setup() {
	var eu = rubToeu(1000);
	println(eu);
}

function rubToeu(rub) {
	var eu = rub/67.4;
	return eu;
}