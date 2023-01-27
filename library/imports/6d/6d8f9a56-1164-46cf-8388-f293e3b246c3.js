"use strict";
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