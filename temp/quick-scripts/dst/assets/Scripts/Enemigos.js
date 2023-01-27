
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Enemigos.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6d8f9pWEWRGz4OI8pPjskbD', 'Enemigos');
// Scripts/Enemigos.ts

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
        _this.Tipo_Enemigo = 0;
        _this.direccion = null;
        _this.timer = 0;
        return _this;
    }
    NewClass.prototype.onCollisionEnter = function (otherCollider, selfCollider) {
        if (selfCollider.tag == 5) {
            if (this.Tipo_Enemigo == 1) {
                this.direccion *= -1;
                this.node.scaleX *= -1;
            }
            else if (this.direccion == 1)
                this.direccion = 2;
            else if (this.direccion == 2)
                this.direccion = 1;
            else if (this.direccion == 3)
                this.direccion = 4;
            else if (this.direccion == 4)
                this.direccion = 3;
        }
    };
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        if (this.Tipo_Enemigo == 1)
            this.direccion = 1;
        else
            this.direccion = 1;
        this.node.getComponent(cc.Animation).play();
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
    };
    NewClass.prototype.start = function () { };
    NewClass.prototype.update = function (dt) {
        if (this.Tipo_Enemigo == 1) {
            if (this.timer >= 2) {
                this.direccion *= -1;
                this.node.scaleX *= -1;
                this.timer = 0;
            }
            this.node.setPosition(this.node.position.x += 100 * dt * this.direccion, this.node.position.y);
        }
        else {
            if (this.timer >= 2) {
                this.direccion = Math.floor(Math.random() * 4 + 1);
                this.timer = 0;
            }
            if (this.direccion == 1) {
                this.node.scaleX = 1;
                this.node.setPosition(this.node.position.x += 80 * dt * 1, this.node.position.y);
            }
            else if (this.direccion == 2) {
                this.node.scaleX = -1;
                this.node.setPosition(this.node.position.x += 80 * dt * -1, this.node.position.y);
            }
            else if (this.direccion == 3)
                this.node.setPosition(this.node.position.x, this.node.position.y += 80 * dt * 1);
            else if (this.direccion == 4)
                this.node.setPosition(this.node.position.x, this.node.position.y += 80 * dt * -1);
        }
        this.timer += dt;
    };
    __decorate([
        property()
    ], NewClass.prototype, "Tipo_Enemigo", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcRW5lbWlnb3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFvRUM7UUFqRUcsa0JBQVksR0FBVSxDQUFDLENBQUM7UUFFeEIsZUFBUyxHQUFVLElBQUksQ0FBQztRQUN4QixXQUFLLEdBQVUsQ0FBQyxDQUFDOztJQThEckIsQ0FBQztJQTVERyxtQ0FBZ0IsR0FBaEIsVUFBaUIsYUFBYSxFQUFDLFlBQVk7UUFFdkMsSUFBRyxZQUFZLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBQztZQUN0QixJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxFQUFFO2dCQUN4QixJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQzthQUMxQjtpQkFDSSxJQUFHLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQztnQkFBRSxJQUFJLENBQUMsU0FBUyxHQUFFLENBQUMsQ0FBQztpQkFDMUMsSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUM7Z0JBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRSxDQUFDLENBQUM7aUJBQzFDLElBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDO2dCQUFFLElBQUksQ0FBQyxTQUFTLEdBQUUsQ0FBQyxDQUFDO2lCQUMxQyxJQUFHLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQztnQkFBRSxJQUFJLENBQUMsU0FBUyxHQUFFLENBQUMsQ0FB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RSxHQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pIO1FBRUQsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQWhFRDtRQURDLFFBQVEsRUFBRTtrREFDYTtJQUhQLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FvRTVCO0lBQUQsZUFBQztDQXBFRCxBQW9FQyxDQXBFcUMsRUFBRSxDQUFDLFNBQVMsR0FvRWpEO2tCQXBFb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBUaXBvX0VuZW1pZ286bnVtYmVyID0gMDtcclxuXHJcbiAgICBkaXJlY2Npb246bnVtYmVyID0gbnVsbDtcclxuICAgIHRpbWVyOm51bWJlciA9IDA7XHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlckNvbGxpZGVyLHNlbGZDb2xsaWRlcil7XHJcblxyXG4gICAgICAgIGlmKHNlbGZDb2xsaWRlci50YWcgPT0gNSl7XHJcbiAgICAgICAgICAgaWYgKHRoaXMuVGlwb19FbmVtaWdvID09IDEgKXsgICAgXHJcbiAgICAgICAgICAgICAgIHRoaXMuZGlyZWNjaW9uICo9IC0xO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCAqPSAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMuZGlyZWNjaW9uID09IDEpIHRoaXMuZGlyZWNjaW9uID0yO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMuZGlyZWNjaW9uID09IDIpIHRoaXMuZGlyZWNjaW9uID0xO1xyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMuZGlyZWNjaW9uID09IDMpIHRoaXMuZGlyZWNjaW9uID00O1xyXG4gICAgICAgICAgICBlbHNlIGlmKHRoaXMuZGlyZWNjaW9uID09IDQpIHRoaXMuZGlyZWNjaW9uID0zO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG5cclxuICAgICAgIGlmKHRoaXMuVGlwb19FbmVtaWdvID09IDEpIHRoaXMuZGlyZWNjaW9uID0gMTtcclxuICAgICAgIGVsc2UgdGhpcy5kaXJlY2Npb24gPSAxO1xyXG5cclxuICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XHJcblxyXG4gICAgICAgIHZhciBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xyXG4gICAgICAgIG1hbmFnZXIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge31cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuVGlwb19FbmVtaWdvID09IDEpICB7XHJcbiAgICAgICAgICAgIGlmICggdGhpcy50aW1lciA+PSAyKSB7XHJcbiAgICAgICAgICAgICAgIHRoaXMuZGlyZWNjaW9uICo9IC0xO1xyXG4gICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYICo9IC0xO1xyXG4gICAgICAgICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5wb3NpdGlvbi54ICs9IDEwMCpkdCAqIHRoaXMuZGlyZWNjaW9uLHRoaXMubm9kZS5wb3NpdGlvbi55KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICggdGhpcy50aW1lciA+PSAyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjY2lvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQgKyAxKTsgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWNjaW9uID09IDEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uLnggKz0gODAqZHQgKiAxLHRoaXMubm9kZS5wb3NpdGlvbi55KTtcclxuXHJcbiAgICAgICAgICAgIH1lbHNlIGlmICh0aGlzLmRpcmVjY2lvbiA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gLTE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uLnggKz0gODAqZHQgKiAtMSx0aGlzLm5vZGUucG9zaXRpb24ueSk7XHJcblxyXG4gICAgICAgICAgICB9ZWxzZSBpZiAodGhpcy5kaXJlY2Npb24gPT0gMykgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5wb3NpdGlvbi54LCB0aGlzLm5vZGUucG9zaXRpb24ueSArPSA4MCpkdCAqIDEpO1xyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmRpcmVjY2lvbiA9PSA0KSB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLnBvc2l0aW9uLngsIHRoaXMubm9kZS5wb3NpdGlvbi55ICs9IDgwKmR0ICogLTEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50aW1lciArPSBkdDtcclxuICAgIH1cclxufVxyXG4iXX0=