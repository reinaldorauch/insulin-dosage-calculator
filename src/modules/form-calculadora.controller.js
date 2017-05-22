/* global angular */

((angular) => {
  const calculadoraModule = angular.module('calculadora');

  calculadoraModule.controller('FormCalculadoraController', FormCalculadoraController);

  FormCalculadoraController.$inject = ['calculadoraFactory'];

  function FormCalculadoraController(calculadoraFactory) {
    const vm = this;

    vm.mealCount = 0;
    vm.currentGlicemy = 0;
    vm.correctionFormula = '';
    vm.digestFormula = '';
    vm.insulinDosage = 'Not yet calculated';

    vm.calculateAction = calculateAction;

    function calculateAction() {
      /* eslint no-param-reassign: off */
      calculadoraFactory.mealCount = vm.mealCount;
      calculadoraFactory.currentGlicemy = vm.currentGlicemy;
      calculadoraFactory.correctionFormula = vm.correctionFormula;
      calculadoraFactory.digestFormula = vm.digestFormula;
      vm.insulinDosage = calculadoraFactory.calculateInsulinDosage();
    }
  }
})(angular);
