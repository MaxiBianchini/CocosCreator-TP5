// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    Player: cc.Node = null;

    @property(cc.Label)
    vida:cc.Label = null;

    @property()
    CantidadCofres:number = 0;

    @property(cc.Label)
    score:cc.Label = null;

    @property(cc.TextAsset)
    FileTXT:cc.TextAsset = null;

    @property()
    Level:number = 0;

    playervidas:number;
    playerScore:number;
    

    AgarrarCofre(){

       this.CantidadCofres -= 1;

       this.playerScore += 100;
       this.score.string = 'Puntaje: '+ this.playerScore.toString();

       if(this.CantidadCofres == 0) this.node.getComponentInChildren("Puerta").EncontraronElCofre();
    }

    BajarPuntaje(){

        this.playerScore -= 50;
        if (this.playerScore < 0) this.playerScore = 0;
        this.score.string = 'Puntaje: '+ this.playerScore.toString();
    }

    StringVidas(){

        this.playervidas = this.Player.getComponent('Player').Vidas;
        this.vida.string = 'Vidas: '+ this.playervidas.toString();
    }

    GameOver(){

        this.FileTXT.text =  this.playerScore.toString();
        //this.Player.stopAllActions();
        cc.director.loadScene('Game Over');
    }

    GameWin(){
        if(this.CantidadCofres == 0){
            this.FileTXT.text =  this.playerScore.toString();
            if (this.Level == 1){
                cc.director.loadScene('Level 2');
            }else if (this.Level == 2){
                cc.director.loadScene('Game');
            }else {
                cc.director.loadScene('Game Win');
            }
            
        }
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        var manager = cc.director.getCollisionManager();
        manager.enabled = true;

        this.playerScore = 0;
        this.playervidas = 0;
    }

    start () {}

    update (dt) {}
}
