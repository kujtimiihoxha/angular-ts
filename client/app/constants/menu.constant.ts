module App.Constants{
    export interface IMenuItem{
        state:string,
        name:string,
        order:number,
        children:IMenuItem[],
        addChild(child:IMenuItem):void
    }
    class MenuItem implements IMenuItem {
        state:string;
        name:string;
        order:number;
        children:App.Constants.IMenuItem[];

        constructor( state:string, name:string, order:number, children?:App.Constants.IMenuItem[]) {
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
    @Constant("MenuConstant")
    class MenuConstant{
        items: IMenuItem[]
        constructor(){
            this.items=[];
            this.items.push(new MenuItem('angularTypescript','Angular Typescript',1));
            this.items.push(new MenuItem('gettingStarted','Getting Started',2));
            this.items.push(new MenuItem('generators','Generators',3));
            this.items[0].addChild(new MenuItem('angularTypescript.quickStart','Quick Start',1));
            this.items[0].addChild(new MenuItem('angularTypescript.features','Features',1));
            this.items[1].addChild(new MenuItem('gettingStarted.install','Install',1));
            this.items[1].addChild(new MenuItem('gettingStarted.usage','Usage',2));
            this.items[2].addChild(new MenuItem('generators.app','App',1));
        }
    }
}
