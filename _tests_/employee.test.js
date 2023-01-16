const Employee = require('../lib/employee');

const EmployeeName = 'Jack Dillan';
const EmployeeID = '234';
const EmployeeEmail = 'jackieD@helpful.com';

describe('Employee', () => {

  describe('In more detail', () => {
    it('Is an Object',() => {
      let object = new Employee();
      expect(typeof(object)).toBe('object');

    });
  });

  describe('getRole()', () => {
    it(`Is class name of Object`, () => {
      let person = new Employee(EmployeeName, EmployeeID, EmployeeEmail);
      expect(person.getRole()).toBe('Employee');
    });
  });

  describe('getName()', () => {
    it(`Creates key- name: 'input is value' accessed with person.name`, () => {
      let person = new Employee(EmployeeName, EmployeeID, EmployeeEmail);
      expect(person.getName()).toBe(EmployeeName);
      expect(person.name).toBe(EmployeeName);
    });
  });

  describe('getId()', () => {
    it(`Creates key- id: 'input is value' accessed with person.id`, () => {
      let person = new Employee(EmployeeName, EmployeeID, EmployeeEmail);
      expect(person.getId()).toBe(EmployeeID);
      expect(person.id).toBe(EmployeeID);
    });
  });

  describe('getEmail()', () => {
    it(`Creates key- email: 'input is value' accessed with person.email`, () => {
      let person = new Employee(EmployeeName, EmployeeID, EmployeeEmail);
      expect(person.getEmail()).toBe(EmployeeEmail);
      expect(person.email).toBe(EmployeeEmail);
    });
  });


})

