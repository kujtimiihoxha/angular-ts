module App.Constants{
    export interface IMenuItem{
        icon:string,
        state:string,
        name:string,
        order:number,
        children:IMenuItem[],
        addChild(child:IMenuItem):void
    }
    class MenuItem implements IMenuItem {
        icon:string;
        state:string;
        name:string;
        order:number;
        children:App.Constants.IMenuItem[];

        constructor(icon:string, state:string, name:string, order:number, children?:App.Constants.IMenuItem[]) {
            this.icon = icon;
            this.state = state;
            this.name = name;
            this.order = order;
            if(angular.isDefined(children)) {
                this.children = children;
            } else {
                this.children = [];
            }
        }
        public addChild(child:IMenuItem):void{
            this.children.push(child);
        }
    }
    @Constant("Menu")
    class MenuConstant{
        items: IMenuItem[]
        constructor(){
            this.items=[];
            this.items.push(new MenuItem('fa fa-cubes','','App',2));
            this.items.push(new MenuItem('fa fa-cubes','app.gettingStarted','Getting Started',1));
            this.items[0].addChild(new MenuItem('fa fa-cubes','app.components','Component',1));
            this.items[0].addChild(new MenuItem('fa fa-wrench','app.config','Config',2));
            this.items[0].addChild(new MenuItem('fa fa-puzzle-piece','app.constants','Constant',3));
            this.items[0].addChild(new MenuItem('fa fa-code','app.directives','Directive',4));
            this.items[0].addChild(new MenuItem('fa fa-filter','app.filters','Filter',5));
            this.items[0].addChild(new MenuItem('fa fa-navicon','app.routes','Route',6));
            this.items[0].addChild(new MenuItem('fa fa-play','app.run','Run',7));
            this.items[0].addChild(new MenuItem('fa fa-industry','app.services','Service',8));
        }
    }
}
