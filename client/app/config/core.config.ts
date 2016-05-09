/**
 * @author    Kujtim Hoxha {@link http://kujtimhoxha.com}
 * @copyright Copyright (c) 2016, Kujtim Hoxha
 * @license   MIT
 */
module App.Configs{
    @Config()
    @Inject("$urlRouterProvider")
    class CoreConfig{
        constructor($urlRouterProvider:any){
            $urlRouterProvider.otherwise("/angular-ts/quickStart");
        }
    }
}