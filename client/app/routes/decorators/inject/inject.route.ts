module App.Routes.Decorators {
    @Route("decorators.inject",{ 
        url:"/inject",
        templateUrl:"./views/routes/decorators/inject/inject.template.html"
    })
    class InjectRoute{
        constructor(){
        }
    }
}
