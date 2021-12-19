export default class PrincipleDto {
    #name = '';
    #description = '';

    constructor(_name, _description) {
        this.#name = _name;
        this.#description = _description;
    }

    get Info() {
        return `\n\n${this.#name} => ${this.#description}`;
    }
}
