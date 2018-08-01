console.log('Quick Sort!');


const quickSort = (arr) => {
	if (arr.length <= 1) {
		return arr;
	};

	let left = [];
	let right = [];
	let pivot = arr[arr.length - 1];

	for (let i = 0, len = arr.length - 1; i < len; i ++) {
		if (arr[i] <= pivot) {
			left.push(arr[i]);
		}
		else {
			right.push(arr[i]);
		};
	};
	return [...quickSort(left),pivot,...quickSort(right)];
};


console.log(quickSort([7, 3, 0, 9, 2, 1, 5, 7]));

