module Tests.Components {
  @App.Test(
    {
      modules: 'app',
      element: '<drawer></drawer>',
      parentScope: {
        //some parent scope values
      },
    }
  )
  class DrawerComponentTest{
    constructor(deps){
      it('some test', function () {
       //deps.element.isolateScope().vm is the component scope
      });
    }
  }
}
