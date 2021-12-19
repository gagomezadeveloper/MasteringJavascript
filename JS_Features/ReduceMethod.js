import faker from 'faker';

class NumberArrayBuilder {
    GetNumbers = (size) => {
        let result = [];

        for (let i = 1; i <= size; i++) {
            result.push(i);
        }

        return result;
    };
}

const numbers = new NumberArrayBuilder().GetNumbers(10);
let totalSum = numbers.reduce((r, n) => {
    return r + n;
}, 10);
//console.log(`Sum with reduce: ${numbers.join(', ')}: ${totalSum}`);

let evenNumbers = numbers.reduce((r, n, i) => {
    r = r ?? [];

    if (n % 2 === 0) {
        r.push(n);
    }

    return r;
}, []);
//console.log(`Even numbers with reduce: ${numbers} => ${evenNumbers}`);

const cars = [
    {
        make: 'audi',
        model: 'r8',
        year: '2012',
    },
    {
        make: 'audi',
        model: 'rs5',
        year: '2013',
    },
    {
        make: 'ford',
        model: 'mustang',
        year: '2012',
    },
    {
        make: 'ford',
        model: 'fusion',
        year: '2015',
    },
    {
        make: 'kia',
        model: 'optima',
        year: '2012',
    },
];

let group = cars.reduce((r, a) => {
    r[a.make] = [...(r[a.make] || []), a];
    return r;
}, {});

//console.log('groups', group);

class Grade {
    #subject = '';
    #grade = 0;

    constructor(subject, grade) {
        this.#subject = subject;
        this.#grade = grade;
    }

    set Info(p = { title: '', grade: 0 }) {
        let { title, grade } = { ...p };
        this.#subject = title;
        this.#grade = grade;
    }

    get Info() {
        return {
            subject: this.#subject,
            grade: this.#grade,
        };
    }

    get Grade() {
        switch (this.#grade) {
            case 0:
                return 'Very bad';

            case 1:
                return 'Bad';

            case 2:
                return 'Poor';

            case 3:
                return 'Good';

            case 4:
                return 'Excelent';

            case 5:
                return 'Awesome';

            default:
                break;
        }
    }

    set Grade(grade) {
        this.#grade = grade;
        return this.#grade;
    }

    get Subject() {
        return this.#subject;
    }
}
let c = 0,
    size = 10;
let grades = [];
while (c < size) {
    let grade = new Grade();
    grade.Info = {
        title: faker.commerce.color(),
        grade: faker.datatype.number({ max: 5, min: 0 }),
    };
    grades = [...grades, grade];
    c++;
}
console.log(
    'grades',
    grades.map((g) => g.Info)
);

let subjects = grades.reduce((groups, g) => {
    groups[`${g.Grade}`] = [...(groups[`${g.Grade}`] || []), g.Info];
    return groups;
}, {});
console.log('groups', subjects);

let groupsList = [];
Object.keys(subjects).forEach((k) => {
    let s = subjects[k];
    groupsList.push({
        grade: k,
        total: s.length,
    });
});
console.log(
    'Statistics',
    groupsList.sort((a, b) => a.total - b.total)
);
