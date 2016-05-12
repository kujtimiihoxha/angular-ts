module App.Routes {
    @Route("gettingStarted",{
        url: '/getting-started',
        abstract: true,
        templateUrl:"./views/routes/getting-started/getting-started.template.html"
    })
    class GettingStartedRoute{
        constructor(){
        }
    }
}
