const Employee = require('../lib/employee');

// test('Employee.name to be given name', () => {
//     givenName = 'Calvin';

//     expect(employee.name).to
// })



describe("Employee", () => {
    describe("Employee.name", () => {
      it("should return a given name", () => {
        const givenName = 'Calvin';
  
        const result = new Employee(givenName);
  
        expect(result).toEqual('Calvin');
      });
    });

})