//inheritence issue with static method

class Base {
    static #privateStaticMethod() {
        return 42;
    }
    static publicStaticMethod1() {
        return Base.#privateStaticMethod();
    }
    static publicStaticMethod2() {
        return this.#privateStaticMethod();
    }
}
class Derived extends Base { }
console.log(Derived.publicStaticMethod1());// 42
console.log(Derived.publicStaticMethod2());// TypeError: here when publicStaticMethod2 is being called as derived don't have this it goes to
// the parent which has the method and now when the method is invoking the using "this." this will still refer to derived class hence we get type error.
