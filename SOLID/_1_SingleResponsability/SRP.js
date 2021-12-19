import PrincipleDto from './../Dto/PrincipleDto.js';

export const Info = new PrincipleDto(
    'The Single Responsability Principle',
    'Each module should be responsible to one, and only one, actor'
);

//#region Bad Example

/*
    This class is not SRP because those three functions are responsible for three different actors.
*/

class Bad_Employee {
    #name = '';
    #pos = '';
    #hours = '';
    #role = '';

    constructor(name, pos, hours) {
        this.#name = name;
        this.#pos = pos;
        this.#hours = hours;
    }

    get CalculatePay() {} // For account deparment

    get ReportHours() {} // For Human resources department

    get Save() {} // For Database administrator
}

//#endregion

//#region Good Example

export class Employee {
    #name = '';
    #pos = '';
    #hours = '';
    #role = '';

    constructor(name, pos, hours, role) {
        this.#name = name;
        this.#pos = pos;
        this.#hours = hours;
        this.#role = role;
    }

    get Role() {
        return this.#role;
    }

    get HourValue() {
        return parseInt(this.#hours);
    }

    get Info() {
        return `Name: ${this.#name}, Position: ${this.#pos}, Hours: ${
            this.#hours
        }, Role: ${this.#role}`;
    }
}

export class PayCalculator {
    static #periodHours = 40;

    static CalculatePay(employee) {
        // One actor
        return `Weekly pay $${employee.HourValue * this.#periodHours}`;
    }
}

//#endregion
