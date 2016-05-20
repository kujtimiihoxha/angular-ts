/**
 * @author    Kujtim Hoxha {@link http://kujtimhoxha.com}
 * @copyright Copyright (c) 2016, Kujtim Hoxha
 * @license   MIT
 */
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
