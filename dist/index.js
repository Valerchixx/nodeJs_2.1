"use strict";
// 1.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getFirstWord(a) {
    return a.split(/ +/)[0].length;
}
function getUserNamings(a) {
    return {
        fullname: a.name + " " + a.surname,
        initials: a.name[0] + "." + a.surname[0]
    };
}
function getAllProductNames(a) {
    var _a;
    return ((_a = a === null || a === void 0 ? void 0 : a.products) === null || _a === void 0 ? void 0 : _a.map(prod => prod === null || prod === void 0 ? void 0 : prod.name)) || [];
}
function hey(a) {
    return "hey! i'm " + a.name();
}
hey({ name: () => "roma", cuteness: 100 });
hey({ name: () => "vasya", coolness: 100 });
// 4.2
class Pet {
    constructor(names) {
        this.names = names;
    }
    name() {
        return this.names;
    }
}
class Cat extends Pet {
    constructor(names, vactination) {
        super(names);
        this.vactination = vactination;
    }
}
class Dog extends Pet {
    constructor(names, id) {
        super(names);
        this.id = id;
    }
}
function heyPet(abstractPet) {
    return "hey! i'm " + abstractPet.name();
}
let a = new Cat("myavchik", true);
let b = new Dog("gavchik", 333);
console.log(heyPet(b));
heyPet(a);
// 4.3
function heyCut(a) {
    return "hey! i'm " + a.name()
        + (a.type === "cat" ? (" cuteness: " + a.cuteness) : (" coolness: " + a.coolness));
}
heyCut({ name: () => "roma", type: "cat", cuteness: 100 });
heyCut({ name: () => "vasya", type: "dog", coolness: 100 });
// 5.
function stringEntries(a) {
    return Array.isArray(a) ? a : Object.keys(a);
}
stringEntries({ name: 'efk', ek: 88 });
// 6.
function world(a) {
    return __awaiter(this, void 0, void 0, function* () {
        return "*".repeat(a);
    });
}
const hello = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield world(10);
});
hello().then(r => console.log(r)).catch(e => console.log("fail"));
