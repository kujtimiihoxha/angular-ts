/**
 * @author    Kujtim Hoxha {@link http://kujtimhoxha.com}
 * @copyright Copyright (c) 2016, Kujtim Hoxha
 * @license   MIT
 */
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
