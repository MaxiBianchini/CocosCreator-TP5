
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWtGQztRQS9FRyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsb0JBQWMsR0FBVSxDQUFDLENBQUM7UUFHMUIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixhQUFPLEdBQWdCLElBQUksQ0FBQztRQUc1QixXQUFLLEdBQVUsQ0FBQyxDQUFDOztJQWdFckIsQ0FBQztJQTFERywrQkFBWSxHQUFaO1FBRUcsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLENBQUM7UUFFekIsSUFBSSxDQUFDLFdBQVcsSUFBSSxHQUFHLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsV0FBVyxHQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFN0QsSUFBRyxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUM7WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDaEcsQ0FBQztJQUVELCtCQUFZLEdBQVo7UUFFSSxJQUFJLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQztZQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFdBQVcsR0FBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pFLENBQUM7SUFFRCw4QkFBVyxHQUFYO1FBRUksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxHQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDOUQsQ0FBQztJQUVELDJCQUFRLEdBQVI7UUFFSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pELCtCQUErQjtRQUMvQixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsMEJBQU8sR0FBUDtRQUNJLElBQUcsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLEVBQUM7WUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNqRCxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxFQUFDO2dCQUNoQixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNwQztpQkFBSyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxFQUFDO2dCQUN0QixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNqQztpQkFBSztnQkFDRixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUNyQztTQUVKO0lBQ0wsQ0FBQztJQUVELHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO1FBRUksSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ2hELE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBRXZCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCx3QkFBSyxHQUFMLGNBQVUsQ0FBQztJQUVYLHlCQUFNLEdBQU4sVUFBUSxFQUFFLElBQUcsQ0FBQztJQTlFZDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MENBQ0U7SUFHckI7UUFEQyxRQUFRLEVBQUU7b0RBQ2U7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDRztJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzZDQUNLO0lBRzVCO1FBREMsUUFBUSxFQUFFOzJDQUNNO0lBbEJBLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FrRjVCO0lBQUQsZUFBQztDQWxGRCxBQWtGQyxDQWxGcUMsRUFBRSxDQUFDLFNBQVMsR0FrRmpEO2tCQWxGb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgUGxheWVyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB2aWRhOmNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoKVxyXG4gICAgQ2FudGlkYWRDb2ZyZXM6bnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBzY29yZTpjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlRleHRBc3NldClcclxuICAgIEZpbGVUWFQ6Y2MuVGV4dEFzc2V0ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoKVxyXG4gICAgTGV2ZWw6bnVtYmVyID0gMDtcclxuXHJcbiAgICBwbGF5ZXJ2aWRhczpudW1iZXI7XHJcbiAgICBwbGF5ZXJTY29yZTpudW1iZXI7XHJcbiAgICBcclxuXHJcbiAgICBBZ2FycmFyQ29mcmUoKXtcclxuXHJcbiAgICAgICB0aGlzLkNhbnRpZGFkQ29mcmVzIC09IDE7XHJcblxyXG4gICAgICAgdGhpcy5wbGF5ZXJTY29yZSArPSAxMDA7XHJcbiAgICAgICB0aGlzLnNjb3JlLnN0cmluZyA9ICdQdW50YWplOiAnKyB0aGlzLnBsYXllclNjb3JlLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgaWYodGhpcy5DYW50aWRhZENvZnJlcyA9PSAwKSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihcIlB1ZXJ0YVwiKS5FbmNvbnRyYXJvbkVsQ29mcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBCYWphclB1bnRhamUoKXtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJTY29yZSAtPSA1MDtcclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJTY29yZSA8IDApIHRoaXMucGxheWVyU2NvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMuc2NvcmUuc3RyaW5nID0gJ1B1bnRhamU6ICcrIHRoaXMucGxheWVyU2NvcmUudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBTdHJpbmdWaWRhcygpe1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllcnZpZGFzID0gdGhpcy5QbGF5ZXIuZ2V0Q29tcG9uZW50KCdQbGF5ZXInKS5WaWRhcztcclxuICAgICAgICB0aGlzLnZpZGEuc3RyaW5nID0gJ1ZpZGFzOiAnKyB0aGlzLnBsYXllcnZpZGFzLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgR2FtZU92ZXIoKXtcclxuXHJcbiAgICAgICAgdGhpcy5GaWxlVFhULnRleHQgPSAgdGhpcy5wbGF5ZXJTY29yZS50b1N0cmluZygpO1xyXG4gICAgICAgIC8vdGhpcy5QbGF5ZXIuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0dhbWUgT3ZlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIEdhbWVXaW4oKXtcclxuICAgICAgICBpZih0aGlzLkNhbnRpZGFkQ29mcmVzID09IDApe1xyXG4gICAgICAgICAgICB0aGlzLkZpbGVUWFQudGV4dCA9ICB0aGlzLnBsYXllclNjb3JlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLkxldmVsID09IDEpe1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdMZXZlbCAyJyk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmICh0aGlzLkxldmVsID09IDIpe1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdHYW1lJyk7XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnR2FtZSBXaW4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuXHJcbiAgICAgICAgdmFyIG1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XHJcbiAgICAgICAgbWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJTY29yZSA9IDA7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJ2aWRhcyA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge31cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==