window.__require = function t(e, o, n) {
function r(c, s) {
if (!o[c]) {
if (!e[c]) {
var a = c.split("/");
a = a[a.length - 1];
if (!e[a]) {
var p = "function" == typeof __require && __require;
if (!s && p) return p(a, !0);
if (i) return i(a, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = a;
}
var u = o[c] = {
exports: {}
};
e[c][0].call(u.exports, function(t) {
return r(e[c][1][t] || t);
}, u, u.exports, t, e, o, n);
}
return o[c].exports;
}
for (var i = "function" == typeof __require && __require, c = 0; c < n.length; c++) r(n[c]);
return r;
}({
Cofre: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "012bc2DrSVInKOlIwAZnchK", "Cofre");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, c = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (c = (i < 3 ? r(c) : i > 3 ? r(e, o, c) : r(e, o)) || c);
return i > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = (c.property, function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onCollisionEnter = function(t) {
if (1 == t.tag) {
this.node.parent.getComponent("Game").AgarrarCofre();
this.node.destroy();
}
};
e.prototype.onLoad = function() {
cc.director.getCollisionManager().enabled = !0;
};
e.prototype.start = function() {};
e.prototype.onDestroy = function() {};
return i([ s ], e);
}(cc.Component));
o.default = a;
cc._RF.pop();
}, {} ],
Enemigos: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6d8f9pWEWRGz4OI8pPjskbD", "Enemigos");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, c = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (c = (i < 3 ? r(c) : i > 3 ? r(e, o, c) : r(e, o)) || c);
return i > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, p = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.Tipo_Enemigo = 0;
e.direccion = null;
e.timer = 0;
return e;
}
e.prototype.onCollisionEnter = function(t, e) {
if (5 == e.tag) if (1 == this.Tipo_Enemigo) {
this.direccion *= -1;
this.node.scaleX *= -1;
} else 1 == this.direccion ? this.direccion = 2 : 2 == this.direccion ? this.direccion = 1 : 3 == this.direccion ? this.direccion = 4 : 4 == this.direccion && (this.direccion = 3);
};
e.prototype.onLoad = function() {
this.Tipo_Enemigo, this.direccion = 1;
this.node.getComponent(cc.Animation).play();
cc.director.getCollisionManager().enabled = !0;
};
e.prototype.start = function() {};
e.prototype.update = function(t) {
if (1 == this.Tipo_Enemigo) {
if (this.timer >= 2) {
this.direccion *= -1;
this.node.scaleX *= -1;
this.timer = 0;
}
this.node.setPosition(this.node.position.x += 100 * t * this.direccion, this.node.position.y);
} else {
if (this.timer >= 2) {
this.direccion = Math.floor(4 * Math.random() + 1);
this.timer = 0;
}
if (1 == this.direccion) {
this.node.scaleX = 1;
this.node.setPosition(this.node.position.x += 80 * t, this.node.position.y);
} else if (2 == this.direccion) {
this.node.scaleX = -1;
this.node.setPosition(this.node.position.x += 80 * t * -1, this.node.position.y);
} else 3 == this.direccion ? this.node.setPosition(this.node.position.x, this.node.position.y += 80 * t) : 4 == this.direccion && this.node.setPosition(this.node.position.x, this.node.position.y += 80 * t * -1);
}
this.timer += t;
};
i([ a() ], e.prototype, "Tipo_Enemigo", void 0);
return i([ s ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
FinalScore: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6b4d7IX9f1IsbtrId7vs/v0", "FinalScore");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, c = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (c = (i < 3 ? r(c) : i > 3 ? r(e, o, c) : r(e, o)) || c);
return i > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, p = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.FileTXT = null;
e.score = null;
return e;
}
e.prototype.onLoad = function() {
this.FileTXT.url = cc.url.raw("assets/Puntaje.txt");
this.score.string = "Puntaje Final: " + this.FileTXT;
};
e.prototype.start = function() {};
i([ a(cc.TextAsset) ], e.prototype, "FileTXT", void 0);
i([ a(cc.Label) ], e.prototype, "score", void 0);
return i([ s ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
Game: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6741eVv1ERBvpFPkgwSG89n", "Game");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, c = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (c = (i < 3 ? r(c) : i > 3 ? r(e, o, c) : r(e, o)) || c);
return i > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = c.property, p = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.Player = null;
e.vida = null;
e.CantidadCofres = 0;
e.score = null;
e.FileTXT = null;
e.Level = 0;
return e;
}
e.prototype.AgarrarCofre = function() {
this.CantidadCofres -= 1;
this.playerScore += 100;
this.score.string = "Puntaje: " + this.playerScore.toString();
0 == this.CantidadCofres && this.node.getComponentInChildren("Puerta").EncontraronElCofre();
};
e.prototype.BajarPuntaje = function() {
this.playerScore -= 50;
this.playerScore < 0 && (this.playerScore = 0);
this.score.string = "Puntaje: " + this.playerScore.toString();
};
e.prototype.StringVidas = function() {
this.playervidas = this.Player.getComponent("Player").Vidas;
this.vida.string = "Vidas: " + this.playervidas.toString();
};
e.prototype.GameOver = function() {
this.FileTXT.text = this.playerScore.toString();
cc.director.loadScene("Game Over");
};
e.prototype.GameWin = function() {
if (0 == this.CantidadCofres) {
this.FileTXT.text = this.playerScore.toString();
1 == this.Level ? cc.director.loadScene("Level 2") : 2 == this.Level ? cc.director.loadScene("Game") : cc.director.loadScene("Game Win");
}
};
e.prototype.onLoad = function() {
cc.director.getCollisionManager().enabled = !0;
this.playerScore = 0;
this.playervidas = 0;
};
e.prototype.start = function() {};
e.prototype.update = function() {};
i([ a(cc.Node) ], e.prototype, "Player", void 0);
i([ a(cc.Label) ], e.prototype, "vida", void 0);
i([ a() ], e.prototype, "CantidadCofres", void 0);
i([ a(cc.Label) ], e.prototype, "score", void 0);
i([ a(cc.TextAsset) ], e.prototype, "FileTXT", void 0);
i([ a() ], e.prototype, "Level", void 0);
return i([ s ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {} ],
InstruccionesButton: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "11e40ZX4YBCCbhB/5pV4f/X", "InstruccionesButton");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, c = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (c = (i < 3 ? r(c) : i > 3 ? r(e, o, c) : r(e, o)) || c);
return i > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = (c.property, function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
cc.director.preloadScene("Instructions");
this.node.on("touchstart", function() {
cc.director.loadScene("Instructions");
});
};
e.prototype.start = function() {};
return i([ s ], e);
}(cc.Component));
o.default = a;
cc._RF.pop();
}, {} ],
MenuButton: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "8adddjvZptOSKhMGUpwl/DR", "MenuButton");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, c = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (c = (i < 3 ? r(c) : i > 3 ? r(e, o, c) : r(e, o)) || c);
return i > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = (c.property, function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
cc.director.preloadScene("Menu");
this.node.on("touchstart", function() {
cc.director.loadScene("Menu");
});
};
e.prototype.start = function() {};
return i([ s ], e);
}(cc.Component));
o.default = a;
cc._RF.pop();
}, {} ],
PlayButton: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "9b023UKD6lCXIkb096eF4SY", "PlayButton");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, c = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (c = (i < 3 ? r(c) : i > 3 ? r(e, o, c) : r(e, o)) || c);
return i > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = (c.property, function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
cc.director.preloadScene("Level 1");
this.node.on("touchstart", function() {
cc.director.loadScene("Level 1");
});
};
e.prototype.start = function() {};
return i([ s ], e);
}(cc.Component));
o.default = a;
cc._RF.pop();
}, {} ],
Player: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "2ea0adAzElP54bMEzBPQijl", "Player");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, c = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (c = (i < 3 ? r(c) : i > 3 ? r(e, o, c) : r(e, o)) || c);
return i > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = (c.property, function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.MoverIzquierda = 0;
e.MoverDerecha = 0;
e.MoverArriba = 0;
e.MoverAbajo = 0;
e.ColisionDerecha = !1;
e.ColisionIzquierda = !1;
e.ColisionArriba = !1;
e.ColisionAbajo = !1;
return e;
}
e.prototype.MoverPlayer = function(t) {
switch (t.keyCode) {
case cc.macro.KEY.left:
this.MoverIzquierda = 1;
this.Primero = !0;
this.node.scaleX = -1;
this.HacerAnimacion();
break;

case cc.macro.KEY.right:
this.MoverDerecha = 1;
this.Primero = !0;
this.node.scaleX = 1;
this.HacerAnimacion();
break;

case cc.macro.KEY.up:
this.MoverArriba = 1;
this.Primero = !0;
this.HacerAnimacion();
break;

case cc.macro.KEY.down:
this.MoverAbajo = 1;
this.Primero = !0;
this.HacerAnimacion();
}
};
e.prototype.PararPlayer = function(t) {
switch (t.keyCode) {
case cc.macro.KEY.left:
this.MoverIzquierda = 0;
this.node.getComponent(cc.Animation).stop();
this.Segundo = !0;
break;

case cc.macro.KEY.right:
this.MoverDerecha = 0;
this.node.getComponent(cc.Animation).stop();
this.Segundo = !0;
break;

case cc.macro.KEY.up:
this.MoverArriba = 0;
this.node.getComponent(cc.Animation).stop();
this.Segundo = !0;
break;

case cc.macro.KEY.down:
this.MoverAbajo = 0;
this.node.getComponent(cc.Animation).stop();
this.Segundo = !0;
}
};
e.prototype.HacerAnimacion = function() {
if (1 == this.Primero && 1 == this.Segundo) {
this.node.getComponent(cc.Animation).play();
this.Segundo = !1;
}
};
e.prototype.onCollisionEnter = function(t) {
0 == t.tag && (this.ColisionDerecha = !0);
1 == t.tag && (this.ColisionIzquierda = !0);
2 == t.tag && (this.ColisionArriba = !0);
3 == t.tag && (this.ColisionAbajo = !0);
5 == t.tag && (this.Morir = !0);
7 == t.tag && this.node.parent.getComponent("Game").GameWin();
};
e.prototype.onLoad = function() {
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.MoverPlayer, this);
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.PararPlayer, this);
cc.director.getCollisionManager().enabled = !0;
this.Vidas = 3;
this.Morir = !1;
this.Primero = !1;
this.Segundo = !0;
};
e.prototype.start = function() {};
e.prototype.update = function(t) {
if (!this.ColisionIzquierda && 1 == this.MoverIzquierda) {
this.node.setPosition(this.node.position.x -= 300 * t, this.node.position.y);
this.ColisionDerecha = !1;
}
if (!this.ColisionDerecha && 1 == this.MoverDerecha) {
this.node.setPosition(this.node.position.x += 300 * t, this.node.position.y);
this.ColisionIzquierda = !1;
}
if (!this.ColisionArriba && 1 == this.MoverArriba) {
this.node.setPosition(this.node.position.x, this.node.position.y += 300 * t);
this.ColisionAbajo = !1;
}
if (!this.ColisionAbajo && 1 == this.MoverAbajo) {
this.node.setPosition(this.node.position.x, this.node.position.y -= 300 * t);
this.ColisionArriba = !1;
}
if (this.Morir) {
1 == this.node.parent.getComponent("Game").Level ? this.node.setPosition(cc.v2(0, 94)) : 2 == this.node.parent.getComponent("Game").Level ? this.node.setPosition(cc.v2(-10, 70)) : this.node.setPosition(cc.v2(-399.586, 78.901));
this.Vidas -= 1;
this.Morir = !1;
this.node.parent.getComponent("Game").BajarPuntaje();
this.node.parent.getComponent("Game").StringVidas();
0 == this.Vidas && this.node.parent.getComponent("Game").GameOver();
}
};
return i([ s ], e);
}(cc.Component));
o.default = a;
cc._RF.pop();
}, {} ],
Puerta: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "fa798DLumtProWYoWAZ/D2F", "Puerta");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, c = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (c = (i < 3 ? r(c) : i > 3 ? r(e, o, c) : r(e, o)) || c);
return i > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var c = cc._decorator, s = c.ccclass, a = (c.property, function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.EncontraronElCofre = function() {
this.node.active = !1;
};
e.prototype.onLoad = function() {
cc.director.getCollisionManager().enabled = !0;
};
e.prototype.start = function() {};
return i([ s ], e);
}(cc.Component));
o.default = a;
cc._RF.pop();
}, {} ]
}, {}, [ "Cofre", "Enemigos", "FinalScore", "Game", "InstruccionesButton", "MenuButton", "PlayButton", "Player", "Puerta" ]);