// 1.

function getFirstWord(a:string): number {
	return a.split(/ +/)[0].length;
}


// 2.
interface userObject {
    name: string,
    surname: string

}
function getUserNamings(a:userObject) {
    return {
          fullname: a.name + " " + a.surname,
          initials: a.name[0] + "." + a.surname[0]
      };
}


// 3.
interface productObj {
    products: {name: string}[] | undefined,

}
function getAllProductNames(a:productObj) {
    return a?.products?.map(prod => prod?.name) || [];
}

// 4.1
interface heyObj {
    name: () => string; cuteness?: number; coolness?: number
}
function hey(a: heyObj) {
    return "hey! i'm " + a.name();
}
hey({name: () => "roma", cuteness: 100})
hey({name: () => "vasya", coolness: 100})

// 4.2
class Pet {
    names: string;
    constructor(names: string){
        this.names = names
    }
    name(){
        return this.names
    }
}

class Cat extends Pet{
    vactination: boolean;
    constructor( names: string, vactination: boolean){
        super(names)
        this.vactination = vactination
    }
}

class Dog extends Pet{
    id: number;
    constructor(names: string, id: number){
        super(names)
        this.id = id
    }
}
function heyPet(abstractPet: {name:() => string}) {
    return "hey! i'm " + abstractPet.name();
}
let a = new Cat("myavchik", true)
let b = new Dog("gavchik", 333)

heyPet(b)
heyPet(a)


// 4.3
function heyCut(a:{name: () => string, type: string, cuteness?: number, coolness?: number}) {
    return "hey! i'm " + a.name()
		 + (a.type === "cat" ? (" cuteness: "+a.cuteness) : (" coolness: "+a.coolness))
}
heyCut({name: () => "roma", type: "cat", cuteness: 100})
heyCut({name: () => "vasya", type: "dog", coolness: 100})



// 5.
function stringEntries(a: Record<string | number | symbol, any> | []) {
    return Array.isArray(a) ? a : Object.keys(a)
}
stringEntries({name: 'efk', ek: 88})


// 6.
async function world(a: number) {
    return "*".repeat(a)
}
const hello = async () => {
   return await world(10)
}
hello().then(r => console.log(r)).catch(e => console.log("fail"))