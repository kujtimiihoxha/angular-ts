module App.Directives{
    @Directive("scroll-to-id",{
        restrict: 'A'
    })
    class ScrollToIdDirective{
        static link(scope:ng.IScope, element:ng.IRootElementService, attrs:any) {
                element.on('click',()=>{
                    $('html, body').animate({
                        scrollTop: $(`#${attrs.scrollToId}`).offset().top
                    }, 1000);
                });
            element.css({cursor:'pointer'})

        }
        
    }
}
