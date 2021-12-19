import PrincipleDto from './../Dto/PrincipleDto.js';

export const Info = new PrincipleDto(
    'The Open-Closed Principle',
    'Software entities (classes, modules, functions, and so on) should be open for extension, but closed for modification'
);

//#region Example

let allowedRoles = ['ceo', 'cto', 'cfo', 'staff'];

class CheckPrivilegeBool {
    static checkPrivilege(employee) {
        if (allowedRoles.includes(employee.Role)) {
            // employee has privilege
            return true;
        }
        return false;
    }
}

class CheckPrivilegeString {
    static checkPrivilege(employee) {
        if (allowedRoles.includes(employee.Role)) {
            // employee has privilege
            return 'Employee has privilege';
        }
        return 'Employee has not privilege';
    }
}

export class CheckPrivilege extends CheckPrivilegeString {
    static checkPrivilege(employeeRole) {
        if (allowedRoles.includes(employeeRole)) {
            // employee has privilege
            return true;
        }
        return false;
    }
}

export const addRole = (role) => {
    allowedRoles.push(role);
};

/*
    In C# you can use abstract classes in order to override a methods
   
    Abstract class: is a restricted class that cannot be used to create objects 
    (to access it, it must be inherited from another class).

    Abstract method: can only be used in an abstract class, and it does not have a body. 
    The body is provided by the derived class (inherited from).

    abstract class Animal //
    {
        public abstract void animalSound();
        public void sleep() 
        {
            Console.WriteLine("Zzz");
        }
    }

    ' Derived class (inherit from Animal)
    class Pig : Animal
    {
        public override void animalSound()
        {
            ' The body of animalSound() is provided here
            Console.WriteLine("The pig says: wee wee");
        }
    }

*/
//#endregion
