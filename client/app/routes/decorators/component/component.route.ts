/**
 * @author    Kujtim Hoxha {@link http://kujtimhoxha.com}
 * @copyright Copyright (c) 2016, Kujtim Hoxha
 * @license   MIT
 */
module App.Routes.Decorators {
    @Route("decorators.component",{ 
        url:"/component",  
        templateUrl:"./views/routes/decorators/component/component.template.html"
    })
    class ComponentRoute{
        constructor(){
        }
    }
}
