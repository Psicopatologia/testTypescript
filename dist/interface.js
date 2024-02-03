"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let { name: userName, email: userLogin } = {
    name: "juan",
    age: 425,
    id: 142,
    email: "string@das.c",
};
const employee = {
    name: "juan",
    age: 425,
    id: 142,
    email: "string@das.c",
    salary: 10
};
let users = [
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
];
let result = users.filter(user => user.id > 200);
console.log(result);
//# sourceMappingURL=interface.js.map