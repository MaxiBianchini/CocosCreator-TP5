"use strict";
cc._RF.push(module, '6741eVv1ERBvpFPkgwSG89n', 'Game');
// Scripts/Game.ts

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
        _this.Player = null;
        _this.vida = null;
        _this.CantidadCofres = 0;
        _this.score = null;
        _this.FileTXT = null;
        _this.Level = 0;
        return _this;
    }
    NewClass.prototype.AgarrarCofre = function () {
        this.CantidadCofres -= 1;
        this.playerScore += 100;
        this.score.string = 'Puntaje: ' + this.playerScore.toString();
        if (this.CantidadCofres == 0)
            this.node.getComponentInChildren("Puerta").EncontraronElCofre();
    };
    NewClass.prototype.BajarPuntaje = function () {
        this.playerScore -= 50;
        if (this.playerScore < 0)
            this.playerScore = 0;
        this.score.string = 'Puntaje: ' + this.playerScore.toString();
    };
    NewClass.prototype.StringVidas = function () {
        this.playervidas = this.Player.getComponent('Player').Vidas;
        this.vida.string = 'Vidas: ' + this.playervidas.toString();
    };
    NewClass.prototype.GameOver = function () {
        this.FileTXT.text = this.playerScore.toString();
        //this.Player.stopAllActions();
        cc.director.loadScene('Game Over');
    };
    NewClass.prototype.GameWin = function () {
        if (this.CantidadCofres == 0) {
            this.FileTXT.text = this.playerScore.toString();
            if (this.Level == 1) {
                cc.director.loadScene('Level 2');
            }
            else if (this.Level == 2) {
                cc.director.loadScene('Game');
            }
            else {
                cc.director.loadScene('Game Win');
            }
        }
    };
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.playerScore = 0;
        this.playervidas = 0;
    };
    NewClass.prototype.start = function () { };
    NewClass.prototype.update = function (dt) { };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "Player", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "vida", void 0);
    __decorate([
        property()
    ], NewClass.prototype, "CantidadCofres", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "score", void 0);
    __decorate([
        property(cc.TextAsset)
    ], NewClass.prototype, "FileTXT", void 0);
    __decorate([
        property()
    ], NewClass.prototype, "Level", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();