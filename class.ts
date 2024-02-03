import { Login, User } from "./interface"

interface Address {
    street: string,
    city: string,
    state: string,
    pin: string,
}

class Employee implements Login {
    #id: number;
    name: string;
    protected address: Address;

    constructor(id: number, name: string, address: Address) {
        this.#id = id;
        this.name = name;
        this.address = address;
    }

    login(): User {
        return {
            name: "juan",
            age: 425,
            id: 142,
            email: "string@das.c",
        }
    }

    getNameWithAddress(): string {
        return `${this.name} stays at ${this.address}`;
    }

    get empId(): number {
        return this.#id;
    }

    set empId(id: number) {
        this.#id = id;
    }

    static getEmployeesCount(): number {
        return 50;
    }
}

let john = new Employee(1232, "john", {
    street: "stringdas",
    city: "string dc",
    state: "string s",
    pin: "string d",
});

john.empId = 1000;
console.log(john.login());

console.log(john.getNameWithAddress());

class Manager extends Employee {
    constructor(id: number, name: string, address: Address) {
        super(id, name, address)
    }
}