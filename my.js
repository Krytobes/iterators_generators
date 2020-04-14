//Zadacha 3
let arr3 = [1, 2, 3];
console.log(arr3[Symbol.iterator]);

//Zadacha 8
let arr8 = [1, 2, 3, 4, 5, 6];

function *crIt8(){
	yield [1,2];
	yield [3,4];
	yield [5,6];
}

let it8 = crIt8();
for (let el8 of it8)
	console.log(el8);

//Zadacha 11
function *crIt11(obj){
	for (let k in obj)
		yield obj[k];
}

let obj11 = {
	a: '1',
	b: '2',
	c: '3',
};

let it11 = crIt11(obj11);
for (let el11 of it11)
	console.log(el11);

//Zadacha 12
let obj12 = {
	a: '4',
	b: '5',
	c: '6',
};

obj12[Symbol.iterator] = function *() {
	for (let k in this)
		yield this[k];
}

for (let el12 of obj12)
	console.log(el12);

//Zadacha 15
let map15 = new Map();

map15.set('a', 2);
map15.set('b', 3);

let memas = [...map15.keys()];
console.log(memas);

//Zadacha 17
let str17 = 'qwerty';
let ul1 = document.getElementById('ul1');

for (let el17 of str17){
	let li = document.createElement('li');
	li.innerHTML += el17;
	ul1.appendChild(li);
}

//Zadacha 20
let obj20 = {
	a: '11',
	b: '22',
	c: '33',
};

obj20 [Symbol.iterator] = function *() {
	for (let k in obj20)
		yield obj20[k];
}

let aaa = [...obj20];
console.log(aaa);

//Zadacha 23
let stroka = 'kolyan';

function str(s){
	let a = [...s].reverse();
	return a;
}

console.log(str(stroka));

//Zadacha 25
let but = document.getElementById('but');

let p = document.querySelectorAll('p');
let entries = p.entries();

but.addEventListener('click', () => {
	for(let [num, elem] of entries){
		elem.innerHTML += " (Порядковый номер: " + num + ')';
	}
});