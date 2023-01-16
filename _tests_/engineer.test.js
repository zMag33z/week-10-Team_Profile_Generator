const Engineer = require('../lib/engineer');

const EngineerName = 'Giles Etheridge';
const EngineerID = '568';
const EngineerDepartment = 'Front-End Dept';
const EngineerEmail = 'scoop.GE@helpful.com';
const EngineerGitHub = 'GEScoop';

describe('Engineer', () => {

  describe('In more detail', () => {
    it('Is an Object',() => {
      let object = new Engineer();
      expect(typeof(object)).toBe('object');

    });
  });

  describe('getRole()', () => {
    it(`Is class name of Object`, () => {
      let person = new Engineer(EngineerName, EngineerID, EngineerDepartment, EngineerEmail, EngineerGitHub);
      expect(person.getRole()).toBe('Engineer');
    });
  });

  describe('getName()', () => {
    it(`Creates key- name: 'input is value' accessed with person.name`, () => {
      let person = new Engineer(EngineerName, EngineerID, EngineerDepartment, EngineerEmail, EngineerGitHub);
      expect(person.getName()).toBe(EngineerName);
      expect(person.name).toBe(EngineerName);
    });
  });

  describe('getId()', () => {
    it(`Creates key- id: 'input is value' accessed with person.id`, () => {
      let person = new Engineer(EngineerName, EngineerID, EngineerDepartment, EngineerEmail, EngineerGitHub);
      expect(person.getId()).toBe(EngineerID);
      expect(person.id).toBe(EngineerID);
    });
  });

  describe('getDepartment()', () => {
    it(`Creates key- department: 'input is value' accessed with person.department`, () => {
      let person = new Engineer(EngineerName, EngineerID, EngineerDepartment, EngineerEmail, EngineerGitHub);
      expect(person.getDepartment()).toBe(EngineerDepartment);
      expect(person.department).toBe(EngineerDepartment);
    });
  });

  describe('getEmail()', () => {
    it(`Creates key- email: 'input is value' accessed with person.email`, () => {
      let person = new Engineer(EngineerName, EngineerID, EngineerDepartment, EngineerEmail, EngineerGitHub);
      expect(person.getEmail()).toBe(EngineerEmail);
      expect(person.email).toBe(EngineerEmail);
    });
  });

  describe('getGitHubProfile()', () => {
    it(`Creates key- gitHub: 'input is value' accessed with person.gitHub`, () => {
      let person = new Engineer(EngineerName, EngineerID, EngineerDepartment, EngineerEmail, EngineerGitHub);
      expect(person.getGitHubProfile()).toBe(EngineerGitHub);
      expect(person.gitHub).toBe(EngineerGitHub);
    });
  });
});