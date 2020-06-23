function binary_Search (list, item) {
	let start = 0,
		last  = list.length - 1,
		middleIndex = Math.floor((start + last) / 2);
	while (list[middleIndex] != item && start < last) {
		if (item < list[middleIndex]) {
			last = middleIndex -1;
		} else if(item > list[middleIndex]){
			start = middleIndex + 1;
		}
		middleIndex = Math.floor((start + last) / 2);
	}
	return list[middleIndex] != item ? -1 : middleIndex;
}