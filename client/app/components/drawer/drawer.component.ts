module App.Components {
    @Component('drawer',{
        templateUrl:'./views/components/drawer/drawer.template.html'
    })
    @Inject("MenuConstant")
    class DrawerComponent{
        constructor(private menuConstant:any){ }
       
    }
}
