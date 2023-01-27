// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    MoverIzquierda:number = 0;
    MoverDerecha:number = 0;
    MoverArriba:number = 0;
    MoverAbajo:number = 0;

    ColisionDerecha:boolean = false;
    ColisionIzquierda:boolean = false;
    ColisionArriba:boolean = false;
    ColisionAbajo:boolean = false;

    Vidas:number;
    Morir:boolean;

    Primero:boolean;
    Segundo:boolean;
 
    MoverPlayer(event){
        switch(event.keyCode){
            case cc.macro.KEY.left:
                this.MoverIzquierda = 1;
                this.Primero = true;
                this.node.scaleX = -1;
                this.HacerAnimacion();
                break;
            case cc.macro.KEY.right:
                this.MoverDerecha = 1;
                this.Primero = true;
                this.node.scaleX = 1;
                this.HacerAnimacion();
                break;
            case cc.macro.KEY.up:
                this.MoverArriba = 1;
                this.Primero = true;
                this.HacerAnimacion();
                break;
            case cc.macro.KEY.down:
                this.MoverAbajo = 1;
                this.Primero = true;
                this.HacerAnimacion();
                break;
        }
    }

    PararPlayer(event){
        switch(event.keyCode){
            case cc.macro.KEY.left:
                this.MoverIzquierda = 0;
                this.node.getComponent(cc.Animation).stop();
                this.Segundo = true;
                break;
            case cc.macro.KEY.right:
                this.MoverDerecha = 0;
                this.node.getComponent(cc.Animation).stop();
                this.Segundo = true;
                break;
            case cc.macro.KEY.up:
                this.MoverArriba = 0;
                this.node.getComponent(cc.Animation).stop();
                this.Segundo = true;
                break;
            case cc.macro.KEY.down:
                this.MoverAbajo = 0;
                this.node.getComponent(cc.Animation).stop();
                this.Segundo = true;
                break;
        }
    }
 
    HacerAnimacion(){

        if(this.Primero == true && this.Segundo == true){
            this.node.getComponent(cc.Animation).play();
            this.Segundo = false;
        }
    }

    onCollisionEnter(otherCollider,selfCollider){

        if(otherCollider.tag == 0 ){
            this.ColisionDerecha = true;
        }

        if(otherCollider.tag == 1 ){
            this.ColisionIzquierda = true;
        }

        if(otherCollider.tag == 2 ){
            this.ColisionArriba = true;
        }

        if(otherCollider.tag == 3 ){
            this.ColisionAbajo = true;
        }

        if(otherCollider.tag == 5){
            this.Morir =true;
        }

        if(otherCollider.tag == 7){
            this.node.parent.getComponent('Game').GameWin();
        }
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.MoverPlayer,this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.PararPlayer,this);

        var manager = cc.director.getCollisionManager();
        manager.enabled = true;

        this.Vidas = 3;
        this.Morir = false;

        this.Primero = false;
        this.Segundo = true;
    }
 
    start () {}
 
    update (dt) {

        if(!this.ColisionIzquierda){
            if(this.MoverIzquierda == 1){
                this.node.setPosition(this.node.position.x -= 300*dt,this.node.position.y);
                this.ColisionDerecha = false;
            }
        }
        if(!this.ColisionDerecha){
            if(this.MoverDerecha == 1){
                this.node.setPosition(this.node.position.x += 300*dt,this.node.position.y);
                this.ColisionIzquierda = false;
            }
        }
        if(!this.ColisionArriba){
            if(this.MoverArriba == 1){
                this.node.setPosition(this.node.position.x,this.node.position.y += 300*dt);
                this.ColisionAbajo = false;
            }
        }
        if(!this.ColisionAbajo){
            if(this.MoverAbajo == 1){
                this.node.setPosition(this.node.position.x,this.node.position.y -= 300*dt);
                this.ColisionArriba = false;
            }
        }

        if(this.Morir){
            if (this.node.parent.getComponent("Game").Level == 1){
                this.node.setPosition(cc.v2 (0,94));
            }else if (this.node.parent.getComponent("Game").Level == 2){
                this.node.setPosition(cc.v2 (-10,70));
            }else this.node.setPosition(cc.v2 (-399.586,78.901));

            this.Vidas -= 1;
            this.Morir = false;
            this.node.parent.getComponent('Game').BajarPuntaje();
            this.node.parent.getComponent('Game').StringVidas();

            if(this.Vidas == 0){
                this.node.parent.getComponent('Game').GameOver();
            }
        }
    }
}
