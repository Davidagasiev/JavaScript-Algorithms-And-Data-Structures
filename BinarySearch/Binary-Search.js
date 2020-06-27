let binarySearch = (list, target) => {
	let left   = 0,
		right  = list.length - 1,
		middle = Math.floor((left + right) / 2);
	while (list[middle] !== target && left < right) {
	 	target < list[middle] ? right = --middle : left = ++middle;
	}
	return list[middle] !== target ? -1 : middle;
}
