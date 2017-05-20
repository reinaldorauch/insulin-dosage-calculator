/* global module, math */

function Calculadora(math) {
  const calculadoraInst = {
    df: '', // private digestFormula
    cf: '', // private correctionFormula
    cg: 0, // private currentglicemy
    mc: 0, // private mealCount

    parseFormula: formulaText => math.compile(formulaText).eval(),

    set digestFormula(formulaText) {
      if (typeof formulaText !== 'string') {
        throw new Error('digestFormula must be a string');
      }

      if (!/^f\(.+/.test(formulaText)) {
        throw new Error('digestFormula must have a function');
      }

      if (!/^f\(mealCount\).+/.test(formulaText)) {
        throw new Error('digestFormula must have mealCount as argument and only it');
      }

      return (calculadoraInst.df = calculadoraInst.parseFormula(formulaText));
    },
    get digestFormula() {
      return calculadoraInst.df;
    },

    set correctionFormula(formulaText) {
      if (typeof formulaText !== 'string') {
        throw new Error('correctionFormula must be a string');
      }

      if (!/^f\(.+/.test(formulaText)) {
        throw new Error('correctionFormula must have a function');
      }

      if (!/^f\(currentGlicemy\).+/.test(formulaText)) {
        throw new Error('correctionFormula must have currentGlicemy as argument and only it');
      }

      return (calculadoraInst.cf = calculadoraInst.parseFormula(formulaText));
    },
    get correctionFormula() {
      return calculadoraInst.cf;
    },

    set currentGlicemy(value) {
      if (!Number.isInteger(value)) {
        throw new Error('Isn\'t a number');
      }

      return (calculadoraInst.cg = value);
    },
    get currentGlicemy() {
      return calculadoraInst.cg;
    },

    set mealCount(value) {
      if (!Number.isInteger(value)) {
        throw new Error('Isn\'t a number');
      }

      return (calculadoraInst.mc = value);
    },
    get mealCount() {
      return calculadoraInst.mc;
    },

    calculateInsulinDosage: () =>
      calculadoraInst.digestFormula(calculadoraInst.mealCount) +
        calculadoraInst.correctionFormula(calculadoraInst.currentGlicemy),
  };

  return calculadoraInst;
}

if (typeof module === 'object' && typeof module.exports.nodeName !== 'string') {
  module.exports = math => new Calculadora(math);
} else {
  /* eslint-disable */
  window.calculadora = new Calculadora(math);
  /* eslint-enable */
}

