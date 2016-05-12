module App.Routes.Decorators {
    @Route("decorators.filter",{ 
        url:"/filter",  
        templateUrl:"./views/routes/decorators/filter/filter.template.html"
    })
    class FilterRoute{
        constructor(){
        }
    }
}
