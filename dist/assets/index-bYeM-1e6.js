const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/Home-BU-lPqIk.js",
      "assets/ProjectsGrid-CT5llOYR.js",
      "assets/ui-project-2-B89WGbom.js",
      "assets/Projects-vwg830Sr.js",
      "assets/ProjectSingle-Bnmucjzx.js",
    ])
) => i.map((i) => d[i]);
function E0(n, o) {
  for (var i = 0; i < o.length; i++) {
    const l = o[i];
    if (typeof l != "string" && !Array.isArray(l)) {
      for (const s in l)
        if (s !== "default" && !(s in n)) {
          const f = Object.getOwnPropertyDescriptor(l, s);
          f &&
            Object.defineProperty(
              n,
              s,
              f.get ? f : { enumerable: !0, get: () => l[s] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(n, Symbol.toStringTag, { value: "Module" })
  );
}
(function() {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) l(s);
  new MutationObserver((s) => {
    for (const f of s)
      if (f.type === "childList")
        for (const d of f.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && l(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(s) {
    const f = {};
    return (
      s.integrity && (f.integrity = s.integrity),
      s.referrerPolicy && (f.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (f.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (f.credentials = "omit")
        : (f.credentials = "same-origin"),
      f
    );
  }
  function l(s) {
    if (s.ep) return;
    s.ep = !0;
    const f = i(s);
    fetch(s.href, f);
  }
})();
function P0(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var Cu = { exports: {} },
  go = {},
  ku = { exports: {} },
  ve = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vd;
function T0() {
  if (vd) return ve;
  vd = 1;
  var n = Symbol.for("react.element"),
    o = Symbol.for("react.portal"),
    i = Symbol.for("react.fragment"),
    l = Symbol.for("react.strict_mode"),
    s = Symbol.for("react.profiler"),
    f = Symbol.for("react.provider"),
    d = Symbol.for("react.context"),
    v = Symbol.for("react.forward_ref"),
    h = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    y = Symbol.for("react.lazy"),
    x = Symbol.iterator;
  function S(k) {
    return k === null || typeof k != "object"
      ? null
      : ((k = (x && k[x]) || k["@@iterator"]),
        typeof k == "function" ? k : null);
  }
  var L = {
      isMounted: function() {
        return !1;
      },
      enqueueForceUpdate: function() {},
      enqueueReplaceState: function() {},
      enqueueSetState: function() {},
    },
    P = Object.assign,
    R = {};
  function E(k, A, ue) {
    (this.props = k),
      (this.context = A),
      (this.refs = R),
      (this.updater = ue || L);
  }
  (E.prototype.isReactComponent = {}),
    (E.prototype.setState = function(k, A) {
      if (typeof k != "object" && typeof k != "function" && k != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, k, A, "setState");
    }),
    (E.prototype.forceUpdate = function(k) {
      this.updater.enqueueForceUpdate(this, k, "forceUpdate");
    });
  function M() {}
  M.prototype = E.prototype;
  function U(k, A, ue) {
    (this.props = k),
      (this.context = A),
      (this.refs = R),
      (this.updater = ue || L);
  }
  var Y = (U.prototype = new M());
  (Y.constructor = U), P(Y, E.prototype), (Y.isPureReactComponent = !0);
  var K = Array.isArray,
    $ = Object.prototype.hasOwnProperty,
    B = { current: null },
    b = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Z(k, A, ue) {
    var fe,
      ge = {},
      ye = null,
      Te = null;
    if (A != null)
      for (fe in (A.ref !== void 0 && (Te = A.ref),
      A.key !== void 0 && (ye = "" + A.key),
      A))
        $.call(A, fe) && !b.hasOwnProperty(fe) && (ge[fe] = A[fe]);
    var Ee = arguments.length - 2;
    if (Ee === 1) ge.children = ue;
    else if (1 < Ee) {
      for (var Le = Array(Ee), Ze = 0; Ze < Ee; Ze++)
        Le[Ze] = arguments[Ze + 2];
      ge.children = Le;
    }
    if (k && k.defaultProps)
      for (fe in ((Ee = k.defaultProps), Ee))
        ge[fe] === void 0 && (ge[fe] = Ee[fe]);
    return {
      $$typeof: n,
      type: k,
      key: ye,
      ref: Te,
      props: ge,
      _owner: B.current,
    };
  }
  function q(k, A) {
    return {
      $$typeof: n,
      type: k.type,
      key: A,
      ref: k.ref,
      props: k.props,
      _owner: k._owner,
    };
  }
  function ie(k) {
    return typeof k == "object" && k !== null && k.$$typeof === n;
  }
  function pe(k) {
    var A = { "=": "=0", ":": "=2" };
    return (
      "$" +
      k.replace(/[=:]/g, function(ue) {
        return A[ue];
      })
    );
  }
  var Se = /\/+/g;
  function xe(k, A) {
    return typeof k == "object" && k !== null && k.key != null
      ? pe("" + k.key)
      : A.toString(36);
  }
  function he(k, A, ue, fe, ge) {
    var ye = typeof k;
    (ye === "undefined" || ye === "boolean") && (k = null);
    var Te = !1;
    if (k === null) Te = !0;
    else
      switch (ye) {
        case "string":
        case "number":
          Te = !0;
          break;
        case "object":
          switch (k.$$typeof) {
            case n:
            case o:
              Te = !0;
          }
      }
    if (Te)
      return (
        (Te = k),
        (ge = ge(Te)),
        (k = fe === "" ? "." + xe(Te, 0) : fe),
        K(ge)
          ? ((ue = ""),
            k != null && (ue = k.replace(Se, "$&/") + "/"),
            he(ge, A, ue, "", function(Ze) {
              return Ze;
            }))
          : ge != null &&
            (ie(ge) &&
              (ge = q(
                ge,
                ue +
                  (!ge.key || (Te && Te.key === ge.key)
                    ? ""
                    : ("" + ge.key).replace(Se, "$&/") + "/") +
                  k
              )),
            A.push(ge)),
        1
      );
    if (((Te = 0), (fe = fe === "" ? "." : fe + ":"), K(k)))
      for (var Ee = 0; Ee < k.length; Ee++) {
        ye = k[Ee];
        var Le = fe + xe(ye, Ee);
        Te += he(ye, A, ue, Le, ge);
      }
    else if (((Le = S(k)), typeof Le == "function"))
      for (k = Le.call(k), Ee = 0; !(ye = k.next()).done; )
        (ye = ye.value),
          (Le = fe + xe(ye, Ee++)),
          (Te += he(ye, A, ue, Le, ge));
    else if (ye === "object")
      throw ((A = String(k)),
      Error(
        "Objects are not valid as a React child (found: " +
          (A === "[object Object]"
            ? "object with keys {" + Object.keys(k).join(", ") + "}"
            : A) +
          "). If you meant to render a collection of children, use an array instead."
      ));
    return Te;
  }
  function Ne(k, A, ue) {
    if (k == null) return k;
    var fe = [],
      ge = 0;
    return (
      he(k, fe, "", "", function(ye) {
        return A.call(ue, ye, ge++);
      }),
      fe
    );
  }
  function de(k) {
    if (k._status === -1) {
      var A = k._result;
      (A = A()),
        A.then(
          function(ue) {
            (k._status === 0 || k._status === -1) &&
              ((k._status = 1), (k._result = ue));
          },
          function(ue) {
            (k._status === 0 || k._status === -1) &&
              ((k._status = 2), (k._result = ue));
          }
        ),
        k._status === -1 && ((k._status = 0), (k._result = A));
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var me = { current: null },
    W = { transition: null },
    oe = {
      ReactCurrentDispatcher: me,
      ReactCurrentBatchConfig: W,
      ReactCurrentOwner: B,
    };
  function Q() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (ve.Children = {
      map: Ne,
      forEach: function(k, A, ue) {
        Ne(
          k,
          function() {
            A.apply(this, arguments);
          },
          ue
        );
      },
      count: function(k) {
        var A = 0;
        return (
          Ne(k, function() {
            A++;
          }),
          A
        );
      },
      toArray: function(k) {
        return (
          Ne(k, function(A) {
            return A;
          }) || []
        );
      },
      only: function(k) {
        if (!ie(k))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return k;
      },
    }),
    (ve.Component = E),
    (ve.Fragment = i),
    (ve.Profiler = s),
    (ve.PureComponent = U),
    (ve.StrictMode = l),
    (ve.Suspense = h),
    (ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oe),
    (ve.act = Q),
    (ve.cloneElement = function(k, A, ue) {
      if (k == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            k +
            "."
        );
      var fe = P({}, k.props),
        ge = k.key,
        ye = k.ref,
        Te = k._owner;
      if (A != null) {
        if (
          (A.ref !== void 0 && ((ye = A.ref), (Te = B.current)),
          A.key !== void 0 && (ge = "" + A.key),
          k.type && k.type.defaultProps)
        )
          var Ee = k.type.defaultProps;
        for (Le in A)
          $.call(A, Le) &&
            !b.hasOwnProperty(Le) &&
            (fe[Le] = A[Le] === void 0 && Ee !== void 0 ? Ee[Le] : A[Le]);
      }
      var Le = arguments.length - 2;
      if (Le === 1) fe.children = ue;
      else if (1 < Le) {
        Ee = Array(Le);
        for (var Ze = 0; Ze < Le; Ze++) Ee[Ze] = arguments[Ze + 2];
        fe.children = Ee;
      }
      return {
        $$typeof: n,
        type: k.type,
        key: ge,
        ref: ye,
        props: fe,
        _owner: Te,
      };
    }),
    (ve.createContext = function(k) {
      return (
        (k = {
          $$typeof: d,
          _currentValue: k,
          _currentValue2: k,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (k.Provider = { $$typeof: f, _context: k }),
        (k.Consumer = k)
      );
    }),
    (ve.createElement = Z),
    (ve.createFactory = function(k) {
      var A = Z.bind(null, k);
      return (A.type = k), A;
    }),
    (ve.createRef = function() {
      return { current: null };
    }),
    (ve.forwardRef = function(k) {
      return { $$typeof: v, render: k };
    }),
    (ve.isValidElement = ie),
    (ve.lazy = function(k) {
      return { $$typeof: y, _payload: { _status: -1, _result: k }, _init: de };
    }),
    (ve.memo = function(k, A) {
      return { $$typeof: m, type: k, compare: A === void 0 ? null : A };
    }),
    (ve.startTransition = function(k) {
      var A = W.transition;
      W.transition = {};
      try {
        k();
      } finally {
        W.transition = A;
      }
    }),
    (ve.unstable_act = Q),
    (ve.useCallback = function(k, A) {
      return me.current.useCallback(k, A);
    }),
    (ve.useContext = function(k) {
      return me.current.useContext(k);
    }),
    (ve.useDebugValue = function() {}),
    (ve.useDeferredValue = function(k) {
      return me.current.useDeferredValue(k);
    }),
    (ve.useEffect = function(k, A) {
      return me.current.useEffect(k, A);
    }),
    (ve.useId = function() {
      return me.current.useId();
    }),
    (ve.useImperativeHandle = function(k, A, ue) {
      return me.current.useImperativeHandle(k, A, ue);
    }),
    (ve.useInsertionEffect = function(k, A) {
      return me.current.useInsertionEffect(k, A);
    }),
    (ve.useLayoutEffect = function(k, A) {
      return me.current.useLayoutEffect(k, A);
    }),
    (ve.useMemo = function(k, A) {
      return me.current.useMemo(k, A);
    }),
    (ve.useReducer = function(k, A, ue) {
      return me.current.useReducer(k, A, ue);
    }),
    (ve.useRef = function(k) {
      return me.current.useRef(k);
    }),
    (ve.useState = function(k) {
      return me.current.useState(k);
    }),
    (ve.useSyncExternalStore = function(k, A, ue) {
      return me.current.useSyncExternalStore(k, A, ue);
    }),
    (ve.useTransition = function() {
      return me.current.useTransition();
    }),
    (ve.version = "18.3.1"),
    ve
  );
}
var md;
function ns() {
  return md || ((md = 1), (ku.exports = T0())), ku.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hd;
function L0() {
  if (hd) return go;
  hd = 1;
  var n = ns(),
    o = Symbol.for("react.element"),
    i = Symbol.for("react.fragment"),
    l = Object.prototype.hasOwnProperty,
    s = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(v, h, m) {
    var y,
      x = {},
      S = null,
      L = null;
    m !== void 0 && (S = "" + m),
      h.key !== void 0 && (S = "" + h.key),
      h.ref !== void 0 && (L = h.ref);
    for (y in h) l.call(h, y) && !f.hasOwnProperty(y) && (x[y] = h[y]);
    if (v && v.defaultProps)
      for (y in ((h = v.defaultProps), h)) x[y] === void 0 && (x[y] = h[y]);
    return {
      $$typeof: o,
      type: v,
      key: S,
      ref: L,
      props: x,
      _owner: s.current,
    };
  }
  return (go.Fragment = i), (go.jsx = d), (go.jsxs = d), go;
}
var gd;
function R0() {
  return gd || ((gd = 1), (Cu.exports = L0())), Cu.exports;
}
var D = R0();
const _0 = "modulepreload",
  M0 = function(n) {
    return "/" + n;
  },
  yd = {},
  Do = function(o, i, l) {
    let s = Promise.resolve();
    if (i && i.length > 0) {
      let d = function(m) {
        return Promise.all(
          m.map((y) =>
            Promise.resolve(y).then(
              (x) => ({ status: "fulfilled", value: x }),
              (x) => ({ status: "rejected", reason: x })
            )
          )
        );
      };
      document.getElementsByTagName("link");
      const v = document.querySelector("meta[property=csp-nonce]"),
        h =
          (v == null ? void 0 : v.nonce) ||
          (v == null ? void 0 : v.getAttribute("nonce"));
      s = d(
        i.map((m) => {
          if (((m = M0(m)), m in yd)) return;
          yd[m] = !0;
          const y = m.endsWith(".css"),
            x = y ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${m}"]${x}`)) return;
          const S = document.createElement("link");
          if (
            ((S.rel = y ? "stylesheet" : _0),
            y || (S.as = "script"),
            (S.crossOrigin = ""),
            (S.href = m),
            h && S.setAttribute("nonce", h),
            document.head.appendChild(S),
            y)
          )
            return new Promise((L, P) => {
              S.addEventListener("load", L),
                S.addEventListener("error", () =>
                  P(new Error(`Unable to preload CSS for ${m}`))
                );
            });
        })
      );
    }
    function f(d) {
      const v = new Event("vite:preloadError", { cancelable: !0 });
      if (((v.payload = d), window.dispatchEvent(v), !v.defaultPrevented))
        throw d;
    }
    return s.then((d) => {
      for (const v of d || []) v.status === "rejected" && f(v.reason);
      return o().catch(f);
    });
  };
var Vu = function(n, o) {
  return (
    (Vu =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function(i, l) {
          i.__proto__ = l;
        }) ||
      function(i, l) {
        for (var s in l)
          Object.prototype.hasOwnProperty.call(l, s) && (i[s] = l[s]);
      }),
    Vu(n, o)
  );
};
function Vp(n, o) {
  if (typeof o != "function" && o !== null)
    throw new TypeError(
      "Class extends value " + String(o) + " is not a constructor or null"
    );
  Vu(n, o);
  function i() {
    this.constructor = n;
  }
  n.prototype =
    o === null ? Object.create(o) : ((i.prototype = o.prototype), new i());
}
var V = function() {
  return (
    (V =
      Object.assign ||
      function(o) {
        for (var i, l = 1, s = arguments.length; l < s; l++) {
          i = arguments[l];
          for (var f in i)
            Object.prototype.hasOwnProperty.call(i, f) && (o[f] = i[f]);
        }
        return o;
      }),
    V.apply(this, arguments)
  );
};
function wt(n, o) {
  var i = {};
  for (var l in n)
    Object.prototype.hasOwnProperty.call(n, l) &&
      o.indexOf(l) < 0 &&
      (i[l] = n[l]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, l = Object.getOwnPropertySymbols(n); s < l.length; s++)
      o.indexOf(l[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(n, l[s]) &&
        (i[l[s]] = n[l[s]]);
  return i;
}
function Oe(n, o) {
  var i = typeof Symbol == "function" && n[Symbol.iterator];
  if (!i) return n;
  var l = i.call(n),
    s,
    f = [],
    d;
  try {
    for (; (o === void 0 || o-- > 0) && !(s = l.next()).done; ) f.push(s.value);
  } catch (v) {
    d = { error: v };
  } finally {
    try {
      s && !s.done && (i = l.return) && i.call(l);
    } finally {
      if (d) throw d.error;
    }
  }
  return f;
}
function lt(n, o, i) {
  if (i || arguments.length === 2)
    for (var l = 0, s = o.length, f; l < s; l++)
      (f || !(l in o)) &&
        (f || (f = Array.prototype.slice.call(o, 0, l)), (f[l] = o[l]));
  return n.concat(f || Array.prototype.slice.call(o));
}
var j = ns();
const Ht = P0(j),
  j0 = E0({ __proto__: null, default: Ht }, [j]);
var Zt = function(n) {
    return {
      isEnabled: function(o) {
        return n.some(function(i) {
          return !!o[i];
        });
      },
    };
  },
  rs = {
    measureLayout: Zt(["layout", "layoutId", "drag", "_layoutResetTransform"]),
    animation: Zt([
      "animate",
      "exit",
      "variants",
      "whileHover",
      "whileTap",
      "whileFocus",
      "whileDrag",
    ]),
    exit: Zt(["exit"]),
    drag: Zt(["drag", "dragControls"]),
    focus: Zt(["whileFocus"]),
    hover: Zt(["whileHover", "onHoverStart", "onHoverEnd"]),
    tap: Zt(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
    pan: Zt(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
    layoutAnimation: Zt(["layout", "layoutId"]),
  };
function N0(n) {
  for (var o in n) {
    var i = n[o];
    i !== null && (rs[o].Component = i);
  }
}
var Eo = function() {},
  Op = j.createContext({ strict: !1 }),
  Dp = Object.keys(rs),
  A0 = Dp.length;
function V0(n, o, i) {
  var l = [];
  if ((j.useContext(Op), !o)) return null;
  for (var s = 0; s < A0; s++) {
    var f = Dp[s],
      d = rs[f],
      v = d.isEnabled,
      h = d.Component;
    v(n) &&
      h &&
      l.push(j.createElement(h, V({ key: f }, n, { visualElement: o })));
  }
  return l;
}
var Ea = j.createContext({
    transformPagePoint: function(n) {
      return n;
    },
    isStatic: !1,
  }),
  Pa = j.createContext({});
function O0() {
  return j.useContext(Pa).visualElement;
}
var zo = j.createContext(null);
function Po(n) {
  var o = j.useRef(null);
  return o.current === null && (o.current = n()), o.current;
}
function zp() {
  var n = j.useContext(zo);
  if (n === null) return [!0, null];
  var o = n.isPresent,
    i = n.onExitComplete,
    l = n.register,
    s = I0();
  j.useEffect(function() {
    return l(s);
  }, []);
  var f = function() {
    return i == null ? void 0 : i(s);
  };
  return !o && i ? [!1, f] : [!0];
}
function D0(n) {
  return n === null ? !0 : n.isPresent;
}
var z0 = 0,
  F0 = function() {
    return z0++;
  },
  I0 = function() {
    return Po(F0);
  },
  B0 = j.createContext(null),
  Fo = typeof window < "u",
  xd = Fo ? j.useLayoutEffect : j.useEffect;
function U0(n) {
  var o = n.layoutId,
    i = j.useContext(B0);
  return i && o !== void 0 ? i + "-" + o : o;
}
function H0(n, o, i, l) {
  var s = j.useContext(Ea),
    f = j.useContext(Op),
    d = O0(),
    v = j.useContext(zo),
    h = U0(i),
    m = j.useRef(void 0);
  l || (l = f.renderer),
    !m.current &&
      l &&
      (m.current = l(n, {
        visualState: o,
        parent: d,
        props: V(V({}, i), { layoutId: h }),
        presenceId: v == null ? void 0 : v.id,
        blockInitialAnimation: (v == null ? void 0 : v.initial) === !1,
      }));
  var y = m.current;
  return (
    xd(function() {
      y &&
        (y.setProps(V(V(V({}, s), i), { layoutId: h })),
        (y.isPresent = D0(v)),
        (y.isPresenceRoot = !d || d.presenceId !== (v == null ? void 0 : v.id)),
        y.syncRender());
    }),
    j.useEffect(function() {
      var x;
      y &&
        ((x = y.animationState) === null || x === void 0 || x.animateChanges());
    }),
    xd(function() {
      return function() {
        return y == null ? void 0 : y.notifyUnmount();
      };
    }, []),
    y
  );
}
function Ou(n) {
  return (
    typeof n == "object" && Object.prototype.hasOwnProperty.call(n, "current")
  );
}
function W0(n, o, i) {
  return j.useCallback(
    function(l) {
      var s;
      l && ((s = n.mount) === null || s === void 0 || s.call(n, l)),
        o && (l ? o.mount(l) : o.unmount()),
        i && (typeof i == "function" ? i(l) : Ou(i) && (i.current = l));
    },
    [o]
  );
}
function Fp(n) {
  return Array.isArray(n);
}
function Ot(n) {
  return typeof n == "string" || Fp(n);
}
function $0(n) {
  var o = {};
  return (
    n.forEachValue(function(i, l) {
      return (o[l] = i.get());
    }),
    o
  );
}
function K0(n) {
  var o = {};
  return (
    n.forEachValue(function(i, l) {
      return (o[l] = i.getVelocity());
    }),
    o
  );
}
function Ip(n, o, i, l, s) {
  var f;
  return (
    l === void 0 && (l = {}),
    s === void 0 && (s = {}),
    typeof o == "string" &&
      (o = (f = n.variants) === null || f === void 0 ? void 0 : f[o]),
    typeof o == "function" ? o(i ?? n.custom, l, s) : o
  );
}
function Ta(n, o, i) {
  var l = n.getProps();
  return Ip(l, o, i ?? l.custom, $0(n), K0(n));
}
function La(n) {
  var o;
  return (
    typeof ((o = n.animate) === null || o === void 0 ? void 0 : o.start) ==
      "function" ||
    Ot(n.initial) ||
    Ot(n.animate) ||
    Ot(n.whileHover) ||
    Ot(n.whileDrag) ||
    Ot(n.whileTap) ||
    Ot(n.whileFocus) ||
    Ot(n.exit)
  );
}
function Bp(n) {
  return !!(La(n) || n.variants);
}
function Q0(n, o) {
  if (La(n)) {
    var i = n.initial,
      l = n.animate;
    return {
      initial: i === !1 || Ot(i) ? i : void 0,
      animate: Ot(l) ? l : void 0,
    };
  }
  return n.inherit !== !1 ? o : {};
}
function Y0(n, o) {
  var i = Q0(n, j.useContext(Pa)),
    l = i.initial,
    s = i.animate;
  return j.useMemo(
    function() {
      return { initial: l, animate: s };
    },
    o ? [wd(l), wd(s)] : []
  );
}
function wd(n) {
  return Array.isArray(n) ? n.join(" ") : n;
}
function G0(n) {
  var o = n.preloadedFeatures,
    i = n.createVisualElement,
    l = n.useRender,
    s = n.useVisualState,
    f = n.Component;
  o && N0(o);
  function d(v, h) {
    var m = j.useContext(Ea).isStatic,
      y = null,
      x = Y0(v, m),
      S = s(v, m);
    return (
      !m &&
        Fo &&
        ((x.visualElement = H0(f, S, v, i)), (y = V0(v, x.visualElement))),
      j.createElement(
        j.Fragment,
        null,
        j.createElement(
          Pa.Provider,
          { value: x },
          l(f, v, W0(S, x.visualElement, h), S, m)
        ),
        y
      )
    );
  }
  return j.forwardRef(d);
}
function X0(n) {
  function o(l, s) {
    return s === void 0 && (s = {}), G0(n(l, s));
  }
  var i = new Map();
  return new Proxy(o, {
    get: function(l, s) {
      return i.has(s) || i.set(s, o(s)), i.get(s);
    },
  });
}
var b0 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "svg",
  "switch",
  "symbol",
  "text",
  "tspan",
  "use",
  "view",
];
function os(n) {
  return typeof n != "string" || n.includes("-")
    ? !1
    : !!(b0.indexOf(n) > -1 || /[A-Z]/.test(n));
}
var xo = {};
function Z0(n) {
  for (var o in n) xo[o] = n[o];
}
var J0 = ["", "X", "Y", "Z"],
  q0 = ["translate", "scale", "rotate", "skew"],
  To = ["transformPerspective", "x", "y", "z"];
q0.forEach(function(n) {
  return J0.forEach(function(o) {
    return To.push(n + o);
  });
});
function eg(n, o) {
  return To.indexOf(n) - To.indexOf(o);
}
var tg = new Set(To);
function Ra(n) {
  return tg.has(n);
}
var ng = new Set(["originX", "originY", "originZ"]);
function Up(n) {
  return ng.has(n);
}
function Hp(n, o) {
  var i = o.layout,
    l = o.layoutId;
  return (
    Ra(n) || Up(n) || ((i || l !== void 0) && (!!xo[n] || n === "opacity"))
  );
}
var Pn = function(n) {
    return n !== null && typeof n == "object" && n.getVelocity;
  },
  rg = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  };
function og(n, o, i, l) {
  var s = n.transform,
    f = n.transformKeys,
    d = o.enableHardwareAcceleration,
    v = d === void 0 ? !0 : d,
    h = o.allowTransformNone,
    m = h === void 0 ? !0 : h,
    y = "";
  f.sort(eg);
  for (var x = !1, S = f.length, L = 0; L < S; L++) {
    var P = f[L];
    (y += (rg[P] || P) + "(" + s[P] + ") "), P === "z" && (x = !0);
  }
  return (
    !x && v ? (y += "translateZ(0)") : (y = y.trim()),
    l ? (y = l(s, i ? "" : y)) : m && i && (y = "none"),
    y
  );
}
function ig(n) {
  var o = n.originX,
    i = o === void 0 ? "50%" : o,
    l = n.originY,
    s = l === void 0 ? "50%" : l,
    f = n.originZ,
    d = f === void 0 ? 0 : f;
  return i + " " + s + " " + d;
}
function Wp(n) {
  return n.startsWith("--");
}
var ag = function(n, o) {
    return o && typeof n == "number" ? o.transform(n) : n;
  },
  $p = function(n, o) {
    return function(i) {
      return Math.max(Math.min(i, o), n);
    };
  },
  wo = function(n) {
    return n % 1 ? Number(n.toFixed(5)) : n;
  },
  Lo = /(-)?([\d]*\.?[\d])+/g,
  Du = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
  lg = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
function Io(n) {
  return typeof n == "string";
}
var Yn = {
    test: function(n) {
      return typeof n == "number";
    },
    parse: parseFloat,
    transform: function(n) {
      return n;
    },
  },
  So = V(V({}, Yn), { transform: $p(0, 1) }),
  ea = V(V({}, Yn), { default: 1 }),
  Bo = function(n) {
    return {
      test: function(o) {
        return Io(o) && o.endsWith(n) && o.split(" ").length === 1;
      },
      parse: parseFloat,
      transform: function(o) {
        return "" + o + n;
      },
    };
  },
  Sn = Bo("deg"),
  Tr = Bo("%"),
  ce = Bo("px"),
  ug = Bo("vh"),
  sg = Bo("vw"),
  Sd = V(V({}, Tr), {
    parse: function(n) {
      return Tr.parse(n) / 100;
    },
    transform: function(n) {
      return Tr.transform(n * 100);
    },
  }),
  is = function(n, o) {
    return function(i) {
      return !!(
        (Io(i) && lg.test(i) && i.startsWith(n)) ||
        (o && Object.prototype.hasOwnProperty.call(i, o))
      );
    };
  },
  Kp = function(n, o, i) {
    return function(l) {
      var s;
      if (!Io(l)) return l;
      var f = l.match(Lo),
        d = f[0],
        v = f[1],
        h = f[2],
        m = f[3];
      return (
        (s = {}),
        (s[n] = parseFloat(d)),
        (s[o] = parseFloat(v)),
        (s[i] = parseFloat(h)),
        (s.alpha = m !== void 0 ? parseFloat(m) : 1),
        s
      );
    };
  },
  kr = {
    test: is("hsl", "hue"),
    parse: Kp("hue", "saturation", "lightness"),
    transform: function(n) {
      var o = n.hue,
        i = n.saturation,
        l = n.lightness,
        s = n.alpha,
        f = s === void 0 ? 1 : s;
      return (
        "hsla(" +
        Math.round(o) +
        ", " +
        Tr.transform(wo(i)) +
        ", " +
        Tr.transform(wo(l)) +
        ", " +
        wo(So.transform(f)) +
        ")"
      );
    },
  },
  cg = $p(0, 255),
  Eu = V(V({}, Yn), {
    transform: function(n) {
      return Math.round(cg(n));
    },
  }),
  Er = {
    test: is("rgb", "red"),
    parse: Kp("red", "green", "blue"),
    transform: function(n) {
      var o = n.red,
        i = n.green,
        l = n.blue,
        s = n.alpha,
        f = s === void 0 ? 1 : s;
      return (
        "rgba(" +
        Eu.transform(o) +
        ", " +
        Eu.transform(i) +
        ", " +
        Eu.transform(l) +
        ", " +
        wo(So.transform(f)) +
        ")"
      );
    },
  };
function fg(n) {
  var o = "",
    i = "",
    l = "",
    s = "";
  return (
    n.length > 5
      ? ((o = n.substr(1, 2)),
        (i = n.substr(3, 2)),
        (l = n.substr(5, 2)),
        (s = n.substr(7, 2)))
      : ((o = n.substr(1, 1)),
        (i = n.substr(2, 1)),
        (l = n.substr(3, 1)),
        (s = n.substr(4, 1)),
        (o += o),
        (i += i),
        (l += l),
        (s += s)),
    {
      red: parseInt(o, 16),
      green: parseInt(i, 16),
      blue: parseInt(l, 16),
      alpha: s ? parseInt(s, 16) / 255 : 1,
    }
  );
}
var zu = { test: is("#"), parse: fg, transform: Er.transform },
  at = {
    test: function(n) {
      return Er.test(n) || zu.test(n) || kr.test(n);
    },
    parse: function(n) {
      return Er.test(n) ? Er.parse(n) : kr.test(n) ? kr.parse(n) : zu.parse(n);
    },
    transform: function(n) {
      return Io(n)
        ? n
        : n.hasOwnProperty("red")
        ? Er.transform(n)
        : kr.transform(n);
    },
  },
  Qp = "${c}",
  Yp = "${n}";
function dg(n) {
  var o, i, l, s;
  return (
    isNaN(n) &&
    Io(n) &&
    ((i = (o = n.match(Lo)) === null || o === void 0 ? void 0 : o.length) !==
      null && i !== void 0
      ? i
      : 0) +
      ((s = (l = n.match(Du)) === null || l === void 0 ? void 0 : l.length) !==
        null && s !== void 0
        ? s
        : 0) >
      0
  );
}
function Gp(n) {
  var o = [],
    i = 0,
    l = n.match(Du);
  l &&
    ((i = l.length), (n = n.replace(Du, Qp)), o.push.apply(o, l.map(at.parse)));
  var s = n.match(Lo);
  return (
    s && ((n = n.replace(Lo, Yp)), o.push.apply(o, s.map(Yn.parse))),
    { values: o, numColors: i, tokenised: n }
  );
}
function Xp(n) {
  return Gp(n).values;
}
function bp(n) {
  var o = Gp(n),
    i = o.values,
    l = o.numColors,
    s = o.tokenised,
    f = i.length;
  return function(d) {
    for (var v = s, h = 0; h < f; h++)
      v = v.replace(h < l ? Qp : Yp, h < l ? at.transform(d[h]) : wo(d[h]));
    return v;
  };
}
var pg = function(n) {
  return typeof n == "number" ? 0 : n;
};
function vg(n) {
  var o = Xp(n),
    i = bp(n);
  return i(o.map(pg));
}
var Jt = { test: dg, parse: Xp, createTransformer: bp, getAnimatableNone: vg },
  mg = new Set(["brightness", "contrast", "saturate", "opacity"]);
function hg(n) {
  var o = n.slice(0, -1).split("("),
    i = o[0],
    l = o[1];
  if (i === "drop-shadow") return n;
  var s = (l.match(Lo) || [])[0];
  if (!s) return n;
  var f = l.replace(s, ""),
    d = mg.has(i) ? 1 : 0;
  return s !== l && (d *= 100), i + "(" + d + f + ")";
}
var gg = /([a-z-]*)\(.*?\)/g,
  Fu = V(V({}, Jt), {
    getAnimatableNone: function(n) {
      var o = n.match(gg);
      return o ? o.map(hg).join(" ") : n;
    },
  }),
  Cd = V(V({}, Yn), { transform: Math.round }),
  Zp = {
    borderWidth: ce,
    borderTopWidth: ce,
    borderRightWidth: ce,
    borderBottomWidth: ce,
    borderLeftWidth: ce,
    borderRadius: ce,
    radius: ce,
    borderTopLeftRadius: ce,
    borderTopRightRadius: ce,
    borderBottomRightRadius: ce,
    borderBottomLeftRadius: ce,
    width: ce,
    maxWidth: ce,
    height: ce,
    maxHeight: ce,
    size: ce,
    top: ce,
    right: ce,
    bottom: ce,
    left: ce,
    padding: ce,
    paddingTop: ce,
    paddingRight: ce,
    paddingBottom: ce,
    paddingLeft: ce,
    margin: ce,
    marginTop: ce,
    marginRight: ce,
    marginBottom: ce,
    marginLeft: ce,
    rotate: Sn,
    rotateX: Sn,
    rotateY: Sn,
    rotateZ: Sn,
    scale: ea,
    scaleX: ea,
    scaleY: ea,
    scaleZ: ea,
    skew: Sn,
    skewX: Sn,
    skewY: Sn,
    distance: ce,
    translateX: ce,
    translateY: ce,
    translateZ: ce,
    x: ce,
    y: ce,
    z: ce,
    perspective: ce,
    transformPerspective: ce,
    opacity: So,
    originX: Sd,
    originY: Sd,
    originZ: ce,
    zIndex: Cd,
    fillOpacity: So,
    strokeOpacity: So,
    numOctaves: Cd,
  };
function as(n, o, i, l, s, f, d, v) {
  var h,
    m = n.style,
    y = n.vars,
    x = n.transform,
    S = n.transformKeys,
    L = n.transformOrigin;
  S.length = 0;
  var P = !1,
    R = !1,
    E = !0;
  for (var M in o) {
    var U = o[M];
    if (Wp(M)) {
      y[M] = U;
      continue;
    }
    var Y = Zp[M],
      K = ag(U, Y);
    if (Ra(M)) {
      if (((P = !0), (x[M] = K), S.push(M), !E)) continue;
      U !== ((h = Y.default) !== null && h !== void 0 ? h : 0) && (E = !1);
    } else if (Up(M)) (L[M] = K), (R = !0);
    else if (i != null && i.isHydrated && l != null && l.isHydrated && xo[M]) {
      var $ = xo[M].process(U, l, i),
        B = xo[M].applyTo;
      if (B) for (var b = B.length, Z = 0; Z < b; Z++) m[B[Z]] = $;
      else m[M] = $;
    } else m[M] = K;
  }
  l && i && d && v
    ? ((m.transform = d(l.deltaFinal, l.treeScale, P ? x : void 0)),
      f && (m.transform = f(x, m.transform)),
      (m.transformOrigin = v(l)))
    : (P && (m.transform = og(n, s, E, f)), R && (m.transformOrigin = ig(L)));
}
var ls = function() {
  return {
    style: {},
    transform: {},
    transformKeys: [],
    transformOrigin: {},
    vars: {},
  };
};
function Jp(n, o, i) {
  for (var l in o) !Pn(o[l]) && !Hp(l, i) && (n[l] = o[l]);
}
function yg(n, o, i) {
  var l = n.transformTemplate;
  return j.useMemo(
    function() {
      var s = ls();
      as(s, o, void 0, void 0, { enableHardwareAcceleration: !i }, l);
      var f = s.vars,
        d = s.style;
      return V(V({}, f), d);
    },
    [o]
  );
}
function xg(n, o, i) {
  var l = n.style || {},
    s = {};
  return (
    Jp(s, l, n),
    Object.assign(s, yg(n, o, i)),
    n.transformValues && (s = n.transformValues(s)),
    s
  );
}
function wg(n, o, i) {
  var l = {},
    s = xg(n, o, i);
  return (
    n.drag &&
      ((l.draggable = !1),
      (s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none"),
      (s.touchAction =
        n.drag === !0 ? "none" : "pan-" + (n.drag === "x" ? "y" : "x"))),
    (l.style = s),
    l
  );
}
var Sg = new Set([
  "initial",
  "animate",
  "exit",
  "style",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "layout",
  "layoutId",
  "_layoutResetTransform",
  "onLayoutAnimationComplete",
  "onViewportBoxUpdate",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "drag",
  "dragControls",
  "dragListener",
  "dragConstraints",
  "dragDirectionLock",
  "_dragX",
  "_dragY",
  "dragElastic",
  "dragMomentum",
  "dragPropagation",
  "dragTransition",
  "whileDrag",
  "onPan",
  "onPanStart",
  "onPanEnd",
  "onPanSessionStart",
  "onTap",
  "onTapStart",
  "onTapCancel",
  "onHoverStart",
  "onHoverEnd",
  "whileFocus",
  "whileTap",
  "whileHover",
]);
function da(n) {
  return Sg.has(n);
}
var qp = function(n) {
  return !da(n);
};
try {
  var Cg = require("@emotion/is-prop-valid").default;
  qp = function(n) {
    return n.startsWith("on") ? !da(n) : Cg(n);
  };
} catch {}
function kg(n, o, i) {
  var l = {};
  for (var s in n)
    (qp(s) || (i === !0 && da(s)) || (!o && !da(s))) && (l[s] = n[s]);
  return l;
}
function kd(n, o, i) {
  return typeof n == "string" ? n : ce.transform(o + i * n);
}
function Eg(n, o, i) {
  var l = kd(o, n.x, n.width),
    s = kd(i, n.y, n.height);
  return l + " " + s;
}
var Pu = function(n, o) {
    return ce.transform(n * o);
  },
  Pg = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Tg(n, o, i, l, s, f) {
  l === void 0 && (l = 1), s === void 0 && (s = 0);
  var d = Pg;
  n[d.offset] = Pu(-s, o);
  var v = Pu(i, o),
    h = Pu(l, o);
  n[d.array] = v + " " + h;
}
function us(n, o, i, l, s, f, d, v) {
  var h = o.attrX,
    m = o.attrY,
    y = o.originX,
    x = o.originY,
    S = o.pathLength,
    L = o.pathSpacing,
    P = L === void 0 ? 1 : L,
    R = o.pathOffset,
    E = R === void 0 ? 0 : R,
    M = wt(o, [
      "attrX",
      "attrY",
      "originX",
      "originY",
      "pathLength",
      "pathSpacing",
      "pathOffset",
    ]);
  as(n, M, i, l, s, f, d, v), (n.attrs = n.style), (n.style = {});
  var U = n.attrs,
    Y = n.style,
    K = n.dimensions,
    $ = n.totalPathLength;
  U.transform && (K && (Y.transform = U.transform), delete U.transform),
    K &&
      (y !== void 0 || x !== void 0 || Y.transform) &&
      (Y.transformOrigin = Eg(
        K,
        y !== void 0 ? y : 0.5,
        x !== void 0 ? x : 0.5
      )),
    h !== void 0 && (U.x = h),
    m !== void 0 && (U.y = m),
    $ !== void 0 && S !== void 0 && Tg(U, $, S, P, E);
}
var ev = function() {
  return V(V({}, ls()), { attrs: {} });
};
function Lg(n, o) {
  var i = j.useMemo(
    function() {
      var s = ev();
      return (
        us(
          s,
          o,
          void 0,
          void 0,
          { enableHardwareAcceleration: !1 },
          n.transformTemplate
        ),
        V(V({}, s.attrs), { style: V({}, s.style) })
      );
    },
    [o]
  );
  if (n.style) {
    var l = {};
    Jp(l, n.style, n), (i.style = V(V({}, l), i.style));
  }
  return i;
}
function Rg(n) {
  n === void 0 && (n = !1);
  var o = function(i, l, s, f, d) {
    var v = f.latestValues,
      h = os(i) ? Lg : wg,
      m = h(l, v, d),
      y = kg(l, typeof i == "string", n),
      x = V(V(V({}, y), m), { ref: s });
    return j.createElement(i, x);
  };
  return o;
}
var _g = /([a-z])([A-Z])/g,
  Mg = "$1-$2",
  tv = function(n) {
    return n.replace(_g, Mg).toLowerCase();
  };
function nv(n, o) {
  var i = o.style,
    l = o.vars;
  Object.assign(n.style, i);
  for (var s in l) n.style.setProperty(s, l[s]);
}
var rv = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
]);
function ov(n, o) {
  nv(n, o);
  for (var i in o.attrs) n.setAttribute(rv.has(i) ? i : tv(i), o.attrs[i]);
}
function ss(n) {
  var o = n.style,
    i = {};
  for (var l in o) (Pn(o[l]) || Hp(l, n)) && (i[l] = o[l]);
  return i;
}
function iv(n) {
  var o = ss(n);
  for (var i in n)
    if (Pn(n[i])) {
      var l = i === "x" || i === "y" ? "attr" + i.toUpperCase() : i;
      o[l] = n[i];
    }
  return o;
}
function cs(n) {
  return typeof n == "object" && typeof n.start == "function";
}
var Ro = function(n) {
    return Array.isArray(n);
  },
  jg = function(n) {
    return !!(n && typeof n == "object" && n.mix && n.toValue);
  },
  Ng = function(n) {
    return Ro(n) ? n[n.length - 1] || 0 : n;
  };
function Ag(n) {
  var o = Pn(n) ? n.get() : n;
  return jg(o) ? o.toValue() : o;
}
function Ed(n, o, i, l) {
  var s = n.scrapeMotionValuesFromProps,
    f = n.createRenderState,
    d = n.onMount,
    v = { latestValues: Vg(o, i, l, s), renderState: f() };
  return (
    d &&
      (v.mount = function(h) {
        return d(o, h, v);
      }),
    v
  );
}
var av = function(n) {
  return function(o, i) {
    var l = j.useContext(Pa),
      s = j.useContext(zo);
    return i
      ? Ed(n, o, l, s)
      : Po(function() {
          return Ed(n, o, l, s);
        });
  };
};
function Vg(n, o, i, l) {
  var s = {},
    f = (i == null ? void 0 : i.initial) === !1,
    d = l(n);
  for (var v in d) s[v] = Ag(d[v]);
  var h = n.initial,
    m = n.animate,
    y = La(n),
    x = Bp(n);
  o &&
    x &&
    !y &&
    n.inherit !== !1 &&
    (h ?? (h = o.initial), m ?? (m = o.animate));
  var S = f || h === !1 ? m : h;
  if (S && typeof S != "boolean" && !cs(S)) {
    var L = Array.isArray(S) ? S : [S];
    L.forEach(function(P) {
      var R = Ip(n, P);
      if (R) {
        var E = R.transitionEnd;
        R.transition;
        var M = wt(R, ["transitionEnd", "transition"]);
        for (var U in M) s[U] = M[U];
        for (var U in E) s[U] = E[U];
      }
    });
  }
  return s;
}
var Og = {
  useVisualState: av({
    scrapeMotionValuesFromProps: iv,
    createRenderState: ev,
    onMount: function(n, o, i) {
      var l = i.renderState,
        s = i.latestValues;
      try {
        l.dimensions =
          typeof o.getBBox == "function"
            ? o.getBBox()
            : o.getBoundingClientRect();
      } catch {
        l.dimensions = { x: 0, y: 0, width: 0, height: 0 };
      }
      Dg(o) && (l.totalPathLength = o.getTotalLength()),
        us(
          l,
          s,
          void 0,
          void 0,
          { enableHardwareAcceleration: !1 },
          n.transformTemplate
        ),
        ov(o, l);
    },
  }),
};
function Dg(n) {
  return n.tagName === "path";
}
var zg = {
  useVisualState: av({
    scrapeMotionValuesFromProps: ss,
    createRenderState: ls,
  }),
};
function Fg(n, o, i, l) {
  var s = o.forwardMotionProps,
    f = s === void 0 ? !1 : s,
    d = os(n) ? Og : zg;
  return V(V({}, d), {
    preloadedFeatures: i,
    useRender: Rg(f),
    createVisualElement: l,
    Component: n,
  });
}
var Fe;
(function(n) {
  (n.Animate = "animate"),
    (n.Hover = "whileHover"),
    (n.Tap = "whileTap"),
    (n.Drag = "whileDrag"),
    (n.Focus = "whileFocus"),
    (n.Exit = "exit");
})(Fe || (Fe = {}));
function fs(n, o, i, l) {
  return (
    n.addEventListener(o, i, l),
    function() {
      return n.removeEventListener(o, i, l);
    }
  );
}
function Iu(n, o, i, l) {
  j.useEffect(
    function() {
      var s = n.current;
      if (i && s) return fs(s, o, i, l);
    },
    [n, o, i, l]
  );
}
function Ig(n) {
  var o = n.whileFocus,
    i = n.visualElement,
    l = function() {
      var f;
      (f = i.animationState) === null ||
        f === void 0 ||
        f.setActive(Fe.Focus, !0);
    },
    s = function() {
      var f;
      (f = i.animationState) === null ||
        f === void 0 ||
        f.setActive(Fe.Focus, !1);
    };
  Iu(i, "focus", o ? l : void 0), Iu(i, "blur", o ? s : void 0);
}
function lv(n) {
  return typeof PointerEvent < "u" && n instanceof PointerEvent
    ? n.pointerType === "mouse"
    : n instanceof MouseEvent;
}
function uv(n) {
  var o = !!n.touches;
  return o;
}
function Bg(n) {
  return function(o) {
    var i = o instanceof MouseEvent,
      l = !i || (i && o.button === 0);
    l && n(o);
  };
}
var Ug = { pageX: 0, pageY: 0 };
function Hg(n, o) {
  o === void 0 && (o = "page");
  var i = n.touches[0] || n.changedTouches[0],
    l = i || Ug;
  return { x: l[o + "X"], y: l[o + "Y"] };
}
function Wg(n, o) {
  return o === void 0 && (o = "page"), { x: n[o + "X"], y: n[o + "Y"] };
}
function ds(n, o) {
  return o === void 0 && (o = "page"), { point: uv(n) ? Hg(n, o) : Wg(n, o) };
}
function $g(n) {
  return ds(n, "client");
}
var sv = function(n, o) {
    o === void 0 && (o = !1);
    var i = function(l) {
      return n(l, ds(l));
    };
    return o ? Bg(i) : i;
  },
  Kg = function() {
    return Fo && window.onpointerdown === null;
  },
  Qg = function() {
    return Fo && window.ontouchstart === null;
  },
  Yg = function() {
    return Fo && window.onmousedown === null;
  },
  Gg = {
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointercancel: "mousecancel",
    pointerover: "mouseover",
    pointerout: "mouseout",
    pointerenter: "mouseenter",
    pointerleave: "mouseleave",
  },
  Xg = {
    pointerdown: "touchstart",
    pointermove: "touchmove",
    pointerup: "touchend",
    pointercancel: "touchcancel",
  };
function cv(n) {
  return Kg() ? n : Qg() ? Xg[n] : Yg() ? Gg[n] : n;
}
function Lr(n, o, i, l) {
  return fs(n, cv(o), sv(i, o === "pointerdown"), l);
}
function pa(n, o, i, l) {
  return Iu(n, cv(o), i && sv(i, o === "pointerdown"), l);
}
function fv(n) {
  var o = null;
  return function() {
    var i = function() {
      o = null;
    };
    return o === null ? ((o = n), i) : !1;
  };
}
var Pd = fv("dragHorizontal"),
  Td = fv("dragVertical");
function dv(n) {
  var o = !1;
  if (n === "y") o = Td();
  else if (n === "x") o = Pd();
  else {
    var i = Pd(),
      l = Td();
    i && l
      ? (o = function() {
          i(), l();
        })
      : (i && i(), l && l());
  }
  return o;
}
function pv() {
  var n = dv(!0);
  return n ? (n(), !1) : !0;
}
function Ld(n, o, i) {
  return function(l, s) {
    var f;
    !lv(l) ||
      pv() ||
      (i == null || i(l, s),
      (f = n.animationState) === null ||
        f === void 0 ||
        f.setActive(Fe.Hover, o));
  };
}
function bg(n) {
  var o = n.onHoverStart,
    i = n.onHoverEnd,
    l = n.whileHover,
    s = n.visualElement;
  pa(s, "pointerenter", o || l ? Ld(s, !0, o) : void 0),
    pa(s, "pointerleave", i || l ? Ld(s, !1, i) : void 0);
}
var vv = function(n, o) {
  return o ? (n === o ? !0 : vv(n, o.parentElement)) : !1;
};
function ps(n) {
  return j.useEffect(function() {
    return function() {
      return n();
    };
  }, []);
}
var va = function(n, o, i) {
    return Math.min(Math.max(i, n), o);
  },
  Rd = 0.001,
  Zg = 0.01,
  Jg = 10,
  qg = 0.05,
  ey = 1;
function ty(n) {
  var o = n.duration,
    i = o === void 0 ? 800 : o,
    l = n.bounce,
    s = l === void 0 ? 0.25 : l,
    f = n.velocity,
    d = f === void 0 ? 0 : f,
    v = n.mass,
    h = v === void 0 ? 1 : v,
    m,
    y,
    x = 1 - s;
  (x = va(qg, ey, x)),
    (i = va(Zg, Jg, i / 1e3)),
    x < 1
      ? ((m = function(R) {
          var E = R * x,
            M = E * i,
            U = E - d,
            Y = Bu(R, x),
            K = Math.exp(-M);
          return Rd - (U / Y) * K;
        }),
        (y = function(R) {
          var E = R * x,
            M = E * i,
            U = M * d + d,
            Y = Math.pow(x, 2) * Math.pow(R, 2) * i,
            K = Math.exp(-M),
            $ = Bu(Math.pow(R, 2), x),
            B = -m(R) + Rd > 0 ? -1 : 1;
          return (B * ((U - Y) * K)) / $;
        }))
      : ((m = function(R) {
          var E = Math.exp(-R * i),
            M = (R - d) * i + 1;
          return -0.001 + E * M;
        }),
        (y = function(R) {
          var E = Math.exp(-R * i),
            M = (d - R) * (i * i);
          return E * M;
        }));
  var S = 5 / i,
    L = ry(m, y, S);
  if (((i = i * 1e3), isNaN(L)))
    return { stiffness: 100, damping: 10, duration: i };
  var P = Math.pow(L, 2) * h;
  return { stiffness: P, damping: x * 2 * Math.sqrt(h * P), duration: i };
}
var ny = 12;
function ry(n, o, i) {
  for (var l = i, s = 1; s < ny; s++) l = l - n(l) / o(l);
  return l;
}
function Bu(n, o) {
  return n * Math.sqrt(1 - o * o);
}
var oy = ["duration", "bounce"],
  iy = ["stiffness", "damping", "mass"];
function _d(n, o) {
  return o.some(function(i) {
    return n[i] !== void 0;
  });
}
function ay(n) {
  var o = V(
    {
      velocity: 0,
      stiffness: 100,
      damping: 10,
      mass: 1,
      isResolvedFromDuration: !1,
    },
    n
  );
  if (!_d(n, iy) && _d(n, oy)) {
    var i = ty(n);
    (o = V(V(V({}, o), i), { velocity: 0, mass: 1 })),
      (o.isResolvedFromDuration = !0);
  }
  return o;
}
function vs(n) {
  var o = n.from,
    i = o === void 0 ? 0 : o,
    l = n.to,
    s = l === void 0 ? 1 : l,
    f = n.restSpeed,
    d = f === void 0 ? 2 : f,
    v = n.restDelta,
    h = wt(n, ["from", "to", "restSpeed", "restDelta"]),
    m = { done: !1, value: i },
    y = ay(h),
    x = y.stiffness,
    S = y.damping,
    L = y.mass,
    P = y.velocity,
    R = y.duration,
    E = y.isResolvedFromDuration,
    M = Md,
    U = Md;
  function Y() {
    var K = P ? -(P / 1e3) : 0,
      $ = s - i,
      B = S / (2 * Math.sqrt(x * L)),
      b = Math.sqrt(x / L) / 1e3;
    if ((v ?? (v = Math.abs(s - i) <= 1 ? 0.01 : 0.4), B < 1)) {
      var Z = Bu(b, B);
      (M = function(ie) {
        var pe = Math.exp(-B * b * ie);
        return (
          s -
          pe * (((K + B * b * $) / Z) * Math.sin(Z * ie) + $ * Math.cos(Z * ie))
        );
      }),
        (U = function(ie) {
          var pe = Math.exp(-B * b * ie);
          return (
            B *
              b *
              pe *
              ((Math.sin(Z * ie) * (K + B * b * $)) / Z +
                $ * Math.cos(Z * ie)) -
            pe * (Math.cos(Z * ie) * (K + B * b * $) - Z * $ * Math.sin(Z * ie))
          );
        });
    } else if (B === 1)
      M = function(ie) {
        return s - Math.exp(-b * ie) * ($ + (K + b * $) * ie);
      };
    else {
      var q = b * Math.sqrt(B * B - 1);
      M = function(ie) {
        var pe = Math.exp(-B * b * ie),
          Se = Math.min(q * ie, 300);
        return (
          s -
          (pe * ((K + B * b * $) * Math.sinh(Se) + q * $ * Math.cosh(Se))) / q
        );
      };
    }
  }
  return (
    Y(),
    {
      next: function(K) {
        var $ = M(K);
        if (E) m.done = K >= R;
        else {
          var B = U(K) * 1e3,
            b = Math.abs(B) <= d,
            Z = Math.abs(s - $) <= v;
          m.done = b && Z;
        }
        return (m.value = m.done ? s : $), m;
      },
      flipTarget: function() {
        var K;
        (P = -P), (K = [s, i]), (i = K[0]), (s = K[1]), Y();
      },
    }
  );
}
vs.needsInterpolation = function(n, o) {
  return typeof n == "string" || typeof o == "string";
};
var Md = function(n) {
    return 0;
  },
  _o = function(n, o, i) {
    var l = o - n;
    return l === 0 ? 1 : (i - n) / l;
  },
  mt = function(n, o, i) {
    return -i * n + i * o + n;
  },
  ly = function(n, o, i) {
    var l = n * n,
      s = o * o;
    return Math.sqrt(Math.max(0, i * (s - l) + l));
  },
  uy = [zu, Er, kr],
  jd = function(n) {
    return uy.find(function(o) {
      return o.test(n);
    });
  },
  mv = function(n, o) {
    var i = jd(n),
      l = jd(o);
    Eo(i.transform === l.transform);
    var s = i.parse(n),
      f = l.parse(o),
      d = V({}, s),
      v = i === kr ? mt : ly;
    return function(h) {
      for (var m in d) m !== "alpha" && (d[m] = v(s[m], f[m], h));
      return (d.alpha = mt(s.alpha, f.alpha, h)), i.transform(d);
    };
  },
  Uu = function(n) {
    return typeof n == "number";
  },
  sy = function(n, o) {
    return function(i) {
      return o(n(i));
    };
  },
  Uo = function() {
    for (var n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
    return n.reduce(sy);
  };
function hv(n, o) {
  return Uu(n)
    ? function(i) {
        return mt(n, o, i);
      }
    : at.test(n)
    ? mv(n, o)
    : yv(n, o);
}
var gv = function(n, o) {
    var i = lt([], n),
      l = i.length,
      s = n.map(function(f, d) {
        return hv(f, o[d]);
      });
    return function(f) {
      for (var d = 0; d < l; d++) i[d] = s[d](f);
      return i;
    };
  },
  cy = function(n, o) {
    var i = V(V({}, n), o),
      l = {};
    for (var s in i)
      n[s] !== void 0 && o[s] !== void 0 && (l[s] = hv(n[s], o[s]));
    return function(f) {
      for (var d in l) i[d] = l[d](f);
      return i;
    };
  };
function Nd(n) {
  for (
    var o = Jt.parse(n), i = o.length, l = 0, s = 0, f = 0, d = 0;
    d < i;
    d++
  )
    l || typeof o[d] == "number" ? l++ : o[d].hue !== void 0 ? f++ : s++;
  return { parsed: o, numNumbers: l, numRGB: s, numHSL: f };
}
var yv = function(n, o) {
    var i = Jt.createTransformer(o),
      l = Nd(n),
      s = Nd(o);
    return Uo(gv(l.parsed, s.parsed), i);
  },
  fy = function(n, o) {
    return function(i) {
      return mt(n, o, i);
    };
  };
function dy(n) {
  if (typeof n == "number") return fy;
  if (typeof n == "string") return at.test(n) ? mv : yv;
  if (Array.isArray(n)) return gv;
  if (typeof n == "object") return cy;
}
function py(n, o, i) {
  for (var l = [], s = i || dy(n[0]), f = n.length - 1, d = 0; d < f; d++) {
    var v = s(n[d], n[d + 1]);
    if (o) {
      var h = Array.isArray(o) ? o[d] : o;
      v = Uo(h, v);
    }
    l.push(v);
  }
  return l;
}
function vy(n, o) {
  var i = n[0],
    l = n[1],
    s = o[0];
  return function(f) {
    return s(_o(i, l, f));
  };
}
function my(n, o) {
  var i = n.length,
    l = i - 1;
  return function(s) {
    var f = 0,
      d = !1;
    if ((s <= n[0] ? (d = !0) : s >= n[l] && ((f = l - 1), (d = !0)), !d)) {
      for (var v = 1; v < i && !(n[v] > s || v === l); v++);
      f = v - 1;
    }
    var h = _o(n[f], n[f + 1], s);
    return o[f](h);
  };
}
function xv(n, o, i) {
  var l = i === void 0 ? {} : i,
    s = l.clamp,
    f = s === void 0 ? !0 : s,
    d = l.ease,
    v = l.mixer,
    h = n.length;
  Eo(h === o.length),
    Eo(!d || !Array.isArray(d) || d.length === h - 1),
    n[0] > n[h - 1] &&
      ((n = [].concat(n)), (o = [].concat(o)), n.reverse(), o.reverse());
  var m = py(o, d, v),
    y = h === 2 ? vy(n, m) : my(n, m);
  return f
    ? function(x) {
        return y(va(n[0], n[h - 1], x));
      }
    : y;
}
var _a = function(n) {
    return function(o) {
      return 1 - n(1 - o);
    };
  },
  ms = function(n) {
    return function(o) {
      return o <= 0.5 ? n(2 * o) / 2 : (2 - n(2 * (1 - o))) / 2;
    };
  },
  hy = function(n) {
    return function(o) {
      return Math.pow(o, n);
    };
  },
  wv = function(n) {
    return function(o) {
      return o * o * ((n + 1) * o - n);
    };
  },
  gy = function(n) {
    var o = wv(n);
    return function(i) {
      return (i *= 2) < 1 ? 0.5 * o(i) : 0.5 * (2 - Math.pow(2, -10 * (i - 1)));
    };
  },
  Sv = 1.525,
  yy = 4 / 11,
  xy = 8 / 11,
  wy = 9 / 10,
  Cv = function(n) {
    return n;
  },
  hs = hy(2),
  Sy = _a(hs),
  kv = ms(hs),
  Ev = function(n) {
    return 1 - Math.sin(Math.acos(n));
  },
  Pv = _a(Ev),
  Cy = ms(Pv),
  gs = wv(Sv),
  ky = _a(gs),
  Ey = ms(gs),
  Py = gy(Sv),
  Ty = 4356 / 361,
  Ly = 35442 / 1805,
  Ry = 16061 / 1805,
  ma = function(n) {
    if (n === 1 || n === 0) return n;
    var o = n * n;
    return n < yy
      ? 7.5625 * o
      : n < xy
      ? 9.075 * o - 9.9 * n + 3.4
      : n < wy
      ? Ty * o - Ly * n + Ry
      : 10.8 * n * n - 20.52 * n + 10.72;
  },
  _y = _a(ma),
  My = function(n) {
    return n < 0.5 ? 0.5 * (1 - ma(1 - n * 2)) : 0.5 * ma(n * 2 - 1) + 0.5;
  };
function jy(n, o) {
  return n
    .map(function() {
      return o || kv;
    })
    .splice(0, n.length - 1);
}
function Ny(n) {
  var o = n.length;
  return n.map(function(i, l) {
    return l !== 0 ? l / (o - 1) : 0;
  });
}
function Ay(n, o) {
  return n.map(function(i) {
    return i * o;
  });
}
function ua(n) {
  var o = n.from,
    i = o === void 0 ? 0 : o,
    l = n.to,
    s = l === void 0 ? 1 : l,
    f = n.ease,
    d = n.offset,
    v = n.duration,
    h = v === void 0 ? 300 : v,
    m = { done: !1, value: i },
    y = Array.isArray(s) ? s : [i, s],
    x = Ay(d && d.length === y.length ? d : Ny(y), h);
  function S() {
    return xv(x, y, { ease: Array.isArray(f) ? f : jy(y, f) });
  }
  var L = S();
  return {
    next: function(P) {
      return (m.value = L(P)), (m.done = P >= h), m;
    },
    flipTarget: function() {
      y.reverse(), (L = S());
    },
  };
}
function Vy(n) {
  var o = n.velocity,
    i = o === void 0 ? 0 : o,
    l = n.from,
    s = l === void 0 ? 0 : l,
    f = n.power,
    d = f === void 0 ? 0.8 : f,
    v = n.timeConstant,
    h = v === void 0 ? 350 : v,
    m = n.restDelta,
    y = m === void 0 ? 0.5 : m,
    x = n.modifyTarget,
    S = { done: !1, value: s },
    L = d * i,
    P = s + L,
    R = x === void 0 ? P : x(P);
  return (
    R !== P && (L = R - s),
    {
      next: function(E) {
        var M = -L * Math.exp(-E / h);
        return (S.done = !(M > y || M < -y)), (S.value = S.done ? R : R + M), S;
      },
      flipTarget: function() {},
    }
  );
}
var Ad = { keyframes: ua, spring: vs, decay: Vy };
function Oy(n) {
  if (Array.isArray(n.to)) return ua;
  if (Ad[n.type]) return Ad[n.type];
  var o = new Set(Object.keys(n));
  return o.has("ease") || (o.has("duration") && !o.has("dampingRatio"))
    ? ua
    : o.has("dampingRatio") ||
      o.has("stiffness") ||
      o.has("mass") ||
      o.has("damping") ||
      o.has("restSpeed") ||
      o.has("restDelta")
    ? vs
    : ua;
}
var Tv = (1 / 60) * 1e3,
  Dy =
    typeof performance < "u"
      ? function() {
          return performance.now();
        }
      : function() {
          return Date.now();
        },
  Lv =
    typeof window < "u"
      ? function(n) {
          return window.requestAnimationFrame(n);
        }
      : function(n) {
          return setTimeout(function() {
            return n(Dy());
          }, Tv);
        };
function zy(n) {
  var o = [],
    i = [],
    l = 0,
    s = !1,
    f = new WeakSet(),
    d = {
      schedule: function(v, h, m) {
        h === void 0 && (h = !1), m === void 0 && (m = !1);
        var y = m && s,
          x = y ? o : i;
        return (
          h && f.add(v),
          x.indexOf(v) === -1 && (x.push(v), y && s && (l = o.length)),
          v
        );
      },
      cancel: function(v) {
        var h = i.indexOf(v);
        h !== -1 && i.splice(h, 1), f.delete(v);
      },
      process: function(v) {
        var h;
        if (
          ((s = !0),
          (h = [i, o]),
          (o = h[0]),
          (i = h[1]),
          (i.length = 0),
          (l = o.length),
          l)
        )
          for (var m = 0; m < l; m++) {
            var y = o[m];
            y(v), f.has(y) && (d.schedule(y), n());
          }
        s = !1;
      },
    };
  return d;
}
var Fy = 40,
  Hu = !0,
  Mo = !1,
  Wu = !1,
  Rr = { delta: 0, timestamp: 0 },
  Ho = ["read", "update", "preRender", "render", "postRender"],
  Ma = Ho.reduce(function(n, o) {
    return (
      (n[o] = zy(function() {
        return (Mo = !0);
      })),
      n
    );
  }, {}),
  Ut = Ho.reduce(function(n, o) {
    var i = Ma[o];
    return (
      (n[o] = function(l, s, f) {
        return (
          s === void 0 && (s = !1),
          f === void 0 && (f = !1),
          Mo || By(),
          i.schedule(l, s, f)
        );
      }),
      n
    );
  }, {}),
  Co = Ho.reduce(function(n, o) {
    return (n[o] = Ma[o].cancel), n;
  }, {}),
  Pr = Ho.reduce(function(n, o) {
    return (
      (n[o] = function() {
        return Ma[o].process(Rr);
      }),
      n
    );
  }, {}),
  Iy = function(n) {
    return Ma[n].process(Rr);
  },
  Rv = function(n) {
    (Mo = !1),
      (Rr.delta = Hu ? Tv : Math.max(Math.min(n - Rr.timestamp, Fy), 1)),
      (Rr.timestamp = n),
      (Wu = !0),
      Ho.forEach(Iy),
      (Wu = !1),
      Mo && ((Hu = !1), Lv(Rv));
  },
  By = function() {
    (Mo = !0), (Hu = !0), Wu || Lv(Rv);
  },
  ha = function() {
    return Rr;
  };
function _v(n, o, i) {
  return i === void 0 && (i = 0), n - o - i;
}
function Uy(n, o, i, l) {
  return (
    i === void 0 && (i = 0),
    l === void 0 && (l = !0),
    l ? _v(o + -n, o, i) : o - (n - o) + i
  );
}
function Hy(n, o, i, l) {
  return l ? n >= o + i : n <= -i;
}
var Wy = function(n) {
  var o = function(i) {
    var l = i.delta;
    return n(l);
  };
  return {
    start: function() {
      return Ut.update(o, !0);
    },
    stop: function() {
      return Co.update(o);
    },
  };
};
function Mv(n) {
  var o,
    i,
    l = n.from,
    s = n.autoplay,
    f = s === void 0 ? !0 : s,
    d = n.driver,
    v = d === void 0 ? Wy : d,
    h = n.elapsed,
    m = h === void 0 ? 0 : h,
    y = n.repeat,
    x = y === void 0 ? 0 : y,
    S = n.repeatType,
    L = S === void 0 ? "loop" : S,
    P = n.repeatDelay,
    R = P === void 0 ? 0 : P,
    E = n.onPlay,
    M = n.onStop,
    U = n.onComplete,
    Y = n.onRepeat,
    K = n.onUpdate,
    $ = wt(n, [
      "from",
      "autoplay",
      "driver",
      "elapsed",
      "repeat",
      "repeatType",
      "repeatDelay",
      "onPlay",
      "onStop",
      "onComplete",
      "onRepeat",
      "onUpdate",
    ]),
    B = $.to,
    b,
    Z = 0,
    q = $.duration,
    ie,
    pe = !1,
    Se = !0,
    xe,
    he = Oy($);
  !((i = (o = he).needsInterpolation) === null || i === void 0) &&
    i.call(o, l, B) &&
    ((xe = xv([0, 100], [l, B], { clamp: !1 })), (l = 0), (B = 100));
  var Ne = he(V(V({}, $), { from: l, to: B }));
  function de() {
    Z++,
      L === "reverse"
        ? ((Se = Z % 2 === 0), (m = Uy(m, q, R, Se)))
        : ((m = _v(m, q, R)), L === "mirror" && Ne.flipTarget()),
      (pe = !1),
      Y && Y();
  }
  function me() {
    b.stop(), U && U();
  }
  function W(Q) {
    if ((Se || (Q = -Q), (m += Q), !pe)) {
      var k = Ne.next(Math.max(0, m));
      (ie = k.value), xe && (ie = xe(ie)), (pe = Se ? k.done : m <= 0);
    }
    K == null || K(ie),
      pe && (Z === 0 && (q ?? (q = m)), Z < x ? Hy(m, q, R, Se) && de() : me());
  }
  function oe() {
    E == null || E(), (b = v(W)), b.start();
  }
  return (
    f && oe(),
    {
      stop: function() {
        M == null || M(), b.stop();
      },
    }
  );
}
function jv(n, o) {
  return o ? n * (1e3 / o) : 0;
}
function $y(n) {
  var o = n.from,
    i = o === void 0 ? 0 : o,
    l = n.velocity,
    s = l === void 0 ? 0 : l,
    f = n.min,
    d = n.max,
    v = n.power,
    h = v === void 0 ? 0.8 : v,
    m = n.timeConstant,
    y = m === void 0 ? 750 : m,
    x = n.bounceStiffness,
    S = x === void 0 ? 500 : x,
    L = n.bounceDamping,
    P = L === void 0 ? 10 : L,
    R = n.restDelta,
    E = R === void 0 ? 1 : R,
    M = n.modifyTarget,
    U = n.driver,
    Y = n.onUpdate,
    K = n.onComplete,
    $;
  function B(de) {
    return (f !== void 0 && de < f) || (d !== void 0 && de > d);
  }
  function b(de) {
    return f === void 0
      ? d
      : d === void 0 || Math.abs(f - de) < Math.abs(d - de)
      ? f
      : d;
  }
  function Z(de) {
    $ == null || $.stop(),
      ($ = Mv(
        V(V({}, de), {
          driver: U,
          onUpdate: function(me) {
            var W;
            Y == null || Y(me),
              (W = de.onUpdate) === null || W === void 0 || W.call(de, me);
          },
          onComplete: K,
        })
      ));
  }
  function q(de) {
    Z(V({ type: "spring", stiffness: S, damping: P, restDelta: E }, de));
  }
  if (B(i)) q({ from: i, velocity: s, to: b(i) });
  else {
    var ie = h * s + i;
    typeof M < "u" && (ie = M(ie));
    var pe = b(ie),
      Se = pe === f ? -1 : 1,
      xe,
      he,
      Ne = function(de) {
        (xe = he),
          (he = de),
          (s = jv(de - xe, ha().delta)),
          ((Se === 1 && de > pe) || (Se === -1 && de < pe)) &&
            q({ from: de, to: pe, velocity: s });
      };
    Z({
      type: "decay",
      from: i,
      velocity: s,
      timeConstant: y,
      power: h,
      restDelta: E,
      modifyTarget: M,
      onUpdate: B(ie) ? Ne : void 0,
    });
  }
  return {
    stop: function() {
      return $ == null ? void 0 : $.stop();
    },
  };
}
var $u = function(n) {
    return n.hasOwnProperty("x") && n.hasOwnProperty("y");
  },
  Vd = function(n) {
    return $u(n) && n.hasOwnProperty("z");
  },
  ta = function(n, o) {
    return Math.abs(n - o);
  };
function Nv(n, o) {
  if (Uu(n) && Uu(o)) return ta(n, o);
  if ($u(n) && $u(o)) {
    var i = ta(n.x, o.x),
      l = ta(n.y, o.y),
      s = Vd(n) && Vd(o) ? ta(n.z, o.z) : 0;
    return Math.sqrt(Math.pow(i, 2) + Math.pow(l, 2) + Math.pow(s, 2));
  }
}
var Av = function(n, o) {
    return 1 - 3 * o + 3 * n;
  },
  Vv = function(n, o) {
    return 3 * o - 6 * n;
  },
  Ov = function(n) {
    return 3 * n;
  },
  ga = function(n, o, i) {
    return ((Av(o, i) * n + Vv(o, i)) * n + Ov(o)) * n;
  },
  Dv = function(n, o, i) {
    return 3 * Av(o, i) * n * n + 2 * Vv(o, i) * n + Ov(o);
  },
  Ky = 1e-7,
  Qy = 10;
function Yy(n, o, i, l, s) {
  var f,
    d,
    v = 0;
  do (d = o + (i - o) / 2), (f = ga(d, l, s) - n), f > 0 ? (i = d) : (o = d);
  while (Math.abs(f) > Ky && ++v < Qy);
  return d;
}
var Gy = 8,
  Xy = 0.001;
function by(n, o, i, l) {
  for (var s = 0; s < Gy; ++s) {
    var f = Dv(o, i, l);
    if (f === 0) return o;
    var d = ga(o, i, l) - n;
    o -= d / f;
  }
  return o;
}
var sa = 11,
  na = 1 / (sa - 1);
function Zy(n, o, i, l) {
  if (n === o && i === l) return Cv;
  for (var s = new Float32Array(sa), f = 0; f < sa; ++f)
    s[f] = ga(f * na, n, i);
  function d(v) {
    for (var h = 0, m = 1, y = sa - 1; m !== y && s[m] <= v; ++m) h += na;
    --m;
    var x = (v - s[m]) / (s[m + 1] - s[m]),
      S = h + x * na,
      L = Dv(S, n, i);
    return L >= Xy ? by(v, S, n, i) : L === 0 ? S : Yy(v, h, h + na, n, i);
  }
  return function(v) {
    return v === 0 || v === 1 ? v : ga(d(v), o, l);
  };
}
function Jy(n) {
  var o = n.onTap,
    i = n.onTapStart,
    l = n.onTapCancel,
    s = n.whileTap,
    f = n.visualElement,
    d = o || i || l || s,
    v = j.useRef(!1),
    h = j.useRef(null);
  function m() {
    var P;
    (P = h.current) === null || P === void 0 || P.call(h), (h.current = null);
  }
  function y() {
    var P;
    return (
      m(),
      (v.current = !1),
      (P = f.animationState) === null ||
        P === void 0 ||
        P.setActive(Fe.Tap, !1),
      !pv()
    );
  }
  function x(P, R) {
    y() &&
      (vv(f.getInstance(), P.target)
        ? o == null || o(P, R)
        : l == null || l(P, R));
  }
  function S(P, R) {
    y() && (l == null || l(P, R));
  }
  function L(P, R) {
    var E;
    m(),
      !v.current &&
        ((v.current = !0),
        (h.current = Uo(
          Lr(window, "pointerup", x),
          Lr(window, "pointercancel", S)
        )),
        i == null || i(P, R),
        (E = f.animationState) === null ||
          E === void 0 ||
          E.setActive(Fe.Tap, !0));
  }
  pa(f, "pointerdown", d ? L : void 0), ps(m);
}
var Kn = function(n) {
    return function(o) {
      return n(o), null;
    };
  },
  qy = { tap: Kn(Jy), focus: Kn(Ig), hover: Kn(bg) };
function zv(n, o) {
  if (!Array.isArray(o)) return !1;
  var i = o.length;
  if (i !== n.length) return !1;
  for (var l = 0; l < i; l++) if (o[l] !== n[l]) return !1;
  return !0;
}
var ya = function(n) {
    return n * 1e3;
  },
  e1 = {
    linear: Cv,
    easeIn: hs,
    easeInOut: kv,
    easeOut: Sy,
    circIn: Ev,
    circInOut: Cy,
    circOut: Pv,
    backIn: gs,
    backInOut: Ey,
    backOut: ky,
    anticipate: Py,
    bounceIn: _y,
    bounceInOut: My,
    bounceOut: ma,
  },
  Od = function(n) {
    if (Array.isArray(n)) {
      Eo(n.length === 4);
      var o = Oe(n, 4),
        i = o[0],
        l = o[1],
        s = o[2],
        f = o[3];
      return Zy(i, l, s, f);
    } else if (typeof n == "string") return e1[n];
    return n;
  },
  t1 = function(n) {
    return Array.isArray(n) && typeof n[0] != "number";
  },
  Dd = function(n, o) {
    return n === "zIndex"
      ? !1
      : !!(
          typeof o == "number" ||
          Array.isArray(o) ||
          (typeof o == "string" && Jt.test(o) && !o.startsWith("url("))
        );
  },
  Hn = function() {
    return {
      type: "spring",
      stiffness: 500,
      damping: 25,
      restDelta: 0.5,
      restSpeed: 10,
    };
  },
  ra = function(n) {
    return {
      type: "spring",
      stiffness: 550,
      damping: n === 0 ? 2 * Math.sqrt(550) : 30,
      restDelta: 0.01,
      restSpeed: 10,
    };
  },
  Tu = function() {
    return { type: "keyframes", ease: "linear", duration: 0.3 };
  },
  n1 = function(n) {
    return { type: "keyframes", duration: 0.8, values: n };
  },
  zd = {
    x: Hn,
    y: Hn,
    z: Hn,
    rotate: Hn,
    rotateX: Hn,
    rotateY: Hn,
    rotateZ: Hn,
    scaleX: ra,
    scaleY: ra,
    scale: ra,
    opacity: Tu,
    backgroundColor: Tu,
    color: Tu,
    default: ra,
  },
  r1 = function(n, o) {
    var i;
    return Ro(o) ? (i = n1) : (i = zd[n] || zd.default), V({ to: o }, i(o));
  },
  o1 = V(V({}, Zp), {
    color: at,
    backgroundColor: at,
    outlineColor: at,
    fill: at,
    stroke: at,
    borderColor: at,
    borderTopColor: at,
    borderRightColor: at,
    borderBottomColor: at,
    borderLeftColor: at,
    filter: Fu,
    WebkitFilter: Fu,
  }),
  ys = function(n) {
    return o1[n];
  };
function xs(n, o) {
  var i,
    l = ys(n);
  return (
    l !== Fu && (l = Jt),
    (i = l.getAnimatableNone) === null || i === void 0 ? void 0 : i.call(l, o)
  );
}
function i1(n) {
  n.when,
    n.delay,
    n.delayChildren,
    n.staggerChildren,
    n.staggerDirection,
    n.repeat,
    n.repeatType,
    n.repeatDelay,
    n.from;
  var o = wt(n, [
    "when",
    "delay",
    "delayChildren",
    "staggerChildren",
    "staggerDirection",
    "repeat",
    "repeatType",
    "repeatDelay",
    "from",
  ]);
  return !!Object.keys(o).length;
}
function a1(n) {
  var o = n.ease,
    i = n.times,
    l = n.yoyo,
    s = n.flip,
    f = n.loop,
    d = wt(n, ["ease", "times", "yoyo", "flip", "loop"]),
    v = V({}, d);
  return (
    i && (v.offset = i),
    d.duration && (v.duration = ya(d.duration)),
    d.repeatDelay && (v.repeatDelay = ya(d.repeatDelay)),
    o && (v.ease = t1(o) ? o.map(Od) : Od(o)),
    d.type === "tween" && (v.type = "keyframes"),
    (l || f || s) &&
      (l
        ? (v.repeatType = "reverse")
        : f
        ? (v.repeatType = "loop")
        : s && (v.repeatType = "mirror"),
      (v.repeat = f || l || s || d.repeat)),
    d.type !== "spring" && (v.type = "keyframes"),
    v
  );
}
function l1(n, o) {
  var i,
    l = ws(n, o) || {};
  return (i = l.delay) !== null && i !== void 0 ? i : 0;
}
function u1(n) {
  return (
    Array.isArray(n.to) &&
      n.to[0] === null &&
      ((n.to = lt([], Oe(n.to))), (n.to[0] = n.from)),
    n
  );
}
function s1(n, o, i) {
  var l;
  return (
    Array.isArray(o.to) &&
      (((l = n.duration) !== null && l !== void 0) || (n.duration = 0.8)),
    u1(o),
    i1(n) || (n = V(V({}, n), r1(i, o.to))),
    V(V({}, o), a1(n))
  );
}
function c1(n, o, i, l, s) {
  var f,
    d = ws(l, n),
    v = (f = d.from) !== null && f !== void 0 ? f : o.get(),
    h = Dd(n, i);
  v === "none" && h && typeof i == "string"
    ? (v = xs(n, i))
    : Fd(v) && typeof i == "string"
    ? (v = Id(i))
    : !Array.isArray(i) && Fd(i) && typeof v == "string" && (i = Id(v));
  var m = Dd(n, v);
  function y() {
    var S = {
      from: v,
      to: i,
      velocity: o.getVelocity(),
      onComplete: s,
      onUpdate: function(L) {
        return o.set(L);
      },
    };
    return d.type === "inertia" || d.type === "decay"
      ? $y(V(V({}, S), d))
      : Mv(
          V(V({}, s1(d, S, n)), {
            onUpdate: function(L) {
              var P;
              S.onUpdate(L),
                (P = d.onUpdate) === null || P === void 0 || P.call(d, L);
            },
            onComplete: function() {
              var L;
              S.onComplete(),
                (L = d.onComplete) === null || L === void 0 || L.call(d);
            },
          })
        );
  }
  function x() {
    var S;
    return (
      o.set(i),
      s(),
      (S = d == null ? void 0 : d.onComplete) === null ||
        S === void 0 ||
        S.call(d),
      { stop: function() {} }
    );
  }
  return !m || !h || d.type === !1 ? x : y;
}
function Fd(n) {
  return (
    n === 0 ||
    (typeof n == "string" && parseFloat(n) === 0 && n.indexOf(" ") === -1)
  );
}
function Id(n) {
  return typeof n == "number" ? 0 : xs("", n);
}
function ws(n, o) {
  return n[o] || n.default || n;
}
function xa(n, o, i, l) {
  return (
    l === void 0 && (l = {}),
    o.start(function(s) {
      var f,
        d,
        v = c1(n, o, i, l, s),
        h = l1(l, n),
        m = function() {
          return (d = v());
        };
      return (
        h ? (f = setTimeout(m, ya(h))) : m(),
        function() {
          clearTimeout(f), d == null || d.stop();
        }
      );
    })
  );
}
var f1 = function(n) {
  return /^\-?\d*\.?\d+$/.test(n);
};
function Fv(n, o) {
  n.indexOf(o) === -1 && n.push(o);
}
function Iv(n, o) {
  var i = n.indexOf(o);
  i > -1 && n.splice(i, 1);
}
var ca = (function() {
    function n() {
      this.subscriptions = [];
    }
    return (
      (n.prototype.add = function(o) {
        var i = this;
        return (
          Fv(this.subscriptions, o),
          function() {
            return Iv(i.subscriptions, o);
          }
        );
      }),
      (n.prototype.notify = function(o, i, l) {
        var s = this.subscriptions.length;
        if (s)
          if (s === 1) this.subscriptions[0](o, i, l);
          else
            for (var f = 0; f < s; f++) {
              var d = this.subscriptions[f];
              d && d(o, i, l);
            }
      }),
      (n.prototype.getSize = function() {
        return this.subscriptions.length;
      }),
      (n.prototype.clear = function() {
        this.subscriptions.length = 0;
      }),
      n
    );
  })(),
  d1 = function(n) {
    return !isNaN(parseFloat(n));
  },
  p1 = (function() {
    function n(o) {
      var i = this;
      (this.timeDelta = 0),
        (this.lastUpdated = 0),
        (this.updateSubscribers = new ca()),
        (this.velocityUpdateSubscribers = new ca()),
        (this.renderSubscribers = new ca()),
        (this.canTrackVelocity = !1),
        (this.updateAndNotify = function(l, s) {
          s === void 0 && (s = !0), (i.prev = i.current), (i.current = l);
          var f = ha(),
            d = f.delta,
            v = f.timestamp;
          i.lastUpdated !== v &&
            ((i.timeDelta = d),
            (i.lastUpdated = v),
            Ut.postRender(i.scheduleVelocityCheck)),
            i.prev !== i.current && i.updateSubscribers.notify(i.current),
            i.velocityUpdateSubscribers.getSize() &&
              i.velocityUpdateSubscribers.notify(i.getVelocity()),
            s && i.renderSubscribers.notify(i.current);
        }),
        (this.scheduleVelocityCheck = function() {
          return Ut.postRender(i.velocityCheck);
        }),
        (this.velocityCheck = function(l) {
          var s = l.timestamp;
          s !== i.lastUpdated &&
            ((i.prev = i.current),
            i.velocityUpdateSubscribers.notify(i.getVelocity()));
        }),
        (this.hasAnimated = !1),
        (this.prev = this.current = o),
        (this.canTrackVelocity = d1(this.current));
    }
    return (
      (n.prototype.onChange = function(o) {
        return this.updateSubscribers.add(o);
      }),
      (n.prototype.clearListeners = function() {
        this.updateSubscribers.clear();
      }),
      (n.prototype.onRenderRequest = function(o) {
        return o(this.get()), this.renderSubscribers.add(o);
      }),
      (n.prototype.attach = function(o) {
        this.passiveEffect = o;
      }),
      (n.prototype.set = function(o, i) {
        i === void 0 && (i = !0),
          !i || !this.passiveEffect
            ? this.updateAndNotify(o, i)
            : this.passiveEffect(o, this.updateAndNotify);
      }),
      (n.prototype.get = function() {
        return this.current;
      }),
      (n.prototype.getPrevious = function() {
        return this.prev;
      }),
      (n.prototype.getVelocity = function() {
        return this.canTrackVelocity
          ? jv(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
          : 0;
      }),
      (n.prototype.start = function(o) {
        var i = this;
        return (
          this.stop(),
          new Promise(function(l) {
            (i.hasAnimated = !0), (i.stopAnimation = o(l));
          }).then(function() {
            return i.clearAnimation();
          })
        );
      }),
      (n.prototype.stop = function() {
        this.stopAnimation && this.stopAnimation(), this.clearAnimation();
      }),
      (n.prototype.isAnimating = function() {
        return !!this.stopAnimation;
      }),
      (n.prototype.clearAnimation = function() {
        this.stopAnimation = null;
      }),
      (n.prototype.destroy = function() {
        this.updateSubscribers.clear(),
          this.renderSubscribers.clear(),
          this.stop();
      }),
      n
    );
  })();
function Qn(n) {
  return new p1(n);
}
var Bv = function(n) {
    return function(o) {
      return o.test(n);
    };
  },
  v1 = {
    test: function(n) {
      return n === "auto";
    },
    parse: function(n) {
      return n;
    },
  },
  Uv = [Yn, ce, Tr, Sn, sg, ug, v1],
  oa = function(n) {
    return Uv.find(Bv(n));
  },
  m1 = lt(lt([], Oe(Uv)), [at, Jt]),
  h1 = function(n) {
    return m1.find(Bv(n));
  };
function g1(n, o, i) {
  n.hasValue(o) ? n.getValue(o).set(i) : n.addValue(o, Qn(i));
}
function y1(n, o) {
  var i = Ta(n, o),
    l = i ? n.makeTargetAnimatable(i, !1) : {},
    s = l.transitionEnd,
    f = s === void 0 ? {} : s;
  l.transition;
  var d = wt(l, ["transitionEnd", "transition"]);
  d = V(V({}, d), f);
  for (var v in d) {
    var h = Ng(d[v]);
    g1(n, v, h);
  }
}
function x1(n, o, i) {
  var l,
    s,
    f,
    d,
    v = Object.keys(o).filter(function(L) {
      return !n.hasValue(L);
    }),
    h = v.length;
  if (h)
    for (var m = 0; m < h; m++) {
      var y = v[m],
        x = o[y],
        S = null;
      Array.isArray(x) && (S = x[0]),
        S === null &&
          (S =
            (s = (l = i[y]) !== null && l !== void 0 ? l : n.readValue(y)) !==
              null && s !== void 0
              ? s
              : o[y]),
        S != null &&
          (typeof S == "string" && f1(S)
            ? (S = parseFloat(S))
            : !h1(S) && Jt.test(x) && (S = xs(y, x)),
          n.addValue(y, Qn(S)),
          ((f = (d = i)[y]) !== null && f !== void 0) || (d[y] = S),
          n.setBaseTarget(y, S));
    }
}
function w1(n, o) {
  if (o) {
    var i = o[n] || o.default || o;
    return i.from;
  }
}
function S1(n, o, i) {
  var l,
    s,
    f = {};
  for (var d in n)
    f[d] =
      (l = w1(d, o)) !== null && l !== void 0
        ? l
        : (s = i.getValue(d)) === null || s === void 0
        ? void 0
        : s.get();
  return f;
}
function C1(n, o, i) {
  i === void 0 && (i = {}), n.notifyAnimationStart();
  var l;
  if (Array.isArray(o)) {
    var s = o.map(function(d) {
      return Ku(n, d, i);
    });
    l = Promise.all(s);
  } else if (typeof o == "string") l = Ku(n, o, i);
  else {
    var f = typeof o == "function" ? Ta(n, o, i.custom) : o;
    l = Hv(n, f, i);
  }
  return l.then(function() {
    return n.notifyAnimationComplete(o);
  });
}
function Ku(n, o, i) {
  var l;
  i === void 0 && (i = {});
  var s = Ta(n, o, i.custom),
    f = (s || {}).transition,
    d = f === void 0 ? n.getDefaultTransition() || {} : f;
  i.transitionOverride && (d = i.transitionOverride);
  var v = s
      ? function() {
          return Hv(n, s, i);
        }
      : function() {
          return Promise.resolve();
        },
    h =
      !((l = n.variantChildren) === null || l === void 0) && l.size
        ? function(L) {
            L === void 0 && (L = 0);
            var P = d.delayChildren,
              R = P === void 0 ? 0 : P,
              E = d.staggerChildren,
              M = d.staggerDirection;
            return k1(n, o, R + L, E, M, i);
          }
        : function() {
            return Promise.resolve();
          },
    m = d.when;
  if (m) {
    var y = Oe(m === "beforeChildren" ? [v, h] : [h, v], 2),
      x = y[0],
      S = y[1];
    return x().then(S);
  } else return Promise.all([v(), h(i.delay)]);
}
function Hv(n, o, i) {
  var l,
    s = i === void 0 ? {} : i,
    f = s.delay,
    d = f === void 0 ? 0 : f,
    v = s.transitionOverride,
    h = s.type,
    m = n.makeTargetAnimatable(o),
    y = m.transition,
    x = y === void 0 ? n.getDefaultTransition() : y,
    S = m.transitionEnd,
    L = wt(m, ["transition", "transitionEnd"]);
  v && (x = v);
  var P = [],
    R =
      h &&
      ((l = n.animationState) === null || l === void 0
        ? void 0
        : l.getState()[h]);
  for (var E in L) {
    var M = n.getValue(E),
      U = L[E];
    if (!(!M || U === void 0 || (R && P1(R, E)))) {
      var Y = xa(E, M, U, V({ delay: d }, x));
      P.push(Y);
    }
  }
  return Promise.all(P).then(function() {
    S && y1(n, S);
  });
}
function k1(n, o, i, l, s, f) {
  i === void 0 && (i = 0), l === void 0 && (l = 0), s === void 0 && (s = 1);
  var d = [],
    v = (n.variantChildren.size - 1) * l,
    h =
      s === 1
        ? function(m) {
            return m === void 0 && (m = 0), m * l;
          }
        : function(m) {
            return m === void 0 && (m = 0), v - m * l;
          };
  return (
    Array.from(n.variantChildren)
      .sort(E1)
      .forEach(function(m, y) {
        d.push(
          Ku(m, o, V(V({}, f), { delay: i + h(y) })).then(function() {
            return m.notifyAnimationComplete(o);
          })
        );
      }),
    Promise.all(d)
  );
}
function E1(n, o) {
  return n.sortNodePosition(o);
}
function P1(n, o) {
  var i = n.protectedKeys,
    l = n.needsAnimating,
    s = i.hasOwnProperty(o) && l[o] !== !0;
  return (l[o] = !1), s;
}
var Ss = [Fe.Animate, Fe.Hover, Fe.Tap, Fe.Drag, Fe.Focus, Fe.Exit],
  T1 = lt([], Oe(Ss)).reverse(),
  L1 = Ss.length;
function R1(n) {
  return function(o) {
    return Promise.all(
      o.map(function(i) {
        var l = i.animation,
          s = i.options;
        return C1(n, l, s);
      })
    );
  };
}
function _1(n) {
  var o = R1(n),
    i = j1(),
    l = {},
    s = !0,
    f = function(y, x) {
      var S = Ta(n, x);
      if (S) {
        S.transition;
        var L = S.transitionEnd,
          P = wt(S, ["transition", "transitionEnd"]);
        y = V(V(V({}, y), P), L);
      }
      return y;
    };
  function d(y) {
    return l[y] !== void 0;
  }
  function v(y) {
    o = y(n);
  }
  function h(y, x) {
    for (
      var S,
        L = n.getProps(),
        P = n.getVariantContext(!0) || {},
        R = [],
        E = new Set(),
        M = {},
        U = 1 / 0,
        Y = function(b) {
          var Z = T1[b],
            q = i[Z],
            ie = (S = L[Z]) !== null && S !== void 0 ? S : P[Z],
            pe = Ot(ie),
            Se = Z === x ? q.isActive : null;
          Se === !1 && (U = b);
          var xe = ie === P[Z] && ie !== L[Z] && pe;
          if (
            (xe && s && n.manuallyAnimateOnMount && (xe = !1),
            (q.protectedKeys = V({}, M)),
            (!q.isActive && Se === null) ||
              (!ie && !q.prevProp) ||
              cs(ie) ||
              typeof ie == "boolean")
          )
            return "continue";
          var he =
              M1(q.prevProp, ie) ||
              (Z === x && q.isActive && !xe && pe) ||
              (b > U && pe),
            Ne = Array.isArray(ie) ? ie : [ie],
            de = Ne.reduce(f, {});
          Se === !1 && (de = {});
          var me = q.prevResolvedValues,
            W = me === void 0 ? {} : me,
            oe = V(V({}, W), de),
            Q = function(fe) {
              (he = !0), E.delete(fe), (q.needsAnimating[fe] = !0);
            };
          for (var k in oe) {
            var A = de[k],
              ue = W[k];
            M.hasOwnProperty(k) ||
              (A !== ue
                ? Ro(A) && Ro(ue)
                  ? zv(A, ue)
                    ? (q.protectedKeys[k] = !0)
                    : Q(k)
                  : A !== void 0
                  ? Q(k)
                  : E.add(k)
                : A !== void 0 && E.has(k)
                ? Q(k)
                : (q.protectedKeys[k] = !0));
          }
          (q.prevProp = ie),
            (q.prevResolvedValues = de),
            q.isActive && (M = V(V({}, M), de)),
            s && n.blockInitialAnimation && (he = !1),
            he &&
              !xe &&
              R.push.apply(
                R,
                lt(
                  [],
                  Oe(
                    Ne.map(function(fe) {
                      return { animation: fe, options: V({ type: Z }, y) };
                    })
                  )
                )
              );
        },
        K = 0;
      K < L1;
      K++
    )
      Y(K);
    if (((l = V({}, M)), E.size)) {
      var $ = {};
      E.forEach(function(b) {
        var Z = n.getBaseTarget(b);
        Z !== void 0 && ($[b] = Z);
      }),
        R.push({ animation: $ });
    }
    var B = !!R.length;
    return (
      s && L.initial === !1 && !n.manuallyAnimateOnMount && (B = !1),
      (s = !1),
      B ? o(R) : Promise.resolve()
    );
  }
  function m(y, x, S) {
    var L;
    return i[y].isActive === x
      ? Promise.resolve()
      : ((L = n.variantChildren) === null ||
          L === void 0 ||
          L.forEach(function(P) {
            var R;
            return (R = P.animationState) === null || R === void 0
              ? void 0
              : R.setActive(y, x);
          }),
        (i[y].isActive = x),
        h(S, y));
  }
  return {
    isAnimated: d,
    animateChanges: h,
    setActive: m,
    setAnimateFunction: v,
    getState: function() {
      return i;
    },
  };
}
function M1(n, o) {
  return typeof o == "string" ? o !== n : Fp(o) ? !zv(o, n) : !1;
}
function wr(n) {
  return (
    n === void 0 && (n = !1),
    {
      isActive: n,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {},
    }
  );
}
function j1() {
  var n;
  return (
    (n = {}),
    (n[Fe.Animate] = wr(!0)),
    (n[Fe.Hover] = wr()),
    (n[Fe.Tap] = wr()),
    (n[Fe.Drag] = wr()),
    (n[Fe.Focus] = wr()),
    (n[Fe.Exit] = wr()),
    n
  );
}
var N1 = {
    animation: Kn(function(n) {
      var o = n.visualElement,
        i = n.animate;
      o.animationState || (o.animationState = _1(o)),
        cs(i) &&
          j.useEffect(
            function() {
              return i.subscribe(o);
            },
            [i]
          );
    }),
    exit: Kn(function(n) {
      var o = n.custom,
        i = n.visualElement,
        l = Oe(zp(), 2),
        s = l[0],
        f = l[1],
        d = j.useContext(zo);
      j.useEffect(
        function() {
          var v,
            h,
            m =
              (v = i.animationState) === null || v === void 0
                ? void 0
                : v.setActive(Fe.Exit, !s, {
                    custom:
                      (h = d == null ? void 0 : d.custom) !== null &&
                      h !== void 0
                        ? h
                        : o,
                  });
          !s && (m == null || m.then(f));
        },
        [s]
      );
    }),
  },
  Wv = (function() {
    function n(o, i, l) {
      var s = this,
        f = l === void 0 ? {} : l,
        d = f.transformPagePoint;
      if (
        ((this.startEvent = null),
        (this.lastMoveEvent = null),
        (this.lastMoveEventInfo = null),
        (this.handlers = {}),
        (this.updatePoint = function() {
          if (s.lastMoveEvent && s.lastMoveEventInfo) {
            var S = Ru(s.lastMoveEventInfo, s.history),
              L = s.startEvent !== null,
              P = Nv(S.offset, { x: 0, y: 0 }) >= 3;
            if (!(!L && !P)) {
              var R = S.point,
                E = ha().timestamp;
              s.history.push(V(V({}, R), { timestamp: E }));
              var M = s.handlers,
                U = M.onStart,
                Y = M.onMove;
              L ||
                (U && U(s.lastMoveEvent, S), (s.startEvent = s.lastMoveEvent)),
                Y && Y(s.lastMoveEvent, S);
            }
          }
        }),
        (this.handlePointerMove = function(S, L) {
          if (
            ((s.lastMoveEvent = S),
            (s.lastMoveEventInfo = Lu(L, s.transformPagePoint)),
            lv(S) && S.buttons === 0)
          ) {
            s.handlePointerUp(S, L);
            return;
          }
          Ut.update(s.updatePoint, !0);
        }),
        (this.handlePointerUp = function(S, L) {
          s.end();
          var P = s.handlers,
            R = P.onEnd,
            E = P.onSessionEnd,
            M = Ru(Lu(L, s.transformPagePoint), s.history);
          s.startEvent && R && R(S, M), E && E(S, M);
        }),
        !(uv(o) && o.touches.length > 1))
      ) {
        (this.handlers = i), (this.transformPagePoint = d);
        var v = ds(o),
          h = Lu(v, this.transformPagePoint),
          m = h.point,
          y = ha().timestamp;
        this.history = [V(V({}, m), { timestamp: y })];
        var x = i.onSessionStart;
        x && x(o, Ru(h, this.history)),
          (this.removeListeners = Uo(
            Lr(window, "pointermove", this.handlePointerMove),
            Lr(window, "pointerup", this.handlePointerUp),
            Lr(window, "pointercancel", this.handlePointerUp)
          ));
      }
    }
    return (
      (n.prototype.updateHandlers = function(o) {
        this.handlers = o;
      }),
      (n.prototype.end = function() {
        this.removeListeners && this.removeListeners(),
          Co.update(this.updatePoint);
      }),
      n
    );
  })();
function Lu(n, o) {
  return o ? { point: o(n.point) } : n;
}
function Bd(n, o) {
  return { x: n.x - o.x, y: n.y - o.y };
}
function Ru(n, o) {
  var i = n.point;
  return {
    point: i,
    delta: Bd(i, $v(o)),
    offset: Bd(i, A1(o)),
    velocity: V1(o, 0.1),
  };
}
function A1(n) {
  return n[0];
}
function $v(n) {
  return n[n.length - 1];
}
function V1(n, o) {
  if (n.length < 2) return { x: 0, y: 0 };
  for (
    var i = n.length - 1, l = null, s = $v(n);
    i >= 0 && ((l = n[i]), !(s.timestamp - l.timestamp > ya(o)));

  )
    i--;
  if (!l) return { x: 0, y: 0 };
  var f = (s.timestamp - l.timestamp) / 1e3;
  if (f === 0) return { x: 0, y: 0 };
  var d = { x: (s.x - l.x) / f, y: (s.y - l.y) / f };
  return d.x === 1 / 0 && (d.x = 0), d.y === 1 / 0 && (d.y = 0), d;
}
function O1(n) {
  return n;
}
function Kv(n) {
  var o = n.top,
    i = n.left,
    l = n.right,
    s = n.bottom;
  return { x: { min: i, max: l }, y: { min: o, max: s } };
}
function D1(n) {
  var o = n.x,
    i = n.y;
  return { top: i.min, bottom: i.max, left: o.min, right: o.max };
}
function z1(n, o) {
  var i = n.top,
    l = n.left,
    s = n.bottom,
    f = n.right;
  o === void 0 && (o = O1);
  var d = o({ x: l, y: i }),
    v = o({ x: f, y: s });
  return { top: d.y, left: d.x, bottom: v.y, right: v.x };
}
function Tn() {
  return { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } };
}
function F1(n) {
  return { x: V({}, n.x), y: V({}, n.y) };
}
var Ud = { translate: 0, scale: 1, origin: 0, originPoint: 0 };
function Hd() {
  return { x: V({}, Ud), y: V({}, Ud) };
}
function vt(n) {
  return [n("x"), n("y")];
}
function Qv(n, o, i) {
  var l = o.min,
    s = o.max;
  return (
    l !== void 0 && n < l
      ? (n = i ? mt(l, n, i.min) : Math.max(n, l))
      : s !== void 0 && n > s && (n = i ? mt(s, n, i.max) : Math.min(n, s)),
    n
  );
}
function I1(n, o, i, l, s) {
  var f = n - o * i;
  return l ? Qv(f, l, s) : f;
}
function Wd(n, o, i) {
  return {
    min: o !== void 0 ? n.min + o : void 0,
    max: i !== void 0 ? n.max + i - (n.max - n.min) : void 0,
  };
}
function B1(n, o) {
  var i = o.top,
    l = o.left,
    s = o.bottom,
    f = o.right;
  return { x: Wd(n.x, l, f), y: Wd(n.y, i, s) };
}
function $d(n, o) {
  var i,
    l = o.min - n.min,
    s = o.max - n.max;
  return (
    o.max - o.min < n.max - n.min &&
      ((i = Oe([s, l], 2)), (l = i[0]), (s = i[1])),
    { min: n.min + l, max: n.min + s }
  );
}
function U1(n, o) {
  return { x: $d(n.x, o.x), y: $d(n.y, o.y) };
}
function H1(n, o, i) {
  var l = n.max - n.min,
    s = mt(o.min, o.max - l, i);
  return { min: s, max: s + l };
}
function W1(n, o) {
  var i = {};
  return (
    o.min !== void 0 && (i.min = o.min - n.min),
    o.max !== void 0 && (i.max = o.max - n.min),
    i
  );
}
var Yv = 0.35;
function $1(n) {
  return (
    n === !1 ? (n = 0) : n === !0 && (n = Yv),
    { x: Kd(n, "left", "right"), y: Kd(n, "top", "bottom") }
  );
}
function Kd(n, o, i) {
  return { min: Qd(n, o), max: Qd(n, i) };
}
function Qd(n, o) {
  var i;
  return typeof n == "number" ? n : (i = n[o]) !== null && i !== void 0 ? i : 0;
}
function Gv(n, o) {
  var i = n.getBoundingClientRect();
  return Kv(z1(i, o));
}
var K1 = function(n) {
  return va(0, 1, n);
};
function Yd(n, o, i) {
  return o === void 0 && (o = 0), i === void 0 && (i = 0.01), Nv(n, o) < i;
}
function jo(n) {
  return n.max - n.min;
}
function Q1(n, o) {
  var i = 0.5,
    l = jo(n),
    s = jo(o);
  return (
    s > l
      ? (i = _o(o.min, o.max - l, n.min))
      : l > s && (i = _o(n.min, n.max - s, o.min)),
    K1(i)
  );
}
function Gd(n, o, i, l) {
  l === void 0 && (l = 0.5),
    (n.origin = l),
    (n.originPoint = mt(o.min, o.max, n.origin)),
    (n.scale = jo(i) / jo(o)),
    Yd(n.scale, 1, 1e-4) && (n.scale = 1),
    (n.translate = mt(i.min, i.max, n.origin) - n.originPoint),
    Yd(n.translate) && (n.translate = 0);
}
function Xv(n, o, i, l) {
  Gd(n.x, o.x, i.x, Xd(l.originX)), Gd(n.y, o.y, i.y, Xd(l.originY));
}
function Xd(n) {
  return typeof n == "number" ? n : 0.5;
}
function bd(n, o, i) {
  (n.min = i.min + o.min), (n.max = n.min + jo(o));
}
function Y1(n, o) {
  bd(n.target.x, n.relativeTarget.x, o.target.x),
    bd(n.target.y, n.relativeTarget.y, o.target.y);
}
var Cs = function(n, o) {
  return n.depth - o.depth;
};
function bv(n) {
  var o = n.projection.isEnabled;
  return o || n.shouldResetTransform();
}
function wa(n, o) {
  o === void 0 && (o = []);
  var i = n.parent;
  return i && wa(i, o), bv(n) && o.push(n), o;
}
function G1(n) {
  var o = [],
    i = function(l) {
      bv(l) && o.push(l), l.children.forEach(i);
    };
  return n.children.forEach(i), o.sort(Cs);
}
function fa(n) {
  if (!n.shouldResetTransform()) {
    var o = n.getLayoutState();
    n.notifyBeforeLayoutMeasure(o.layout),
      (o.isHydrated = !0),
      (o.layout = n.measureViewportBox()),
      (o.layoutCorrected = F1(o.layout)),
      n.notifyLayoutMeasure(o.layout, n.prevViewportBox || o.layout),
      Ut.update(function() {
        return n.rebaseProjectionTarget();
      });
  }
}
function X1(n) {
  n.shouldResetTransform() ||
    ((n.prevViewportBox = n.measureViewportBox(!1)),
    n.rebaseProjectionTarget(!1, n.prevViewportBox));
}
function b1(n, o, i, l) {
  (n.min = mt(o.min, i.min, l)), (n.max = mt(o.max, i.max, l));
}
function Zd(n, o) {
  return { min: o.min - n.min, max: o.max - n.min };
}
function _r(n, o) {
  return { x: Zd(n.x, o.x), y: Zd(n.y, o.y) };
}
function Z1(n, o) {
  var i = n.getLayoutId(),
    l = o.getLayoutId();
  return i !== l || (l === void 0 && n !== o);
}
function Zv(n) {
  var o = n.getProps(),
    i = o.drag,
    l = o._dragX;
  return i && !l;
}
function Jd(n, o) {
  (n.min = o.min), (n.max = o.max);
}
function J1(n, o) {
  Jd(n.x, o.x), Jd(n.y, o.y);
}
function Sa(n, o, i) {
  var l = n - i,
    s = o * l;
  return i + s;
}
function qd(n, o, i, l, s) {
  return s !== void 0 && (n = Sa(n, s, l)), Sa(n, i, l) + o;
}
function Qu(n, o, i, l, s) {
  o === void 0 && (o = 0),
    i === void 0 && (i = 1),
    (n.min = qd(n.min, o, i, l, s)),
    (n.max = qd(n.max, o, i, l, s));
}
function q1(n, o) {
  var i = o.x,
    l = o.y;
  Qu(n.x, i.translate, i.scale, i.originPoint),
    Qu(n.y, l.translate, l.scale, l.originPoint);
}
function ep(n, o, i, l) {
  var s = Oe(l, 3),
    f = s[0],
    d = s[1],
    v = s[2];
  (n.min = o.min), (n.max = o.max);
  var h = i[v] !== void 0 ? i[v] : 0.5,
    m = mt(o.min, o.max, h);
  Qu(n, i[f], i[d], m, i.scale);
}
var Jv = ["x", "scaleX", "originX"],
  qv = ["y", "scaleY", "originY"];
function Yu(n, o, i) {
  ep(n.x, o.x, i, Jv), ep(n.y, o.y, i, qv);
}
function tp(n, o, i, l, s) {
  return (
    (n -= o), (n = Sa(n, 1 / i, l)), s !== void 0 && (n = Sa(n, 1 / s, l)), n
  );
}
function e2(n, o, i, l, s) {
  o === void 0 && (o = 0), i === void 0 && (i = 1), l === void 0 && (l = 0.5);
  var f = mt(n.min, n.max, l) - o;
  (n.min = tp(n.min, o, i, f, s)), (n.max = tp(n.max, o, i, f, s));
}
function np(n, o, i) {
  var l = Oe(i, 3),
    s = l[0],
    f = l[1],
    d = l[2];
  e2(n, o[s], o[f], o[d], o.scale);
}
function em(n, o) {
  np(n.x, o, Jv), np(n.y, o, qv);
}
function t2(n, o, i) {
  var l = i.length;
  if (l) {
    o.x = o.y = 1;
    for (var s, f, d = 0; d < l; d++)
      (s = i[d]),
        (f = s.getLayoutState().delta),
        (o.x *= f.x.scale),
        (o.y *= f.y.scale),
        q1(n, f),
        Zv(s) && Yu(n, n, s.getLatestValues());
  }
}
function n2(n, o) {
  o === void 0 && (o = !0);
  var i = n.getProjectionParent();
  if (!i) return !1;
  var l;
  return (
    o
      ? ((l = _r(i.projection.target, n.projection.target)),
        em(l, i.getLatestValues()))
      : (l = _r(i.getLayoutState().layout, n.getLayoutState().layout)),
    vt(function(s) {
      return n.setProjectionTargetAxis(s, l[s].min, l[s].max, !0);
    }),
    !0
  );
}
var ko = new Set();
function rp(n, o, i) {
  n[i] || (n[i] = []), n[i].push(o);
}
function Gu(n) {
  return (
    ko.add(n),
    function() {
      return ko.delete(n);
    }
  );
}
function Xu() {
  if (ko.size) {
    var n = 0,
      o = [[]],
      i = [],
      l = function(v) {
        return rp(o, v, n);
      },
      s = function(v) {
        rp(i, v, n), n++;
      };
    ko.forEach(function(v) {
      v(l, s), (n = 0);
    }),
      ko.clear();
    for (var f = i.length, d = 0; d <= f; d++)
      o[d] && o[d].forEach(op), i[d] && i[d].forEach(op);
  }
}
var op = function(n) {
    return n();
  },
  r2 = new WeakMap(),
  ip,
  o2 = (function() {
    function n(o) {
      var i = o.visualElement;
      (this.isDragging = !1),
        (this.currentDirection = null),
        (this.constraints = !1),
        (this.elastic = Tn()),
        (this.props = {}),
        (this.hasMutatedConstraints = !1),
        (this.cursorProgress = { x: 0.5, y: 0.5 }),
        (this.originPoint = {}),
        (this.openGlobalLock = null),
        (this.panSession = null),
        (this.visualElement = i),
        this.visualElement.enableLayoutProjection(),
        r2.set(i, this);
    }
    return (
      (n.prototype.start = function(o, i) {
        var l = this,
          s = i === void 0 ? {} : i,
          f = s.snapToCursor,
          d = f === void 0 ? !1 : f,
          v = s.cursorProgress,
          h = function(L) {
            var P;
            l.stopMotion();
            var R = $g(L).point;
            (P = l.cancelLayout) === null || P === void 0 || P.call(l),
              (l.cancelLayout = Gu(function(E, M) {
                var U = wa(l.visualElement),
                  Y = G1(l.visualElement),
                  K = lt(lt([], Oe(U)), Oe(Y)),
                  $ = !1;
                l.isLayoutDrag() && l.visualElement.lockProjectionTarget(),
                  M(function() {
                    K.forEach(function(B) {
                      return B.resetTransform();
                    });
                  }),
                  E(function() {
                    fa(l.visualElement), Y.forEach(fa);
                  }),
                  M(function() {
                    K.forEach(function(B) {
                      return B.restoreTransform();
                    }),
                      d && ($ = l.snapToCursor(R));
                  }),
                  E(function() {
                    var B = !!(
                      l.getAxisMotionValue("x") && !l.isExternalDrag()
                    );
                    B ||
                      l.visualElement.rebaseProjectionTarget(
                        !0,
                        l.visualElement.measureViewportBox(!1)
                      ),
                      l.visualElement.scheduleUpdateLayoutProjection();
                    var b = l.visualElement.projection;
                    vt(function(Z) {
                      if (!$) {
                        var q = b.target[Z],
                          ie = q.min,
                          pe = q.max;
                        l.cursorProgress[Z] = v ? v[Z] : _o(ie, pe, R[Z]);
                      }
                      var Se = l.getAxisMotionValue(Z);
                      Se && (l.originPoint[Z] = Se.get());
                    });
                  }),
                  M(function() {
                    Pr.update(), Pr.preRender(), Pr.render(), Pr.postRender();
                  }),
                  E(function() {
                    return l.resolveDragConstraints();
                  });
              }));
          },
          m = function(L, P) {
            var R,
              E,
              M,
              U = l.props,
              Y = U.drag,
              K = U.dragPropagation;
            (Y &&
              !K &&
              (l.openGlobalLock && l.openGlobalLock(),
              (l.openGlobalLock = dv(Y)),
              !l.openGlobalLock)) ||
              (Xu(),
              (l.isDragging = !0),
              (l.currentDirection = null),
              (E = (R = l.props).onDragStart) === null ||
                E === void 0 ||
                E.call(R, L, P),
              (M = l.visualElement.animationState) === null ||
                M === void 0 ||
                M.setActive(Fe.Drag, !0));
          },
          y = function(L, P) {
            var R,
              E,
              M,
              U,
              Y = l.props,
              K = Y.dragPropagation,
              $ = Y.dragDirectionLock;
            if (!(!K && !l.openGlobalLock)) {
              var B = P.offset;
              if ($ && l.currentDirection === null) {
                (l.currentDirection = i2(B)),
                  l.currentDirection !== null &&
                    ((E = (R = l.props).onDirectionLock) === null ||
                      E === void 0 ||
                      E.call(R, l.currentDirection));
                return;
              }
              l.updateAxis("x", P.point, B),
                l.updateAxis("y", P.point, B),
                (U = (M = l.props).onDrag) === null ||
                  U === void 0 ||
                  U.call(M, L, P),
                (ip = L);
            }
          },
          x = function(L, P) {
            return l.stop(L, P);
          },
          S = this.props.transformPagePoint;
        this.panSession = new Wv(
          o,
          { onSessionStart: h, onStart: m, onMove: y, onSessionEnd: x },
          { transformPagePoint: S }
        );
      }),
      (n.prototype.resolveDragConstraints = function() {
        var o = this,
          i = this.props,
          l = i.dragConstraints,
          s = i.dragElastic,
          f = this.visualElement.getLayoutState().layoutCorrected;
        l
          ? (this.constraints = Ou(l)
              ? this.resolveRefConstraints(f, l)
              : B1(f, l))
          : (this.constraints = !1),
          (this.elastic = $1(s)),
          this.constraints &&
            !this.hasMutatedConstraints &&
            vt(function(d) {
              o.getAxisMotionValue(d) &&
                (o.constraints[d] = W1(f[d], o.constraints[d]));
            });
      }),
      (n.prototype.resolveRefConstraints = function(o, i) {
        var l = this.props,
          s = l.onMeasureDragConstraints,
          f = l.transformPagePoint,
          d = i.current;
        this.constraintsBox = Gv(d, f);
        var v = U1(o, this.constraintsBox);
        if (s) {
          var h = s(D1(v));
          (this.hasMutatedConstraints = !!h), h && (v = Kv(h));
        }
        return v;
      }),
      (n.prototype.cancelDrag = function() {
        var o, i;
        this.visualElement.unlockProjectionTarget(),
          (o = this.cancelLayout) === null || o === void 0 || o.call(this),
          (this.isDragging = !1),
          this.panSession && this.panSession.end(),
          (this.panSession = null),
          !this.props.dragPropagation &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
          (i = this.visualElement.animationState) === null ||
            i === void 0 ||
            i.setActive(Fe.Drag, !1);
      }),
      (n.prototype.stop = function(o, i) {
        var l, s, f;
        (l = this.panSession) === null || l === void 0 || l.end(),
          (this.panSession = null);
        var d = this.isDragging;
        if ((this.cancelDrag(), !!d)) {
          var v = i.velocity;
          this.animateDragEnd(v),
            (f = (s = this.props).onDragEnd) === null ||
              f === void 0 ||
              f.call(s, o, i);
        }
      }),
      (n.prototype.snapToCursor = function(o) {
        var i = this;
        return vt(function(l) {
          var s = i.props.drag;
          if (ia(l, s, i.currentDirection)) {
            var f = i.getAxisMotionValue(l);
            if (f) {
              var d = i.visualElement.getLayoutState().layout,
                v = d[l].max - d[l].min,
                h = d[l].min + v / 2,
                m = o[l] - h;
              (i.originPoint[l] = o[l]), f.set(m);
            } else return (i.cursorProgress[l] = 0.5), !0;
          }
        }).includes(!0);
      }),
      (n.prototype.updateAxis = function(o, i, l) {
        var s = this.props.drag;
        if (ia(o, s, this.currentDirection))
          return this.getAxisMotionValue(o)
            ? this.updateAxisMotionValue(o, l)
            : this.updateVisualElementAxis(o, i);
      }),
      (n.prototype.updateAxisMotionValue = function(o, i) {
        var l = this.getAxisMotionValue(o);
        if (!(!i || !l)) {
          var s = this.originPoint[o] + i[o],
            f = this.constraints
              ? Qv(s, this.constraints[o], this.elastic[o])
              : s;
          l.set(f);
        }
      }),
      (n.prototype.updateVisualElementAxis = function(o, i) {
        var l,
          s = this.visualElement.getLayoutState().layout[o],
          f = s.max - s.min,
          d = this.cursorProgress[o],
          v = I1(
            i[o],
            f,
            d,
            (l = this.constraints) === null || l === void 0 ? void 0 : l[o],
            this.elastic[o]
          );
        this.visualElement.setProjectionTargetAxis(o, v, v + f);
      }),
      (n.prototype.setProps = function(o) {
        var i = o.drag,
          l = i === void 0 ? !1 : i,
          s = o.dragDirectionLock,
          f = s === void 0 ? !1 : s,
          d = o.dragPropagation,
          v = d === void 0 ? !1 : d,
          h = o.dragConstraints,
          m = h === void 0 ? !1 : h,
          y = o.dragElastic,
          x = y === void 0 ? Yv : y,
          S = o.dragMomentum,
          L = S === void 0 ? !0 : S,
          P = wt(o, [
            "drag",
            "dragDirectionLock",
            "dragPropagation",
            "dragConstraints",
            "dragElastic",
            "dragMomentum",
          ]);
        this.props = V(
          {
            drag: l,
            dragDirectionLock: f,
            dragPropagation: v,
            dragConstraints: m,
            dragElastic: x,
            dragMomentum: L,
          },
          P
        );
      }),
      (n.prototype.getAxisMotionValue = function(o) {
        var i = this.props,
          l = i.layout,
          s = i.layoutId,
          f = "_drag" + o.toUpperCase();
        if (this.props[f]) return this.props[f];
        if (!l && s === void 0) return this.visualElement.getValue(o, 0);
      }),
      (n.prototype.isLayoutDrag = function() {
        return !this.getAxisMotionValue("x");
      }),
      (n.prototype.isExternalDrag = function() {
        var o = this.props,
          i = o._dragX,
          l = o._dragY;
        return i || l;
      }),
      (n.prototype.animateDragEnd = function(o) {
        var i = this,
          l = this.props,
          s = l.drag,
          f = l.dragMomentum,
          d = l.dragElastic,
          v = l.dragTransition,
          h = n2(
            this.visualElement,
            this.isLayoutDrag() && !this.isExternalDrag()
          ),
          m = this.constraints || {};
        if (h && Object.keys(m).length && this.isLayoutDrag()) {
          var y = this.visualElement.getProjectionParent();
          if (y) {
            var x = _r(y.projection.targetFinal, m);
            vt(function(L) {
              var P = x[L],
                R = P.min,
                E = P.max;
              m[L] = { min: isNaN(R) ? void 0 : R, max: isNaN(E) ? void 0 : E };
            });
          }
        }
        var S = vt(function(L) {
          var P;
          if (ia(L, s, i.currentDirection)) {
            var R =
                (P = m == null ? void 0 : m[L]) !== null && P !== void 0
                  ? P
                  : {},
              E = d ? 200 : 1e6,
              M = d ? 40 : 1e7,
              U = V(
                V(
                  {
                    type: "inertia",
                    velocity: f ? o[L] : 0,
                    bounceStiffness: E,
                    bounceDamping: M,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                  },
                  v
                ),
                R
              );
            return i.getAxisMotionValue(L)
              ? i.startAxisValueAnimation(L, U)
              : i.visualElement.startLayoutAnimation(L, U, h);
          }
        });
        return Promise.all(S).then(function() {
          var L, P;
          (P = (L = i.props).onDragTransitionEnd) === null ||
            P === void 0 ||
            P.call(L);
        });
      }),
      (n.prototype.stopMotion = function() {
        var o = this;
        vt(function(i) {
          var l = o.getAxisMotionValue(i);
          l ? l.stop() : o.visualElement.stopLayoutAnimation();
        });
      }),
      (n.prototype.startAxisValueAnimation = function(o, i) {
        var l = this.getAxisMotionValue(o);
        if (l) {
          var s = l.get();
          return l.set(s), l.set(s), xa(o, l, 0, i);
        }
      }),
      (n.prototype.scalePoint = function() {
        var o = this,
          i = this.props,
          l = i.drag,
          s = i.dragConstraints;
        if (!(!Ou(s) || !this.constraintsBox)) {
          this.stopMotion();
          var f = { x: 0, y: 0 };
          vt(function(d) {
            f[d] = Q1(
              o.visualElement.projection.target[d],
              o.constraintsBox[d]
            );
          }),
            this.updateConstraints(function() {
              vt(function(d) {
                if (ia(d, l, null)) {
                  var v = H1(
                      o.visualElement.projection.target[d],
                      o.constraintsBox[d],
                      f[d]
                    ),
                    h = v.min,
                    m = v.max;
                  o.visualElement.setProjectionTargetAxis(d, h, m);
                }
              });
            }),
            setTimeout(Xu, 1);
        }
      }),
      (n.prototype.updateConstraints = function(o) {
        var i = this;
        this.cancelLayout = Gu(function(l, s) {
          var f = wa(i.visualElement);
          s(function() {
            return f.forEach(function(d) {
              return d.resetTransform();
            });
          }),
            l(function() {
              return fa(i.visualElement);
            }),
            s(function() {
              return f.forEach(function(d) {
                return d.restoreTransform();
              });
            }),
            l(function() {
              i.resolveDragConstraints();
            }),
            o && s(o);
        });
      }),
      (n.prototype.mount = function(o) {
        var i = this,
          l = o.getInstance(),
          s = Lr(l, "pointerdown", function(h) {
            var m = i.props,
              y = m.drag,
              x = m.dragListener,
              S = x === void 0 ? !0 : x;
            y && S && i.start(h);
          }),
          f = fs(window, "resize", function() {
            i.scalePoint();
          }),
          d = o.onLayoutUpdate(function() {
            i.isDragging && i.resolveDragConstraints();
          }),
          v = o.prevDragCursor;
        return (
          v && this.start(ip, { cursorProgress: v }),
          function() {
            s == null || s(),
              f == null || f(),
              d == null || d(),
              i.cancelDrag();
          }
        );
      }),
      n
    );
  })();
function ia(n, o, i) {
  return (o === !0 || o === n) && (i === null || i === n);
}
function i2(n, o) {
  o === void 0 && (o = 10);
  var i = null;
  return Math.abs(n.y) > o ? (i = "y") : Math.abs(n.x) > o && (i = "x"), i;
}
function a2(n) {
  var o = n.dragControls,
    i = n.visualElement,
    l = j.useContext(Ea).transformPagePoint,
    s = Po(function() {
      return new o2({ visualElement: i });
    });
  s.setProps(V(V({}, n), { transformPagePoint: l })),
    j.useEffect(
      function() {
        return o && o.subscribe(s);
      },
      [s]
    ),
    j.useEffect(function() {
      return s.mount(i);
    }, []);
}
function l2(n) {
  var o = n.onPan,
    i = n.onPanStart,
    l = n.onPanEnd,
    s = n.onPanSessionStart,
    f = n.visualElement,
    d = o || i || l || s,
    v = j.useRef(null),
    h = j.useContext(Ea).transformPagePoint,
    m = {
      onSessionStart: s,
      onStart: i,
      onMove: o,
      onEnd: function(x, S) {
        (v.current = null), l && l(x, S);
      },
    };
  j.useEffect(function() {
    v.current !== null && v.current.updateHandlers(m);
  });
  function y(x) {
    v.current = new Wv(x, m, { transformPagePoint: h });
  }
  pa(f, "pointerdown", d && y),
    ps(function() {
      return v.current && v.current.end();
    });
}
var u2 = { pan: Kn(l2), drag: Kn(a2) },
  No;
(function(n) {
  (n[(n.Entering = 0)] = "Entering"),
    (n[(n.Present = 1)] = "Present"),
    (n[(n.Exiting = 2)] = "Exiting");
})(No || (No = {}));
var bu;
(function(n) {
  (n[(n.Hide = 0)] = "Hide"), (n[(n.Show = 1)] = "Show");
})(bu || (bu = {}));
function Zu(n) {
  return typeof n == "string" && n.startsWith("var(--");
}
var tm = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function s2(n) {
  var o = tm.exec(n);
  if (!o) return [,];
  var i = Oe(o, 3),
    l = i[1],
    s = i[2];
  return [l, s];
}
function Ju(n, o, i) {
  var l = Oe(s2(n), 2),
    s = l[0],
    f = l[1];
  if (s) {
    var d = window.getComputedStyle(o).getPropertyValue(s);
    return d ? d.trim() : Zu(f) ? Ju(f, o) : f;
  }
}
function c2(n, o, i) {
  var l,
    s = wt(o, []),
    f = n.getInstance();
  if (!(f instanceof HTMLElement)) return { target: s, transitionEnd: i };
  i && (i = V({}, i)),
    n.forEachValue(function(m) {
      var y = m.get();
      if (Zu(y)) {
        var x = Ju(y, f);
        x && m.set(x);
      }
    });
  for (var d in s) {
    var v = s[d];
    if (Zu(v)) {
      var h = Ju(v, f);
      h &&
        ((s[d] = h),
        i && (((l = i[d]) !== null && l !== void 0) || (i[d] = v)));
    }
  }
  return { target: s, transitionEnd: i };
}
function ap(n, o) {
  return (n / (o.max - o.min)) * 100;
}
function f2(n, o, i) {
  var l = i.target;
  if (typeof n == "string")
    if (ce.test(n)) n = parseFloat(n);
    else return n;
  var s = ap(n, l.x),
    f = ap(n, l.y);
  return s + "% " + f + "%";
}
var lp = "_$css";
function d2(n, o) {
  var i = o.delta,
    l = o.treeScale,
    s = n,
    f = n.includes("var("),
    d = [];
  f &&
    (n = n.replace(tm, function(R) {
      return d.push(R), lp;
    }));
  var v = Jt.parse(n);
  if (v.length > 5) return s;
  var h = Jt.createTransformer(n),
    m = typeof v[0] != "number" ? 1 : 0,
    y = i.x.scale * l.x,
    x = i.y.scale * l.y;
  (v[0 + m] /= y), (v[1 + m] /= x);
  var S = mt(y, x, 0.5);
  typeof v[2 + m] == "number" && (v[2 + m] /= S),
    typeof v[3 + m] == "number" && (v[3 + m] /= S);
  var L = h(v);
  if (f) {
    var P = 0;
    L = L.replace(lp, function() {
      var R = d[P];
      return P++, R;
    });
  }
  return L;
}
var yo = { process: f2 },
  p2 = {
    borderRadius: V(V({}, yo), {
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    }),
    borderTopLeftRadius: yo,
    borderTopRightRadius: yo,
    borderBottomLeftRadius: yo,
    borderBottomRightRadius: yo,
    boxShadow: { process: d2 },
  },
  up = 1e3,
  v2 = (function(n) {
    Vp(o, n);
    function o() {
      var i = (n !== null && n.apply(this, arguments)) || this;
      return (
        (i.frameTarget = Tn()),
        (i.currentAnimationTarget = Tn()),
        (i.isAnimating = { x: !1, y: !1 }),
        (i.stopAxisAnimation = { x: void 0, y: void 0 }),
        (i.isAnimatingTree = !1),
        (i.animate = function(l, s, f) {
          f === void 0 && (f = {});
          var d = f.originBox,
            v = f.targetBox,
            h = f.visibilityAction,
            m = f.shouldStackAnimate,
            y = f.onComplete,
            x = f.prevParent,
            S = wt(f, [
              "originBox",
              "targetBox",
              "visibilityAction",
              "shouldStackAnimate",
              "onComplete",
              "prevParent",
            ]),
            L = i.props,
            P = L.visualElement,
            R = L.layout;
          if (m === !1) return (i.isAnimatingTree = !1), i.safeToRemove();
          if (!(i.isAnimatingTree && m !== !0)) {
            m && (i.isAnimatingTree = !0), (s = d || s), (l = v || l);
            var E = !1,
              M = P.getProjectionParent();
            if (M) {
              var U = M.prevViewportBox,
                Y = M.getLayoutState().layout;
              x &&
                (v && (Y = x.getLayoutState().layout),
                d && !Z1(x, M) && x.prevViewportBox && (U = x.prevViewportBox)),
                U && y2(x, d, v) && ((E = !0), (s = _r(U, s)), (l = _r(Y, l)));
            }
            var K = h2(s, l),
              $ = vt(function(B) {
                var b, Z;
                if (R === "position") {
                  var q = l[B].max - l[B].min;
                  s[B].max = s[B].min + q;
                }
                if (!P.projection.isTargetLocked)
                  if (h !== void 0) P.setVisibility(h === bu.Show);
                  else
                    return K
                      ? i.animateAxis(
                          B,
                          l[B],
                          s[B],
                          V(V({}, S), { isRelative: E })
                        )
                      : ((Z = (b = i.stopAxisAnimation)[B]) === null ||
                          Z === void 0 ||
                          Z.call(b),
                        P.setProjectionTargetAxis(B, l[B].min, l[B].max, E));
              });
            return (
              P.syncRender(),
              Promise.all($).then(function() {
                (i.isAnimatingTree = !1),
                  y && y(),
                  P.notifyLayoutAnimationComplete();
              })
            );
          }
        }),
        i
      );
    }
    return (
      (o.prototype.componentDidMount = function() {
        var i = this,
          l = this.props.visualElement;
        (l.animateMotionValue = xa),
          l.enableLayoutProjection(),
          (this.unsubLayoutReady = l.onLayoutUpdate(this.animate)),
          (l.layoutSafeToRemove = function() {
            return i.safeToRemove();
          }),
          Z0(p2);
      }),
      (o.prototype.componentWillUnmount = function() {
        var i = this;
        this.unsubLayoutReady(),
          vt(function(l) {
            var s, f;
            return (f = (s = i.stopAxisAnimation)[l]) === null || f === void 0
              ? void 0
              : f.call(s);
          });
      }),
      (o.prototype.animateAxis = function(i, l, s, f) {
        var d = this,
          v,
          h,
          m = f === void 0 ? {} : f,
          y = m.transition,
          x = m.isRelative;
        if (!(this.isAnimating[i] && Ao(l, this.currentAnimationTarget[i]))) {
          (h = (v = this.stopAxisAnimation)[i]) === null ||
            h === void 0 ||
            h.call(v),
            (this.isAnimating[i] = !0);
          var S = this.props.visualElement,
            L = this.frameTarget[i],
            P = S.getProjectionAnimationProgress()[i];
          P.clearListeners(), P.set(0), P.set(0);
          var R = function() {
            var Y = P.get() / up;
            b1(L, s, l, Y), S.setProjectionTargetAxis(i, L.min, L.max, x);
          };
          R();
          var E = P.onChange(R);
          (this.stopAxisAnimation[i] = function() {
            (d.isAnimating[i] = !1), P.stop(), E();
          }),
            (this.currentAnimationTarget[i] = l);
          var M = y || S.getDefaultTransition() || g2,
            U = xa(
              i === "x" ? "layoutX" : "layoutY",
              P,
              up,
              M && ws(M, "layout")
            ).then(this.stopAxisAnimation[i]);
          return U;
        }
      }),
      (o.prototype.safeToRemove = function() {
        var i, l;
        (l = (i = this.props).safeToRemove) === null ||
          l === void 0 ||
          l.call(i);
      }),
      (o.prototype.render = function() {
        return null;
      }),
      o
    );
  })(j.Component);
function m2(n) {
  var o = Oe(zp(), 2),
    i = o[1];
  return j.createElement(v2, V({}, n, { safeToRemove: i }));
}
function h2(n, o) {
  return !cp(n) && !cp(o) && (!Ao(n.x, o.x) || !Ao(n.y, o.y));
}
var sp = { min: 0, max: 0 };
function cp(n) {
  return Ao(n.x, sp) && Ao(n.y, sp);
}
function Ao(n, o) {
  return n.min === o.min && n.max === o.max;
}
var g2 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
function y2(n, o, i) {
  return n || (!n && !(o || i));
}
var x2 = {
  layoutReady: function(n) {
    return n.notifyLayoutReady();
  },
};
function nm() {
  var n = new Set();
  return {
    add: function(o) {
      return n.add(o);
    },
    flush: function(o) {
      var i = o === void 0 ? x2 : o,
        l = i.layoutReady,
        s = i.parent;
      Gu(function(f, d) {
        var v = Array.from(n).sort(Cs),
          h = s ? wa(s) : [];
        d(function() {
          var m = lt(lt([], Oe(h)), Oe(v));
          m.forEach(function(y) {
            return y.resetTransform();
          });
        }),
          f(function() {
            v.forEach(fa);
          }),
          d(function() {
            h.forEach(function(m) {
              return m.restoreTransform();
            }),
              v.forEach(l);
          }),
          f(function() {
            v.forEach(function(m) {
              m.isPresent && (m.presence = No.Present);
            });
          }),
          d(function() {
            Pr.preRender(), Pr.render();
          }),
          f(function() {
            Ut.postRender(function() {
              return v.forEach(w2);
            }),
              n.clear();
          });
      }),
        Xu();
    },
  };
}
function w2(n) {
  n.prevViewportBox = n.projection.target;
}
var rm = j.createContext(nm()),
  S2 = j.createContext(nm());
function $n(n) {
  return !!n.forceUpdate;
}
var C2 = (function(n) {
  Vp(o, n);
  function o() {
    return (n !== null && n.apply(this, arguments)) || this;
  }
  return (
    (o.prototype.componentDidMount = function() {
      var i = this.props,
        l = i.syncLayout,
        s = i.framerSyncLayout,
        f = i.visualElement;
      $n(l) && l.register(f),
        $n(s) && s.register(f),
        f.onUnmount(function() {
          $n(l) && l.remove(f), $n(s) && s.remove(f);
        });
    }),
    (o.prototype.getSnapshotBeforeUpdate = function() {
      var i = this.props,
        l = i.syncLayout,
        s = i.visualElement;
      return $n(l) ? l.syncUpdate() : (X1(s), l.add(s)), null;
    }),
    (o.prototype.componentDidUpdate = function() {
      var i = this.props.syncLayout;
      $n(i) || i.flush();
    }),
    (o.prototype.render = function() {
      return null;
    }),
    o
  );
})(Ht.Component);
function k2(n) {
  var o = j.useContext(rm),
    i = j.useContext(S2);
  return Ht.createElement(C2, V({}, n, { syncLayout: o, framerSyncLayout: i }));
}
var E2 = { measureLayout: k2, layoutAnimation: m2 },
  P2 = function() {
    return {
      isEnabled: !1,
      isHydrated: !1,
      isTargetLocked: !1,
      target: Tn(),
      targetFinal: Tn(),
    };
  };
function om() {
  return {
    isHydrated: !1,
    layout: Tn(),
    layoutCorrected: Tn(),
    treeScale: { x: 1, y: 1 },
    delta: Hd(),
    deltaFinal: Hd(),
    deltaTransform: "",
  };
}
var fp = om();
function ja(n, o, i) {
  var l = n.x,
    s = n.y,
    f = l.translate / o.x,
    d = s.translate / o.y,
    v = "translate3d(" + f + "px, " + d + "px, 0) ";
  if (i) {
    var h = i.rotate,
      m = i.rotateX,
      y = i.rotateY;
    h && (v += "rotate(" + h + ") "),
      m && (v += "rotateX(" + m + ") "),
      y && (v += "rotateY(" + y + ") ");
  }
  return (
    (v += "scale(" + l.scale + ", " + s.scale + ")"), !i && v === T2 ? "" : v
  );
}
function im(n) {
  var o = n.deltaFinal;
  return o.x.origin * 100 + "% " + o.y.origin * 100 + "% 0";
}
var T2 = ja(fp.delta, fp.treeScale, {}),
  aa = [
    "LayoutMeasure",
    "BeforeLayoutMeasure",
    "LayoutUpdate",
    "ViewportBoxUpdate",
    "Update",
    "Render",
    "AnimationComplete",
    "LayoutAnimationComplete",
    "AnimationStart",
    "SetAxisTarget",
    "Unmount",
  ];
function L2() {
  var n = aa.map(function() {
      return new ca();
    }),
    o = {},
    i = {
      clearAllListeners: function() {
        return n.forEach(function(l) {
          return l.clear();
        });
      },
      updatePropListeners: function(l) {
        return aa.forEach(function(s) {
          var f;
          (f = o[s]) === null || f === void 0 || f.call(o);
          var d = "on" + s,
            v = l[d];
          v && (o[s] = i[d](v));
        });
      },
    };
  return (
    n.forEach(function(l, s) {
      (i["on" + aa[s]] = function(f) {
        return l.add(f);
      }),
        (i["notify" + aa[s]] = function() {
          for (var f = [], d = 0; d < arguments.length; d++)
            f[d] = arguments[d];
          return l.notify.apply(l, lt([], Oe(f)));
        });
    }),
    i
  );
}
function R2(n, o, i) {
  var l;
  for (var s in o) {
    var f = o[s],
      d = i[s];
    if (Pn(f)) n.addValue(s, f);
    else if (Pn(d)) n.addValue(s, Qn(f));
    else if (d !== f)
      if (n.hasValue(s)) {
        var v = n.getValue(s);
        !v.hasAnimated && v.set(f);
      } else
        n.addValue(
          s,
          Qn((l = n.getStaticValue(s)) !== null && l !== void 0 ? l : f)
        );
  }
  for (var s in i) o[s] === void 0 && n.removeValue(s);
  return o;
}
function _2(n, o, i, l) {
  var s = n.delta,
    f = n.layout,
    d = n.layoutCorrected,
    v = n.treeScale,
    h = o.target;
  J1(d, f), t2(d, v, i), Xv(s, d, h, l);
}
var M2 = (function() {
  function n() {
    (this.children = []), (this.isDirty = !1);
  }
  return (
    (n.prototype.add = function(o) {
      Fv(this.children, o), (this.isDirty = !0);
    }),
    (n.prototype.remove = function(o) {
      Iv(this.children, o), (this.isDirty = !0);
    }),
    (n.prototype.forEach = function(o) {
      this.isDirty && this.children.sort(Cs),
        (this.isDirty = !1),
        this.children.forEach(o);
    }),
    n
  );
})();
function j2(n) {
  var o = n.getProjectionParent();
  if (!o) {
    n.rebaseProjectionTarget();
    return;
  }
  var i = _r(o.getLayoutState().layout, n.getLayoutState().layout);
  vt(function(l) {
    n.setProjectionTargetAxis(l, i[l].min, i[l].max, !0);
  });
}
var am = function(n) {
  var o = n.treeType,
    i = o === void 0 ? "" : o,
    l = n.build,
    s = n.getBaseTarget,
    f = n.makeTargetAnimatable,
    d = n.measureViewportBox,
    v = n.render,
    h = n.readValueFromInstance,
    m = n.resetTransform,
    y = n.restoreTransform,
    x = n.removeValueFromRenderState,
    S = n.sortNodePosition,
    L = n.scrapeMotionValuesFromProps;
  return function(P, R) {
    var E = P.parent,
      M = P.props,
      U = P.presenceId,
      Y = P.blockInitialAnimation,
      K = P.visualState;
    R === void 0 && (R = {});
    var $ = K.latestValues,
      B = K.renderState,
      b,
      Z = L2(),
      q = P2(),
      ie,
      pe = q,
      Se = $,
      xe,
      he = om(),
      Ne,
      de = !1,
      me = new Map(),
      W = new Map(),
      oe = {},
      Q,
      k = V({}, $),
      A;
    function ue() {
      b &&
        (re.isProjectionReady() &&
          (Yu(pe.targetFinal, pe.target, Se),
          Xv(he.deltaFinal, he.layoutCorrected, pe.targetFinal, $)),
        fe(),
        v(b, B));
    }
    function fe() {
      var F = $;
      if (Ne && Ne.isActive()) {
        var G = Ne.getCrossfadeState(re);
        G && (F = G);
      }
      l(re, B, F, pe, he, R, M);
    }
    function ge() {
      Z.notifyUpdate($);
    }
    function ye() {
      if (re.isProjectionReady()) {
        var F = he.delta,
          G = he.treeScale,
          Ce = G.x,
          De = G.y,
          Ue = he.deltaTransform;
        _2(he, pe, re.path, $),
          de && re.notifyViewportBoxUpdate(pe.target, F),
          (de = !1);
        var Ye = ja(F, G);
        (Ye !== Ue || Ce !== G.x || De !== G.y) && re.scheduleRender(),
          (he.deltaTransform = Ye);
      }
    }
    function Te() {
      re.layoutTree.forEach(A2);
    }
    function Ee(F, G) {
      var Ce = G.onChange(function(Ue) {
          ($[F] = Ue), M.onUpdate && Ut.update(ge, !1, !0);
        }),
        De = G.onRenderRequest(re.scheduleRender);
      W.set(F, function() {
        Ce(), De();
      });
    }
    var Le = L(M);
    for (var Ze in Le) {
      var Ln = Le[Ze];
      $[Ze] !== void 0 && Pn(Ln) && Ln.set($[Ze], !1);
    }
    var jr = La(M),
      qt = Bp(M),
      re = V(
        V(
          {
            treeType: i,
            current: null,
            depth: E ? E.depth + 1 : 0,
            parent: E,
            children: new Set(),
            path: E ? lt(lt([], Oe(E.path)), [E]) : [],
            layoutTree: E ? E.layoutTree : new M2(),
            presenceId: U,
            projection: q,
            variantChildren: qt ? new Set() : void 0,
            isVisible: void 0,
            manuallyAnimateOnMount: !!(E != null && E.isMounted()),
            blockInitialAnimation: Y,
            isMounted: function() {
              return !!b;
            },
            mount: function(F) {
              (b = re.current = F),
                re.pointTo(re),
                qt &&
                  E &&
                  !jr &&
                  (A = E == null ? void 0 : E.addVariantChild(re)),
                E == null || E.children.add(re);
            },
            unmount: function() {
              Co.update(ge),
                Co.render(ue),
                Co.preRender(re.updateLayoutProjection),
                W.forEach(function(F) {
                  return F();
                }),
                re.stopLayoutAnimation(),
                re.layoutTree.remove(re),
                A == null || A(),
                E == null || E.children.delete(re),
                xe == null || xe(),
                Z.clearAllListeners();
            },
            addVariantChild: function(F) {
              var G,
                Ce = re.getClosestVariantNode();
              if (Ce)
                return (
                  (G = Ce.variantChildren) === null || G === void 0 || G.add(F),
                  function() {
                    return Ce.variantChildren.delete(F);
                  }
                );
            },
            sortNodePosition: function(F) {
              return !S || i !== F.treeType
                ? 0
                : S(re.getInstance(), F.getInstance());
            },
            getClosestVariantNode: function() {
              return qt ? re : E == null ? void 0 : E.getClosestVariantNode();
            },
            scheduleUpdateLayoutProjection: E
              ? E.scheduleUpdateLayoutProjection
              : function() {
                  return Ut.preRender(re.updateTreeLayoutProjection, !1, !0);
                },
            getLayoutId: function() {
              return M.layoutId;
            },
            getInstance: function() {
              return b;
            },
            getStaticValue: function(F) {
              return $[F];
            },
            setStaticValue: function(F, G) {
              return ($[F] = G);
            },
            getLatestValues: function() {
              return $;
            },
            setVisibility: function(F) {
              re.isVisible !== F && ((re.isVisible = F), re.scheduleRender());
            },
            makeTargetAnimatable: function(F, G) {
              return G === void 0 && (G = !0), f(re, F, M, G);
            },
            addValue: function(F, G) {
              re.hasValue(F) && re.removeValue(F),
                me.set(F, G),
                ($[F] = G.get()),
                Ee(F, G);
            },
            removeValue: function(F) {
              var G;
              me.delete(F),
                (G = W.get(F)) === null || G === void 0 || G(),
                W.delete(F),
                delete $[F],
                x(F, B);
            },
            hasValue: function(F) {
              return me.has(F);
            },
            getValue: function(F, G) {
              var Ce = me.get(F);
              return (
                Ce === void 0 &&
                  G !== void 0 &&
                  ((Ce = Qn(G)), re.addValue(F, Ce)),
                Ce
              );
            },
            forEachValue: function(F) {
              return me.forEach(F);
            },
            readValue: function(F) {
              var G;
              return (G = $[F]) !== null && G !== void 0 ? G : h(b, F, R);
            },
            setBaseTarget: function(F, G) {
              k[F] = G;
            },
            getBaseTarget: function(F) {
              if (s) {
                var G = s(M, F);
                if (G !== void 0 && !Pn(G)) return G;
              }
              return k[F];
            },
          },
          Z
        ),
        {
          build: function() {
            return fe(), B;
          },
          scheduleRender: function() {
            Ut.render(ue, !1, !0);
          },
          syncRender: ue,
          setProps: function(F) {
            (M = F), Z.updatePropListeners(F), (oe = R2(re, L(M), oe));
          },
          getProps: function() {
            return M;
          },
          getVariant: function(F) {
            var G;
            return (G = M.variants) === null || G === void 0 ? void 0 : G[F];
          },
          getDefaultTransition: function() {
            return M.transition;
          },
          getVariantContext: function(F) {
            if ((F === void 0 && (F = !1), F))
              return E == null ? void 0 : E.getVariantContext();
            if (!jr) {
              var G = (E == null ? void 0 : E.getVariantContext()) || {};
              return M.initial !== void 0 && (G.initial = M.initial), G;
            }
            for (var Ce = {}, De = 0; De < V2; De++) {
              var Ue = lm[De],
                Ye = M[Ue];
              (Ot(Ye) || Ye === !1) && (Ce[Ue] = Ye);
            }
            return Ce;
          },
          enableLayoutProjection: function() {
            (q.isEnabled = !0), re.layoutTree.add(re);
          },
          lockProjectionTarget: function() {
            q.isTargetLocked = !0;
          },
          unlockProjectionTarget: function() {
            re.stopLayoutAnimation(), (q.isTargetLocked = !1);
          },
          getLayoutState: function() {
            return he;
          },
          setCrossfader: function(F) {
            Ne = F;
          },
          isProjectionReady: function() {
            return q.isEnabled && q.isHydrated && he.isHydrated;
          },
          startLayoutAnimation: function(F, G, Ce) {
            Ce === void 0 && (Ce = !1);
            var De = re.getProjectionAnimationProgress()[F],
              Ue = Ce ? q.relativeTarget[F] : q.target[F],
              Ye = Ue.min,
              Lt = Ue.max,
              en = Lt - Ye;
            return (
              De.clearListeners(),
              De.set(Ye),
              De.set(Ye),
              De.onChange(function(Rn) {
                re.setProjectionTargetAxis(F, Rn, Rn + en, Ce);
              }),
              re.animateMotionValue(F, De, 0, G)
            );
          },
          stopLayoutAnimation: function() {
            vt(function(F) {
              return re.getProjectionAnimationProgress()[F].stop();
            });
          },
          measureViewportBox: function(F) {
            F === void 0 && (F = !0);
            var G = d(b, R);
            return F || em(G, $), G;
          },
          getProjectionAnimationProgress: function() {
            return Q || (Q = { x: Qn(0), y: Qn(0) }), Q;
          },
          setProjectionTargetAxis: function(F, G, Ce, De) {
            De === void 0 && (De = !1);
            var Ue;
            De
              ? (q.relativeTarget || (q.relativeTarget = Tn()),
                (Ue = q.relativeTarget[F]))
              : ((q.relativeTarget = void 0), (Ue = q.target[F])),
              (q.isHydrated = !0),
              (Ue.min = G),
              (Ue.max = Ce),
              (de = !0),
              Z.notifySetAxisTarget();
          },
          rebaseProjectionTarget: function(F, G) {
            G === void 0 && (G = he.layout);
            var Ce = re.getProjectionAnimationProgress(),
              De = Ce.x,
              Ue = Ce.y,
              Ye =
                !q.relativeTarget &&
                !q.isTargetLocked &&
                !De.isAnimating() &&
                !Ue.isAnimating();
            (F || Ye) &&
              vt(function(Lt) {
                var en = G[Lt],
                  Rn = en.min,
                  Ko = en.max;
                re.setProjectionTargetAxis(Lt, Rn, Ko);
              });
          },
          notifyLayoutReady: function(F) {
            j2(re),
              re.notifyLayoutUpdate(
                he.layout,
                re.prevViewportBox || he.layout,
                F
              );
          },
          resetTransform: function() {
            return m(re, b, M);
          },
          restoreTransform: function() {
            return y(b, B);
          },
          updateLayoutProjection: ye,
          updateTreeLayoutProjection: function() {
            re.layoutTree.forEach(N2), Ut.preRender(Te, !1, !0);
          },
          getProjectionParent: function() {
            if (ie === void 0) {
              for (var F = !1, G = re.path.length - 1; G >= 0; G--) {
                var Ce = re.path[G];
                if (Ce.projection.isEnabled) {
                  F = Ce;
                  break;
                }
              }
              ie = F;
            }
            return ie;
          },
          resolveRelativeTargetBox: function() {
            var F = re.getProjectionParent();
            if (!(!q.relativeTarget || !F) && (Y1(q, F.projection), Zv(F))) {
              var G = q.target;
              Yu(G, G, F.getLatestValues());
            }
          },
          shouldResetTransform: function() {
            return !!M._layoutResetTransform;
          },
          pointTo: function(F) {
            (pe = F.projection),
              (Se = F.getLatestValues()),
              xe == null || xe(),
              (xe = Uo(
                F.onSetAxisTarget(re.scheduleUpdateLayoutProjection),
                F.onLayoutAnimationComplete(function() {
                  var G;
                  re.isPresent
                    ? (re.presence = No.Present)
                    : (G = re.layoutSafeToRemove) === null ||
                      G === void 0 ||
                      G.call(re);
                })
              ));
          },
          isPresent: !0,
          presence: No.Entering,
        }
      );
    return re;
  };
};
function N2(n) {
  n.resolveRelativeTargetBox();
}
function A2(n) {
  n.updateLayoutProjection();
}
var lm = lt(["initial"], Oe(Ss)),
  V2 = lm.length,
  O2 = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
  um = function(n) {
    return O2.has(n);
  },
  D2 = function(n) {
    return Object.keys(n).some(um);
  },
  sm = function(n, o) {
    n.set(o, !1), n.set(o);
  },
  dp = function(n) {
    return n === Yn || n === ce;
  },
  pp;
(function(n) {
  (n.width = "width"),
    (n.height = "height"),
    (n.left = "left"),
    (n.right = "right"),
    (n.top = "top"),
    (n.bottom = "bottom");
})(pp || (pp = {}));
var vp = function(n, o) {
    return parseFloat(n.split(", ")[o]);
  },
  mp = function(n, o) {
    return function(i, l) {
      var s = l.transform;
      if (s === "none" || !s) return 0;
      var f = s.match(/^matrix3d\((.+)\)$/);
      if (f) return vp(f[1], o);
      var d = s.match(/^matrix\((.+)\)$/);
      return d ? vp(d[1], n) : 0;
    };
  },
  z2 = new Set(["x", "y", "z"]),
  F2 = To.filter(function(n) {
    return !z2.has(n);
  });
function I2(n) {
  var o = [];
  return (
    F2.forEach(function(i) {
      var l = n.getValue(i);
      l !== void 0 &&
        (o.push([i, l.get()]), l.set(i.startsWith("scale") ? 1 : 0));
    }),
    o.length && n.syncRender(),
    o
  );
}
var hp = {
    width: function(n) {
      var o = n.x;
      return o.max - o.min;
    },
    height: function(n) {
      var o = n.y;
      return o.max - o.min;
    },
    top: function(n, o) {
      var i = o.top;
      return parseFloat(i);
    },
    left: function(n, o) {
      var i = o.left;
      return parseFloat(i);
    },
    bottom: function(n, o) {
      var i = n.y,
        l = o.top;
      return parseFloat(l) + (i.max - i.min);
    },
    right: function(n, o) {
      var i = n.x,
        l = o.left;
      return parseFloat(l) + (i.max - i.min);
    },
    x: mp(4, 13),
    y: mp(5, 14),
  },
  B2 = function(n, o, i) {
    var l = o.measureViewportBox(),
      s = o.getInstance(),
      f = getComputedStyle(s),
      d = f.display,
      v = f.top,
      h = f.left,
      m = f.bottom,
      y = f.right,
      x = f.transform,
      S = { top: v, left: h, bottom: m, right: y, transform: x };
    d === "none" && o.setStaticValue("display", n.display || "block"),
      o.syncRender();
    var L = o.measureViewportBox();
    return (
      i.forEach(function(P) {
        var R = o.getValue(P);
        sm(R, hp[P](l, S)), (n[P] = hp[P](L, f));
      }),
      n
    );
  },
  U2 = function(n, o, i, l) {
    i === void 0 && (i = {}),
      l === void 0 && (l = {}),
      (o = V({}, o)),
      (l = V({}, l));
    var s = Object.keys(o).filter(um),
      f = [],
      d = !1,
      v = [];
    if (
      (s.forEach(function(m) {
        var y = n.getValue(m);
        if (n.hasValue(m)) {
          var x = i[m],
            S = o[m],
            L = oa(x),
            P;
          if (Ro(S))
            for (var R = S.length, E = S[0] === null ? 1 : 0; E < R; E++)
              P ? Eo(oa(S[E]) === P) : (P = oa(S[E]));
          else P = oa(S);
          if (L !== P)
            if (dp(L) && dp(P)) {
              var M = y.get();
              typeof M == "string" && y.set(parseFloat(M)),
                typeof S == "string"
                  ? (o[m] = parseFloat(S))
                  : Array.isArray(S) && P === ce && (o[m] = S.map(parseFloat));
            } else
              L != null &&
              L.transform &&
              P != null && P.transform &&
              (x === 0 || S === 0)
                ? x === 0
                  ? y.set(P.transform(x))
                  : (o[m] = L.transform(S))
                : (d || ((f = I2(n)), (d = !0)),
                  v.push(m),
                  (l[m] = l[m] !== void 0 ? l[m] : o[m]),
                  sm(y, S));
        }
      }),
      v.length)
    ) {
      var h = B2(o, n, v);
      return (
        f.length &&
          f.forEach(function(m) {
            var y = Oe(m, 2),
              x = y[0],
              S = y[1];
            n.getValue(x).set(S);
          }),
        n.syncRender(),
        { target: h, transitionEnd: l }
      );
    } else return { target: o, transitionEnd: l };
  };
function H2(n, o, i, l) {
  return D2(o) ? U2(n, o, i, l) : { target: o, transitionEnd: l };
}
var W2 = function(n, o, i, l) {
  var s = c2(n, o, l);
  return (o = s.target), (l = s.transitionEnd), H2(n, o, i, l);
};
function $2(n) {
  return window.getComputedStyle(n);
}
var cm = {
    treeType: "dom",
    readValueFromInstance: function(n, o) {
      if (Ra(o)) {
        var i = ys(o);
        return (i && i.default) || 0;
      } else {
        var l = $2(n);
        return (Wp(o) ? l.getPropertyValue(o) : l[o]) || 0;
      }
    },
    sortNodePosition: function(n, o) {
      return n.compareDocumentPosition(o) & 2 ? 1 : -1;
    },
    getBaseTarget: function(n, o) {
      var i;
      return (i = n.style) === null || i === void 0 ? void 0 : i[o];
    },
    measureViewportBox: function(n, o) {
      var i = o.transformPagePoint;
      return Gv(n, i);
    },
    resetTransform: function(n, o, i) {
      var l = i.transformTemplate;
      (o.style.transform = l ? l({}, "") : "none"), n.scheduleRender();
    },
    restoreTransform: function(n, o) {
      n.style.transform = o.style.transform;
    },
    removeValueFromRenderState: function(n, o) {
      var i = o.vars,
        l = o.style;
      delete i[n], delete l[n];
    },
    makeTargetAnimatable: function(n, o, i, l) {
      var s = i.transformValues;
      l === void 0 && (l = !0);
      var f = o.transition,
        d = o.transitionEnd,
        v = wt(o, ["transition", "transitionEnd"]),
        h = S1(v, f || {}, n);
      if ((s && (d && (d = s(d)), v && (v = s(v)), h && (h = s(h))), l)) {
        x1(n, v, h);
        var m = W2(n, v, h, d);
        (d = m.transitionEnd), (v = m.target);
      }
      return V({ transition: f, transitionEnd: d }, v);
    },
    scrapeMotionValuesFromProps: ss,
    build: function(n, o, i, l, s, f, d) {
      n.isVisible !== void 0 &&
        (o.style.visibility = n.isVisible ? "visible" : "hidden");
      var v = l.isEnabled && s.isHydrated;
      as(o, i, l, s, f, d.transformTemplate, v ? ja : void 0, v ? im : void 0);
    },
    render: nv,
  },
  K2 = am(cm),
  Q2 = am(
    V(V({}, cm), {
      getBaseTarget: function(n, o) {
        return n[o];
      },
      readValueFromInstance: function(n, o) {
        var i;
        return Ra(o)
          ? ((i = ys(o)) === null || i === void 0 ? void 0 : i.default) || 0
          : ((o = rv.has(o) ? o : tv(o)), n.getAttribute(o));
      },
      scrapeMotionValuesFromProps: iv,
      build: function(n, o, i, l, s, f, d) {
        var v = l.isEnabled && s.isHydrated;
        us(
          o,
          i,
          l,
          s,
          f,
          d.transformTemplate,
          v ? ja : void 0,
          v ? im : void 0
        );
      },
      render: ov,
    })
  ),
  Y2 = function(n, o) {
    return os(n)
      ? Q2(o, { enableHardwareAcceleration: !1 })
      : K2(o, { enableHardwareAcceleration: !0 });
  },
  G2 = V(V(V(V({}, N1), qy), u2), E2),
  fm = X0(function(n, o) {
    return Fg(n, o, G2, Y2);
  });
function X2() {
  var n = j.useRef(!1),
    o = Oe(j.useState(0), 2),
    i = o[0],
    l = o[1];
  return (
    ps(function() {
      return (n.current = !0);
    }),
    j.useCallback(
      function() {
        !n.current && l(i + 1);
      },
      [i]
    )
  );
}
var gp = 0;
function b2() {
  var n = gp;
  return gp++, n;
}
var _u = function(n) {
  var o = n.children,
    i = n.initial,
    l = n.isPresent,
    s = n.onExitComplete,
    f = n.custom,
    d = n.presenceAffectsLayout,
    v = Po(Z2),
    h = Po(b2),
    m = j.useMemo(
      function() {
        return {
          id: h,
          initial: i,
          isPresent: l,
          custom: f,
          onExitComplete: function(y) {
            v.set(y, !0);
            var x = !0;
            v.forEach(function(S) {
              S || (x = !1);
            }),
              x && (s == null || s());
          },
          register: function(y) {
            return (
              v.set(y, !1),
              function() {
                return v.delete(y);
              }
            );
          },
        };
      },
      d ? void 0 : [l]
    );
  return (
    j.useMemo(
      function() {
        v.forEach(function(y, x) {
          return v.set(x, !1);
        });
      },
      [l]
    ),
    j.useEffect(
      function() {
        !l && !v.size && (s == null || s());
      },
      [l]
    ),
    j.createElement(zo.Provider, { value: m }, o)
  );
};
function Z2() {
  return new Map();
}
function Sr(n) {
  return n.key || "";
}
function J2(n, o) {
  n.forEach(function(i) {
    var l = Sr(i);
    o.set(l, i);
  });
}
function q2(n) {
  var o = [];
  return (
    j.Children.forEach(n, function(i) {
      j.isValidElement(i) && o.push(i);
    }),
    o
  );
}
var ex = function(n) {
    var o = n.children,
      i = n.custom,
      l = n.initial,
      s = l === void 0 ? !0 : l,
      f = n.onExitComplete,
      d = n.exitBeforeEnter,
      v = n.presenceAffectsLayout,
      h = v === void 0 ? !0 : v,
      m = X2(),
      y = j.useContext(rm);
    $n(y) && (m = y.forceUpdate);
    var x = j.useRef(!0),
      S = q2(o),
      L = j.useRef(S),
      P = j.useRef(new Map()).current,
      R = j.useRef(new Set()).current;
    if ((J2(S, P), x.current))
      return (
        (x.current = !1),
        j.createElement(
          j.Fragment,
          null,
          S.map(function(B) {
            return j.createElement(
              _u,
              {
                key: Sr(B),
                isPresent: !0,
                initial: s ? void 0 : !1,
                presenceAffectsLayout: h,
              },
              B
            );
          })
        )
      );
    for (
      var E = lt([], Oe(S)),
        M = L.current.map(Sr),
        U = S.map(Sr),
        Y = M.length,
        K = 0;
      K < Y;
      K++
    ) {
      var $ = M[K];
      U.indexOf($) === -1 ? R.add($) : R.delete($);
    }
    return (
      d && R.size && (E = []),
      R.forEach(function(B) {
        if (U.indexOf(B) === -1) {
          var b = P.get(B);
          if (b) {
            var Z = M.indexOf(B),
              q = function() {
                P.delete(B), R.delete(B);
                var ie = L.current.findIndex(function(pe) {
                  return pe.key === B;
                });
                L.current.splice(ie, 1),
                  R.size || ((L.current = S), m(), f && f());
              };
            E.splice(
              Z,
              0,
              j.createElement(
                _u,
                {
                  key: Sr(b),
                  isPresent: !1,
                  onExitComplete: q,
                  custom: i,
                  presenceAffectsLayout: h,
                },
                b
              )
            );
          }
        }
      }),
      (E = E.map(function(B) {
        var b = B.key;
        return R.has(b)
          ? B
          : j.createElement(
              _u,
              { key: Sr(B), isPresent: !0, presenceAffectsLayout: h },
              B
            );
      })),
      (L.current = E),
      j.createElement(
        j.Fragment,
        null,
        R.size
          ? E
          : E.map(function(B) {
              return j.cloneElement(B);
            })
      )
    );
  },
  Mu = { exports: {} },
  pt = {},
  ju = { exports: {} },
  Nu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yp;
function tx() {
  return (
    yp ||
      ((yp = 1),
      (function(n) {
        function o(W, oe) {
          var Q = W.length;
          W.push(oe);
          e: for (; 0 < Q; ) {
            var k = (Q - 1) >>> 1,
              A = W[k];
            if (0 < s(A, oe)) (W[k] = oe), (W[Q] = A), (Q = k);
            else break e;
          }
        }
        function i(W) {
          return W.length === 0 ? null : W[0];
        }
        function l(W) {
          if (W.length === 0) return null;
          var oe = W[0],
            Q = W.pop();
          if (Q !== oe) {
            W[0] = Q;
            e: for (var k = 0, A = W.length, ue = A >>> 1; k < ue; ) {
              var fe = 2 * (k + 1) - 1,
                ge = W[fe],
                ye = fe + 1,
                Te = W[ye];
              if (0 > s(ge, Q))
                ye < A && 0 > s(Te, ge)
                  ? ((W[k] = Te), (W[ye] = Q), (k = ye))
                  : ((W[k] = ge), (W[fe] = Q), (k = fe));
              else if (ye < A && 0 > s(Te, Q))
                (W[k] = Te), (W[ye] = Q), (k = ye);
              else break e;
            }
          }
          return oe;
        }
        function s(W, oe) {
          var Q = W.sortIndex - oe.sortIndex;
          return Q !== 0 ? Q : W.id - oe.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var f = performance;
          n.unstable_now = function() {
            return f.now();
          };
        } else {
          var d = Date,
            v = d.now();
          n.unstable_now = function() {
            return d.now() - v;
          };
        }
        var h = [],
          m = [],
          y = 1,
          x = null,
          S = 3,
          L = !1,
          P = !1,
          R = !1,
          E = typeof setTimeout == "function" ? setTimeout : null,
          M = typeof clearTimeout == "function" ? clearTimeout : null,
          U = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function Y(W) {
          for (var oe = i(m); oe !== null; ) {
            if (oe.callback === null) l(m);
            else if (oe.startTime <= W)
              l(m), (oe.sortIndex = oe.expirationTime), o(h, oe);
            else break;
            oe = i(m);
          }
        }
        function K(W) {
          if (((R = !1), Y(W), !P))
            if (i(h) !== null) (P = !0), de($);
            else {
              var oe = i(m);
              oe !== null && me(K, oe.startTime - W);
            }
        }
        function $(W, oe) {
          (P = !1), R && ((R = !1), M(Z), (Z = -1)), (L = !0);
          var Q = S;
          try {
            for (
              Y(oe), x = i(h);
              x !== null && (!(x.expirationTime > oe) || (W && !pe()));

            ) {
              var k = x.callback;
              if (typeof k == "function") {
                (x.callback = null), (S = x.priorityLevel);
                var A = k(x.expirationTime <= oe);
                (oe = n.unstable_now()),
                  typeof A == "function"
                    ? (x.callback = A)
                    : x === i(h) && l(h),
                  Y(oe);
              } else l(h);
              x = i(h);
            }
            if (x !== null) var ue = !0;
            else {
              var fe = i(m);
              fe !== null && me(K, fe.startTime - oe), (ue = !1);
            }
            return ue;
          } finally {
            (x = null), (S = Q), (L = !1);
          }
        }
        var B = !1,
          b = null,
          Z = -1,
          q = 5,
          ie = -1;
        function pe() {
          return !(n.unstable_now() - ie < q);
        }
        function Se() {
          if (b !== null) {
            var W = n.unstable_now();
            ie = W;
            var oe = !0;
            try {
              oe = b(!0, W);
            } finally {
              oe ? xe() : ((B = !1), (b = null));
            }
          } else B = !1;
        }
        var xe;
        if (typeof U == "function")
          xe = function() {
            U(Se);
          };
        else if (typeof MessageChannel < "u") {
          var he = new MessageChannel(),
            Ne = he.port2;
          (he.port1.onmessage = Se),
            (xe = function() {
              Ne.postMessage(null);
            });
        } else
          xe = function() {
            E(Se, 0);
          };
        function de(W) {
          (b = W), B || ((B = !0), xe());
        }
        function me(W, oe) {
          Z = E(function() {
            W(n.unstable_now());
          }, oe);
        }
        (n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function(W) {
            W.callback = null;
          }),
          (n.unstable_continueExecution = function() {
            P || L || ((P = !0), de($));
          }),
          (n.unstable_forceFrameRate = function(W) {
            0 > W || 125 < W
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (q = 0 < W ? Math.floor(1e3 / W) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function() {
            return S;
          }),
          (n.unstable_getFirstCallbackNode = function() {
            return i(h);
          }),
          (n.unstable_next = function(W) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var oe = 3;
                break;
              default:
                oe = S;
            }
            var Q = S;
            S = oe;
            try {
              return W();
            } finally {
              S = Q;
            }
          }),
          (n.unstable_pauseExecution = function() {}),
          (n.unstable_requestPaint = function() {}),
          (n.unstable_runWithPriority = function(W, oe) {
            switch (W) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                W = 3;
            }
            var Q = S;
            S = W;
            try {
              return oe();
            } finally {
              S = Q;
            }
          }),
          (n.unstable_scheduleCallback = function(W, oe, Q) {
            var k = n.unstable_now();
            switch (
              (typeof Q == "object" && Q !== null
                ? ((Q = Q.delay),
                  (Q = typeof Q == "number" && 0 < Q ? k + Q : k))
                : (Q = k),
              W)
            ) {
              case 1:
                var A = -1;
                break;
              case 2:
                A = 250;
                break;
              case 5:
                A = 1073741823;
                break;
              case 4:
                A = 1e4;
                break;
              default:
                A = 5e3;
            }
            return (
              (A = Q + A),
              (W = {
                id: y++,
                callback: oe,
                priorityLevel: W,
                startTime: Q,
                expirationTime: A,
                sortIndex: -1,
              }),
              Q > k
                ? ((W.sortIndex = Q),
                  o(m, W),
                  i(h) === null &&
                    W === i(m) &&
                    (R ? (M(Z), (Z = -1)) : (R = !0), me(K, Q - k)))
                : ((W.sortIndex = A), o(h, W), P || L || ((P = !0), de($))),
              W
            );
          }),
          (n.unstable_shouldYield = pe),
          (n.unstable_wrapCallback = function(W) {
            var oe = S;
            return function() {
              var Q = S;
              S = oe;
              try {
                return W.apply(this, arguments);
              } finally {
                S = Q;
              }
            };
          });
      })(Nu)),
    Nu
  );
}
var xp;
function nx() {
  return xp || ((xp = 1), (ju.exports = tx())), ju.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wp;
function rx() {
  if (wp) return pt;
  wp = 1;
  var n = ns(),
    o = nx();
  function i(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        r = 1;
      r < arguments.length;
      r++
    )
      t += "&args[]=" + encodeURIComponent(arguments[r]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var l = new Set(),
    s = {};
  function f(e, t) {
    d(e, t), d(e + "Capture", t);
  }
  function d(e, t) {
    for (s[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
  }
  var v = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    h = Object.prototype.hasOwnProperty,
    m = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    y = {},
    x = {};
  function S(e) {
    return h.call(x, e)
      ? !0
      : h.call(y, e)
      ? !1
      : m.test(e)
      ? (x[e] = !0)
      : ((y[e] = !0), !1);
  }
  function L(e, t, r, a) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return a
          ? !1
          : r !== null
          ? !r.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function P(e, t, r, a) {
    if (t === null || typeof t > "u" || L(e, t, r, a)) return !0;
    if (a) return !1;
    if (r !== null)
      switch (r.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function R(e, t, r, a, u, c, p) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = a),
      (this.attributeNamespace = u),
      (this.mustUseProperty = r),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = c),
      (this.removeEmptyString = p);
  }
  var E = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function(e) {
      E[e] = new R(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function(e) {
      var t = e[0];
      E[t] = new R(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(
      e
    ) {
      E[e] = new R(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function(e) {
      E[e] = new R(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function(e) {
        E[e] = new R(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function(e) {
      E[e] = new R(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function(e) {
      E[e] = new R(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function(e) {
      E[e] = new R(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function(e) {
      E[e] = new R(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var M = /[\-:]([a-z])/g;
  function U(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function(e) {
      var t = e.replace(M, U);
      E[t] = new R(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function(e) {
        var t = e.replace(M, U);
        E[t] = new R(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
      var t = e.replace(M, U);
      E[t] = new R(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function(e) {
      E[e] = new R(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (E.xlinkHref = new R(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function(e) {
      E[e] = new R(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function Y(e, t, r, a) {
    var u = E.hasOwnProperty(t) ? E[t] : null;
    (u !== null
      ? u.type !== 0
      : a ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (P(t, r, u, a) && (r = null),
      a || u === null
        ? S(t) &&
          (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
        : u.mustUseProperty
        ? (e[u.propertyName] = r === null ? (u.type === 3 ? !1 : "") : r)
        : ((t = u.attributeName),
          (a = u.attributeNamespace),
          r === null
            ? e.removeAttribute(t)
            : ((u = u.type),
              (r = u === 3 || (u === 4 && r === !0) ? "" : "" + r),
              a ? e.setAttributeNS(a, t, r) : e.setAttribute(t, r))));
  }
  var K = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    $ = Symbol.for("react.element"),
    B = Symbol.for("react.portal"),
    b = Symbol.for("react.fragment"),
    Z = Symbol.for("react.strict_mode"),
    q = Symbol.for("react.profiler"),
    ie = Symbol.for("react.provider"),
    pe = Symbol.for("react.context"),
    Se = Symbol.for("react.forward_ref"),
    xe = Symbol.for("react.suspense"),
    he = Symbol.for("react.suspense_list"),
    Ne = Symbol.for("react.memo"),
    de = Symbol.for("react.lazy"),
    me = Symbol.for("react.offscreen"),
    W = Symbol.iterator;
  function oe(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (W && e[W]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Q = Object.assign,
    k;
  function A(e) {
    if (k === void 0)
      try {
        throw Error();
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        k = (t && t[1]) || "";
      }
    return (
      `
` +
      k +
      e
    );
  }
  var ue = !1;
  function fe(e, t) {
    if (!e || ue) return "";
    ue = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function() {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function() {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (N) {
            var a = N;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (N) {
            a = N;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (N) {
          a = N;
        }
        e();
      }
    } catch (N) {
      if (N && a && typeof N.stack == "string") {
        for (
          var u = N.stack.split(`
`),
            c = a.stack.split(`
`),
            p = u.length - 1,
            g = c.length - 1;
          1 <= p && 0 <= g && u[p] !== c[g];

        )
          g--;
        for (; 1 <= p && 0 <= g; p--, g--)
          if (u[p] !== c[g]) {
            if (p !== 1 || g !== 1)
              do
                if ((p--, g--, 0 > g || u[p] !== c[g])) {
                  var w =
                    `
` + u[p].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      w.includes("<anonymous>") &&
                      (w = w.replace("<anonymous>", e.displayName)),
                    w
                  );
                }
              while (1 <= p && 0 <= g);
            break;
          }
      }
    } finally {
      (ue = !1), (Error.prepareStackTrace = r);
    }
    return (e = e ? e.displayName || e.name : "") ? A(e) : "";
  }
  function ge(e) {
    switch (e.tag) {
      case 5:
        return A(e.type);
      case 16:
        return A("Lazy");
      case 13:
        return A("Suspense");
      case 19:
        return A("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = fe(e.type, !1)), e;
      case 11:
        return (e = fe(e.type.render, !1)), e;
      case 1:
        return (e = fe(e.type, !0)), e;
      default:
        return "";
    }
  }
  function ye(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case b:
        return "Fragment";
      case B:
        return "Portal";
      case q:
        return "Profiler";
      case Z:
        return "StrictMode";
      case xe:
        return "Suspense";
      case he:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case pe:
          return (e.displayName || "Context") + ".Consumer";
        case ie:
          return (e._context.displayName || "Context") + ".Provider";
        case Se:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Ne:
          return (
            (t = e.displayName || null), t !== null ? t : ye(e.type) || "Memo"
          );
        case de:
          (t = e._payload), (e = e._init);
          try {
            return ye(e(t));
          } catch {}
      }
    return null;
  }
  function Te(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ye(t);
      case 8:
        return t === Z ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function Ee(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Le(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Ze(e) {
    var t = Le(e) ? "checked" : "value",
      r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      a = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof r < "u" &&
      typeof r.get == "function" &&
      typeof r.set == "function"
    ) {
      var u = r.get,
        c = r.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            (a = "" + p), c.call(this, p);
          },
        }),
        Object.defineProperty(e, t, { enumerable: r.enumerable }),
        {
          getValue: function() {
            return a;
          },
          setValue: function(p) {
            a = "" + p;
          },
          stopTracking: function() {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Ln(e) {
    e._valueTracker || (e._valueTracker = Ze(e));
  }
  function jr(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
      a = "";
    return (
      e && (a = Le(e) ? (e.checked ? "true" : "false") : e.value),
      (e = a),
      e !== r ? (t.setValue(e), !0) : !1
    );
  }
  function qt(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function re(e, t) {
    var r = t.checked;
    return Q({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r ?? e._wrapperState.initialChecked,
    });
  }
  function F(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue,
      a = t.checked != null ? t.checked : t.defaultChecked;
    (r = Ee(t.value != null ? t.value : r)),
      (e._wrapperState = {
        initialChecked: a,
        initialValue: r,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function G(e, t) {
    (t = t.checked), t != null && Y(e, "checked", t, !1);
  }
  function Ce(e, t) {
    G(e, t);
    var r = Ee(t.value),
      a = t.type;
    if (r != null)
      a === "number"
        ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
        : e.value !== "" + r && (e.value = "" + r);
    else if (a === "submit" || a === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? Ue(e, t.type, r)
      : t.hasOwnProperty("defaultValue") && Ue(e, t.type, Ee(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function De(e, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var a = t.type;
      if (
        !(
          (a !== "submit" && a !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        r || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (r = e.name),
      r !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      r !== "" && (e.name = r);
  }
  function Ue(e, t, r) {
    (t !== "number" || qt(e.ownerDocument) !== e) &&
      (r == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
  }
  var Ye = Array.isArray;
  function Lt(e, t, r, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var u = 0; u < r.length; u++) t["$" + r[u]] = !0;
      for (r = 0; r < e.length; r++)
        (u = t.hasOwnProperty("$" + e[r].value)),
          e[r].selected !== u && (e[r].selected = u),
          u && a && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + Ee(r), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === r) {
          (e[u].selected = !0), a && (e[u].defaultSelected = !0);
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function en(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
    return Q({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Rn(e, t) {
    var r = t.value;
    if (r == null) {
      if (((r = t.children), (t = t.defaultValue), r != null)) {
        if (t != null) throw Error(i(92));
        if (Ye(r)) {
          if (1 < r.length) throw Error(i(93));
          r = r[0];
        }
        t = r;
      }
      t == null && (t = ""), (r = t);
    }
    e._wrapperState = { initialValue: Ee(r) };
  }
  function Ko(e, t) {
    var r = Ee(t.value),
      a = Ee(t.defaultValue);
    r != null &&
      ((r = "" + r),
      r !== e.value && (e.value = r),
      t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
      a != null && (e.defaultValue = "" + a);
  }
  function Ps(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Ts(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Aa(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Ts(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Qo,
    Ls = (function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function(t, r, a, u) {
            MSApp.execUnsafeLocalFunction(function() {
              return e(t, r, a, u);
            });
          }
        : e;
    })(function(e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Qo = Qo || document.createElement("div"),
            Qo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Qo.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Nr(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Ar = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Rm = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ar).forEach(function(e) {
    Rm.forEach(function(t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ar[t] = Ar[e]);
    });
  });
  function Rs(e, t, r) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : r || typeof t != "number" || t === 0 || (Ar.hasOwnProperty(e) && Ar[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function _s(e, t) {
    e = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var a = r.indexOf("--") === 0,
          u = Rs(r, t[r], a);
        r === "float" && (r = "cssFloat"), a ? e.setProperty(r, u) : (e[r] = u);
      }
  }
  var _m = Q(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Va(e, t) {
    if (t) {
      if (_m[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(i(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(i(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(i(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(i(62));
    }
  }
  function Oa(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Da = null;
  function za(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Fa = null,
    bn = null,
    Zn = null;
  function Ms(e) {
    if ((e = to(e))) {
      if (typeof Fa != "function") throw Error(i(280));
      var t = e.stateNode;
      t && ((t = mi(t)), Fa(e.stateNode, e.type, t));
    }
  }
  function js(e) {
    bn ? (Zn ? Zn.push(e) : (Zn = [e])) : (bn = e);
  }
  function Ns() {
    if (bn) {
      var e = bn,
        t = Zn;
      if (((Zn = bn = null), Ms(e), t)) for (e = 0; e < t.length; e++) Ms(t[e]);
    }
  }
  function As(e, t) {
    return e(t);
  }
  function Vs() {}
  var Ia = !1;
  function Os(e, t, r) {
    if (Ia) return e(t, r);
    Ia = !0;
    try {
      return As(e, t, r);
    } finally {
      (Ia = !1), (bn !== null || Zn !== null) && (Vs(), Ns());
    }
  }
  function Vr(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var a = mi(r);
    if (a === null) return null;
    r = a[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) ||
          ((e = e.type),
          (a = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !a);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != "function") throw Error(i(231, t, typeof r));
    return r;
  }
  var Ba = !1;
  if (v)
    try {
      var Or = {};
      Object.defineProperty(Or, "passive", {
        get: function() {
          Ba = !0;
        },
      }),
        window.addEventListener("test", Or, Or),
        window.removeEventListener("test", Or, Or);
    } catch {
      Ba = !1;
    }
  function Mm(e, t, r, a, u, c, p, g, w) {
    var N = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, N);
    } catch (z) {
      this.onError(z);
    }
  }
  var Dr = !1,
    Yo = null,
    Go = !1,
    Ua = null,
    jm = {
      onError: function(e) {
        (Dr = !0), (Yo = e);
      },
    };
  function Nm(e, t, r, a, u, c, p, g, w) {
    (Dr = !1), (Yo = null), Mm.apply(jm, arguments);
  }
  function Am(e, t, r, a, u, c, p, g, w) {
    if ((Nm.apply(this, arguments), Dr)) {
      if (Dr) {
        var N = Yo;
        (Dr = !1), (Yo = null);
      } else throw Error(i(198));
      Go || ((Go = !0), (Ua = N));
    }
  }
  function _n(e) {
    var t = e,
      r = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (r = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? r : null;
  }
  function Ds(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function zs(e) {
    if (_n(e) !== e) throw Error(i(188));
  }
  function Vm(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = _n(e)), t === null)) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var r = e, a = t; ; ) {
      var u = r.return;
      if (u === null) break;
      var c = u.alternate;
      if (c === null) {
        if (((a = u.return), a !== null)) {
          r = a;
          continue;
        }
        break;
      }
      if (u.child === c.child) {
        for (c = u.child; c; ) {
          if (c === r) return zs(u), e;
          if (c === a) return zs(u), t;
          c = c.sibling;
        }
        throw Error(i(188));
      }
      if (r.return !== a.return) (r = u), (a = c);
      else {
        for (var p = !1, g = u.child; g; ) {
          if (g === r) {
            (p = !0), (r = u), (a = c);
            break;
          }
          if (g === a) {
            (p = !0), (a = u), (r = c);
            break;
          }
          g = g.sibling;
        }
        if (!p) {
          for (g = c.child; g; ) {
            if (g === r) {
              (p = !0), (r = c), (a = u);
              break;
            }
            if (g === a) {
              (p = !0), (a = c), (r = u);
              break;
            }
            g = g.sibling;
          }
          if (!p) throw Error(i(189));
        }
      }
      if (r.alternate !== a) throw Error(i(190));
    }
    if (r.tag !== 3) throw Error(i(188));
    return r.stateNode.current === r ? e : t;
  }
  function Fs(e) {
    return (e = Vm(e)), e !== null ? Is(e) : null;
  }
  function Is(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Is(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Bs = o.unstable_scheduleCallback,
    Us = o.unstable_cancelCallback,
    Om = o.unstable_shouldYield,
    Dm = o.unstable_requestPaint,
    Ie = o.unstable_now,
    zm = o.unstable_getCurrentPriorityLevel,
    Ha = o.unstable_ImmediatePriority,
    Hs = o.unstable_UserBlockingPriority,
    Xo = o.unstable_NormalPriority,
    Fm = o.unstable_LowPriority,
    Ws = o.unstable_IdlePriority,
    bo = null,
    Dt = null;
  function Im(e) {
    if (Dt && typeof Dt.onCommitFiberRoot == "function")
      try {
        Dt.onCommitFiberRoot(bo, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Rt = Math.clz32 ? Math.clz32 : Hm,
    Bm = Math.log,
    Um = Math.LN2;
  function Hm(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Bm(e) / Um) | 0)) | 0;
  }
  var Zo = 64,
    Jo = 4194304;
  function zr(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function qo(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var a = 0,
      u = e.suspendedLanes,
      c = e.pingedLanes,
      p = r & 268435455;
    if (p !== 0) {
      var g = p & ~u;
      g !== 0 ? (a = zr(g)) : ((c &= p), c !== 0 && (a = zr(c)));
    } else (p = r & ~u), p !== 0 ? (a = zr(p)) : c !== 0 && (a = zr(c));
    if (a === 0) return 0;
    if (
      t !== 0 &&
      t !== a &&
      (t & u) === 0 &&
      ((u = a & -a), (c = t & -t), u >= c || (u === 16 && (c & 4194240) !== 0))
    )
      return t;
    if (((a & 4) !== 0 && (a |= r & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= a; 0 < t; )
        (r = 31 - Rt(t)), (u = 1 << r), (a |= e[r]), (t &= ~u);
    return a;
  }
  function Wm(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function $m(e, t) {
    for (
      var r = e.suspendedLanes,
        a = e.pingedLanes,
        u = e.expirationTimes,
        c = e.pendingLanes;
      0 < c;

    ) {
      var p = 31 - Rt(c),
        g = 1 << p,
        w = u[p];
      w === -1
        ? ((g & r) === 0 || (g & a) !== 0) && (u[p] = Wm(g, t))
        : w <= t && (e.expiredLanes |= g),
        (c &= ~g);
    }
  }
  function Wa(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function $s() {
    var e = Zo;
    return (Zo <<= 1), (Zo & 4194240) === 0 && (Zo = 64), e;
  }
  function $a(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function Fr(e, t, r) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Rt(t)),
      (e[t] = r);
  }
  function Km(e, t) {
    var r = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var a = e.eventTimes;
    for (e = e.expirationTimes; 0 < r; ) {
      var u = 31 - Rt(r),
        c = 1 << u;
      (t[u] = 0), (a[u] = -1), (e[u] = -1), (r &= ~c);
    }
  }
  function Ka(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r; ) {
      var a = 31 - Rt(r),
        u = 1 << a;
      (u & t) | (e[a] & t) && (e[a] |= t), (r &= ~u);
    }
  }
  var Pe = 0;
  function Ks(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var Qs,
    Qa,
    Ys,
    Gs,
    Xs,
    Ya = !1,
    ei = [],
    tn = null,
    nn = null,
    rn = null,
    Ir = new Map(),
    Br = new Map(),
    on = [],
    Qm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
  function bs(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        tn = null;
        break;
      case "dragenter":
      case "dragleave":
        nn = null;
        break;
      case "mouseover":
      case "mouseout":
        rn = null;
        break;
      case "pointerover":
      case "pointerout":
        Ir.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Br.delete(t.pointerId);
    }
  }
  function Ur(e, t, r, a, u, c) {
    return e === null || e.nativeEvent !== c
      ? ((e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: a,
          nativeEvent: c,
          targetContainers: [u],
        }),
        t !== null && ((t = to(t)), t !== null && Qa(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        e);
  }
  function Ym(e, t, r, a, u) {
    switch (t) {
      case "focusin":
        return (tn = Ur(tn, e, t, r, a, u)), !0;
      case "dragenter":
        return (nn = Ur(nn, e, t, r, a, u)), !0;
      case "mouseover":
        return (rn = Ur(rn, e, t, r, a, u)), !0;
      case "pointerover":
        var c = u.pointerId;
        return Ir.set(c, Ur(Ir.get(c) || null, e, t, r, a, u)), !0;
      case "gotpointercapture":
        return (
          (c = u.pointerId), Br.set(c, Ur(Br.get(c) || null, e, t, r, a, u)), !0
        );
    }
    return !1;
  }
  function Zs(e) {
    var t = Mn(e.target);
    if (t !== null) {
      var r = _n(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = Ds(r)), t !== null)) {
            (e.blockedOn = t),
              Xs(e.priority, function() {
                Ys(r);
              });
            return;
          }
        } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ti(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = Xa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var a = new r.constructor(r.type, r);
        (Da = a), r.target.dispatchEvent(a), (Da = null);
      } else return (t = to(r)), t !== null && Qa(t), (e.blockedOn = r), !1;
      t.shift();
    }
    return !0;
  }
  function Js(e, t, r) {
    ti(e) && r.delete(t);
  }
  function Gm() {
    (Ya = !1),
      tn !== null && ti(tn) && (tn = null),
      nn !== null && ti(nn) && (nn = null),
      rn !== null && ti(rn) && (rn = null),
      Ir.forEach(Js),
      Br.forEach(Js);
  }
  function Hr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Ya ||
        ((Ya = !0),
        o.unstable_scheduleCallback(o.unstable_NormalPriority, Gm)));
  }
  function Wr(e) {
    function t(u) {
      return Hr(u, e);
    }
    if (0 < ei.length) {
      Hr(ei[0], e);
      for (var r = 1; r < ei.length; r++) {
        var a = ei[r];
        a.blockedOn === e && (a.blockedOn = null);
      }
    }
    for (
      tn !== null && Hr(tn, e),
        nn !== null && Hr(nn, e),
        rn !== null && Hr(rn, e),
        Ir.forEach(t),
        Br.forEach(t),
        r = 0;
      r < on.length;
      r++
    )
      (a = on[r]), a.blockedOn === e && (a.blockedOn = null);
    for (; 0 < on.length && ((r = on[0]), r.blockedOn === null); )
      Zs(r), r.blockedOn === null && on.shift();
  }
  var Jn = K.ReactCurrentBatchConfig,
    ni = !0;
  function Xm(e, t, r, a) {
    var u = Pe,
      c = Jn.transition;
    Jn.transition = null;
    try {
      (Pe = 1), Ga(e, t, r, a);
    } finally {
      (Pe = u), (Jn.transition = c);
    }
  }
  function bm(e, t, r, a) {
    var u = Pe,
      c = Jn.transition;
    Jn.transition = null;
    try {
      (Pe = 4), Ga(e, t, r, a);
    } finally {
      (Pe = u), (Jn.transition = c);
    }
  }
  function Ga(e, t, r, a) {
    if (ni) {
      var u = Xa(e, t, r, a);
      if (u === null) dl(e, t, a, ri, r), bs(e, a);
      else if (Ym(u, e, t, r, a)) a.stopPropagation();
      else if ((bs(e, a), t & 4 && -1 < Qm.indexOf(e))) {
        for (; u !== null; ) {
          var c = to(u);
          if (
            (c !== null && Qs(c),
            (c = Xa(e, t, r, a)),
            c === null && dl(e, t, a, ri, r),
            c === u)
          )
            break;
          u = c;
        }
        u !== null && a.stopPropagation();
      } else dl(e, t, a, null, r);
    }
  }
  var ri = null;
  function Xa(e, t, r, a) {
    if (((ri = null), (e = za(a)), (e = Mn(e)), e !== null))
      if (((t = _n(e)), t === null)) e = null;
      else if (((r = t.tag), r === 13)) {
        if (((e = Ds(t)), e !== null)) return e;
        e = null;
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (ri = e), null;
  }
  function qs(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (zm()) {
          case Ha:
            return 1;
          case Hs:
            return 4;
          case Xo:
          case Fm:
            return 16;
          case Ws:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var an = null,
    ba = null,
    oi = null;
  function ec() {
    if (oi) return oi;
    var e,
      t = ba,
      r = t.length,
      a,
      u = "value" in an ? an.value : an.textContent,
      c = u.length;
    for (e = 0; e < r && t[e] === u[e]; e++);
    var p = r - e;
    for (a = 1; a <= p && t[r - a] === u[c - a]; a++);
    return (oi = u.slice(e, 1 < a ? 1 - a : void 0));
  }
  function ii(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function ai() {
    return !0;
  }
  function tc() {
    return !1;
  }
  function ht(e) {
    function t(r, a, u, c, p) {
      (this._reactName = r),
        (this._targetInst = u),
        (this.type = a),
        (this.nativeEvent = c),
        (this.target = p),
        (this.currentTarget = null);
      for (var g in e)
        e.hasOwnProperty(g) && ((r = e[g]), (this[g] = r ? r(c) : c[g]));
      return (
        (this.isDefaultPrevented = (c.defaultPrevented != null
        ? c.defaultPrevented
        : c.returnValue === !1)
          ? ai
          : tc),
        (this.isPropagationStopped = tc),
        this
      );
    }
    return (
      Q(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != "unknown" && (r.returnValue = !1),
            (this.isDefaultPrevented = ai));
        },
        stopPropagation: function() {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
            (this.isPropagationStopped = ai));
        },
        persist: function() {},
        isPersistent: ai,
      }),
      t
    );
  }
  var qn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Za = ht(qn),
    $r = Q({}, qn, { view: 0, detail: 0 }),
    Zm = ht($r),
    Ja,
    qa,
    Kr,
    li = Q({}, $r, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: tl,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Kr &&
              (Kr && e.type === "mousemove"
                ? ((Ja = e.screenX - Kr.screenX), (qa = e.screenY - Kr.screenY))
                : (qa = Ja = 0),
              (Kr = e)),
            Ja);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : qa;
      },
    }),
    nc = ht(li),
    Jm = Q({}, li, { dataTransfer: 0 }),
    qm = ht(Jm),
    eh = Q({}, $r, { relatedTarget: 0 }),
    el = ht(eh),
    th = Q({}, qn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    nh = ht(th),
    rh = Q({}, qn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    oh = ht(rh),
    ih = Q({}, qn, { data: 0 }),
    rc = ht(ih),
    ah = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    lh = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    uh = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function sh(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = uh[e])
      ? !!t[e]
      : !1;
  }
  function tl() {
    return sh;
  }
  var ch = Q({}, $r, {
      key: function(e) {
        if (e.key) {
          var t = ah[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = ii(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? lh[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: tl,
      charCode: function(e) {
        return e.type === "keypress" ? ii(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress"
          ? ii(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    fh = ht(ch),
    dh = Q({}, li, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    oc = ht(dh),
    ph = Q({}, $r, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: tl,
    }),
    vh = ht(ph),
    mh = Q({}, qn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    hh = ht(mh),
    gh = Q({}, li, {
      deltaX: function(e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    yh = ht(gh),
    xh = [9, 13, 27, 32],
    nl = v && "CompositionEvent" in window,
    Qr = null;
  v && "documentMode" in document && (Qr = document.documentMode);
  var wh = v && "TextEvent" in window && !Qr,
    ic = v && (!nl || (Qr && 8 < Qr && 11 >= Qr)),
    ac = " ",
    lc = !1;
  function uc(e, t) {
    switch (e) {
      case "keyup":
        return xh.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function sc(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var er = !1;
  function Sh(e, t) {
    switch (e) {
      case "compositionend":
        return sc(t);
      case "keypress":
        return t.which !== 32 ? null : ((lc = !0), ac);
      case "textInput":
        return (e = t.data), e === ac && lc ? null : e;
      default:
        return null;
    }
  }
  function Ch(e, t) {
    if (er)
      return e === "compositionend" || (!nl && uc(e, t))
        ? ((e = ec()), (oi = ba = an = null), (er = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return ic && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var kh = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function cc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!kh[e.type] : t === "textarea";
  }
  function fc(e, t, r, a) {
    js(a),
      (t = di(t, "onChange")),
      0 < t.length &&
        ((r = new Za("onChange", "change", null, r, a)),
        e.push({ event: r, listeners: t }));
  }
  var Yr = null,
    Gr = null;
  function Eh(e) {
    _c(e, 0);
  }
  function ui(e) {
    var t = ir(e);
    if (jr(t)) return e;
  }
  function Ph(e, t) {
    if (e === "change") return t;
  }
  var dc = !1;
  if (v) {
    var rl;
    if (v) {
      var ol = "oninput" in document;
      if (!ol) {
        var pc = document.createElement("div");
        pc.setAttribute("oninput", "return;"),
          (ol = typeof pc.oninput == "function");
      }
      rl = ol;
    } else rl = !1;
    dc = rl && (!document.documentMode || 9 < document.documentMode);
  }
  function vc() {
    Yr && (Yr.detachEvent("onpropertychange", mc), (Gr = Yr = null));
  }
  function mc(e) {
    if (e.propertyName === "value" && ui(Gr)) {
      var t = [];
      fc(t, Gr, e, za(e)), Os(Eh, t);
    }
  }
  function Th(e, t, r) {
    e === "focusin"
      ? (vc(), (Yr = t), (Gr = r), Yr.attachEvent("onpropertychange", mc))
      : e === "focusout" && vc();
  }
  function Lh(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ui(Gr);
  }
  function Rh(e, t) {
    if (e === "click") return ui(t);
  }
  function _h(e, t) {
    if (e === "input" || e === "change") return ui(t);
  }
  function Mh(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var _t = typeof Object.is == "function" ? Object.is : Mh;
  function Xr(e, t) {
    if (_t(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var r = Object.keys(e),
      a = Object.keys(t);
    if (r.length !== a.length) return !1;
    for (a = 0; a < r.length; a++) {
      var u = r[a];
      if (!h.call(t, u) || !_t(e[u], t[u])) return !1;
    }
    return !0;
  }
  function hc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function gc(e, t) {
    var r = hc(e);
    e = 0;
    for (var a; r; ) {
      if (r.nodeType === 3) {
        if (((a = e + r.textContent.length), e <= t && a >= t))
          return { node: r, offset: t - e };
        e = a;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = hc(r);
    }
  }
  function yc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? yc(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function xc() {
    for (var e = window, t = qt(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = qt(e.document);
    }
    return t;
  }
  function il(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function jh(e) {
    var t = xc(),
      r = e.focusedElem,
      a = e.selectionRange;
    if (
      t !== r &&
      r &&
      r.ownerDocument &&
      yc(r.ownerDocument.documentElement, r)
    ) {
      if (a !== null && il(r)) {
        if (
          ((t = a.start),
          (e = a.end),
          e === void 0 && (e = t),
          "selectionStart" in r)
        )
          (r.selectionStart = t),
            (r.selectionEnd = Math.min(e, r.value.length));
        else if (
          ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var u = r.textContent.length,
            c = Math.min(a.start, u);
          (a = a.end === void 0 ? c : Math.min(a.end, u)),
            !e.extend && c > a && ((u = a), (a = c), (c = u)),
            (u = gc(r, c));
          var p = gc(r, a);
          u &&
            p &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== u.node ||
              e.anchorOffset !== u.offset ||
              e.focusNode !== p.node ||
              e.focusOffset !== p.offset) &&
            ((t = t.createRange()),
            t.setStart(u.node, u.offset),
            e.removeAllRanges(),
            c > a
              ? (e.addRange(t), e.extend(p.node, p.offset))
              : (t.setEnd(p.node, p.offset), e.addRange(t)));
        }
      }
      for (t = [], e = r; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
        (e = t[r]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var Nh = v && "documentMode" in document && 11 >= document.documentMode,
    tr = null,
    al = null,
    br = null,
    ll = !1;
  function wc(e, t, r) {
    var a =
      r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    ll ||
      tr == null ||
      tr !== qt(a) ||
      ((a = tr),
      "selectionStart" in a && il(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (br && Xr(br, a)) ||
        ((br = a),
        (a = di(al, "onSelect")),
        0 < a.length &&
          ((t = new Za("onSelect", "select", null, t, r)),
          e.push({ event: t, listeners: a }),
          (t.target = tr))));
  }
  function si(e, t) {
    var r = {};
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r["Webkit" + e] = "webkit" + t),
      (r["Moz" + e] = "moz" + t),
      r
    );
  }
  var nr = {
      animationend: si("Animation", "AnimationEnd"),
      animationiteration: si("Animation", "AnimationIteration"),
      animationstart: si("Animation", "AnimationStart"),
      transitionend: si("Transition", "TransitionEnd"),
    },
    ul = {},
    Sc = {};
  v &&
    ((Sc = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete nr.animationend.animation,
      delete nr.animationiteration.animation,
      delete nr.animationstart.animation),
    "TransitionEvent" in window || delete nr.transitionend.transition);
  function ci(e) {
    if (ul[e]) return ul[e];
    if (!nr[e]) return e;
    var t = nr[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in Sc) return (ul[e] = t[r]);
    return e;
  }
  var Cc = ci("animationend"),
    kc = ci("animationiteration"),
    Ec = ci("animationstart"),
    Pc = ci("transitionend"),
    Tc = new Map(),
    Lc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
  function ln(e, t) {
    Tc.set(e, t), f(t, [e]);
  }
  for (var sl = 0; sl < Lc.length; sl++) {
    var cl = Lc[sl],
      Ah = cl.toLowerCase(),
      Vh = cl[0].toUpperCase() + cl.slice(1);
    ln(Ah, "on" + Vh);
  }
  ln(Cc, "onAnimationEnd"),
    ln(kc, "onAnimationIteration"),
    ln(Ec, "onAnimationStart"),
    ln("dblclick", "onDoubleClick"),
    ln("focusin", "onFocus"),
    ln("focusout", "onBlur"),
    ln(Pc, "onTransitionEnd"),
    d("onMouseEnter", ["mouseout", "mouseover"]),
    d("onMouseLeave", ["mouseout", "mouseover"]),
    d("onPointerEnter", ["pointerout", "pointerover"]),
    d("onPointerLeave", ["pointerout", "pointerover"]),
    f(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    f(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    f(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    f(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    f(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Zr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
    Oh = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Zr)
    );
  function Rc(e, t, r) {
    var a = e.type || "unknown-event";
    (e.currentTarget = r), Am(a, t, void 0, e), (e.currentTarget = null);
  }
  function _c(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var a = e[r],
        u = a.event;
      a = a.listeners;
      e: {
        var c = void 0;
        if (t)
          for (var p = a.length - 1; 0 <= p; p--) {
            var g = a[p],
              w = g.instance,
              N = g.currentTarget;
            if (((g = g.listener), w !== c && u.isPropagationStopped()))
              break e;
            Rc(u, g, N), (c = w);
          }
        else
          for (p = 0; p < a.length; p++) {
            if (
              ((g = a[p]),
              (w = g.instance),
              (N = g.currentTarget),
              (g = g.listener),
              w !== c && u.isPropagationStopped())
            )
              break e;
            Rc(u, g, N), (c = w);
          }
      }
    }
    if (Go) throw ((e = Ua), (Go = !1), (Ua = null), e);
  }
  function _e(e, t) {
    var r = t[yl];
    r === void 0 && (r = t[yl] = new Set());
    var a = e + "__bubble";
    r.has(a) || (Mc(t, e, 2, !1), r.add(a));
  }
  function fl(e, t, r) {
    var a = 0;
    t && (a |= 4), Mc(r, e, a, t);
  }
  var fi =
    "_reactListening" +
    Math.random()
      .toString(36)
      .slice(2);
  function Jr(e) {
    if (!e[fi]) {
      (e[fi] = !0),
        l.forEach(function(r) {
          r !== "selectionchange" && (Oh.has(r) || fl(r, !1, e), fl(r, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[fi] || ((t[fi] = !0), fl("selectionchange", !1, t));
    }
  }
  function Mc(e, t, r, a) {
    switch (qs(t)) {
      case 1:
        var u = Xm;
        break;
      case 4:
        u = bm;
        break;
      default:
        u = Ga;
    }
    (r = u.bind(null, t, r, e)),
      (u = void 0),
      !Ba ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (u = !0),
      a
        ? u !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: u })
          : e.addEventListener(t, r, !0)
        : u !== void 0
        ? e.addEventListener(t, r, { passive: u })
        : e.addEventListener(t, r, !1);
  }
  function dl(e, t, r, a, u) {
    var c = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return;
        var p = a.tag;
        if (p === 3 || p === 4) {
          var g = a.stateNode.containerInfo;
          if (g === u || (g.nodeType === 8 && g.parentNode === u)) break;
          if (p === 4)
            for (p = a.return; p !== null; ) {
              var w = p.tag;
              if (
                (w === 3 || w === 4) &&
                ((w = p.stateNode.containerInfo),
                w === u || (w.nodeType === 8 && w.parentNode === u))
              )
                return;
              p = p.return;
            }
          for (; g !== null; ) {
            if (((p = Mn(g)), p === null)) return;
            if (((w = p.tag), w === 5 || w === 6)) {
              a = c = p;
              continue e;
            }
            g = g.parentNode;
          }
        }
        a = a.return;
      }
    Os(function() {
      var N = c,
        z = za(r),
        I = [];
      e: {
        var O = Tc.get(e);
        if (O !== void 0) {
          var X = Za,
            ee = e;
          switch (e) {
            case "keypress":
              if (ii(r) === 0) break e;
            case "keydown":
            case "keyup":
              X = fh;
              break;
            case "focusin":
              (ee = "focus"), (X = el);
              break;
            case "focusout":
              (ee = "blur"), (X = el);
              break;
            case "beforeblur":
            case "afterblur":
              X = el;
              break;
            case "click":
              if (r.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              X = nc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              X = qm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              X = vh;
              break;
            case Cc:
            case kc:
            case Ec:
              X = nh;
              break;
            case Pc:
              X = hh;
              break;
            case "scroll":
              X = Zm;
              break;
            case "wheel":
              X = yh;
              break;
            case "copy":
            case "cut":
            case "paste":
              X = oh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              X = oc;
          }
          var te = (t & 4) !== 0,
            Be = !te && e === "scroll",
            T = te ? (O !== null ? O + "Capture" : null) : O;
          te = [];
          for (var C = N, _; C !== null; ) {
            _ = C;
            var H = _.stateNode;
            if (
              (_.tag === 5 &&
                H !== null &&
                ((_ = H),
                T !== null &&
                  ((H = Vr(C, T)), H != null && te.push(qr(C, H, _)))),
              Be)
            )
              break;
            C = C.return;
          }
          0 < te.length &&
            ((O = new X(O, ee, null, r, z)),
            I.push({ event: O, listeners: te }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((O = e === "mouseover" || e === "pointerover"),
            (X = e === "mouseout" || e === "pointerout"),
            O &&
              r !== Da &&
              (ee = r.relatedTarget || r.fromElement) &&
              (Mn(ee) || ee[Wt]))
          )
            break e;
          if (
            (X || O) &&
            ((O =
              z.window === z
                ? z
                : (O = z.ownerDocument)
                ? O.defaultView || O.parentWindow
                : window),
            X
              ? ((ee = r.relatedTarget || r.toElement),
                (X = N),
                (ee = ee ? Mn(ee) : null),
                ee !== null &&
                  ((Be = _n(ee)),
                  ee !== Be || (ee.tag !== 5 && ee.tag !== 6)) &&
                  (ee = null))
              : ((X = null), (ee = N)),
            X !== ee)
          ) {
            if (
              ((te = nc),
              (H = "onMouseLeave"),
              (T = "onMouseEnter"),
              (C = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((te = oc),
                (H = "onPointerLeave"),
                (T = "onPointerEnter"),
                (C = "pointer")),
              (Be = X == null ? O : ir(X)),
              (_ = ee == null ? O : ir(ee)),
              (O = new te(H, C + "leave", X, r, z)),
              (O.target = Be),
              (O.relatedTarget = _),
              (H = null),
              Mn(z) === N &&
                ((te = new te(T, C + "enter", ee, r, z)),
                (te.target = _),
                (te.relatedTarget = Be),
                (H = te)),
              (Be = H),
              X && ee)
            )
              t: {
                for (te = X, T = ee, C = 0, _ = te; _; _ = rr(_)) C++;
                for (_ = 0, H = T; H; H = rr(H)) _++;
                for (; 0 < C - _; ) (te = rr(te)), C--;
                for (; 0 < _ - C; ) (T = rr(T)), _--;
                for (; C--; ) {
                  if (te === T || (T !== null && te === T.alternate)) break t;
                  (te = rr(te)), (T = rr(T));
                }
                te = null;
              }
            else te = null;
            X !== null && jc(I, O, X, te, !1),
              ee !== null && Be !== null && jc(I, Be, ee, te, !0);
          }
        }
        e: {
          if (
            ((O = N ? ir(N) : window),
            (X = O.nodeName && O.nodeName.toLowerCase()),
            X === "select" || (X === "input" && O.type === "file"))
          )
            var ne = Ph;
          else if (cc(O))
            if (dc) ne = _h;
            else {
              ne = Lh;
              var ae = Th;
            }
          else
            (X = O.nodeName) &&
              X.toLowerCase() === "input" &&
              (O.type === "checkbox" || O.type === "radio") &&
              (ne = Rh);
          if (ne && (ne = ne(e, N))) {
            fc(I, ne, r, z);
            break e;
          }
          ae && ae(e, O, N),
            e === "focusout" &&
              (ae = O._wrapperState) &&
              ae.controlled &&
              O.type === "number" &&
              Ue(O, "number", O.value);
        }
        switch (((ae = N ? ir(N) : window), e)) {
          case "focusin":
            (cc(ae) || ae.contentEditable === "true") &&
              ((tr = ae), (al = N), (br = null));
            break;
          case "focusout":
            br = al = tr = null;
            break;
          case "mousedown":
            ll = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (ll = !1), wc(I, r, z);
            break;
          case "selectionchange":
            if (Nh) break;
          case "keydown":
          case "keyup":
            wc(I, r, z);
        }
        var le;
        if (nl)
          e: {
            switch (e) {
              case "compositionstart":
                var se = "onCompositionStart";
                break e;
              case "compositionend":
                se = "onCompositionEnd";
                break e;
              case "compositionupdate":
                se = "onCompositionUpdate";
                break e;
            }
            se = void 0;
          }
        else
          er
            ? uc(e, r) && (se = "onCompositionEnd")
            : e === "keydown" &&
              r.keyCode === 229 &&
              (se = "onCompositionStart");
        se &&
          (ic &&
            r.locale !== "ko" &&
            (er || se !== "onCompositionStart"
              ? se === "onCompositionEnd" && er && (le = ec())
              : ((an = z),
                (ba = "value" in an ? an.value : an.textContent),
                (er = !0))),
          (ae = di(N, se)),
          0 < ae.length &&
            ((se = new rc(se, e, null, r, z)),
            I.push({ event: se, listeners: ae }),
            le
              ? (se.data = le)
              : ((le = sc(r)), le !== null && (se.data = le)))),
          (le = wh ? Sh(e, r) : Ch(e, r)) &&
            ((N = di(N, "onBeforeInput")),
            0 < N.length &&
              ((z = new rc("onBeforeInput", "beforeinput", null, r, z)),
              I.push({ event: z, listeners: N }),
              (z.data = le)));
      }
      _c(I, t);
    });
  }
  function qr(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function di(e, t) {
    for (var r = t + "Capture", a = []; e !== null; ) {
      var u = e,
        c = u.stateNode;
      u.tag === 5 &&
        c !== null &&
        ((u = c),
        (c = Vr(e, r)),
        c != null && a.unshift(qr(e, c, u)),
        (c = Vr(e, t)),
        c != null && a.push(qr(e, c, u))),
        (e = e.return);
    }
    return a;
  }
  function rr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function jc(e, t, r, a, u) {
    for (var c = t._reactName, p = []; r !== null && r !== a; ) {
      var g = r,
        w = g.alternate,
        N = g.stateNode;
      if (w !== null && w === a) break;
      g.tag === 5 &&
        N !== null &&
        ((g = N),
        u
          ? ((w = Vr(r, c)), w != null && p.unshift(qr(r, w, g)))
          : u || ((w = Vr(r, c)), w != null && p.push(qr(r, w, g)))),
        (r = r.return);
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  var Dh = /\r\n?/g,
    zh = /\u0000|\uFFFD/g;
  function Nc(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Dh,
        `
`
      )
      .replace(zh, "");
  }
  function pi(e, t, r) {
    if (((t = Nc(t)), Nc(e) !== t && r)) throw Error(i(425));
  }
  function vi() {}
  var pl = null,
    vl = null;
  function ml(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var hl = typeof setTimeout == "function" ? setTimeout : void 0,
    Fh = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ac = typeof Promise == "function" ? Promise : void 0,
    Ih =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ac < "u"
        ? function(e) {
            return Ac.resolve(null)
              .then(e)
              .catch(Bh);
          }
        : hl;
  function Bh(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function gl(e, t) {
    var r = t,
      a = 0;
    do {
      var u = r.nextSibling;
      if ((e.removeChild(r), u && u.nodeType === 8))
        if (((r = u.data), r === "/$")) {
          if (a === 0) {
            e.removeChild(u), Wr(t);
            return;
          }
          a--;
        } else (r !== "$" && r !== "$?" && r !== "$!") || a++;
      r = u;
    } while (r);
    Wr(t);
  }
  function un(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Vc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "$" || r === "$!" || r === "$?") {
          if (t === 0) return e;
          t--;
        } else r === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var or = Math.random()
      .toString(36)
      .slice(2),
    zt = "__reactFiber$" + or,
    eo = "__reactProps$" + or,
    Wt = "__reactContainer$" + or,
    yl = "__reactEvents$" + or,
    Uh = "__reactListeners$" + or,
    Hh = "__reactHandles$" + or;
  function Mn(e) {
    var t = e[zt];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if ((t = r[Wt] || r[zt])) {
        if (
          ((r = t.alternate),
          t.child !== null || (r !== null && r.child !== null))
        )
          for (e = Vc(e); e !== null; ) {
            if ((r = e[zt])) return r;
            e = Vc(e);
          }
        return t;
      }
      (e = r), (r = e.parentNode);
    }
    return null;
  }
  function to(e) {
    return (
      (e = e[zt] || e[Wt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function ir(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(i(33));
  }
  function mi(e) {
    return e[eo] || null;
  }
  var xl = [],
    ar = -1;
  function sn(e) {
    return { current: e };
  }
  function Me(e) {
    0 > ar || ((e.current = xl[ar]), (xl[ar] = null), ar--);
  }
  function Re(e, t) {
    ar++, (xl[ar] = e.current), (e.current = t);
  }
  var cn = {},
    et = sn(cn),
    ut = sn(!1),
    jn = cn;
  function lr(e, t) {
    var r = e.type.contextTypes;
    if (!r) return cn;
    var a = e.stateNode;
    if (a && a.__reactInternalMemoizedUnmaskedChildContext === t)
      return a.__reactInternalMemoizedMaskedChildContext;
    var u = {},
      c;
    for (c in r) u[c] = t[c];
    return (
      a &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      u
    );
  }
  function st(e) {
    return (e = e.childContextTypes), e != null;
  }
  function hi() {
    Me(ut), Me(et);
  }
  function Oc(e, t, r) {
    if (et.current !== cn) throw Error(i(168));
    Re(et, t), Re(ut, r);
  }
  function Dc(e, t, r) {
    var a = e.stateNode;
    if (((t = t.childContextTypes), typeof a.getChildContext != "function"))
      return r;
    a = a.getChildContext();
    for (var u in a) if (!(u in t)) throw Error(i(108, Te(e) || "Unknown", u));
    return Q({}, r, a);
  }
  function gi(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        cn),
      (jn = et.current),
      Re(et, e),
      Re(ut, ut.current),
      !0
    );
  }
  function zc(e, t, r) {
    var a = e.stateNode;
    if (!a) throw Error(i(169));
    r
      ? ((e = Dc(e, t, jn)),
        (a.__reactInternalMemoizedMergedChildContext = e),
        Me(ut),
        Me(et),
        Re(et, e))
      : Me(ut),
      Re(ut, r);
  }
  var $t = null,
    yi = !1,
    wl = !1;
  function Fc(e) {
    $t === null ? ($t = [e]) : $t.push(e);
  }
  function Wh(e) {
    (yi = !0), Fc(e);
  }
  function fn() {
    if (!wl && $t !== null) {
      wl = !0;
      var e = 0,
        t = Pe;
      try {
        var r = $t;
        for (Pe = 1; e < r.length; e++) {
          var a = r[e];
          do a = a(!0);
          while (a !== null);
        }
        ($t = null), (yi = !1);
      } catch (u) {
        throw ($t !== null && ($t = $t.slice(e + 1)), Bs(Ha, fn), u);
      } finally {
        (Pe = t), (wl = !1);
      }
    }
    return null;
  }
  var ur = [],
    sr = 0,
    xi = null,
    wi = 0,
    St = [],
    Ct = 0,
    Nn = null,
    Kt = 1,
    Qt = "";
  function An(e, t) {
    (ur[sr++] = wi), (ur[sr++] = xi), (xi = e), (wi = t);
  }
  function Ic(e, t, r) {
    (St[Ct++] = Kt), (St[Ct++] = Qt), (St[Ct++] = Nn), (Nn = e);
    var a = Kt;
    e = Qt;
    var u = 32 - Rt(a) - 1;
    (a &= ~(1 << u)), (r += 1);
    var c = 32 - Rt(t) + u;
    if (30 < c) {
      var p = u - (u % 5);
      (c = (a & ((1 << p) - 1)).toString(32)),
        (a >>= p),
        (u -= p),
        (Kt = (1 << (32 - Rt(t) + u)) | (r << u) | a),
        (Qt = c + e);
    } else (Kt = (1 << c) | (r << u) | a), (Qt = e);
  }
  function Sl(e) {
    e.return !== null && (An(e, 1), Ic(e, 1, 0));
  }
  function Cl(e) {
    for (; e === xi; )
      (xi = ur[--sr]), (ur[sr] = null), (wi = ur[--sr]), (ur[sr] = null);
    for (; e === Nn; )
      (Nn = St[--Ct]),
        (St[Ct] = null),
        (Qt = St[--Ct]),
        (St[Ct] = null),
        (Kt = St[--Ct]),
        (St[Ct] = null);
  }
  var gt = null,
    yt = null,
    je = !1,
    Mt = null;
  function Bc(e, t) {
    var r = Tt(5, null, null, 0);
    (r.elementType = "DELETED"),
      (r.stateNode = t),
      (r.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
  }
  function Uc(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return (
          (t =
            t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (gt = e), (yt = un(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (gt = e), (yt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((r = Nn !== null ? { id: Kt, overflow: Qt } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: r,
                retryLane: 1073741824,
              }),
              (r = Tt(18, null, null, 0)),
              (r.stateNode = t),
              (r.return = e),
              (e.child = r),
              (gt = e),
              (yt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function kl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function El(e) {
    if (je) {
      var t = yt;
      if (t) {
        var r = t;
        if (!Uc(e, t)) {
          if (kl(e)) throw Error(i(418));
          t = un(r.nextSibling);
          var a = gt;
          t && Uc(e, t)
            ? Bc(a, r)
            : ((e.flags = (e.flags & -4097) | 2), (je = !1), (gt = e));
        }
      } else {
        if (kl(e)) throw Error(i(418));
        (e.flags = (e.flags & -4097) | 2), (je = !1), (gt = e);
      }
    }
  }
  function Hc(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    gt = e;
  }
  function Si(e) {
    if (e !== gt) return !1;
    if (!je) return Hc(e), (je = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !ml(e.type, e.memoizedProps))),
      t && (t = yt))
    ) {
      if (kl(e)) throw (Wc(), Error(i(418)));
      for (; t; ) Bc(e, t), (t = un(t.nextSibling));
    }
    if ((Hc(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(i(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === "/$") {
              if (t === 0) {
                yt = un(e.nextSibling);
                break e;
              }
              t--;
            } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        yt = null;
      }
    } else yt = gt ? un(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Wc() {
    for (var e = yt; e; ) e = un(e.nextSibling);
  }
  function cr() {
    (yt = gt = null), (je = !1);
  }
  function Pl(e) {
    Mt === null ? (Mt = [e]) : Mt.push(e);
  }
  var $h = K.ReactCurrentBatchConfig;
  function no(e, t, r) {
    if (
      ((e = r.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (r._owner) {
        if (((r = r._owner), r)) {
          if (r.tag !== 1) throw Error(i(309));
          var a = r.stateNode;
        }
        if (!a) throw Error(i(147, e));
        var u = a,
          c = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === c
          ? t.ref
          : ((t = function(p) {
              var g = u.refs;
              p === null ? delete g[c] : (g[c] = p);
            }),
            (t._stringRef = c),
            t);
      }
      if (typeof e != "string") throw Error(i(284));
      if (!r._owner) throw Error(i(290, e));
    }
    return e;
  }
  function Ci(e, t) {
    throw ((e = Object.prototype.toString.call(t)),
    Error(
      i(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ));
  }
  function $c(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Kc(e) {
    function t(T, C) {
      if (e) {
        var _ = T.deletions;
        _ === null ? ((T.deletions = [C]), (T.flags |= 16)) : _.push(C);
      }
    }
    function r(T, C) {
      if (!e) return null;
      for (; C !== null; ) t(T, C), (C = C.sibling);
      return null;
    }
    function a(T, C) {
      for (T = new Map(); C !== null; )
        C.key !== null ? T.set(C.key, C) : T.set(C.index, C), (C = C.sibling);
      return T;
    }
    function u(T, C) {
      return (T = xn(T, C)), (T.index = 0), (T.sibling = null), T;
    }
    function c(T, C, _) {
      return (
        (T.index = _),
        e
          ? ((_ = T.alternate),
            _ !== null
              ? ((_ = _.index), _ < C ? ((T.flags |= 2), C) : _)
              : ((T.flags |= 2), C))
          : ((T.flags |= 1048576), C)
      );
    }
    function p(T) {
      return e && T.alternate === null && (T.flags |= 2), T;
    }
    function g(T, C, _, H) {
      return C === null || C.tag !== 6
        ? ((C = hu(_, T.mode, H)), (C.return = T), C)
        : ((C = u(C, _)), (C.return = T), C);
    }
    function w(T, C, _, H) {
      var ne = _.type;
      return ne === b
        ? z(T, C, _.props.children, H, _.key)
        : C !== null &&
          (C.elementType === ne ||
            (typeof ne == "object" &&
              ne !== null &&
              ne.$$typeof === de &&
              $c(ne) === C.type))
        ? ((H = u(C, _.props)), (H.ref = no(T, C, _)), (H.return = T), H)
        : ((H = Qi(_.type, _.key, _.props, null, T.mode, H)),
          (H.ref = no(T, C, _)),
          (H.return = T),
          H);
    }
    function N(T, C, _, H) {
      return C === null ||
        C.tag !== 4 ||
        C.stateNode.containerInfo !== _.containerInfo ||
        C.stateNode.implementation !== _.implementation
        ? ((C = gu(_, T.mode, H)), (C.return = T), C)
        : ((C = u(C, _.children || [])), (C.return = T), C);
    }
    function z(T, C, _, H, ne) {
      return C === null || C.tag !== 7
        ? ((C = Un(_, T.mode, H, ne)), (C.return = T), C)
        : ((C = u(C, _)), (C.return = T), C);
    }
    function I(T, C, _) {
      if ((typeof C == "string" && C !== "") || typeof C == "number")
        return (C = hu("" + C, T.mode, _)), (C.return = T), C;
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case $:
            return (
              (_ = Qi(C.type, C.key, C.props, null, T.mode, _)),
              (_.ref = no(T, null, C)),
              (_.return = T),
              _
            );
          case B:
            return (C = gu(C, T.mode, _)), (C.return = T), C;
          case de:
            var H = C._init;
            return I(T, H(C._payload), _);
        }
        if (Ye(C) || oe(C))
          return (C = Un(C, T.mode, _, null)), (C.return = T), C;
        Ci(T, C);
      }
      return null;
    }
    function O(T, C, _, H) {
      var ne = C !== null ? C.key : null;
      if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
        return ne !== null ? null : g(T, C, "" + _, H);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case $:
            return _.key === ne ? w(T, C, _, H) : null;
          case B:
            return _.key === ne ? N(T, C, _, H) : null;
          case de:
            return (ne = _._init), O(T, C, ne(_._payload), H);
        }
        if (Ye(_) || oe(_)) return ne !== null ? null : z(T, C, _, H, null);
        Ci(T, _);
      }
      return null;
    }
    function X(T, C, _, H, ne) {
      if ((typeof H == "string" && H !== "") || typeof H == "number")
        return (T = T.get(_) || null), g(C, T, "" + H, ne);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case $:
            return (
              (T = T.get(H.key === null ? _ : H.key) || null), w(C, T, H, ne)
            );
          case B:
            return (
              (T = T.get(H.key === null ? _ : H.key) || null), N(C, T, H, ne)
            );
          case de:
            var ae = H._init;
            return X(T, C, _, ae(H._payload), ne);
        }
        if (Ye(H) || oe(H)) return (T = T.get(_) || null), z(C, T, H, ne, null);
        Ci(C, H);
      }
      return null;
    }
    function ee(T, C, _, H) {
      for (
        var ne = null, ae = null, le = C, se = (C = 0), be = null;
        le !== null && se < _.length;
        se++
      ) {
        le.index > se ? ((be = le), (le = null)) : (be = le.sibling);
        var ke = O(T, le, _[se], H);
        if (ke === null) {
          le === null && (le = be);
          break;
        }
        e && le && ke.alternate === null && t(T, le),
          (C = c(ke, C, se)),
          ae === null ? (ne = ke) : (ae.sibling = ke),
          (ae = ke),
          (le = be);
      }
      if (se === _.length) return r(T, le), je && An(T, se), ne;
      if (le === null) {
        for (; se < _.length; se++)
          (le = I(T, _[se], H)),
            le !== null &&
              ((C = c(le, C, se)),
              ae === null ? (ne = le) : (ae.sibling = le),
              (ae = le));
        return je && An(T, se), ne;
      }
      for (le = a(T, le); se < _.length; se++)
        (be = X(le, T, se, _[se], H)),
          be !== null &&
            (e &&
              be.alternate !== null &&
              le.delete(be.key === null ? se : be.key),
            (C = c(be, C, se)),
            ae === null ? (ne = be) : (ae.sibling = be),
            (ae = be));
      return (
        e &&
          le.forEach(function(wn) {
            return t(T, wn);
          }),
        je && An(T, se),
        ne
      );
    }
    function te(T, C, _, H) {
      var ne = oe(_);
      if (typeof ne != "function") throw Error(i(150));
      if (((_ = ne.call(_)), _ == null)) throw Error(i(151));
      for (
        var ae = (ne = null), le = C, se = (C = 0), be = null, ke = _.next();
        le !== null && !ke.done;
        se++, ke = _.next()
      ) {
        le.index > se ? ((be = le), (le = null)) : (be = le.sibling);
        var wn = O(T, le, ke.value, H);
        if (wn === null) {
          le === null && (le = be);
          break;
        }
        e && le && wn.alternate === null && t(T, le),
          (C = c(wn, C, se)),
          ae === null ? (ne = wn) : (ae.sibling = wn),
          (ae = wn),
          (le = be);
      }
      if (ke.done) return r(T, le), je && An(T, se), ne;
      if (le === null) {
        for (; !ke.done; se++, ke = _.next())
          (ke = I(T, ke.value, H)),
            ke !== null &&
              ((C = c(ke, C, se)),
              ae === null ? (ne = ke) : (ae.sibling = ke),
              (ae = ke));
        return je && An(T, se), ne;
      }
      for (le = a(T, le); !ke.done; se++, ke = _.next())
        (ke = X(le, T, se, ke.value, H)),
          ke !== null &&
            (e &&
              ke.alternate !== null &&
              le.delete(ke.key === null ? se : ke.key),
            (C = c(ke, C, se)),
            ae === null ? (ne = ke) : (ae.sibling = ke),
            (ae = ke));
      return (
        e &&
          le.forEach(function(k0) {
            return t(T, k0);
          }),
        je && An(T, se),
        ne
      );
    }
    function Be(T, C, _, H) {
      if (
        (typeof _ == "object" &&
          _ !== null &&
          _.type === b &&
          _.key === null &&
          (_ = _.props.children),
        typeof _ == "object" && _ !== null)
      ) {
        switch (_.$$typeof) {
          case $:
            e: {
              for (var ne = _.key, ae = C; ae !== null; ) {
                if (ae.key === ne) {
                  if (((ne = _.type), ne === b)) {
                    if (ae.tag === 7) {
                      r(T, ae.sibling),
                        (C = u(ae, _.props.children)),
                        (C.return = T),
                        (T = C);
                      break e;
                    }
                  } else if (
                    ae.elementType === ne ||
                    (typeof ne == "object" &&
                      ne !== null &&
                      ne.$$typeof === de &&
                      $c(ne) === ae.type)
                  ) {
                    r(T, ae.sibling),
                      (C = u(ae, _.props)),
                      (C.ref = no(T, ae, _)),
                      (C.return = T),
                      (T = C);
                    break e;
                  }
                  r(T, ae);
                  break;
                } else t(T, ae);
                ae = ae.sibling;
              }
              _.type === b
                ? ((C = Un(_.props.children, T.mode, H, _.key)),
                  (C.return = T),
                  (T = C))
                : ((H = Qi(_.type, _.key, _.props, null, T.mode, H)),
                  (H.ref = no(T, C, _)),
                  (H.return = T),
                  (T = H));
            }
            return p(T);
          case B:
            e: {
              for (ae = _.key; C !== null; ) {
                if (C.key === ae)
                  if (
                    C.tag === 4 &&
                    C.stateNode.containerInfo === _.containerInfo &&
                    C.stateNode.implementation === _.implementation
                  ) {
                    r(T, C.sibling),
                      (C = u(C, _.children || [])),
                      (C.return = T),
                      (T = C);
                    break e;
                  } else {
                    r(T, C);
                    break;
                  }
                else t(T, C);
                C = C.sibling;
              }
              (C = gu(_, T.mode, H)), (C.return = T), (T = C);
            }
            return p(T);
          case de:
            return (ae = _._init), Be(T, C, ae(_._payload), H);
        }
        if (Ye(_)) return ee(T, C, _, H);
        if (oe(_)) return te(T, C, _, H);
        Ci(T, _);
      }
      return (typeof _ == "string" && _ !== "") || typeof _ == "number"
        ? ((_ = "" + _),
          C !== null && C.tag === 6
            ? (r(T, C.sibling), (C = u(C, _)), (C.return = T), (T = C))
            : (r(T, C), (C = hu(_, T.mode, H)), (C.return = T), (T = C)),
          p(T))
        : r(T, C);
    }
    return Be;
  }
  var fr = Kc(!0),
    Qc = Kc(!1),
    ki = sn(null),
    Ei = null,
    dr = null,
    Tl = null;
  function Ll() {
    Tl = dr = Ei = null;
  }
  function Rl(e) {
    var t = ki.current;
    Me(ki), (e._currentValue = t);
  }
  function _l(e, t, r) {
    for (; e !== null; ) {
      var a = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        e === r)
      )
        break;
      e = e.return;
    }
  }
  function pr(e, t) {
    (Ei = e),
      (Tl = dr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (ct = !0), (e.firstContext = null));
  }
  function kt(e) {
    var t = e._currentValue;
    if (Tl !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), dr === null)) {
        if (Ei === null) throw Error(i(308));
        (dr = e), (Ei.dependencies = { lanes: 0, firstContext: e });
      } else dr = dr.next = e;
    return t;
  }
  var Vn = null;
  function Ml(e) {
    Vn === null ? (Vn = [e]) : Vn.push(e);
  }
  function Yc(e, t, r, a) {
    var u = t.interleaved;
    return (
      u === null ? ((r.next = r), Ml(t)) : ((r.next = u.next), (u.next = r)),
      (t.interleaved = r),
      Yt(e, a)
    );
  }
  function Yt(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (r = e.alternate),
        r !== null && (r.childLanes |= t),
        (r = e),
        (e = e.return);
    return r.tag === 3 ? r.stateNode : null;
  }
  var dn = !1;
  function jl(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Gc(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Gt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function pn(e, t, r) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (we & 2) !== 0)) {
      var u = a.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (a.pending = t),
        Yt(e, r)
      );
    }
    return (
      (u = a.interleaved),
      u === null ? ((t.next = t), Ml(a)) : ((t.next = u.next), (u.next = t)),
      (a.interleaved = t),
      Yt(e, r)
    );
  }
  function Pi(e, t, r) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
    ) {
      var a = t.lanes;
      (a &= e.pendingLanes), (r |= a), (t.lanes = r), Ka(e, r);
    }
  }
  function Xc(e, t) {
    var r = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), r === a)) {
      var u = null,
        c = null;
      if (((r = r.firstBaseUpdate), r !== null)) {
        do {
          var p = {
            eventTime: r.eventTime,
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null,
          };
          c === null ? (u = c = p) : (c = c.next = p), (r = r.next);
        } while (r !== null);
        c === null ? (u = c = t) : (c = c.next = t);
      } else u = c = t;
      (r = {
        baseState: a.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: c,
        shared: a.shared,
        effects: a.effects,
      }),
        (e.updateQueue = r);
      return;
    }
    (e = r.lastBaseUpdate),
      e === null ? (r.firstBaseUpdate = t) : (e.next = t),
      (r.lastBaseUpdate = t);
  }
  function Ti(e, t, r, a) {
    var u = e.updateQueue;
    dn = !1;
    var c = u.firstBaseUpdate,
      p = u.lastBaseUpdate,
      g = u.shared.pending;
    if (g !== null) {
      u.shared.pending = null;
      var w = g,
        N = w.next;
      (w.next = null), p === null ? (c = N) : (p.next = N), (p = w);
      var z = e.alternate;
      z !== null &&
        ((z = z.updateQueue),
        (g = z.lastBaseUpdate),
        g !== p &&
          (g === null ? (z.firstBaseUpdate = N) : (g.next = N),
          (z.lastBaseUpdate = w)));
    }
    if (c !== null) {
      var I = u.baseState;
      (p = 0), (z = N = w = null), (g = c);
      do {
        var O = g.lane,
          X = g.eventTime;
        if ((a & O) === O) {
          z !== null &&
            (z = z.next = {
              eventTime: X,
              lane: 0,
              tag: g.tag,
              payload: g.payload,
              callback: g.callback,
              next: null,
            });
          e: {
            var ee = e,
              te = g;
            switch (((O = t), (X = r), te.tag)) {
              case 1:
                if (((ee = te.payload), typeof ee == "function")) {
                  I = ee.call(X, I, O);
                  break e;
                }
                I = ee;
                break e;
              case 3:
                ee.flags = (ee.flags & -65537) | 128;
              case 0:
                if (
                  ((ee = te.payload),
                  (O = typeof ee == "function" ? ee.call(X, I, O) : ee),
                  O == null)
                )
                  break e;
                I = Q({}, I, O);
                break e;
              case 2:
                dn = !0;
            }
          }
          g.callback !== null &&
            g.lane !== 0 &&
            ((e.flags |= 64),
            (O = u.effects),
            O === null ? (u.effects = [g]) : O.push(g));
        } else
          (X = {
            eventTime: X,
            lane: O,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null,
          }),
            z === null ? ((N = z = X), (w = I)) : (z = z.next = X),
            (p |= O);
        if (((g = g.next), g === null)) {
          if (((g = u.shared.pending), g === null)) break;
          (O = g),
            (g = O.next),
            (O.next = null),
            (u.lastBaseUpdate = O),
            (u.shared.pending = null);
        }
      } while (!0);
      if (
        (z === null && (w = I),
        (u.baseState = w),
        (u.firstBaseUpdate = N),
        (u.lastBaseUpdate = z),
        (t = u.shared.interleaved),
        t !== null)
      ) {
        u = t;
        do (p |= u.lane), (u = u.next);
        while (u !== t);
      } else c === null && (u.shared.lanes = 0);
      (zn |= p), (e.lanes = p), (e.memoizedState = I);
    }
  }
  function bc(e, t, r) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var a = e[t],
          u = a.callback;
        if (u !== null) {
          if (((a.callback = null), (a = r), typeof u != "function"))
            throw Error(i(191, u));
          u.call(a);
        }
      }
  }
  var ro = {},
    Ft = sn(ro),
    oo = sn(ro),
    io = sn(ro);
  function On(e) {
    if (e === ro) throw Error(i(174));
    return e;
  }
  function Nl(e, t) {
    switch ((Re(io, t), Re(oo, e), Re(Ft, ro), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Aa(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Aa(t, e));
    }
    Me(Ft), Re(Ft, t);
  }
  function vr() {
    Me(Ft), Me(oo), Me(io);
  }
  function Zc(e) {
    On(io.current);
    var t = On(Ft.current),
      r = Aa(t, e.type);
    t !== r && (Re(oo, e), Re(Ft, r));
  }
  function Al(e) {
    oo.current === e && (Me(Ft), Me(oo));
  }
  var Ae = sn(0);
  function Li(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (
          r !== null &&
          ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Vl = [];
  function Ol() {
    for (var e = 0; e < Vl.length; e++)
      Vl[e]._workInProgressVersionPrimary = null;
    Vl.length = 0;
  }
  var Ri = K.ReactCurrentDispatcher,
    Dl = K.ReactCurrentBatchConfig,
    Dn = 0,
    Ve = null,
    $e = null,
    Ge = null,
    _i = !1,
    ao = !1,
    lo = 0,
    Kh = 0;
  function tt() {
    throw Error(i(321));
  }
  function zl(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++)
      if (!_t(e[r], t[r])) return !1;
    return !0;
  }
  function Fl(e, t, r, a, u, c) {
    if (
      ((Dn = c),
      (Ve = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Ri.current = e === null || e.memoizedState === null ? Xh : bh),
      (e = r(a, u)),
      ao)
    ) {
      c = 0;
      do {
        if (((ao = !1), (lo = 0), 25 <= c)) throw Error(i(301));
        (c += 1),
          (Ge = $e = null),
          (t.updateQueue = null),
          (Ri.current = Zh),
          (e = r(a, u));
      } while (ao);
    }
    if (
      ((Ri.current = Ni),
      (t = $e !== null && $e.next !== null),
      (Dn = 0),
      (Ge = $e = Ve = null),
      (_i = !1),
      t)
    )
      throw Error(i(300));
    return e;
  }
  function Il() {
    var e = lo !== 0;
    return (lo = 0), e;
  }
  function It() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ge === null ? (Ve.memoizedState = Ge = e) : (Ge = Ge.next = e), Ge;
  }
  function Et() {
    if ($e === null) {
      var e = Ve.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = $e.next;
    var t = Ge === null ? Ve.memoizedState : Ge.next;
    if (t !== null) (Ge = t), ($e = e);
    else {
      if (e === null) throw Error(i(310));
      ($e = e),
        (e = {
          memoizedState: $e.memoizedState,
          baseState: $e.baseState,
          baseQueue: $e.baseQueue,
          queue: $e.queue,
          next: null,
        }),
        Ge === null ? (Ve.memoizedState = Ge = e) : (Ge = Ge.next = e);
    }
    return Ge;
  }
  function uo(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Bl(e) {
    var t = Et(),
      r = t.queue;
    if (r === null) throw Error(i(311));
    r.lastRenderedReducer = e;
    var a = $e,
      u = a.baseQueue,
      c = r.pending;
    if (c !== null) {
      if (u !== null) {
        var p = u.next;
        (u.next = c.next), (c.next = p);
      }
      (a.baseQueue = u = c), (r.pending = null);
    }
    if (u !== null) {
      (c = u.next), (a = a.baseState);
      var g = (p = null),
        w = null,
        N = c;
      do {
        var z = N.lane;
        if ((Dn & z) === z)
          w !== null &&
            (w = w.next = {
              lane: 0,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null,
            }),
            (a = N.hasEagerState ? N.eagerState : e(a, N.action));
        else {
          var I = {
            lane: z,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null,
          };
          w === null ? ((g = w = I), (p = a)) : (w = w.next = I),
            (Ve.lanes |= z),
            (zn |= z);
        }
        N = N.next;
      } while (N !== null && N !== c);
      w === null ? (p = a) : (w.next = g),
        _t(a, t.memoizedState) || (ct = !0),
        (t.memoizedState = a),
        (t.baseState = p),
        (t.baseQueue = w),
        (r.lastRenderedState = a);
    }
    if (((e = r.interleaved), e !== null)) {
      u = e;
      do (c = u.lane), (Ve.lanes |= c), (zn |= c), (u = u.next);
      while (u !== e);
    } else u === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function Ul(e) {
    var t = Et(),
      r = t.queue;
    if (r === null) throw Error(i(311));
    r.lastRenderedReducer = e;
    var a = r.dispatch,
      u = r.pending,
      c = t.memoizedState;
    if (u !== null) {
      r.pending = null;
      var p = (u = u.next);
      do (c = e(c, p.action)), (p = p.next);
      while (p !== u);
      _t(c, t.memoizedState) || (ct = !0),
        (t.memoizedState = c),
        t.baseQueue === null && (t.baseState = c),
        (r.lastRenderedState = c);
    }
    return [c, a];
  }
  function Jc() {}
  function qc(e, t) {
    var r = Ve,
      a = Et(),
      u = t(),
      c = !_t(a.memoizedState, u);
    if (
      (c && ((a.memoizedState = u), (ct = !0)),
      (a = a.queue),
      Hl(nf.bind(null, r, a, e), [e]),
      a.getSnapshot !== t || c || (Ge !== null && Ge.memoizedState.tag & 1))
    ) {
      if (
        ((r.flags |= 2048),
        so(9, tf.bind(null, r, a, u, t), void 0, null),
        Xe === null)
      )
        throw Error(i(349));
      (Dn & 30) !== 0 || ef(r, t, u);
    }
    return u;
  }
  function ef(e, t, r) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = Ve.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ve.updateQueue = t),
          (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
  }
  function tf(e, t, r, a) {
    (t.value = r), (t.getSnapshot = a), rf(t) && of(e);
  }
  function nf(e, t, r) {
    return r(function() {
      rf(t) && of(e);
    });
  }
  function rf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !_t(e, r);
    } catch {
      return !0;
    }
  }
  function of(e) {
    var t = Yt(e, 1);
    t !== null && Vt(t, e, 1, -1);
  }
  function af(e) {
    var t = It();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: uo,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Gh.bind(null, Ve, e)),
      [t.memoizedState, e]
    );
  }
  function so(e, t, r, a) {
    return (
      (e = { tag: e, create: t, destroy: r, deps: a, next: null }),
      (t = Ve.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ve.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((r = t.lastEffect),
          r === null
            ? (t.lastEffect = e.next = e)
            : ((a = r.next), (r.next = e), (e.next = a), (t.lastEffect = e))),
      e
    );
  }
  function lf() {
    return Et().memoizedState;
  }
  function Mi(e, t, r, a) {
    var u = It();
    (Ve.flags |= e),
      (u.memoizedState = so(1 | t, r, void 0, a === void 0 ? null : a));
  }
  function ji(e, t, r, a) {
    var u = Et();
    a = a === void 0 ? null : a;
    var c = void 0;
    if ($e !== null) {
      var p = $e.memoizedState;
      if (((c = p.destroy), a !== null && zl(a, p.deps))) {
        u.memoizedState = so(t, r, c, a);
        return;
      }
    }
    (Ve.flags |= e), (u.memoizedState = so(1 | t, r, c, a));
  }
  function uf(e, t) {
    return Mi(8390656, 8, e, t);
  }
  function Hl(e, t) {
    return ji(2048, 8, e, t);
  }
  function sf(e, t) {
    return ji(4, 2, e, t);
  }
  function cf(e, t) {
    return ji(4, 4, e, t);
  }
  function ff(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function() {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function() {
          t.current = null;
        }
      );
  }
  function df(e, t, r) {
    return (
      (r = r != null ? r.concat([e]) : null), ji(4, 4, ff.bind(null, t, e), r)
    );
  }
  function Wl() {}
  function pf(e, t) {
    var r = Et();
    t = t === void 0 ? null : t;
    var a = r.memoizedState;
    return a !== null && t !== null && zl(t, a[1])
      ? a[0]
      : ((r.memoizedState = [e, t]), e);
  }
  function vf(e, t) {
    var r = Et();
    t = t === void 0 ? null : t;
    var a = r.memoizedState;
    return a !== null && t !== null && zl(t, a[1])
      ? a[0]
      : ((e = e()), (r.memoizedState = [e, t]), e);
  }
  function mf(e, t, r) {
    return (Dn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (ct = !0)), (e.memoizedState = r))
      : (_t(r, t) ||
          ((r = $s()), (Ve.lanes |= r), (zn |= r), (e.baseState = !0)),
        t);
  }
  function Qh(e, t) {
    var r = Pe;
    (Pe = r !== 0 && 4 > r ? r : 4), e(!0);
    var a = Dl.transition;
    Dl.transition = {};
    try {
      e(!1), t();
    } finally {
      (Pe = r), (Dl.transition = a);
    }
  }
  function hf() {
    return Et().memoizedState;
  }
  function Yh(e, t, r) {
    var a = gn(e);
    if (
      ((r = {
        lane: a,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      gf(e))
    )
      yf(t, r);
    else if (((r = Yc(e, t, r, a)), r !== null)) {
      var u = it();
      Vt(r, e, a, u), xf(r, t, a);
    }
  }
  function Gh(e, t, r) {
    var a = gn(e),
      u = {
        lane: a,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (gf(e)) yf(t, u);
    else {
      var c = e.alternate;
      if (
        e.lanes === 0 &&
        (c === null || c.lanes === 0) &&
        ((c = t.lastRenderedReducer), c !== null)
      )
        try {
          var p = t.lastRenderedState,
            g = c(p, r);
          if (((u.hasEagerState = !0), (u.eagerState = g), _t(g, p))) {
            var w = t.interleaved;
            w === null
              ? ((u.next = u), Ml(t))
              : ((u.next = w.next), (w.next = u)),
              (t.interleaved = u);
            return;
          }
        } catch {
        } finally {
        }
      (r = Yc(e, t, u, a)),
        r !== null && ((u = it()), Vt(r, e, a, u), xf(r, t, a));
    }
  }
  function gf(e) {
    var t = e.alternate;
    return e === Ve || (t !== null && t === Ve);
  }
  function yf(e, t) {
    ao = _i = !0;
    var r = e.pending;
    r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (e.pending = t);
  }
  function xf(e, t, r) {
    if ((r & 4194240) !== 0) {
      var a = t.lanes;
      (a &= e.pendingLanes), (r |= a), (t.lanes = r), Ka(e, r);
    }
  }
  var Ni = {
      readContext: kt,
      useCallback: tt,
      useContext: tt,
      useEffect: tt,
      useImperativeHandle: tt,
      useInsertionEffect: tt,
      useLayoutEffect: tt,
      useMemo: tt,
      useReducer: tt,
      useRef: tt,
      useState: tt,
      useDebugValue: tt,
      useDeferredValue: tt,
      useTransition: tt,
      useMutableSource: tt,
      useSyncExternalStore: tt,
      useId: tt,
      unstable_isNewReconciler: !1,
    },
    Xh = {
      readContext: kt,
      useCallback: function(e, t) {
        return (It().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: kt,
      useEffect: uf,
      useImperativeHandle: function(e, t, r) {
        return (
          (r = r != null ? r.concat([e]) : null),
          Mi(4194308, 4, ff.bind(null, t, e), r)
        );
      },
      useLayoutEffect: function(e, t) {
        return Mi(4194308, 4, e, t);
      },
      useInsertionEffect: function(e, t) {
        return Mi(4, 2, e, t);
      },
      useMemo: function(e, t) {
        var r = It();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (r.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function(e, t, r) {
        var a = It();
        return (
          (t = r !== void 0 ? r(t) : t),
          (a.memoizedState = a.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (a.queue = e),
          (e = e.dispatch = Yh.bind(null, Ve, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function(e) {
        var t = It();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: af,
      useDebugValue: Wl,
      useDeferredValue: function(e) {
        return (It().memoizedState = e);
      },
      useTransition: function() {
        var e = af(!1),
          t = e[0];
        return (e = Qh.bind(null, e[1])), (It().memoizedState = e), [t, e];
      },
      useMutableSource: function() {},
      useSyncExternalStore: function(e, t, r) {
        var a = Ve,
          u = It();
        if (je) {
          if (r === void 0) throw Error(i(407));
          r = r();
        } else {
          if (((r = t()), Xe === null)) throw Error(i(349));
          (Dn & 30) !== 0 || ef(a, t, r);
        }
        u.memoizedState = r;
        var c = { value: r, getSnapshot: t };
        return (
          (u.queue = c),
          uf(nf.bind(null, a, c, e), [e]),
          (a.flags |= 2048),
          so(9, tf.bind(null, a, c, r, t), void 0, null),
          r
        );
      },
      useId: function() {
        var e = It(),
          t = Xe.identifierPrefix;
        if (je) {
          var r = Qt,
            a = Kt;
          (r = (a & ~(1 << (32 - Rt(a) - 1))).toString(32) + r),
            (t = ":" + t + "R" + r),
            (r = lo++),
            0 < r && (t += "H" + r.toString(32)),
            (t += ":");
        } else (r = Kh++), (t = ":" + t + "r" + r.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    bh = {
      readContext: kt,
      useCallback: pf,
      useContext: kt,
      useEffect: Hl,
      useImperativeHandle: df,
      useInsertionEffect: sf,
      useLayoutEffect: cf,
      useMemo: vf,
      useReducer: Bl,
      useRef: lf,
      useState: function() {
        return Bl(uo);
      },
      useDebugValue: Wl,
      useDeferredValue: function(e) {
        var t = Et();
        return mf(t, $e.memoizedState, e);
      },
      useTransition: function() {
        var e = Bl(uo)[0],
          t = Et().memoizedState;
        return [e, t];
      },
      useMutableSource: Jc,
      useSyncExternalStore: qc,
      useId: hf,
      unstable_isNewReconciler: !1,
    },
    Zh = {
      readContext: kt,
      useCallback: pf,
      useContext: kt,
      useEffect: Hl,
      useImperativeHandle: df,
      useInsertionEffect: sf,
      useLayoutEffect: cf,
      useMemo: vf,
      useReducer: Ul,
      useRef: lf,
      useState: function() {
        return Ul(uo);
      },
      useDebugValue: Wl,
      useDeferredValue: function(e) {
        var t = Et();
        return $e === null ? (t.memoizedState = e) : mf(t, $e.memoizedState, e);
      },
      useTransition: function() {
        var e = Ul(uo)[0],
          t = Et().memoizedState;
        return [e, t];
      },
      useMutableSource: Jc,
      useSyncExternalStore: qc,
      useId: hf,
      unstable_isNewReconciler: !1,
    };
  function jt(e, t) {
    if (e && e.defaultProps) {
      (t = Q({}, t)), (e = e.defaultProps);
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  function $l(e, t, r, a) {
    (t = e.memoizedState),
      (r = r(a, t)),
      (r = r == null ? t : Q({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var Ai = {
    isMounted: function(e) {
      return (e = e._reactInternals) ? _n(e) === e : !1;
    },
    enqueueSetState: function(e, t, r) {
      e = e._reactInternals;
      var a = it(),
        u = gn(e),
        c = Gt(a, u);
      (c.payload = t),
        r != null && (c.callback = r),
        (t = pn(e, c, u)),
        t !== null && (Vt(t, e, u, a), Pi(t, e, u));
    },
    enqueueReplaceState: function(e, t, r) {
      e = e._reactInternals;
      var a = it(),
        u = gn(e),
        c = Gt(a, u);
      (c.tag = 1),
        (c.payload = t),
        r != null && (c.callback = r),
        (t = pn(e, c, u)),
        t !== null && (Vt(t, e, u, a), Pi(t, e, u));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var r = it(),
        a = gn(e),
        u = Gt(r, a);
      (u.tag = 2),
        t != null && (u.callback = t),
        (t = pn(e, u, a)),
        t !== null && (Vt(t, e, a, r), Pi(t, e, a));
    },
  };
  function wf(e, t, r, a, u, c, p) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(a, c, p)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Xr(r, a) || !Xr(u, c)
        : !0
    );
  }
  function Sf(e, t, r) {
    var a = !1,
      u = cn,
      c = t.contextType;
    return (
      typeof c == "object" && c !== null
        ? (c = kt(c))
        : ((u = st(t) ? jn : et.current),
          (a = t.contextTypes),
          (c = (a = a != null) ? lr(e, u) : cn)),
      (t = new t(r, c)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Ai),
      (e.stateNode = t),
      (t._reactInternals = e),
      a &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = u),
        (e.__reactInternalMemoizedMaskedChildContext = c)),
      t
    );
  }
  function Cf(e, t, r, a) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(r, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(r, a),
      t.state !== e && Ai.enqueueReplaceState(t, t.state, null);
  }
  function Kl(e, t, r, a) {
    var u = e.stateNode;
    (u.props = r), (u.state = e.memoizedState), (u.refs = {}), jl(e);
    var c = t.contextType;
    typeof c == "object" && c !== null
      ? (u.context = kt(c))
      : ((c = st(t) ? jn : et.current), (u.context = lr(e, c))),
      (u.state = e.memoizedState),
      (c = t.getDerivedStateFromProps),
      typeof c == "function" && ($l(e, t, c, r), (u.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function" ||
        (typeof u.UNSAFE_componentWillMount != "function" &&
          typeof u.componentWillMount != "function") ||
        ((t = u.state),
        typeof u.componentWillMount == "function" && u.componentWillMount(),
        typeof u.UNSAFE_componentWillMount == "function" &&
          u.UNSAFE_componentWillMount(),
        t !== u.state && Ai.enqueueReplaceState(u, u.state, null),
        Ti(e, r, u, a),
        (u.state = e.memoizedState)),
      typeof u.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function mr(e, t) {
    try {
      var r = "",
        a = t;
      do (r += ge(a)), (a = a.return);
      while (a);
      var u = r;
    } catch (c) {
      u =
        `
Error generating stack: ` +
        c.message +
        `
` +
        c.stack;
    }
    return { value: e, source: t, stack: u, digest: null };
  }
  function Ql(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null };
  }
  function Yl(e, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  var Jh = typeof WeakMap == "function" ? WeakMap : Map;
  function kf(e, t, r) {
    (r = Gt(-1, r)), (r.tag = 3), (r.payload = { element: null });
    var a = t.value;
    return (
      (r.callback = function() {
        Bi || ((Bi = !0), (uu = a)), Yl(e, t);
      }),
      r
    );
  }
  function Ef(e, t, r) {
    (r = Gt(-1, r)), (r.tag = 3);
    var a = e.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var u = t.value;
      (r.payload = function() {
        return a(u);
      }),
        (r.callback = function() {
          Yl(e, t);
        });
    }
    var c = e.stateNode;
    return (
      c !== null &&
        typeof c.componentDidCatch == "function" &&
        (r.callback = function() {
          Yl(e, t),
            typeof a != "function" &&
              (mn === null ? (mn = new Set([this])) : mn.add(this));
          var p = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: p !== null ? p : "",
          });
        }),
      r
    );
  }
  function Pf(e, t, r) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Jh();
      var u = new Set();
      a.set(t, u);
    } else (u = a.get(t)), u === void 0 && ((u = new Set()), a.set(t, u));
    u.has(r) || (u.add(r), (e = d0.bind(null, e, t, r)), t.then(e, e));
  }
  function Tf(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Lf(e, t, r, a, u) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (r.flags |= 131072),
            (r.flags &= -52805),
            r.tag === 1 &&
              (r.alternate === null
                ? (r.tag = 17)
                : ((t = Gt(-1, 1)), (t.tag = 2), pn(r, t, 1))),
            (r.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = u), e);
  }
  var qh = K.ReactCurrentOwner,
    ct = !1;
  function ot(e, t, r, a) {
    t.child = e === null ? Qc(t, null, r, a) : fr(t, e.child, r, a);
  }
  function Rf(e, t, r, a, u) {
    r = r.render;
    var c = t.ref;
    return (
      pr(t, u),
      (a = Fl(e, t, r, a, c, u)),
      (r = Il()),
      e !== null && !ct
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~u),
          Xt(e, t, u))
        : (je && r && Sl(t), (t.flags |= 1), ot(e, t, a, u), t.child)
    );
  }
  function _f(e, t, r, a, u) {
    if (e === null) {
      var c = r.type;
      return typeof c == "function" &&
        !mu(c) &&
        c.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = c), Mf(e, t, c, a, u))
        : ((e = Qi(r.type, null, a, t, t.mode, u)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((c = e.child), (e.lanes & u) === 0)) {
      var p = c.memoizedProps;
      if (
        ((r = r.compare), (r = r !== null ? r : Xr), r(p, a) && e.ref === t.ref)
      )
        return Xt(e, t, u);
    }
    return (
      (t.flags |= 1),
      (e = xn(c, a)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Mf(e, t, r, a, u) {
    if (e !== null) {
      var c = e.memoizedProps;
      if (Xr(c, a) && e.ref === t.ref)
        if (((ct = !1), (t.pendingProps = a = c), (e.lanes & u) !== 0))
          (e.flags & 131072) !== 0 && (ct = !0);
        else return (t.lanes = e.lanes), Xt(e, t, u);
    }
    return Gl(e, t, r, a, u);
  }
  function jf(e, t, r) {
    var a = t.pendingProps,
      u = a.children,
      c = e !== null ? e.memoizedState : null;
    if (a.mode === "hidden")
      if ((t.mode & 1) === 0)
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Re(gr, xt),
          (xt |= r);
      else {
        if ((r & 1073741824) === 0)
          return (
            (e = c !== null ? c.baseLanes | r : r),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Re(gr, xt),
            (xt |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (a = c !== null ? c.baseLanes : r),
          Re(gr, xt),
          (xt |= a);
      }
    else
      c !== null ? ((a = c.baseLanes | r), (t.memoizedState = null)) : (a = r),
        Re(gr, xt),
        (xt |= a);
    return ot(e, t, u, r), t.child;
  }
  function Nf(e, t) {
    var r = t.ref;
    ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Gl(e, t, r, a, u) {
    var c = st(r) ? jn : et.current;
    return (
      (c = lr(t, c)),
      pr(t, u),
      (r = Fl(e, t, r, a, c, u)),
      (a = Il()),
      e !== null && !ct
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~u),
          Xt(e, t, u))
        : (je && a && Sl(t), (t.flags |= 1), ot(e, t, r, u), t.child)
    );
  }
  function Af(e, t, r, a, u) {
    if (st(r)) {
      var c = !0;
      gi(t);
    } else c = !1;
    if ((pr(t, u), t.stateNode === null))
      Oi(e, t), Sf(t, r, a), Kl(t, r, a, u), (a = !0);
    else if (e === null) {
      var p = t.stateNode,
        g = t.memoizedProps;
      p.props = g;
      var w = p.context,
        N = r.contextType;
      typeof N == "object" && N !== null
        ? (N = kt(N))
        : ((N = st(r) ? jn : et.current), (N = lr(t, N)));
      var z = r.getDerivedStateFromProps,
        I =
          typeof z == "function" ||
          typeof p.getSnapshotBeforeUpdate == "function";
      I ||
        (typeof p.UNSAFE_componentWillReceiveProps != "function" &&
          typeof p.componentWillReceiveProps != "function") ||
        ((g !== a || w !== N) && Cf(t, p, a, N)),
        (dn = !1);
      var O = t.memoizedState;
      (p.state = O),
        Ti(t, a, p, u),
        (w = t.memoizedState),
        g !== a || O !== w || ut.current || dn
          ? (typeof z == "function" && ($l(t, r, z, a), (w = t.memoizedState)),
            (g = dn || wf(t, r, g, a, O, w, N))
              ? (I ||
                  (typeof p.UNSAFE_componentWillMount != "function" &&
                    typeof p.componentWillMount != "function") ||
                  (typeof p.componentWillMount == "function" &&
                    p.componentWillMount(),
                  typeof p.UNSAFE_componentWillMount == "function" &&
                    p.UNSAFE_componentWillMount()),
                typeof p.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof p.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = w)),
            (p.props = a),
            (p.state = w),
            (p.context = N),
            (a = g))
          : (typeof p.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1));
    } else {
      (p = t.stateNode),
        Gc(e, t),
        (g = t.memoizedProps),
        (N = t.type === t.elementType ? g : jt(t.type, g)),
        (p.props = N),
        (I = t.pendingProps),
        (O = p.context),
        (w = r.contextType),
        typeof w == "object" && w !== null
          ? (w = kt(w))
          : ((w = st(r) ? jn : et.current), (w = lr(t, w)));
      var X = r.getDerivedStateFromProps;
      (z =
        typeof X == "function" ||
        typeof p.getSnapshotBeforeUpdate == "function") ||
        (typeof p.UNSAFE_componentWillReceiveProps != "function" &&
          typeof p.componentWillReceiveProps != "function") ||
        ((g !== I || O !== w) && Cf(t, p, a, w)),
        (dn = !1),
        (O = t.memoizedState),
        (p.state = O),
        Ti(t, a, p, u);
      var ee = t.memoizedState;
      g !== I || O !== ee || ut.current || dn
        ? (typeof X == "function" && ($l(t, r, X, a), (ee = t.memoizedState)),
          (N = dn || wf(t, r, N, a, O, ee, w) || !1)
            ? (z ||
                (typeof p.UNSAFE_componentWillUpdate != "function" &&
                  typeof p.componentWillUpdate != "function") ||
                (typeof p.componentWillUpdate == "function" &&
                  p.componentWillUpdate(a, ee, w),
                typeof p.UNSAFE_componentWillUpdate == "function" &&
                  p.UNSAFE_componentWillUpdate(a, ee, w)),
              typeof p.componentDidUpdate == "function" && (t.flags |= 4),
              typeof p.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof p.componentDidUpdate != "function" ||
                (g === e.memoizedProps && O === e.memoizedState) ||
                (t.flags |= 4),
              typeof p.getSnapshotBeforeUpdate != "function" ||
                (g === e.memoizedProps && O === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = ee)),
          (p.props = a),
          (p.state = ee),
          (p.context = w),
          (a = N))
        : (typeof p.componentDidUpdate != "function" ||
            (g === e.memoizedProps && O === e.memoizedState) ||
            (t.flags |= 4),
          typeof p.getSnapshotBeforeUpdate != "function" ||
            (g === e.memoizedProps && O === e.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return Xl(e, t, r, a, c, u);
  }
  function Xl(e, t, r, a, u, c) {
    Nf(e, t);
    var p = (t.flags & 128) !== 0;
    if (!a && !p) return u && zc(t, r, !1), Xt(e, t, c);
    (a = t.stateNode), (qh.current = t);
    var g =
      p && typeof r.getDerivedStateFromError != "function" ? null : a.render();
    return (
      (t.flags |= 1),
      e !== null && p
        ? ((t.child = fr(t, e.child, null, c)), (t.child = fr(t, null, g, c)))
        : ot(e, t, g, c),
      (t.memoizedState = a.state),
      u && zc(t, r, !0),
      t.child
    );
  }
  function Vf(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Oc(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Oc(e, t.context, !1),
      Nl(e, t.containerInfo);
  }
  function Of(e, t, r, a, u) {
    return cr(), Pl(u), (t.flags |= 256), ot(e, t, r, a), t.child;
  }
  var bl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Zl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Df(e, t, r) {
    var a = t.pendingProps,
      u = Ae.current,
      c = !1,
      p = (t.flags & 128) !== 0,
      g;
    if (
      ((g = p) ||
        (g = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0),
      g
        ? ((c = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (u |= 1),
      Re(Ae, u & 1),
      e === null)
    )
      return (
        El(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824),
            null)
          : ((p = a.children),
            (e = a.fallback),
            c
              ? ((a = t.mode),
                (c = t.child),
                (p = { mode: "hidden", children: p }),
                (a & 1) === 0 && c !== null
                  ? ((c.childLanes = 0), (c.pendingProps = p))
                  : (c = Yi(p, a, 0, null)),
                (e = Un(e, a, r, null)),
                (c.return = t),
                (e.return = t),
                (c.sibling = e),
                (t.child = c),
                (t.child.memoizedState = Zl(r)),
                (t.memoizedState = bl),
                e)
              : Jl(t, p))
      );
    if (((u = e.memoizedState), u !== null && ((g = u.dehydrated), g !== null)))
      return e0(e, t, p, a, g, u, r);
    if (c) {
      (c = a.fallback), (p = t.mode), (u = e.child), (g = u.sibling);
      var w = { mode: "hidden", children: a.children };
      return (
        (p & 1) === 0 && t.child !== u
          ? ((a = t.child),
            (a.childLanes = 0),
            (a.pendingProps = w),
            (t.deletions = null))
          : ((a = xn(u, w)), (a.subtreeFlags = u.subtreeFlags & 14680064)),
        g !== null ? (c = xn(g, c)) : ((c = Un(c, p, r, null)), (c.flags |= 2)),
        (c.return = t),
        (a.return = t),
        (a.sibling = c),
        (t.child = a),
        (a = c),
        (c = t.child),
        (p = e.child.memoizedState),
        (p =
          p === null
            ? Zl(r)
            : {
                baseLanes: p.baseLanes | r,
                cachePool: null,
                transitions: p.transitions,
              }),
        (c.memoizedState = p),
        (c.childLanes = e.childLanes & ~r),
        (t.memoizedState = bl),
        a
      );
    }
    return (
      (c = e.child),
      (e = c.sibling),
      (a = xn(c, { mode: "visible", children: a.children })),
      (t.mode & 1) === 0 && (a.lanes = r),
      (a.return = t),
      (a.sibling = null),
      e !== null &&
        ((r = t.deletions),
        r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
      (t.child = a),
      (t.memoizedState = null),
      a
    );
  }
  function Jl(e, t) {
    return (
      (t = Yi({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Vi(e, t, r, a) {
    return (
      a !== null && Pl(a),
      fr(t, e.child, null, r),
      (e = Jl(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function e0(e, t, r, a, u, c, p) {
    if (r)
      return t.flags & 256
        ? ((t.flags &= -257), (a = Ql(Error(i(422)))), Vi(e, t, p, a))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((c = a.fallback),
          (u = t.mode),
          (a = Yi({ mode: "visible", children: a.children }, u, 0, null)),
          (c = Un(c, u, p, null)),
          (c.flags |= 2),
          (a.return = t),
          (c.return = t),
          (a.sibling = c),
          (t.child = a),
          (t.mode & 1) !== 0 && fr(t, e.child, null, p),
          (t.child.memoizedState = Zl(p)),
          (t.memoizedState = bl),
          c);
    if ((t.mode & 1) === 0) return Vi(e, t, p, null);
    if (u.data === "$!") {
      if (((a = u.nextSibling && u.nextSibling.dataset), a)) var g = a.dgst;
      return (
        (a = g), (c = Error(i(419))), (a = Ql(c, a, void 0)), Vi(e, t, p, a)
      );
    }
    if (((g = (p & e.childLanes) !== 0), ct || g)) {
      if (((a = Xe), a !== null)) {
        switch (p & -p) {
          case 4:
            u = 2;
            break;
          case 16:
            u = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            u = 32;
            break;
          case 536870912:
            u = 268435456;
            break;
          default:
            u = 0;
        }
        (u = (u & (a.suspendedLanes | p)) !== 0 ? 0 : u),
          u !== 0 &&
            u !== c.retryLane &&
            ((c.retryLane = u), Yt(e, u), Vt(a, e, u, -1));
      }
      return vu(), (a = Ql(Error(i(421)))), Vi(e, t, p, a);
    }
    return u.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = p0.bind(null, e)),
        (u._reactRetry = t),
        null)
      : ((e = c.treeContext),
        (yt = un(u.nextSibling)),
        (gt = t),
        (je = !0),
        (Mt = null),
        e !== null &&
          ((St[Ct++] = Kt),
          (St[Ct++] = Qt),
          (St[Ct++] = Nn),
          (Kt = e.id),
          (Qt = e.overflow),
          (Nn = t)),
        (t = Jl(t, a.children)),
        (t.flags |= 4096),
        t);
  }
  function zf(e, t, r) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), _l(e.return, t, r);
  }
  function ql(e, t, r, a, u) {
    var c = e.memoizedState;
    c === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: r,
          tailMode: u,
        })
      : ((c.isBackwards = t),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = a),
        (c.tail = r),
        (c.tailMode = u));
  }
  function Ff(e, t, r) {
    var a = t.pendingProps,
      u = a.revealOrder,
      c = a.tail;
    if ((ot(e, t, a.children, r), (a = Ae.current), (a & 2) !== 0))
      (a = (a & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && zf(e, r, t);
          else if (e.tag === 19) zf(e, r, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      a &= 1;
    }
    if ((Re(Ae, a), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (u) {
        case "forwards":
          for (r = t.child, u = null; r !== null; )
            (e = r.alternate),
              e !== null && Li(e) === null && (u = r),
              (r = r.sibling);
          (r = u),
            r === null
              ? ((u = t.child), (t.child = null))
              : ((u = r.sibling), (r.sibling = null)),
            ql(t, !1, u, r, c);
          break;
        case "backwards":
          for (r = null, u = t.child, t.child = null; u !== null; ) {
            if (((e = u.alternate), e !== null && Li(e) === null)) {
              t.child = u;
              break;
            }
            (e = u.sibling), (u.sibling = r), (r = u), (u = e);
          }
          ql(t, !0, r, null, c);
          break;
        case "together":
          ql(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Oi(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Xt(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (zn |= t.lanes),
      (r & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(i(153));
    if (t.child !== null) {
      for (
        e = t.child, r = xn(e, e.pendingProps), t.child = r, r.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (r = r.sibling = xn(e, e.pendingProps)),
          (r.return = t);
      r.sibling = null;
    }
    return t.child;
  }
  function t0(e, t, r) {
    switch (t.tag) {
      case 3:
        Vf(t), cr();
        break;
      case 5:
        Zc(t);
        break;
      case 1:
        st(t.type) && gi(t);
        break;
      case 4:
        Nl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var a = t.type._context,
          u = t.memoizedProps.value;
        Re(ki, a._currentValue), (a._currentValue = u);
        break;
      case 13:
        if (((a = t.memoizedState), a !== null))
          return a.dehydrated !== null
            ? (Re(Ae, Ae.current & 1), (t.flags |= 128), null)
            : (r & t.child.childLanes) !== 0
            ? Df(e, t, r)
            : (Re(Ae, Ae.current & 1),
              (e = Xt(e, t, r)),
              e !== null ? e.sibling : null);
        Re(Ae, Ae.current & 1);
        break;
      case 19:
        if (((a = (r & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (a) return Ff(e, t, r);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          Re(Ae, Ae.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), jf(e, t, r);
    }
    return Xt(e, t, r);
  }
  var If, eu, Bf, Uf;
  (If = function(e, t) {
    for (var r = t.child; r !== null; ) {
      if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
      else if (r.tag !== 4 && r.child !== null) {
        (r.child.return = r), (r = r.child);
        continue;
      }
      if (r === t) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t) return;
        r = r.return;
      }
      (r.sibling.return = r.return), (r = r.sibling);
    }
  }),
    (eu = function() {}),
    (Bf = function(e, t, r, a) {
      var u = e.memoizedProps;
      if (u !== a) {
        (e = t.stateNode), On(Ft.current);
        var c = null;
        switch (r) {
          case "input":
            (u = re(e, u)), (a = re(e, a)), (c = []);
            break;
          case "select":
            (u = Q({}, u, { value: void 0 })),
              (a = Q({}, a, { value: void 0 })),
              (c = []);
            break;
          case "textarea":
            (u = en(e, u)), (a = en(e, a)), (c = []);
            break;
          default:
            typeof u.onClick != "function" &&
              typeof a.onClick == "function" &&
              (e.onclick = vi);
        }
        Va(r, a);
        var p;
        r = null;
        for (N in u)
          if (!a.hasOwnProperty(N) && u.hasOwnProperty(N) && u[N] != null)
            if (N === "style") {
              var g = u[N];
              for (p in g) g.hasOwnProperty(p) && (r || (r = {}), (r[p] = ""));
            } else
              N !== "dangerouslySetInnerHTML" &&
                N !== "children" &&
                N !== "suppressContentEditableWarning" &&
                N !== "suppressHydrationWarning" &&
                N !== "autoFocus" &&
                (s.hasOwnProperty(N)
                  ? c || (c = [])
                  : (c = c || []).push(N, null));
        for (N in a) {
          var w = a[N];
          if (
            ((g = u != null ? u[N] : void 0),
            a.hasOwnProperty(N) && w !== g && (w != null || g != null))
          )
            if (N === "style")
              if (g) {
                for (p in g)
                  !g.hasOwnProperty(p) ||
                    (w && w.hasOwnProperty(p)) ||
                    (r || (r = {}), (r[p] = ""));
                for (p in w)
                  w.hasOwnProperty(p) &&
                    g[p] !== w[p] &&
                    (r || (r = {}), (r[p] = w[p]));
              } else r || (c || (c = []), c.push(N, r)), (r = w);
            else
              N === "dangerouslySetInnerHTML"
                ? ((w = w ? w.__html : void 0),
                  (g = g ? g.__html : void 0),
                  w != null && g !== w && (c = c || []).push(N, w))
                : N === "children"
                ? (typeof w != "string" && typeof w != "number") ||
                  (c = c || []).push(N, "" + w)
                : N !== "suppressContentEditableWarning" &&
                  N !== "suppressHydrationWarning" &&
                  (s.hasOwnProperty(N)
                    ? (w != null && N === "onScroll" && _e("scroll", e),
                      c || g === w || (c = []))
                    : (c = c || []).push(N, w));
        }
        r && (c = c || []).push("style", r);
        var N = c;
        (t.updateQueue = N) && (t.flags |= 4);
      }
    }),
    (Uf = function(e, t, r, a) {
      r !== a && (t.flags |= 4);
    });
  function co(e, t) {
    if (!je)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var r = null; t !== null; )
            t.alternate !== null && (r = t), (t = t.sibling);
          r === null ? (e.tail = null) : (r.sibling = null);
          break;
        case "collapsed":
          r = e.tail;
          for (var a = null; r !== null; )
            r.alternate !== null && (a = r), (r = r.sibling);
          a === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function nt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      a = 0;
    if (t)
      for (var u = e.child; u !== null; )
        (r |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags & 14680064),
          (a |= u.flags & 14680064),
          (u.return = e),
          (u = u.sibling);
    else
      for (u = e.child; u !== null; )
        (r |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags),
          (a |= u.flags),
          (u.return = e),
          (u = u.sibling);
    return (e.subtreeFlags |= a), (e.childLanes = r), t;
  }
  function n0(e, t, r) {
    var a = t.pendingProps;
    switch ((Cl(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return nt(t), null;
      case 1:
        return st(t.type) && hi(), nt(t), null;
      case 3:
        return (
          (a = t.stateNode),
          vr(),
          Me(ut),
          Me(et),
          Ol(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (e === null || e.child === null) &&
            (Si(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Mt !== null && (fu(Mt), (Mt = null)))),
          eu(e, t),
          nt(t),
          null
        );
      case 5:
        Al(t);
        var u = On(io.current);
        if (((r = t.type), e !== null && t.stateNode != null))
          Bf(e, t, r, a, u),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(i(166));
            return nt(t), null;
          }
          if (((e = On(Ft.current)), Si(t))) {
            (a = t.stateNode), (r = t.type);
            var c = t.memoizedProps;
            switch (((a[zt] = t), (a[eo] = c), (e = (t.mode & 1) !== 0), r)) {
              case "dialog":
                _e("cancel", a), _e("close", a);
                break;
              case "iframe":
              case "object":
              case "embed":
                _e("load", a);
                break;
              case "video":
              case "audio":
                for (u = 0; u < Zr.length; u++) _e(Zr[u], a);
                break;
              case "source":
                _e("error", a);
                break;
              case "img":
              case "image":
              case "link":
                _e("error", a), _e("load", a);
                break;
              case "details":
                _e("toggle", a);
                break;
              case "input":
                F(a, c), _e("invalid", a);
                break;
              case "select":
                (a._wrapperState = { wasMultiple: !!c.multiple }),
                  _e("invalid", a);
                break;
              case "textarea":
                Rn(a, c), _e("invalid", a);
            }
            Va(r, c), (u = null);
            for (var p in c)
              if (c.hasOwnProperty(p)) {
                var g = c[p];
                p === "children"
                  ? typeof g == "string"
                    ? a.textContent !== g &&
                      (c.suppressHydrationWarning !== !0 &&
                        pi(a.textContent, g, e),
                      (u = ["children", g]))
                    : typeof g == "number" &&
                      a.textContent !== "" + g &&
                      (c.suppressHydrationWarning !== !0 &&
                        pi(a.textContent, g, e),
                      (u = ["children", "" + g]))
                  : s.hasOwnProperty(p) &&
                    g != null &&
                    p === "onScroll" &&
                    _e("scroll", a);
              }
            switch (r) {
              case "input":
                Ln(a), De(a, c, !0);
                break;
              case "textarea":
                Ln(a), Ps(a);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof c.onClick == "function" && (a.onclick = vi);
            }
            (a = u), (t.updateQueue = a), a !== null && (t.flags |= 4);
          } else {
            (p = u.nodeType === 9 ? u : u.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Ts(r)),
              e === "http://www.w3.org/1999/xhtml"
                ? r === "script"
                  ? ((e = p.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof a.is == "string"
                  ? (e = p.createElement(r, { is: a.is }))
                  : ((e = p.createElement(r)),
                    r === "select" &&
                      ((p = e),
                      a.multiple
                        ? (p.multiple = !0)
                        : a.size && (p.size = a.size)))
                : (e = p.createElementNS(e, r)),
              (e[zt] = t),
              (e[eo] = a),
              If(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((p = Oa(r, a)), r)) {
                case "dialog":
                  _e("cancel", e), _e("close", e), (u = a);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  _e("load", e), (u = a);
                  break;
                case "video":
                case "audio":
                  for (u = 0; u < Zr.length; u++) _e(Zr[u], e);
                  u = a;
                  break;
                case "source":
                  _e("error", e), (u = a);
                  break;
                case "img":
                case "image":
                case "link":
                  _e("error", e), _e("load", e), (u = a);
                  break;
                case "details":
                  _e("toggle", e), (u = a);
                  break;
                case "input":
                  F(e, a), (u = re(e, a)), _e("invalid", e);
                  break;
                case "option":
                  u = a;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!a.multiple }),
                    (u = Q({}, a, { value: void 0 })),
                    _e("invalid", e);
                  break;
                case "textarea":
                  Rn(e, a), (u = en(e, a)), _e("invalid", e);
                  break;
                default:
                  u = a;
              }
              Va(r, u), (g = u);
              for (c in g)
                if (g.hasOwnProperty(c)) {
                  var w = g[c];
                  c === "style"
                    ? _s(e, w)
                    : c === "dangerouslySetInnerHTML"
                    ? ((w = w ? w.__html : void 0), w != null && Ls(e, w))
                    : c === "children"
                    ? typeof w == "string"
                      ? (r !== "textarea" || w !== "") && Nr(e, w)
                      : typeof w == "number" && Nr(e, "" + w)
                    : c !== "suppressContentEditableWarning" &&
                      c !== "suppressHydrationWarning" &&
                      c !== "autoFocus" &&
                      (s.hasOwnProperty(c)
                        ? w != null && c === "onScroll" && _e("scroll", e)
                        : w != null && Y(e, c, w, p));
                }
              switch (r) {
                case "input":
                  Ln(e), De(e, a, !1);
                  break;
                case "textarea":
                  Ln(e), Ps(e);
                  break;
                case "option":
                  a.value != null && e.setAttribute("value", "" + Ee(a.value));
                  break;
                case "select":
                  (e.multiple = !!a.multiple),
                    (c = a.value),
                    c != null
                      ? Lt(e, !!a.multiple, c, !1)
                      : a.defaultValue != null &&
                        Lt(e, !!a.multiple, a.defaultValue, !0);
                  break;
                default:
                  typeof u.onClick == "function" && (e.onclick = vi);
              }
              switch (r) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a = !!a.autoFocus;
                  break e;
                case "img":
                  a = !0;
                  break e;
                default:
                  a = !1;
              }
            }
            a && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return nt(t), null;
      case 6:
        if (e && t.stateNode != null) Uf(e, t, e.memoizedProps, a);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(i(166));
          if (((r = On(io.current)), On(Ft.current), Si(t))) {
            if (
              ((a = t.stateNode),
              (r = t.memoizedProps),
              (a[zt] = t),
              (c = a.nodeValue !== r) && ((e = gt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  pi(a.nodeValue, r, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    pi(a.nodeValue, r, (e.mode & 1) !== 0);
              }
            c && (t.flags |= 4);
          } else
            (a = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(a)),
              (a[zt] = t),
              (t.stateNode = a);
        }
        return nt(t), null;
      case 13:
        if (
          (Me(Ae),
          (a = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (je && yt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            Wc(), cr(), (t.flags |= 98560), (c = !1);
          else if (((c = Si(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!c) throw Error(i(318));
              if (
                ((c = t.memoizedState),
                (c = c !== null ? c.dehydrated : null),
                !c)
              )
                throw Error(i(317));
              c[zt] = t;
            } else
              cr(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            nt(t), (c = !1);
          } else Mt !== null && (fu(Mt), (Mt = null)), (c = !0);
          if (!c) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = r), t)
          : ((a = a !== null),
            a !== (e !== null && e.memoizedState !== null) &&
              a &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Ae.current & 1) !== 0
                  ? Ke === 0 && (Ke = 3)
                  : vu())),
            t.updateQueue !== null && (t.flags |= 4),
            nt(t),
            null);
      case 4:
        return (
          vr(),
          eu(e, t),
          e === null && Jr(t.stateNode.containerInfo),
          nt(t),
          null
        );
      case 10:
        return Rl(t.type._context), nt(t), null;
      case 17:
        return st(t.type) && hi(), nt(t), null;
      case 19:
        if ((Me(Ae), (c = t.memoizedState), c === null)) return nt(t), null;
        if (((a = (t.flags & 128) !== 0), (p = c.rendering), p === null))
          if (a) co(c, !1);
          else {
            if (Ke !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((p = Li(e)), p !== null)) {
                  for (
                    t.flags |= 128,
                      co(c, !1),
                      a = p.updateQueue,
                      a !== null && ((t.updateQueue = a), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      a = r,
                      r = t.child;
                    r !== null;

                  )
                    (c = r),
                      (e = a),
                      (c.flags &= 14680066),
                      (p = c.alternate),
                      p === null
                        ? ((c.childLanes = 0),
                          (c.lanes = e),
                          (c.child = null),
                          (c.subtreeFlags = 0),
                          (c.memoizedProps = null),
                          (c.memoizedState = null),
                          (c.updateQueue = null),
                          (c.dependencies = null),
                          (c.stateNode = null))
                        : ((c.childLanes = p.childLanes),
                          (c.lanes = p.lanes),
                          (c.child = p.child),
                          (c.subtreeFlags = 0),
                          (c.deletions = null),
                          (c.memoizedProps = p.memoizedProps),
                          (c.memoizedState = p.memoizedState),
                          (c.updateQueue = p.updateQueue),
                          (c.type = p.type),
                          (e = p.dependencies),
                          (c.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (r = r.sibling);
                  return Re(Ae, (Ae.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            c.tail !== null &&
              Ie() > yr &&
              ((t.flags |= 128), (a = !0), co(c, !1), (t.lanes = 4194304));
          }
        else {
          if (!a)
            if (((e = Li(p)), e !== null)) {
              if (
                ((t.flags |= 128),
                (a = !0),
                (r = e.updateQueue),
                r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                co(c, !0),
                c.tail === null &&
                  c.tailMode === "hidden" &&
                  !p.alternate &&
                  !je)
              )
                return nt(t), null;
            } else
              2 * Ie() - c.renderingStartTime > yr &&
                r !== 1073741824 &&
                ((t.flags |= 128), (a = !0), co(c, !1), (t.lanes = 4194304));
          c.isBackwards
            ? ((p.sibling = t.child), (t.child = p))
            : ((r = c.last),
              r !== null ? (r.sibling = p) : (t.child = p),
              (c.last = p));
        }
        return c.tail !== null
          ? ((t = c.tail),
            (c.rendering = t),
            (c.tail = t.sibling),
            (c.renderingStartTime = Ie()),
            (t.sibling = null),
            (r = Ae.current),
            Re(Ae, a ? (r & 1) | 2 : r & 1),
            t)
          : (nt(t), null);
      case 22:
      case 23:
        return (
          pu(),
          (a = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== a && (t.flags |= 8192),
          a && (t.mode & 1) !== 0
            ? (xt & 1073741824) !== 0 &&
              (nt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : nt(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function r0(e, t) {
    switch ((Cl(t), t.tag)) {
      case 1:
        return (
          st(t.type) && hi(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          vr(),
          Me(ut),
          Me(et),
          Ol(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return Al(t), null;
      case 13:
        if (
          (Me(Ae), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(i(340));
          cr();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return Me(Ae), null;
      case 4:
        return vr(), null;
      case 10:
        return Rl(t.type._context), null;
      case 22:
      case 23:
        return pu(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Di = !1,
    rt = !1,
    o0 = typeof WeakSet == "function" ? WeakSet : Set,
    J = null;
  function hr(e, t) {
    var r = e.ref;
    if (r !== null)
      if (typeof r == "function")
        try {
          r(null);
        } catch (a) {
          ze(e, t, a);
        }
      else r.current = null;
  }
  function tu(e, t, r) {
    try {
      r();
    } catch (a) {
      ze(e, t, a);
    }
  }
  var Hf = !1;
  function i0(e, t) {
    if (((pl = ni), (e = xc()), il(e))) {
      if ("selectionStart" in e)
        var r = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window;
          var a = r.getSelection && r.getSelection();
          if (a && a.rangeCount !== 0) {
            r = a.anchorNode;
            var u = a.anchorOffset,
              c = a.focusNode;
            a = a.focusOffset;
            try {
              r.nodeType, c.nodeType;
            } catch {
              r = null;
              break e;
            }
            var p = 0,
              g = -1,
              w = -1,
              N = 0,
              z = 0,
              I = e,
              O = null;
            t: for (;;) {
              for (
                var X;
                I !== r || (u !== 0 && I.nodeType !== 3) || (g = p + u),
                  I !== c || (a !== 0 && I.nodeType !== 3) || (w = p + a),
                  I.nodeType === 3 && (p += I.nodeValue.length),
                  (X = I.firstChild) !== null;

              )
                (O = I), (I = X);
              for (;;) {
                if (I === e) break t;
                if (
                  (O === r && ++N === u && (g = p),
                  O === c && ++z === a && (w = p),
                  (X = I.nextSibling) !== null)
                )
                  break;
                (I = O), (O = I.parentNode);
              }
              I = X;
            }
            r = g === -1 || w === -1 ? null : { start: g, end: w };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (
      vl = { focusedElem: e, selectionRange: r }, ni = !1, J = t;
      J !== null;

    )
      if (((t = J), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (J = e);
      else
        for (; J !== null; ) {
          t = J;
          try {
            var ee = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (ee !== null) {
                    var te = ee.memoizedProps,
                      Be = ee.memoizedState,
                      T = t.stateNode,
                      C = T.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? te : jt(t.type, te),
                        Be
                      );
                    T.__reactInternalSnapshotBeforeUpdate = C;
                  }
                  break;
                case 3:
                  var _ = t.stateNode.containerInfo;
                  _.nodeType === 1
                    ? (_.textContent = "")
                    : _.nodeType === 9 &&
                      _.documentElement &&
                      _.removeChild(_.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(i(163));
              }
          } catch (H) {
            ze(t, t.return, H);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (J = e);
            break;
          }
          J = t.return;
        }
    return (ee = Hf), (Hf = !1), ee;
  }
  function fo(e, t, r) {
    var a = t.updateQueue;
    if (((a = a !== null ? a.lastEffect : null), a !== null)) {
      var u = (a = a.next);
      do {
        if ((u.tag & e) === e) {
          var c = u.destroy;
          (u.destroy = void 0), c !== void 0 && tu(t, r, c);
        }
        u = u.next;
      } while (u !== a);
    }
  }
  function zi(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var r = (t = t.next);
      do {
        if ((r.tag & e) === e) {
          var a = r.create;
          r.destroy = a();
        }
        r = r.next;
      } while (r !== t);
    }
  }
  function nu(e) {
    var t = e.ref;
    if (t !== null) {
      var r = e.stateNode;
      switch (e.tag) {
        case 5:
          e = r;
          break;
        default:
          e = r;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function Wf(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Wf(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[zt],
          delete t[eo],
          delete t[yl],
          delete t[Uh],
          delete t[Hh])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function $f(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Kf(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || $f(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ru(e, t, r) {
    var a = e.tag;
    if (a === 5 || a === 6)
      (e = e.stateNode),
        t
          ? r.nodeType === 8
            ? r.parentNode.insertBefore(e, t)
            : r.insertBefore(e, t)
          : (r.nodeType === 8
              ? ((t = r.parentNode), t.insertBefore(e, r))
              : ((t = r), t.appendChild(e)),
            (r = r._reactRootContainer),
            r != null || t.onclick !== null || (t.onclick = vi));
    else if (a !== 4 && ((e = e.child), e !== null))
      for (ru(e, t, r), e = e.sibling; e !== null; )
        ru(e, t, r), (e = e.sibling);
  }
  function ou(e, t, r) {
    var a = e.tag;
    if (a === 5 || a === 6)
      (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (a !== 4 && ((e = e.child), e !== null))
      for (ou(e, t, r), e = e.sibling; e !== null; )
        ou(e, t, r), (e = e.sibling);
  }
  var Je = null,
    Nt = !1;
  function vn(e, t, r) {
    for (r = r.child; r !== null; ) Qf(e, t, r), (r = r.sibling);
  }
  function Qf(e, t, r) {
    if (Dt && typeof Dt.onCommitFiberUnmount == "function")
      try {
        Dt.onCommitFiberUnmount(bo, r);
      } catch {}
    switch (r.tag) {
      case 5:
        rt || hr(r, t);
      case 6:
        var a = Je,
          u = Nt;
        (Je = null),
          vn(e, t, r),
          (Je = a),
          (Nt = u),
          Je !== null &&
            (Nt
              ? ((e = Je),
                (r = r.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(r)
                  : e.removeChild(r))
              : Je.removeChild(r.stateNode));
        break;
      case 18:
        Je !== null &&
          (Nt
            ? ((e = Je),
              (r = r.stateNode),
              e.nodeType === 8
                ? gl(e.parentNode, r)
                : e.nodeType === 1 && gl(e, r),
              Wr(e))
            : gl(Je, r.stateNode));
        break;
      case 4:
        (a = Je),
          (u = Nt),
          (Je = r.stateNode.containerInfo),
          (Nt = !0),
          vn(e, t, r),
          (Je = a),
          (Nt = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !rt &&
          ((a = r.updateQueue), a !== null && ((a = a.lastEffect), a !== null))
        ) {
          u = a = a.next;
          do {
            var c = u,
              p = c.destroy;
            (c = c.tag),
              p !== void 0 && ((c & 2) !== 0 || (c & 4) !== 0) && tu(r, t, p),
              (u = u.next);
          } while (u !== a);
        }
        vn(e, t, r);
        break;
      case 1:
        if (
          !rt &&
          (hr(r, t),
          (a = r.stateNode),
          typeof a.componentWillUnmount == "function")
        )
          try {
            (a.props = r.memoizedProps),
              (a.state = r.memoizedState),
              a.componentWillUnmount();
          } catch (g) {
            ze(r, t, g);
          }
        vn(e, t, r);
        break;
      case 21:
        vn(e, t, r);
        break;
      case 22:
        r.mode & 1
          ? ((rt = (a = rt) || r.memoizedState !== null), vn(e, t, r), (rt = a))
          : vn(e, t, r);
        break;
      default:
        vn(e, t, r);
    }
  }
  function Yf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      r === null && (r = e.stateNode = new o0()),
        t.forEach(function(a) {
          var u = v0.bind(null, e, a);
          r.has(a) || (r.add(a), a.then(u, u));
        });
    }
  }
  function At(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var a = 0; a < r.length; a++) {
        var u = r[a];
        try {
          var c = e,
            p = t,
            g = p;
          e: for (; g !== null; ) {
            switch (g.tag) {
              case 5:
                (Je = g.stateNode), (Nt = !1);
                break e;
              case 3:
                (Je = g.stateNode.containerInfo), (Nt = !0);
                break e;
              case 4:
                (Je = g.stateNode.containerInfo), (Nt = !0);
                break e;
            }
            g = g.return;
          }
          if (Je === null) throw Error(i(160));
          Qf(c, p, u), (Je = null), (Nt = !1);
          var w = u.alternate;
          w !== null && (w.return = null), (u.return = null);
        } catch (N) {
          ze(u, t, N);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Gf(t, e), (t = t.sibling);
  }
  function Gf(e, t) {
    var r = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((At(t, e), Bt(e), a & 4)) {
          try {
            fo(3, e, e.return), zi(3, e);
          } catch (te) {
            ze(e, e.return, te);
          }
          try {
            fo(5, e, e.return);
          } catch (te) {
            ze(e, e.return, te);
          }
        }
        break;
      case 1:
        At(t, e), Bt(e), a & 512 && r !== null && hr(r, r.return);
        break;
      case 5:
        if (
          (At(t, e),
          Bt(e),
          a & 512 && r !== null && hr(r, r.return),
          e.flags & 32)
        ) {
          var u = e.stateNode;
          try {
            Nr(u, "");
          } catch (te) {
            ze(e, e.return, te);
          }
        }
        if (a & 4 && ((u = e.stateNode), u != null)) {
          var c = e.memoizedProps,
            p = r !== null ? r.memoizedProps : c,
            g = e.type,
            w = e.updateQueue;
          if (((e.updateQueue = null), w !== null))
            try {
              g === "input" && c.type === "radio" && c.name != null && G(u, c),
                Oa(g, p);
              var N = Oa(g, c);
              for (p = 0; p < w.length; p += 2) {
                var z = w[p],
                  I = w[p + 1];
                z === "style"
                  ? _s(u, I)
                  : z === "dangerouslySetInnerHTML"
                  ? Ls(u, I)
                  : z === "children"
                  ? Nr(u, I)
                  : Y(u, z, I, N);
              }
              switch (g) {
                case "input":
                  Ce(u, c);
                  break;
                case "textarea":
                  Ko(u, c);
                  break;
                case "select":
                  var O = u._wrapperState.wasMultiple;
                  u._wrapperState.wasMultiple = !!c.multiple;
                  var X = c.value;
                  X != null
                    ? Lt(u, !!c.multiple, X, !1)
                    : O !== !!c.multiple &&
                      (c.defaultValue != null
                        ? Lt(u, !!c.multiple, c.defaultValue, !0)
                        : Lt(u, !!c.multiple, c.multiple ? [] : "", !1));
              }
              u[eo] = c;
            } catch (te) {
              ze(e, e.return, te);
            }
        }
        break;
      case 6:
        if ((At(t, e), Bt(e), a & 4)) {
          if (e.stateNode === null) throw Error(i(162));
          (u = e.stateNode), (c = e.memoizedProps);
          try {
            u.nodeValue = c;
          } catch (te) {
            ze(e, e.return, te);
          }
        }
        break;
      case 3:
        if (
          (At(t, e), Bt(e), a & 4 && r !== null && r.memoizedState.isDehydrated)
        )
          try {
            Wr(t.containerInfo);
          } catch (te) {
            ze(e, e.return, te);
          }
        break;
      case 4:
        At(t, e), Bt(e);
        break;
      case 13:
        At(t, e),
          Bt(e),
          (u = e.child),
          u.flags & 8192 &&
            ((c = u.memoizedState !== null),
            (u.stateNode.isHidden = c),
            !c ||
              (u.alternate !== null && u.alternate.memoizedState !== null) ||
              (lu = Ie())),
          a & 4 && Yf(e);
        break;
      case 22:
        if (
          ((z = r !== null && r.memoizedState !== null),
          e.mode & 1 ? ((rt = (N = rt) || z), At(t, e), (rt = N)) : At(t, e),
          Bt(e),
          a & 8192)
        ) {
          if (
            ((N = e.memoizedState !== null),
            (e.stateNode.isHidden = N) && !z && (e.mode & 1) !== 0)
          )
            for (J = e, z = e.child; z !== null; ) {
              for (I = J = z; J !== null; ) {
                switch (((O = J), (X = O.child), O.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    fo(4, O, O.return);
                    break;
                  case 1:
                    hr(O, O.return);
                    var ee = O.stateNode;
                    if (typeof ee.componentWillUnmount == "function") {
                      (a = O), (r = O.return);
                      try {
                        (t = a),
                          (ee.props = t.memoizedProps),
                          (ee.state = t.memoizedState),
                          ee.componentWillUnmount();
                      } catch (te) {
                        ze(a, r, te);
                      }
                    }
                    break;
                  case 5:
                    hr(O, O.return);
                    break;
                  case 22:
                    if (O.memoizedState !== null) {
                      Zf(I);
                      continue;
                    }
                }
                X !== null ? ((X.return = O), (J = X)) : Zf(I);
              }
              z = z.sibling;
            }
          e: for (z = null, I = e; ; ) {
            if (I.tag === 5) {
              if (z === null) {
                z = I;
                try {
                  (u = I.stateNode),
                    N
                      ? ((c = u.style),
                        typeof c.setProperty == "function"
                          ? c.setProperty("display", "none", "important")
                          : (c.display = "none"))
                      : ((g = I.stateNode),
                        (w = I.memoizedProps.style),
                        (p =
                          w != null && w.hasOwnProperty("display")
                            ? w.display
                            : null),
                        (g.style.display = Rs("display", p)));
                } catch (te) {
                  ze(e, e.return, te);
                }
              }
            } else if (I.tag === 6) {
              if (z === null)
                try {
                  I.stateNode.nodeValue = N ? "" : I.memoizedProps;
                } catch (te) {
                  ze(e, e.return, te);
                }
            } else if (
              ((I.tag !== 22 && I.tag !== 23) ||
                I.memoizedState === null ||
                I === e) &&
              I.child !== null
            ) {
              (I.child.return = I), (I = I.child);
              continue;
            }
            if (I === e) break e;
            for (; I.sibling === null; ) {
              if (I.return === null || I.return === e) break e;
              z === I && (z = null), (I = I.return);
            }
            z === I && (z = null),
              (I.sibling.return = I.return),
              (I = I.sibling);
          }
        }
        break;
      case 19:
        At(t, e), Bt(e), a & 4 && Yf(e);
        break;
      case 21:
        break;
      default:
        At(t, e), Bt(e);
    }
  }
  function Bt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null; ) {
            if ($f(r)) {
              var a = r;
              break e;
            }
            r = r.return;
          }
          throw Error(i(160));
        }
        switch (a.tag) {
          case 5:
            var u = a.stateNode;
            a.flags & 32 && (Nr(u, ""), (a.flags &= -33));
            var c = Kf(e);
            ou(e, c, u);
            break;
          case 3:
          case 4:
            var p = a.stateNode.containerInfo,
              g = Kf(e);
            ru(e, g, p);
            break;
          default:
            throw Error(i(161));
        }
      } catch (w) {
        ze(e, e.return, w);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function a0(e, t, r) {
    (J = e), Xf(e);
  }
  function Xf(e, t, r) {
    for (var a = (e.mode & 1) !== 0; J !== null; ) {
      var u = J,
        c = u.child;
      if (u.tag === 22 && a) {
        var p = u.memoizedState !== null || Di;
        if (!p) {
          var g = u.alternate,
            w = (g !== null && g.memoizedState !== null) || rt;
          g = Di;
          var N = rt;
          if (((Di = p), (rt = w) && !N))
            for (J = u; J !== null; )
              (p = J),
                (w = p.child),
                p.tag === 22 && p.memoizedState !== null
                  ? Jf(u)
                  : w !== null
                  ? ((w.return = p), (J = w))
                  : Jf(u);
          for (; c !== null; ) (J = c), Xf(c), (c = c.sibling);
          (J = u), (Di = g), (rt = N);
        }
        bf(e);
      } else
        (u.subtreeFlags & 8772) !== 0 && c !== null
          ? ((c.return = u), (J = c))
          : bf(e);
    }
  }
  function bf(e) {
    for (; J !== null; ) {
      var t = J;
      if ((t.flags & 8772) !== 0) {
        var r = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                rt || zi(5, t);
                break;
              case 1:
                var a = t.stateNode;
                if (t.flags & 4 && !rt)
                  if (r === null) a.componentDidMount();
                  else {
                    var u =
                      t.elementType === t.type
                        ? r.memoizedProps
                        : jt(t.type, r.memoizedProps);
                    a.componentDidUpdate(
                      u,
                      r.memoizedState,
                      a.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var c = t.updateQueue;
                c !== null && bc(t, c, a);
                break;
              case 3:
                var p = t.updateQueue;
                if (p !== null) {
                  if (((r = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        r = t.child.stateNode;
                        break;
                      case 1:
                        r = t.child.stateNode;
                    }
                  bc(t, p, r);
                }
                break;
              case 5:
                var g = t.stateNode;
                if (r === null && t.flags & 4) {
                  r = g;
                  var w = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      w.autoFocus && r.focus();
                      break;
                    case "img":
                      w.src && (r.src = w.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var N = t.alternate;
                  if (N !== null) {
                    var z = N.memoizedState;
                    if (z !== null) {
                      var I = z.dehydrated;
                      I !== null && Wr(I);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(i(163));
            }
          rt || (t.flags & 512 && nu(t));
        } catch (O) {
          ze(t, t.return, O);
        }
      }
      if (t === e) {
        J = null;
        break;
      }
      if (((r = t.sibling), r !== null)) {
        (r.return = t.return), (J = r);
        break;
      }
      J = t.return;
    }
  }
  function Zf(e) {
    for (; J !== null; ) {
      var t = J;
      if (t === e) {
        J = null;
        break;
      }
      var r = t.sibling;
      if (r !== null) {
        (r.return = t.return), (J = r);
        break;
      }
      J = t.return;
    }
  }
  function Jf(e) {
    for (; J !== null; ) {
      var t = J;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              zi(4, t);
            } catch (w) {
              ze(t, r, w);
            }
            break;
          case 1:
            var a = t.stateNode;
            if (typeof a.componentDidMount == "function") {
              var u = t.return;
              try {
                a.componentDidMount();
              } catch (w) {
                ze(t, u, w);
              }
            }
            var c = t.return;
            try {
              nu(t);
            } catch (w) {
              ze(t, c, w);
            }
            break;
          case 5:
            var p = t.return;
            try {
              nu(t);
            } catch (w) {
              ze(t, p, w);
            }
        }
      } catch (w) {
        ze(t, t.return, w);
      }
      if (t === e) {
        J = null;
        break;
      }
      var g = t.sibling;
      if (g !== null) {
        (g.return = t.return), (J = g);
        break;
      }
      J = t.return;
    }
  }
  var l0 = Math.ceil,
    Fi = K.ReactCurrentDispatcher,
    iu = K.ReactCurrentOwner,
    Pt = K.ReactCurrentBatchConfig,
    we = 0,
    Xe = null,
    He = null,
    qe = 0,
    xt = 0,
    gr = sn(0),
    Ke = 0,
    po = null,
    zn = 0,
    Ii = 0,
    au = 0,
    vo = null,
    ft = null,
    lu = 0,
    yr = 1 / 0,
    bt = null,
    Bi = !1,
    uu = null,
    mn = null,
    Ui = !1,
    hn = null,
    Hi = 0,
    mo = 0,
    su = null,
    Wi = -1,
    $i = 0;
  function it() {
    return (we & 6) !== 0 ? Ie() : Wi !== -1 ? Wi : (Wi = Ie());
  }
  function gn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (we & 2) !== 0 && qe !== 0
      ? qe & -qe
      : $h.transition !== null
      ? ($i === 0 && ($i = $s()), $i)
      : ((e = Pe),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : qs(e.type))),
        e);
  }
  function Vt(e, t, r, a) {
    if (50 < mo) throw ((mo = 0), (su = null), Error(i(185)));
    Fr(e, r, a),
      ((we & 2) === 0 || e !== Xe) &&
        (e === Xe && ((we & 2) === 0 && (Ii |= r), Ke === 4 && yn(e, qe)),
        dt(e, a),
        r === 1 &&
          we === 0 &&
          (t.mode & 1) === 0 &&
          ((yr = Ie() + 500), yi && fn()));
  }
  function dt(e, t) {
    var r = e.callbackNode;
    $m(e, t);
    var a = qo(e, e === Xe ? qe : 0);
    if (a === 0)
      r !== null && Us(r), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = a & -a), e.callbackPriority !== t)) {
      if ((r != null && Us(r), t === 1))
        e.tag === 0 ? Wh(ed.bind(null, e)) : Fc(ed.bind(null, e)),
          Ih(function() {
            (we & 6) === 0 && fn();
          }),
          (r = null);
      else {
        switch (Ks(a)) {
          case 1:
            r = Ha;
            break;
          case 4:
            r = Hs;
            break;
          case 16:
            r = Xo;
            break;
          case 536870912:
            r = Ws;
            break;
          default:
            r = Xo;
        }
        r = ud(r, qf.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = r);
    }
  }
  function qf(e, t) {
    if (((Wi = -1), ($i = 0), (we & 6) !== 0)) throw Error(i(327));
    var r = e.callbackNode;
    if (xr() && e.callbackNode !== r) return null;
    var a = qo(e, e === Xe ? qe : 0);
    if (a === 0) return null;
    if ((a & 30) !== 0 || (a & e.expiredLanes) !== 0 || t) t = Ki(e, a);
    else {
      t = a;
      var u = we;
      we |= 2;
      var c = nd();
      (Xe !== e || qe !== t) && ((bt = null), (yr = Ie() + 500), In(e, t));
      do
        try {
          c0();
          break;
        } catch (g) {
          td(e, g);
        }
      while (!0);
      Ll(),
        (Fi.current = c),
        (we = u),
        He !== null ? (t = 0) : ((Xe = null), (qe = 0), (t = Ke));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((u = Wa(e)), u !== 0 && ((a = u), (t = cu(e, u)))),
        t === 1)
      )
        throw ((r = po), In(e, 0), yn(e, a), dt(e, Ie()), r);
      if (t === 6) yn(e, a);
      else {
        if (
          ((u = e.current.alternate),
          (a & 30) === 0 &&
            !u0(u) &&
            ((t = Ki(e, a)),
            t === 2 && ((c = Wa(e)), c !== 0 && ((a = c), (t = cu(e, c)))),
            t === 1))
        )
          throw ((r = po), In(e, 0), yn(e, a), dt(e, Ie()), r);
        switch (((e.finishedWork = u), (e.finishedLanes = a), t)) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            Bn(e, ft, bt);
            break;
          case 3:
            if (
              (yn(e, a),
              (a & 130023424) === a && ((t = lu + 500 - Ie()), 10 < t))
            ) {
              if (qo(e, 0) !== 0) break;
              if (((u = e.suspendedLanes), (u & a) !== a)) {
                it(), (e.pingedLanes |= e.suspendedLanes & u);
                break;
              }
              e.timeoutHandle = hl(Bn.bind(null, e, ft, bt), t);
              break;
            }
            Bn(e, ft, bt);
            break;
          case 4:
            if ((yn(e, a), (a & 4194240) === a)) break;
            for (t = e.eventTimes, u = -1; 0 < a; ) {
              var p = 31 - Rt(a);
              (c = 1 << p), (p = t[p]), p > u && (u = p), (a &= ~c);
            }
            if (
              ((a = u),
              (a = Ie() - a),
              (a =
                (120 > a
                  ? 120
                  : 480 > a
                  ? 480
                  : 1080 > a
                  ? 1080
                  : 1920 > a
                  ? 1920
                  : 3e3 > a
                  ? 3e3
                  : 4320 > a
                  ? 4320
                  : 1960 * l0(a / 1960)) - a),
              10 < a)
            ) {
              e.timeoutHandle = hl(Bn.bind(null, e, ft, bt), a);
              break;
            }
            Bn(e, ft, bt);
            break;
          case 5:
            Bn(e, ft, bt);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return dt(e, Ie()), e.callbackNode === r ? qf.bind(null, e) : null;
  }
  function cu(e, t) {
    var r = vo;
    return (
      e.current.memoizedState.isDehydrated && (In(e, t).flags |= 256),
      (e = Ki(e, t)),
      e !== 2 && ((t = ft), (ft = r), t !== null && fu(t)),
      e
    );
  }
  function fu(e) {
    ft === null ? (ft = e) : ft.push.apply(ft, e);
  }
  function u0(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && ((r = r.stores), r !== null))
          for (var a = 0; a < r.length; a++) {
            var u = r[a],
              c = u.getSnapshot;
            u = u.value;
            try {
              if (!_t(c(), u)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
        (r.return = t), (t = r);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function yn(e, t) {
    for (
      t &= ~au,
        t &= ~Ii,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var r = 31 - Rt(t),
        a = 1 << r;
      (e[r] = -1), (t &= ~a);
    }
  }
  function ed(e) {
    if ((we & 6) !== 0) throw Error(i(327));
    xr();
    var t = qo(e, 0);
    if ((t & 1) === 0) return dt(e, Ie()), null;
    var r = Ki(e, t);
    if (e.tag !== 0 && r === 2) {
      var a = Wa(e);
      a !== 0 && ((t = a), (r = cu(e, a)));
    }
    if (r === 1) throw ((r = po), In(e, 0), yn(e, t), dt(e, Ie()), r);
    if (r === 6) throw Error(i(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Bn(e, ft, bt),
      dt(e, Ie()),
      null
    );
  }
  function du(e, t) {
    var r = we;
    we |= 1;
    try {
      return e(t);
    } finally {
      (we = r), we === 0 && ((yr = Ie() + 500), yi && fn());
    }
  }
  function Fn(e) {
    hn !== null && hn.tag === 0 && (we & 6) === 0 && xr();
    var t = we;
    we |= 1;
    var r = Pt.transition,
      a = Pe;
    try {
      if (((Pt.transition = null), (Pe = 1), e)) return e();
    } finally {
      (Pe = a), (Pt.transition = r), (we = t), (we & 6) === 0 && fn();
    }
  }
  function pu() {
    (xt = gr.current), Me(gr);
  }
  function In(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var r = e.timeoutHandle;
    if ((r !== -1 && ((e.timeoutHandle = -1), Fh(r)), He !== null))
      for (r = He.return; r !== null; ) {
        var a = r;
        switch ((Cl(a), a.tag)) {
          case 1:
            (a = a.type.childContextTypes), a != null && hi();
            break;
          case 3:
            vr(), Me(ut), Me(et), Ol();
            break;
          case 5:
            Al(a);
            break;
          case 4:
            vr();
            break;
          case 13:
            Me(Ae);
            break;
          case 19:
            Me(Ae);
            break;
          case 10:
            Rl(a.type._context);
            break;
          case 22:
          case 23:
            pu();
        }
        r = r.return;
      }
    if (
      ((Xe = e),
      (He = e = xn(e.current, null)),
      (qe = xt = t),
      (Ke = 0),
      (po = null),
      (au = Ii = zn = 0),
      (ft = vo = null),
      Vn !== null)
    ) {
      for (t = 0; t < Vn.length; t++)
        if (((r = Vn[t]), (a = r.interleaved), a !== null)) {
          r.interleaved = null;
          var u = a.next,
            c = r.pending;
          if (c !== null) {
            var p = c.next;
            (c.next = u), (a.next = p);
          }
          r.pending = a;
        }
      Vn = null;
    }
    return e;
  }
  function td(e, t) {
    do {
      var r = He;
      try {
        if ((Ll(), (Ri.current = Ni), _i)) {
          for (var a = Ve.memoizedState; a !== null; ) {
            var u = a.queue;
            u !== null && (u.pending = null), (a = a.next);
          }
          _i = !1;
        }
        if (
          ((Dn = 0),
          (Ge = $e = Ve = null),
          (ao = !1),
          (lo = 0),
          (iu.current = null),
          r === null || r.return === null)
        ) {
          (Ke = 1), (po = t), (He = null);
          break;
        }
        e: {
          var c = e,
            p = r.return,
            g = r,
            w = t;
          if (
            ((t = qe),
            (g.flags |= 32768),
            w !== null && typeof w == "object" && typeof w.then == "function")
          ) {
            var N = w,
              z = g,
              I = z.tag;
            if ((z.mode & 1) === 0 && (I === 0 || I === 11 || I === 15)) {
              var O = z.alternate;
              O
                ? ((z.updateQueue = O.updateQueue),
                  (z.memoizedState = O.memoizedState),
                  (z.lanes = O.lanes))
                : ((z.updateQueue = null), (z.memoizedState = null));
            }
            var X = Tf(p);
            if (X !== null) {
              (X.flags &= -257),
                Lf(X, p, g, c, t),
                X.mode & 1 && Pf(c, N, t),
                (t = X),
                (w = N);
              var ee = t.updateQueue;
              if (ee === null) {
                var te = new Set();
                te.add(w), (t.updateQueue = te);
              } else ee.add(w);
              break e;
            } else {
              if ((t & 1) === 0) {
                Pf(c, N, t), vu();
                break e;
              }
              w = Error(i(426));
            }
          } else if (je && g.mode & 1) {
            var Be = Tf(p);
            if (Be !== null) {
              (Be.flags & 65536) === 0 && (Be.flags |= 256),
                Lf(Be, p, g, c, t),
                Pl(mr(w, g));
              break e;
            }
          }
          (c = w = mr(w, g)),
            Ke !== 4 && (Ke = 2),
            vo === null ? (vo = [c]) : vo.push(c),
            (c = p);
          do {
            switch (c.tag) {
              case 3:
                (c.flags |= 65536), (t &= -t), (c.lanes |= t);
                var T = kf(c, w, t);
                Xc(c, T);
                break e;
              case 1:
                g = w;
                var C = c.type,
                  _ = c.stateNode;
                if (
                  (c.flags & 128) === 0 &&
                  (typeof C.getDerivedStateFromError == "function" ||
                    (_ !== null &&
                      typeof _.componentDidCatch == "function" &&
                      (mn === null || !mn.has(_))))
                ) {
                  (c.flags |= 65536), (t &= -t), (c.lanes |= t);
                  var H = Ef(c, g, t);
                  Xc(c, H);
                  break e;
                }
            }
            c = c.return;
          } while (c !== null);
        }
        od(r);
      } catch (ne) {
        (t = ne), He === r && r !== null && (He = r = r.return);
        continue;
      }
      break;
    } while (!0);
  }
  function nd() {
    var e = Fi.current;
    return (Fi.current = Ni), e === null ? Ni : e;
  }
  function vu() {
    (Ke === 0 || Ke === 3 || Ke === 2) && (Ke = 4),
      Xe === null ||
        ((zn & 268435455) === 0 && (Ii & 268435455) === 0) ||
        yn(Xe, qe);
  }
  function Ki(e, t) {
    var r = we;
    we |= 2;
    var a = nd();
    (Xe !== e || qe !== t) && ((bt = null), In(e, t));
    do
      try {
        s0();
        break;
      } catch (u) {
        td(e, u);
      }
    while (!0);
    if ((Ll(), (we = r), (Fi.current = a), He !== null)) throw Error(i(261));
    return (Xe = null), (qe = 0), Ke;
  }
  function s0() {
    for (; He !== null; ) rd(He);
  }
  function c0() {
    for (; He !== null && !Om(); ) rd(He);
  }
  function rd(e) {
    var t = ld(e.alternate, e, xt);
    (e.memoizedProps = e.pendingProps),
      t === null ? od(e) : (He = t),
      (iu.current = null);
  }
  function od(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((r = n0(r, t, xt)), r !== null)) {
          He = r;
          return;
        }
      } else {
        if (((r = r0(r, t)), r !== null)) {
          (r.flags &= 32767), (He = r);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Ke = 6), (He = null);
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        He = t;
        return;
      }
      He = t = e;
    } while (t !== null);
    Ke === 0 && (Ke = 5);
  }
  function Bn(e, t, r) {
    var a = Pe,
      u = Pt.transition;
    try {
      (Pt.transition = null), (Pe = 1), f0(e, t, r, a);
    } finally {
      (Pt.transition = u), (Pe = a);
    }
    return null;
  }
  function f0(e, t, r, a) {
    do xr();
    while (hn !== null);
    if ((we & 6) !== 0) throw Error(i(327));
    r = e.finishedWork;
    var u = e.finishedLanes;
    if (r === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
      throw Error(i(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var c = r.lanes | r.childLanes;
    if (
      (Km(e, c),
      e === Xe && ((He = Xe = null), (qe = 0)),
      ((r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0) ||
        Ui ||
        ((Ui = !0),
        ud(Xo, function() {
          return xr(), null;
        })),
      (c = (r.flags & 15990) !== 0),
      (r.subtreeFlags & 15990) !== 0 || c)
    ) {
      (c = Pt.transition), (Pt.transition = null);
      var p = Pe;
      Pe = 1;
      var g = we;
      (we |= 4),
        (iu.current = null),
        i0(e, r),
        Gf(r, e),
        jh(vl),
        (ni = !!pl),
        (vl = pl = null),
        (e.current = r),
        a0(r),
        Dm(),
        (we = g),
        (Pe = p),
        (Pt.transition = c);
    } else e.current = r;
    if (
      (Ui && ((Ui = !1), (hn = e), (Hi = u)),
      (c = e.pendingLanes),
      c === 0 && (mn = null),
      Im(r.stateNode),
      dt(e, Ie()),
      t !== null)
    )
      for (a = e.onRecoverableError, r = 0; r < t.length; r++)
        (u = t[r]), a(u.value, { componentStack: u.stack, digest: u.digest });
    if (Bi) throw ((Bi = !1), (e = uu), (uu = null), e);
    return (
      (Hi & 1) !== 0 && e.tag !== 0 && xr(),
      (c = e.pendingLanes),
      (c & 1) !== 0 ? (e === su ? mo++ : ((mo = 0), (su = e))) : (mo = 0),
      fn(),
      null
    );
  }
  function xr() {
    if (hn !== null) {
      var e = Ks(Hi),
        t = Pt.transition,
        r = Pe;
      try {
        if (((Pt.transition = null), (Pe = 16 > e ? 16 : e), hn === null))
          var a = !1;
        else {
          if (((e = hn), (hn = null), (Hi = 0), (we & 6) !== 0))
            throw Error(i(331));
          var u = we;
          for (we |= 4, J = e.current; J !== null; ) {
            var c = J,
              p = c.child;
            if ((J.flags & 16) !== 0) {
              var g = c.deletions;
              if (g !== null) {
                for (var w = 0; w < g.length; w++) {
                  var N = g[w];
                  for (J = N; J !== null; ) {
                    var z = J;
                    switch (z.tag) {
                      case 0:
                      case 11:
                      case 15:
                        fo(8, z, c);
                    }
                    var I = z.child;
                    if (I !== null) (I.return = z), (J = I);
                    else
                      for (; J !== null; ) {
                        z = J;
                        var O = z.sibling,
                          X = z.return;
                        if ((Wf(z), z === N)) {
                          J = null;
                          break;
                        }
                        if (O !== null) {
                          (O.return = X), (J = O);
                          break;
                        }
                        J = X;
                      }
                  }
                }
                var ee = c.alternate;
                if (ee !== null) {
                  var te = ee.child;
                  if (te !== null) {
                    ee.child = null;
                    do {
                      var Be = te.sibling;
                      (te.sibling = null), (te = Be);
                    } while (te !== null);
                  }
                }
                J = c;
              }
            }
            if ((c.subtreeFlags & 2064) !== 0 && p !== null)
              (p.return = c), (J = p);
            else
              e: for (; J !== null; ) {
                if (((c = J), (c.flags & 2048) !== 0))
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      fo(9, c, c.return);
                  }
                var T = c.sibling;
                if (T !== null) {
                  (T.return = c.return), (J = T);
                  break e;
                }
                J = c.return;
              }
          }
          var C = e.current;
          for (J = C; J !== null; ) {
            p = J;
            var _ = p.child;
            if ((p.subtreeFlags & 2064) !== 0 && _ !== null)
              (_.return = p), (J = _);
            else
              e: for (p = C; J !== null; ) {
                if (((g = J), (g.flags & 2048) !== 0))
                  try {
                    switch (g.tag) {
                      case 0:
                      case 11:
                      case 15:
                        zi(9, g);
                    }
                  } catch (ne) {
                    ze(g, g.return, ne);
                  }
                if (g === p) {
                  J = null;
                  break e;
                }
                var H = g.sibling;
                if (H !== null) {
                  (H.return = g.return), (J = H);
                  break e;
                }
                J = g.return;
              }
          }
          if (
            ((we = u),
            fn(),
            Dt && typeof Dt.onPostCommitFiberRoot == "function")
          )
            try {
              Dt.onPostCommitFiberRoot(bo, e);
            } catch {}
          a = !0;
        }
        return a;
      } finally {
        (Pe = r), (Pt.transition = t);
      }
    }
    return !1;
  }
  function id(e, t, r) {
    (t = mr(r, t)),
      (t = kf(e, t, 1)),
      (e = pn(e, t, 1)),
      (t = it()),
      e !== null && (Fr(e, 1, t), dt(e, t));
  }
  function ze(e, t, r) {
    if (e.tag === 3) id(e, e, r);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          id(t, e, r);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (mn === null || !mn.has(a)))
          ) {
            (e = mr(r, e)),
              (e = Ef(t, e, 1)),
              (t = pn(t, e, 1)),
              (e = it()),
              t !== null && (Fr(t, 1, e), dt(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function d0(e, t, r) {
    var a = e.pingCache;
    a !== null && a.delete(t),
      (t = it()),
      (e.pingedLanes |= e.suspendedLanes & r),
      Xe === e &&
        (qe & r) === r &&
        (Ke === 4 || (Ke === 3 && (qe & 130023424) === qe && 500 > Ie() - lu)
          ? In(e, 0)
          : (au |= r)),
      dt(e, t);
  }
  function ad(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Jo), (Jo <<= 1), (Jo & 130023424) === 0 && (Jo = 4194304)));
    var r = it();
    (e = Yt(e, t)), e !== null && (Fr(e, t, r), dt(e, r));
  }
  function p0(e) {
    var t = e.memoizedState,
      r = 0;
    t !== null && (r = t.retryLane), ad(e, r);
  }
  function v0(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var a = e.stateNode,
          u = e.memoizedState;
        u !== null && (r = u.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      default:
        throw Error(i(314));
    }
    a !== null && a.delete(t), ad(e, r);
  }
  var ld;
  ld = function(e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || ut.current) ct = !0;
      else {
        if ((e.lanes & r) === 0 && (t.flags & 128) === 0)
          return (ct = !1), t0(e, t, r);
        ct = (e.flags & 131072) !== 0;
      }
    else (ct = !1), je && (t.flags & 1048576) !== 0 && Ic(t, wi, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var a = t.type;
        Oi(e, t), (e = t.pendingProps);
        var u = lr(t, et.current);
        pr(t, r), (u = Fl(null, t, a, e, u, r));
        var c = Il();
        return (
          (t.flags |= 1),
          typeof u == "object" &&
          u !== null &&
          typeof u.render == "function" &&
          u.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              st(a) ? ((c = !0), gi(t)) : (c = !1),
              (t.memoizedState =
                u.state !== null && u.state !== void 0 ? u.state : null),
              jl(t),
              (u.updater = Ai),
              (t.stateNode = u),
              (u._reactInternals = t),
              Kl(t, a, e, r),
              (t = Xl(null, t, a, !0, c, r)))
            : ((t.tag = 0), je && c && Sl(t), ot(null, t, u, r), (t = t.child)),
          t
        );
      case 16:
        a = t.elementType;
        e: {
          switch (
            (Oi(e, t),
            (e = t.pendingProps),
            (u = a._init),
            (a = u(a._payload)),
            (t.type = a),
            (u = t.tag = h0(a)),
            (e = jt(a, e)),
            u)
          ) {
            case 0:
              t = Gl(null, t, a, e, r);
              break e;
            case 1:
              t = Af(null, t, a, e, r);
              break e;
            case 11:
              t = Rf(null, t, a, e, r);
              break e;
            case 14:
              t = _f(null, t, a, jt(a.type, e), r);
              break e;
          }
          throw Error(i(306, a, ""));
        }
        return t;
      case 0:
        return (
          (a = t.type),
          (u = t.pendingProps),
          (u = t.elementType === a ? u : jt(a, u)),
          Gl(e, t, a, u, r)
        );
      case 1:
        return (
          (a = t.type),
          (u = t.pendingProps),
          (u = t.elementType === a ? u : jt(a, u)),
          Af(e, t, a, u, r)
        );
      case 3:
        e: {
          if ((Vf(t), e === null)) throw Error(i(387));
          (a = t.pendingProps),
            (c = t.memoizedState),
            (u = c.element),
            Gc(e, t),
            Ti(t, a, null, r);
          var p = t.memoizedState;
          if (((a = p.element), c.isDehydrated))
            if (
              ((c = {
                element: a,
                isDehydrated: !1,
                cache: p.cache,
                pendingSuspenseBoundaries: p.pendingSuspenseBoundaries,
                transitions: p.transitions,
              }),
              (t.updateQueue.baseState = c),
              (t.memoizedState = c),
              t.flags & 256)
            ) {
              (u = mr(Error(i(423)), t)), (t = Of(e, t, a, r, u));
              break e;
            } else if (a !== u) {
              (u = mr(Error(i(424)), t)), (t = Of(e, t, a, r, u));
              break e;
            } else
              for (
                yt = un(t.stateNode.containerInfo.firstChild),
                  gt = t,
                  je = !0,
                  Mt = null,
                  r = Qc(t, null, a, r),
                  t.child = r;
                r;

              )
                (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
          else {
            if ((cr(), a === u)) {
              t = Xt(e, t, r);
              break e;
            }
            ot(e, t, a, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Zc(t),
          e === null && El(t),
          (a = t.type),
          (u = t.pendingProps),
          (c = e !== null ? e.memoizedProps : null),
          (p = u.children),
          ml(a, u) ? (p = null) : c !== null && ml(a, c) && (t.flags |= 32),
          Nf(e, t),
          ot(e, t, p, r),
          t.child
        );
      case 6:
        return e === null && El(t), null;
      case 13:
        return Df(e, t, r);
      case 4:
        return (
          Nl(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = fr(t, null, a, r)) : ot(e, t, a, r),
          t.child
        );
      case 11:
        return (
          (a = t.type),
          (u = t.pendingProps),
          (u = t.elementType === a ? u : jt(a, u)),
          Rf(e, t, a, u, r)
        );
      case 7:
        return ot(e, t, t.pendingProps, r), t.child;
      case 8:
        return ot(e, t, t.pendingProps.children, r), t.child;
      case 12:
        return ot(e, t, t.pendingProps.children, r), t.child;
      case 10:
        e: {
          if (
            ((a = t.type._context),
            (u = t.pendingProps),
            (c = t.memoizedProps),
            (p = u.value),
            Re(ki, a._currentValue),
            (a._currentValue = p),
            c !== null)
          )
            if (_t(c.value, p)) {
              if (c.children === u.children && !ut.current) {
                t = Xt(e, t, r);
                break e;
              }
            } else
              for (c = t.child, c !== null && (c.return = t); c !== null; ) {
                var g = c.dependencies;
                if (g !== null) {
                  p = c.child;
                  for (var w = g.firstContext; w !== null; ) {
                    if (w.context === a) {
                      if (c.tag === 1) {
                        (w = Gt(-1, r & -r)), (w.tag = 2);
                        var N = c.updateQueue;
                        if (N !== null) {
                          N = N.shared;
                          var z = N.pending;
                          z === null
                            ? (w.next = w)
                            : ((w.next = z.next), (z.next = w)),
                            (N.pending = w);
                        }
                      }
                      (c.lanes |= r),
                        (w = c.alternate),
                        w !== null && (w.lanes |= r),
                        _l(c.return, r, t),
                        (g.lanes |= r);
                      break;
                    }
                    w = w.next;
                  }
                } else if (c.tag === 10) p = c.type === t.type ? null : c.child;
                else if (c.tag === 18) {
                  if (((p = c.return), p === null)) throw Error(i(341));
                  (p.lanes |= r),
                    (g = p.alternate),
                    g !== null && (g.lanes |= r),
                    _l(p, r, t),
                    (p = c.sibling);
                } else p = c.child;
                if (p !== null) p.return = c;
                else
                  for (p = c; p !== null; ) {
                    if (p === t) {
                      p = null;
                      break;
                    }
                    if (((c = p.sibling), c !== null)) {
                      (c.return = p.return), (p = c);
                      break;
                    }
                    p = p.return;
                  }
                c = p;
              }
          ot(e, t, u.children, r), (t = t.child);
        }
        return t;
      case 9:
        return (
          (u = t.type),
          (a = t.pendingProps.children),
          pr(t, r),
          (u = kt(u)),
          (a = a(u)),
          (t.flags |= 1),
          ot(e, t, a, r),
          t.child
        );
      case 14:
        return (
          (a = t.type),
          (u = jt(a, t.pendingProps)),
          (u = jt(a.type, u)),
          _f(e, t, a, u, r)
        );
      case 15:
        return Mf(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (a = t.type),
          (u = t.pendingProps),
          (u = t.elementType === a ? u : jt(a, u)),
          Oi(e, t),
          (t.tag = 1),
          st(a) ? ((e = !0), gi(t)) : (e = !1),
          pr(t, r),
          Sf(t, a, u),
          Kl(t, a, u, r),
          Xl(null, t, a, !0, e, r)
        );
      case 19:
        return Ff(e, t, r);
      case 22:
        return jf(e, t, r);
    }
    throw Error(i(156, t.tag));
  };
  function ud(e, t) {
    return Bs(e, t);
  }
  function m0(e, t, r, a) {
    (this.tag = e),
      (this.key = r),
      (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Tt(e, t, r, a) {
    return new m0(e, t, r, a);
  }
  function mu(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function h0(e) {
    if (typeof e == "function") return mu(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === Se)) return 11;
      if (e === Ne) return 14;
    }
    return 2;
  }
  function xn(e, t) {
    var r = e.alternate;
    return (
      r === null
        ? ((r = Tt(e.tag, t, e.key, e.mode)),
          (r.elementType = e.elementType),
          (r.type = e.type),
          (r.stateNode = e.stateNode),
          (r.alternate = e),
          (e.alternate = r))
        : ((r.pendingProps = t),
          (r.type = e.type),
          (r.flags = 0),
          (r.subtreeFlags = 0),
          (r.deletions = null)),
      (r.flags = e.flags & 14680064),
      (r.childLanes = e.childLanes),
      (r.lanes = e.lanes),
      (r.child = e.child),
      (r.memoizedProps = e.memoizedProps),
      (r.memoizedState = e.memoizedState),
      (r.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (r.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (r.sibling = e.sibling),
      (r.index = e.index),
      (r.ref = e.ref),
      r
    );
  }
  function Qi(e, t, r, a, u, c) {
    var p = 2;
    if (((a = e), typeof e == "function")) mu(e) && (p = 1);
    else if (typeof e == "string") p = 5;
    else
      e: switch (e) {
        case b:
          return Un(r.children, u, c, t);
        case Z:
          (p = 8), (u |= 8);
          break;
        case q:
          return (
            (e = Tt(12, r, t, u | 2)), (e.elementType = q), (e.lanes = c), e
          );
        case xe:
          return (e = Tt(13, r, t, u)), (e.elementType = xe), (e.lanes = c), e;
        case he:
          return (e = Tt(19, r, t, u)), (e.elementType = he), (e.lanes = c), e;
        case me:
          return Yi(r, u, c, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ie:
                p = 10;
                break e;
              case pe:
                p = 9;
                break e;
              case Se:
                p = 11;
                break e;
              case Ne:
                p = 14;
                break e;
              case de:
                (p = 16), (a = null);
                break e;
            }
          throw Error(i(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = Tt(p, r, t, u)), (t.elementType = e), (t.type = a), (t.lanes = c), t
    );
  }
  function Un(e, t, r, a) {
    return (e = Tt(7, e, a, t)), (e.lanes = r), e;
  }
  function Yi(e, t, r, a) {
    return (
      (e = Tt(22, e, a, t)),
      (e.elementType = me),
      (e.lanes = r),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function hu(e, t, r) {
    return (e = Tt(6, e, null, t)), (e.lanes = r), e;
  }
  function gu(e, t, r) {
    return (
      (t = Tt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = r),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function g0(e, t, r, a, u) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = $a(0)),
      (this.expirationTimes = $a(-1)),
      (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
      (this.entanglements = $a(0)),
      (this.identifierPrefix = a),
      (this.onRecoverableError = u),
      (this.mutableSourceEagerHydrationData = null);
  }
  function yu(e, t, r, a, u, c, p, g, w) {
    return (
      (e = new g0(e, t, r, g, w)),
      t === 1 ? ((t = 1), c === !0 && (t |= 8)) : (t = 0),
      (c = Tt(3, null, null, t)),
      (e.current = c),
      (c.stateNode = e),
      (c.memoizedState = {
        element: a,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      jl(c),
      e
    );
  }
  function y0(e, t, r) {
    var a =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: B,
      key: a == null ? null : "" + a,
      children: e,
      containerInfo: t,
      implementation: r,
    };
  }
  function sd(e) {
    if (!e) return cn;
    e = e._reactInternals;
    e: {
      if (_n(e) !== e || e.tag !== 1) throw Error(i(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (st(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(i(171));
    }
    if (e.tag === 1) {
      var r = e.type;
      if (st(r)) return Dc(e, r, t);
    }
    return t;
  }
  function cd(e, t, r, a, u, c, p, g, w) {
    return (
      (e = yu(r, a, !0, e, u, c, p, g, w)),
      (e.context = sd(null)),
      (r = e.current),
      (a = it()),
      (u = gn(r)),
      (c = Gt(a, u)),
      (c.callback = t ?? null),
      pn(r, c, u),
      (e.current.lanes = u),
      Fr(e, u, a),
      dt(e, a),
      e
    );
  }
  function Gi(e, t, r, a) {
    var u = t.current,
      c = it(),
      p = gn(u);
    return (
      (r = sd(r)),
      t.context === null ? (t.context = r) : (t.pendingContext = r),
      (t = Gt(c, p)),
      (t.payload = { element: e }),
      (a = a === void 0 ? null : a),
      a !== null && (t.callback = a),
      (e = pn(u, t, p)),
      e !== null && (Vt(e, u, p, c), Pi(e, u, p)),
      p
    );
  }
  function Xi(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function fd(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function xu(e, t) {
    fd(e, t), (e = e.alternate) && fd(e, t);
  }
  function x0() {
    return null;
  }
  var dd =
    typeof reportError == "function"
      ? reportError
      : function(e) {
          console.error(e);
        };
  function wu(e) {
    this._internalRoot = e;
  }
  (bi.prototype.render = wu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(i(409));
    Gi(e, t, null, null);
  }),
    (bi.prototype.unmount = wu.prototype.unmount = function() {
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Fn(function() {
          Gi(null, e, null, null);
        }),
          (t[Wt] = null);
      }
    });
  function bi(e) {
    this._internalRoot = e;
  }
  bi.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Gs();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < on.length && t !== 0 && t < on[r].priority; r++);
      on.splice(r, 0, e), r === 0 && Zs(e);
    }
  };
  function Su(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Zi(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function pd() {}
  function w0(e, t, r, a, u) {
    if (u) {
      if (typeof a == "function") {
        var c = a;
        a = function() {
          var N = Xi(p);
          c.call(N);
        };
      }
      var p = cd(t, a, e, 0, null, !1, !1, "", pd);
      return (
        (e._reactRootContainer = p),
        (e[Wt] = p.current),
        Jr(e.nodeType === 8 ? e.parentNode : e),
        Fn(),
        p
      );
    }
    for (; (u = e.lastChild); ) e.removeChild(u);
    if (typeof a == "function") {
      var g = a;
      a = function() {
        var N = Xi(w);
        g.call(N);
      };
    }
    var w = yu(e, 0, !1, null, null, !1, !1, "", pd);
    return (
      (e._reactRootContainer = w),
      (e[Wt] = w.current),
      Jr(e.nodeType === 8 ? e.parentNode : e),
      Fn(function() {
        Gi(t, w, r, a);
      }),
      w
    );
  }
  function Ji(e, t, r, a, u) {
    var c = r._reactRootContainer;
    if (c) {
      var p = c;
      if (typeof u == "function") {
        var g = u;
        u = function() {
          var w = Xi(p);
          g.call(w);
        };
      }
      Gi(t, p, e, u);
    } else p = w0(r, t, e, u, a);
    return Xi(p);
  }
  (Qs = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = zr(t.pendingLanes);
          r !== 0 &&
            (Ka(t, r | 1),
            dt(t, Ie()),
            (we & 6) === 0 && ((yr = Ie() + 500), fn()));
        }
        break;
      case 13:
        Fn(function() {
          var a = Yt(e, 1);
          if (a !== null) {
            var u = it();
            Vt(a, e, 1, u);
          }
        }),
          xu(e, 1);
    }
  }),
    (Qa = function(e) {
      if (e.tag === 13) {
        var t = Yt(e, 134217728);
        if (t !== null) {
          var r = it();
          Vt(t, e, 134217728, r);
        }
        xu(e, 134217728);
      }
    }),
    (Ys = function(e) {
      if (e.tag === 13) {
        var t = gn(e),
          r = Yt(e, t);
        if (r !== null) {
          var a = it();
          Vt(r, e, t, a);
        }
        xu(e, t);
      }
    }),
    (Gs = function() {
      return Pe;
    }),
    (Xs = function(e, t) {
      var r = Pe;
      try {
        return (Pe = e), t();
      } finally {
        Pe = r;
      }
    }),
    (Fa = function(e, t, r) {
      switch (t) {
        case "input":
          if ((Ce(e, r), (t = r.name), r.type === "radio" && t != null)) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (
              r = r.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < r.length;
              t++
            ) {
              var a = r[t];
              if (a !== e && a.form === e.form) {
                var u = mi(a);
                if (!u) throw Error(i(90));
                jr(a), Ce(a, u);
              }
            }
          }
          break;
        case "textarea":
          Ko(e, r);
          break;
        case "select":
          (t = r.value), t != null && Lt(e, !!r.multiple, t, !1);
      }
    }),
    (As = du),
    (Vs = Fn);
  var S0 = { usingClientEntryPoint: !1, Events: [to, ir, mi, js, Ns, du] },
    ho = {
      findFiberByHostInstance: Mn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    C0 = {
      bundleType: ho.bundleType,
      version: ho.version,
      rendererPackageName: ho.rendererPackageName,
      rendererConfig: ho.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: K.ReactCurrentDispatcher,
      findHostInstanceByFiber: function(e) {
        return (e = Fs(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: ho.findFiberByHostInstance || x0,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var qi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!qi.isDisabled && qi.supportsFiber)
      try {
        (bo = qi.inject(C0)), (Dt = qi);
      } catch {}
  }
  return (
    (pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = S0),
    (pt.createPortal = function(e, t) {
      var r =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Su(t)) throw Error(i(200));
      return y0(e, t, null, r);
    }),
    (pt.createRoot = function(e, t) {
      if (!Su(e)) throw Error(i(299));
      var r = !1,
        a = "",
        u = dd;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (u = t.onRecoverableError)),
        (t = yu(e, 1, !1, null, null, r, !1, a, u)),
        (e[Wt] = t.current),
        Jr(e.nodeType === 8 ? e.parentNode : e),
        new wu(t)
      );
    }),
    (pt.findDOMNode = function(e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(i(188))
          : ((e = Object.keys(e).join(",")), Error(i(268, e)));
      return (e = Fs(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (pt.flushSync = function(e) {
      return Fn(e);
    }),
    (pt.hydrate = function(e, t, r) {
      if (!Zi(t)) throw Error(i(200));
      return Ji(null, e, t, !0, r);
    }),
    (pt.hydrateRoot = function(e, t, r) {
      if (!Su(e)) throw Error(i(405));
      var a = (r != null && r.hydratedSources) || null,
        u = !1,
        c = "",
        p = dd;
      if (
        (r != null &&
          (r.unstable_strictMode === !0 && (u = !0),
          r.identifierPrefix !== void 0 && (c = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (p = r.onRecoverableError)),
        (t = cd(t, null, e, 1, r ?? null, u, !1, c, p)),
        (e[Wt] = t.current),
        Jr(e),
        a)
      )
        for (e = 0; e < a.length; e++)
          (r = a[e]),
            (u = r._getVersion),
            (u = u(r._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [r, u])
              : t.mutableSourceEagerHydrationData.push(r, u);
      return new bi(t);
    }),
    (pt.render = function(e, t, r) {
      if (!Zi(t)) throw Error(i(200));
      return Ji(null, e, t, !1, r);
    }),
    (pt.unmountComponentAtNode = function(e) {
      if (!Zi(e)) throw Error(i(40));
      return e._reactRootContainer
        ? (Fn(function() {
            Ji(null, null, e, !1, function() {
              (e._reactRootContainer = null), (e[Wt] = null);
            });
          }),
          !0)
        : !1;
    }),
    (pt.unstable_batchedUpdates = du),
    (pt.unstable_renderSubtreeIntoContainer = function(e, t, r, a) {
      if (!Zi(r)) throw Error(i(200));
      if (e == null || e._reactInternals === void 0) throw Error(i(38));
      return Ji(e, t, r, !1, a);
    }),
    (pt.version = "18.3.1-next-f1338f8080-20240426"),
    pt
  );
}
var Sp;
function dm() {
  if (Sp) return Mu.exports;
  Sp = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (o) {
        console.error(o);
      }
  }
  return n(), (Mu.exports = rx()), Mu.exports;
}
dm();
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Vo() {
  return (
    (Vo = Object.assign
      ? Object.assign.bind()
      : function(n) {
          for (var o = 1; o < arguments.length; o++) {
            var i = arguments[o];
            for (var l in i)
              Object.prototype.hasOwnProperty.call(i, l) && (n[l] = i[l]);
          }
          return n;
        }),
    Vo.apply(this, arguments)
  );
}
var Cn;
(function(n) {
  (n.Pop = "POP"), (n.Push = "PUSH"), (n.Replace = "REPLACE");
})(Cn || (Cn = {}));
const Cp = "popstate";
function ox(n) {
  n === void 0 && (n = {});
  function o(l, s) {
    let { pathname: f, search: d, hash: v } = l.location;
    return qu(
      "",
      { pathname: f, search: d, hash: v },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default"
    );
  }
  function i(l, s) {
    return typeof s == "string" ? s : Ca(s);
  }
  return ax(o, i, null, n);
}
function We(n, o) {
  if (n === !1 || n === null || typeof n > "u") throw new Error(o);
}
function pm(n, o) {
  if (!n) {
    typeof console < "u" && console.warn(o);
    try {
      throw new Error(o);
    } catch {}
  }
}
function ix() {
  return Math.random()
    .toString(36)
    .substr(2, 8);
}
function kp(n, o) {
  return { usr: n.state, key: n.key, idx: o };
}
function qu(n, o, i, l) {
  return (
    i === void 0 && (i = null),
    Vo(
      { pathname: typeof n == "string" ? n : n.pathname, search: "", hash: "" },
      typeof o == "string" ? Mr(o) : o,
      { state: i, key: (o && o.key) || l || ix() }
    )
  );
}
function Ca(n) {
  let { pathname: o = "/", search: i = "", hash: l = "" } = n;
  return (
    i && i !== "?" && (o += i.charAt(0) === "?" ? i : "?" + i),
    l && l !== "#" && (o += l.charAt(0) === "#" ? l : "#" + l),
    o
  );
}
function Mr(n) {
  let o = {};
  if (n) {
    let i = n.indexOf("#");
    i >= 0 && ((o.hash = n.substr(i)), (n = n.substr(0, i)));
    let l = n.indexOf("?");
    l >= 0 && ((o.search = n.substr(l)), (n = n.substr(0, l))),
      n && (o.pathname = n);
  }
  return o;
}
function ax(n, o, i, l) {
  l === void 0 && (l = {});
  let { window: s = document.defaultView, v5Compat: f = !1 } = l,
    d = s.history,
    v = Cn.Pop,
    h = null,
    m = y();
  m == null && ((m = 0), d.replaceState(Vo({}, d.state, { idx: m }), ""));
  function y() {
    return (d.state || { idx: null }).idx;
  }
  function x() {
    v = Cn.Pop;
    let E = y(),
      M = E == null ? null : E - m;
    (m = E), h && h({ action: v, location: R.location, delta: M });
  }
  function S(E, M) {
    v = Cn.Push;
    let U = qu(R.location, E, M);
    m = y() + 1;
    let Y = kp(U, m),
      K = R.createHref(U);
    try {
      d.pushState(Y, "", K);
    } catch ($) {
      if ($ instanceof DOMException && $.name === "DataCloneError") throw $;
      s.location.assign(K);
    }
    f && h && h({ action: v, location: R.location, delta: 1 });
  }
  function L(E, M) {
    v = Cn.Replace;
    let U = qu(R.location, E, M);
    m = y();
    let Y = kp(U, m),
      K = R.createHref(U);
    d.replaceState(Y, "", K),
      f && h && h({ action: v, location: R.location, delta: 0 });
  }
  function P(E) {
    let M = s.location.origin !== "null" ? s.location.origin : s.location.href,
      U = typeof E == "string" ? E : Ca(E);
    return (
      (U = U.replace(/ $/, "%20")),
      We(
        M,
        "No window.location.(origin|href) available to create URL for href: " +
          U
      ),
      new URL(U, M)
    );
  }
  let R = {
    get action() {
      return v;
    },
    get location() {
      return n(s, d);
    },
    listen(E) {
      if (h) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(Cp, x),
        (h = E),
        () => {
          s.removeEventListener(Cp, x), (h = null);
        }
      );
    },
    createHref(E) {
      return o(s, E);
    },
    createURL: P,
    encodeLocation(E) {
      let M = P(E);
      return { pathname: M.pathname, search: M.search, hash: M.hash };
    },
    push: S,
    replace: L,
    go(E) {
      return d.go(E);
    },
  };
  return R;
}
var Ep;
(function(n) {
  (n.data = "data"),
    (n.deferred = "deferred"),
    (n.redirect = "redirect"),
    (n.error = "error");
})(Ep || (Ep = {}));
function lx(n, o, i) {
  return i === void 0 && (i = "/"), ux(n, o, i);
}
function ux(n, o, i, l) {
  let s = typeof o == "string" ? Mr(o) : o,
    f = ks(s.pathname || "/", i);
  if (f == null) return null;
  let d = vm(n);
  sx(d);
  let v = null;
  for (let h = 0; v == null && h < d.length; ++h) {
    let m = Sx(f);
    v = yx(d[h], m);
  }
  return v;
}
function vm(n, o, i, l) {
  o === void 0 && (o = []), i === void 0 && (i = []), l === void 0 && (l = "");
  let s = (f, d, v) => {
    let h = {
      relativePath: v === void 0 ? f.path || "" : v,
      caseSensitive: f.caseSensitive === !0,
      childrenIndex: d,
      route: f,
    };
    h.relativePath.startsWith("/") &&
      (We(
        h.relativePath.startsWith(l),
        'Absolute route path "' +
          h.relativePath +
          '" nested under path ' +
          ('"' + l + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (h.relativePath = h.relativePath.slice(l.length)));
    let m = kn([l, h.relativePath]),
      y = i.concat(h);
    f.children &&
      f.children.length > 0 &&
      (We(
        f.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + m + '".')
      ),
      vm(f.children, o, y, m)),
      !(f.path == null && !f.index) &&
        o.push({ path: m, score: hx(m, f.index), routesMeta: y });
  };
  return (
    n.forEach((f, d) => {
      var v;
      if (f.path === "" || !((v = f.path) != null && v.includes("?"))) s(f, d);
      else for (let h of mm(f.path)) s(f, d, h);
    }),
    o
  );
}
function mm(n) {
  let o = n.split("/");
  if (o.length === 0) return [];
  let [i, ...l] = o,
    s = i.endsWith("?"),
    f = i.replace(/\?$/, "");
  if (l.length === 0) return s ? [f, ""] : [f];
  let d = mm(l.join("/")),
    v = [];
  return (
    v.push(...d.map((h) => (h === "" ? f : [f, h].join("/")))),
    s && v.push(...d),
    v.map((h) => (n.startsWith("/") && h === "" ? "/" : h))
  );
}
function sx(n) {
  n.sort((o, i) =>
    o.score !== i.score
      ? i.score - o.score
      : gx(
          o.routesMeta.map((l) => l.childrenIndex),
          i.routesMeta.map((l) => l.childrenIndex)
        )
  );
}
const cx = /^:[\w-]+$/,
  fx = 3,
  dx = 2,
  px = 1,
  vx = 10,
  mx = -2,
  Pp = (n) => n === "*";
function hx(n, o) {
  let i = n.split("/"),
    l = i.length;
  return (
    i.some(Pp) && (l += mx),
    o && (l += dx),
    i
      .filter((s) => !Pp(s))
      .reduce((s, f) => s + (cx.test(f) ? fx : f === "" ? px : vx), l)
  );
}
function gx(n, o) {
  return n.length === o.length && n.slice(0, -1).every((l, s) => l === o[s])
    ? n[n.length - 1] - o[o.length - 1]
    : 0;
}
function yx(n, o, i) {
  let { routesMeta: l } = n,
    s = {},
    f = "/",
    d = [];
  for (let v = 0; v < l.length; ++v) {
    let h = l[v],
      m = v === l.length - 1,
      y = f === "/" ? o : o.slice(f.length) || "/",
      x = xx(
        { path: h.relativePath, caseSensitive: h.caseSensitive, end: m },
        y
      ),
      S = h.route;
    if (!x) return null;
    Object.assign(s, x.params),
      d.push({
        params: s,
        pathname: kn([f, x.pathname]),
        pathnameBase: Px(kn([f, x.pathnameBase])),
        route: S,
      }),
      x.pathnameBase !== "/" && (f = kn([f, x.pathnameBase]));
  }
  return d;
}
function xx(n, o) {
  typeof n == "string" && (n = { path: n, caseSensitive: !1, end: !0 });
  let [i, l] = wx(n.path, n.caseSensitive, n.end),
    s = o.match(i);
  if (!s) return null;
  let f = s[0],
    d = f.replace(/(.)\/+$/, "$1"),
    v = s.slice(1);
  return {
    params: l.reduce((m, y, x) => {
      let { paramName: S, isOptional: L } = y;
      if (S === "*") {
        let R = v[x] || "";
        d = f.slice(0, f.length - R.length).replace(/(.)\/+$/, "$1");
      }
      const P = v[x];
      return (
        L && !P ? (m[S] = void 0) : (m[S] = (P || "").replace(/%2F/g, "/")), m
      );
    }, {}),
    pathname: f,
    pathnameBase: d,
    pattern: n,
  };
}
function wx(n, o, i) {
  o === void 0 && (o = !1),
    i === void 0 && (i = !0),
    pm(
      n === "*" || !n.endsWith("*") || n.endsWith("/*"),
      'Route path "' +
        n +
        '" will be treated as if it were ' +
        ('"' + n.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + n.replace(/\*$/, "/*") + '".')
    );
  let l = [],
    s =
      "^" +
      n
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (d, v, h) => (
            l.push({ paramName: v, isOptional: h != null }),
            h ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    n.endsWith("*")
      ? (l.push({ paramName: "*" }),
        (s += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : i
      ? (s += "\\/*$")
      : n !== "" && n !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, o ? void 0 : "i"), l]
  );
}
function Sx(n) {
  try {
    return n
      .split("/")
      .map((o) => decodeURIComponent(o).replace(/\//g, "%2F"))
      .join("/");
  } catch (o) {
    return (
      pm(
        !1,
        'The URL path "' +
          n +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + o + ").")
      ),
      n
    );
  }
}
function ks(n, o) {
  if (o === "/") return n;
  if (!n.toLowerCase().startsWith(o.toLowerCase())) return null;
  let i = o.endsWith("/") ? o.length - 1 : o.length,
    l = n.charAt(i);
  return l && l !== "/" ? null : n.slice(i) || "/";
}
function Cx(n, o) {
  o === void 0 && (o = "/");
  let { pathname: i, search: l = "", hash: s = "" } =
    typeof n == "string" ? Mr(n) : n;
  return {
    pathname: i ? (i.startsWith("/") ? i : kx(i, o)) : o,
    search: Tx(l),
    hash: Lx(s),
  };
}
function kx(n, o) {
  let i = o.replace(/\/+$/, "").split("/");
  return (
    n.split("/").forEach((s) => {
      s === ".." ? i.length > 1 && i.pop() : s !== "." && i.push(s);
    }),
    i.length > 1 ? i.join("/") : "/"
  );
}
function Au(n, o, i, l) {
  return (
    "Cannot include a '" +
    n +
    "' character in a manually specified " +
    ("`to." +
      o +
      "` field [" +
      JSON.stringify(l) +
      "].  Please separate it out to the ") +
    ("`to." + i + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Ex(n) {
  return n.filter(
    (o, i) => i === 0 || (o.route.path && o.route.path.length > 0)
  );
}
function hm(n, o) {
  let i = Ex(n);
  return o
    ? i.map((l, s) => (s === i.length - 1 ? l.pathname : l.pathnameBase))
    : i.map((l) => l.pathnameBase);
}
function gm(n, o, i, l) {
  l === void 0 && (l = !1);
  let s;
  typeof n == "string"
    ? (s = Mr(n))
    : ((s = Vo({}, n)),
      We(
        !s.pathname || !s.pathname.includes("?"),
        Au("?", "pathname", "search", s)
      ),
      We(
        !s.pathname || !s.pathname.includes("#"),
        Au("#", "pathname", "hash", s)
      ),
      We(!s.search || !s.search.includes("#"), Au("#", "search", "hash", s)));
  let f = n === "" || s.pathname === "",
    d = f ? "/" : s.pathname,
    v;
  if (d == null) v = i;
  else {
    let x = o.length - 1;
    if (!l && d.startsWith("..")) {
      let S = d.split("/");
      for (; S[0] === ".."; ) S.shift(), (x -= 1);
      s.pathname = S.join("/");
    }
    v = x >= 0 ? o[x] : "/";
  }
  let h = Cx(s, v),
    m = d && d !== "/" && d.endsWith("/"),
    y = (f || d === ".") && i.endsWith("/");
  return !h.pathname.endsWith("/") && (m || y) && (h.pathname += "/"), h;
}
const kn = (n) => n.join("/").replace(/\/\/+/g, "/"),
  Px = (n) => n.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Tx = (n) => (!n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n),
  Lx = (n) => (!n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n);
function Rx(n) {
  return (
    n != null &&
    typeof n.status == "number" &&
    typeof n.statusText == "string" &&
    typeof n.internal == "boolean" &&
    "data" in n
  );
}
const ym = ["post", "put", "patch", "delete"];
new Set(ym);
const _x = ["get", ...ym];
new Set(_x);
/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Oo() {
  return (
    (Oo = Object.assign
      ? Object.assign.bind()
      : function(n) {
          for (var o = 1; o < arguments.length; o++) {
            var i = arguments[o];
            for (var l in i)
              Object.prototype.hasOwnProperty.call(i, l) && (n[l] = i[l]);
          }
          return n;
        }),
    Oo.apply(this, arguments)
  );
}
const Es = j.createContext(null),
  Mx = j.createContext(null),
  Gn = j.createContext(null),
  Na = j.createContext(null),
  Xn = j.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  xm = j.createContext(null);
function jx(n, o) {
  let { relative: i } = o === void 0 ? {} : o;
  Wo() || We(!1);
  let { basename: l, navigator: s } = j.useContext(Gn),
    { hash: f, pathname: d, search: v } = Sm(n, { relative: i }),
    h = d;
  return (
    l !== "/" && (h = d === "/" ? l : kn([l, d])),
    s.createHref({ pathname: h, search: v, hash: f })
  );
}
function Wo() {
  return j.useContext(Na) != null;
}
function $o() {
  return Wo() || We(!1), j.useContext(Na).location;
}
function wm(n) {
  j.useContext(Gn).static || j.useLayoutEffect(n);
}
function Nx() {
  let { isDataRoute: n } = j.useContext(Xn);
  return n ? Kx() : Ax();
}
function Ax() {
  Wo() || We(!1);
  let n = j.useContext(Es),
    { basename: o, future: i, navigator: l } = j.useContext(Gn),
    { matches: s } = j.useContext(Xn),
    { pathname: f } = $o(),
    d = JSON.stringify(hm(s, i.v7_relativeSplatPath)),
    v = j.useRef(!1);
  return (
    wm(() => {
      v.current = !0;
    }),
    j.useCallback(
      function(m, y) {
        if ((y === void 0 && (y = {}), !v.current)) return;
        if (typeof m == "number") {
          l.go(m);
          return;
        }
        let x = gm(m, JSON.parse(d), f, y.relative === "path");
        n == null &&
          o !== "/" &&
          (x.pathname = x.pathname === "/" ? o : kn([o, x.pathname])),
          (y.replace ? l.replace : l.push)(x, y.state, y);
      },
      [o, l, d, f, n]
    )
  );
}
function Sm(n, o) {
  let { relative: i } = o === void 0 ? {} : o,
    { future: l } = j.useContext(Gn),
    { matches: s } = j.useContext(Xn),
    { pathname: f } = $o(),
    d = JSON.stringify(hm(s, l.v7_relativeSplatPath));
  return j.useMemo(() => gm(n, JSON.parse(d), f, i === "path"), [n, d, f, i]);
}
function Vx(n, o) {
  return Ox(n, o);
}
function Ox(n, o, i, l) {
  Wo() || We(!1);
  let { navigator: s, static: f } = j.useContext(Gn),
    { matches: d } = j.useContext(Xn),
    v = d[d.length - 1],
    h = v ? v.params : {};
  v && v.pathname;
  let m = v ? v.pathnameBase : "/";
  v && v.route;
  let y = $o(),
    x;
  if (o) {
    var S;
    let M = typeof o == "string" ? Mr(o) : o;
    m === "/" || ((S = M.pathname) != null && S.startsWith(m)) || We(!1),
      (x = M);
  } else x = y;
  let L = x.pathname || "/",
    P = L;
  if (m !== "/") {
    let M = m.replace(/^\//, "").split("/");
    P =
      "/" +
      L.replace(/^\//, "")
        .split("/")
        .slice(M.length)
        .join("/");
  }
  let R = lx(n, { pathname: P }),
    E = Bx(
      R &&
        R.map((M) =>
          Object.assign({}, M, {
            params: Object.assign({}, h, M.params),
            pathname: kn([
              m,
              s.encodeLocation
                ? s.encodeLocation(M.pathname).pathname
                : M.pathname,
            ]),
            pathnameBase:
              M.pathnameBase === "/"
                ? m
                : kn([
                    m,
                    s.encodeLocation
                      ? s.encodeLocation(M.pathnameBase).pathname
                      : M.pathnameBase,
                  ]),
          })
        ),
      d,
      i,
      l
    );
  return o && E
    ? j.createElement(
        Na.Provider,
        {
          value: {
            location: Oo(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              x
            ),
            navigationType: Cn.Pop,
          },
        },
        E
      )
    : E;
}
function Dx() {
  let n = $x(),
    o = Rx(n)
      ? n.status + " " + n.statusText
      : n instanceof Error
      ? n.message
      : JSON.stringify(n),
    i = n instanceof Error ? n.stack : null,
    s = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return j.createElement(
    j.Fragment,
    null,
    j.createElement("h2", null, "Unexpected Application Error!"),
    j.createElement("h3", { style: { fontStyle: "italic" } }, o),
    i ? j.createElement("pre", { style: s }, i) : null,
    null
  );
}
const zx = j.createElement(Dx, null);
class Fx extends j.Component {
  constructor(o) {
    super(o),
      (this.state = {
        location: o.location,
        revalidation: o.revalidation,
        error: o.error,
      });
  }
  static getDerivedStateFromError(o) {
    return { error: o };
  }
  static getDerivedStateFromProps(o, i) {
    return i.location !== o.location ||
      (i.revalidation !== "idle" && o.revalidation === "idle")
      ? { error: o.error, location: o.location, revalidation: o.revalidation }
      : {
          error: o.error !== void 0 ? o.error : i.error,
          location: i.location,
          revalidation: o.revalidation || i.revalidation,
        };
  }
  componentDidCatch(o, i) {
    console.error(
      "React Router caught the following error during render",
      o,
      i
    );
  }
  render() {
    return this.state.error !== void 0
      ? j.createElement(
          Xn.Provider,
          { value: this.props.routeContext },
          j.createElement(xm.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Ix(n) {
  let { routeContext: o, match: i, children: l } = n,
    s = j.useContext(Es);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (i.route.errorElement || i.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = i.route.id),
    j.createElement(Xn.Provider, { value: o }, l)
  );
}
function Bx(n, o, i, l) {
  var s;
  if (
    (o === void 0 && (o = []),
    i === void 0 && (i = null),
    l === void 0 && (l = null),
    n == null)
  ) {
    var f;
    if (!i) return null;
    if (i.errors) n = i.matches;
    else if (
      (f = l) != null &&
      f.v7_partialHydration &&
      o.length === 0 &&
      !i.initialized &&
      i.matches.length > 0
    )
      n = i.matches;
    else return null;
  }
  let d = n,
    v = (s = i) == null ? void 0 : s.errors;
  if (v != null) {
    let y = d.findIndex(
      (x) => x.route.id && (v == null ? void 0 : v[x.route.id]) !== void 0
    );
    y >= 0 || We(!1), (d = d.slice(0, Math.min(d.length, y + 1)));
  }
  let h = !1,
    m = -1;
  if (i && l && l.v7_partialHydration)
    for (let y = 0; y < d.length; y++) {
      let x = d[y];
      if (
        ((x.route.HydrateFallback || x.route.hydrateFallbackElement) && (m = y),
        x.route.id)
      ) {
        let { loaderData: S, errors: L } = i,
          P =
            x.route.loader &&
            S[x.route.id] === void 0 &&
            (!L || L[x.route.id] === void 0);
        if (x.route.lazy || P) {
          (h = !0), m >= 0 ? (d = d.slice(0, m + 1)) : (d = [d[0]]);
          break;
        }
      }
    }
  return d.reduceRight((y, x, S) => {
    let L,
      P = !1,
      R = null,
      E = null;
    i &&
      ((L = v && x.route.id ? v[x.route.id] : void 0),
      (R = x.route.errorElement || zx),
      h &&
        (m < 0 && S === 0
          ? (Qx("route-fallback"), (P = !0), (E = null))
          : m === S &&
            ((P = !0), (E = x.route.hydrateFallbackElement || null))));
    let M = o.concat(d.slice(0, S + 1)),
      U = () => {
        let Y;
        return (
          L
            ? (Y = R)
            : P
            ? (Y = E)
            : x.route.Component
            ? (Y = j.createElement(x.route.Component, null))
            : x.route.element
            ? (Y = x.route.element)
            : (Y = y),
          j.createElement(Ix, {
            match: x,
            routeContext: { outlet: y, matches: M, isDataRoute: i != null },
            children: Y,
          })
        );
      };
    return i && (x.route.ErrorBoundary || x.route.errorElement || S === 0)
      ? j.createElement(Fx, {
          location: i.location,
          revalidation: i.revalidation,
          component: R,
          error: L,
          children: U(),
          routeContext: { outlet: null, matches: M, isDataRoute: !0 },
        })
      : U();
  }, null);
}
var Cm = (function(n) {
    return (
      (n.UseBlocker = "useBlocker"),
      (n.UseRevalidator = "useRevalidator"),
      (n.UseNavigateStable = "useNavigate"),
      n
    );
  })(Cm || {}),
  km = (function(n) {
    return (
      (n.UseBlocker = "useBlocker"),
      (n.UseLoaderData = "useLoaderData"),
      (n.UseActionData = "useActionData"),
      (n.UseRouteError = "useRouteError"),
      (n.UseNavigation = "useNavigation"),
      (n.UseRouteLoaderData = "useRouteLoaderData"),
      (n.UseMatches = "useMatches"),
      (n.UseRevalidator = "useRevalidator"),
      (n.UseNavigateStable = "useNavigate"),
      (n.UseRouteId = "useRouteId"),
      n
    );
  })(km || {});
function Ux(n) {
  let o = j.useContext(Es);
  return o || We(!1), o;
}
function Hx(n) {
  let o = j.useContext(Mx);
  return o || We(!1), o;
}
function Wx(n) {
  let o = j.useContext(Xn);
  return o || We(!1), o;
}
function Em(n) {
  let o = Wx(),
    i = o.matches[o.matches.length - 1];
  return i.route.id || We(!1), i.route.id;
}
function $x() {
  var n;
  let o = j.useContext(xm),
    i = Hx(),
    l = Em();
  return o !== void 0 ? o : (n = i.errors) == null ? void 0 : n[l];
}
function Kx() {
  let { router: n } = Ux(Cm.UseNavigateStable),
    o = Em(km.UseNavigateStable),
    i = j.useRef(!1);
  return (
    wm(() => {
      i.current = !0;
    }),
    j.useCallback(
      function(s, f) {
        f === void 0 && (f = {}),
          i.current &&
            (typeof s == "number"
              ? n.navigate(s)
              : n.navigate(s, Oo({ fromRouteId: o }, f)));
      },
      [n, o]
    )
  );
}
const Tp = {};
function Qx(n, o, i) {
  Tp[n] || (Tp[n] = !0);
}
function Yx(n, o) {
  n == null || n.v7_startTransition, n == null || n.v7_relativeSplatPath;
}
function Cr(n) {
  We(!1);
}
function Gx(n) {
  let {
    basename: o = "/",
    children: i = null,
    location: l,
    navigationType: s = Cn.Pop,
    navigator: f,
    static: d = !1,
    future: v,
  } = n;
  Wo() && We(!1);
  let h = o.replace(/^\/*/, "/"),
    m = j.useMemo(
      () => ({
        basename: h,
        navigator: f,
        static: d,
        future: Oo({ v7_relativeSplatPath: !1 }, v),
      }),
      [h, v, f, d]
    );
  typeof l == "string" && (l = Mr(l));
  let {
      pathname: y = "/",
      search: x = "",
      hash: S = "",
      state: L = null,
      key: P = "default",
    } = l,
    R = j.useMemo(() => {
      let E = ks(y, h);
      return E == null
        ? null
        : {
            location: { pathname: E, search: x, hash: S, state: L, key: P },
            navigationType: s,
          };
    }, [h, y, x, S, L, P, s]);
  return R == null
    ? null
    : j.createElement(
        Gn.Provider,
        { value: m },
        j.createElement(Na.Provider, { children: i, value: R })
      );
}
function Xx(n) {
  let { children: o, location: i } = n;
  return Vx(es(o), i);
}
new Promise(() => {});
function es(n, o) {
  o === void 0 && (o = []);
  let i = [];
  return (
    j.Children.forEach(n, (l, s) => {
      if (!j.isValidElement(l)) return;
      let f = [...o, s];
      if (l.type === j.Fragment) {
        i.push.apply(i, es(l.props.children, f));
        return;
      }
      l.type !== Cr && We(!1), !l.props.index || !l.props.children || We(!1);
      let d = {
        id: l.props.id || f.join("-"),
        caseSensitive: l.props.caseSensitive,
        element: l.props.element,
        Component: l.props.Component,
        index: l.props.index,
        path: l.props.path,
        loader: l.props.loader,
        action: l.props.action,
        errorElement: l.props.errorElement,
        ErrorBoundary: l.props.ErrorBoundary,
        hasErrorBoundary:
          l.props.ErrorBoundary != null || l.props.errorElement != null,
        shouldRevalidate: l.props.shouldRevalidate,
        handle: l.props.handle,
        lazy: l.props.lazy,
      };
      l.props.children && (d.children = es(l.props.children, f)), i.push(d);
    }),
    i
  );
}
/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ts() {
  return (
    (ts = Object.assign
      ? Object.assign.bind()
      : function(n) {
          for (var o = 1; o < arguments.length; o++) {
            var i = arguments[o];
            for (var l in i)
              Object.prototype.hasOwnProperty.call(i, l) && (n[l] = i[l]);
          }
          return n;
        }),
    ts.apply(this, arguments)
  );
}
function bx(n, o) {
  if (n == null) return {};
  var i = {},
    l = Object.keys(n),
    s,
    f;
  for (f = 0; f < l.length; f++)
    (s = l[f]), !(o.indexOf(s) >= 0) && (i[s] = n[s]);
  return i;
}
function Zx(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
function Jx(n, o) {
  return n.button === 0 && (!o || o === "_self") && !Zx(n);
}
const qx = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  ew = "6";
try {
  window.__reactRouterVersion = ew;
} catch {}
const tw = "startTransition",
  Lp = j0[tw];
function nw(n) {
  let { basename: o, children: i, future: l, window: s } = n,
    f = j.useRef();
  f.current == null && (f.current = ox({ window: s, v5Compat: !0 }));
  let d = f.current,
    [v, h] = j.useState({ action: d.action, location: d.location }),
    { v7_startTransition: m } = l || {},
    y = j.useCallback(
      (x) => {
        m && Lp ? Lp(() => h(x)) : h(x);
      },
      [h, m]
    );
  return (
    j.useLayoutEffect(() => d.listen(y), [d, y]),
    j.useEffect(() => Yx(l), [l]),
    j.createElement(Gx, {
      basename: o,
      children: i,
      location: v.location,
      navigationType: v.action,
      navigator: d,
      future: l,
    })
  );
}
const rw =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  ow = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Wn = j.forwardRef(function(o, i) {
    let {
        onClick: l,
        relative: s,
        reloadDocument: f,
        replace: d,
        state: v,
        target: h,
        to: m,
        preventScrollReset: y,
        viewTransition: x,
      } = o,
      S = bx(o, qx),
      { basename: L } = j.useContext(Gn),
      P,
      R = !1;
    if (typeof m == "string" && ow.test(m) && ((P = m), rw))
      try {
        let Y = new URL(window.location.href),
          K = m.startsWith("//") ? new URL(Y.protocol + m) : new URL(m),
          $ = ks(K.pathname, L);
        K.origin === Y.origin && $ != null
          ? (m = $ + K.search + K.hash)
          : (R = !0);
      } catch {}
    let E = jx(m, { relative: s }),
      M = iw(m, {
        replace: d,
        state: v,
        target: h,
        preventScrollReset: y,
        relative: s,
        viewTransition: x,
      });
    function U(Y) {
      l && l(Y), Y.defaultPrevented || M(Y);
    }
    return j.createElement(
      "a",
      ts({}, S, { href: P || E, onClick: R || f ? l : U, ref: i, target: h })
    );
  });
var Rp;
(function(n) {
  (n.UseScrollRestoration = "useScrollRestoration"),
    (n.UseSubmit = "useSubmit"),
    (n.UseSubmitFetcher = "useSubmitFetcher"),
    (n.UseFetcher = "useFetcher"),
    (n.useViewTransitionState = "useViewTransitionState");
})(Rp || (Rp = {}));
var _p;
(function(n) {
  (n.UseFetcher = "useFetcher"),
    (n.UseFetchers = "useFetchers"),
    (n.UseScrollRestoration = "useScrollRestoration");
})(_p || (_p = {}));
function iw(n, o) {
  let {
      target: i,
      replace: l,
      state: s,
      preventScrollReset: f,
      relative: d,
      viewTransition: v,
    } = o === void 0 ? {} : o,
    h = Nx(),
    m = $o(),
    y = Sm(n, { relative: d });
  return j.useCallback(
    (x) => {
      if (Jx(x, i)) {
        x.preventDefault();
        let S = l !== void 0 ? l : Ca(m) === Ca(y);
        h(n, {
          replace: S,
          state: s,
          preventScrollReset: f,
          relative: d,
          viewTransition: v,
        });
      }
    },
    [m, h, y, l, s, i, n, f, d, v]
  );
}
const aw = () => {
  const { pathname: n } = $o();
  return (
    j.useEffect(() => {
      window.scrollTo(0, 0);
    }, [n]),
    null
  );
};
var Pm = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Mp = Ht.createContext && Ht.createContext(Pm),
  En = function() {
    return (
      (En =
        Object.assign ||
        function(n) {
          for (var o, i = 1, l = arguments.length; i < l; i++) {
            o = arguments[i];
            for (var s in o)
              Object.prototype.hasOwnProperty.call(o, s) && (n[s] = o[s]);
          }
          return n;
        }),
      En.apply(this, arguments)
    );
  },
  lw = function(n, o) {
    var i = {};
    for (var l in n)
      Object.prototype.hasOwnProperty.call(n, l) &&
        o.indexOf(l) < 0 &&
        (i[l] = n[l]);
    if (n != null && typeof Object.getOwnPropertySymbols == "function")
      for (var s = 0, l = Object.getOwnPropertySymbols(n); s < l.length; s++)
        o.indexOf(l[s]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(n, l[s]) &&
          (i[l[s]] = n[l[s]]);
    return i;
  };
function Tm(n) {
  return (
    n &&
    n.map(function(o, i) {
      return Ht.createElement(o.tag, En({ key: i }, o.attr), Tm(o.child));
    })
  );
}
function Qe(n) {
  return function(o) {
    return Ht.createElement(uw, En({ attr: En({}, n.attr) }, o), Tm(n.child));
  };
}
function uw(n) {
  var o = function(i) {
    var l = n.attr,
      s = n.size,
      f = n.title,
      d = lw(n, ["attr", "size", "title"]),
      v = s || i.size || "1em",
      h;
    return (
      i.className && (h = i.className),
      n.className && (h = (h ? h + " " : "") + n.className),
      Ht.createElement(
        "svg",
        En(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          i.attr,
          l,
          d,
          {
            className: h,
            style: En(En({ color: n.color || i.color }, i.style), n.style),
            height: v,
            width: v,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        f && Ht.createElement("title", null, f),
        n.children
      )
    );
  };
  return Mp !== void 0
    ? Ht.createElement(Mp.Consumer, null, function(i) {
        return o(i);
      })
    : o(Pm);
}
function Dw(n) {
  return Qe({
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "circle", attr: { cx: "12", cy: "12", r: "10" } },
      { tag: "polyline", attr: { points: "8 12 12 16 16 12" } },
      { tag: "line", attr: { x1: "12", y1: "8", x2: "12", y2: "16" } },
    ],
  })(n);
}
function sw(n) {
  return Qe({
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [{ tag: "polyline", attr: { points: "18 15 12 9 6 15" } }],
  })(n);
}
function zw(n) {
  return Qe({
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "circle", attr: { cx: "12", cy: "12", r: "10" } },
      { tag: "polyline", attr: { points: "12 6 12 12 16 14" } },
    ],
  })(n);
}
function Fw(n) {
  return Qe({
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: {
          d:
            "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
        },
      },
    ],
  })(n);
}
function cw(n) {
  return Qe({
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: {
          d:
            "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
        },
      },
    ],
  })(n);
}
function fw(n) {
  return Qe({
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "circle", attr: { cx: "12", cy: "12", r: "10" } },
      { tag: "line", attr: { x1: "2", y1: "12", x2: "22", y2: "12" } },
      {
        tag: "path",
        attr: {
          d:
            "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
        },
      },
    ],
  })(n);
}
function Iw(n) {
  return Qe({
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "rect",
        attr: { x: "2", y: "2", width: "20", height: "20", rx: "5", ry: "5" },
      },
      {
        tag: "path",
        attr: { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" },
      },
      { tag: "line", attr: { x1: "17.5", y1: "6.5", x2: "17.51", y2: "6.5" } },
    ],
  })(n);
}
function dw(n) {
  return Qe({
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: {
          d:
            "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
        },
      },
      { tag: "rect", attr: { x: "2", y: "9", width: "4", height: "12" } },
      { tag: "circle", attr: { cx: "4", cy: "4", r: "2" } },
    ],
  })(n);
}
function Bw(n) {
  return Qe({
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: {
          d:
            "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
        },
      },
      { tag: "polyline", attr: { points: "22,6 12,13 2,6" } },
    ],
  })(n);
}
function Uw(n) {
  return Qe({
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" },
      },
      { tag: "circle", attr: { cx: "12", cy: "10", r: "3" } },
    ],
  })(n);
}
function pw(n) {
  return Qe({
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "line", attr: { x1: "3", y1: "12", x2: "21", y2: "12" } },
      { tag: "line", attr: { x1: "3", y1: "6", x2: "21", y2: "6" } },
      { tag: "line", attr: { x1: "3", y1: "18", x2: "21", y2: "18" } },
    ],
  })(n);
}
function jp(n) {
  return Qe({
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" },
      },
    ],
  })(n);
}
function Hw(n) {
  return Qe({
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: {
          d:
            "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
        },
      },
    ],
  })(n);
}
function Ww(n) {
  return Qe({
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "circle", attr: { cx: "11", cy: "11", r: "8" } },
      { tag: "line", attr: { x1: "21", y1: "21", x2: "16.65", y2: "16.65" } },
    ],
  })(n);
}
function Np(n) {
  return Qe({
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "circle", attr: { cx: "12", cy: "12", r: "5" } },
      { tag: "line", attr: { x1: "12", y1: "1", x2: "12", y2: "3" } },
      { tag: "line", attr: { x1: "12", y1: "21", x2: "12", y2: "23" } },
      { tag: "line", attr: { x1: "4.22", y1: "4.22", x2: "5.64", y2: "5.64" } },
      {
        tag: "line",
        attr: { x1: "18.36", y1: "18.36", x2: "19.78", y2: "19.78" },
      },
      { tag: "line", attr: { x1: "1", y1: "12", x2: "3", y2: "12" } },
      { tag: "line", attr: { x1: "21", y1: "12", x2: "23", y2: "12" } },
      {
        tag: "line",
        attr: { x1: "4.22", y1: "19.78", x2: "5.64", y2: "18.36" },
      },
      {
        tag: "line",
        attr: { x1: "18.36", y1: "5.64", x2: "19.78", y2: "4.22" },
      },
    ],
  })(n);
}
function $w(n) {
  return Qe({
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: {
          d:
            "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z",
        },
      },
      { tag: "line", attr: { x1: "7", y1: "7", x2: "7.01", y2: "7" } },
    ],
  })(n);
}
function vw(n) {
  return Qe({
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: {
          d:
            "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z",
        },
      },
    ],
  })(n);
}
function Lm(n) {
  return Qe({
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "line", attr: { x1: "18", y1: "6", x2: "6", y2: "18" } },
      { tag: "line", attr: { x1: "6", y1: "6", x2: "18", y2: "18" } },
    ],
  })(n);
}
function mw(n) {
  return Qe({
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: {
          d:
            "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z",
        },
      },
      {
        tag: "polygon",
        attr: { points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" },
      },
    ],
  })(n);
}
function hw() {
  return D.jsx("div", {
    className:
      "font-general-regular flex justify-center items-center text-center",
    children: D.jsxs("div", {
      className: "text-lg text-ternary-dark dark:text-ternary-light",
      children: [
        "© ",
        new Date().getFullYear(),
        D.jsx("a", {
          href:
            "https://github.com/realbenjaminmanjolo/react-tailwindcss-portfolio",
          target: "__blank",
          className:
            "hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500",
          children: "React & Tailwind CSS Portfolio",
        }),
        ".",
        D.jsx("a", {
          href: "https://benjaminmanjolo.me",
          target: "__blank",
          className:
            "text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500",
          children: "benjaminmanjolo",
        }),
      ],
    }),
  });
}
const gw = [
    { id: 1, icon: D.jsx(fw, {}), url: "https://www.benjaminmanjolo.me/" },
    {
      id: 2,
      icon: D.jsx(cw, {}),
      url: "https://github.com/realbenjaminmanjolo",
    },
    {
      id: 3,
      icon: D.jsx(vw, {}),
      url: "https://twitter.com/realbenjaminmanjolo",
    },
    {
      id: 4,
      icon: D.jsx(dw, {}),
      url: "https://www.linkedin.com/in/realbenjaminmanjolo",
    },
    {
      id: 5,
      icon: D.jsx(mw, {}),
      url: "https://www.youtube.com/c/realbenjaminmanjolo",
    },
  ],
  yw = () =>
    D.jsx("div", {
      className: "container mx-auto",
      children: D.jsxs("div", {
        className:
          "pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark",
        children: [
          D.jsxs("div", {
            className:
              "font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28",
            children: [
              D.jsx("p", {
                className:
                  "text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5",
                children: "Follow me",
              }),
              D.jsx("ul", {
                className: "flex gap-4 sm:gap-8",
                children: gw.map((n) =>
                  D.jsx(
                    "a",
                    {
                      href: n.url,
                      target: "__blank",
                      className:
                        "text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300",
                      children: D.jsx("i", {
                        className: "text-xl sm:text-2xl md:text-3xl",
                        children: n.icon,
                      }),
                    },
                    n.id
                  )
                ),
              }),
            ],
          }),
          D.jsx(hw, {}),
        ],
      }),
    }),
  xw = () => {
    const [n, o] = j.useState(localStorage.theme),
      i = n === "dark" ? "light" : "dark";
    return (
      j.useEffect(() => {
        const l = window.document.documentElement;
        l.classList.remove(i),
          l.classList.add(n),
          localStorage.setItem("theme", n);
      }, [n, i]),
      [i, o]
    );
  };
function ka({ title: n }) {
  return D.jsx("button", { children: n });
}
const ww = [
    "Web Application",
    "Mobile Application",
    "UI/UX Design",
    "Branding",
  ],
  Sw = ({ onClose: n, onRequest: o }) =>
    D.jsxs(fm.div, {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className:
        "font-general-medium fixed inset-0 z-30 transition-all duration-500",
      children: [
        D.jsx("div", {
          className:
            "bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20",
        }),
        D.jsx("main", {
          className: "flex flex-col items-center justify-center h-full w-full",
          children: D.jsx("div", {
            className: "modal-wrapper flex items-center z-30",
            children: D.jsxs("div", {
              className:
                "modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative",
              children: [
                D.jsxs("div", {
                  className:
                    "modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark",
                  children: [
                    D.jsx("h5", {
                      className:
                        " text-primary-dark dark:text-primary-light text-xl",
                      children: "What project are you looking for?",
                    }),
                    D.jsx("button", {
                      onClick: n,
                      className:
                        "px-4 font-bold text-primary-dark dark:text-primary-light",
                      children: D.jsx(Lm, { className: "text-3xl" }),
                    }),
                  ],
                }),
                D.jsx("div", {
                  className: "modal-body p-5 w-full h-full",
                  children: D.jsxs("form", {
                    onSubmit: (i) => {
                      i.preventDefault();
                    },
                    className: "max-w-xl m-4 text-left",
                    children: [
                      D.jsx("div", {
                        className: "",
                        children: D.jsx("input", {
                          className:
                            "w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",
                          id: "name",
                          name: "name",
                          type: "text",
                          required: "",
                          placeholder: "Name",
                          "aria-label": "Name",
                        }),
                      }),
                      D.jsx("div", {
                        className: "mt-6",
                        children: D.jsx("input", {
                          className:
                            "w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",
                          id: "email",
                          name: "email",
                          type: "text",
                          required: "",
                          placeholder: "Email",
                          "aria-label": "Email",
                        }),
                      }),
                      D.jsx("div", {
                        className: "mt-6",
                        children: D.jsx("select", {
                          className:
                            "w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",
                          id: "subject",
                          name: "subject",
                          type: "text",
                          required: "",
                          "aria-label": "Project Category",
                          children: ww.map((i) =>
                            D.jsx(
                              "option",
                              {
                                className: "text-normal sm:text-md",
                                children: i,
                              },
                              i
                            )
                          ),
                        }),
                      }),
                      D.jsx("div", {
                        className: "mt-6",
                        children: D.jsx("textarea", {
                          className:
                            "w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",
                          id: "message",
                          name: "message",
                          cols: "14",
                          rows: "6",
                          "aria-label": "Details",
                          placeholder: "Project description",
                        }),
                      }),
                      D.jsx("div", {
                        className: "mt-6 pb-4 sm:pb-1",
                        children: D.jsx("span", {
                          onClick: n,
                          type: "submit",
                          className: `px-4\r
											sm:px-6\r
											py-2\r
											sm:py-2.5\r
											text-white\r
											bg-indigo-500\r
											hover:bg-indigo-600\r
											rounded-md\r
											focus:ring-1 focus:ring-indigo-900 duration-500`,
                          "aria-label": "Submit Request",
                          children: D.jsx(ka, { title: "Send Request" }),
                        }),
                      }),
                    ],
                  }),
                }),
                D.jsx("div", {
                  className:
                    "modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right",
                  children: D.jsx("span", {
                    onClick: n,
                    type: "button",
                    className: `px-4\r
									sm:px-6\r
									py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light\r
									rounded-md\r
									focus:ring-1 focus:ring-indigo-900 duration-500`,
                    "aria-label": "Close Modal",
                    children: D.jsx(ka, { title: "Close" }),
                  }),
                }),
              ],
            }),
          }),
        }),
      ],
    }),
  Cw =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%201288.8%20344.1'%20style='enable-background:new%200%200%201288.8%20344.1;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23F4F4F4;stroke:%23F4F4F4;stroke-width:2;stroke-miterlimit:10;}%20.st1{fill:%234E5CA6;}%20.st2{enable-background:new%20;}%20.st3{fill:%23FFFFFF;}%20%3c/style%3e%3cpath%20class='st0'%20d='M97.9,7.5h150.5c49.2,0,89.1,39.9,89.1,89.1v150.5c0,49.2-39.9,89.1-89.1,89.1H97.9%20c-49.2,0-89.1-39.9-89.1-89.1V96.6C8.8,47.4,48.7,7.5,97.9,7.5z'/%3e%3cpath%20class='st1'%20d='M165.4,287.8c-6.6,0-13.1-0.2-19.4-0.6s-12.5-1-18.6-1.8c-6.1-0.8-12-1.7-17.6-2.7s-11-2.2-16.2-3.6v-46.2%20c6.8,0.6,14.1,1.1,22,1.5c7.9,0.4,15.9,0.7,24,0.9c8.1,0.2,15.6,0.3,22.6,0.3c5.5,0.1,11.1-0.4,16.5-1.5c4.4-1,7.7-2.6,9.9-4.8%20c2.2-2.2,3.3-5.2,3.3-9v-3.6c0-4.4-1.5-7.7-4.6-9.9c-3.2-2.2-7.1-3.4-11-3.3h-15.8c-23.2,0-40.8-5.1-52.8-15.3%20c-12-10.2-18-27.3-18-51.3V127c0-22,6.6-38.5,19.8-49.3s32.2-16.3,57-16.3c8.9,0,17.7,0.4,26.6,1.3c8.3,0.9,16.1,2,23.4,3.3%20c7.3,1.3,13.9,2.6,19.7,4v46.2c-9.2-0.8-19.6-1.5-31.1-2c-11.5-0.5-21.9-0.8-31.4-0.8c-5,0-10,0.4-15,1.2c-4.4,0.8-7.8,2.4-10.2,4.8%20c-2.4,2.4-3.6,5.9-3.6,10.5v3c0,5,1.6,8.8,4.8,11.4c3.2,2.6,8.1,3.9,14.7,3.9h19.8c14,0,25.6,2.6,34.9,7.9c9,5,16.3,12.5,21,21.6%20c4.7,9.1,7,19.4,7.1,31v9.9c0,19-3.3,33.5-9.9,43.5c-6.6,10-16,16.8-28.2,20.2C197,286,182.4,287.8,165.4,287.8z'/%3e%3cpath%20class='st1'%20d='M93.7,232.9c-3.1,5.2-5.1,11.1-5.9,17.1c-1.2,10.1,0.9,20.3,5.9,29.1V232.9z'/%3e%3cg%20class='st2'%3e%3cpath%20class='st3'%20d='M470.2,266.1c-39.8,0-63.9-21.8-66-54.7H430c1.1,20.9,14.5,34.5,39.8,34.5c20.9,0,36.6-9.9,36.6-26.9%20c0-13.8-9-20.7-28.1-24.8l-23.9-4.6c-23.2-4.6-44.4-16.3-44.4-44.4c0-27.8,24.4-48.8,58.6-48.8s60.3,20.9,62.3,53.8h-25.8%20c-1.4-19.8-15.6-33.6-36.3-33.6c-21.4,0-33.1,12.6-33.1,26.9c0,15.6,13.6,21.2,29,24.4l24.4,4.8c28.3,5.8,44.2,18.2,44.2,42.8%20C533.2,244.3,510.2,266.1,470.2,266.1z'/%3e%3cpath%20class='st3'%20d='M629.4,261.8c-7.1,3.2-13.3,4.4-20.7,4.4c-22.5,0-38.2-12.2-38.2-39.1v-65.3h-26.9v-19.8h26.9v-36.1h23.2v36.1%20h36.8v19.8h-36.8v60c0,16.8,8,22.8,20.5,22.8c5.5,0,10.4-0.9,15.2-3.2V261.8z'/%3e%3cpath%20class='st3'%20d='M643.9,202.9c0-36.1,25.3-63.2,59.8-63.2c34.5,0,59.8,27.1,59.8,63.2c0,36.1-25.3,63.2-59.8,63.2%20C669.2,266.1,643.9,239,643.9,202.9z%20M739.5,202.9c0-26.7-15.9-42.5-35.9-42.5S668,176.2,668,202.9c0,26.7,15.6,42.8,35.7,42.8%20S739.5,229.6,739.5,202.9z'/%3e%3cpath%20class='st3'%20d='M787.1,263.8V141.9h21.6v20.2c8.3-14,21.4-22.5,38.2-22.5c17.9,0,31.5,9.2,37,25.3%20c8.5-15.6,22.5-25.3,41.2-25.3c25.1,0,41.2,16.3,41.2,45.3v78.9h-23.2v-71.5c0-20.2-9-32.2-26-32.2c-15.9,0-28.7,13.3-28.7,33.8%20v69.9h-23.2v-71.5c0-20.2-9-32.2-26-32.2c-16.1,0-28.7,13.3-28.7,33.8v69.9H787.1z'/%3e%3cpath%20class='st3'%20d='M1071.2,245c-7.6,13.6-21.2,21.2-39.1,21.2c-25.3,0-41.9-14.5-41.9-36.8c0-23.9,19.1-36.3,55.4-36.3%20c7.1,0,12.9,0.2,22.8,1.4v-9c0-17.5-9.4-27.4-25.5-27.4c-17,0-27.4,10.1-28.1,27.1h-21.2c1.2-27.4,20.7-45.5,49.2-45.5%20c30.1,0,47.6,17,47.6,46v78.2h-19.3V245z%20M1036.7,249.6c19.5,0,31.7-12.2,31.7-30.8v-9.9c-9-1.2-15.4-1.4-21.4-1.4%20c-23.2,0-34.7,6.9-34.7,21.2C1012.3,241.3,1021.7,249.6,1036.7,249.6z'/%3e%3cpath%20class='st3'%20d='M1144.8,263.8h-23.2V141.9h21.6v20.2c8.3-13.6,22.1-22.5,38.9-22.5c25.1,0,41.6,16.1,41.6,45.3v78.9h-23.2%20v-71.1c0-20.9-9.2-32.7-26.5-32.7c-15.9,0-29.2,13.3-29.2,35V263.8z'/%3e%3c/g%3e%3c/svg%3e",
  kw =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.4.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%201288.8%20344.1'%20style='enable-background:new%200%200%201288.8%20344.1;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23F4F4F4;stroke:%23F4F4F4;stroke-width:2;stroke-miterlimit:10;}%20.st1{fill:%234E5CA6;}%20.st2{enable-background:new%20;}%20.st3{fill:%23303031;}%20%3c/style%3e%3cpath%20class='st0'%20d='M97.9,7.5h150.5c49.2,0,89.1,39.9,89.1,89.1v150.5c0,49.2-39.9,89.1-89.1,89.1H97.9%20c-49.2,0-89.1-39.9-89.1-89.1V96.6C8.8,47.4,48.7,7.5,97.9,7.5z'/%3e%3cpath%20class='st1'%20d='M165.4,287.8c-6.6,0-13.1-0.2-19.4-0.6s-12.5-1-18.6-1.8c-6.1-0.8-12-1.7-17.6-2.7s-11-2.2-16.2-3.6v-46.2%20c6.8,0.6,14.1,1.1,22,1.5c7.9,0.4,15.9,0.7,24,0.9c8.1,0.2,15.6,0.3,22.6,0.3c5.5,0.1,11.1-0.4,16.5-1.5c4.4-1,7.7-2.6,9.9-4.8%20c2.2-2.2,3.3-5.2,3.3-9v-3.6c0-4.4-1.5-7.7-4.6-9.9c-3.2-2.2-7.1-3.4-11-3.3h-15.8c-23.2,0-40.8-5.1-52.8-15.3%20c-12-10.2-18-27.3-18-51.3V127c0-22,6.6-38.5,19.8-49.3s32.2-16.3,57-16.3c8.9,0,17.7,0.4,26.6,1.3c8.3,0.9,16.1,2,23.4,3.3%20c7.3,1.3,13.9,2.6,19.7,4v46.2c-9.2-0.8-19.6-1.5-31.1-2c-11.5-0.5-21.9-0.8-31.4-0.8c-5,0-10,0.4-15,1.2c-4.4,0.8-7.8,2.4-10.2,4.8%20c-2.4,2.4-3.6,5.9-3.6,10.5v3c0,5,1.6,8.8,4.8,11.4c3.2,2.6,8.1,3.9,14.7,3.9h19.8c14,0,25.6,2.6,34.9,7.9c9,5,16.3,12.5,21,21.6%20c4.7,9.1,7,19.4,7.1,31v9.9c0,19-3.3,33.5-9.9,43.5c-6.6,10-16,16.8-28.2,20.2C197,286,182.4,287.8,165.4,287.8z'/%3e%3cpath%20class='st1'%20d='M93.7,232.9c-3.1,5.2-5.1,11.1-5.9,17.1c-1.2,10.1,0.9,20.3,5.9,29.1V232.9z'/%3e%3cg%20class='st2'%3e%3cpath%20class='st3'%20d='M477.2,269.1c-39.8,0-63.9-21.8-66-54.7H437c1.1,20.9,14.5,34.5,39.8,34.5c20.9,0,36.6-9.9,36.6-26.9%20c0-13.8-9-20.7-28.1-24.8l-23.9-4.6c-23.2-4.6-44.4-16.3-44.4-44.4c0-27.8,24.4-48.8,58.6-48.8s60.3,20.9,62.3,53.8h-25.8%20c-1.4-19.8-15.6-33.6-36.3-33.6c-21.4,0-33.1,12.6-33.1,26.9c0,15.6,13.6,21.2,29,24.4l24.4,4.8c28.3,5.8,44.2,18.2,44.2,42.8%20C540.2,247.3,517.2,269.1,477.2,269.1z'/%3e%3cpath%20class='st3'%20d='M636.4,264.8c-7.1,3.2-13.3,4.4-20.7,4.4c-22.5,0-38.2-12.2-38.2-39.1v-65.3h-26.9v-19.8h26.9v-36.1h23.2v36.1%20h36.8v19.8h-36.8v60c0,16.8,8,22.8,20.5,22.8c5.5,0,10.4-0.9,15.2-3.2V264.8z'/%3e%3cpath%20class='st3'%20d='M650.9,205.9c0-36.1,25.3-63.2,59.8-63.2c34.5,0,59.8,27.1,59.8,63.2c0,36.1-25.3,63.2-59.8,63.2%20C676.2,269.1,650.9,242,650.9,205.9z%20M746.5,205.9c0-26.7-15.9-42.5-35.9-42.5S675,179.2,675,205.9c0,26.7,15.6,42.8,35.7,42.8%20S746.5,232.6,746.5,205.9z'/%3e%3cpath%20class='st3'%20d='M794.1,266.8V144.9h21.6v20.2c8.3-14,21.4-22.5,38.2-22.5c17.9,0,31.5,9.2,37,25.3%20c8.5-15.6,22.5-25.3,41.2-25.3c25.1,0,41.2,16.3,41.2,45.3v78.9h-23.2v-71.5c0-20.2-9-32.2-26-32.2c-15.9,0-28.7,13.3-28.7,33.8%20v69.9h-23.2v-71.5c0-20.2-9-32.2-26-32.2c-16.1,0-28.7,13.3-28.7,33.8v69.9H794.1z'/%3e%3cpath%20class='st3'%20d='M1078.2,248c-7.6,13.6-21.2,21.2-39.1,21.2c-25.3,0-41.9-14.5-41.9-36.8c0-23.9,19.1-36.3,55.4-36.3%20c7.1,0,12.9,0.2,22.8,1.4v-9c0-17.5-9.4-27.4-25.5-27.4c-17,0-27.4,10.1-28.1,27.1h-21.2c1.2-27.4,20.7-45.5,49.2-45.5%20c30.1,0,47.6,17,47.6,46v78.2h-19.3V248z%20M1043.7,252.6c19.5,0,31.7-12.2,31.7-30.8v-9.9c-9-1.2-15.4-1.4-21.4-1.4%20c-23.2,0-34.7,6.9-34.7,21.2C1019.3,244.3,1028.7,252.6,1043.7,252.6z'/%3e%3cpath%20class='st3'%20d='M1151.8,266.8h-23.2V144.9h21.6v20.2c8.3-13.6,22.1-22.5,38.9-22.5c25.1,0,41.6,16.1,41.6,45.3v78.9h-23.2%20v-71.1c0-20.9-9.2-32.7-26.5-32.7c-15.9,0-29.2,13.3-29.2,35V266.8z'/%3e%3c/g%3e%3c/svg%3e",
  Ew = () => {
    const [n, o] = j.useState(!1),
      [i, l] = j.useState(!1),
      [s, f] = xw();
    function d() {
      o(!n);
    }
    function v() {
      i
        ? (document
            .getElementsByTagName("html")[0]
            .classList.remove("overflow-y-hidden"),
          l(!1))
        : (document
            .getElementsByTagName("html")[0]
            .classList.add("overflow-y-hidden"),
          l(!0));
    }
    return D.jsxs(fm.nav, {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      id: "nav",
      className: "sm:container sm:mx-auto",
      children: [
        D.jsxs("div", {
          className:
            "z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6",
          children: [
            D.jsxs("div", {
              className: "flex justify-between items-center px-4 sm:px-0",
              children: [
                D.jsx("div", {
                  children: D.jsx(Wn, {
                    to: "/",
                    children:
                      s === "dark"
                        ? D.jsx("img", {
                            src: kw,
                            className: "w-36",
                            alt: "Dark Logo",
                          })
                        : D.jsx("img", {
                            src: Cw,
                            className: "w-36",
                            alt: "Dark Logo",
                          }),
                  }),
                }),
                D.jsx("div", {
                  onClick: () => f(s),
                  "aria-label": "Theme Switcher",
                  className:
                    "block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer",
                  children:
                    s === "dark"
                      ? D.jsx(jp, {
                          className:
                            "text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl",
                        })
                      : D.jsx(Np, {
                          className: "text-gray-200 hover:text-gray-50 text-xl",
                        }),
                }),
                D.jsx("div", {
                  className: "sm:hidden",
                  children: D.jsx("button", {
                    onClick: d,
                    type: "button",
                    className: "focus:outline-none",
                    "aria-label": "Hamburger Menu",
                    children: D.jsx("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      className:
                        "h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light",
                      children: n
                        ? D.jsx(Lm, { className: "text-3xl" })
                        : D.jsx(pw, { className: "text-3xl" }),
                    }),
                  }),
                }),
              ],
            }),
            D.jsxs("div", {
              className: n
                ? "block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
                : "hidden",
              children: [
                D.jsx(Wn, {
                  to: "/projects",
                  className:
                    "block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2",
                  "aria-label": "Projects",
                  children: "Projects",
                }),
                D.jsx(Wn, {
                  to: "/about",
                  className:
                    "block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark",
                  "aria-label": "About Me",
                  children: "About Me",
                }),
                D.jsx(Wn, {
                  to: "/contact",
                  className:
                    "block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark",
                  "aria-label": "Contact",
                  children: "Contact",
                }),
                D.jsx("div", {
                  className:
                    "border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark",
                  children: D.jsx("span", {
                    onClick: v,
                    className:
                      "font-general-medium sm:hidden block text-left text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-24",
                    "aria-label": "Hire Me Button",
                    children: D.jsx(ka, { title: "Hire Me" }),
                  }),
                }),
              ],
            }),
            D.jsxs("div", {
              className:
                "font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none",
              children: [
                D.jsx(Wn, {
                  to: "/projects",
                  className:
                    "block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2",
                  "aria-label": "Projects",
                  children: "Projects",
                }),
                D.jsx(Wn, {
                  to: "/about",
                  className:
                    "block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2",
                  "aria-label": "About Me",
                  children: "About Me",
                }),
                D.jsx(Wn, {
                  to: "/contact",
                  className:
                    "block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2",
                  "aria-label": "Contact",
                  children: "Contact",
                }),
              ],
            }),
            D.jsxs("div", {
              className:
                "hidden sm:flex justify-between items-center flex-col md:flex-row",
              children: [
                D.jsx("div", {
                  className: "hidden md:flex",
                  children: D.jsx("span", {
                    onClick: v,
                    className:
                      "text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300",
                    "aria-label": "Hire Me Button",
                    children: D.jsx(ka, { title: "Hire Me" }),
                  }),
                }),
                D.jsx("div", {
                  onClick: () => f(s),
                  "aria-label": "Theme Switcher",
                  className:
                    "ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer",
                  children:
                    s === "dark"
                      ? D.jsx(jp, {
                          className:
                            "text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl",
                        })
                      : D.jsx(Np, {
                          className: "text-gray-200 hover:text-gray-50 text-xl",
                        }),
                }),
              ],
            }),
          ],
        }),
        D.jsxs("div", {
          children: [
            i ? D.jsx(Sw, { onClose: v, onRequest: v }) : null,
            i ? v : null,
          ],
        }),
      ],
    });
  },
  Pw = () => {
    const [n, o] = j.useState(!1);
    j.useEffect(
      () => (
        window.addEventListener("scroll", i),
        function() {
          window.removeEventListener("scroll", i);
        }
      )
    );
    const i = () => {
        !n && window.pageYOffset > 400
          ? o(!0)
          : n && window.pageYOffset <= 400 && o(!1);
      },
      l = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
    return (
      window.addEventListener("scroll", i),
      D.jsx(D.Fragment, {
        children: D.jsx(sw, {
          className: "scrollToTop",
          onClick: l,
          style: {
            height: 45,
            width: 45,
            borderRadius: 50,
            right: 50,
            bottom: 50,
            display: n ? "flex" : "none",
            padding: 5,
          },
        }),
      })
    );
  },
  Tw = j.lazy(() => Do(() => import("./AboutMe-Dt-jkjd1.js"), [])),
  Lw = j.lazy(() => Do(() => import("./Contact-CCrpAcE4.js"), [])),
  Rw = j.lazy(() =>
    Do(() => import("./Home-BU-lPqIk.js"), __vite__mapDeps([0, 1, 2]))
  ),
  _w = j.lazy(() =>
    Do(() => import("./Projects-vwg830Sr.js"), __vite__mapDeps([3, 1, 2]))
  ),
  Mw = j.lazy(() =>
    Do(() => import("./ProjectSingle-Bnmucjzx.js"), __vite__mapDeps([4, 2]))
  );
function jw() {
  return D.jsx(ex, {
    children: D.jsxs("div", {
      className:
        " bg-secondary-light dark:bg-primary-dark transition duration-300",
      children: [
        D.jsxs(nw, {
          children: [
            D.jsx(aw, {}),
            D.jsx(Ew, {}),
            D.jsx(j.Suspense, {
              fallback: "",
              children: D.jsxs(Xx, {
                children: [
                  D.jsx(Cr, { path: "/", element: D.jsx(Rw, {}) }),
                  D.jsx(Cr, { path: "projects", element: D.jsx(_w, {}) }),
                  D.jsx(Cr, {
                    path: "projects/single-project",
                    element: D.jsx(Mw, {}),
                  }),
                  D.jsx(Cr, { path: "about", element: D.jsx(Tw, {}) }),
                  D.jsx(Cr, { path: "contact", element: D.jsx(Lw, {}) }),
                ],
              }),
            }),
            D.jsx(yw, {}),
          ],
        }),
        D.jsx(Pw, {}),
      ],
    }),
  });
}
var la = {},
  Ap;
function Nw() {
  if (Ap) return la;
  Ap = 1;
  var n = dm();
  return (la.createRoot = n.createRoot), (la.hydrateRoot = n.hydrateRoot), la;
}
var Aw = Nw();
const Vw = document.getElementById("root"),
  Ow = Aw.createRoot(Vw);
Ow.render(D.jsx(jw, {}));
export {
  ka as B,
  Uw as F,
  Wn as L,
  ns as a,
  Bw as b,
  Hw as c,
  Dw as d,
  Ww as e,
  vw as f,
  Iw as g,
  Fw as h,
  dw as i,
  D as j,
  mw as k,
  zw as l,
  fm as m,
  $w as n,
  j as r,
  xw as u,
};
