module App.Components {
    @Component('footer',{
        templateUrl:'./views/components/footer/footer.template.html'
    })    
    class FooterComponent{
        constructor(){
            console.log("footer component");
        }
    }
}
