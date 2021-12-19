import PrincipleDto from './../Dto/PrincipleDto.js';

export const Info = new PrincipleDto(
    'The Dependency Inversion Principle',
    'The most flexible systems are those in which source code dependencies refer only to abstractions, not to concretions.'
);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Concretions
export const concretionResult = numbers.reduce((r, n) => {
    return r + n;
}, 0);

// Abstractions
const abstractFuncion = () => {
    return numbers.reduce((r, n) => r + n, 0);
};
export const abstractionResult = abstractFuncion();
