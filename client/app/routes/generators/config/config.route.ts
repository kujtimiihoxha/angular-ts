module App.Routes.Generators {
    @Route("generators.config",{ 
        url:"/config",  
        templateUrl:"./views/routes/generators/config/config.template.html"
    })
    class ConfigRoute{
        constructor(){
        }
    }
}
