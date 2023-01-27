
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBdUtDO1FBcktHLG9CQUFjLEdBQVUsQ0FBQyxDQUFDO1FBQzFCLGtCQUFZLEdBQVUsQ0FBQyxDQUFDO1FBQ3hCLGlCQUFXLEdBQVUsQ0FBQyxDQUFDO1FBQ3ZCLGdCQUFVLEdBQVUsQ0FBQyxDQUFDO1FBRXRCLHFCQUFlLEdBQVcsS0FBSyxDQUFDO1FBQ2hDLHVCQUFpQixHQUFXLEtBQUssQ0FBQztRQUNsQyxvQkFBYyxHQUFXLEtBQUssQ0FBQztRQUMvQixtQkFBYSxHQUFXLEtBQUssQ0FBQzs7SUE2SmxDLENBQUM7SUFySkcsOEJBQVcsR0FBWCxVQUFZLEtBQUs7UUFDYixRQUFPLEtBQUssQ0FBQyxPQUFPLEVBQUM7WUFDakIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJO2dCQUNsQixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3RCLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUs7Z0JBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QixJQUFJLENBQUMsT0FB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QUssSUFBSSxDQUFDLEVBQUM7Z0JBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3BEO1NBQ0o7SUFDTCxDQUFDO0lBdEtnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBdUs1QjtJQUFELGVBQUM7Q0F2S0QsQUF1S0MsQ0F2S3FDLEVBQUUsQ0FBQyxTQUFTLEdBdUtqRDtrQkF2S29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBNb3Zlckl6cXVpZXJkYTpudW1iZXIgPSAwO1xyXG4gICAgTW92ZXJEZXJlY2hhOm51bWJlciA9IDA7XHJcbiAgICBNb3ZlckFycmliYTpudW1iZXIgPSAwO1xyXG4gICAgTW92ZXJBYmFqbzpudW1iZXIgPSAwO1xyXG5cclxuICAgIENvbGlzaW9uRGVyZWNoYTpib29sZWFuID0gZmFsc2U7XHJcbiAgICBDb2xpc2lvbkl6cXVpZXJkYTpib29sZWFuID0gZmFsc2U7XHJcbiAgICBDb2xpc2lvbkFycmliYTpib29sZWFuID0gZmFsc2U7XHJcbiAgICBDb2xpc2lvbkFiYWpvOmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBWaWRhczpudW1iZXI7XHJcbiAgICBNb3Jpcjpib29sZWFuO1xyXG5cclxuICAgIFByaW1lcm86Ym9vbGVhbjtcclxuICAgIFNlZ3VuZG86Ym9vbGVhbjtcclxuIFxyXG4gICAgTW92ZXJQbGF5ZXIoZXZlbnQpe1xyXG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKXtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkubGVmdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuTW92ZXJJenF1aWVyZGEgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5QcmltZXJvID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuSGFjZXJBbmltYWNpb24oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5yaWdodDpcclxuICAgICAgICAgICAgICAgIHRoaXMuTW92ZXJEZXJlY2hhID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuUHJpbWVybyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuSGFjZXJBbmltYWNpb24oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS51cDpcclxuICAgICAgICAgICAgICAgIHRoaXMuTW92ZXJBcnJpYmEgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5QcmltZXJvID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuSGFjZXJBbmltYWNpb24oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kb3duOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5Nb3ZlckFiYWpvID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuUHJpbWVybyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkhhY2VyQW5pbWFjaW9uKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgUGFyYXJQbGF5ZXIoZXZlbnQpe1xyXG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKXtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkubGVmdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuTW92ZXJJenF1aWVyZGEgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuU2VndW5kbyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLk1vdmVyRGVyZWNoYSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TZWd1bmRvID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS51cDpcclxuICAgICAgICAgICAgICAgIHRoaXMuTW92ZXJBcnJpYmEgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnN0b3AoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuU2VndW5kbyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZG93bjpcclxuICAgICAgICAgICAgICAgIHRoaXMuTW92ZXJBYmFqbyA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikuc3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TZWd1bmRvID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuIFxyXG4gICAgSGFjZXJBbmltYWNpb24oKXtcclxuXHJcbiAgICAgICAgaWYodGhpcy5QcmltZXJvID09IHRydWUgJiYgdGhpcy5TZWd1bmRvID09IHRydWUpe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSgpO1xyXG4gICAgICAgICAgICB0aGlzLlNlZ3VuZG8gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlckNvbGxpZGVyLHNlbGZDb2xsaWRlcil7XHJcblxyXG4gICAgICAgIGlmKG90aGVyQ29sbGlkZXIudGFnID09IDAgKXtcclxuICAgICAgICAgICAgdGhpcy5Db2xpc2lvbkRlcmVjaGEgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYob3RoZXJDb2xsaWRlci50YWcgPT0gMSApe1xyXG4gICAgICAgICAgICB0aGlzLkNvbGlzaW9uSXpxdWllcmRhID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG90aGVyQ29sbGlkZXIudGFnID09IDIgKXtcclxuICAgICAgICAgICAgdGhpcy5Db2xpc2lvbkFycmliYSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihvdGhlckNvbGxpZGVyLnRhZyA9PSAzICl7XHJcbiAgICAgICAgICAgIHRoaXMuQ29saXNpb25BYmFqbyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihvdGhlckNvbGxpZGVyLnRhZyA9PSA1KXtcclxuICAgICAgICAgICAgdGhpcy5Nb3JpciA9dHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG90aGVyQ29sbGlkZXIudGFnID09IDcpe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudCgnR2FtZScpLkdhbWVXaW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sdGhpcy5Nb3ZlclBsYXllcix0aGlzKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLHRoaXMuUGFyYXJQbGF5ZXIsdGhpcyk7XHJcblxyXG4gICAgICAgIHZhciBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xyXG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuVmlkYXMgPSAzO1xyXG4gICAgICAgIHRoaXMuTW9yaXIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5QcmltZXJvID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5TZWd1bmRvID0gdHJ1ZTtcclxuICAgIH1cclxuIFxyXG4gICAgc3RhcnQgKCkge31cclxuIFxyXG4gICAgdXBkYXRlIChkdCkge1xyXG5cclxuICAgICAgICBpZighdGhpcy5Db2xpc2lvbkl6cXVpZXJkYSl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuTW92ZXJJenF1aWVyZGEgPT0gMSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uLnggLT0gMzAwKmR0LHRoaXMubm9kZS5wb3NpdGlvbi55KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuQ29saXNpb25EZXJlY2hhID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIXRoaXMuQ29saXNpb25EZXJlY2hhKXtcclxuICAgICAgICAgICAgaWYodGhpcy5Nb3ZlckRlcmVjaGEgPT0gMSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uLnggKz0gMzAwKmR0LHRoaXMubm9kZS5wb3NpdGlvbi55KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuQ29saXNpb25JenF1aWVyZGEgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZighdGhpcy5Db2xpc2lvbkFycmliYSl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuTW92ZXJBcnJpYmEgPT0gMSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uLngsdGhpcy5ub2RlLnBvc2l0aW9uLnkgKz0gMzAwKmR0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuQ29saXNpb25BYmFqbyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCF0aGlzLkNvbGlzaW9uQWJham8pe1xyXG4gICAgICAgICAgICBpZih0aGlzLk1vdmVyQWJham8gPT0gMSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uLngsdGhpcy5ub2RlLnBvc2l0aW9uLnkgLT0gMzAwKmR0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuQ29saXNpb25BcnJpYmEgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5Nb3Jpcil7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChcIkdhbWVcIikuTGV2ZWwgPT0gMSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24oY2MudjIgKDAsOTQpKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYgKHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KFwiR2FtZVwiKS5MZXZlbCA9PSAyKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihjYy52MiAoLTEwLDcwKSk7XHJcbiAgICAgICAgICAgIH1lbHNlIHRoaXMubm9kZS5zZXRQb3NpdGlvbihjYy52MiAoLTM5OS41ODYsNzguOTAxKSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLlZpZGFzIC09IDE7XHJcbiAgICAgICAgICAgIHRoaXMuTW9yaXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoJ0dhbWUnKS5CYWphclB1bnRhamUoKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoJ0dhbWUnKS5TdHJpbmdWaWRhcygpO1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5WaWRhcyA9PSAwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KCdHYW1lJykuR2FtZU92ZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=