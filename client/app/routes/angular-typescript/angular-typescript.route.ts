/**
 * @author    Kujtim Hoxha {@link http://kujtimhoxha.com}
 * @copyright Copyright (c) 2016, Kujtim Hoxha
 * @license   MIT
 */
module App.Routes {
    @Route("angularTypescript",{
        url:'/angular-ts',
        abstract: true,   
        templateUrl:"./views/routes/angular-typescript/angular-typescript.template.html"
    })
    class AngularTypescriptRoute{
        constructor(){
        }
    }
}
