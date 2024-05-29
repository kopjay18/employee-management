export class Employee {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    birthDate: Date;
    basicSalary: number;
    status: string;
    group: string;
    description: Date;

    constructor() {
        this.username = '';
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.birthDate = new Date();
        this.basicSalary = 0;
        this.status = '';
        this.group = '';
        this.description = new Date();
    }
}
