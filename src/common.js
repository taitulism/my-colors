const modifiersMap = new Map([
	['bold',      1],
	['dim',       2],
	['italic',    3],
	['underline', 4],
	['invert',    7],
	['strike',    9],
]);

function parseModifier (modifier) {
	if (!modifier) return '';

	const modNumber = modifiersMap.get(modifier);

	if (!modNumber) return '';

	return modNumber;
}

module.exports = {
	modifiersMap,
	parseModifier,
};
