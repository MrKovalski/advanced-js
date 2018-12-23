/*//var odgovor = 3+3==6? "apsolutno":"ma kakvi";


//let + const


let wizardLevel = false;

if (experience > 90){
	let wizardLevel = true; 
	console.log('inside', wizardLevel);
}
console.log('outside', wizardLevel);

// Destructor

const obj = {
	player: 'bobby',
	experience: 100
}



const {player, experience} = obj;

//Object properties


const obj = {
	[1 + 3]:"macka"
	[john snow]: "son of a someone"
}

//Template strings
const name = "koval"
const greeting = `Hello ${name} you sem to be ${age=24}.` // "''" can be used

// Symbol

// var sym1 = Symbol('');
// var sym2 = symbol('foo');

// Arrow function

const add = (a, b) => a+b;
*/
//advanced functions

const first = () => {
	const greet = 'Hi';
	const second = () => {
		alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();

//Closures -  a function ran. the funcion executed
//BUT its going to remember that there are no references to those variables
//so the child scope always has access to parent scope

//Currying

const multiply = (a, b) => a*b;
const curriedMultiply = (a) => (b) => a*b;
const by5 = curriedMultiply(5);

const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5);