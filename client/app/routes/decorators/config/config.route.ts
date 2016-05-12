module App.Routes.Decorators {
    @Route("decorators.config",{ 
        url:"/config",  
        templateUrl:"./views/routes/decorators/config/config.template.html"
    })
    class ConfigRoute{
        constructor(){
        }
    }
}
