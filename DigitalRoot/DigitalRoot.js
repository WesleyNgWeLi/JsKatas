function digital_root(n) {
	if (n.toString().length != 1){
		const result = addDigits(n)
		return digital_root(result)}
	return n
}

const addDigits = (num) => 
	String.prototype.split.apply(num, [''])
	.map(Number)
	.reduce((a,b)=>a+b, 0)