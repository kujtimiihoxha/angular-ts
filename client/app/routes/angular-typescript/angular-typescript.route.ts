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
