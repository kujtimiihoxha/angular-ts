module App.Routes.Decorators {
    @Route("decorators.service",{ 
        url:"/service",  
        templateUrl:"./views/routes/decorators/service/service.template.html"
    })
    class ServiceRoute{
        constructor(){
        }
    }
}
