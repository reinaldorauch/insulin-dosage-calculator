/* global angular, calculadora */
((angular, calculadora) => {
  const calculadoraModule = angular.module('calculadora', []);

  calculadoraModule.factory('calculadoraFactory', calculadoraFactory);

  function calculadoraFactory() {
    return calculadora;
  }
})(angular, calculadora);
