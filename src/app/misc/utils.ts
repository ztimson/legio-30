export function shuffle(arr: any[]) {
	arr.forEach((val, i) => {
		const i2 = ~~(Math.random() * (i + 1));
		[arr[i], arr[i2]] = [arr[i2], arr[i]];
	})
	return arr;
}
