// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    onCollisionEnter(otherCollider,selfCollider){

        if(otherCollider.tag == 1){
            
            this.node.parent.getComponent('Game').AgarrarCofre();
            this.node.destroy();
        }
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
    }

    start () {

    }

    // update (dt) {}

    onDestroy(){}
}
