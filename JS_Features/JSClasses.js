class User {
    #password;

    constructor() {
        this.firstName = '';
        this.lastName = '';
        this.age = 0;
        this.skills = [];
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set bio(info) {
        let { age, skills } = { ...info };
        this.age = age;
        this.skills = skills ?? [];
    }

    get showBio() {
        return `My Bio => Age:${this.age}, Skills:${this.skills.join(', ')}`;
    }

    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
        this.#generatedPassword = `${this.firstName.toLowerCase()}123`;
        console.log(this.#generatedPassword);
    }

    get #generatedPassword() {
        return `🔐 ${this.#password} 🔐`;
    }

    set #generatedPassword(password) {
        this.#password = password;
    }
}

const GetFactorialNumber = (number) => {
    if (number === 0) {
        return 1;
    }
    return number * GetFactorialNumber(number - 1);
};

const gus = new User();
gus.fullName = 'Gustavo Gómez';
gus.bio = { age: 31, skills: ['C#', 'Javascript'] };
gus.showBio;
GetFactorialNumber(5);
