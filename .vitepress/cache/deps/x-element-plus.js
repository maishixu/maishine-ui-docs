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
  vModelDynamic,
  vModelText,
  vShow,
  watch,
  withCtx,
  withDirectives,
  withKeys,
  withModifiers
} from "./chunk-VJWGEPT5.js";

// node_modules/x-element-plus/dist/x-element.js
var Or = typeof global == "object" && global && global.Object === Object && global;
var $a = typeof self == "object" && self && self.Object === Object && self;
var ee = Or || $a || Function("return this")();
var ae = ee.Symbol;
var $r = Object.prototype;
var _a = $r.hasOwnProperty;
var Ta = $r.toString;
var ze = ae ? ae.toStringTag : void 0;
function Aa(e) {
  var t = _a.call(e, ze), n = e[ze];
  try {
    e[ze] = void 0;
    var r = true;
  } catch {
  }
  var a = Ta.call(e);
  return r && (t ? e[ze] = n : delete e[ze]), a;
}
var ja = Object.prototype;
var Ea = ja.toString;
function Pa(e) {
  return Ea.call(e);
}
var Sa = "[object Null]";
var Fa = "[object Undefined]";
var In = ae ? ae.toStringTag : void 0;
function Ae(e) {
  return e == null ? e === void 0 ? Fa : Sa : In && In in Object(e) ? Aa(e) : Pa(e);
}
function je(e) {
  return e != null && typeof e == "object";
}
var Ca = "[object Symbol]";
function Mt(e) {
  return typeof e == "symbol" || je(e) && Ae(e) == Ca;
}
function _r(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
    a[n] = t(e[n], n, e);
  return a;
}
var Ee = Array.isArray;
var Bn = ae ? ae.prototype : void 0;
var Mn = Bn ? Bn.toString : void 0;
function Tr(e) {
  if (typeof e == "string")
    return e;
  if (Ee(e))
    return _r(e, Tr) + "";
  if (Mt(e))
    return Mn ? Mn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var Ia = /\s/;
function Ba(e) {
  for (var t = e.length; t-- && Ia.test(e.charAt(t)); )
    ;
  return t;
}
var Ma = /^\s+/;
function Da(e) {
  return e && e.slice(0, Ba(e) + 1).replace(Ma, "");
}
function $e(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Dn = NaN;
var ka = /^[-+]0x[0-9a-f]+$/i;
var Ra = /^0b[01]+$/i;
var qa = /^0o[0-7]+$/i;
var Va = parseInt;
function kn(e) {
  if (typeof e == "number")
    return e;
  if (Mt(e))
    return Dn;
  if ($e(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = $e(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Da(e);
  var n = Ra.test(e);
  return n || qa.test(e) ? Va(e.slice(2), n ? 2 : 8) : ka.test(e) ? Dn : +e;
}
function Na(e) {
  return e;
}
var La = "[object AsyncFunction]";
var za = "[object Function]";
var Ha = "[object GeneratorFunction]";
var Wa = "[object Proxy]";
function St(e) {
  if (!$e(e))
    return false;
  var t = Ae(e);
  return t == za || t == Ha || t == La || t == Wa;
}
var zt = ee["__core-js_shared__"];
var Rn = function() {
  var e = /[^.]+$/.exec(zt && zt.keys && zt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Ua(e) {
  return !!Rn && Rn in e;
}
var Ga = Function.prototype;
var Ka = Ga.toString;
function Pe(e) {
  if (e != null) {
    try {
      return Ka.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Xa = /[\\^$.*+?()[\]{}|]/g;
var Ya = /^\[object .+?Constructor\]$/;
var Za = Function.prototype;
var Ja = Object.prototype;
var Qa = Za.toString;
var ei = Ja.hasOwnProperty;
var ti = RegExp(
  "^" + Qa.call(ei).replace(Xa, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ni(e) {
  if (!$e(e) || Ua(e))
    return false;
  var t = St(e) ? ti : Ya;
  return t.test(Pe(e));
}
function ri(e, t) {
  return e == null ? void 0 : e[t];
}
function Se(e, t) {
  var n = ri(e, t);
  return ni(n) ? n : void 0;
}
var Kt = Se(ee, "WeakMap");
function ai(e, t, n) {
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
var ii = 800;
var oi = 16;
var si = Date.now;
function li(e) {
  var t = 0, n = 0;
  return function() {
    var r = si(), a = oi - (r - n);
    if (n = r, a > 0) {
      if (++t >= ii)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function fi(e) {
  return function() {
    return e;
  };
}
var Ft = function() {
  try {
    var e = Se(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
var ui = Ft ? function(e, t) {
  return Ft(e, "toString", {
    configurable: true,
    enumerable: false,
    value: fi(t),
    writable: true
  });
} : Na;
var ci = li(ui);
function di(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== false; )
    ;
  return e;
}
var pi = 9007199254740991;
var vi = /^(?:0|[1-9]\d*)$/;
function mi(e, t) {
  var n = typeof e;
  return t = t ?? pi, !!t && (n == "number" || n != "symbol" && vi.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Ar(e, t, n) {
  t == "__proto__" && Ft ? Ft(e, t, {
    configurable: true,
    enumerable: true,
    value: n,
    writable: true
  }) : e[t] = n;
}
function jr(e, t) {
  return e === t || e !== e && t !== t;
}
var hi = Object.prototype;
var gi = hi.hasOwnProperty;
function Er(e, t, n) {
  var r = e[t];
  (!(gi.call(e, t) && jr(r, n)) || n === void 0 && !(t in e)) && Ar(e, t, n);
}
function yi(e, t, n, r) {
  var a = !n;
  n || (n = {});
  for (var o = -1, i = t.length; ++o < i; ) {
    var s = t[o], l = void 0;
    l === void 0 && (l = e[s]), a ? Ar(n, s, l) : Er(n, s, l);
  }
  return n;
}
var qn = Math.max;
function bi(e, t, n) {
  return t = qn(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, a = -1, o = qn(r.length - t, 0), i = Array(o); ++a < o; )
      i[a] = r[t + a];
    a = -1;
    for (var s = Array(t + 1); ++a < t; )
      s[a] = r[a];
    return s[t] = n(i), ai(e, this, s);
  };
}
var wi = 9007199254740991;
function Pr(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= wi;
}
function xi(e) {
  return e != null && Pr(e.length) && !St(e);
}
var Oi = Object.prototype;
function $i(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Oi;
  return e === n;
}
function _i(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var Ti = "[object Arguments]";
function Vn(e) {
  return je(e) && Ae(e) == Ti;
}
var Sr = Object.prototype;
var Ai = Sr.hasOwnProperty;
var ji = Sr.propertyIsEnumerable;
var Fr = Vn(/* @__PURE__ */ function() {
  return arguments;
}()) ? Vn : function(e) {
  return je(e) && Ai.call(e, "callee") && !ji.call(e, "callee");
};
function Ei() {
  return false;
}
var Cr = typeof exports == "object" && exports && !exports.nodeType && exports;
var Nn = Cr && typeof module == "object" && module && !module.nodeType && module;
var Pi = Nn && Nn.exports === Cr;
var Ln = Pi ? ee.Buffer : void 0;
var Si = Ln ? Ln.isBuffer : void 0;
var Ir = Si || Ei;
var Fi = "[object Arguments]";
var Ci = "[object Array]";
var Ii = "[object Boolean]";
var Bi = "[object Date]";
var Mi = "[object Error]";
var Di = "[object Function]";
var ki = "[object Map]";
var Ri = "[object Number]";
var qi = "[object Object]";
var Vi = "[object RegExp]";
var Ni = "[object Set]";
var Li = "[object String]";
var zi = "[object WeakMap]";
var Hi = "[object ArrayBuffer]";
var Wi = "[object DataView]";
var Ui = "[object Float32Array]";
var Gi = "[object Float64Array]";
var Ki = "[object Int8Array]";
var Xi = "[object Int16Array]";
var Yi = "[object Int32Array]";
var Zi = "[object Uint8Array]";
var Ji = "[object Uint8ClampedArray]";
var Qi = "[object Uint16Array]";
var eo = "[object Uint32Array]";
var C = {};
C[Ui] = C[Gi] = C[Ki] = C[Xi] = C[Yi] = C[Zi] = C[Ji] = C[Qi] = C[eo] = true;
C[Fi] = C[Ci] = C[Hi] = C[Ii] = C[Wi] = C[Bi] = C[Mi] = C[Di] = C[ki] = C[Ri] = C[qi] = C[Vi] = C[Ni] = C[Li] = C[zi] = false;
function to(e) {
  return je(e) && Pr(e.length) && !!C[Ae(e)];
}
function un(e) {
  return function(t) {
    return e(t);
  };
}
var Br = typeof exports == "object" && exports && !exports.nodeType && exports;
var Ue = Br && typeof module == "object" && module && !module.nodeType && module;
var no = Ue && Ue.exports === Br;
var Ht = no && Or.process;
var Me = function() {
  try {
    var e = Ue && Ue.require && Ue.require("util").types;
    return e || Ht && Ht.binding && Ht.binding("util");
  } catch {
  }
}();
var zn = Me && Me.isTypedArray;
var ro = zn ? un(zn) : to;
function ao(e, t) {
  var n = Ee(e), r = !n && Fr(e), a = !n && !r && Ir(e), o = !n && !r && !a && ro(e), i = n || r || a || o, s = i ? _i(e.length, String) : [], l = s.length;
  for (var u in e)
    i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    mi(u, l)) || s.push(u);
  return s;
}
function io(e, t) {
  return function(n) {
    return e(t(n));
  };
}
function oo(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var so = Object.prototype;
var lo = so.hasOwnProperty;
function fo(e) {
  if (!$e(e))
    return oo(e);
  var t = $i(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !lo.call(e, r)) || n.push(r);
  return n;
}
function uo(e) {
  return xi(e) ? ao(e) : fo(e);
}
var co = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var po = /^\w*$/;
function vo(e, t) {
  if (Ee(e))
    return false;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Mt(e) ? true : po.test(e) || !co.test(e) || t != null && e in Object(t);
}
var Je = Se(Object, "create");
function mo() {
  this.__data__ = Je ? Je(null) : {}, this.size = 0;
}
function ho(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var go = "__lodash_hash_undefined__";
var yo = Object.prototype;
var bo = yo.hasOwnProperty;
function wo(e) {
  var t = this.__data__;
  if (Je) {
    var n = t[e];
    return n === go ? void 0 : n;
  }
  return bo.call(t, e) ? t[e] : void 0;
}
var xo = Object.prototype;
var Oo = xo.hasOwnProperty;
function $o(e) {
  var t = this.__data__;
  return Je ? t[e] !== void 0 : Oo.call(t, e);
}
var _o = "__lodash_hash_undefined__";
function To(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Je && t === void 0 ? _o : t, this;
}
function _e(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
_e.prototype.clear = mo;
_e.prototype.delete = ho;
_e.prototype.get = wo;
_e.prototype.has = $o;
_e.prototype.set = To;
function Ao() {
  this.__data__ = [], this.size = 0;
}
function Dt(e, t) {
  for (var n = e.length; n--; )
    if (jr(e[n][0], t))
      return n;
  return -1;
}
var jo = Array.prototype;
var Eo = jo.splice;
function Po(e) {
  var t = this.__data__, n = Dt(t, e);
  if (n < 0)
    return false;
  var r = t.length - 1;
  return n == r ? t.pop() : Eo.call(t, n, 1), --this.size, true;
}
function So(e) {
  var t = this.__data__, n = Dt(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Fo(e) {
  return Dt(this.__data__, e) > -1;
}
function Co(e, t) {
  var n = this.__data__, r = Dt(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function ue(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ue.prototype.clear = Ao;
ue.prototype.delete = Po;
ue.prototype.get = So;
ue.prototype.has = Fo;
ue.prototype.set = Co;
var Qe = Se(ee, "Map");
function Io() {
  this.size = 0, this.__data__ = {
    hash: new _e(),
    map: new (Qe || ue)(),
    string: new _e()
  };
}
function Bo(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function kt(e, t) {
  var n = e.__data__;
  return Bo(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Mo(e) {
  var t = kt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Do(e) {
  return kt(this, e).get(e);
}
function ko(e) {
  return kt(this, e).has(e);
}
function Ro(e, t) {
  var n = kt(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function ve(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ve.prototype.clear = Io;
ve.prototype.delete = Mo;
ve.prototype.get = Do;
ve.prototype.has = ko;
ve.prototype.set = Ro;
var qo = "Expected a function";
function cn(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(qo);
  var n = function() {
    var r = arguments, a = t ? t.apply(this, r) : r[0], o = n.cache;
    if (o.has(a))
      return o.get(a);
    var i = e.apply(this, r);
    return n.cache = o.set(a, i) || o, i;
  };
  return n.cache = new (cn.Cache || ve)(), n;
}
cn.Cache = ve;
var Vo = 500;
function No(e) {
  var t = cn(e, function(r) {
    return n.size === Vo && n.clear(), r;
  }), n = t.cache;
  return t;
}
var Lo = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var zo = /\\(\\)?/g;
var Ho = No(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Lo, function(n, r, a, o) {
    t.push(a ? o.replace(zo, "$1") : r || n);
  }), t;
});
function Wo(e) {
  return e == null ? "" : Tr(e);
}
function dn(e, t) {
  return Ee(e) ? e : vo(e, t) ? [e] : Ho(Wo(e));
}
function Mr(e) {
  if (typeof e == "string" || Mt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Uo(e, t) {
  t = dn(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Mr(t[n++])];
  return n && n == r ? e : void 0;
}
function pn(e, t) {
  for (var n = -1, r = t.length, a = e.length; ++n < r; )
    e[a + n] = t[n];
  return e;
}
var Hn = ae ? ae.isConcatSpreadable : void 0;
function Go(e) {
  return Ee(e) || Fr(e) || !!(Hn && e && e[Hn]);
}
function Ko(e, t, n, r, a) {
  var o = -1, i = e.length;
  for (n || (n = Go), a || (a = []); ++o < i; ) {
    var s = e[o];
    n(s) ? pn(a, s) : a[a.length] = s;
  }
  return a;
}
function Xo(e) {
  var t = e == null ? 0 : e.length;
  return t ? Ko(e) : [];
}
function Yo(e) {
  return ci(bi(e, void 0, Xo), e + "");
}
var Dr = io(Object.getPrototypeOf, Object);
var Zo = "[object Object]";
var Jo = Function.prototype;
var Qo = Object.prototype;
var kr = Jo.toString;
var es = Qo.hasOwnProperty;
var ts = kr.call(Object);
function ns(e) {
  if (!je(e) || Ae(e) != Zo)
    return false;
  var t = Dr(e);
  if (t === null)
    return true;
  var n = es.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && kr.call(n) == ts;
}
function rs(e, t, n) {
  var r = -1, a = e.length;
  t < 0 && (t = -t > a ? 0 : a + t), n = n > a ? a : n, n < 0 && (n += a), a = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var o = Array(a); ++r < a; )
    o[r] = e[r + t];
  return o;
}
function as() {
  this.__data__ = new ue(), this.size = 0;
}
function is(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function os(e) {
  return this.__data__.get(e);
}
function ss(e) {
  return this.__data__.has(e);
}
var ls = 200;
function fs(e, t) {
  var n = this.__data__;
  if (n instanceof ue) {
    var r = n.__data__;
    if (!Qe || r.length < ls - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new ve(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Ve(e) {
  var t = this.__data__ = new ue(e);
  this.size = t.size;
}
Ve.prototype.clear = as;
Ve.prototype.delete = is;
Ve.prototype.get = os;
Ve.prototype.has = ss;
Ve.prototype.set = fs;
var Rr = typeof exports == "object" && exports && !exports.nodeType && exports;
var Wn = Rr && typeof module == "object" && module && !module.nodeType && module;
var us = Wn && Wn.exports === Rr;
var Un = us ? ee.Buffer : void 0;
Un && Un.allocUnsafe;
function cs(e, t) {
  return e.slice();
}
function ds(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = 0, o = []; ++n < r; ) {
    var i = e[n];
    t(i, n, e) && (o[a++] = i);
  }
  return o;
}
function qr() {
  return [];
}
var ps = Object.prototype;
var vs = ps.propertyIsEnumerable;
var Gn = Object.getOwnPropertySymbols;
var ms = Gn ? function(e) {
  return e == null ? [] : (e = Object(e), ds(Gn(e), function(t) {
    return vs.call(e, t);
  }));
} : qr;
var hs = Object.getOwnPropertySymbols;
var gs = hs ? function(e) {
  for (var t = []; e; )
    pn(t, ms(e)), e = Dr(e);
  return t;
} : qr;
function ys(e, t, n) {
  var r = t(e);
  return Ee(e) ? r : pn(r, n(e));
}
function Vr(e) {
  return ys(e, uo, gs);
}
var Xt = Se(ee, "DataView");
var Yt = Se(ee, "Promise");
var Zt = Se(ee, "Set");
var Kn = "[object Map]";
var bs = "[object Object]";
var Xn = "[object Promise]";
var Yn = "[object Set]";
var Zn = "[object WeakMap]";
var Jn = "[object DataView]";
var ws = Pe(Xt);
var xs = Pe(Qe);
var Os = Pe(Yt);
var $s = Pe(Zt);
var _s = Pe(Kt);
var se = Ae;
(Xt && se(new Xt(new ArrayBuffer(1))) != Jn || Qe && se(new Qe()) != Kn || Yt && se(Yt.resolve()) != Xn || Zt && se(new Zt()) != Yn || Kt && se(new Kt()) != Zn) && (se = function(e) {
  var t = Ae(e), n = t == bs ? e.constructor : void 0, r = n ? Pe(n) : "";
  if (r)
    switch (r) {
      case ws:
        return Jn;
      case xs:
        return Kn;
      case Os:
        return Xn;
      case $s:
        return Yn;
      case _s:
        return Zn;
    }
  return t;
});
var Ts = Object.prototype;
var As = Ts.hasOwnProperty;
function js(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && As.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var Qn = ee.Uint8Array;
function vn(e) {
  var t = new e.constructor(e.byteLength);
  return new Qn(t).set(new Qn(e)), t;
}
function Es(e, t) {
  var n = vn(e.buffer);
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var Ps = /\w*$/;
function Ss(e) {
  var t = new e.constructor(e.source, Ps.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var er = ae ? ae.prototype : void 0;
var tr = er ? er.valueOf : void 0;
function Fs(e) {
  return tr ? Object(tr.call(e)) : {};
}
function Cs(e, t) {
  var n = vn(e.buffer);
  return new e.constructor(n, e.byteOffset, e.length);
}
var Is = "[object Boolean]";
var Bs = "[object Date]";
var Ms = "[object Map]";
var Ds = "[object Number]";
var ks = "[object RegExp]";
var Rs = "[object Set]";
var qs = "[object String]";
var Vs = "[object Symbol]";
var Ns = "[object ArrayBuffer]";
var Ls = "[object DataView]";
var zs = "[object Float32Array]";
var Hs = "[object Float64Array]";
var Ws = "[object Int8Array]";
var Us = "[object Int16Array]";
var Gs = "[object Int32Array]";
var Ks = "[object Uint8Array]";
var Xs = "[object Uint8ClampedArray]";
var Ys = "[object Uint16Array]";
var Zs = "[object Uint32Array]";
function Js(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case Ns:
      return vn(e);
    case Is:
    case Bs:
      return new r(+e);
    case Ls:
      return Es(e);
    case zs:
    case Hs:
    case Ws:
    case Us:
    case Gs:
    case Ks:
    case Xs:
    case Ys:
    case Zs:
      return Cs(e);
    case Ms:
      return new r();
    case Ds:
    case qs:
      return new r(e);
    case ks:
      return Ss(e);
    case Rs:
      return new r();
    case Vs:
      return Fs(e);
  }
}
var Qs = "[object Map]";
function el(e) {
  return je(e) && se(e) == Qs;
}
var nr = Me && Me.isMap;
var tl = nr ? un(nr) : el;
var nl = "[object Set]";
function rl(e) {
  return je(e) && se(e) == nl;
}
var rr = Me && Me.isSet;
var al = rr ? un(rr) : rl;
var Nr = "[object Arguments]";
var il = "[object Array]";
var ol = "[object Boolean]";
var sl = "[object Date]";
var ll = "[object Error]";
var Lr = "[object Function]";
var fl = "[object GeneratorFunction]";
var ul = "[object Map]";
var cl = "[object Number]";
var zr = "[object Object]";
var dl = "[object RegExp]";
var pl = "[object Set]";
var vl = "[object String]";
var ml = "[object Symbol]";
var hl = "[object WeakMap]";
var gl = "[object ArrayBuffer]";
var yl = "[object DataView]";
var bl = "[object Float32Array]";
var wl = "[object Float64Array]";
var xl = "[object Int8Array]";
var Ol = "[object Int16Array]";
var $l = "[object Int32Array]";
var _l = "[object Uint8Array]";
var Tl = "[object Uint8ClampedArray]";
var Al = "[object Uint16Array]";
var jl = "[object Uint32Array]";
var S = {};
S[Nr] = S[il] = S[gl] = S[yl] = S[ol] = S[sl] = S[bl] = S[wl] = S[xl] = S[Ol] = S[$l] = S[ul] = S[cl] = S[zr] = S[dl] = S[pl] = S[vl] = S[ml] = S[_l] = S[Tl] = S[Al] = S[jl] = true;
S[ll] = S[Lr] = S[hl] = false;
function mt(e, t, n, r, a, o) {
  var i;
  if (n && (i = a ? n(e, r, a, o) : n(e)), i !== void 0)
    return i;
  if (!$e(e))
    return e;
  var s = Ee(e);
  if (s)
    i = js(e);
  else {
    var l = se(e), u = l == Lr || l == fl;
    if (Ir(e))
      return cs(e);
    if (l == zr || l == Nr || u && !a)
      i = {};
    else {
      if (!S[l])
        return a ? e : {};
      i = Js(e, l);
    }
  }
  o || (o = new Ve());
  var f = o.get(e);
  if (f)
    return f;
  o.set(e, i), al(e) ? e.forEach(function(y) {
    i.add(mt(y, t, n, y, e, o));
  }) : tl(e) && e.forEach(function(y, g) {
    i.set(g, mt(y, t, n, g, e, o));
  });
  var c = Vr, x = s ? void 0 : c(e);
  return di(x || e, function(y, g) {
    x && (g = y, y = e[g]), Er(i, g, mt(y, t, n, g, e, o));
  }), i;
}
var Wt = function() {
  return ee.Date.now();
};
var El = "Expected a function";
var Pl = Math.max;
var Sl = Math.min;
function Jt(e, t, n) {
  var r, a, o, i, s, l, u = 0, f = false, c = false, x = true;
  if (typeof e != "function")
    throw new TypeError(El);
  t = kn(t) || 0, $e(n) && (f = !!n.leading, c = "maxWait" in n, o = c ? Pl(kn(n.maxWait) || 0, t) : o, x = "trailing" in n ? !!n.trailing : x);
  function y(d) {
    var O = r, _ = a;
    return r = a = void 0, u = d, i = e.apply(_, O), i;
  }
  function g(d) {
    return u = d, s = setTimeout(p, t), f ? y(d) : i;
  }
  function v(d) {
    var O = d - l, _ = d - u, j = t - O;
    return c ? Sl(j, o - _) : j;
  }
  function h2(d) {
    var O = d - l, _ = d - u;
    return l === void 0 || O >= t || O < 0 || c && _ >= o;
  }
  function p() {
    var d = Wt();
    if (h2(d))
      return $(d);
    s = setTimeout(p, v(d));
  }
  function $(d) {
    return s = void 0, x && r ? y(d) : (r = a = void 0, i);
  }
  function b() {
    s !== void 0 && clearTimeout(s), u = 0, r = l = a = s = void 0;
  }
  function w() {
    return s === void 0 ? i : $(Wt());
  }
  function m() {
    var d = Wt(), O = h2(d);
    if (r = arguments, a = this, l = d, O) {
      if (s === void 0)
        return g(l);
      if (c)
        return clearTimeout(s), s = setTimeout(p, t), y(l);
    }
    return s === void 0 && (s = setTimeout(p, t)), i;
  }
  return m.cancel = b, m.flush = w, m;
}
function Fl(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function Cl(e, t) {
  return t.length < 2 ? e : Uo(e, rs(t, 0, -1));
}
function ar(e) {
  return e == null;
}
function Il(e, t) {
  return t = dn(t, e), e = Cl(e, t), e == null || delete e[Mr(Fl(t))];
}
function Bl(e) {
  return ns(e) ? void 0 : e;
}
var Ml = 1;
var Dl = 2;
var kl = 4;
var Rl = Yo(function(e, t) {
  var n = {};
  if (e == null)
    return n;
  var r = false;
  t = _r(t, function(o) {
    return o = dn(o, e), r || (r = o.length > 1), o;
  }), yi(e, Vr(e), n), r && (n = mt(n, Ml | Dl | kl, Bl));
  for (var a = t.length; a--; )
    Il(n, t[a]);
  return n;
});
var N = defineComponent({
  name: "MxIcon",
  inheritAttrs: false,
  __name: "Icon",
  props: {
    type: {},
    color: {},
    border: { type: Boolean },
    fixedWidth: { type: Boolean },
    flip: {},
    icon: {},
    mask: {},
    maskId: {},
    listItem: { type: Boolean },
    pull: {},
    pulse: { type: Boolean },
    rotation: {},
    swapOpacity: { type: Boolean },
    size: {},
    spin: { type: Boolean },
    transform: {},
    symbol: { type: [Boolean, String] },
    title: {},
    titleId: {},
    inverse: { type: Boolean },
    bounce: { type: Boolean },
    shake: { type: Boolean },
    beat: { type: Boolean },
    fade: { type: Boolean },
    beatFade: { type: Boolean },
    spinPulse: { type: Boolean },
    spinReverse: { type: Boolean }
  },
  setup(e) {
    const t = e, n = computed(() => Rl(t, ["type", "color"])), r = computed(() => t.color ? { color: t.color } : {});
    return (a, o) => (openBlock(), createElementBlock("i", mergeProps({
      class: ["mx-icon", { [`mx-icon--${a.type}`]: a.type }],
      style: r.value
    }, a.$attrs), [
      createVNode(unref(FontAwesomeIcon), normalizeProps(guardReactiveProps(n.value)), null, 16)
    ], 16));
  }
});
var ql = ["disabled", "autofocus", "type"];
var ht = defineComponent({
  name: "MxButton",
  __name: "Button",
  props: {
    type: {},
    size: {},
    plain: { type: Boolean },
    round: { type: Boolean },
    circle: { type: Boolean },
    disabled: { type: Boolean },
    nativeType: { default: "button" },
    autofocus: { type: Boolean },
    icon: {},
    loading: { type: Boolean }
  },
  setup(e, { expose: t }) {
    const n = ref();
    return t({
      ref: n
    }), (r, a) => (openBlock(), createElementBlock("button", {
      ref_key: "_ref",
      ref: n,
      class: normalizeClass(["mx-button", {
        [`mx-button--${r.type}`]: r.type,
        [`mx-button--${r.size}`]: r.size,
        "is-plain": r.plain,
        "is-round": r.round,
        "is-circle": r.circle,
        "is-disabled": r.disabled,
        "is-loading": r.loading
      }]),
      disabled: r.disabled || r.loading,
      autofocus: r.autofocus,
      type: r.nativeType
    }, [
      r.loading ? (openBlock(), createBlock(N, {
        key: 0,
        icon: "spinner",
        spin: ""
      })) : createCommentVNode("", true),
      r.icon ? (openBlock(), createBlock(N, {
        key: 1,
        icon: r.icon
      }, null, 8, ["icon"])) : createCommentVNode("", true),
      createBaseVNode("span", null, [
        renderSlot(r.$slots, "default")
      ])
    ], 10, ql));
  }
});
ht.install = (e) => {
  e.component(ht.name, ht);
};
var Vl = { class: "mx-alert__content" };
var Nl = { key: 1 };
var gt = defineComponent({
  name: "MxAlert",
  __name: "Alert",
  props: {
    title: {},
    type: { default: "info" },
    effect: { default: "light" },
    closeText: {},
    closable: { type: Boolean, default: true }
  },
  setup(e) {
    const t = ref(true);
    return (n, r) => (openBlock(), createBlock(Transition, { name: "mx-alert-fade" }, {
      default: withCtx(() => [
        t.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(["mx-alert", { [`mx-alert__${n.type}`]: n.type, [`mx-alert__${n.effect}`]: n.type }])
        }, [
          createBaseVNode("span", Vl, [
            createTextVNode(toDisplayString(n.title) + " ", 1),
            createBaseVNode("span", null, [
              renderSlot(n.$slots, "default")
            ])
          ]),
          n.closable ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "mx-alert__close",
            onClick: r[0] || (r[0] = (a) => t.value = false)
          }, [
            n.closeText ? createCommentVNode("", true) : (openBlock(), createBlock(N, {
              key: 0,
              icon: "xmark"
            })),
            n.closeText ? (openBlock(), createElementBlock("span", Nl, toDisplayString(n.closeText), 1)) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ], 2)) : createCommentVNode("", true)
      ]),
      _: 3
    }));
  }
});
gt.install = (e) => {
  e.component(gt.name, gt);
};
var Hr = Symbol();
var Ll = { class: "mx-collapse" };
var yt = defineComponent({
  name: "MxCollapse",
  __name: "Collapse",
  props: {
    modelValue: {},
    accordion: { type: Boolean }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const n = e, r = t, a = ref(n.modelValue);
    return watch(
      () => n.modelValue,
      () => {
        a.value = n.modelValue;
      }
    ), n.accordion && a.value.length > 1 && (console.log("accordion mode should only have one active item"), a.value = [], r("update:modelValue", a.value)), provide(Hr, { activeNames: a, handleItemClick: (i) => {
      let s = [...a.value];
      if (n.accordion)
        s = [s[0] === i ? "" : i], a.value = s;
      else {
        const l = s.indexOf(i);
        l > -1 ? s.splice(l, 1) : s.push(i), a.value = s;
      }
      r("update:modelValue", a.value), r("change", s);
    } }), (i, s) => (openBlock(), createElementBlock("div", Ll, [
      renderSlot(i.$slots, "default")
    ]));
  }
});
var zl = ["id"];
var Hl = { class: "mx-collapse-item__wrapper" };
var Wl = ["id"];
var bt = defineComponent({
  name: "MxCollapseItem",
  __name: "CollapseItem",
  props: {
    name: {},
    title: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = inject(Hr), r = computed(() => n == null ? void 0 : n.activeNames.value.includes(t.name)), a = () => {
      t.disabled || n == null || n.handleItemClick(t.name);
    }, o = {
      // 2.1 展开
      beforeEnter: (i) => {
        i.style.height = "0px", i.style.overflow = "hidden";
      },
      enter: (i) => {
        i.style.height = `${i.scrollHeight}px`;
      },
      afterEnter: (i) => {
        i.style.height = "", i.style.overflow = "";
      },
      // 2.2 隐藏
      beforeLeave: (i) => {
        i.style.height = `${i.scrollHeight}px`, i.style.overflow = "hidden";
      },
      leave: (i) => {
        i.style.height = "0px";
      },
      afterLeave: (i) => {
        i.style.height = "", i.style.overflow = "";
      }
    };
    return (i, s) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["mx-collapse-item", { "is-disable": i.disabled }])
    }, [
      createBaseVNode("div", {
        class: normalizeClass(["mx-collapse-item__header", { "is-disabled": i.disabled, "is-active": r.value }]),
        id: `item-header-${i.name}`,
        onClick: a
      }, [
        renderSlot(i.$slots, "title", {}, () => [
          createTextVNode(toDisplayString(i.title), 1)
        ]),
        createVNode(N, {
          icon: "angle-right",
          class: "header-angle"
        })
      ], 10, zl),
      createVNode(Transition, mergeProps({ name: "slide" }, toHandlers(o)), {
        default: withCtx(() => [
          withDirectives(createBaseVNode("div", Hl, [
            createBaseVNode("div", {
              class: "mx-collapse-item__content",
              id: `item-content-${i.name}`
            }, [
              renderSlot(i.$slots, "default")
            ], 8, Wl)
          ], 512), [
            [vShow, r.value]
          ])
        ]),
        _: 3
      }, 16)
    ], 2));
  }
});
yt.install = (e) => {
  e.component(yt.name, yt);
};
bt.install = (e) => {
  e.component(bt.name, bt);
};
var L = "top";
var Y = "bottom";
var Z = "right";
var z = "left";
var mn = "auto";
var it = [L, Y, Z, z];
var De = "start";
var et = "end";
var Ul = "clippingParents";
var Wr = "viewport";
var He = "popper";
var Gl = "reference";
var ir = it.reduce(function(e, t) {
  return e.concat([t + "-" + De, t + "-" + et]);
}, []);
var Ur = [].concat(it, [mn]).reduce(function(e, t) {
  return e.concat([t, t + "-" + De, t + "-" + et]);
}, []);
var Kl = "beforeRead";
var Xl = "read";
var Yl = "afterRead";
var Zl = "beforeMain";
var Jl = "main";
var Ql = "afterMain";
var ef = "beforeWrite";
var tf = "write";
var nf = "afterWrite";
var rf = [Kl, Xl, Yl, Zl, Jl, Ql, ef, tf, nf];
function ie(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function G(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Te(e) {
  var t = G(e).Element;
  return e instanceof t || e instanceof Element;
}
function X(e) {
  var t = G(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function hn(e) {
  if (typeof ShadowRoot > "u")
    return false;
  var t = G(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function af(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, a = t.attributes[n] || {}, o = t.elements[n];
    !X(o) || !ie(o) || (Object.assign(o.style, r), Object.keys(a).forEach(function(i) {
      var s = a[i];
      s === false ? o.removeAttribute(i) : o.setAttribute(i, s === true ? "" : s);
    }));
  });
}
function of(e) {
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
      var a = t.elements[r], o = t.attributes[r] || {}, i = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), s = i.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !X(a) || !ie(a) || (Object.assign(a.style, s), Object.keys(o).forEach(function(l) {
        a.removeAttribute(l);
      }));
    });
  };
}
var sf = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: af,
  effect: of,
  requires: ["computeStyles"]
};
function ne(e) {
  return e.split("-")[0];
}
var Oe = Math.max;
var Ct = Math.min;
var ke = Math.round;
function Qt() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Gr() {
  return !/^((?!chrome|android).)*safari/i.test(Qt());
}
function Re(e, t, n) {
  t === void 0 && (t = false), n === void 0 && (n = false);
  var r = e.getBoundingClientRect(), a = 1, o = 1;
  t && X(e) && (a = e.offsetWidth > 0 && ke(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && ke(r.height) / e.offsetHeight || 1);
  var i = Te(e) ? G(e) : window, s = i.visualViewport, l = !Gr() && n, u = (r.left + (l && s ? s.offsetLeft : 0)) / a, f = (r.top + (l && s ? s.offsetTop : 0)) / o, c = r.width / a, x = r.height / o;
  return {
    width: c,
    height: x,
    top: f,
    right: u + c,
    bottom: f + x,
    left: u,
    x: u,
    y: f
  };
}
function gn(e) {
  var t = Re(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Kr(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return true;
  if (n && hn(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return true;
      r = r.parentNode || r.host;
    } while (r);
  }
  return false;
}
function fe(e) {
  return G(e).getComputedStyle(e);
}
function lf(e) {
  return ["table", "td", "th"].indexOf(ie(e)) >= 0;
}
function me(e) {
  return ((Te(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Rt(e) {
  return ie(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (hn(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    me(e)
  );
}
function or(e) {
  return !X(e) || // https://github.com/popperjs/popper-core/issues/837
  fe(e).position === "fixed" ? null : e.offsetParent;
}
function ff(e) {
  var t = /firefox/i.test(Qt()), n = /Trident/i.test(Qt());
  if (n && X(e)) {
    var r = fe(e);
    if (r.position === "fixed")
      return null;
  }
  var a = Rt(e);
  for (hn(a) && (a = a.host); X(a) && ["html", "body"].indexOf(ie(a)) < 0; ) {
    var o = fe(a);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function ot(e) {
  for (var t = G(e), n = or(e); n && lf(n) && fe(n).position === "static"; )
    n = or(n);
  return n && (ie(n) === "html" || ie(n) === "body" && fe(n).position === "static") ? t : n || ff(e) || t;
}
function yn(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ge(e, t, n) {
  return Oe(e, Ct(t, n));
}
function uf(e, t, n) {
  var r = Ge(e, t, n);
  return r > n ? n : r;
}
function Xr() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Yr(e) {
  return Object.assign({}, Xr(), e);
}
function Zr(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var cf = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Yr(typeof t != "number" ? t : Zr(t, it));
};
function df(e) {
  var t, n = e.state, r = e.name, a = e.options, o = n.elements.arrow, i = n.modifiersData.popperOffsets, s = ne(n.placement), l = yn(s), u = [z, Z].indexOf(s) >= 0, f = u ? "height" : "width";
  if (!(!o || !i)) {
    var c = cf(a.padding, n), x = gn(o), y = l === "y" ? L : z, g = l === "y" ? Y : Z, v = n.rects.reference[f] + n.rects.reference[l] - i[l] - n.rects.popper[f], h2 = i[l] - n.rects.reference[l], p = ot(o), $ = p ? l === "y" ? p.clientHeight || 0 : p.clientWidth || 0 : 0, b = v / 2 - h2 / 2, w = c[y], m = $ - x[f] - c[g], d = $ / 2 - x[f] / 2 + b, O = Ge(w, d, m), _ = l;
    n.modifiersData[r] = (t = {}, t[_] = O, t.centerOffset = O - d, t);
  }
}
function pf(e) {
  var t = e.state, n = e.options, r = n.element, a = r === void 0 ? "[data-popper-arrow]" : r;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || Kr(t.elements.popper, a) && (t.elements.arrow = a));
}
var vf = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: df,
  effect: pf,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function qe(e) {
  return e.split("-")[1];
}
var mf = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function hf(e, t) {
  var n = e.x, r = e.y, a = t.devicePixelRatio || 1;
  return {
    x: ke(n * a) / a || 0,
    y: ke(r * a) / a || 0
  };
}
function sr(e) {
  var t, n = e.popper, r = e.popperRect, a = e.placement, o = e.variation, i = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, f = e.roundOffsets, c = e.isFixed, x = i.x, y = x === void 0 ? 0 : x, g = i.y, v = g === void 0 ? 0 : g, h2 = typeof f == "function" ? f({
    x: y,
    y: v
  }) : {
    x: y,
    y: v
  };
  y = h2.x, v = h2.y;
  var p = i.hasOwnProperty("x"), $ = i.hasOwnProperty("y"), b = z, w = L, m = window;
  if (u) {
    var d = ot(n), O = "clientHeight", _ = "clientWidth";
    if (d === G(n) && (d = me(n), fe(d).position !== "static" && s === "absolute" && (O = "scrollHeight", _ = "scrollWidth")), d = d, a === L || (a === z || a === Z) && o === et) {
      w = Y;
      var j = c && d === m && m.visualViewport ? m.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        d[O]
      );
      v -= j - r.height, v *= l ? 1 : -1;
    }
    if (a === z || (a === L || a === Y) && o === et) {
      b = Z;
      var F = c && d === m && m.visualViewport ? m.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        d[_]
      );
      y -= F - r.width, y *= l ? 1 : -1;
    }
  }
  var B = Object.assign({
    position: s
  }, u && mf), M = f === true ? hf({
    x: y,
    y: v
  }, G(n)) : {
    x: y,
    y: v
  };
  if (y = M.x, v = M.y, l) {
    var P;
    return Object.assign({}, B, (P = {}, P[w] = $ ? "0" : "", P[b] = p ? "0" : "", P.transform = (m.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + v + "px)" : "translate3d(" + y + "px, " + v + "px, 0)", P));
  }
  return Object.assign({}, B, (t = {}, t[w] = $ ? v + "px" : "", t[b] = p ? y + "px" : "", t.transform = "", t));
}
function gf(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, a = r === void 0 ? true : r, o = n.adaptive, i = o === void 0 ? true : o, s = n.roundOffsets, l = s === void 0 ? true : s, u = {
    placement: ne(t.placement),
    variation: qe(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: a,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, sr(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: i,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, sr(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: false,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
var yf = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: gf,
  data: {}
};
var pt = {
  passive: true
};
function bf(e) {
  var t = e.state, n = e.instance, r = e.options, a = r.scroll, o = a === void 0 ? true : a, i = r.resize, s = i === void 0 ? true : i, l = G(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && u.forEach(function(f) {
    f.addEventListener("scroll", n.update, pt);
  }), s && l.addEventListener("resize", n.update, pt), function() {
    o && u.forEach(function(f) {
      f.removeEventListener("scroll", n.update, pt);
    }), s && l.removeEventListener("resize", n.update, pt);
  };
}
var wf = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function() {
  },
  effect: bf,
  data: {}
};
var xf = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function wt(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return xf[t];
  });
}
var Of = {
  start: "end",
  end: "start"
};
function lr(e) {
  return e.replace(/start|end/g, function(t) {
    return Of[t];
  });
}
function bn(e) {
  var t = G(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function wn(e) {
  return Re(me(e)).left + bn(e).scrollLeft;
}
function $f(e, t) {
  var n = G(e), r = me(e), a = n.visualViewport, o = r.clientWidth, i = r.clientHeight, s = 0, l = 0;
  if (a) {
    o = a.width, i = a.height;
    var u = Gr();
    (u || !u && t === "fixed") && (s = a.offsetLeft, l = a.offsetTop);
  }
  return {
    width: o,
    height: i,
    x: s + wn(e),
    y: l
  };
}
function _f(e) {
  var t, n = me(e), r = bn(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, o = Oe(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), i = Oe(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), s = -r.scrollLeft + wn(e), l = -r.scrollTop;
  return fe(a || n).direction === "rtl" && (s += Oe(n.clientWidth, a ? a.clientWidth : 0) - o), {
    width: o,
    height: i,
    x: s,
    y: l
  };
}
function xn(e) {
  var t = fe(e), n = t.overflow, r = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + a + r);
}
function Jr(e) {
  return ["html", "body", "#document"].indexOf(ie(e)) >= 0 ? e.ownerDocument.body : X(e) && xn(e) ? e : Jr(Rt(e));
}
function Ke(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Jr(e), a = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = G(r), i = a ? [o].concat(o.visualViewport || [], xn(r) ? r : []) : r, s = t.concat(i);
  return a ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(Ke(Rt(i)))
  );
}
function en(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Tf(e, t) {
  var n = Re(e, false, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function fr(e, t, n) {
  return t === Wr ? en($f(e, n)) : Te(t) ? Tf(t, n) : en(_f(me(e)));
}
function Af(e) {
  var t = Ke(Rt(e)), n = ["absolute", "fixed"].indexOf(fe(e).position) >= 0, r = n && X(e) ? ot(e) : e;
  return Te(r) ? t.filter(function(a) {
    return Te(a) && Kr(a, r) && ie(a) !== "body";
  }) : [];
}
function jf(e, t, n, r) {
  var a = t === "clippingParents" ? Af(e) : [].concat(t), o = [].concat(a, [n]), i = o[0], s = o.reduce(function(l, u) {
    var f = fr(e, u, r);
    return l.top = Oe(f.top, l.top), l.right = Ct(f.right, l.right), l.bottom = Ct(f.bottom, l.bottom), l.left = Oe(f.left, l.left), l;
  }, fr(e, i, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function Qr(e) {
  var t = e.reference, n = e.element, r = e.placement, a = r ? ne(r) : null, o = r ? qe(r) : null, i = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, l;
  switch (a) {
    case L:
      l = {
        x: i,
        y: t.y - n.height
      };
      break;
    case Y:
      l = {
        x: i,
        y: t.y + t.height
      };
      break;
    case Z:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case z:
      l = {
        x: t.x - n.width,
        y: s
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var u = a ? yn(a) : null;
  if (u != null) {
    var f = u === "y" ? "height" : "width";
    switch (o) {
      case De:
        l[u] = l[u] - (t[f] / 2 - n[f] / 2);
        break;
      case et:
        l[u] = l[u] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return l;
}
function tt(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = r === void 0 ? e.placement : r, o = n.strategy, i = o === void 0 ? e.strategy : o, s = n.boundary, l = s === void 0 ? Ul : s, u = n.rootBoundary, f = u === void 0 ? Wr : u, c = n.elementContext, x = c === void 0 ? He : c, y = n.altBoundary, g = y === void 0 ? false : y, v = n.padding, h2 = v === void 0 ? 0 : v, p = Yr(typeof h2 != "number" ? h2 : Zr(h2, it)), $ = x === He ? Gl : He, b = e.rects.popper, w = e.elements[g ? $ : x], m = jf(Te(w) ? w : w.contextElement || me(e.elements.popper), l, f, i), d = Re(e.elements.reference), O = Qr({
    reference: d,
    element: b,
    placement: a
  }), _ = en(Object.assign({}, b, O)), j = x === He ? _ : d, F = {
    top: m.top - j.top + p.top,
    bottom: j.bottom - m.bottom + p.bottom,
    left: m.left - j.left + p.left,
    right: j.right - m.right + p.right
  }, B = e.modifiersData.offset;
  if (x === He && B) {
    var M = B[a];
    Object.keys(F).forEach(function(P) {
      var oe = [Z, Y].indexOf(P) >= 0 ? 1 : -1, he = [L, Y].indexOf(P) >= 0 ? "y" : "x";
      F[P] += M[he] * oe;
    });
  }
  return F;
}
function Ef(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = n.boundary, o = n.rootBoundary, i = n.padding, s = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? Ur : l, f = qe(r), c = f ? s ? ir : ir.filter(function(g) {
    return qe(g) === f;
  }) : it, x = c.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  x.length === 0 && (x = c);
  var y = x.reduce(function(g, v) {
    return g[v] = tt(e, {
      placement: v,
      boundary: a,
      rootBoundary: o,
      padding: i
    })[ne(v)], g;
  }, {});
  return Object.keys(y).sort(function(g, v) {
    return y[g] - y[v];
  });
}
function Pf(e) {
  if (ne(e) === mn)
    return [];
  var t = wt(e);
  return [lr(e), t, lr(t)];
}
function Sf(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var a = n.mainAxis, o = a === void 0 ? true : a, i = n.altAxis, s = i === void 0 ? true : i, l = n.fallbackPlacements, u = n.padding, f = n.boundary, c = n.rootBoundary, x = n.altBoundary, y = n.flipVariations, g = y === void 0 ? true : y, v = n.allowedAutoPlacements, h2 = t.options.placement, p = ne(h2), $ = p === h2, b = l || ($ || !g ? [wt(h2)] : Pf(h2)), w = [h2].concat(b).reduce(function(Fe, ce) {
      return Fe.concat(ne(ce) === mn ? Ef(t, {
        placement: ce,
        boundary: f,
        rootBoundary: c,
        padding: u,
        flipVariations: g,
        allowedAutoPlacements: v
      }) : ce);
    }, []), m = t.rects.reference, d = t.rects.popper, O = /* @__PURE__ */ new Map(), _ = true, j = w[0], F = 0; F < w.length; F++) {
      var B = w[F], M = ne(B), P = qe(B) === De, oe = [L, Y].indexOf(M) >= 0, he = oe ? "width" : "height", W = tt(t, {
        placement: B,
        boundary: f,
        rootBoundary: c,
        altBoundary: x,
        padding: u
      }), J = oe ? P ? Z : z : P ? Y : L;
      m[he] > d[he] && (J = wt(J));
      var lt = wt(J), ge = [];
      if (o && ge.push(W[M] <= 0), s && ge.push(W[J] <= 0, W[lt] <= 0), ge.every(function(Fe) {
        return Fe;
      })) {
        j = B, _ = false;
        break;
      }
      O.set(B, ge);
    }
    if (_)
      for (var ft = g ? 3 : 1, qt = function(ce) {
        var Le = w.find(function(ct) {
          var ye = O.get(ct);
          if (ye)
            return ye.slice(0, ce).every(function(Vt) {
              return Vt;
            });
        });
        if (Le)
          return j = Le, "break";
      }, Ne = ft; Ne > 0; Ne--) {
        var ut = qt(Ne);
        if (ut === "break") break;
      }
    t.placement !== j && (t.modifiersData[r]._skip = true, t.placement = j, t.reset = true);
  }
}
var Ff = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: Sf,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function ur(e, t, n) {
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
function cr(e) {
  return [L, Z, Y, z].some(function(t) {
    return e[t] >= 0;
  });
}
function Cf(e) {
  var t = e.state, n = e.name, r = t.rects.reference, a = t.rects.popper, o = t.modifiersData.preventOverflow, i = tt(t, {
    elementContext: "reference"
  }), s = tt(t, {
    altBoundary: true
  }), l = ur(i, r), u = ur(s, a, o), f = cr(l), c = cr(u);
  t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: u,
    isReferenceHidden: f,
    hasPopperEscaped: c
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": f,
    "data-popper-escaped": c
  });
}
var If = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Cf
};
function Bf(e, t, n) {
  var r = ne(e), a = [z, L].indexOf(r) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, i = o[0], s = o[1];
  return i = i || 0, s = (s || 0) * a, [z, Z].indexOf(r) >= 0 ? {
    x: s,
    y: i
  } : {
    x: i,
    y: s
  };
}
function Mf(e) {
  var t = e.state, n = e.options, r = e.name, a = n.offset, o = a === void 0 ? [0, 0] : a, i = Ur.reduce(function(f, c) {
    return f[c] = Bf(c, t.rects, o), f;
  }, {}), s = i[t.placement], l = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = i;
}
var Df = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Mf
};
function kf(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Qr({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
var Rf = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: kf,
  data: {}
};
function qf(e) {
  return e === "x" ? "y" : "x";
}
function Vf(e) {
  var t = e.state, n = e.options, r = e.name, a = n.mainAxis, o = a === void 0 ? true : a, i = n.altAxis, s = i === void 0 ? false : i, l = n.boundary, u = n.rootBoundary, f = n.altBoundary, c = n.padding, x = n.tether, y = x === void 0 ? true : x, g = n.tetherOffset, v = g === void 0 ? 0 : g, h2 = tt(t, {
    boundary: l,
    rootBoundary: u,
    padding: c,
    altBoundary: f
  }), p = ne(t.placement), $ = qe(t.placement), b = !$, w = yn(p), m = qf(w), d = t.modifiersData.popperOffsets, O = t.rects.reference, _ = t.rects.popper, j = typeof v == "function" ? v(Object.assign({}, t.rects, {
    placement: t.placement
  })) : v, F = typeof j == "number" ? {
    mainAxis: j,
    altAxis: j
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, j), B = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, M = {
    x: 0,
    y: 0
  };
  if (d) {
    if (o) {
      var P, oe = w === "y" ? L : z, he = w === "y" ? Y : Z, W = w === "y" ? "height" : "width", J = d[w], lt = J + h2[oe], ge = J - h2[he], ft = y ? -_[W] / 2 : 0, qt = $ === De ? O[W] : _[W], Ne = $ === De ? -_[W] : -O[W], ut = t.elements.arrow, Fe = y && ut ? gn(ut) : {
        width: 0,
        height: 0
      }, ce = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Xr(), Le = ce[oe], ct = ce[he], ye = Ge(0, O[W], Fe[W]), Vt = b ? O[W] / 2 - ft - ye - Le - F.mainAxis : qt - ye - Le - F.mainAxis, aa = b ? -O[W] / 2 + ft + ye + ct + F.mainAxis : Ne + ye + ct + F.mainAxis, Nt = t.elements.arrow && ot(t.elements.arrow), ia = Nt ? w === "y" ? Nt.clientTop || 0 : Nt.clientLeft || 0 : 0, $n = (P = B == null ? void 0 : B[w]) != null ? P : 0, oa = J + Vt - $n - ia, sa = J + aa - $n, _n = Ge(y ? Ct(lt, oa) : lt, J, y ? Oe(ge, sa) : ge);
      d[w] = _n, M[w] = _n - J;
    }
    if (s) {
      var Tn, la = w === "x" ? L : z, fa = w === "x" ? Y : Z, be = d[m], dt = m === "y" ? "height" : "width", An = be + h2[la], jn = be - h2[fa], Lt = [L, z].indexOf(p) !== -1, En = (Tn = B == null ? void 0 : B[m]) != null ? Tn : 0, Pn = Lt ? An : be - O[dt] - _[dt] - En + F.altAxis, Sn = Lt ? be + O[dt] + _[dt] - En - F.altAxis : jn, Fn = y && Lt ? uf(Pn, be, Sn) : Ge(y ? Pn : An, be, y ? Sn : jn);
      d[m] = Fn, M[m] = Fn - be;
    }
    t.modifiersData[r] = M;
  }
}
var Nf = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: Vf,
  requiresIfExists: ["offset"]
};
function Lf(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function zf(e) {
  return e === G(e) || !X(e) ? bn(e) : Lf(e);
}
function Hf(e) {
  var t = e.getBoundingClientRect(), n = ke(t.width) / e.offsetWidth || 1, r = ke(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Wf(e, t, n) {
  n === void 0 && (n = false);
  var r = X(t), a = X(t) && Hf(t), o = me(t), i = Re(e, a, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((ie(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  xn(o)) && (s = zf(t)), X(t) ? (l = Re(t, true), l.x += t.clientLeft, l.y += t.clientTop) : o && (l.x = wn(o))), {
    x: i.left + s.scrollLeft - l.x,
    y: i.top + s.scrollTop - l.y,
    width: i.width,
    height: i.height
  };
}
function Uf(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(o) {
    t.set(o.name, o);
  });
  function a(o) {
    n.add(o.name);
    var i = [].concat(o.requires || [], o.requiresIfExists || []);
    i.forEach(function(s) {
      if (!n.has(s)) {
        var l = t.get(s);
        l && a(l);
      }
    }), r.push(o);
  }
  return e.forEach(function(o) {
    n.has(o.name) || a(o);
  }), r;
}
function Gf(e) {
  var t = Uf(e);
  return rf.reduce(function(n, r) {
    return n.concat(t.filter(function(a) {
      return a.phase === r;
    }));
  }, []);
}
function Kf(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Xf(e) {
  var t = e.reduce(function(n, r) {
    var a = n[r.name];
    return n[r.name] = a ? Object.assign({}, a, r, {
      options: Object.assign({}, a.options, r.options),
      data: Object.assign({}, a.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var dr = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function pr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Yf(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, a = t.defaultOptions, o = a === void 0 ? dr : a;
  return function(s, l, u) {
    u === void 0 && (u = o);
    var f = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, dr, o),
      modifiersData: {},
      elements: {
        reference: s,
        popper: l
      },
      attributes: {},
      styles: {}
    }, c = [], x = false, y = {
      state: f,
      setOptions: function(p) {
        var $ = typeof p == "function" ? p(f.options) : p;
        v(), f.options = Object.assign({}, o, f.options, $), f.scrollParents = {
          reference: Te(s) ? Ke(s) : s.contextElement ? Ke(s.contextElement) : [],
          popper: Ke(l)
        };
        var b = Gf(Xf([].concat(r, f.options.modifiers)));
        return f.orderedModifiers = b.filter(function(w) {
          return w.enabled;
        }), g(), y.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!x) {
          var p = f.elements, $ = p.reference, b = p.popper;
          if (pr($, b)) {
            f.rects = {
              reference: Wf($, ot(b), f.options.strategy === "fixed"),
              popper: gn(b)
            }, f.reset = false, f.placement = f.options.placement, f.orderedModifiers.forEach(function(F) {
              return f.modifiersData[F.name] = Object.assign({}, F.data);
            });
            for (var w = 0; w < f.orderedModifiers.length; w++) {
              if (f.reset === true) {
                f.reset = false, w = -1;
                continue;
              }
              var m = f.orderedModifiers[w], d = m.fn, O = m.options, _ = O === void 0 ? {} : O, j = m.name;
              typeof d == "function" && (f = d({
                state: f,
                options: _,
                name: j,
                instance: y
              }) || f);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Kf(function() {
        return new Promise(function(h2) {
          y.forceUpdate(), h2(f);
        });
      }),
      destroy: function() {
        v(), x = true;
      }
    };
    if (!pr(s, l))
      return y;
    y.setOptions(u).then(function(h2) {
      !x && u.onFirstUpdate && u.onFirstUpdate(h2);
    });
    function g() {
      f.orderedModifiers.forEach(function(h2) {
        var p = h2.name, $ = h2.options, b = $ === void 0 ? {} : $, w = h2.effect;
        if (typeof w == "function") {
          var m = w({
            state: f,
            name: p,
            instance: y,
            options: b
          }), d = function() {
          };
          c.push(m || d);
        }
      });
    }
    function v() {
      c.forEach(function(h2) {
        return h2();
      }), c = [];
    }
    return y;
  };
}
var Zf = [wf, Rf, yf, sf, Df, Ff, Nf, vf, If];
var Jf = Yf({
  defaultModifiers: Zf
});
var Qf = (e, t) => {
  const n = (r) => {
    e.value && r.target && (e.value.contains(r.target) || t(r));
  };
  onMounted(() => {
    document.addEventListener("click", n);
  }), onUnmounted(() => {
    document.removeEventListener("click", n);
  });
};
var Ie = defineComponent({
  name: "MxTooltip",
  __name: "Tooltip",
  props: {
    content: {},
    trigger: { default: "click" },
    placement: { default: "bottom" },
    manual: { type: Boolean },
    popperOptions: {},
    transition: { default: "fade" },
    openDelay: { default: 0 },
    closeDelay: { default: 0 }
  },
  emits: ["visible-change", "click-outside"],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, o = ref(false), i = ref(), s = ref(), l = ref();
    let u = null;
    const f = computed(() => ({
      placement: a.placement,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 8]
          }
        }
      ],
      ...a.popperOptions
    })), c = () => {
      o.value === true ? v() : g();
    }, x = Jt(() => {
      o.value = true, r("visible-change", o.value);
    }, a.openDelay), y = Jt(() => {
      o.value = false, r("visible-change", o.value);
    }, a.closeDelay), g = () => {
      y.cancel(), x();
    }, v = () => {
      x.cancel(), y();
    };
    let h2 = reactive({}), p = reactive({});
    const $ = () => {
      a.trigger === "click" ? h2.click = c : a.trigger === "hover" && (h2.mouseenter = g, p.mouseleave = v);
    };
    return Qf(l, () => {
      a.trigger === "click" && o.value && !a.manual && v(), o.value && r("click-outside", true);
    }), watch(
      () => [a.trigger, a.manual],
      () => {
        h2 = {}, p = {}, a.manual || $();
      },
      { immediate: true }
    ), watch(
      o,
      (b) => {
        b && (i.value && s.value ? u = Jf(i.value, s.value, f.value) : u == null || u.destroy());
      },
      { flush: "post" }
    ), onUnmounted(() => {
      u == null || u.destroy();
    }), t({
      show: g,
      hide: v
    }), (b, w) => (openBlock(), createElementBlock("div", mergeProps({ class: "mx-tooltip" }, toHandlers(unref(p), true), {
      ref_key: "popperContainerNode",
      ref: l
    }), [
      createBaseVNode("div", mergeProps({
        class: "mx-tooltip__trigger",
        ref_key: "triggerNode",
        ref: i
      }, toHandlers(unref(h2), true)), [
        renderSlot(b.$slots, "default")
      ], 16),
      createVNode(Transition, { name: b.transition }, {
        default: withCtx(() => [
          o.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "mx-tooltip__popper",
            ref_key: "popperNode",
            ref: s
          }, [
            createTextVNode(toDisplayString(b.content) + " ", 1),
            renderSlot(b.$slots, "content"),
            w[0] || (w[0] = createBaseVNode("div", {
              id: "arrow",
              "data-popper-arrow": ""
            }, null, -1))
          ], 512)) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["name"])
    ], 16));
  }
});
var On = defineComponent({
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
var eu = { class: "mx-dropdown" };
var tu = { class: "mx-dropdown__menu" };
var nu = {
  key: 0,
  role: "separator",
  class: "divided-placeholder"
};
var ru = ["id", "onClick"];
var xt = defineComponent({
  name: "MxDropdown",
  __name: "Dropdown",
  props: {
    menuOptions: {},
    hideAfterClick: { type: Boolean, default: true },
    content: {},
    trigger: {},
    placement: {},
    manual: { type: Boolean },
    popperOptions: {},
    transition: {},
    openDelay: {},
    closeDelay: {}
  },
  emits: ["visible-change", "select"],
  setup(e, { expose: t, emit: n }) {
    const r = e, a = n, o = ref(), i = (l) => {
      a("visible-change", l);
    }, s = (l) => {
      var u;
      l.disabled || (a("select", l), r.hideAfterClick && ((u = o.value) == null || u.hide()));
    };
    return t({
      // 通过箭头函数动态获取 tooltipRef 最新值
      show: () => {
        var l;
        return (l = o.value) == null ? void 0 : l.show();
      },
      hide: () => {
        var l;
        return (l = o.value) == null ? void 0 : l.hide();
      }
    }), (l, u) => (openBlock(), createElementBlock("div", eu, [
      createVNode(Ie, {
        trigger: l.trigger,
        placement: l.placement,
        "popper-options": l.popperOptions,
        "close-delay": l.closeDelay,
        "open-delay": l.openDelay,
        manual: l.manual,
        onVisibleChange: i,
        ref_key: "tooltipRef",
        ref: o
      }, {
        content: withCtx(() => [
          createBaseVNode("ul", tu, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(l.menuOptions, (f) => (openBlock(), createElementBlock(Fragment, {
              key: f.key
            }, [
              f.divided ? (openBlock(), createElementBlock("li", nu)) : createCommentVNode("", true),
              createBaseVNode("li", {
                class: normalizeClass(["mx-dropdown__item", { "is-disabled": f.disabled, "is-divided": f.divided }]),
                id: `dropdown-item-${f.key}`,
                onClick: (c) => s(f)
              }, [
                createVNode(unref(On), {
                  "v-node": f.label
                }, null, 8, ["v-node"])
              ], 10, ru)
            ], 64))), 128))
          ])
        ]),
        default: withCtx(() => [
          renderSlot(l.$slots, "default")
        ]),
        _: 3
      }, 8, ["trigger", "placement", "popper-options", "close-delay", "open-delay", "manual"])
    ]));
  }
});
xt.install = (e) => {
  e.component(xt.name, xt);
};
var ea = Symbol("formContextKey");
var ta = Symbol("formItemContextKey");
var au = { class: "mx-form" };
var Ot = defineComponent({
  name: "MxForm",
  __name: "Form",
  props: {
    model: {},
    rules: {}
  },
  setup(e, { expose: t }) {
    const n = e, r = [], a = (u) => {
      r.push(u);
    }, o = (u) => {
      r.splice(r.indexOf(u), 1);
    }, i = (u = []) => {
      (u.length > 0 ? r.filter((c) => u.includes(c.prop)) : r).forEach((c) => c.clearValidate());
    }, s = (u = []) => {
      (u.length > 0 ? r.filter((c) => u.includes(c.prop)) : r).forEach((c) => c.resetField());
    }, l = async () => {
      let u = {};
      for (const f of r)
        try {
          await f.validate("");
        } catch (c) {
          u = {
            ...u,
            ...c.fields
          };
        }
      return Object.keys(u).length === 0 ? true : Promise.reject(u);
    };
    return provide(ea, {
      ...n,
      removeField: o,
      addField: a
    }), t({
      validate: l,
      clearValidate: i,
      resetFields: s
    }), (u, f) => (openBlock(), createElementBlock("form", au, [
      renderSlot(u.$slots, "default")
    ]));
  }
});
function we() {
  return we = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, we.apply(this, arguments);
}
function iu(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, nt(e, t);
}
function tn(e) {
  return tn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, tn(e);
}
function nt(e, t) {
  return nt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, nt(e, t);
}
function ou() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return false;
  if (typeof Proxy == "function") return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch {
    return false;
  }
}
function $t(e, t, n) {
  return ou() ? $t = Reflect.construct.bind() : $t = function(a, o, i) {
    var s = [null];
    s.push.apply(s, o);
    var l = Function.bind.apply(a, s), u = new l();
    return i && nt(u, i.prototype), u;
  }, $t.apply(null, arguments);
}
function su(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function nn(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return nn = function(r) {
    if (r === null || !su(r)) return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r)) return t.get(r);
      t.set(r, a);
    }
    function a() {
      return $t(r, arguments, tn(this).constructor);
    }
    return a.prototype = Object.create(r.prototype, {
      constructor: {
        value: a,
        enumerable: false,
        writable: true,
        configurable: true
      }
    }), nt(a, r);
  }, nn(e);
}
var lu = /%[sdj%]/g;
var na = function() {
};
typeof process < "u" && process.env && true && typeof window < "u" && typeof document < "u" && (na = function(t, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(r) {
    return typeof r == "string";
  }) && console.warn(t, n);
});
function rn(e) {
  if (!e || !e.length) return null;
  var t = {};
  return e.forEach(function(n) {
    var r = n.field;
    t[r] = t[r] || [], t[r].push(n);
  }), t;
}
function U(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var a = 0, o = n.length;
  if (typeof e == "function")
    return e.apply(null, n);
  if (typeof e == "string") {
    var i = e.replace(lu, function(s) {
      if (s === "%%")
        return "%";
      if (a >= o)
        return s;
      switch (s) {
        case "%s":
          return String(n[a++]);
        case "%d":
          return Number(n[a++]);
        case "%j":
          try {
            return JSON.stringify(n[a++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return s;
      }
    });
    return i;
  }
  return e;
}
function fu(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function k(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || fu(t) && typeof e == "string" && !e);
}
function uu(e, t, n) {
  var r = [], a = 0, o = e.length;
  function i(s) {
    r.push.apply(r, s || []), a++, a === o && n(r);
  }
  e.forEach(function(s) {
    t(s, i);
  });
}
function vr(e, t, n) {
  var r = 0, a = e.length;
  function o(i) {
    if (i && i.length) {
      n(i);
      return;
    }
    var s = r;
    r = r + 1, s < a ? t(e[s], o) : n([]);
  }
  o([]);
}
function cu(e) {
  var t = [];
  return Object.keys(e).forEach(function(n) {
    t.push.apply(t, e[n] || []);
  }), t;
}
var mr = function(e) {
  iu(t, e);
  function t(n, r) {
    var a;
    return a = e.call(this, "Async Validation Error") || this, a.errors = n, a.fields = r, a;
  }
  return t;
}(nn(Error));
function du(e, t, n, r, a) {
  if (t.first) {
    var o = new Promise(function(x, y) {
      var g = function(p) {
        return r(p), p.length ? y(new mr(p, rn(p))) : x(a);
      }, v = cu(e);
      vr(v, n, g);
    });
    return o.catch(function(x) {
      return x;
    }), o;
  }
  var i = t.firstFields === true ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), l = s.length, u = 0, f = [], c = new Promise(function(x, y) {
    var g = function(h2) {
      if (f.push.apply(f, h2), u++, u === l)
        return r(f), f.length ? y(new mr(f, rn(f))) : x(a);
    };
    s.length || (r(f), x(a)), s.forEach(function(v) {
      var h2 = e[v];
      i.indexOf(v) !== -1 ? vr(h2, n, g) : uu(h2, n, g);
    });
  });
  return c.catch(function(x) {
    return x;
  }), c;
}
function pu(e) {
  return !!(e && e.message !== void 0);
}
function vu(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null)
      return n;
    n = n[t[r]];
  }
  return n;
}
function hr(e, t) {
  return function(n) {
    var r;
    return e.fullFields ? r = vu(t, e.fullFields) : r = t[n.field || e.fullField], pu(n) ? (n.field = n.field || e.fullField, n.fieldValue = r, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: r,
      field: n.field || e.fullField
    };
  };
}
function gr(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n];
        typeof r == "object" && typeof e[n] == "object" ? e[n] = we({}, e[n], r) : e[n] = r;
      }
  }
  return e;
}
var ra = function(t, n, r, a, o, i) {
  t.required && (!r.hasOwnProperty(t.field) || k(n, i || t.type)) && a.push(U(o.messages.required, t.fullField));
};
var mu = function(t, n, r, a, o) {
  (/^\s+$/.test(n) || n === "") && a.push(U(o.messages.whitespace, t.fullField));
};
var vt;
var hu = function() {
  if (vt)
    return vt;
  var e = "[a-fA-F\\d:]", t = function(w) {
    return w && w.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : "";
  }, n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", r = "[a-fA-F\\d]{1,4}", a = (`
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
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), o = new RegExp("(?:^" + n + "$)|(?:^" + a + "$)"), i = new RegExp("^" + n + "$"), s = new RegExp("^" + a + "$"), l = function(w) {
    return w && w.exact ? o : new RegExp("(?:" + t(w) + n + t(w) + ")|(?:" + t(w) + a + t(w) + ")", "g");
  };
  l.v4 = function(b) {
    return b && b.exact ? i : new RegExp("" + t(b) + n + t(b), "g");
  }, l.v6 = function(b) {
    return b && b.exact ? s : new RegExp("" + t(b) + a + t(b), "g");
  };
  var u = "(?:(?:[a-z]+:)?//)", f = "(?:\\S+(?::\\S*)?@)?", c = l.v4().source, x = l.v6().source, y = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", g = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", v = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", h2 = "(?::\\d{2,5})?", p = '(?:[/?#][^\\s"]*)?', $ = "(?:" + u + "|www\\.)" + f + "(?:localhost|" + c + "|" + x + "|" + y + g + v + ")" + h2 + p;
  return vt = new RegExp("(?:^" + $ + "$)", "i"), vt;
};
var yr = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var We = {
  integer: function(t) {
    return We.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return We.number(t) && !We.integer(t);
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
    return typeof t == "object" && !We.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(yr.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(hu());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(yr.hex);
  }
};
var gu = function(t, n, r, a, o) {
  if (t.required && n === void 0) {
    ra(t, n, r, a, o);
    return;
  }
  var i = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = t.type;
  i.indexOf(s) > -1 ? We[s](n) || a.push(U(o.messages.types[s], t.fullField, t.type)) : s && typeof n !== t.type && a.push(U(o.messages.types[s], t.fullField, t.type));
};
var yu = function(t, n, r, a, o) {
  var i = typeof t.len == "number", s = typeof t.min == "number", l = typeof t.max == "number", u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, f = n, c = null, x = typeof n == "number", y = typeof n == "string", g = Array.isArray(n);
  if (x ? c = "number" : y ? c = "string" : g && (c = "array"), !c)
    return false;
  g && (f = n.length), y && (f = n.replace(u, "_").length), i ? f !== t.len && a.push(U(o.messages[c].len, t.fullField, t.len)) : s && !l && f < t.min ? a.push(U(o.messages[c].min, t.fullField, t.min)) : l && !s && f > t.max ? a.push(U(o.messages[c].max, t.fullField, t.max)) : s && l && (f < t.min || f > t.max) && a.push(U(o.messages[c].range, t.fullField, t.min, t.max));
};
var Ce = "enum";
var bu = function(t, n, r, a, o) {
  t[Ce] = Array.isArray(t[Ce]) ? t[Ce] : [], t[Ce].indexOf(n) === -1 && a.push(U(o.messages[Ce], t.fullField, t[Ce].join(", ")));
};
var wu = function(t, n, r, a, o) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(n) || a.push(U(o.messages.pattern.mismatch, t.fullField, n, t.pattern));
    else if (typeof t.pattern == "string") {
      var i = new RegExp(t.pattern);
      i.test(n) || a.push(U(o.messages.pattern.mismatch, t.fullField, n, t.pattern));
    }
  }
};
var A = {
  required: ra,
  whitespace: mu,
  type: gu,
  range: yu,
  enum: bu,
  pattern: wu
};
var xu = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (k(n, "string") && !t.required)
      return r();
    A.required(t, n, a, i, o, "string"), k(n, "string") || (A.type(t, n, a, i, o), A.range(t, n, a, i, o), A.pattern(t, n, a, i, o), t.whitespace === true && A.whitespace(t, n, a, i, o));
  }
  r(i);
};
var Ou = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (k(n) && !t.required)
      return r();
    A.required(t, n, a, i, o), n !== void 0 && A.type(t, n, a, i, o);
  }
  r(i);
};
var $u = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (n === "" && (n = void 0), k(n) && !t.required)
      return r();
    A.required(t, n, a, i, o), n !== void 0 && (A.type(t, n, a, i, o), A.range(t, n, a, i, o));
  }
  r(i);
};
var _u = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (k(n) && !t.required)
      return r();
    A.required(t, n, a, i, o), n !== void 0 && A.type(t, n, a, i, o);
  }
  r(i);
};
var Tu = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (k(n) && !t.required)
      return r();
    A.required(t, n, a, i, o), k(n) || A.type(t, n, a, i, o);
  }
  r(i);
};
var Au = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (k(n) && !t.required)
      return r();
    A.required(t, n, a, i, o), n !== void 0 && (A.type(t, n, a, i, o), A.range(t, n, a, i, o));
  }
  r(i);
};
var ju = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (k(n) && !t.required)
      return r();
    A.required(t, n, a, i, o), n !== void 0 && (A.type(t, n, a, i, o), A.range(t, n, a, i, o));
  }
  r(i);
};
var Eu = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (n == null && !t.required)
      return r();
    A.required(t, n, a, i, o, "array"), n != null && (A.type(t, n, a, i, o), A.range(t, n, a, i, o));
  }
  r(i);
};
var Pu = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (k(n) && !t.required)
      return r();
    A.required(t, n, a, i, o), n !== void 0 && A.type(t, n, a, i, o);
  }
  r(i);
};
var Su = "enum";
var Fu = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (k(n) && !t.required)
      return r();
    A.required(t, n, a, i, o), n !== void 0 && A[Su](t, n, a, i, o);
  }
  r(i);
};
var Cu = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (k(n, "string") && !t.required)
      return r();
    A.required(t, n, a, i, o), k(n, "string") || A.pattern(t, n, a, i, o);
  }
  r(i);
};
var Iu = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (k(n, "date") && !t.required)
      return r();
    if (A.required(t, n, a, i, o), !k(n, "date")) {
      var l;
      n instanceof Date ? l = n : l = new Date(n), A.type(t, l, a, i, o), l && A.range(t, l.getTime(), a, i, o);
    }
  }
  r(i);
};
var Bu = function(t, n, r, a, o) {
  var i = [], s = Array.isArray(n) ? "array" : typeof n;
  A.required(t, n, a, i, o, s), r(i);
};
var Ut = function(t, n, r, a, o) {
  var i = t.type, s = [], l = t.required || !t.required && a.hasOwnProperty(t.field);
  if (l) {
    if (k(n, i) && !t.required)
      return r();
    A.required(t, n, a, s, o, i), k(n, i) || A.type(t, n, a, s, o);
  }
  r(s);
};
var Mu = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (k(n) && !t.required)
      return r();
    A.required(t, n, a, i, o);
  }
  r(i);
};
var Xe = {
  string: xu,
  method: Ou,
  number: $u,
  boolean: _u,
  regexp: Tu,
  integer: Au,
  float: ju,
  array: Eu,
  object: Pu,
  enum: Fu,
  pattern: Cu,
  date: Iu,
  url: Ut,
  hex: Ut,
  email: Ut,
  required: Bu,
  any: Mu
};
function an() {
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
var on = an();
var st = function() {
  function e(n) {
    this.rules = null, this._messages = on, this.define(n);
  }
  var t = e.prototype;
  return t.define = function(r) {
    var a = this;
    if (!r)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof r != "object" || Array.isArray(r))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(r).forEach(function(o) {
      var i = r[o];
      a.rules[o] = Array.isArray(i) ? i : [i];
    });
  }, t.messages = function(r) {
    return r && (this._messages = gr(an(), r)), this._messages;
  }, t.validate = function(r, a, o) {
    var i = this;
    a === void 0 && (a = {}), o === void 0 && (o = function() {
    });
    var s = r, l = a, u = o;
    if (typeof l == "function" && (u = l, l = {}), !this.rules || Object.keys(this.rules).length === 0)
      return u && u(null, s), Promise.resolve(s);
    function f(v) {
      var h2 = [], p = {};
      function $(w) {
        if (Array.isArray(w)) {
          var m;
          h2 = (m = h2).concat.apply(m, w);
        } else
          h2.push(w);
      }
      for (var b = 0; b < v.length; b++)
        $(v[b]);
      h2.length ? (p = rn(h2), u(h2, p)) : u(null, s);
    }
    if (l.messages) {
      var c = this.messages();
      c === on && (c = an()), gr(c, l.messages), l.messages = c;
    } else
      l.messages = this.messages();
    var x = {}, y = l.keys || Object.keys(this.rules);
    y.forEach(function(v) {
      var h2 = i.rules[v], p = s[v];
      h2.forEach(function($) {
        var b = $;
        typeof b.transform == "function" && (s === r && (s = we({}, s)), p = s[v] = b.transform(p)), typeof b == "function" ? b = {
          validator: b
        } : b = we({}, b), b.validator = i.getValidationMethod(b), b.validator && (b.field = v, b.fullField = b.fullField || v, b.type = i.getType(b), x[v] = x[v] || [], x[v].push({
          rule: b,
          value: p,
          source: s,
          field: v
        }));
      });
    });
    var g = {};
    return du(x, l, function(v, h2) {
      var p = v.rule, $ = (p.type === "object" || p.type === "array") && (typeof p.fields == "object" || typeof p.defaultField == "object");
      $ = $ && (p.required || !p.required && v.value), p.field = v.field;
      function b(d, O) {
        return we({}, O, {
          fullField: p.fullField + "." + d,
          fullFields: p.fullFields ? [].concat(p.fullFields, [d]) : [d]
        });
      }
      function w(d) {
        d === void 0 && (d = []);
        var O = Array.isArray(d) ? d : [d];
        !l.suppressWarning && O.length && e.warning("async-validator:", O), O.length && p.message !== void 0 && (O = [].concat(p.message));
        var _ = O.map(hr(p, s));
        if (l.first && _.length)
          return g[p.field] = 1, h2(_);
        if (!$)
          h2(_);
        else {
          if (p.required && !v.value)
            return p.message !== void 0 ? _ = [].concat(p.message).map(hr(p, s)) : l.error && (_ = [l.error(p, U(l.messages.required, p.field))]), h2(_);
          var j = {};
          p.defaultField && Object.keys(v.value).map(function(M) {
            j[M] = p.defaultField;
          }), j = we({}, j, v.rule.fields);
          var F = {};
          Object.keys(j).forEach(function(M) {
            var P = j[M], oe = Array.isArray(P) ? P : [P];
            F[M] = oe.map(b.bind(null, M));
          });
          var B = new e(F);
          B.messages(l.messages), v.rule.options && (v.rule.options.messages = l.messages, v.rule.options.error = l.error), B.validate(v.value, v.rule.options || l, function(M) {
            var P = [];
            _ && _.length && P.push.apply(P, _), M && M.length && P.push.apply(P, M), h2(P.length ? P : null);
          });
        }
      }
      var m;
      if (p.asyncValidator)
        m = p.asyncValidator(p, v.value, w, v.source, l);
      else if (p.validator) {
        try {
          m = p.validator(p, v.value, w, v.source, l);
        } catch (d) {
          console.error == null || console.error(d), l.suppressValidatorError || setTimeout(function() {
            throw d;
          }, 0), w(d.message);
        }
        m === true ? w() : m === false ? w(typeof p.message == "function" ? p.message(p.fullField || p.field) : p.message || (p.fullField || p.field) + " fails") : m instanceof Array ? w(m) : m instanceof Error && w(m.message);
      }
      m && m.then && m.then(function() {
        return w();
      }, function(d) {
        return w(d);
      });
    }, function(v) {
      f(v);
    }, s);
  }, t.getType = function(r) {
    if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !Xe.hasOwnProperty(r.type))
      throw new Error(U("Unknown rule type %s", r.type));
    return r.type || "string";
  }, t.getValidationMethod = function(r) {
    if (typeof r.validator == "function")
      return r.validator;
    var a = Object.keys(r), o = a.indexOf("message");
    return o !== -1 && a.splice(o, 1), a.length === 1 && a[0] === "required" ? Xe.required : Xe[this.getType(r)] || void 0;
  }, e;
}();
st.register = function(t, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  Xe[t] = n;
};
st.warning = na;
st.messages = on;
st.validators = Xe;
var Du = { class: "mx-form-item__label" };
var ku = { class: "mx-form-item__content" };
var Ru = {
  key: 0,
  class: "mx-form-item__error-msg"
};
var _t = defineComponent({
  name: "MxFormItem",
  __name: "FormItem",
  props: {
    label: {},
    prop: {}
  },
  setup(e, { expose: t }) {
    const n = e;
    let r = null;
    const a = inject(ea), o = computed(() => {
      const g = a == null ? void 0 : a.model;
      return g && n.prop && !ar(g[n.prop]) ? g[n.prop] : null;
    }), i = computed(() => {
      const g = a == null ? void 0 : a.rules;
      return g && n.prop && g[n.prop] ? g[n.prop] : [];
    }), s = computed(() => i.value.some((g) => g.required)), l = reactive({
      state: "init",
      loading: false,
      errorMsg: ""
    }), u = (g) => i.value.length !== 0 ? i.value.filter((v) => !v.trigger || !g ? true : v.trigger === g) : [], f = async (g) => {
      const v = u(g);
      if (v.length !== 0 && n.prop) {
        const h2 = new st({
          [n.prop]: v
        });
        return l.loading = true, h2.validate({ [n.prop]: o.value }).then(() => {
          l.state = "success";
        }).catch((p) => {
          const { errors: $ } = p;
          return l.state = "error", l.errorMsg = $ && $.length > 0 && $[0].message || "", Promise.reject(p);
        }).finally(() => {
          l.loading = false;
        });
      }
    }, c = () => {
      l.state = "init", l.loading = false, l.errorMsg = "";
    }, x = () => {
      c();
      const g = a == null ? void 0 : a.model;
      g && n.prop && !ar(g[n.prop]) && (g[n.prop] = r);
    }, y = {
      validate: f,
      prop: n.prop || "",
      clearValidate: c,
      resetField: x
    };
    return provide(ta, y), onMounted(() => {
      n.prop && (a == null || a.addField(y), r = o.value);
    }), onUnmounted(() => {
      n.prop && (a == null || a.removeField(y));
    }), t({
      validate: f,
      resetField: x,
      clearValidate: c,
      validateState: l
    }), (g, v) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["mx-form-item", {
        "is-error": l.state === "error",
        "is-success": l.state === "success",
        "is-loading": l.loading === true,
        "is-required": s.value
      }])
    }, [
      createBaseVNode("label", Du, [
        renderSlot(g.$slots, "label", { label: g.label }, () => [
          createTextVNode(toDisplayString(g.label), 1)
        ])
      ]),
      createBaseVNode("div", ku, [
        renderSlot(g.$slots, "default", { validate: f }),
        l.state === "error" ? (openBlock(), createElementBlock("div", Ru, toDisplayString(l.errorMsg), 1)) : createCommentVNode("", true)
      ])
    ], 2));
  }
});
Ot.install = (e) => {
  e.component(Ot.name, Ot);
};
_t.install = (e) => {
  e.component(_t.name, _t);
};
N.install = (e) => {
  e.component(N.name, N);
};
var br = ref(0);
var qu = (e = 2e3) => {
  const t = ref(e), n = ref(0);
  return {
    initialValue: e,
    currentZIndex: n,
    nextZIndex: () => (br.value++, n.value = br.value + t.value, n.value)
  };
};
var xe = shallowReactive([]);
var Vu = 1;
var fc = (e) => {
  const t = `message_${Vu++}`, n = document.createElement("div"), { nextZIndex: r } = qu(), a = () => {
    const u = xe.findIndex((f) => f.id === t);
    u !== -1 && (xe.splice(u, 1), render(null, n));
  }, o = () => {
    const u = xe.find((f) => f.id = t);
    u && (u.vm.exposed.visible.value = false);
  }, i = {
    ...e,
    onDestroy: a,
    id: t,
    zIndex: r()
  }, s = h(Ye, i);
  render(s, n), document.body.appendChild(n.firstChild);
  const l = {
    id: t,
    vNode: s,
    props: i,
    vm: s.component,
    destroy: o
  };
  return xe.push(l), l;
};
var Nu = (e) => {
  const t = xe.findIndex((n) => n.id === e);
  return t <= 0 ? 0 : xe[t - 1].vm.exposed.bottomOffset.value;
};
var uc = () => {
  xe.forEach((e) => {
    e.destroy();
  });
};
function Lu(e, t, n) {
  isRef(e) ? watch(e, (r, a) => {
    a == null || a.removeEventListener(t, n), r == null || r.addEventListener(t, n);
  }) : onMounted(() => {
    e.addEventListener(t, n);
  }), onUnmounted(() => {
    var r;
    (r = unref(e)) == null || r.removeEventListener(t, n);
  });
}
var zu = { class: "mx-message__content" };
var Ye = defineComponent({
  name: "MxMessage",
  __name: "Message",
  props: {
    message: {},
    duration: { default: 3e3 },
    showClose: { type: Boolean },
    type: { default: "info" },
    onDestroy: {},
    offset: { default: 20 },
    id: {},
    zIndex: {},
    transition: { default: "fade-up" }
  },
  setup(e, { expose: t }) {
    const n = e, r = ref(), a = ref(0), o = () => {
      a.value = r.value.getBoundingClientRect().height;
    }, i = computed(() => Nu(n.id)), s = computed(() => i.value + n.offset), l = computed(() => a.value + s.value), u = computed(() => ({ top: s.value + "px", zIndex: n.zIndex })), f = ref(false);
    let c;
    const x = () => {
      n.duration !== 0 && (c = setTimeout(() => {
        f.value = false, n.onDestroy();
      }, n.duration));
    }, y = () => {
      clearTimeout(c);
    }, g = () => {
      n.onDestroy();
    };
    return Lu(document, "keydown", (h2) => {
      h2.code === "Escape" && (f.value = false);
    }), onMounted(async () => {
      f.value = true, x();
    }), t({ bottomOffset: l, visible: f }), (h2, p) => (openBlock(), createBlock(Transition, {
      name: h2.transition,
      onAfterLeave: g,
      onEnter: o
    }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("div", {
          class: normalizeClass(["mx-message", { [`mx-message--${h2.type}`]: h2.type, "is-close": h2.showClose }]),
          role: "alert",
          ref_key: "messageRef",
          ref: r,
          style: normalizeStyle(u.value),
          onMouseenter: y,
          onMouseleave: x
        }, [
          createBaseVNode("div", zu, [
            renderSlot(h2.$slots, "default", {}, () => [
              createTextVNode(toDisplayString(a.value) + "+" + toDisplayString(s.value) + "+" + toDisplayString(l.value) + " ", 1),
              h2.message ? (openBlock(), createBlock(unref(On), {
                key: 0,
                vNode: h2.message
              }, null, 8, ["vNode"])) : createCommentVNode("", true)
            ])
          ]),
          h2.showClose ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "mx-message__close",
            onClick: p[0] || (p[0] = withModifiers(($) => f.value = false, ["stop"]))
          }, [
            createVNode(N, { icon: "xmark" })
          ])) : createCommentVNode("", true)
        ], 38), [
          [vShow, f.value]
        ])
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
Ye.install = (e) => {
  e.component(Ye.name, Ye);
};
var Hu = {
  key: 0,
  class: "mx-input__prepend"
};
var Wu = { class: "mx-input__wrapper" };
var Uu = {
  key: 0,
  class: "mx-input__prefix"
};
var Gu = ["type", "disabled", "placeholder", "readonly", "autofocus", "autocomplete", "form"];
var Ku = {
  key: 1,
  class: "mx-input__append"
};
var Xu = ["disabled", "placeholder", "readonly", "autofocus", "autocomplete", "form"];
var Ze = defineComponent({
  name: "MxInput",
  inheritAttrs: false,
  __name: "Input",
  props: {
    modelValue: {},
    type: { default: "text" },
    size: {},
    disabled: { type: Boolean },
    clearable: { type: Boolean },
    showPassword: { type: Boolean },
    placeholder: {},
    readonly: { type: Boolean },
    autocomplete: {},
    autofocus: { type: Boolean },
    form: {}
  },
  emits: ["update:modelValue", "input", "change", "blur", "focus", "clear"],
  setup(e, { expose: t, emit: n }) {
    const r = e, a = n, o = ref(), i = ref(r.modelValue);
    watch(
      () => r.modelValue,
      () => {
        i.value = r.modelValue;
      }
    );
    const s = ref(false), l = computed(() => r.clearable && !r.disabled && !!i.value && s.value), u = () => {
      i.value = "", a("update:modelValue", i.value), a("clear"), a("input", i.value), a("change", i.value);
    }, f = (m) => {
      s.value = true, a("focus", m);
    }, c = inject(ta, null), x = async (m) => {
      try {
        await (c == null ? void 0 : c.validate(m));
      } catch {
      }
    }, y = () => {
      a("update:modelValue", i.value), a("input", i.value), x("input");
    }, g = (m) => {
      s.value = false, a("blur", m), x("blur");
    }, v = ref(false), h2 = computed(() => r.showPassword && !r.disabled && !!i.value), p = () => {
      v.value = !v.value;
    }, $ = () => {
      x("change"), a("change", i.value);
    }, b = async () => {
      await nextTick(), o.value.focus();
    }, w = () => {
    };
    return t({ ref: o }), (m, d) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["mx-input", {
        [`mx-input--${m.type}`]: m.type,
        [`mx-input--${m.size}`]: m.size,
        "is-disabled": m.disabled,
        "is-prepend": m.$slots.prepend,
        "is-append": m.$slots.append,
        "is-prefix": m.$slots.prefix,
        "is-suffix": m.$slots.suffix,
        "is-focus": s.value
      }])
    }, [
      m.type !== "textarea" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        m.$slots.prepend ? (openBlock(), createElementBlock("div", Hu, [
          renderSlot(m.$slots, "prepend")
        ])) : createCommentVNode("", true),
        createBaseVNode("div", Wu, [
          m.$slots.prefix ? (openBlock(), createElementBlock("span", Uu, [
            renderSlot(m.$slots, "prefix")
          ])) : createCommentVNode("", true),
          withDirectives(createBaseVNode("input", mergeProps({
            class: "mx-input__inner",
            type: m.showPassword ? v.value ? "text" : "password" : m.type,
            disabled: m.disabled,
            placeholder: m.placeholder,
            readonly: m.readonly,
            autofocus: m.autofocus,
            autocomplete: m.autocomplete,
            form: m.form
          }, m.$attrs, {
            "onUpdate:modelValue": d[0] || (d[0] = (O) => i.value = O),
            ref_key: "inputRef",
            ref: o,
            onInput: y,
            onFocus: f,
            onBlur: g,
            onChange: $
          }), null, 16, Gu), [
            [vModelDynamic, i.value]
          ]),
          m.$slots.suffix || l.value || h2.value ? (openBlock(), createElementBlock("span", {
            key: 1,
            class: "mx-input__suffix",
            onClick: b
          }, [
            renderSlot(m.$slots, "suffix"),
            l.value ? (openBlock(), createBlock(N, {
              key: 0,
              icon: "circle-xmark",
              class: "mx-input__clear",
              onClick: u,
              onMousedown: withModifiers(w, ["prevent"])
            })) : createCommentVNode("", true),
            h2.value ? (openBlock(), createBlock(N, {
              key: 1,
              icon: v.value ? "eye" : "eye-slash",
              class: "mx-input__password",
              onClick: p
            }, null, 8, ["icon"])) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ]),
        m.$slots.append ? (openBlock(), createElementBlock("div", Ku, [
          renderSlot(m.$slots, "append")
        ])) : createCommentVNode("", true)
      ], 64)) : withDirectives((openBlock(), createElementBlock("textarea", mergeProps({
        key: 1,
        class: "mx-textarea__wrapper",
        disabled: m.disabled,
        placeholder: m.placeholder,
        readonly: m.readonly,
        autofocus: m.autofocus,
        autocomplete: m.autocomplete,
        form: m.form
      }, m.$attrs, {
        "onUpdate:modelValue": d[1] || (d[1] = (O) => i.value = O),
        onInput: y,
        onClick: f,
        onBlur: g,
        onChange: $
      }), null, 16, Xu)), [
        [vModelText, i.value]
      ])
    ], 2));
  }
});
Ze.install = (e) => {
  e.component(Ze.name, Ze);
};
var Yu = {
  key: 0,
  class: "mx-select__loading"
};
var Zu = {
  key: 1,
  class: "mx-select__nodata"
};
var Ju = {
  key: 2,
  class: "mx-select__menu"
};
var Qu = ["id", "onClick"];
var Tt = defineComponent({
  name: "MxSelect",
  __name: "Select",
  props: {
    modelValue: {},
    options: { default: () => [] },
    placeholder: {},
    disabled: { type: Boolean },
    clearable: { type: Boolean },
    filterable: { type: Boolean },
    filterMethod: {},
    renderLabel: {},
    remote: { type: Boolean },
    remoteMethod: {}
  },
  emits: ["update:modelValue", "change", "visible-change", "clear"],
  setup(e, { emit: t }) {
    const n = e, r = t, a = ref(false), o = ref(), i = ref(), s = ref(n.options), l = computed(() => n.remote ? 300 : 0), u = () => {
      var O;
      return (O = n.options) == null ? void 0 : O.find((_) => _.value === n.modelValue);
    }, f = ref(u());
    watch(n, () => {
      f.value = u(), s.value = n.options;
    });
    const c = reactive({
      inputValue: f.value ? f.value.label : "",
      selectedOption: f.value ? f.value : null,
      isHover: false,
      loading: false,
      highlightIndex: -1
    }), x = {
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 8]
          }
        },
        {
          name: "sameWidth",
          enabled: true,
          fn: ({ state: d }) => {
            d.styles.popper.width = `${d.rects.reference.width}px`;
          },
          phase: "beforeWrite",
          requires: ["computeStyles"]
        }
      ]
    }, y = async (d) => {
      var O;
      if (n.filterable) {
        if (n.filterMethod && St(n.filterMethod))
          s.value = n.filterMethod(d);
        else if (n.remote && n.remoteMethod && St(n.remoteMethod)) {
          c.loading = true;
          try {
            s.value = await n.remoteMethod(d);
          } catch (_) {
            console.error(_);
          } finally {
            c.loading = false;
          }
        } else
          s.value = (O = n.options) == null ? void 0 : O.filter((_) => _.label.includes(d));
        c.highlightIndex = -1;
      }
    }, g = Jt(() => {
      y(c.inputValue);
    }, l.value), v = computed(() => n.filterable && c.selectedOption && a ? c.selectedOption.label : n.placeholder), h2 = (d) => {
      d ? (n.filterable && (c.inputValue = "", y(c.inputValue)), o.value.show()) : (n.filterable && (c.inputValue = c.selectedOption ? c.selectedOption.label : ""), o.value.hide(), c.highlightIndex = -1), a.value = d, r("visible-change", d);
    }, p = () => {
      n.disabled || (a.value ? h2(false) : h2(true));
    }, $ = (d) => {
      d.disabled || (c.inputValue = d.label, c.selectedOption = d, i.value.ref.focus(), r("change", d.value), r("update:modelValue", d.value));
    }, b = computed(() => n.clearable && c.isHover && c.inputValue && c.selectedOption), w = () => {
      c.inputValue = "", c.selectedOption = null, r("update:modelValue", ""), r("change", ""), r("clear");
    }, m = (d) => {
      switch (d.key) {
        case "Enter":
          a.value ? (c.highlightIndex !== -1 && s.value[c.highlightIndex] && $(s.value[c.highlightIndex]), h2(false)) : h2(true);
          break;
        case "Escape":
          a.value && h2(false);
          break;
        case "ArrowUp":
          d.preventDefault(), s.value.length > 0 && (c.highlightIndex === -1 || c.highlightIndex === 0 ? c.highlightIndex = s.value.length - 1 : c.highlightIndex--);
          break;
        case "ArrowDown":
          d.preventDefault(), s.value.length > 0 && (c.highlightIndex === -1 || c.highlightIndex === n.options.length - 1 ? c.highlightIndex = 0 : c.highlightIndex++);
      }
    };
    return (d, O) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["mx-select", { "is-disabled": d.disabled }]),
      onClick: p,
      onMouseenter: O[2] || (O[2] = (_) => c.isHover = true),
      onMouseleave: O[3] || (O[3] = (_) => c.isHover = false)
    }, [
      createVNode(Ie, {
        placement: "bottom-start",
        manual: "",
        ref_key: "tooltipRef",
        ref: o,
        "popper-options": x,
        onClickOutside: O[1] || (O[1] = (_) => h2(false))
      }, {
        content: withCtx(() => {
          var _;
          return [
            c.loading ? (openBlock(), createElementBlock("div", Yu, [
              createVNode(N, {
                icon: "spinner",
                spin: ""
              })
            ])) : ((_ = s.value) == null ? void 0 : _.length) === 0 ? (openBlock(), createElementBlock("div", Zu, "no match data")) : (openBlock(), createElementBlock("ul", Ju, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(s.value, (j, F) => {
                var B;
                return openBlock(), createElementBlock("li", {
                  key: F,
                  class: normalizeClass(["mx-select__menu-item", {
                    "is-disabled": j.disabled,
                    "is-selected": ((B = c.selectedOption) == null ? void 0 : B.value) === j.value,
                    "is-highlight": c.highlightIndex === F
                  }]),
                  id: `select-item-${j.value}`,
                  onClick: (M) => $(j)
                }, [
                  createVNode(unref(On), {
                    vNode: d.renderLabel ? d.renderLabel(j) : j.label
                  }, null, 8, ["vNode"])
                ], 10, Qu);
              }), 128))
            ]))
          ];
        }),
        default: withCtx(() => [
          createVNode(Ze, {
            modelValue: c.inputValue,
            "onUpdate:modelValue": O[0] || (O[0] = (_) => c.inputValue = _),
            disabled: d.disabled,
            placeholder: v.value,
            readonly: !d.filterable || !a.value,
            ref_key: "inputRef",
            ref: i,
            onInput: unref(g),
            onKeydown: m
          }, {
            suffix: withCtx(() => [
              b.value ? (openBlock(), createBlock(N, {
                key: 1,
                class: "mx-input__clear",
                icon: "circle-xmark",
                onClick: withModifiers(w, ["stop"])
              })) : (openBlock(), createBlock(N, {
                key: 0,
                icon: "angle-down",
                class: normalizeClass(["header-angle", { "is-active": a.value }])
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
Tt.install = (e) => {
  e.component(Tt.name, Tt);
};
var ec = ["disabled", "name"];
var tc = { class: "mx-switch__core-inner" };
var nc = {
  key: 0,
  class: "mx-switch__core-inner-text"
};
var At = defineComponent({
  name: "MxSwitch",
  __name: "Switch",
  props: {
    modelValue: { type: [Boolean, String, Number] },
    disabled: { type: Boolean },
    activeText: {},
    inactiveText: {},
    activeValue: { type: [Boolean, String, Number], default: true },
    inactiveValue: { type: [Boolean, String, Number], default: false },
    name: {},
    id: {},
    size: {}
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const n = e, r = t, a = ref(n.modelValue);
    watch(
      () => n.modelValue,
      (l) => {
        a.value = l;
      }
    );
    const o = computed(() => a.value === n.activeValue), i = () => {
      n.disabled || (a.value = o.value ? n.inactiveValue : n.activeValue, r("update:modelValue", a.value), r("change", a.value));
    }, s = ref();
    return onMounted(() => {
      s.value.checked = o.value;
    }), watch(o, () => {
      s.value.checked = o.value;
    }), (l, u) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["mx-switch", { [`mx-switch--${l.size}`]: l.size, "is-disabled": l.disabled, "is-checked": o.value }])
    }, [
      createBaseVNode("input", {
        class: "mx-switch__input",
        type: "checkbox",
        role: "switch",
        disabled: l.disabled,
        name: l.name,
        ref_key: "inputRef",
        ref: s,
        onKeydown: withKeys(i, ["enter"])
      }, null, 40, ec),
      createBaseVNode("div", {
        class: "mx-switch__core",
        onClick: i
      }, [
        createBaseVNode("div", tc, [
          l.activeText || l.inactiveText ? (openBlock(), createElementBlock("span", nc, toDisplayString(o.value ? l.activeText : l.inactiveText), 1)) : createCommentVNode("", true)
        ]),
        u[0] || (u[0] = createBaseVNode("div", { class: "mx-switch__core-action" }, null, -1))
      ])
    ], 2));
  }
});
At.install = (e) => {
  e.component(At.name, At);
};
Ie.install = (e) => {
  e.component(Ie.name, Ie);
};
library$1.add(icons);
var rc = [
  ht,
  gt,
  yt,
  bt,
  xt,
  Ot,
  _t,
  N,
  Ye,
  Ze,
  Tt,
  At,
  Ie
];
var ac = (e) => {
  rc.map((t) => {
    e.use(t);
  });
};
var cc = {
  install: ac
};
export {
  gt as Alert,
  ht as Button,
  yt as Collapse,
  bt as CollapseItem,
  xt as Dropdown,
  Ot as Form,
  _t as FormItem,
  N as Icon,
  Ze as Input,
  Ye as Message,
  Tt as Select,
  At as Switch,
  Ie as Tooltip,
  fc as createMessage,
  cc as default,
  uc as destroyAllMessage,
  ac as install
};
//# sourceMappingURL=x-element-plus.js.map
