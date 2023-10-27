
const Validate = require('../validate')

describe('Validate', () => {
    it('should return false', () => {
        const expectedResult = '123';
        const val = new Validate();
        const actualResult = val.isPassword('')
        expect(actualResult).toEqual(expectedResult);
    });
});


// describe('Validate', () => {
//     it('should return false for empty password', () => {
//       const val = new Validate();
//       const result = val.isPassword(''); 
//       expect(result).toEqual(false); 
//     });
//   });
  