module App.Routes.Generators {
    @Route("generators.service",{ 
        url:"/service",  
        templateUrl:"./views/routes/generators/service/service.template.html"
    })
    class ServiceRoute{
        constructor(){
        }
    }
}
