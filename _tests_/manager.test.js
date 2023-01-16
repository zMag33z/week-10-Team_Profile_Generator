const Manager = require('../lib/manager');

const ManagerName = 'Giles Etheridge';
const ManagerID = '133';
const ManagerEmail = 'scoop.GE@helpful.com';
const ManagerOffice = '01'


describe('Manager', () => {

  describe('In more detail', () => {
    it('Is an Object',() => {
      let object = new Manager();
      expect(typeof(object)).toBe('object');

    });
  });

  describe('getRole()', () => {
    it(`Is class name of Object`, () => {
      let person = new Manager(ManagerName, ManagerID, ManagerEmail, ManagerOffice);
      expect(person.getRole()).toBe('Manager');
    });
  });

  describe('getName()', () => {
    it(`Creates key- name: 'input is value' accessed with person.name`, () => {
      let person = new Manager(ManagerName, ManagerID,  ManagerEmail, ManagerOffice);
      expect(person.getName()).toBe(ManagerName);
      expect(person.name).toBe(ManagerName);
    });
  });

  describe('getId()', () => {
    it(`Creates key- id: 'input is value' accessed with person.id`, () => {
      let person = new Manager(ManagerName, ManagerID,  ManagerEmail, ManagerOffice);
      expect(person.getId()).toBe(ManagerID);
      expect(person.id).toBe(ManagerID);
    });
  });

  describe('getEmail()', () => {
    it(`Creates key- email: 'input is value' accessed with person.email`, () => {
      let person = new Manager(ManagerName, ManagerID, ManagerEmail, ManagerOffice);
      expect(person.getEmail()).toBe(ManagerEmail);
      expect(person.email).toBe(ManagerEmail);
    });
  });

  describe('getOfficeNumber()', () => {
    it(`Creates key- school: 'input is value' accessed with person.school`, () => {
      let person = new Manager(ManagerName, ManagerID, ManagerEmail, ManagerOffice);
      expect(person.getofficeNumber()).toBe(ManagerOffice);
      expect(person.officeNumber).toBe(ManagerOffice);
    });
  });
});