export default function getNeighborhoodsList() {
	const sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

	const self = this;
	const addNeighborhood = (newNeighborhood) => {
		sanFranciscoNeighborhoods.push(newNeighborhood);
		return sanFranciscoNeighborhoods;
		};

	return {
		sanFranciscoNeighborhoods,
		addNeighborhood
	};
}
