"use strict";
cc._RF.push(module, '2ea0adAzElP54bMEzBPQijl', 'Player');
// Scripts/Player.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.MoverIzquierda = 0;
        _this.MoverDerecha = 0;
        _this.MoverArriba = 0;
        _this.MoverAbajo = 0;
        _this.ColisionDerecha = false;
        _this.ColisionIzquierda = false;
        _this.ColisionArriba = false;
        _this.ColisionAbajo = false;
        return _this;
    }
    NewClass.prototype.MoverPlayer = function (event) {
        switch (event.keyCode) {
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
    };
    NewClass.prototype.PararPlayer = function (event) {
        switch (event.keyCode) {
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
    };
    NewClass.prototype.HacerAnimacion = function () {
        if (this.Primero == true && this.Segundo == true) {
            this.node.getComponent(cc.Animation).play();
            this.Segundo = false;
        }
    };
    NewClass.prototype.onCollisionEnter = function (otherCollider, selfCollider) {
        if (otherCollider.tag == 0) {
            this.ColisionDerecha = true;
        }
        if (otherCollider.tag == 1) {
            this.ColisionIzquierda = true;
        }
        if (otherCollider.tag == 2) {
            this.ColisionArriba = true;
        }
        if (otherCollider.tag == 3) {
            this.ColisionAbajo = true;
        }
        if (otherCollider.tag == 5) {
            this.Morir = true;
        }
        if (otherCollider.tag == 7) {
            this.node.parent.getComponent('Game').GameWin();
        }
    };
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.MoverPlayer, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.PararPlayer, this);
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.Vidas = 3;
        this.Morir = false;
        this.Primero = false;
        this.Segundo = true;
    };
    NewClass.prototype.start = function () { };
    NewClass.prototype.update = function (dt) {
        if (!this.ColisionIzquierda) {
            if (this.MoverIzquierda == 1) {
                this.node.setPosition(this.node.position.x -= 300 * dt, this.node.position.y);
                this.ColisionDerecha = false;
            }
        }
        if (!this.ColisionDerecha) {
            if (this.MoverDerecha == 1) {
                this.node.setPosition(this.node.position.x += 300 * dt, this.node.position.y);
                this.ColisionIzquierda = false;
            }
        }
        if (!this.ColisionArriba) {
            if (this.MoverArriba == 1) {
                this.node.setPosition(this.node.position.x, this.node.position.y += 300 * dt);
                this.ColisionAbajo = false;
            }
        }
        if (!this.ColisionAbajo) {
            if (this.MoverAbajo == 1) {
                this.node.setPosition(this.node.position.x, this.node.position.y -= 300 * dt);
                this.ColisionArriba = false;
            }
        }
        if (this.Morir) {
            if (this.node.parent.getComponent("Game").Level == 1) {
                this.node.setPosition(cc.v2(0, 94));
            }
            else if (this.node.parent.getComponent("Game").Level == 2) {
                this.node.setPosition(cc.v2(-10, 70));
            }
            else
                this.node.setPosition(cc.v2(-399.586, 78.901));
            this.Vidas -= 1;
            this.Morir = false;
            this.node.parent.getComponent('Game').BajarPuntaje();
            this.node.parent.getComponent('Game').StringVidas();
            if (this.Vidas == 0) {
                this.node.parent.getComponent('Game').GameOver();
            }
        }
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();