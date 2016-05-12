module App.Routes {
    @Route("decorators",{
        url:'/decorators',
        abstract: true,   
        templateUrl:"./views/routes/decorators/decorators.template.html"
    })
    class DecoratorsRoute{
        constructor(){
        }
    }
}
