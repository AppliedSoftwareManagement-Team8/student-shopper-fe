'use strict';

function ExampleDirective() {

  return {
    restrict: 'EA',
    scope: {
      title: '@',
      message: '@exampleDirective'
    },
    link: (scope, element) => {
      element.on('click', () => {
        window.alert('Changes are Saved ' + scope.message);
      });
    }
  };
}

export default {
  name: 'exampleDirective',
  fn: ExampleDirective
};
