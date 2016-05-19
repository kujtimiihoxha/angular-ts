module App.Runs{
    import IRootScopeService = angular.IRootScopeService;
    @Run()
    @Inject("$rootScope","$timeout")
    class CoreRun{
        constructor(rootScope: IRootScopeService,timeout:any){
            rootScope.$on('$stateChangeSuccess',function(){
                $("html, body").animate({ scrollTop: 0 }, 100);
            })
        }
    }
}
