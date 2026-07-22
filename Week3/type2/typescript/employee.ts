interface Employee {
  id: number;
  name: string;
  role: string;
  salary: number;
  isPermanent: boolean;
}

const employee1: Employee = {
  id: 101,
  name: "Dhanu",
  role: "Frontend Developer",
  salary: 40000,
  isPermanent: true
};

const employee2: Employee = {
  id: 102,
  name: "Preethi",
  role: "Backened Developer",
  salary: 40000,
  isPermanent: false
};

const employee3: Employee = {
  id: 102,
  name: "Swetha",
  role: "Devops",
  salary: 40000,
  isPermanent: false
};

console.log(employee1);
console.log(employee2);
console.log(employee3);