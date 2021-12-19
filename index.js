import * as SRP from './SOLID/_1_SingleResponsability/SRP.js';
import * as OCP from './SOLID/_2_OpenClosed/OCP.js';
import * as LSP from './SOLID/_3_LisvokSubstitution/LSP.js';
import * as ISP from './SOLID/_4_InterfaceSegregation/ISP.js';
import * as DIP from './SOLID/_5_DependencyInversion/DIP.js';

//#region Single Responsability Principle
console.log(SRP.Info);
let newEmployee = new SRP.Employee(
    'Gustavo Gómez',
    'Developer',
    25,
    'developer'
);
console.log(
    `Payment for [${newEmployee.Info}]: ${SRP.PayCalculator.CalculatePay(
        newEmployee
    )}`
);

//#endregion

//#region Single Responsability Principle
console.log('newEmployee', newEmployee);
console.log(OCP.Info.Info);
console.log(`Is allowed: ${OCP.CheckPrivilege.checkPrivilege(newEmployee)}`);
console.log(`Add role "developer"`);
OCP.addRole('developer');
console.log(`Is allowed: ${OCP.CheckPrivilege.checkPrivilege(newEmployee)}`);
//#endregion

//#region Lisvok Sustitution Principle
console.log(LSP.Info.Info);
let rectangle = new LSP.Rectangle({ height: 3, width: 2, name: 'Rectangle' });
let square = new LSP.Square({ side: 3, name: 'Square' });
console.log(`${rectangle.GetArea()}`);
console.log(`${square.GetArea()}`);
//#endregion

//#region Interface Segregation Principle
console.log(ISP.Info.Info);

//#endregion

//#region Dependency Inversion Principle
console.log(DIP.Info.Info);
console.log(`Concretion: ${DIP.concretionResult}`);
console.log(`Abstraction: ${DIP.abstractionResult}`);
//#endregion
