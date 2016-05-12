module Tests.Components {
  @App.Test(
    {
      modules: 'app',
      element: '<header></header>',
      parentScope: {
        //some parent scope values
      },
    }
  )
  class HeaderComponentTest{
    constructor(deps){
      it('some test', function () {
       //deps.element.isolateScope().vm is the component scope
      });
    }
  }
}
