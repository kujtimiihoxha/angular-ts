/**
 * @author    Kujtim Hoxha {@link http://kujtimhoxha.com}
 * @copyright Copyright (c) 2016, Kujtim Hoxha
 * @license   MIT
 */
module App.Routes.Generators {
    @Route("generators.directive",{ 
        url:"/directive",  
        templateUrl:"./views/routes/generators/directive/directive.template.html"
    })
    class DirectiveRoute{
        constructor(){
        }
    }
}
