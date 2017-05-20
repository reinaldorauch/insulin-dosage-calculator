/* global module, calculadora, chai, describe, it */

const testSuite = (calculadora, chai, describe, it) => {
  const expect = chai.expect;
  // test code

  describe('Calculator', () => {
    describe('.mealCount', () => {
      it('should contain a initial numeric value', () => {
        expect(calculadora.mealCount).to.be.an('number');
      });

      it('should throw an error if a non numeric value is assigned', () => {
        try {
          calculadora.mealCount = 'FUCK';
        } catch (e) {
          expect(e).to.be.an('Error');
          return;
        }

        throw new Error('Didn\'t threw an error');
      });

      it('should not throw an error if a numeric value is assigned', () => {
        calculadora.mealCount = 10;
        expect(calculadora.mealCount).to.be.equals(10);
      });
    });

    describe('.currentGlicemy', () => {
      it('should contain a initial numeric value', () => {
        expect(calculadora.currentGlicemy).to.be.an('number');
      });

      it('should throw an error if a non numeric value is assigned', () => {
        try {
          calculadora.currentGlicemy = 'FUCK';
        } catch (e) {
          expect(e).to.be.an('Error');
          return;
        }

        throw new Error('Didn\'t threw an error');
      });

      it('should not throw an error if a numeric value is assigned', () => {
        calculadora.currentGlicemy = 10;
        expect(calculadora.currentGlicemy).to.be.equals(10);
      });
    });

    describe('.correctionFormula', () => {
      it('should have a string as initial value', () => {
        expect(calculadora.correctionFormula).to.be.a('string');
      });

      it('should accept "f(currentGlicemy)=currentGlicemy/50" as valid math function string for value without throwing execptions', () => {
        calculadora.correctionFormula = 'f(currentGlicemy)=currentGlicemy/50';
        expect(calculadora.correctionFormula).to.be.a('function');
      });

      it('should throw a Error if the value being assigned is not a string', () => {
        try {
          calculadora.correctionFormula = 10;
        } catch (e) {
          expect(e).to.be.an('Error');
          return;
        }

        throw new Error('Didn\'t threw an error');
      });

      it('should throw an Error if the math expression isn\'t a function', () => {
        try {
          calculadora.correctionFormula = '10*10';
        } catch (e) {
          expect(e).to.be.an('Error');
          return;
        }

        throw new Error('Didn\'t threw an error');
      });

      it('should throw an Error if the function does not contain currentGlicemy as argument', () => {
        try {
          calculadora.correctionFormula = 'f(x)=x';
        } catch (e) {
          expect(e).to.be.an('Error');
          return;
        }

        throw new Error('Didn\'t threw an error');
      });

      it('should throw an error if the function have more than one argument', () => {
        try {
          calculadora.correctionFormula = 'f(x, y) = x + y';
        } catch (e) {
          expect(e).to.be.an('Error');
          return;
        }

        throw new Error('Didn\'t threw an error');
      });
    });

    describe('.digestFormula', () => {
      it('should have a string as initial value', () => {
        expect(calculadora.digestFormula).to.be.a('string');
      });

      it('should accept "f(mealCount)=mealCount/15" as a valid math function string for value without throwing execptions', () => {
        calculadora.digestFormula = 'f(mealCount)=mealCount/15';
        expect(calculadora.digestFormula).to.be.a('function');
      });

      it('should throw a Error if the value being assigned is not a string', () => {
        try {
          calculadora.digestFormula = 10;
        } catch (e) {
          expect(e).to.be.an('Error');
          return;
        }

        throw new Error('Didn\'t threw an error');
      });

      it('should throw an Error if the math expression isn\'t a function', () => {
        try {
          calculadora.digestFormula = '10*10';
        } catch (e) {
          expect(e).to.be.an('Error');
          return;
        }

        throw new Error('Didn\'t threw an error');
      });

      it('should throw an Error if the function does not contain mealCount as argument', () => {
        try {
          calculadora.digestFormula = 'f(x)=x';
        } catch (e) {
          expect(e).to.be.an('Error');
          return;
        }

        throw new Error('Didn\'t threw an error');
      });

      it('should throw an error if the function have more than one argument', () => {
        try {
          calculadora.digestFormula = 'f(x, y) = x + y';
        } catch (e) {
          expect(e).to.be.an('Error');
          return;
        }

        throw new Error('Didn\'t threw an error');
      });
    });

    describe('.calculateInsulinDosage', () => {
      it('should calculate the insulin dosage with 150 as currentGlicemy, 90 for mealCount, f(currentGlicemy)=currentGlicemy/50 for correctionFormula and f(mealCount)=mealCount/15 for digestFormula to be equals 9', () => {
        calculadora.currentGlicemy = 150;
        calculadora.mealCount = 90;
        calculadora.correctionFormula = 'f(currentGlicemy)=currentGlicemy/50';
        calculadora.digestFormula = 'f(mealCount)=mealCount/15';
        expect(calculadora.calculateInsulinDosage()).to.be.equals(9);
      });
    });
  });
};

if (typeof module === 'object' && typeof module.exports.nodeName !== 'string') {
  /* eslint no-param-reassign: off */
  module.exports = (calculadora, chai) => testSuite(calculadora, chai, describe, it);
} else {
  testSuite(calculadora, chai, describe, it);
}

