const modifiersMap = new Map([
	['bold',      1],
	['dim',       2],
	['italic',    3],
	['underline', 4],
	['invert',    7],
	['strike',    9],
]);

function parseModifiers (modifier) {
	if (!modifier) return '';

	if (Array.isArray(modifier)) {
		return modifier
			.map(mod => parseModifiers(mod))
			.filter(mod => mod)
			.join(';');
	}

	const modNumber = modifiersMap.get(modifier);

	if (!modNumber) return '';

	return String(modNumber);
}

module.exports = parseModifiers;
