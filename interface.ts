export interface User {
    name: string;
    age: number;
    id: number;
    email?: string;
}

let { name: userName, email: userLogin }: User = {
    name: "juan",
    age: 425,
    id: 142,
    email: "string@das.c",
}

interface Employees extends User {
    salary: number,
}

const employee: Employees = {
    name: "juan",
    age: 425,
    id: 142,
    email: "string@das.c",
    salary: 10
}

export interface Login {
    login(): User;
}

let users: User[] = [
    {
        name: "juan",
        age: 425,
        id: 142,
        email: "string@das.c",
    },
    {
        name: "pedro",
        age: 13,
        id: 312,
        email: "312312@das.c",
    }
]

let result = users.filter(user => user.id > 200);
console.log(result);
