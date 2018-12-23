const array = [1, 2 , 10, 16];

// map, filter, reduce

const mapArray = array.map(num => num * 2);

console.log('map', mapArray);
//filter

const filterArray = array.filter(num => num > 5);
console.log('filter', filterArray);

//reduce - sumira sve iz arreya plus broj koji je dodatak

const reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num
}, 5);
console.log('reduce', reduceArray);