module App.Routes {
    @Route("generators",{
        url:'/generators',
        abstract: true,   
        templateUrl:"./views/routes/generators/generators.template.html"
    })
    class GeneratorsRoute{
        constructor(){
        }
    }
}
