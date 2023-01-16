const Intern = require('../lib/intern');

const InternName = 'Giles Etheridge';
const InternID = '568';
const InternEmail = 'scoop.GE@helpful.com';
const InternSchool = 'A&M-CC'


describe('Intern', () => {

  describe('In more detail', () => {
    it('Is an Object',() => {
      let object = new Intern();
      expect(typeof(object)).toBe('object');

    });
  });

  describe('getRole()', () => {
    it(`Is class name of Object`, () => {
      let person = new Intern(InternName, InternID, InternEmail, InternSchool);
      expect(person.getRole()).toBe('Intern');
    });
  });

  describe('getName()', () => {
    it(`Creates key- name: 'input is value' accessed with person.name`, () => {
      let person = new Intern(InternName, InternID,  InternEmail, InternSchool);
      expect(person.getName()).toBe(InternName);
      expect(person.name).toBe(InternName);
    });
  });

  describe('getId()', () => {
    it(`Creates key- id: 'input is value' accessed with person.id`, () => {
      let person = new Intern(InternName, InternID,  InternEmail, InternSchool);
      expect(person.getId()).toBe(InternID);
      expect(person.id).toBe(InternID);
    });
  });

  describe('getEmail()', () => {
    it(`Creates key- email: 'input is value' accessed with person.email`, () => {
      let person = new Intern(InternName, InternID, InternEmail, InternSchool);
      expect(person.getEmail()).toBe(InternEmail);
      expect(person.email).toBe(InternEmail);
    });
  });

  describe('getSchool()', () => {
    it(`Creates key- school: 'input is value' accessed with person.school`, () => {
      let person = new Intern(InternName, InternID, InternEmail, InternSchool);
      expect(person.getSchool()).toBe(InternSchool);
      expect(person.school).toBe(InternSchool);
    });
  });
});