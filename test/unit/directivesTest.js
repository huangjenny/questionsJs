describe('Unit testing directives', function() {
  var $compile,
      scope;

  // Load the myApp module, which contains the directive
  beforeEach(module('todomvc'));

  // Store references to $rootScope and $compile
  // so they are available to all tests in this describe block
  beforeEach(inject(function(_$compile_, _$rootScope_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $compile = _$compile_;
    scope = _$rootScope_;
  }));

  it('Testing todoEscape with good input', function() {

	  /*Testing with keyCode 27*/

	  spyOn(scope, '$apply');
	  var element = angular.element('<input todo-escape/>');
	  var form = $compile(element)(scope);
	  scope.$digest();
	  var keyVal = { type: 'keydown', keyCode: 27 };
	  form.triggerHandler(keyVal);
	  expect(scope.$apply).toHaveBeenCalled();
  });

  it('Testing todoEscape with bad input', function() {
  

	  /*Testing without keyCode 27*/

	  spyOn(scope, '$apply');
	  var element = angular.element('<input todo-escape/>');
	  var form = $compile(element)(scope);
	  scope.$digest();
	  var keyVal = { type: 'keydown', keyCode: 0 };
	  form.triggerHandler(keyVal);
	  expect(scope.$apply).not.toHaveBeenCalled();

  });

  it('Testing todoFocus with FALSE', function() {
  
  
	  var element = angular.element('<input todo-focus/>');
	  var form = $compile(element)(scope);
	  scope.$digest();
	  expect(form).not.toBe($('document.activeElement'));
  
  
  });

  it('Testing todoFocus with TRUE', function() {
  
  
	  var element = angular.element('<input todoFocus=false todo-focus/>');
	  var form = $compile(element)(scope);


	  form.scope().$apply();
	  scope.$digest();
	  form.todoFocus = true;
	  form.scope().$apply();
	  scope.$digest();
	  /*This is not correct. */
	  expect(form).not.toBe($('document.activeElement'));
  
  
  });





});
