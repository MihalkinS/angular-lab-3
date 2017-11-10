export class Employee {
    constructor(public id: number = -1,
                public surName: string = "",
                public name: string = "",
                public patronymic: string = "",
                public dob: string ="",
                public address: string ="",
                public phone: string ="",
                public email: string ="",
                public position: string ="",
                public salary: number = 0) {}
}