import { employees } from '../shared/init-data';

import { Employee } from '../shared/employee';

export class DataService {

    private employees: Employee[] = employees;

    getData(): Employee[] {
       return this.employees; 
    }

    addEmployee(employee: Employee) {
        this.employees.push(employee);
    }

    deleteEmployee(employee: Employee) {
        let index: number = this.employees.indexOf(employee);

        if(index > -1)
        {
            this.employees.splice(index, 1);
        }
    }
    
    editEmployee(employee: Employee) {
        for (var i = 0; i < this.employees.length; i++) {
            if(this.employees[i].id == employee.id) {
                this.employees[i].surName = employee.surName;
                this.employees[i].name = employee.name;
                this.employees[i].patronymic = employee.patronymic;
                this.employees[i].dob = employee.dob;
                this.employees[i].address = employee.address;
                this.employees[i].phone = employee.phone;
                this.employees[i].email = employee.email;
                this.employees[i].position = employee.position;
                this.employees[i].salary = employee.salary;

                break;
            }            
        }
    }
}