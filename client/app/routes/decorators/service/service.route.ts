/**
 * @author    Kujtim Hoxha {@link http://kujtimhoxha.com}
 * @copyright Copyright (c) 2016, Kujtim Hoxha
 * @license   MIT
 */
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
