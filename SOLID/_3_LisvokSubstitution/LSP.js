import PrincipleDto from './../Dto/PrincipleDto.js';

export const Info = new PrincipleDto(
    'The Liskov Substitution Principle',
    'This principle says that to build software systems from interchangeable parts, those parts must adhere to a contract that allows those parts to be substituted one for another.'
);

export class Rectangle {
    #height;
    #width;
    #name;

    constructor(p = { height: 0, width: 0, name: '' }) {
        const { height, width, name } = { ...p };
        this.Height = height;
        this.Width = width;
        this.Name = name;
    }

    set Name(value) {
        this.#name = value;
    }

    set Height(value) {
        this.#height = value;
    }

    set Width(value) {
        this.#width = value;
    }

    GetArea = () => {
        let a = this.#height * this.#width;
        return `${this.#name}[${this.#width},${this.#height}]: ${a}`;
    };
}

export class Square extends Rectangle {
    constructor(p = { side: 0, name: '' }) {
        const { side, name } = { ...p };
        super();
        super.Height = side;
        super.Width = side;
        super.Name = name;
    }
}
