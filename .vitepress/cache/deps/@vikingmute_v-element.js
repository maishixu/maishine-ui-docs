import {
  FontAwesomeIcon,
  icons,
  library$1
} from "./chunk-SYF2RM2F.js";
import {
  Fragment,
  Transition,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  guardReactiveProps,
  h,
  inject,
  isRef,
  mergeProps,
  nextTick,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  openBlock,
  provide,
  reactive,
  ref,
  render,
  renderList,
  renderSlot,
  shallowReactive,
  toDisplayString,
  toHandlers,
  unref,
  useAttrs,
  vModelDynamic,
  vModelText,
  vShow,
  watch,
  withCtx,
  withDirectives,
  withKeys,
  withModifiers
} from "./chunk-VJWGEPT5.js";

// node_modules/@vikingmute/v-element/dist/v-element.js
var Ko = typeof global == "object" && global && global.Object === Object && global;
var qr = Ko;
var Yo = typeof self == "object" && self && self.Object === Object && self;
var Xo = qr || Yo || Function("return this")();
var oe = Xo;
var Zo = oe.Symbol;
var le = Zo;
var Lr = Object.prototype;
var Jo = Lr.hasOwnProperty;
var Qo = Lr.toString;
var Ye = le ? le.toStringTag : void 0;
function ea(e) {
  var t = Jo.call(e, Ye), n = e[Ye];
  try {
    e[Ye] = void 0;
    var r = true;
  } catch {
  }
  var o = Qo.call(e);
  return r && (t ? e[Ye] = n : delete e[Ye]), o;
}
var ta = Object.prototype;
var na = ta.toString;
function ra(e) {
  return na.call(e);
}
var oa = "[object Null]";
var aa = "[object Undefined]";
var Un = le ? le.toStringTag : void 0;
function Se(e) {
  return e == null ? e === void 0 ? aa : oa : Un && Un in Object(e) ? ea(e) : ra(e);
}
function Fe(e) {
  return e != null && typeof e == "object";
}
var ia = "[object Symbol]";
function Lt(e) {
  return typeof e == "symbol" || Fe(e) && Se(e) == ia;
}
function zr(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var sa = Array.isArray;
var Ce = sa;
var la = 1 / 0;
var Gn = le ? le.prototype : void 0;
var Kn = Gn ? Gn.toString : void 0;
function Wr(e) {
  if (typeof e == "string")
    return e;
  if (Ce(e))
    return zr(e, Wr) + "";
  if (Lt(e))
    return Kn ? Kn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -la ? "-0" : t;
}
var ca = /\s/;
function ua(e) {
  for (var t = e.length; t-- && ca.test(e.charAt(t)); )
    ;
  return t;
}
var fa = /^\s+/;
function da(e) {
  return e && e.slice(0, ua(e) + 1).replace(fa, "");
}
function he(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Yn = 0 / 0;
var pa = /^[-+]0x[0-9a-f]+$/i;
var va = /^0b[01]+$/i;
var ha = /^0o[0-7]+$/i;
var ma = parseInt;
function Xn(e) {
  if (typeof e == "number")
    return e;
  if (Lt(e))
    return Yn;
  if (he(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = he(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = da(e);
  var n = va.test(e);
  return n || ha.test(e) ? ma(e.slice(2), n ? 2 : 8) : pa.test(e) ? Yn : +e;
}
function ga(e) {
  return e;
}
var ya = "[object AsyncFunction]";
var ba = "[object Function]";
var wa = "[object GeneratorFunction]";
var Oa = "[object Proxy]";
function Rt(e) {
  if (!he(e))
    return false;
  var t = Se(e);
  return t == ba || t == wa || t == ya || t == Oa;
}
var xa = oe["__core-js_shared__"];
var Jt = xa;
var Zn = function() {
  var e = /[^.]+$/.exec(Jt && Jt.keys && Jt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function $a(e) {
  return !!Zn && Zn in e;
}
var _a = Function.prototype;
var Ta = _a.toString;
function Ie(e) {
  if (e != null) {
    try {
      return Ta.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ea = /[\\^$.*+?()[\]{}|]/g;
var Aa = /^\[object .+?Constructor\]$/;
var ja = Function.prototype;
var ka = Object.prototype;
var Pa = ja.toString;
var Sa = ka.hasOwnProperty;
var Fa = RegExp(
  "^" + Pa.call(Sa).replace(Ea, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ca(e) {
  if (!he(e) || $a(e))
    return false;
  var t = Rt(e) ? Fa : Aa;
  return t.test(Ie(e));
}
function Ia(e, t) {
  return e == null ? void 0 : e[t];
}
function Ne(e, t) {
  var n = Ia(e, t);
  return Ca(n) ? n : void 0;
}
var Na = Ne(oe, "WeakMap");
var nn = Na;
var Jn = Object.create;
var Da = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!he(t))
      return {};
    if (Jn)
      return Jn(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
var Va = Da;
function Ra(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
function Ba(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var Ma = 800;
var qa = 16;
var La = Date.now;
function za(e) {
  var t = 0, n = 0;
  return function() {
    var r = La(), o = qa - (r - n);
    if (n = r, o > 0) {
      if (++t >= Ma)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Wa(e) {
  return function() {
    return e;
  };
}
var Ha = function() {
  try {
    var e = Ne(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
var Bt = Ha;
var Ua = Bt ? function(e, t) {
  return Bt(e, "toString", {
    configurable: true,
    enumerable: false,
    value: Wa(t),
    writable: true
  });
} : ga;
var Ga = Ua;
var Ka = za(Ga);
var Ya = Ka;
function Xa(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== false; )
    ;
  return e;
}
var Za = 9007199254740991;
var Ja = /^(?:0|[1-9]\d*)$/;
function Qa(e, t) {
  var n = typeof e;
  return t = t ?? Za, !!t && (n == "number" || n != "symbol" && Ja.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Hr(e, t, n) {
  t == "__proto__" && Bt ? Bt(e, t, {
    configurable: true,
    enumerable: true,
    value: n,
    writable: true
  }) : e[t] = n;
}
function Ur(e, t) {
  return e === t || e !== e && t !== t;
}
var ei = Object.prototype;
var ti = ei.hasOwnProperty;
function Gr(e, t, n) {
  var r = e[t];
  (!(ti.call(e, t) && Ur(r, n)) || n === void 0 && !(t in e)) && Hr(e, t, n);
}
function dt(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var a = -1, s = t.length; ++a < s; ) {
    var i = t[a], l = r ? r(n[i], e[i], i, n, e) : void 0;
    l === void 0 && (l = e[i]), o ? Hr(n, i, l) : Gr(n, i, l);
  }
  return n;
}
var Qn = Math.max;
function ni(e, t, n) {
  return t = Qn(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = Qn(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = r[o];
    return i[t] = n(s), Ra(e, this, i);
  };
}
var ri = 9007199254740991;
function Kr(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ri;
}
function Yr(e) {
  return e != null && Kr(e.length) && !Rt(e);
}
var oi = Object.prototype;
function wn(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || oi;
  return e === n;
}
function ai(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var ii = "[object Arguments]";
function er(e) {
  return Fe(e) && Se(e) == ii;
}
var Xr = Object.prototype;
var si = Xr.hasOwnProperty;
var li = Xr.propertyIsEnumerable;
var ci = er(/* @__PURE__ */ function() {
  return arguments;
}()) ? er : function(e) {
  return Fe(e) && si.call(e, "callee") && !li.call(e, "callee");
};
var Zr = ci;
function ui() {
  return false;
}
var Jr = typeof exports == "object" && exports && !exports.nodeType && exports;
var tr = Jr && typeof module == "object" && module && !module.nodeType && module;
var fi = tr && tr.exports === Jr;
var nr = fi ? oe.Buffer : void 0;
var di = nr ? nr.isBuffer : void 0;
var pi = di || ui;
var Qr = pi;
var vi = "[object Arguments]";
var hi = "[object Array]";
var mi = "[object Boolean]";
var gi = "[object Date]";
var yi = "[object Error]";
var bi = "[object Function]";
var wi = "[object Map]";
var Oi = "[object Number]";
var xi = "[object Object]";
var $i = "[object RegExp]";
var _i = "[object Set]";
var Ti = "[object String]";
var Ei = "[object WeakMap]";
var Ai = "[object ArrayBuffer]";
var ji = "[object DataView]";
var ki = "[object Float32Array]";
var Pi = "[object Float64Array]";
var Si = "[object Int8Array]";
var Fi = "[object Int16Array]";
var Ci = "[object Int32Array]";
var Ii = "[object Uint8Array]";
var Ni = "[object Uint8ClampedArray]";
var Di = "[object Uint16Array]";
var Vi = "[object Uint32Array]";
var R = {};
R[ki] = R[Pi] = R[Si] = R[Fi] = R[Ci] = R[Ii] = R[Ni] = R[Di] = R[Vi] = true;
R[vi] = R[hi] = R[Ai] = R[mi] = R[ji] = R[gi] = R[yi] = R[bi] = R[wi] = R[Oi] = R[xi] = R[$i] = R[_i] = R[Ti] = R[Ei] = false;
function Ri(e) {
  return Fe(e) && Kr(e.length) && !!R[Se(e)];
}
function On(e) {
  return function(t) {
    return e(t);
  };
}
var eo = typeof exports == "object" && exports && !exports.nodeType && exports;
var Je = eo && typeof module == "object" && module && !module.nodeType && module;
var Bi = Je && Je.exports === eo;
var Qt = Bi && qr.process;
var Mi = function() {
  try {
    var e = Je && Je.require && Je.require("util").types;
    return e || Qt && Qt.binding && Qt.binding("util");
  } catch {
  }
}();
var Me = Mi;
var rr = Me && Me.isTypedArray;
var qi = rr ? On(rr) : Ri;
var Li = qi;
var zi = Object.prototype;
var Wi = zi.hasOwnProperty;
function to(e, t) {
  var n = Ce(e), r = !n && Zr(e), o = !n && !r && Qr(e), a = !n && !r && !o && Li(e), s = n || r || o || a, i = s ? ai(e.length, String) : [], l = i.length;
  for (var u in e)
    (t || Wi.call(e, u)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Qa(u, l))) && i.push(u);
  return i;
}
function no(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Hi = no(Object.keys, Object);
var Ui = Hi;
var Gi = Object.prototype;
var Ki = Gi.hasOwnProperty;
function Yi(e) {
  if (!wn(e))
    return Ui(e);
  var t = [];
  for (var n in Object(e))
    Ki.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function xn(e) {
  return Yr(e) ? to(e) : Yi(e);
}
function Xi(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var Zi = Object.prototype;
var Ji = Zi.hasOwnProperty;
function Qi(e) {
  if (!he(e))
    return Xi(e);
  var t = wn(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !Ji.call(e, r)) || n.push(r);
  return n;
}
function $n(e) {
  return Yr(e) ? to(e, true) : Qi(e);
}
var es = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var ts = /^\w*$/;
function ns(e, t) {
  if (Ce(e))
    return false;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Lt(e) ? true : ts.test(e) || !es.test(e) || t != null && e in Object(t);
}
var rs = Ne(Object, "create");
var it = rs;
function os() {
  this.__data__ = it ? it(null) : {}, this.size = 0;
}
function as(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var is = "__lodash_hash_undefined__";
var ss = Object.prototype;
var ls = ss.hasOwnProperty;
function cs(e) {
  var t = this.__data__;
  if (it) {
    var n = t[e];
    return n === is ? void 0 : n;
  }
  return ls.call(t, e) ? t[e] : void 0;
}
var us = Object.prototype;
var fs = us.hasOwnProperty;
function ds(e) {
  var t = this.__data__;
  return it ? t[e] !== void 0 : fs.call(t, e);
}
var ps = "__lodash_hash_undefined__";
function vs(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = it && t === void 0 ? ps : t, this;
}
function ke(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ke.prototype.clear = os;
ke.prototype.delete = as;
ke.prototype.get = cs;
ke.prototype.has = ds;
ke.prototype.set = vs;
function hs() {
  this.__data__ = [], this.size = 0;
}
function zt(e, t) {
  for (var n = e.length; n--; )
    if (Ur(e[n][0], t))
      return n;
  return -1;
}
var ms = Array.prototype;
var gs = ms.splice;
function ys(e) {
  var t = this.__data__, n = zt(t, e);
  if (n < 0)
    return false;
  var r = t.length - 1;
  return n == r ? t.pop() : gs.call(t, n, 1), --this.size, true;
}
function bs(e) {
  var t = this.__data__, n = zt(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function ws(e) {
  return zt(this.__data__, e) > -1;
}
function Os(e, t) {
  var n = this.__data__, r = zt(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function ue(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ue.prototype.clear = hs;
ue.prototype.delete = ys;
ue.prototype.get = bs;
ue.prototype.has = ws;
ue.prototype.set = Os;
var xs = Ne(oe, "Map");
var st = xs;
function $s() {
  this.size = 0, this.__data__ = {
    hash: new ke(),
    map: new (st || ue)(),
    string: new ke()
  };
}
function _s(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Wt(e, t) {
  var n = e.__data__;
  return _s(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Ts(e) {
  var t = Wt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Es(e) {
  return Wt(this, e).get(e);
}
function As(e) {
  return Wt(this, e).has(e);
}
function js(e, t) {
  var n = Wt(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function me(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
me.prototype.clear = $s;
me.prototype.delete = Ts;
me.prototype.get = Es;
me.prototype.has = As;
me.prototype.set = js;
var ks = "Expected a function";
function _n(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ks);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var s = e.apply(this, r);
    return n.cache = a.set(o, s) || a, s;
  };
  return n.cache = new (_n.Cache || me)(), n;
}
_n.Cache = me;
var Ps = 500;
function Ss(e) {
  var t = _n(e, function(r) {
    return n.size === Ps && n.clear(), r;
  }), n = t.cache;
  return t;
}
var Fs = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var Cs = /\\(\\)?/g;
var Is = Ss(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Fs, function(n, r, o, a) {
    t.push(o ? a.replace(Cs, "$1") : r || n);
  }), t;
});
var Ns = Is;
function Ds(e) {
  return e == null ? "" : Wr(e);
}
function Tn(e, t) {
  return Ce(e) ? e : ns(e, t) ? [e] : Ns(Ds(e));
}
var Vs = 1 / 0;
function ro(e) {
  if (typeof e == "string" || Lt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Vs ? "-0" : t;
}
function Rs(e, t) {
  t = Tn(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[ro(t[n++])];
  return n && n == r ? e : void 0;
}
function En(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var or = le ? le.isConcatSpreadable : void 0;
function Bs(e) {
  return Ce(e) || Zr(e) || !!(or && e && e[or]);
}
function oo(e, t, n, r, o) {
  var a = -1, s = e.length;
  for (n || (n = Bs), o || (o = []); ++a < s; ) {
    var i = e[a];
    t > 0 && n(i) ? t > 1 ? oo(i, t - 1, n, r, o) : En(o, i) : r || (o[o.length] = i);
  }
  return o;
}
function Ms(e) {
  var t = e == null ? 0 : e.length;
  return t ? oo(e, 1) : [];
}
function qs(e) {
  return Ya(ni(e, void 0, Ms), e + "");
}
var Ls = no(Object.getPrototypeOf, Object);
var An = Ls;
var zs = "[object Object]";
var Ws = Function.prototype;
var Hs = Object.prototype;
var ao = Ws.toString;
var Us = Hs.hasOwnProperty;
var Gs = ao.call(Object);
function Ks(e) {
  if (!Fe(e) || Se(e) != zs)
    return false;
  var t = An(e);
  if (t === null)
    return true;
  var n = Us.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && ao.call(n) == Gs;
}
function Ys(e, t, n) {
  var r = -1, o = e.length;
  t < 0 && (t = -t > o ? 0 : o + t), n = n > o ? o : n, n < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var a = Array(o); ++r < o; )
    a[r] = e[r + t];
  return a;
}
function Xs() {
  this.__data__ = new ue(), this.size = 0;
}
function Zs(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Js(e) {
  return this.__data__.get(e);
}
function Qs(e) {
  return this.__data__.has(e);
}
var el = 200;
function tl(e, t) {
  var n = this.__data__;
  if (n instanceof ue) {
    var r = n.__data__;
    if (!st || r.length < el - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new me(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Ue(e) {
  var t = this.__data__ = new ue(e);
  this.size = t.size;
}
Ue.prototype.clear = Xs;
Ue.prototype.delete = Zs;
Ue.prototype.get = Js;
Ue.prototype.has = Qs;
Ue.prototype.set = tl;
function nl(e, t) {
  return e && dt(t, xn(t), e);
}
function rl(e, t) {
  return e && dt(t, $n(t), e);
}
var io = typeof exports == "object" && exports && !exports.nodeType && exports;
var ar = io && typeof module == "object" && module && !module.nodeType && module;
var ol = ar && ar.exports === io;
var ir = ol ? oe.Buffer : void 0;
var sr = ir ? ir.allocUnsafe : void 0;
function al(e, t) {
  if (t)
    return e.slice();
  var n = e.length, r = sr ? sr(n) : new e.constructor(n);
  return e.copy(r), r;
}
function il(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var s = e[n];
    t(s, n, e) && (a[o++] = s);
  }
  return a;
}
function so() {
  return [];
}
var sl = Object.prototype;
var ll = sl.propertyIsEnumerable;
var lr = Object.getOwnPropertySymbols;
var cl = lr ? function(e) {
  return e == null ? [] : (e = Object(e), il(lr(e), function(t) {
    return ll.call(e, t);
  }));
} : so;
var jn = cl;
function ul(e, t) {
  return dt(e, jn(e), t);
}
var fl = Object.getOwnPropertySymbols;
var dl = fl ? function(e) {
  for (var t = []; e; )
    En(t, jn(e)), e = An(e);
  return t;
} : so;
var lo = dl;
function pl(e, t) {
  return dt(e, lo(e), t);
}
function co(e, t, n) {
  var r = t(e);
  return Ce(e) ? r : En(r, n(e));
}
function vl(e) {
  return co(e, xn, jn);
}
function uo(e) {
  return co(e, $n, lo);
}
var hl = Ne(oe, "DataView");
var rn = hl;
var ml = Ne(oe, "Promise");
var on = ml;
var gl = Ne(oe, "Set");
var an = gl;
var cr = "[object Map]";
var yl = "[object Object]";
var ur = "[object Promise]";
var fr = "[object Set]";
var dr = "[object WeakMap]";
var pr = "[object DataView]";
var bl = Ie(rn);
var wl = Ie(st);
var Ol = Ie(on);
var xl = Ie(an);
var $l = Ie(nn);
var $e = Se;
(rn && $e(new rn(new ArrayBuffer(1))) != pr || st && $e(new st()) != cr || on && $e(on.resolve()) != ur || an && $e(new an()) != fr || nn && $e(new nn()) != dr) && ($e = function(e) {
  var t = Se(e), n = t == yl ? e.constructor : void 0, r = n ? Ie(n) : "";
  if (r)
    switch (r) {
      case bl:
        return pr;
      case wl:
        return cr;
      case Ol:
        return ur;
      case xl:
        return fr;
      case $l:
        return dr;
    }
  return t;
});
var kn = $e;
var _l = Object.prototype;
var Tl = _l.hasOwnProperty;
function El(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && Tl.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var Al = oe.Uint8Array;
var vr = Al;
function Pn(e) {
  var t = new e.constructor(e.byteLength);
  return new vr(t).set(new vr(e)), t;
}
function jl(e, t) {
  var n = t ? Pn(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var kl = /\w*$/;
function Pl(e) {
  var t = new e.constructor(e.source, kl.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var hr = le ? le.prototype : void 0;
var mr = hr ? hr.valueOf : void 0;
function Sl(e) {
  return mr ? Object(mr.call(e)) : {};
}
function Fl(e, t) {
  var n = t ? Pn(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var Cl = "[object Boolean]";
var Il = "[object Date]";
var Nl = "[object Map]";
var Dl = "[object Number]";
var Vl = "[object RegExp]";
var Rl = "[object Set]";
var Bl = "[object String]";
var Ml = "[object Symbol]";
var ql = "[object ArrayBuffer]";
var Ll = "[object DataView]";
var zl = "[object Float32Array]";
var Wl = "[object Float64Array]";
var Hl = "[object Int8Array]";
var Ul = "[object Int16Array]";
var Gl = "[object Int32Array]";
var Kl = "[object Uint8Array]";
var Yl = "[object Uint8ClampedArray]";
var Xl = "[object Uint16Array]";
var Zl = "[object Uint32Array]";
function Jl(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case ql:
      return Pn(e);
    case Cl:
    case Il:
      return new r(+e);
    case Ll:
      return jl(e, n);
    case zl:
    case Wl:
    case Hl:
    case Ul:
    case Gl:
    case Kl:
    case Yl:
    case Xl:
    case Zl:
      return Fl(e, n);
    case Nl:
      return new r();
    case Dl:
    case Bl:
      return new r(e);
    case Vl:
      return Pl(e);
    case Rl:
      return new r();
    case Ml:
      return Sl(e);
  }
}
function Ql(e) {
  return typeof e.constructor == "function" && !wn(e) ? Va(An(e)) : {};
}
var ec = "[object Map]";
function tc(e) {
  return Fe(e) && kn(e) == ec;
}
var gr = Me && Me.isMap;
var nc = gr ? On(gr) : tc;
var rc = nc;
var oc = "[object Set]";
function ac(e) {
  return Fe(e) && kn(e) == oc;
}
var yr = Me && Me.isSet;
var ic = yr ? On(yr) : ac;
var sc = ic;
var lc = 1;
var cc = 2;
var uc = 4;
var fo = "[object Arguments]";
var fc = "[object Array]";
var dc = "[object Boolean]";
var pc = "[object Date]";
var vc = "[object Error]";
var po = "[object Function]";
var hc = "[object GeneratorFunction]";
var mc = "[object Map]";
var gc = "[object Number]";
var vo = "[object Object]";
var yc = "[object RegExp]";
var bc = "[object Set]";
var wc = "[object String]";
var Oc = "[object Symbol]";
var xc = "[object WeakMap]";
var $c = "[object ArrayBuffer]";
var _c = "[object DataView]";
var Tc = "[object Float32Array]";
var Ec = "[object Float64Array]";
var Ac = "[object Int8Array]";
var jc = "[object Int16Array]";
var kc = "[object Int32Array]";
var Pc = "[object Uint8Array]";
var Sc = "[object Uint8ClampedArray]";
var Fc = "[object Uint16Array]";
var Cc = "[object Uint32Array]";
var D = {};
D[fo] = D[fc] = D[$c] = D[_c] = D[dc] = D[pc] = D[Tc] = D[Ec] = D[Ac] = D[jc] = D[kc] = D[mc] = D[gc] = D[vo] = D[yc] = D[bc] = D[wc] = D[Oc] = D[Pc] = D[Sc] = D[Fc] = D[Cc] = true;
D[vc] = D[po] = D[xc] = false;
function _t(e, t, n, r, o, a) {
  var s, i = t & lc, l = t & cc, u = t & uc;
  if (n && (s = o ? n(e, r, o, a) : n(e)), s !== void 0)
    return s;
  if (!he(e))
    return e;
  var c = Ce(e);
  if (c) {
    if (s = El(e), !i)
      return Ba(e, s);
  } else {
    var p = kn(e), w = p == po || p == hc;
    if (Qr(e))
      return al(e, i);
    if (p == vo || p == fo || w && !o) {
      if (s = l || w ? {} : Ql(e), !i)
        return l ? pl(e, rl(s, e)) : ul(e, nl(s, e));
    } else {
      if (!D[p])
        return o ? e : {};
      s = Jl(e, p, i);
    }
  }
  a || (a = new Ue());
  var y = a.get(e);
  if (y)
    return y;
  a.set(e, s), sc(e) ? e.forEach(function(v) {
    s.add(_t(v, t, n, v, e, a));
  }) : rc(e) && e.forEach(function(v, f) {
    s.set(f, _t(v, t, n, f, e, a));
  });
  var x = u ? l ? uo : vl : l ? $n : xn, d = c ? void 0 : x(e);
  return Xa(d || e, function(v, f) {
    d && (f = v, v = e[f]), Gr(s, f, _t(v, t, n, f, e, a));
  }), s;
}
var Ic = function() {
  return oe.Date.now();
};
var en = Ic;
var Nc = "Expected a function";
var Dc = Math.max;
var Vc = Math.min;
function sn(e, t, n) {
  var r, o, a, s, i, l, u = 0, c = false, p = false, w = true;
  if (typeof e != "function")
    throw new TypeError(Nc);
  t = Xn(t) || 0, he(n) && (c = !!n.leading, p = "maxWait" in n, a = p ? Dc(Xn(n.maxWait) || 0, t) : a, w = "trailing" in n ? !!n.trailing : w);
  function y(h2) {
    var $ = r, E = o;
    return r = o = void 0, u = h2, s = e.apply(E, $), s;
  }
  function x(h2) {
    return u = h2, i = setTimeout(f, t), c ? y(h2) : s;
  }
  function d(h2) {
    var $ = h2 - l, E = h2 - u, O = t - $;
    return p ? Vc(O, a - E) : O;
  }
  function v(h2) {
    var $ = h2 - l, E = h2 - u;
    return l === void 0 || $ >= t || $ < 0 || p && E >= a;
  }
  function f() {
    var h2 = en();
    if (v(h2))
      return _(h2);
    i = setTimeout(f, d(h2));
  }
  function _(h2) {
    return i = void 0, w && r ? y(h2) : (r = o = void 0, s);
  }
  function b() {
    i !== void 0 && clearTimeout(i), u = 0, r = l = o = i = void 0;
  }
  function g() {
    return i === void 0 ? s : _(en());
  }
  function m() {
    var h2 = en(), $ = v(h2);
    if (r = arguments, o = this, l = h2, $) {
      if (i === void 0)
        return x(l);
      if (p)
        return clearTimeout(i), i = setTimeout(f, t), y(l);
    }
    return i === void 0 && (i = setTimeout(f, t)), s;
  }
  return m.cancel = b, m.flush = g, m;
}
function Rc(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function Bc(e, t) {
  return t.length < 2 ? e : Rs(e, Ys(t, 0, -1));
}
function Mc(e) {
  return e == null;
}
function qc(e, t) {
  return t = Tn(t, e), e = Bc(e, t), e == null || delete e[ro(Rc(t))];
}
function Lc(e) {
  return Ks(e) ? void 0 : e;
}
var zc = 1;
var Wc = 2;
var Hc = 4;
var Uc = qs(function(e, t) {
  var n = {};
  if (e == null)
    return n;
  var r = false;
  t = zr(t, function(a) {
    return a = Tn(a, e), r || (r = a.length > 1), a;
  }), dt(e, uo(e), n), r && (n = _t(n, zc | Wc | Hc, Lc));
  for (var o = t.length; o--; )
    qc(n, t[o]);
  return n;
});
var Gc = Uc;
var Kc = defineComponent({
  name: "VkIcon",
  inheritAttrs: false
});
var z = defineComponent({
  ...Kc,
  props: {
    border: { type: Boolean },
    fixedWidth: { type: Boolean },
    flip: null,
    icon: null,
    mask: null,
    listItem: { type: Boolean },
    pull: null,
    pulse: { type: Boolean },
    rotation: null,
    swapOpacity: { type: Boolean },
    size: null,
    spin: { type: Boolean },
    transform: null,
    symbol: { type: [Boolean, String] },
    title: null,
    inverse: { type: Boolean },
    bounce: { type: Boolean },
    shake: { type: Boolean },
    beat: { type: Boolean },
    fade: { type: Boolean },
    beatFade: { type: Boolean },
    spinPulse: { type: Boolean },
    spinReverse: { type: Boolean },
    type: null,
    color: null
  },
  setup(e) {
    const t = e, n = computed(() => Gc(t, ["type", "color"])), r = computed(() => t.color ? { color: t.color } : {});
    return (o, a) => (openBlock(), createElementBlock("i", mergeProps({
      class: ["vk-icon", { [`vk-icon--${e.type}`]: e.type }],
      style: unref(r)
    }, o.$attrs), [
      createVNode(unref(FontAwesomeIcon), normalizeProps(guardReactiveProps(unref(n))), null, 16)
    ], 16));
  }
});
var Yc = ["disabled", "autofocus", "type"];
var Xc = defineComponent({
  name: "VkButton"
});
var Tt = defineComponent({
  ...Xc,
  props: {
    type: null,
    size: null,
    plain: { type: Boolean },
    round: { type: Boolean },
    circle: { type: Boolean },
    disabled: { type: Boolean },
    nativeType: { default: "button" },
    autofocus: { type: Boolean },
    icon: null,
    loading: { type: Boolean }
  },
  setup(e, { expose: t }) {
    const n = ref();
    return t({
      ref: n
    }), (r, o) => (openBlock(), createElementBlock("button", {
      ref_key: "_ref",
      ref: n,
      class: normalizeClass(["vk-button", {
        [`vk-button--${e.type}`]: e.type,
        [`vk-button--${e.size}`]: e.size,
        "is-plain": e.plain,
        "is-round": e.round,
        "is-circle": e.circle,
        "is-disabled": e.disabled,
        "is-loading": e.loading
      }]),
      disabled: e.disabled || e.loading,
      autofocus: e.autofocus,
      type: e.nativeType
    }, [
      e.loading ? (openBlock(), createBlock(z, {
        key: 0,
        icon: "spinner",
        spin: ""
      })) : createCommentVNode("", true),
      e.icon ? (openBlock(), createBlock(z, {
        key: 1,
        icon: e.icon
      }, null, 8, ["icon"])) : createCommentVNode("", true),
      createBaseVNode("span", null, [
        renderSlot(r.$slots, "default")
      ])
    ], 10, Yc));
  }
});
Tt.install = (e) => {
  e.component(Tt.name, Tt);
};
var Zc = { class: "vk-alert__content" };
var Jc = {
  key: 0,
  class: "vk-alert__close"
};
var Qc = defineComponent({
  name: "VkAlert"
});
var Et = defineComponent({
  ...Qc,
  props: {
    content: null,
    type: null,
    effect: { default: "light" },
    closable: { type: Boolean, default: true }
  },
  emits: ["close"],
  setup(e, { expose: t, emit: n }) {
    const r = ref(true), o = () => {
      r.value = false, n("close");
    };
    return t({
      hide: () => o()
    }), (a, s) => (openBlock(), createBlock(Transition, { name: "vk-alert-fade" }, {
      default: withCtx(() => [
        r.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["vk-alert", {
            [`vk-alert__${e.type}`]: e.type,
            [`vk-alert__${e.effect}`]: e.effect
          }])
        }, [
          createBaseVNode("div", Zc, [
            createTextVNode(toDisplayString(e.content) + " ", 1),
            createBaseVNode("span", null, [
              renderSlot(a.$slots, "default")
            ])
          ]),
          e.closable ? (openBlock(), createElementBlock("div", Jc, [
            createVNode(z, {
              onClick: s[0] || (s[0] = withModifiers((i) => r.value = false, ["stop"])),
              icon: "xmark"
            })
          ])) : createCommentVNode("", true)
        ], 2)) : createCommentVNode("", true)
      ]),
      _: 3
    }));
  }
});
Et.install = (e) => {
  e.component(Et.name, Et);
};
var ho = Symbol("collapseContextKey");
var eu = { class: "vk-collapse" };
var tu = defineComponent({
  name: "VkCollapse"
});
var At = defineComponent({
  ...tu,
  props: {
    modelValue: null,
    accordion: { type: Boolean }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const n = e, r = ref(n.modelValue);
    return watch(() => n.modelValue, () => {
      r.value = n.modelValue;
    }), n.accordion && r.value.length > 1 && console.warn("accordion mode should only have one acitve item"), provide(ho, {
      activeNames: r,
      handleItemClick: (a) => {
        let s = [...r.value];
        if (n.accordion)
          s = [r.value[0] === a ? "" : a], r.value = s;
        else {
          const i = s.indexOf(a);
          i > -1 ? s.splice(i, 1) : s.push(a), r.value = s;
        }
        t("update:modelValue", s), t("change", s);
      }
    }), (a, s) => (openBlock(), createElementBlock("div", eu, [
      renderSlot(a.$slots, "default")
    ]));
  }
});
var nu = ["id"];
var ru = { class: "vk-collapse-item__wrapper" };
var ou = ["id"];
var au = defineComponent({
  name: "VkCollapseItem"
});
var jt = defineComponent({
  ...au,
  props: {
    name: null,
    title: null,
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = inject(ho), r = computed(() => n == null ? void 0 : n.activeNames.value.includes(t.name)), o = () => {
      t.disabled || n == null || n.handleItemClick(t.name);
    }, a = {
      beforeEnter(s) {
        s.style.height = "0px", s.style.overflow = "hidden";
      },
      enter(s) {
        s.style.height = `${s.scrollHeight}px`;
      },
      afterEnter(s) {
        s.style.height = "", s.style.overflow = "";
      },
      beforeLeave(s) {
        s.style.height = `${s.scrollHeight}px`, s.style.overflow = "hidden";
      },
      leave(s) {
        s.style.height = "0px";
      },
      afterLeave(s) {
        s.style.height = "", s.style.overflow = "";
      }
    };
    return (s, i) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["vk-collapse-item", {
        "is-disabled": e.disabled
      }])
    }, [
      createBaseVNode("div", {
        class: normalizeClass(["vk-collapse-item__header", {
          "is-disabled": e.disabled,
          "is-active": unref(r)
        }]),
        id: `item-header-${e.name}`,
        onClick: o
      }, [
        renderSlot(s.$slots, "title", {}, () => [
          createTextVNode(toDisplayString(e.title), 1)
        ]),
        createVNode(z, {
          icon: "angle-right",
          class: "header-angle"
        })
      ], 10, nu),
      createVNode(Transition, mergeProps({ name: "slide" }, toHandlers(a)), {
        default: withCtx(() => [
          withDirectives(createBaseVNode("div", ru, [
            createBaseVNode("div", {
              class: "vk-collapse-item__content",
              id: `item-content-${e.name}`
            }, [
              renderSlot(s.$slots, "default")
            ], 8, ou)
          ], 512), [
            [vShow, unref(r)]
          ])
        ]),
        _: 3
      }, 16)
    ], 2));
  }
});
At.install = (e) => {
  e.component(At.name, At);
};
jt.install = (e) => {
  e.component(jt.name, jt);
};
var W = "top";
var J = "bottom";
var Q = "right";
var H = "left";
var Ht = "auto";
var pt = [W, J, Q, H];
var qe = "start";
var lt = "end";
var iu = "clippingParents";
var mo = "viewport";
var Xe = "popper";
var su = "reference";
var br = pt.reduce(function(e, t) {
  return e.concat([t + "-" + qe, t + "-" + lt]);
}, []);
var go = [].concat(pt, [Ht]).reduce(function(e, t) {
  return e.concat([t, t + "-" + qe, t + "-" + lt]);
}, []);
var lu = "beforeRead";
var cu = "read";
var uu = "afterRead";
var fu = "beforeMain";
var du = "main";
var pu = "afterMain";
var vu = "beforeWrite";
var hu = "write";
var mu = "afterWrite";
var ln = [lu, cu, uu, fu, du, pu, vu, hu, mu];
function ce(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ee(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Pe(e) {
  var t = ee(e).Element;
  return e instanceof t || e instanceof Element;
}
function Z(e) {
  var t = ee(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Sn(e) {
  if (typeof ShadowRoot > "u")
    return false;
  var t = ee(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function gu(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
    !Z(a) || !ce(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(s) {
      var i = o[s];
      i === false ? a.removeAttribute(s) : a.setAttribute(s, i === true ? "" : i);
    }));
  });
}
function yu(e) {
  var t = e.state, n = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], a = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), i = s.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !Z(o) || !ce(o) || (Object.assign(o.style, i), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
var bu = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: gu,
  effect: yu,
  requires: ["computeStyles"]
};
function ne(e) {
  return e.split("-")[0];
}
var Ae = Math.max;
var Mt = Math.min;
var Le = Math.round;
function cn() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function yo() {
  return !/^((?!chrome|android).)*safari/i.test(cn());
}
function ze(e, t, n) {
  t === void 0 && (t = false), n === void 0 && (n = false);
  var r = e.getBoundingClientRect(), o = 1, a = 1;
  t && Z(e) && (o = e.offsetWidth > 0 && Le(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && Le(r.height) / e.offsetHeight || 1);
  var s = Pe(e) ? ee(e) : window, i = s.visualViewport, l = !yo() && n, u = (r.left + (l && i ? i.offsetLeft : 0)) / o, c = (r.top + (l && i ? i.offsetTop : 0)) / a, p = r.width / o, w = r.height / a;
  return {
    width: p,
    height: w,
    top: c,
    right: u + p,
    bottom: c + w,
    left: u,
    x: u,
    y: c
  };
}
function Fn(e) {
  var t = ze(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function bo(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return true;
  if (n && Sn(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return true;
      r = r.parentNode || r.host;
    } while (r);
  }
  return false;
}
function re(e) {
  return ee(e).getComputedStyle(e);
}
function wu(e) {
  return ["table", "td", "th"].indexOf(ce(e)) >= 0;
}
function ge(e) {
  return ((Pe(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Ut(e) {
  return ce(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Sn(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    ge(e)
  );
}
function wr(e) {
  return !Z(e) || // https://github.com/popperjs/popper-core/issues/837
  re(e).position === "fixed" ? null : e.offsetParent;
}
function Ou(e) {
  var t = /firefox/i.test(cn()), n = /Trident/i.test(cn());
  if (n && Z(e)) {
    var r = re(e);
    if (r.position === "fixed")
      return null;
  }
  var o = Ut(e);
  for (Sn(o) && (o = o.host); Z(o) && ["html", "body"].indexOf(ce(o)) < 0; ) {
    var a = re(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function vt(e) {
  for (var t = ee(e), n = wr(e); n && wu(n) && re(n).position === "static"; )
    n = wr(n);
  return n && (ce(n) === "html" || ce(n) === "body" && re(n).position === "static") ? t : n || Ou(e) || t;
}
function Cn(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Qe(e, t, n) {
  return Ae(e, Mt(t, n));
}
function xu(e, t, n) {
  var r = Qe(e, t, n);
  return r > n ? n : r;
}
function wo() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Oo(e) {
  return Object.assign({}, wo(), e);
}
function xo(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var $u = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Oo(typeof t != "number" ? t : xo(t, pt));
};
function _u(e) {
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, i = ne(n.placement), l = Cn(i), u = [H, Q].indexOf(i) >= 0, c = u ? "height" : "width";
  if (!(!a || !s)) {
    var p = $u(o.padding, n), w = Fn(a), y = l === "y" ? W : H, x = l === "y" ? J : Q, d = n.rects.reference[c] + n.rects.reference[l] - s[l] - n.rects.popper[c], v = s[l] - n.rects.reference[l], f = vt(a), _ = f ? l === "y" ? f.clientHeight || 0 : f.clientWidth || 0 : 0, b = d / 2 - v / 2, g = p[y], m = _ - w[c] - p[x], h2 = _ / 2 - w[c] / 2 + b, $ = Qe(g, h2, m), E = l;
    n.modifiersData[r] = (t = {}, t[E] = $, t.centerOffset = $ - h2, t);
  }
}
function Tu(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  if (o != null && !(typeof o == "string" && (o = t.elements.popper.querySelector(o), !o))) {
    if (Z(o) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" ")), !bo(t.elements.popper, o)) {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    t.elements.arrow = o;
  }
}
var Eu = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: _u,
  effect: Tu,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function We(e) {
  return e.split("-")[1];
}
var Au = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function ju(e) {
  var t = e.x, n = e.y, r = window, o = r.devicePixelRatio || 1;
  return {
    x: Le(t * o) / o || 0,
    y: Le(n * o) / o || 0
  };
}
function Or(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, i = e.position, l = e.gpuAcceleration, u = e.adaptive, c = e.roundOffsets, p = e.isFixed, w = s.x, y = w === void 0 ? 0 : w, x = s.y, d = x === void 0 ? 0 : x, v = typeof c == "function" ? c({
    x: y,
    y: d
  }) : {
    x: y,
    y: d
  };
  y = v.x, d = v.y;
  var f = s.hasOwnProperty("x"), _ = s.hasOwnProperty("y"), b = H, g = W, m = window;
  if (u) {
    var h2 = vt(n), $ = "clientHeight", E = "clientWidth";
    if (h2 === ee(n) && (h2 = ge(n), re(h2).position !== "static" && i === "absolute" && ($ = "scrollHeight", E = "scrollWidth")), h2 = h2, o === W || (o === H || o === Q) && a === lt) {
      g = J;
      var O = p && h2 === m && m.visualViewport ? m.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        h2[$]
      );
      d -= O - r.height, d *= l ? 1 : -1;
    }
    if (o === H || (o === W || o === J) && a === lt) {
      b = Q;
      var j = p && h2 === m && m.visualViewport ? m.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        h2[E]
      );
      y -= j - r.width, y *= l ? 1 : -1;
    }
  }
  var T = Object.assign({
    position: i
  }, u && Au), I = c === true ? ju({
    x: y,
    y: d
  }) : {
    x: y,
    y: d
  };
  if (y = I.x, d = I.y, l) {
    var F;
    return Object.assign({}, T, (F = {}, F[g] = _ ? "0" : "", F[b] = f ? "0" : "", F.transform = (m.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + d + "px)" : "translate3d(" + y + "px, " + d + "px, 0)", F));
  }
  return Object.assign({}, T, (t = {}, t[g] = _ ? d + "px" : "", t[b] = f ? y + "px" : "", t.transform = "", t));
}
function ku(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? true : r, a = n.adaptive, s = a === void 0 ? true : a, i = n.roundOffsets, l = i === void 0 ? true : i;
  if (true) {
    var u = re(t.elements.popper).transitionProperty || "";
    s && ["transform", "top", "right", "bottom", "left"].some(function(p) {
      return u.indexOf(p) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var c = {
    placement: ne(t.placement),
    variation: We(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Or(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Or(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: false,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
var Pu = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: ku,
  data: {}
};
var Ot = {
  passive: true
};
function Su(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? true : o, s = r.resize, i = s === void 0 ? true : s, l = ee(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && u.forEach(function(c) {
    c.addEventListener("scroll", n.update, Ot);
  }), i && l.addEventListener("resize", n.update, Ot), function() {
    a && u.forEach(function(c) {
      c.removeEventListener("scroll", n.update, Ot);
    }), i && l.removeEventListener("resize", n.update, Ot);
  };
}
var Fu = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function() {
  },
  effect: Su,
  data: {}
};
var Cu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function kt(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Cu[t];
  });
}
var Iu = {
  start: "end",
  end: "start"
};
function xr(e) {
  return e.replace(/start|end/g, function(t) {
    return Iu[t];
  });
}
function In(e) {
  var t = ee(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Nn(e) {
  return ze(ge(e)).left + In(e).scrollLeft;
}
function Nu(e, t) {
  var n = ee(e), r = ge(e), o = n.visualViewport, a = r.clientWidth, s = r.clientHeight, i = 0, l = 0;
  if (o) {
    a = o.width, s = o.height;
    var u = yo();
    (u || !u && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: i + Nn(e),
    y: l
  };
}
function Du(e) {
  var t, n = ge(e), r = In(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = Ae(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Ae(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -r.scrollLeft + Nn(e), l = -r.scrollTop;
  return re(o || n).direction === "rtl" && (i += Ae(n.clientWidth, o ? o.clientWidth : 0) - a), {
    width: a,
    height: s,
    x: i,
    y: l
  };
}
function Dn(e) {
  var t = re(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function $o(e) {
  return ["html", "body", "#document"].indexOf(ce(e)) >= 0 ? e.ownerDocument.body : Z(e) && Dn(e) ? e : $o(Ut(e));
}
function et(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = $o(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = ee(r), s = o ? [a].concat(a.visualViewport || [], Dn(r) ? r : []) : r, i = t.concat(s);
  return o ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(et(Ut(s)))
  );
}
function un(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Vu(e, t) {
  var n = ze(e, false, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function $r(e, t, n) {
  return t === mo ? un(Nu(e, n)) : Pe(t) ? Vu(t, n) : un(Du(ge(e)));
}
function Ru(e) {
  var t = et(Ut(e)), n = ["absolute", "fixed"].indexOf(re(e).position) >= 0, r = n && Z(e) ? vt(e) : e;
  return Pe(r) ? t.filter(function(o) {
    return Pe(o) && bo(o, r) && ce(o) !== "body";
  }) : [];
}
function Bu(e, t, n, r) {
  var o = t === "clippingParents" ? Ru(e) : [].concat(t), a = [].concat(o, [n]), s = a[0], i = a.reduce(function(l, u) {
    var c = $r(e, u, r);
    return l.top = Ae(c.top, l.top), l.right = Mt(c.right, l.right), l.bottom = Mt(c.bottom, l.bottom), l.left = Ae(c.left, l.left), l;
  }, $r(e, s, r));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function _o(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? ne(r) : null, a = r ? We(r) : null, s = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case W:
      l = {
        x: s,
        y: t.y - n.height
      };
      break;
    case J:
      l = {
        x: s,
        y: t.y + t.height
      };
      break;
    case Q:
      l = {
        x: t.x + t.width,
        y: i
      };
      break;
    case H:
      l = {
        x: t.x - n.width,
        y: i
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var u = o ? Cn(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (a) {
      case qe:
        l[u] = l[u] - (t[c] / 2 - n[c] / 2);
        break;
      case lt:
        l[u] = l[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return l;
}
function ct(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.strategy, s = a === void 0 ? e.strategy : a, i = n.boundary, l = i === void 0 ? iu : i, u = n.rootBoundary, c = u === void 0 ? mo : u, p = n.elementContext, w = p === void 0 ? Xe : p, y = n.altBoundary, x = y === void 0 ? false : y, d = n.padding, v = d === void 0 ? 0 : d, f = Oo(typeof v != "number" ? v : xo(v, pt)), _ = w === Xe ? su : Xe, b = e.rects.popper, g = e.elements[x ? _ : w], m = Bu(Pe(g) ? g : g.contextElement || ge(e.elements.popper), l, c, s), h2 = ze(e.elements.reference), $ = _o({
    reference: h2,
    element: b,
    strategy: "absolute",
    placement: o
  }), E = un(Object.assign({}, b, $)), O = w === Xe ? E : h2, j = {
    top: m.top - O.top + f.top,
    bottom: O.bottom - m.bottom + f.bottom,
    left: m.left - O.left + f.left,
    right: O.right - m.right + f.right
  }, T = e.modifiersData.offset;
  if (w === Xe && T) {
    var I = T[o];
    Object.keys(j).forEach(function(F) {
      var ae = [Q, J].indexOf(F) >= 0 ? 1 : -1, ye = [W, J].indexOf(F) >= 0 ? "y" : "x";
      j[F] += I[ye] * ae;
    });
  }
  return j;
}
function Mu(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, s = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? go : l, c = We(r), p = c ? i ? br : br.filter(function(x) {
    return We(x) === c;
  }) : pt, w = p.filter(function(x) {
    return u.indexOf(x) >= 0;
  });
  w.length === 0 && (w = p, console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var y = w.reduce(function(x, d) {
    return x[d] = ct(e, {
      placement: d,
      boundary: o,
      rootBoundary: a,
      padding: s
    })[ne(d)], x;
  }, {});
  return Object.keys(y).sort(function(x, d) {
    return y[x] - y[d];
  });
}
function qu(e) {
  if (ne(e) === Ht)
    return [];
  var t = kt(e);
  return [xr(e), t, xr(t)];
}
function Lu(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? true : o, s = n.altAxis, i = s === void 0 ? true : s, l = n.fallbackPlacements, u = n.padding, c = n.boundary, p = n.rootBoundary, w = n.altBoundary, y = n.flipVariations, x = y === void 0 ? true : y, d = n.allowedAutoPlacements, v = t.options.placement, f = ne(v), _ = f === v, b = l || (_ || !x ? [kt(v)] : qu(v)), g = [v].concat(b).reduce(function(De, fe) {
      return De.concat(ne(fe) === Ht ? Mu(t, {
        placement: fe,
        boundary: c,
        rootBoundary: p,
        padding: u,
        flipVariations: x,
        allowedAutoPlacements: d
      }) : fe);
    }, []), m = t.rects.reference, h2 = t.rects.popper, $ = /* @__PURE__ */ new Map(), E = true, O = g[0], j = 0; j < g.length; j++) {
      var T = g[j], I = ne(T), F = We(T) === qe, ae = [W, J].indexOf(I) >= 0, ye = ae ? "width" : "height", U = ct(t, {
        placement: T,
        boundary: c,
        rootBoundary: p,
        altBoundary: w,
        padding: u
      }), te = ae ? F ? Q : H : F ? J : W;
      m[ye] > h2[ye] && (te = kt(te));
      var mt = kt(te), be = [];
      if (a && be.push(U[I] <= 0), i && be.push(U[te] <= 0, U[mt] <= 0), be.every(function(De) {
        return De;
      })) {
        O = T, E = false;
        break;
      }
      $.set(T, be);
    }
    if (E)
      for (var gt = x ? 3 : 1, Kt = function(fe) {
        var Ke = g.find(function(bt) {
          var we = $.get(bt);
          if (we)
            return we.slice(0, fe).every(function(Yt) {
              return Yt;
            });
        });
        if (Ke)
          return O = Ke, "break";
      }, Ge = gt; Ge > 0; Ge--) {
        var yt = Kt(Ge);
        if (yt === "break")
          break;
      }
    t.placement !== O && (t.modifiersData[r]._skip = true, t.placement = O, t.reset = true);
  }
}
var zu = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: Lu,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function _r(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function Tr(e) {
  return [W, Q, J, H].some(function(t) {
    return e[t] >= 0;
  });
}
function Wu(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = ct(t, {
    elementContext: "reference"
  }), i = ct(t, {
    altBoundary: true
  }), l = _r(s, r), u = _r(i, o, a), c = Tr(l), p = Tr(u);
  t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: p
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": p
  });
}
var Hu = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Wu
};
function Uu(e, t, n) {
  var r = ne(e), o = [H, W].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * o, [H, Q].indexOf(r) >= 0 ? {
    x: i,
    y: s
  } : {
    x: s,
    y: i
  };
}
function Gu(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, s = go.reduce(function(c, p) {
    return c[p] = Uu(p, t.rects, a), c;
  }, {}), i = s[t.placement], l = i.x, u = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
var Ku = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Gu
};
function Yu(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = _o({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
var Xu = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: Yu,
  data: {}
};
function Zu(e) {
  return e === "x" ? "y" : "x";
}
function Ju(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? true : o, s = n.altAxis, i = s === void 0 ? false : s, l = n.boundary, u = n.rootBoundary, c = n.altBoundary, p = n.padding, w = n.tether, y = w === void 0 ? true : w, x = n.tetherOffset, d = x === void 0 ? 0 : x, v = ct(t, {
    boundary: l,
    rootBoundary: u,
    padding: p,
    altBoundary: c
  }), f = ne(t.placement), _ = We(t.placement), b = !_, g = Cn(f), m = Zu(g), h2 = t.modifiersData.popperOffsets, $ = t.rects.reference, E = t.rects.popper, O = typeof d == "function" ? d(Object.assign({}, t.rects, {
    placement: t.placement
  })) : d, j = typeof O == "number" ? {
    mainAxis: O,
    altAxis: O
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, O), T = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, I = {
    x: 0,
    y: 0
  };
  if (h2) {
    if (a) {
      var F, ae = g === "y" ? W : H, ye = g === "y" ? J : Q, U = g === "y" ? "height" : "width", te = h2[g], mt = te + v[ae], be = te - v[ye], gt = y ? -E[U] / 2 : 0, Kt = _ === qe ? $[U] : E[U], Ge = _ === qe ? -E[U] : -$[U], yt = t.elements.arrow, De = y && yt ? Fn(yt) : {
        width: 0,
        height: 0
      }, fe = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : wo(), Ke = fe[ae], bt = fe[ye], we = Qe(0, $[U], De[U]), Yt = b ? $[U] / 2 - gt - we - Ke - j.mainAxis : Kt - we - Ke - j.mainAxis, So = b ? -$[U] / 2 + gt + we + bt + j.mainAxis : Ge + we + bt + j.mainAxis, Xt = t.elements.arrow && vt(t.elements.arrow), Fo = Xt ? g === "y" ? Xt.clientTop || 0 : Xt.clientLeft || 0 : 0, Vn = (F = T == null ? void 0 : T[g]) != null ? F : 0, Co = te + Yt - Vn - Fo, Io = te + So - Vn, Rn = Qe(y ? Mt(mt, Co) : mt, te, y ? Ae(be, Io) : be);
      h2[g] = Rn, I[g] = Rn - te;
    }
    if (i) {
      var Bn, No = g === "x" ? W : H, Do = g === "x" ? J : Q, Oe = h2[m], wt = m === "y" ? "height" : "width", Mn = Oe + v[No], qn = Oe - v[Do], Zt = [W, H].indexOf(f) !== -1, Ln = (Bn = T == null ? void 0 : T[m]) != null ? Bn : 0, zn = Zt ? Mn : Oe - $[wt] - E[wt] - Ln + j.altAxis, Wn = Zt ? Oe + $[wt] + E[wt] - Ln - j.altAxis : qn, Hn = y && Zt ? xu(zn, Oe, Wn) : Qe(y ? zn : Mn, Oe, y ? Wn : qn);
      h2[m] = Hn, I[m] = Hn - Oe;
    }
    t.modifiersData[r] = I;
  }
}
var Qu = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: Ju,
  requiresIfExists: ["offset"]
};
function ef(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function tf(e) {
  return e === ee(e) || !Z(e) ? In(e) : ef(e);
}
function nf(e) {
  var t = e.getBoundingClientRect(), n = Le(t.width) / e.offsetWidth || 1, r = Le(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function rf(e, t, n) {
  n === void 0 && (n = false);
  var r = Z(t), o = Z(t) && nf(t), a = ge(t), s = ze(e, o, n), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((ce(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Dn(a)) && (i = tf(t)), Z(t) ? (l = ze(t, true), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Nn(a))), {
    x: s.left + i.scrollLeft - l.x,
    y: s.top + i.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function of(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function o(a) {
    n.add(a.name);
    var s = [].concat(a.requires || [], a.requiresIfExists || []);
    s.forEach(function(i) {
      if (!n.has(i)) {
        var l = t.get(i);
        l && o(l);
      }
    }), r.push(a);
  }
  return e.forEach(function(a) {
    n.has(a.name) || o(a);
  }), r;
}
function af(e) {
  var t = of(e);
  return ln.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function sf(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function de(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return [].concat(n).reduce(function(o, a) {
    return o.replace(/%s/, a);
  }, e);
}
var xe = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var lf = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var Er = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function cf(e) {
  e.forEach(function(t) {
    [].concat(Object.keys(t), Er).filter(function(n, r, o) {
      return o.indexOf(n) === r;
    }).forEach(function(n) {
      switch (n) {
        case "name":
          typeof t.name != "string" && console.error(de(xe, String(t.name), '"name"', '"string"', '"' + String(t.name) + '"'));
          break;
        case "enabled":
          typeof t.enabled != "boolean" && console.error(de(xe, t.name, '"enabled"', '"boolean"', '"' + String(t.enabled) + '"'));
          break;
        case "phase":
          ln.indexOf(t.phase) < 0 && console.error(de(xe, t.name, '"phase"', "either " + ln.join(", "), '"' + String(t.phase) + '"'));
          break;
        case "fn":
          typeof t.fn != "function" && console.error(de(xe, t.name, '"fn"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "effect":
          t.effect != null && typeof t.effect != "function" && console.error(de(xe, t.name, '"effect"', '"function"', '"' + String(t.fn) + '"'));
          break;
        case "requires":
          t.requires != null && !Array.isArray(t.requires) && console.error(de(xe, t.name, '"requires"', '"array"', '"' + String(t.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(t.requiresIfExists) || console.error(de(xe, t.name, '"requiresIfExists"', '"array"', '"' + String(t.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + t.name + '" modifier, valid properties are ' + Er.map(function(r) {
            return '"' + r + '"';
          }).join(", ") + '; but "' + n + '" was provided.');
      }
      t.requires && t.requires.forEach(function(r) {
        e.find(function(o) {
          return o.name === r;
        }) == null && console.error(de(lf, String(t.name), r, r));
      });
    });
  });
}
function uf(e, t) {
  var n = /* @__PURE__ */ new Set();
  return e.filter(function(r) {
    var o = t(r);
    if (!n.has(o))
      return n.add(o), true;
  });
}
function ff(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, {
      options: Object.assign({}, o.options, r.options),
      data: Object.assign({}, o.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Ar = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
var df = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
var jr = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function kr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function pf(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, a = o === void 0 ? jr : o;
  return function(i, l, u) {
    u === void 0 && (u = a);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, jr, a),
      modifiersData: {},
      elements: {
        reference: i,
        popper: l
      },
      attributes: {},
      styles: {}
    }, p = [], w = false, y = {
      state: c,
      setOptions: function(f) {
        var _ = typeof f == "function" ? f(c.options) : f;
        d(), c.options = Object.assign({}, a, c.options, _), c.scrollParents = {
          reference: Pe(i) ? et(i) : i.contextElement ? et(i.contextElement) : [],
          popper: et(l)
        };
        var b = af(ff([].concat(r, c.options.modifiers)));
        if (c.orderedModifiers = b.filter(function(T) {
          return T.enabled;
        }), true) {
          var g = uf([].concat(b, c.options.modifiers), function(T) {
            var I = T.name;
            return I;
          });
          if (cf(g), ne(c.options.placement) === Ht) {
            var m = c.orderedModifiers.find(function(T) {
              var I = T.name;
              return I === "flip";
            });
            m || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var h2 = re(l), $ = h2.marginTop, E = h2.marginRight, O = h2.marginBottom, j = h2.marginLeft;
          [$, E, O, j].some(function(T) {
            return parseFloat(T);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return x(), y.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!w) {
          var f = c.elements, _ = f.reference, b = f.popper;
          if (!kr(_, b)) {
            console.error(Ar);
            return;
          }
          c.rects = {
            reference: rf(_, vt(b), c.options.strategy === "fixed"),
            popper: Fn(b)
          }, c.reset = false, c.placement = c.options.placement, c.orderedModifiers.forEach(function(T) {
            return c.modifiersData[T.name] = Object.assign({}, T.data);
          });
          for (var g = 0, m = 0; m < c.orderedModifiers.length; m++) {
            if (g += 1, g > 100) {
              console.error(df);
              break;
            }
            if (c.reset === true) {
              c.reset = false, m = -1;
              continue;
            }
            var h2 = c.orderedModifiers[m], $ = h2.fn, E = h2.options, O = E === void 0 ? {} : E, j = h2.name;
            typeof $ == "function" && (c = $({
              state: c,
              options: O,
              name: j,
              instance: y
            }) || c);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: sf(function() {
        return new Promise(function(v) {
          y.forceUpdate(), v(c);
        });
      }),
      destroy: function() {
        d(), w = true;
      }
    };
    if (!kr(i, l))
      return console.error(Ar), y;
    y.setOptions(u).then(function(v) {
      !w && u.onFirstUpdate && u.onFirstUpdate(v);
    });
    function x() {
      c.orderedModifiers.forEach(function(v) {
        var f = v.name, _ = v.options, b = _ === void 0 ? {} : _, g = v.effect;
        if (typeof g == "function") {
          var m = g({
            state: c,
            name: f,
            instance: y,
            options: b
          }), h2 = function() {
          };
          p.push(m || h2);
        }
      });
    }
    function d() {
      p.forEach(function(v) {
        return v();
      }), p = [];
    }
    return y;
  };
}
var vf = [Fu, Xu, Pu, bu, Ku, zu, Qu, Eu, Hu];
var hf = pf({
  defaultModifiers: vf
});
var mf = (e, t) => {
  const n = (r) => {
    e.value && r.target && (e.value.contains(r.target) || t(r));
  };
  onMounted(() => {
    document.addEventListener("click", n);
  }), onUnmounted(() => {
    document.removeEventListener("click", n);
  });
};
var gf = createBaseVNode("div", {
  id: "arrow",
  "data-popper-arrow": ""
}, null, -1);
var yf = defineComponent({
  name: "VkTooltip"
});
var Be = defineComponent({
  ...yf,
  props: {
    content: null,
    trigger: { default: "hover" },
    placement: { default: "bottom" },
    manual: { type: Boolean },
    popperOptions: null,
    transition: { default: "fade" },
    openDelay: { default: 0 },
    closeDelay: { default: 0 }
  },
  emits: ["visible-change", "click-outside"],
  setup(e, { expose: t, emit: n }) {
    const r = e, o = ref(false), a = ref(), s = ref(), i = ref();
    let l = null, u = reactive({}), c = reactive({}), p = reactive({});
    const w = computed(
      () => r.trigger === "hover" && r.closeDelay === 0 ? 50 : r.closeDelay
    );
    let y = 0, x = 0;
    const d = computed(() => ({
      placement: r.placement,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 9]
          }
        }
      ],
      ...r.popperOptions
    })), v = () => {
      y++, console.log("open times", y), o.value = true, n("visible-change", true);
    }, f = () => {
      x++, console.log("close times", x), o.value = false, n("visible-change", false);
    }, _ = sn(v, r.openDelay), b = sn(f, w.value), g = () => {
      b.cancel(), _();
    }, m = () => {
      _.cancel(), b();
    }, h2 = () => {
      o.value ? m() : g();
    };
    mf(i, () => {
      r.trigger === "click" && o.value && !r.manual && m(), o.value && n("click-outside", true);
    });
    const $ = () => {
      r.trigger === "hover" ? (u.mouseenter = g, c.mouseleave = m, p.mouseenter = g) : r.trigger === "click" && (u.click = h2);
    };
    return r.manual || $(), watch(() => r.manual, (E) => {
      E ? (u = {}, c = {}) : $();
    }), watch(() => r.trigger, (E, O) => {
      E !== O && (u = {}, c = {}, $());
    }), watch(o, (E) => {
      E && (s.value && a.value ? l = hf(s.value, a.value, d.value) : l == null || l.destroy());
    }, { flush: "post" }), onUnmounted(() => {
      l == null || l.destroy();
    }), t({
      show: g,
      hide: m
    }), (E, O) => (openBlock(), createElementBlock("div", mergeProps({
      class: "vk-tooltip",
      ref_key: "popperContainerNode",
      ref: i
    }, toHandlers(unref(c), true)), [
      createBaseVNode("div", mergeProps({
        class: "vk-tooltip__trigger",
        ref_key: "triggerNode",
        ref: s
      }, toHandlers(unref(u), true)), [
        renderSlot(E.$slots, "default")
      ], 16),
      createVNode(Transition, { name: e.transition }, {
        default: withCtx(() => [
          o.value ? (openBlock(), createElementBlock("div", mergeProps({
            key: 0,
            class: "vk-tooltip__popper",
            ref_key: "popperNode",
            ref: a
          }, toHandlers(unref(p), true)), [
            renderSlot(E.$slots, "content", {}, () => [
              createTextVNode(toDisplayString(e.content), 1)
            ]),
            gf
          ], 16)) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["name"])
    ], 16));
  }
});
var Gt = defineComponent({
  props: {
    vNode: {
      type: [String, Object],
      required: true
    }
  },
  setup(e) {
    return () => e.vNode;
  }
});
var bf = { class: "vk-dropdown" };
var wf = { class: "vk-dropdown__menu" };
var Of = {
  key: 0,
  role: "separator",
  class: "divided-placeholder"
};
var xf = ["onClick", "id"];
var $f = defineComponent({
  name: "VkDropdown"
});
var Pt = defineComponent({
  ...$f,
  props: {
    content: null,
    trigger: null,
    placement: null,
    manual: { type: Boolean },
    popperOptions: null,
    transition: null,
    openDelay: null,
    closeDelay: null,
    menuOptions: null,
    hideAfterClick: { type: Boolean, default: true }
  },
  emits: ["visible-change", "select"],
  setup(e, { expose: t, emit: n }) {
    const r = e, o = ref(null), a = (i) => {
      n("visible-change", i);
    }, s = (i) => {
      var l;
      i.disabled || (n("select", i), r.hideAfterClick && ((l = o.value) == null || l.hide()));
    };
    return t({
      show: () => {
        var i;
        return (i = o.value) == null ? void 0 : i.show();
      },
      hide: () => {
        var i;
        return (i = o.value) == null ? void 0 : i.hide();
      }
    }), (i, l) => (openBlock(), createElementBlock("div", bf, [
      createVNode(Be, {
        trigger: e.trigger,
        placement: e.placement,
        "popper-options": e.popperOptions,
        "open-delay": e.openDelay,
        "close-delay": e.closeDelay,
        manual: e.manual,
        onVisibleChange: a,
        ref_key: "tooltipRef",
        ref: o
      }, {
        content: withCtx(() => [
          createBaseVNode("ul", wf, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(e.menuOptions, (u) => (openBlock(), createElementBlock(Fragment, {
              key: u.key
            }, [
              u.divided ? (openBlock(), createElementBlock("li", Of)) : createCommentVNode("", true),
              createBaseVNode("li", {
                class: normalizeClass(["vk-dropdown__item", { "is-disabled": u.disabled, "is-divided": u.divided }]),
                onClick: (c) => s(u),
                id: `dropdown-item-${u.key}`
              }, [
                createVNode(unref(Gt), {
                  vNode: u.label
                }, null, 8, ["vNode"])
              ], 10, xf)
            ], 64))), 128))
          ])
        ]),
        default: withCtx(() => [
          renderSlot(i.$slots, "default")
        ]),
        _: 3
      }, 8, ["trigger", "placement", "popper-options", "open-delay", "close-delay", "manual"])
    ]));
  }
});
Pt.install = (e) => {
  e.component(Pt.name, Pt);
};
var _f = {
  model: {
    type: Object
  },
  rules: {
    type: Object
  }
};
var Tf = {
  label: {
    type: String
  },
  prop: {
    type: String
  },
  showMessage: {
    type: Boolean,
    default: true
  }
};
var To = Symbol("formContextKey");
var Eo = Symbol("formItemContextKey");
var Ef = { class: "vk-form" };
var Af = defineComponent({
  name: "VkForm"
});
var St = defineComponent({
  ...Af,
  props: _f,
  setup(e, { expose: t }) {
    const n = e, r = [], o = (u) => {
      r.push(u);
    }, a = (u) => {
      u.prop && r.splice(r.indexOf(u), 1);
    }, s = (u = []) => {
      (u.length > 0 ? r.filter((p) => u.includes(p.prop)) : r).forEach((p) => p.resetField());
    }, i = (u = []) => {
      (u.length > 0 ? r.filter((p) => u.includes(p.prop)) : r).forEach((p) => p.clearValidate());
    }, l = async () => {
      let u = {};
      for (const c of r)
        try {
          await c.validate("");
        } catch (p) {
          u = {
            ...u,
            ...p.fields
          };
        }
      return Object.keys(u).length === 0 ? true : Promise.reject(u);
    };
    return t({
      /** @description validate form */
      validate: l,
      /** @description reset fields */
      resetFields: s,
      /** @description clear validation status */
      clearValidate: i
    }), provide(
      To,
      {
        ...n,
        addField: o,
        removeField: a,
        resetFields: s,
        clearValidate: i,
        validate: l
      }
    ), (u, c) => (openBlock(), createElementBlock("form", Ef, [
      renderSlot(u.$slots, "default")
    ]));
  }
});
function _e() {
  return _e = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, _e.apply(this, arguments);
}
function jf(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ut(e, t);
}
function fn(e) {
  return fn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, fn(e);
}
function ut(e, t) {
  return ut = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, ut(e, t);
}
function kf() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return false;
  if (typeof Proxy == "function")
    return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch {
    return false;
  }
}
function Ft(e, t, n) {
  return kf() ? Ft = Reflect.construct.bind() : Ft = function(o, a, s) {
    var i = [null];
    i.push.apply(i, a);
    var l = Function.bind.apply(o, i), u = new l();
    return s && ut(u, s.prototype), u;
  }, Ft.apply(null, arguments);
}
function Pf(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function dn(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return dn = function(r) {
    if (r === null || !Pf(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r))
        return t.get(r);
      t.set(r, o);
    }
    function o() {
      return Ft(r, arguments, fn(this).constructor);
    }
    return o.prototype = Object.create(r.prototype, {
      constructor: {
        value: o,
        enumerable: false,
        writable: true,
        configurable: true
      }
    }), ut(o, r);
  }, dn(e);
}
var Sf = /%[sdj%]/g;
var Ao = function() {
};
typeof process < "u" && process.env && true && typeof window < "u" && typeof document < "u" && (Ao = function(t, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(r) {
    return typeof r == "string";
  }) && console.warn(t, n);
});
function pn(e) {
  if (!e || !e.length)
    return null;
  var t = {};
  return e.forEach(function(n) {
    var r = n.field;
    t[r] = t[r] || [], t[r].push(n);
  }), t;
}
function K(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var o = 0, a = n.length;
  if (typeof e == "function")
    return e.apply(null, n);
  if (typeof e == "string") {
    var s = e.replace(Sf, function(i) {
      if (i === "%%")
        return "%";
      if (o >= a)
        return i;
      switch (i) {
        case "%s":
          return String(n[o++]);
        case "%d":
          return Number(n[o++]);
        case "%j":
          try {
            return JSON.stringify(n[o++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return i;
      }
    });
    return s;
  }
  return e;
}
function Ff(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function q(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || Ff(t) && typeof e == "string" && !e);
}
function Cf(e, t, n) {
  var r = [], o = 0, a = e.length;
  function s(i) {
    r.push.apply(r, i || []), o++, o === a && n(r);
  }
  e.forEach(function(i) {
    t(i, s);
  });
}
function Pr(e, t, n) {
  var r = 0, o = e.length;
  function a(s) {
    if (s && s.length) {
      n(s);
      return;
    }
    var i = r;
    r = r + 1, i < o ? t(e[i], a) : n([]);
  }
  a([]);
}
function If(e) {
  var t = [];
  return Object.keys(e).forEach(function(n) {
    t.push.apply(t, e[n] || []);
  }), t;
}
var Sr = function(e) {
  jf(t, e);
  function t(n, r) {
    var o;
    return o = e.call(this, "Async Validation Error") || this, o.errors = n, o.fields = r, o;
  }
  return t;
}(dn(Error));
function Nf(e, t, n, r, o) {
  if (t.first) {
    var a = new Promise(function(w, y) {
      var x = function(f) {
        return r(f), f.length ? y(new Sr(f, pn(f))) : w(o);
      }, d = If(e);
      Pr(d, n, x);
    });
    return a.catch(function(w) {
      return w;
    }), a;
  }
  var s = t.firstFields === true ? Object.keys(e) : t.firstFields || [], i = Object.keys(e), l = i.length, u = 0, c = [], p = new Promise(function(w, y) {
    var x = function(v) {
      if (c.push.apply(c, v), u++, u === l)
        return r(c), c.length ? y(new Sr(c, pn(c))) : w(o);
    };
    i.length || (r(c), w(o)), i.forEach(function(d) {
      var v = e[d];
      s.indexOf(d) !== -1 ? Pr(v, n, x) : Cf(v, n, x);
    });
  });
  return p.catch(function(w) {
    return w;
  }), p;
}
function Df(e) {
  return !!(e && e.message !== void 0);
}
function Vf(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null)
      return n;
    n = n[t[r]];
  }
  return n;
}
function Fr(e, t) {
  return function(n) {
    var r;
    return e.fullFields ? r = Vf(t, e.fullFields) : r = t[n.field || e.fullField], Df(n) ? (n.field = n.field || e.fullField, n.fieldValue = r, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: r,
      field: n.field || e.fullField
    };
  };
}
function Cr(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n];
        typeof r == "object" && typeof e[n] == "object" ? e[n] = _e({}, e[n], r) : e[n] = r;
      }
  }
  return e;
}
var jo = function(t, n, r, o, a, s) {
  t.required && (!r.hasOwnProperty(t.field) || q(n, s || t.type)) && o.push(K(a.messages.required, t.fullField));
};
var Rf = function(t, n, r, o, a) {
  (/^\s+$/.test(n) || n === "") && o.push(K(a.messages.whitespace, t.fullField));
};
var xt;
var Bf = function() {
  if (xt)
    return xt;
  var e = "[a-fA-F\\d:]", t = function(g) {
    return g && g.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : "";
  }, n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", r = "[a-fA-F\\d]{1,4}", o = (`
(?:
(?:` + r + ":){7}(?:" + r + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + r + ":){6}(?:" + n + "|:" + r + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + r + ":){5}(?::" + n + "|(?::" + r + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + r + ":){4}(?:(?::" + r + "){0,1}:" + n + "|(?::" + r + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + r + ":){3}(?:(?::" + r + "){0,2}:" + n + "|(?::" + r + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + r + ":){2}(?:(?::" + r + "){0,3}:" + n + "|(?::" + r + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + r + ":){1}(?:(?::" + r + "){0,4}:" + n + "|(?::" + r + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + r + "){0,5}:" + n + "|(?::" + r + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), a = new RegExp("(?:^" + n + "$)|(?:^" + o + "$)"), s = new RegExp("^" + n + "$"), i = new RegExp("^" + o + "$"), l = function(g) {
    return g && g.exact ? a : new RegExp("(?:" + t(g) + n + t(g) + ")|(?:" + t(g) + o + t(g) + ")", "g");
  };
  l.v4 = function(b) {
    return b && b.exact ? s : new RegExp("" + t(b) + n + t(b), "g");
  }, l.v6 = function(b) {
    return b && b.exact ? i : new RegExp("" + t(b) + o + t(b), "g");
  };
  var u = "(?:(?:[a-z]+:)?//)", c = "(?:\\S+(?::\\S*)?@)?", p = l.v4().source, w = l.v6().source, y = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", x = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", d = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", v = "(?::\\d{2,5})?", f = '(?:[/?#][^\\s"]*)?', _ = "(?:" + u + "|www\\.)" + c + "(?:localhost|" + p + "|" + w + "|" + y + x + d + ")" + v + f;
  return xt = new RegExp("(?:^" + _ + "$)", "i"), xt;
};
var Ir = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var Ze = {
  integer: function(t) {
    return Ze.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return Ze.number(t) && !Ze.integer(t);
  },
  array: function(t) {
    return Array.isArray(t);
  },
  regexp: function(t) {
    if (t instanceof RegExp)
      return true;
    try {
      return !!new RegExp(t);
    } catch {
      return false;
    }
  },
  date: function(t) {
    return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime());
  },
  number: function(t) {
    return isNaN(t) ? false : typeof t == "number";
  },
  object: function(t) {
    return typeof t == "object" && !Ze.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(Ir.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(Bf());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(Ir.hex);
  }
};
var Mf = function(t, n, r, o, a) {
  if (t.required && n === void 0) {
    jo(t, n, r, o, a);
    return;
  }
  var s = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], i = t.type;
  s.indexOf(i) > -1 ? Ze[i](n) || o.push(K(a.messages.types[i], t.fullField, t.type)) : i && typeof n !== t.type && o.push(K(a.messages.types[i], t.fullField, t.type));
};
var qf = function(t, n, r, o, a) {
  var s = typeof t.len == "number", i = typeof t.min == "number", l = typeof t.max == "number", u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, c = n, p = null, w = typeof n == "number", y = typeof n == "string", x = Array.isArray(n);
  if (w ? p = "number" : y ? p = "string" : x && (p = "array"), !p)
    return false;
  x && (c = n.length), y && (c = n.replace(u, "_").length), s ? c !== t.len && o.push(K(a.messages[p].len, t.fullField, t.len)) : i && !l && c < t.min ? o.push(K(a.messages[p].min, t.fullField, t.min)) : l && !i && c > t.max ? o.push(K(a.messages[p].max, t.fullField, t.max)) : i && l && (c < t.min || c > t.max) && o.push(K(a.messages[p].range, t.fullField, t.min, t.max));
};
var Ve = "enum";
var Lf = function(t, n, r, o, a) {
  t[Ve] = Array.isArray(t[Ve]) ? t[Ve] : [], t[Ve].indexOf(n) === -1 && o.push(K(a.messages[Ve], t.fullField, t[Ve].join(", ")));
};
var zf = function(t, n, r, o, a) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(n) || o.push(K(a.messages.pattern.mismatch, t.fullField, n, t.pattern));
    else if (typeof t.pattern == "string") {
      var s = new RegExp(t.pattern);
      s.test(n) || o.push(K(a.messages.pattern.mismatch, t.fullField, n, t.pattern));
    }
  }
};
var k = {
  required: jo,
  whitespace: Rf,
  type: Mf,
  range: qf,
  enum: Lf,
  pattern: zf
};
var Wf = function(t, n, r, o, a) {
  var s = [], i = t.required || !t.required && o.hasOwnProperty(t.field);
  if (i) {
    if (q(n, "string") && !t.required)
      return r();
    k.required(t, n, o, s, a, "string"), q(n, "string") || (k.type(t, n, o, s, a), k.range(t, n, o, s, a), k.pattern(t, n, o, s, a), t.whitespace === true && k.whitespace(t, n, o, s, a));
  }
  r(s);
};
var Hf = function(t, n, r, o, a) {
  var s = [], i = t.required || !t.required && o.hasOwnProperty(t.field);
  if (i) {
    if (q(n) && !t.required)
      return r();
    k.required(t, n, o, s, a), n !== void 0 && k.type(t, n, o, s, a);
  }
  r(s);
};
var Uf = function(t, n, r, o, a) {
  var s = [], i = t.required || !t.required && o.hasOwnProperty(t.field);
  if (i) {
    if (n === "" && (n = void 0), q(n) && !t.required)
      return r();
    k.required(t, n, o, s, a), n !== void 0 && (k.type(t, n, o, s, a), k.range(t, n, o, s, a));
  }
  r(s);
};
var Gf = function(t, n, r, o, a) {
  var s = [], i = t.required || !t.required && o.hasOwnProperty(t.field);
  if (i) {
    if (q(n) && !t.required)
      return r();
    k.required(t, n, o, s, a), n !== void 0 && k.type(t, n, o, s, a);
  }
  r(s);
};
var Kf = function(t, n, r, o, a) {
  var s = [], i = t.required || !t.required && o.hasOwnProperty(t.field);
  if (i) {
    if (q(n) && !t.required)
      return r();
    k.required(t, n, o, s, a), q(n) || k.type(t, n, o, s, a);
  }
  r(s);
};
var Yf = function(t, n, r, o, a) {
  var s = [], i = t.required || !t.required && o.hasOwnProperty(t.field);
  if (i) {
    if (q(n) && !t.required)
      return r();
    k.required(t, n, o, s, a), n !== void 0 && (k.type(t, n, o, s, a), k.range(t, n, o, s, a));
  }
  r(s);
};
var Xf = function(t, n, r, o, a) {
  var s = [], i = t.required || !t.required && o.hasOwnProperty(t.field);
  if (i) {
    if (q(n) && !t.required)
      return r();
    k.required(t, n, o, s, a), n !== void 0 && (k.type(t, n, o, s, a), k.range(t, n, o, s, a));
  }
  r(s);
};
var Zf = function(t, n, r, o, a) {
  var s = [], i = t.required || !t.required && o.hasOwnProperty(t.field);
  if (i) {
    if (n == null && !t.required)
      return r();
    k.required(t, n, o, s, a, "array"), n != null && (k.type(t, n, o, s, a), k.range(t, n, o, s, a));
  }
  r(s);
};
var Jf = function(t, n, r, o, a) {
  var s = [], i = t.required || !t.required && o.hasOwnProperty(t.field);
  if (i) {
    if (q(n) && !t.required)
      return r();
    k.required(t, n, o, s, a), n !== void 0 && k.type(t, n, o, s, a);
  }
  r(s);
};
var Qf = "enum";
var ed = function(t, n, r, o, a) {
  var s = [], i = t.required || !t.required && o.hasOwnProperty(t.field);
  if (i) {
    if (q(n) && !t.required)
      return r();
    k.required(t, n, o, s, a), n !== void 0 && k[Qf](t, n, o, s, a);
  }
  r(s);
};
var td = function(t, n, r, o, a) {
  var s = [], i = t.required || !t.required && o.hasOwnProperty(t.field);
  if (i) {
    if (q(n, "string") && !t.required)
      return r();
    k.required(t, n, o, s, a), q(n, "string") || k.pattern(t, n, o, s, a);
  }
  r(s);
};
var nd = function(t, n, r, o, a) {
  var s = [], i = t.required || !t.required && o.hasOwnProperty(t.field);
  if (i) {
    if (q(n, "date") && !t.required)
      return r();
    if (k.required(t, n, o, s, a), !q(n, "date")) {
      var l;
      n instanceof Date ? l = n : l = new Date(n), k.type(t, l, o, s, a), l && k.range(t, l.getTime(), o, s, a);
    }
  }
  r(s);
};
var rd = function(t, n, r, o, a) {
  var s = [], i = Array.isArray(n) ? "array" : typeof n;
  k.required(t, n, o, s, a, i), r(s);
};
var tn = function(t, n, r, o, a) {
  var s = t.type, i = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (q(n, s) && !t.required)
      return r();
    k.required(t, n, o, i, a, s), q(n, s) || k.type(t, n, o, i, a);
  }
  r(i);
};
var od = function(t, n, r, o, a) {
  var s = [], i = t.required || !t.required && o.hasOwnProperty(t.field);
  if (i) {
    if (q(n) && !t.required)
      return r();
    k.required(t, n, o, s, a);
  }
  r(s);
};
var tt = {
  string: Wf,
  method: Hf,
  number: Uf,
  boolean: Gf,
  regexp: Kf,
  integer: Yf,
  float: Xf,
  array: Zf,
  object: Jf,
  enum: ed,
  pattern: td,
  date: nd,
  url: tn,
  hex: tn,
  email: tn,
  required: rd,
  any: od
};
function vn() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var t = JSON.parse(JSON.stringify(this));
      return t.clone = this.clone, t;
    }
  };
}
var hn = vn();
var ht = function() {
  function e(n) {
    this.rules = null, this._messages = hn, this.define(n);
  }
  var t = e.prototype;
  return t.define = function(r) {
    var o = this;
    if (!r)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof r != "object" || Array.isArray(r))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(r).forEach(function(a) {
      var s = r[a];
      o.rules[a] = Array.isArray(s) ? s : [s];
    });
  }, t.messages = function(r) {
    return r && (this._messages = Cr(vn(), r)), this._messages;
  }, t.validate = function(r, o, a) {
    var s = this;
    o === void 0 && (o = {}), a === void 0 && (a = function() {
    });
    var i = r, l = o, u = a;
    if (typeof l == "function" && (u = l, l = {}), !this.rules || Object.keys(this.rules).length === 0)
      return u && u(null, i), Promise.resolve(i);
    function c(d) {
      var v = [], f = {};
      function _(g) {
        if (Array.isArray(g)) {
          var m;
          v = (m = v).concat.apply(m, g);
        } else
          v.push(g);
      }
      for (var b = 0; b < d.length; b++)
        _(d[b]);
      v.length ? (f = pn(v), u(v, f)) : u(null, i);
    }
    if (l.messages) {
      var p = this.messages();
      p === hn && (p = vn()), Cr(p, l.messages), l.messages = p;
    } else
      l.messages = this.messages();
    var w = {}, y = l.keys || Object.keys(this.rules);
    y.forEach(function(d) {
      var v = s.rules[d], f = i[d];
      v.forEach(function(_) {
        var b = _;
        typeof b.transform == "function" && (i === r && (i = _e({}, i)), f = i[d] = b.transform(f)), typeof b == "function" ? b = {
          validator: b
        } : b = _e({}, b), b.validator = s.getValidationMethod(b), b.validator && (b.field = d, b.fullField = b.fullField || d, b.type = s.getType(b), w[d] = w[d] || [], w[d].push({
          rule: b,
          value: f,
          source: i,
          field: d
        }));
      });
    });
    var x = {};
    return Nf(w, l, function(d, v) {
      var f = d.rule, _ = (f.type === "object" || f.type === "array") && (typeof f.fields == "object" || typeof f.defaultField == "object");
      _ = _ && (f.required || !f.required && d.value), f.field = d.field;
      function b(h2, $) {
        return _e({}, $, {
          fullField: f.fullField + "." + h2,
          fullFields: f.fullFields ? [].concat(f.fullFields, [h2]) : [h2]
        });
      }
      function g(h2) {
        h2 === void 0 && (h2 = []);
        var $ = Array.isArray(h2) ? h2 : [h2];
        !l.suppressWarning && $.length && e.warning("async-validator:", $), $.length && f.message !== void 0 && ($ = [].concat(f.message));
        var E = $.map(Fr(f, i));
        if (l.first && E.length)
          return x[f.field] = 1, v(E);
        if (!_)
          v(E);
        else {
          if (f.required && !d.value)
            return f.message !== void 0 ? E = [].concat(f.message).map(Fr(f, i)) : l.error && (E = [l.error(f, K(l.messages.required, f.field))]), v(E);
          var O = {};
          f.defaultField && Object.keys(d.value).map(function(I) {
            O[I] = f.defaultField;
          }), O = _e({}, O, d.rule.fields);
          var j = {};
          Object.keys(O).forEach(function(I) {
            var F = O[I], ae = Array.isArray(F) ? F : [F];
            j[I] = ae.map(b.bind(null, I));
          });
          var T = new e(j);
          T.messages(l.messages), d.rule.options && (d.rule.options.messages = l.messages, d.rule.options.error = l.error), T.validate(d.value, d.rule.options || l, function(I) {
            var F = [];
            E && E.length && F.push.apply(F, E), I && I.length && F.push.apply(F, I), v(F.length ? F : null);
          });
        }
      }
      var m;
      if (f.asyncValidator)
        m = f.asyncValidator(f, d.value, g, d.source, l);
      else if (f.validator) {
        try {
          m = f.validator(f, d.value, g, d.source, l);
        } catch (h2) {
          console.error == null || console.error(h2), l.suppressValidatorError || setTimeout(function() {
            throw h2;
          }, 0), g(h2.message);
        }
        m === true ? g() : m === false ? g(typeof f.message == "function" ? f.message(f.fullField || f.field) : f.message || (f.fullField || f.field) + " fails") : m instanceof Array ? g(m) : m instanceof Error && g(m.message);
      }
      m && m.then && m.then(function() {
        return g();
      }, function(h2) {
        return g(h2);
      });
    }, function(d) {
      c(d);
    }, i);
  }, t.getType = function(r) {
    if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !tt.hasOwnProperty(r.type))
      throw new Error(K("Unknown rule type %s", r.type));
    return r.type || "string";
  }, t.getValidationMethod = function(r) {
    if (typeof r.validator == "function")
      return r.validator;
    var o = Object.keys(r), a = o.indexOf("message");
    return a !== -1 && o.splice(a, 1), o.length === 1 && o[0] === "required" ? tt.required : tt[this.getType(r)] || void 0;
  }, e;
}();
ht.register = function(t, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  tt[t] = n;
};
ht.warning = Ao;
ht.messages = hn;
ht.validators = tt;
var ad = { class: "vk-form-item__label" };
var id = { class: "vk-form-item__content" };
var sd = {
  key: 0,
  class: "vk-form-item__error-msg"
};
var ld = defineComponent({
  name: "VkFormItem"
});
var Ct = defineComponent({
  ...ld,
  props: Tf,
  setup(e, { expose: t }) {
    const n = e, r = inject(To), o = reactive({
      state: "init",
      errorMsg: "",
      loading: false
    }), a = ref(), s = computed(() => {
      const d = r == null ? void 0 : r.model;
      return d && n.prop && !Mc(d[n.prop]) ? d[n.prop] : null;
    });
    let i;
    const l = computed(() => {
      const d = r == null ? void 0 : r.rules;
      return d && n.prop && d[n.prop] ? d[n.prop] : [];
    }), u = computed(() => {
      var d;
      return (d = l.value) == null ? void 0 : d.some((v) => v.required);
    }), c = (d) => {
      const v = l.value;
      return v ? v.filter((f) => !f.trigger || !d ? true : f.trigger && f.trigger === d).map(({ trigger: f, ..._ }) => _) : [];
    }, p = async (d) => {
      const v = n.prop, f = c(d);
      if (f.length === 0)
        return true;
      if (v) {
        const _ = new ht({
          [v]: f
        });
        return o.loading = true, _.validate({ [v]: s.value }).then(() => {
          o.state = "success";
        }).catch((b) => {
          const { errors: g } = b;
          return o.state = "error", o.errorMsg = g && g.length > 0 && g[0].message || "", Promise.reject(b);
        }).finally(() => {
          o.loading = false;
        });
      }
    }, w = () => {
      o.state = "init", o.errorMsg = "", o.loading = false;
    }, y = () => {
      const d = r == null ? void 0 : r.model;
      w(), d && n.prop && d[n.prop] && (d[n.prop] = i);
    }, x = reactive({
      $el: a,
      resetField: y,
      clearValidate: w,
      prop: n.prop || "",
      validate: p
    });
    return provide(Eo, x), onMounted(() => {
      n.prop && (r == null || r.addField(x), i = s.value);
    }), onUnmounted(() => {
      r == null || r.removeField(x);
    }), t({
      /** @description validation message */
      validateStatus: o,
      /** @description validate form item */
      validate: p,
      /** @description clear validation status */
      clearValidate: w,
      /** @description reset field value */
      resetField: y
    }), (d, v) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["vk-form-item", {
        "is-error": o.state === "error",
        "is-success": o.state === "success",
        "is-loading": o.loading,
        "is-required": unref(u)
      }]),
      ref_key: "formItemRef",
      ref: a
    }, [
      createBaseVNode("div", ad, [
        renderSlot(d.$slots, "label", { label: d.label }, () => [
          createTextVNode(toDisplayString(d.label), 1)
        ])
      ]),
      createBaseVNode("div", id, [
        renderSlot(d.$slots, "default", { validate: p }),
        o.state === "error" && n.showMessage ? (openBlock(), createElementBlock("div", sd, toDisplayString(o.errorMsg), 1)) : createCommentVNode("", true)
      ])
    ], 2));
  }
});
St.install = (e) => {
  e.component(St.name, St);
};
Ct.install = (e) => {
  e.component(Ct.name, Ct);
};
z.install = (e) => {
  e.component(z.name, z);
};
var Nr = ref(0);
var ko = (e = 2e3) => {
  const t = ref(e), n = computed(() => Nr.value + t.value);
  return {
    currentZIndex: n,
    nextZIndex: () => (Nr.value++, n.value),
    initialZIndex: t
  };
};
var cd = 1;
var pe = shallowReactive([]);
var Wd = (e) => {
  const { nextZIndex: t } = ko(), n = `message_${cd++}`, r = document.createElement("div"), o = () => {
    const c = pe.findIndex((p) => p.id === n);
    c !== -1 && (pe.splice(c, 1), render(null, r));
  }, a = () => {
    const c = pe.find((p) => p.id === n);
    c && (c.vm.exposed.visible.value = false);
  }, s = {
    ...e,
    id: n,
    zIndex: t(),
    onDestory: o
  }, i = h(nt, s);
  render(i, r), document.body.appendChild(r.firstElementChild);
  const l = i.component, u = {
    id: n,
    vnode: i,
    vm: l,
    props: s,
    destory: a
  };
  return pe.push(u), u;
};
var ud = (e) => {
  const t = pe.findIndex((n) => n.id === e);
  return console.log("idx", e, t, pe.length), t <= 0 ? 0 : pe[t - 1].vm.exposed.bottomOffset.value;
};
var Hd = () => {
  pe.forEach((e) => {
    e.destory();
  });
};
function Po(e, t, n) {
  isRef(e) ? watch(e, (r, o) => {
    o == null || o.removeEventListener(t, n), r == null || r.addEventListener(t, n);
  }) : onMounted(() => {
    e.addEventListener(t, n);
  }), onBeforeUnmount(() => {
    var r;
    (r = unref(e)) == null || r.removeEventListener(t, n);
  });
}
var fd = { class: "vk-message__content" };
var dd = {
  key: 0,
  class: "vk-message__close"
};
var nt = defineComponent({
  __name: "Message",
  props: {
    message: null,
    duration: { default: 3e3 },
    showClose: { type: Boolean },
    type: { default: "info" },
    onDestory: { type: Function },
    id: null,
    zIndex: null,
    offset: { default: 20 },
    transitionName: { default: "fade-up" }
  },
  setup(e, { expose: t }) {
    const n = e, r = ref(false), o = ref(), a = ref(0), s = computed(() => ud(n.id)), i = computed(() => n.offset + s.value), l = computed(() => a.value + i.value), u = computed(() => ({
      top: i.value + "px",
      zIndex: n.zIndex
    }));
    let c;
    function p() {
      n.duration !== 0 && (c = setTimeout(() => {
        r.value = false;
      }, n.duration));
    }
    function w() {
      clearTimeout(c);
    }
    onMounted(async () => {
      r.value = true, p();
    });
    function y(v) {
      v.code === "Escape" && (r.value = false);
    }
    Po(document, "keydown", y);
    function x() {
      n.onDestory();
    }
    function d() {
      a.value = o.value.getBoundingClientRect().height;
    }
    return t({
      bottomOffset: l,
      visible: r
    }), (v, f) => (openBlock(), createBlock(Transition, {
      name: e.transitionName,
      onAfterLeave: x,
      onEnter: d
    }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("div", {
          class: normalizeClass(["vk-message", {
            [`vk-message--${e.type}`]: e.type,
            "is-close": e.showClose
          }]),
          role: "alert",
          ref_key: "messageRef",
          ref: o,
          style: normalizeStyle(unref(u)),
          onMouseenter: w,
          onMouseleave: p
        }, [
          createBaseVNode("div", fd, [
            renderSlot(v.$slots, "default", {}, () => [
              e.message ? (openBlock(), createBlock(unref(Gt), {
                key: 0,
                vNode: e.message
              }, null, 8, ["vNode"])) : createCommentVNode("", true)
            ])
          ]),
          e.showClose ? (openBlock(), createElementBlock("div", dd, [
            createVNode(z, {
              onClick: f[0] || (f[0] = withModifiers((_) => r.value = false, ["stop"])),
              icon: "xmark"
            })
          ])) : createCommentVNode("", true)
        ], 38), [
          [vShow, r.value]
        ])
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
nt.install = (e) => {
  e.component(nt.name, nt);
};
var pd = 1;
var ve = shallowReactive([]);
var Ud = (e) => {
  const { nextZIndex: t } = ko(), n = `notification_${pd++}`, r = document.createElement("div"), o = () => {
    const c = ve.findIndex((p) => p.id === n);
    c !== -1 && (ve.splice(c, 1), render(null, r));
  }, a = () => {
    const c = ve.find((p) => p.id === n);
    c && (c.vm.exposed.visible.value = false);
  }, s = {
    ...e,
    id: n,
    zIndex: t(),
    onDestory: o
  }, i = h(rt, s);
  render(i, r), document.body.appendChild(r.firstElementChild);
  const l = i.component, u = {
    id: n,
    vnode: i,
    vm: l,
    props: s,
    destory: a
  };
  return ve.push(u), u;
};
var vd = (e) => {
  const t = ve.findIndex((n) => n.id === e);
  return console.log("idx", e, t, ve.length), t <= 0 ? 0 : ve[t - 1].vm.exposed.bottomOffset.value;
};
var Gd = () => {
  ve.forEach((e) => {
    e.destory();
  });
};
var hd = {
  success: "circle-check",
  info: "circle-info",
  warning: "circle-exclamation",
  danger: "circle-xmark"
};
var md = { class: "vk-notification__text" };
var gd = { class: "vk-notification__title" };
var yd = { class: "vk-notification__content" };
var bd = {
  key: 1,
  class: "vk-notification__close"
};
var rt = defineComponent({
  __name: "Notification",
  props: {
    title: null,
    message: null,
    duration: { default: 3e3 },
    showClose: { type: Boolean, default: true },
    type: { default: "info" },
    onDestory: { type: Function },
    id: null,
    zIndex: null,
    offset: { default: 20 },
    transitionName: { default: "fade" },
    icon: null
  },
  setup(e, { expose: t }) {
    const n = e, r = ref(false), o = ref(), a = computed(() => n.icon ? n.icon : hd[n.type]), s = ref(0), i = computed(() => vd(n.id)), l = computed(() => n.offset + i.value), u = computed(() => s.value + l.value), c = computed(() => ({
      top: l.value + "px",
      zIndex: n.zIndex
    }));
    let p;
    function w() {
      n.duration !== 0 && (p = setTimeout(() => {
        r.value = false;
      }, n.duration));
    }
    function y() {
      clearTimeout(p);
    }
    onMounted(async () => {
      r.value = true, w();
    });
    function x(f) {
      f.code === "Escape" && (r.value = false);
    }
    Po(document, "keydown", x);
    function d() {
      n.onDestory();
    }
    function v() {
      s.value = o.value.getBoundingClientRect().height;
    }
    return t({
      visible: r,
      bottomOffset: u
    }), (f, _) => (openBlock(), createBlock(Transition, {
      name: `vk-notification-${e.transitionName}`,
      onAfterLeave: d,
      onEnter: v
    }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("div", {
          class: normalizeClass(["vk-notification", {
            [`vk-notification--${e.type}`]: e.type,
            "is-close": e.showClose
          }]),
          role: "alert",
          ref_key: "notifyRef",
          ref: o,
          style: normalizeStyle(unref(c)),
          onMouseenter: y,
          onMouseleave: w
        }, [
          unref(a) ? (openBlock(), createBlock(z, {
            key: 0,
            icon: unref(a),
            class: "vk-notification__icon"
          }, null, 8, ["icon"])) : createCommentVNode("", true),
          createBaseVNode("div", md, [
            createBaseVNode("div", gd, toDisplayString(e.title), 1),
            createBaseVNode("div", yd, [
              renderSlot(f.$slots, "default", {}, () => [
                e.message ? (openBlock(), createBlock(unref(Gt), {
                  key: 0,
                  vNode: e.message
                }, null, 8, ["vNode"])) : createCommentVNode("", true)
              ])
            ])
          ]),
          e.showClose ? (openBlock(), createElementBlock("div", bd, [
            createVNode(z, {
              onClick: _[0] || (_[0] = withModifiers((b) => r.value = false, ["stop"])),
              icon: "xmark"
            })
          ])) : createCommentVNode("", true)
        ], 38), [
          [vShow, r.value]
        ])
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
rt.install = (e) => {
  e.component(rt.name, rt);
};
var wd = {
  key: 0,
  class: "vk-input__prepend"
};
var Od = { class: "vk-input__wrapper" };
var xd = {
  key: 0,
  class: "vk-input__prefix"
};
var $d = ["type", "disabled", "readonly", "autocomplete", "placeholder", "autofocus", "form"];
var _d = {
  key: 1,
  class: "vk-input__append"
};
var Td = ["disabled", "readonly", "autocomplete", "placeholder", "autofocus", "form"];
var Ed = defineComponent({
  name: "VkInput",
  inheritAttrs: false
});
var ot = defineComponent({
  ...Ed,
  props: {
    type: { default: "text" },
    modelValue: null,
    size: null,
    disabled: { type: Boolean },
    clearable: { type: Boolean },
    showPassword: { type: Boolean },
    placeholder: null,
    readonly: { type: Boolean },
    autocomplete: { default: "off" },
    autofocus: { type: Boolean },
    form: null,
    validateEvent: { type: Boolean, default: true }
  },
  emits: ["update:modelValue", "input", "change", "focus", "blur", "clear"],
  setup(e, { expose: t, emit: n }) {
    const r = e, o = useAttrs(), a = ref(r.modelValue), s = ref(false), i = ref(false), l = ref(), u = inject(Eo), c = computed(
      () => r.clearable && !r.disabled && !!a.value && s.value
    ), p = computed(
      () => r.showPassword && !r.disabled && !!a.value
    ), w = (m) => {
      var h2;
      r.validateEvent && ((h2 = u == null ? void 0 : u.validate) == null || h2.call(u, m).catch(($) => console.error($)));
    }, y = () => {
      i.value = !i.value;
    }, x = () => {
    }, d = async () => {
      await nextTick(), l.value.focus();
    }, v = () => {
      n("update:modelValue", a.value), n("input", a.value), w("input");
    }, f = () => {
      n("change", a.value), w("change");
    }, _ = (m) => {
      s.value = true, n("focus", m);
    }, b = (m) => {
      console.log("blur triggered"), s.value = false, n("blur", m), w("blur");
    }, g = () => {
      console.log("clear triggered"), a.value = "", n("update:modelValue", ""), n("clear"), n("input", ""), n("change", "");
    };
    return watch(() => r.modelValue, (m) => {
      a.value = m;
    }), t({
      ref: l
    }), (m, h2) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["vk-input", {
        [`vk-input--${e.type}`]: e.type,
        [`vk-input--${e.size}`]: e.size,
        "is-disabled": e.disabled,
        "is-prepend": m.$slots.prepend,
        "is-append": m.$slots.append,
        "is-prefix": m.$slots.prefix,
        "is-suffix": m.$slots.suffix,
        "is-focus": s.value
      }])
    }, [
      e.type !== "textarea" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        m.$slots.prepend ? (openBlock(), createElementBlock("div", wd, [
          renderSlot(m.$slots, "prepend")
        ])) : createCommentVNode("", true),
        createBaseVNode("div", Od, [
          m.$slots.prefix ? (openBlock(), createElementBlock("span", xd, [
            renderSlot(m.$slots, "prefix")
          ])) : createCommentVNode("", true),
          withDirectives(createBaseVNode("input", mergeProps({
            class: "vk-input__inner",
            type: e.showPassword ? i.value ? "text" : "password" : e.type,
            ref_key: "inputRef",
            ref: l
          }, unref(o), {
            disabled: e.disabled,
            readonly: e.readonly,
            autocomplete: e.autocomplete,
            placeholder: e.placeholder,
            autofocus: e.autofocus,
            form: e.form,
            "onUpdate:modelValue": h2[0] || (h2[0] = ($) => a.value = $),
            onInput: v,
            onChange: f,
            onFocus: _,
            onBlur: b
          }), null, 16, $d), [
            [vModelDynamic, a.value]
          ]),
          m.$slots.suffix || unref(c) || unref(p) ? (openBlock(), createElementBlock("span", {
            key: 1,
            class: "vk-input__suffix",
            onClick: d
          }, [
            renderSlot(m.$slots, "suffix"),
            unref(c) ? (openBlock(), createBlock(z, {
              key: 0,
              icon: "circle-xmark",
              class: "vk-input__clear",
              onClick: g,
              onMousedown: withModifiers(x, ["prevent"])
            }, null, 8, ["onMousedown"])) : createCommentVNode("", true),
            unref(p) && i.value ? (openBlock(), createBlock(z, {
              key: 1,
              icon: "eye",
              class: "vk-input__password",
              onClick: y
            })) : createCommentVNode("", true),
            unref(p) && !i.value ? (openBlock(), createBlock(z, {
              key: 2,
              icon: "eye-slash",
              class: "vk-input__password",
              onClick: y
            })) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ]),
        m.$slots.append ? (openBlock(), createElementBlock("div", _d, [
          renderSlot(m.$slots, "append")
        ])) : createCommentVNode("", true)
      ], 64)) : withDirectives((openBlock(), createElementBlock("textarea", mergeProps({
        key: 1,
        class: "vk-textarea__wrapper"
      }, unref(o), {
        ref_key: "inputRef",
        ref: l,
        disabled: e.disabled,
        readonly: e.readonly,
        autocomplete: e.autocomplete,
        placeholder: e.placeholder,
        autofocus: e.autofocus,
        form: e.form,
        "onUpdate:modelValue": h2[1] || (h2[1] = ($) => a.value = $),
        onInput: v,
        onChange: f,
        onFocus: _,
        onBlur: b
      }), null, 16, Td)), [
        [vModelText, a.value]
      ])
    ], 2));
  }
});
ot.install = (e) => {
  e.component(ot.name, ot);
};
var Ad = {
  key: 0,
  class: "vk-select__loading"
};
var jd = {
  key: 1,
  class: "vk-select__nodata"
};
var kd = {
  key: 2,
  class: "vk-select__menu"
};
var Pd = ["id", "onClick"];
var Sd = defineComponent({
  name: "VkSelect"
});
var It = defineComponent({
  ...Sd,
  props: {
    modelValue: null,
    options: { default: () => [] },
    placeholder: null,
    disabled: { type: Boolean },
    clearable: { type: Boolean },
    renderLabel: { type: Function },
    filterable: { type: Boolean },
    filterMethod: { type: Function },
    remote: { type: Boolean },
    remoteMethod: { type: Function }
  },
  emits: ["change", "update:modelValue", "visible-change", "clear"],
  setup(e, { emit: t }) {
    const n = e, r = (O) => {
      const j = n.options.find((T) => T.value === O);
      return j || null;
    }, o = r(n.modelValue), a = ref(), s = ref(), i = reactive({
      inputValue: o ? o.label : "",
      selectedOption: o,
      mouseHover: false
    });
    watch(() => n.modelValue, async (O) => {
      const j = r(O);
      i.inputValue = j ? j.label : "", i.selectedOption = j;
      const T = j ? j.value : "";
      t("change", T), t("update:modelValue", T);
    });
    const l = computed(() => n.remote ? 300 : 0), u = computed(() => n.remote && n.remoteMethod && i.inputValue.trim() === ""), c = computed(() => n.remote && n.remoteMethod && i.inputValue.trim() !== ""), p = ref(false), w = {
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 9]
          }
        },
        {
          name: "sameWidth",
          enabled: true,
          fn: ({ state: O }) => {
            O.styles.popper.width = `${O.rects.reference.width}px`;
          },
          phase: "beforeWrite",
          requires: ["computeStyles"]
        }
      ]
    }, y = computed(() => n.clearable && i.mouseHover && i.inputValue.trim() !== "" && i.selectedOption), x = () => {
      i.selectedOption = null, i.inputValue = "", t("clear"), t("change", ""), t("update:modelValue", "");
    }, d = () => {
    }, v = ref(false), f = ref(n.options);
    watch(() => n.options, (O) => {
      f.value = O;
    });
    const _ = computed(() => n.filterable && i.selectedOption && p.value ? i.selectedOption.label : n.placeholder), b = async (O) => {
      var j;
      if (n.filterable)
        if (n.filterMethod && Rt(n.filterMethod))
          f.value = n.filterMethod(O);
        else if (n.remote && n.remoteMethod && Rt(n.remoteMethod)) {
          v.value = true;
          try {
            f.value = await n.remoteMethod(O), c.value && !p.value && (await nextTick(), (j = a.value) == null || j.show());
          } catch (T) {
            console.error(T), f.value = [];
          } finally {
            v.value = false;
          }
        } else
          f.value = n.options.filter((T) => T.label.includes(O));
    }, g = () => {
      b(i.inputValue);
    }, m = sn(() => {
      g();
    }, l.value), h2 = (O) => {
      if (O) {
        if (n.filterable && i.selectedOption && (i.inputValue = ""), u.value)
          return;
        n.filterable && b(i.inputValue), a.value.show();
      } else
        a.value.hide(), n.filterable && (i.inputValue = i.selectedOption ? i.selectedOption.label : "");
      p.value = O, t("visible-change", O);
    }, $ = () => {
      n.disabled || (p.value ? h2(false) : h2(true));
    }, E = (O) => {
      O.disabled || (i.inputValue = O.label, i.selectedOption = O, t("change", O.value), t("update:modelValue", O.value), h2(false), n.filterable || s.value.ref.focus());
    };
    return (O, j) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["vk-select", { "is-disabled": e.disabled }]),
      onClick: $,
      onMouseenter: j[2] || (j[2] = (T) => i.mouseHover = true),
      onMouseleave: j[3] || (j[3] = (T) => i.mouseHover = false)
    }, [
      createVNode(Be, {
        placement: "bottom-start",
        ref_key: "tooltipRef",
        ref: a,
        popperOptions: w,
        onClickOutside: j[1] || (j[1] = (T) => h2(false)),
        manual: ""
      }, {
        content: withCtx(() => [
          v.value ? (openBlock(), createElementBlock("div", Ad, [
            createVNode(z, {
              icon: "spinner",
              spin: ""
            })
          ])) : e.filterable && f.value.length === 0 ? (openBlock(), createElementBlock("div", jd, "no matching data")) : (openBlock(), createElementBlock("ul", kd, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(f.value, (T, I) => {
              var F;
              return openBlock(), createElementBlock("li", {
                key: I,
                class: normalizeClass(["vk-select__menu-item", { "is-disabled": T.disabled, "is-selected": ((F = i.selectedOption) == null ? void 0 : F.value) === T.value }]),
                id: `select-item-${T.value}`,
                onClick: withModifiers((ae) => E(T), ["stop"])
              }, [
                createVNode(unref(Gt), {
                  vNode: e.renderLabel ? e.renderLabel(T) : T.label
                }, null, 8, ["vNode"])
              ], 10, Pd);
            }), 128))
          ]))
        ]),
        default: withCtx(() => [
          createVNode(ot, {
            modelValue: i.inputValue,
            "onUpdate:modelValue": j[0] || (j[0] = (T) => i.inputValue = T),
            disabled: e.disabled,
            placeholder: unref(_),
            ref_key: "inputRef",
            ref: s,
            readonly: !e.filterable,
            onInput: unref(m)
          }, {
            suffix: withCtx(() => [
              unref(y) ? (openBlock(), createBlock(z, {
                key: 0,
                icon: "circle-xmark",
                class: "vk-input__clear",
                onMousedown: withModifiers(d, ["prevent"]),
                onClick: withModifiers(x, ["stop"])
              }, null, 8, ["onMousedown", "onClick"])) : (openBlock(), createBlock(z, {
                key: 1,
                icon: "angle-down",
                class: normalizeClass(["header-angle", { "is-active": p.value }])
              }, null, 8, ["class"]))
            ]),
            _: 1
          }, 8, ["modelValue", "disabled", "placeholder", "readonly", "onInput"])
        ]),
        _: 1
      }, 512)
    ], 34));
  }
});
It.install = (e) => {
  e.component(It.name, It);
};
var Fd = ["name", "disabled", "onKeydown"];
var Cd = { class: "vk-switch__core" };
var Id = { class: "vk-switch__core-inner" };
var Nd = {
  key: 0,
  class: "vk-switch__core-inner-text"
};
var Dd = createBaseVNode("div", { class: "vk-switch__core-action" }, null, -1);
var Vd = defineComponent({
  name: "VkSwtich",
  inheritAttrs: false
});
var Nt = defineComponent({
  ...Vd,
  props: {
    modelValue: { type: [Boolean, String, Number] },
    disabled: { type: Boolean },
    activeText: null,
    inactiveText: null,
    activeValue: { type: [Boolean, String, Number], default: true },
    inactiveValue: { type: [Boolean, String, Number], default: false },
    name: null,
    id: null,
    size: null
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const n = e, r = ref(n.modelValue), o = ref(), a = computed(() => r.value === n.activeValue), s = () => {
      if (n.disabled)
        return;
      const i = a.value ? n.inactiveValue : n.activeValue;
      r.value = i, t("update:modelValue", i), t("change", i);
    };
    return onMounted(() => {
      o.value.checked = a.value;
    }), watch(a, (i) => {
      o.value.checked = i;
    }), watch(() => n.modelValue, (i) => {
      r.value = i;
    }), (i, l) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["vk-switch", {
        [`vk-switch--${e.size}`]: e.size,
        "is-disabled": e.disabled,
        "is-checked": unref(a)
      }]),
      onClick: s
    }, [
      createBaseVNode("input", {
        class: "vk-swtich__input",
        type: "checkbox",
        role: "switch",
        ref_key: "input",
        ref: o,
        name: e.name,
        disabled: e.disabled,
        onKeydown: withKeys(s, ["enter"])
      }, null, 40, Fd),
      createBaseVNode("div", Cd, [
        createBaseVNode("div", Id, [
          e.activeText || e.inactiveText ? (openBlock(), createElementBlock("span", Nd, toDisplayString(unref(a) ? e.activeText : e.inactiveText), 1)) : createCommentVNode("", true)
        ]),
        Dd
      ])
    ], 2));
  }
});
Nt.install = (e) => {
  e.component(Nt.name, Nt);
};
Be.install = (e) => {
  e.component(Be.name, Be);
};
library$1.add(icons);
var Rd = [
  Tt,
  Et,
  At,
  jt,
  Pt,
  St,
  Ct,
  z,
  nt,
  rt,
  ot,
  It,
  Nt,
  Be
];
var Bd = (e) => {
  Rd.map((t) => {
    e.use(t);
  });
};
var Kd = {
  install: Bd
};
export {
  Et as Alert,
  Tt as Button,
  At as Collapse,
  jt as CollapseItem,
  Pt as Dropdown,
  St as Form,
  Ct as FormItem,
  z as Icon,
  ot as Input,
  nt as Message,
  rt as Notification,
  It as Select,
  Nt as Switch,
  Be as Tooltip,
  Hd as closeMessageAll,
  Gd as closeNotificationAll,
  Wd as createMessage,
  Ud as createNotification,
  Kd as default,
  Bd as install
};
//# sourceMappingURL=@vikingmute_v-element.js.map
