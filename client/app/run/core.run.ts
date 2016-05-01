module App.Runs{
    @Run()
    @Inject("$timeout")
    class CoreRun{
        constructor($timeout:angular.ITimeoutService){
            $timeout(
                ()=>{
                    $.material.init();
                }
            )
        }
    }
}