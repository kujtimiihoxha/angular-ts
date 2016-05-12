module App.Directives{
    @Directive("prism",{
        restrict: 'A',
        template:"<code></code>",
        scope: {
            source: '@'
        },
    })
    @Inject("$compile","$timeout")
    class PrismDirective{
        constructor(private compile: any,private timeout:any){
        }

        static link(scope:any, element:any, attrs:any,controller:any, transclude:any) {
            scope.$watch('source', function(v:any) {
                if(attrs.class === "language-json"){
                    element.find("code").html(JSON.stringify(JSON.parse(v),null,2));
                }
                else if(attrs.class === "language-markup"){
                    v.match(/(<([^>]+)>)/ig).forEach((element:any)=>{
                        v= v.replace(element,element.replace('<','&lt;'));
                    });
                    element.find("code").html(v);
                }
                else{

                    element.find("code").html(v);
                }
                Prism.highlightElement(element.find("code")[0]);
            });

        }
    }
}