class ClassWithPrivateAccessor {
    #message
    get #decoratedMessage() {
        return `${this.#message}`
    }
    set #decoratedMessage(msg) {
        this.#message = msg
    }
    constructor() {
        this.#decoratedMessage = 'hello world'
        console.log(this.#decoratedMessage)
    }
}
let Obj = new ClassWithPrivateAccessor();
