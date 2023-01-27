// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property()
    Tipo_Enemigo:number = 0;

    direccion:number = null;
    timer:number = 0;

    onCollisionEnter(otherCollider,selfCollider){

        if(selfCollider.tag == 5){
           if (this.Tipo_Enemigo == 1 ){    
               this.direccion *= -1;
                this.node.scaleX *= -1;
            }
            else if(this.direccion == 1) this.direccion =2;
            else if(this.direccion == 2) this.direccion =1;
            else if(this.direccion == 3) this.direccion =4;
            else if(this.direccion == 4) this.direccion =3;
        }
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

       if(this.Tipo_Enemigo == 1) this.direccion = 1;
       else this.direccion = 1;

       this.node.getComponent(cc.Animation).play();

        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
    }

    start () {}

    update (dt) {

        if(this.Tipo_Enemigo == 1)  {
            if ( this.timer >= 2) {
               this.direccion *= -1;
               this.node.scaleX *= -1;
               this.timer = 0;
            }

            this.node.setPosition(this.node.position.x += 100*dt * this.direccion,this.node.position.y);
        }
        else {
            if ( this.timer >= 2) {
                this.direccion = Math.floor(Math.random() * 4 + 1); 
                this.timer = 0;
            }
            
            if (this.direccion == 1){
                this.node.scaleX = 1;
                this.node.setPosition(this.node.position.x += 80*dt * 1,this.node.position.y);

            }else if (this.direccion == 2) {
                this.node.scaleX = -1;
                this.node.setPosition(this.node.position.x += 80*dt * -1,this.node.position.y);

            }else if (this.direccion == 3) this.node.setPosition(this.node.position.x, this.node.position.y += 80*dt * 1);
            else if (this.direccion == 4) this.node.setPosition(this.node.position.x, this.node.position.y += 80*dt * -1);
        }

        this.timer += dt;
    }
}
