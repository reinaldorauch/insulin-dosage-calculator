/* global calculadora, document */
((calculadora, document, console) => {
  const $ = selector => document.querySelector(selector);

  const calcularButton = $('#calcular');
  const contagemField = $('#contagem');
  const currentGlicemyField = $('#glicemia');
  const digestaoFormulaField = $('#digestao');
  const correcaoFormulaField = $('#correcao');
  const resultadoSpan = $('#resultado');

  function calcularAction() {
    /* eslint no-param-reassign: off */
    try {
      calculadora.mealCount = Number(contagemField.value);
      calculadora.currentGlicemy = Number(currentGlicemyField.value);
      calculadora.digestFormula = digestaoFormulaField.value;
      calculadora.correctionFormula = correcaoFormulaField.value;

      resultadoSpan.innerText = calculadora.calculateInsulinDosage();
    } catch (e) {
      console.error(e);
      resultadoSpan.innerText = e.message;
    }
  }

  calcularButton.addEventListener('click', calcularAction);
})(calculadora, document, console);
