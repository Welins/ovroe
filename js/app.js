(() => {
  "use strict";
  let e = !0,
    t = (t = 500) => {
      let s = document.querySelector("body");
      if (e) {
        let i = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let e = 0; e < i.length; e++) {
            i[e].style.paddingRight = "0px";
          }
          (s.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, t),
          (e = !1),
          setTimeout(function () {
            e = !0;
          }, t);
      }
    },
    s = (t = 500) => {
      let s = document.querySelector("body");
      if (e) {
        let i = document.querySelectorAll("[data-lp]");
        for (let e = 0; e < i.length; e++) {
          i[e].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (s.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (e = !1),
          setTimeout(function () {
            e = !0;
          }, t);
      }
    };
  function i(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function n(e = {}, t = {}) {
    Object.keys(t).forEach((s) => {
      void 0 === e[s]
        ? (e[s] = t[s])
        : i(t[s]) && i(e[s]) && Object.keys(t[s]).length > 0 && n(e[s], t[s]);
    });
  }
  const r = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({ initEvent() {} }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName: () => [],
    }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function o() {
    const e = "undefined" != typeof document ? document : {};
    return n(e, r), e;
  }
  const a = {
    document: r,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle: () => ({ getPropertyValue: () => "" }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: () => ({}),
    requestAnimationFrame: (e) =>
      "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    },
  };
  function l() {
    const e = "undefined" != typeof window ? window : {};
    return n(e, a), e;
  }
  class c extends Array {
    constructor(e) {
      "number" == typeof e
        ? super(e)
        : (super(...(e || [])),
          (function (e) {
            const t = e.__proto__;
            Object.defineProperty(e, "__proto__", {
              get: () => t,
              set(e) {
                t.__proto__ = e;
              },
            });
          })(this));
    }
  }
  function d(e = []) {
    const t = [];
    return (
      e.forEach((e) => {
        Array.isArray(e) ? t.push(...d(e)) : t.push(e);
      }),
      t
    );
  }
  function u(e, t) {
    return Array.prototype.filter.call(e, t);
  }
  function p(e, t) {
    const s = l(),
      i = o();
    let n = [];
    if (!t && e instanceof c) return e;
    if (!e) return new c(n);
    if ("string" == typeof e) {
      const s = e.trim();
      if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
        let e = "div";
        0 === s.indexOf("<li") && (e = "ul"),
          0 === s.indexOf("<tr") && (e = "tbody"),
          (0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) || (e = "tr"),
          0 === s.indexOf("<tbody") && (e = "table"),
          0 === s.indexOf("<option") && (e = "select");
        const t = i.createElement(e);
        t.innerHTML = s;
        for (let e = 0; e < t.childNodes.length; e += 1)
          n.push(t.childNodes[e]);
      } else
        n = (function (e, t) {
          if ("string" != typeof e) return [e];
          const s = [],
            i = t.querySelectorAll(e);
          for (let e = 0; e < i.length; e += 1) s.push(i[e]);
          return s;
        })(e.trim(), t || i);
    } else if (e.nodeType || e === s || e === i) n.push(e);
    else if (Array.isArray(e)) {
      if (e instanceof c) return e;
      n = e;
    }
    return new c(
      (function (e) {
        const t = [];
        for (let s = 0; s < e.length; s += 1)
          -1 === t.indexOf(e[s]) && t.push(e[s]);
        return t;
      })(n)
    );
  }
  p.fn = c.prototype;
  const m = "resize scroll".split(" ");
  function f(e) {
    return function (...t) {
      if (void 0 === t[0]) {
        for (let t = 0; t < this.length; t += 1)
          m.indexOf(e) < 0 &&
            (e in this[t] ? this[t][e]() : p(this[t]).trigger(e));
        return this;
      }
      return this.on(e, ...t);
    };
  }
  f("click"),
    f("blur"),
    f("focus"),
    f("focusin"),
    f("focusout"),
    f("keyup"),
    f("keydown"),
    f("keypress"),
    f("submit"),
    f("change"),
    f("mousedown"),
    f("mousemove"),
    f("mouseup"),
    f("mouseenter"),
    f("mouseleave"),
    f("mouseout"),
    f("mouseover"),
    f("touchstart"),
    f("touchend"),
    f("touchmove"),
    f("resize"),
    f("scroll");
  const h = {
    addClass: function (...e) {
      const t = d(e.map((e) => e.split(" ")));
      return (
        this.forEach((e) => {
          e.classList.add(...t);
        }),
        this
      );
    },
    removeClass: function (...e) {
      const t = d(e.map((e) => e.split(" ")));
      return (
        this.forEach((e) => {
          e.classList.remove(...t);
        }),
        this
      );
    },
    hasClass: function (...e) {
      const t = d(e.map((e) => e.split(" ")));
      return (
        u(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
          .length > 0
      );
    },
    toggleClass: function (...e) {
      const t = d(e.map((e) => e.split(" ")));
      this.forEach((e) => {
        t.forEach((t) => {
          e.classList.toggle(t);
        });
      });
    },
    attr: function (e, t) {
      if (1 === arguments.length && "string" == typeof e)
        return this[0] ? this[0].getAttribute(e) : void 0;
      for (let s = 0; s < this.length; s += 1)
        if (2 === arguments.length) this[s].setAttribute(e, t);
        else
          for (const t in e) (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
      return this;
    },
    removeAttr: function (e) {
      for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
      return this;
    },
    transform: function (e) {
      for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
      return this;
    },
    transition: function (e) {
      for (let t = 0; t < this.length; t += 1)
        this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
      return this;
    },
    on: function (...e) {
      let [t, s, i, n] = e;
      function r(e) {
        const t = e.target;
        if (!t) return;
        const n = e.target.dom7EventData || [];
        if ((n.indexOf(e) < 0 && n.unshift(e), p(t).is(s))) i.apply(t, n);
        else {
          const e = p(t).parents();
          for (let t = 0; t < e.length; t += 1)
            p(e[t]).is(s) && i.apply(e[t], n);
        }
      }
      function o(e) {
        const t = (e && e.target && e.target.dom7EventData) || [];
        t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
      }
      "function" == typeof e[1] && (([t, i, n] = e), (s = void 0)),
        n || (n = !1);
      const a = t.split(" ");
      let l;
      for (let e = 0; e < this.length; e += 1) {
        const t = this[e];
        if (s)
          for (l = 0; l < a.length; l += 1) {
            const e = a[l];
            t.dom7LiveListeners || (t.dom7LiveListeners = {}),
              t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
              t.dom7LiveListeners[e].push({ listener: i, proxyListener: r }),
              t.addEventListener(e, r, n);
          }
        else
          for (l = 0; l < a.length; l += 1) {
            const e = a[l];
            t.dom7Listeners || (t.dom7Listeners = {}),
              t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
              t.dom7Listeners[e].push({ listener: i, proxyListener: o }),
              t.addEventListener(e, o, n);
          }
      }
      return this;
    },
    off: function (...e) {
      let [t, s, i, n] = e;
      "function" == typeof e[1] && (([t, i, n] = e), (s = void 0)),
        n || (n = !1);
      const r = t.split(" ");
      for (let e = 0; e < r.length; e += 1) {
        const t = r[e];
        for (let e = 0; e < this.length; e += 1) {
          const r = this[e];
          let o;
          if (
            (!s && r.dom7Listeners
              ? (o = r.dom7Listeners[t])
              : s && r.dom7LiveListeners && (o = r.dom7LiveListeners[t]),
            o && o.length)
          )
            for (let e = o.length - 1; e >= 0; e -= 1) {
              const s = o[e];
              (i && s.listener === i) ||
              (i &&
                s.listener &&
                s.listener.dom7proxy &&
                s.listener.dom7proxy === i)
                ? (r.removeEventListener(t, s.proxyListener, n), o.splice(e, 1))
                : i ||
                  (r.removeEventListener(t, s.proxyListener, n),
                  o.splice(e, 1));
            }
        }
      }
      return this;
    },
    trigger: function (...e) {
      const t = l(),
        s = e[0].split(" "),
        i = e[1];
      for (let n = 0; n < s.length; n += 1) {
        const r = s[n];
        for (let s = 0; s < this.length; s += 1) {
          const n = this[s];
          if (t.CustomEvent) {
            const s = new t.CustomEvent(r, {
              detail: i,
              bubbles: !0,
              cancelable: !0,
            });
            (n.dom7EventData = e.filter((e, t) => t > 0)),
              n.dispatchEvent(s),
              (n.dom7EventData = []),
              delete n.dom7EventData;
          }
        }
      }
      return this;
    },
    transitionEnd: function (e) {
      const t = this;
      return (
        e &&
          t.on("transitionend", function s(i) {
            i.target === this && (e.call(this, i), t.off("transitionend", s));
          }),
        this
      );
    },
    outerWidth: function (e) {
      if (this.length > 0) {
        if (e) {
          const e = this.styles();
          return (
            this[0].offsetWidth +
            parseFloat(e.getPropertyValue("margin-right")) +
            parseFloat(e.getPropertyValue("margin-left"))
          );
        }
        return this[0].offsetWidth;
      }
      return null;
    },
    outerHeight: function (e) {
      if (this.length > 0) {
        if (e) {
          const e = this.styles();
          return (
            this[0].offsetHeight +
            parseFloat(e.getPropertyValue("margin-top")) +
            parseFloat(e.getPropertyValue("margin-bottom"))
          );
        }
        return this[0].offsetHeight;
      }
      return null;
    },
    styles: function () {
      const e = l();
      return this[0] ? e.getComputedStyle(this[0], null) : {};
    },
    offset: function () {
      if (this.length > 0) {
        const e = l(),
          t = o(),
          s = this[0],
          i = s.getBoundingClientRect(),
          n = t.body,
          r = s.clientTop || n.clientTop || 0,
          a = s.clientLeft || n.clientLeft || 0,
          c = s === e ? e.scrollY : s.scrollTop,
          d = s === e ? e.scrollX : s.scrollLeft;
        return { top: i.top + c - r, left: i.left + d - a };
      }
      return null;
    },
    css: function (e, t) {
      const s = l();
      let i;
      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (i = 0; i < this.length; i += 1)
            for (const t in e) this[i].style[t] = e[t];
          return this;
        }
        if (this[0])
          return s.getComputedStyle(this[0], null).getPropertyValue(e);
      }
      if (2 === arguments.length && "string" == typeof e) {
        for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
        return this;
      }
      return this;
    },
    each: function (e) {
      return e
        ? (this.forEach((t, s) => {
            e.apply(t, [t, s]);
          }),
          this)
        : this;
    },
    html: function (e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : null;
      for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
      return this;
    },
    text: function (e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
      for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
      return this;
    },
    is: function (e) {
      const t = l(),
        s = o(),
        i = this[0];
      let n, r;
      if (!i || void 0 === e) return !1;
      if ("string" == typeof e) {
        if (i.matches) return i.matches(e);
        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
        if (i.msMatchesSelector) return i.msMatchesSelector(e);
        for (n = p(e), r = 0; r < n.length; r += 1) if (n[r] === i) return !0;
        return !1;
      }
      if (e === s) return i === s;
      if (e === t) return i === t;
      if (e.nodeType || e instanceof c) {
        for (n = e.nodeType ? [e] : e, r = 0; r < n.length; r += 1)
          if (n[r] === i) return !0;
        return !1;
      }
      return !1;
    },
    index: function () {
      let e,
        t = this[0];
      if (t) {
        for (e = 0; null !== (t = t.previousSibling); )
          1 === t.nodeType && (e += 1);
        return e;
      }
    },
    eq: function (e) {
      if (void 0 === e) return this;
      const t = this.length;
      if (e > t - 1) return p([]);
      if (e < 0) {
        const s = t + e;
        return p(s < 0 ? [] : [this[s]]);
      }
      return p([this[e]]);
    },
    append: function (...e) {
      let t;
      const s = o();
      for (let i = 0; i < e.length; i += 1) {
        t = e[i];
        for (let e = 0; e < this.length; e += 1)
          if ("string" == typeof t) {
            const i = s.createElement("div");
            for (i.innerHTML = t; i.firstChild; )
              this[e].appendChild(i.firstChild);
          } else if (t instanceof c)
            for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
          else this[e].appendChild(t);
      }
      return this;
    },
    prepend: function (e) {
      const t = o();
      let s, i;
      for (s = 0; s < this.length; s += 1)
        if ("string" == typeof e) {
          const n = t.createElement("div");
          for (n.innerHTML = e, i = n.childNodes.length - 1; i >= 0; i -= 1)
            this[s].insertBefore(n.childNodes[i], this[s].childNodes[0]);
        } else if (e instanceof c)
          for (i = 0; i < e.length; i += 1)
            this[s].insertBefore(e[i], this[s].childNodes[0]);
        else this[s].insertBefore(e, this[s].childNodes[0]);
      return this;
    },
    next: function (e) {
      return this.length > 0
        ? e
          ? this[0].nextElementSibling && p(this[0].nextElementSibling).is(e)
            ? p([this[0].nextElementSibling])
            : p([])
          : this[0].nextElementSibling
          ? p([this[0].nextElementSibling])
          : p([])
        : p([]);
    },
    nextAll: function (e) {
      const t = [];
      let s = this[0];
      if (!s) return p([]);
      for (; s.nextElementSibling; ) {
        const i = s.nextElementSibling;
        e ? p(i).is(e) && t.push(i) : t.push(i), (s = i);
      }
      return p(t);
    },
    prev: function (e) {
      if (this.length > 0) {
        const t = this[0];
        return e
          ? t.previousElementSibling && p(t.previousElementSibling).is(e)
            ? p([t.previousElementSibling])
            : p([])
          : t.previousElementSibling
          ? p([t.previousElementSibling])
          : p([]);
      }
      return p([]);
    },
    prevAll: function (e) {
      const t = [];
      let s = this[0];
      if (!s) return p([]);
      for (; s.previousElementSibling; ) {
        const i = s.previousElementSibling;
        e ? p(i).is(e) && t.push(i) : t.push(i), (s = i);
      }
      return p(t);
    },
    parent: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1)
        null !== this[s].parentNode &&
          (e
            ? p(this[s].parentNode).is(e) && t.push(this[s].parentNode)
            : t.push(this[s].parentNode));
      return p(t);
    },
    parents: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) {
        let i = this[s].parentNode;
        for (; i; ) e ? p(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
      }
      return p(t);
    },
    closest: function (e) {
      let t = this;
      return void 0 === e ? p([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) {
        const i = this[s].querySelectorAll(e);
        for (let e = 0; e < i.length; e += 1) t.push(i[e]);
      }
      return p(t);
    },
    children: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) {
        const i = this[s].children;
        for (let s = 0; s < i.length; s += 1)
          (e && !p(i[s]).is(e)) || t.push(i[s]);
      }
      return p(t);
    },
    filter: function (e) {
      return p(u(this, e));
    },
    remove: function () {
      for (let e = 0; e < this.length; e += 1)
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      return this;
    },
  };
  Object.keys(h).forEach((e) => {
    Object.defineProperty(p.fn, e, { value: h[e], writable: !0 });
  });
  const v = p;
  function g(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }
  function _() {
    return Date.now();
  }
  function b(e, t) {
    void 0 === t && (t = "x");
    const s = l();
    let i, n, r;
    const o = (function (e) {
      const t = l();
      let s;
      return (
        t.getComputedStyle && (s = t.getComputedStyle(e, null)),
        !s && e.currentStyle && (s = e.currentStyle),
        s || (s = e.style),
        s
      );
    })(e);
    return (
      s.WebKitCSSMatrix
        ? ((n = o.transform || o.webkitTransform),
          n.split(",").length > 6 &&
            (n = n
              .split(", ")
              .map((e) => e.replace(",", "."))
              .join(", ")),
          (r = new s.WebKitCSSMatrix("none" === n ? "" : n)))
        : ((r =
            o.MozTransform ||
            o.OTransform ||
            o.MsTransform ||
            o.msTransform ||
            o.transform ||
            o
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (i = r.toString().split(","))),
      "x" === t &&
        (n = s.WebKitCSSMatrix
          ? r.m41
          : 16 === i.length
          ? parseFloat(i[12])
          : parseFloat(i[4])),
      "y" === t &&
        (n = s.WebKitCSSMatrix
          ? r.m42
          : 16 === i.length
          ? parseFloat(i[13])
          : parseFloat(i[5])),
      n || 0
    );
  }
  function w(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      "Object" === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function S(e) {
    return "undefined" != typeof window && void 0 !== window.HTMLElement
      ? e instanceof HTMLElement
      : e && (1 === e.nodeType || 11 === e.nodeType);
  }
  function y() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      t = ["__proto__", "constructor", "prototype"];
    for (let s = 1; s < arguments.length; s += 1) {
      const i = s < 0 || arguments.length <= s ? void 0 : arguments[s];
      if (null != i && !S(i)) {
        const s = Object.keys(Object(i)).filter((e) => t.indexOf(e) < 0);
        for (let t = 0, n = s.length; t < n; t += 1) {
          const n = s[t],
            r = Object.getOwnPropertyDescriptor(i, n);
          void 0 !== r &&
            r.enumerable &&
            (w(e[n]) && w(i[n])
              ? i[n].__swiper__
                ? (e[n] = i[n])
                : y(e[n], i[n])
              : !w(e[n]) && w(i[n])
              ? ((e[n] = {}), i[n].__swiper__ ? (e[n] = i[n]) : y(e[n], i[n]))
              : (e[n] = i[n]));
        }
      }
    }
    return e;
  }
  function T(e, t, s) {
    e.style.setProperty(t, s);
  }
  function E(e) {
    let { swiper: t, targetPosition: s, side: i } = e;
    const n = l(),
      r = -t.translate;
    let o,
      a = null;
    const c = t.params.speed;
    (t.wrapperEl.style.scrollSnapType = "none"),
      n.cancelAnimationFrame(t.cssModeFrameID);
    const d = s > r ? "next" : "prev",
      u = (e, t) => ("next" === d && e >= t) || ("prev" === d && e <= t),
      p = () => {
        (o = new Date().getTime()), null === a && (a = o);
        const e = Math.max(Math.min((o - a) / c, 1), 0),
          l = 0.5 - Math.cos(e * Math.PI) / 2;
        let d = r + l * (s - r);
        if ((u(d, s) && (d = s), t.wrapperEl.scrollTo({ [i]: d }), u(d, s)))
          return (
            (t.wrapperEl.style.overflow = "hidden"),
            (t.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (t.wrapperEl.style.overflow = ""),
                t.wrapperEl.scrollTo({ [i]: d });
            }),
            void n.cancelAnimationFrame(t.cssModeFrameID)
          );
        t.cssModeFrameID = n.requestAnimationFrame(p);
      };
    p();
  }
  let C, L, x;
  function M() {
    return (
      C ||
        (C = (function () {
          const e = l(),
            t = o();
          return {
            smoothScroll:
              t.documentElement && "scrollBehavior" in t.documentElement.style,
            touch: !!(
              "ontouchstart" in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
            passiveListener: (function () {
              let t = !1;
              try {
                const s = Object.defineProperty({}, "passive", {
                  get() {
                    t = !0;
                  },
                });
                e.addEventListener("testPassiveListener", null, s);
              } catch (e) {}
              return t;
            })(),
            gestures: "ongesturestart" in e,
          };
        })()),
      C
    );
  }
  function k(e) {
    return (
      void 0 === e && (e = {}),
      L ||
        (L = (function (e) {
          let { userAgent: t } = void 0 === e ? {} : e;
          const s = M(),
            i = l(),
            n = i.navigator.platform,
            r = t || i.navigator.userAgent,
            o = { ios: !1, android: !1 },
            a = i.screen.width,
            c = i.screen.height,
            d = r.match(/(Android);?[\s\/]+([\d.]+)?/);
          let u = r.match(/(iPad).*OS\s([\d_]+)/);
          const p = r.match(/(iPod)(.*OS\s([\d_]+))?/),
            m = !u && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            f = "Win32" === n;
          let h = "MacIntel" === n;
          return (
            !u &&
              h &&
              s.touch &&
              [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810",
              ].indexOf(`${a}x${c}`) >= 0 &&
              ((u = r.match(/(Version)\/([\d.]+)/)),
              u || (u = [0, 1, "13_0_0"]),
              (h = !1)),
            d && !f && ((o.os = "android"), (o.android = !0)),
            (u || m || p) && ((o.os = "ios"), (o.ios = !0)),
            o
          );
        })(e)),
      L
    );
  }
  function P() {
    return (
      x ||
        (x = (function () {
          const e = l();
          return {
            isSafari: (function () {
              const t = e.navigator.userAgent.toLowerCase();
              return (
                t.indexOf("safari") >= 0 &&
                t.indexOf("chrome") < 0 &&
                t.indexOf("android") < 0
              );
            })(),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              e.navigator.userAgent
            ),
          };
        })()),
      x
    );
  }
  const q = {
    on(e, t, s) {
      const i = this;
      if ("function" != typeof t) return i;
      const n = s ? "unshift" : "push";
      return (
        e.split(" ").forEach((e) => {
          i.eventsListeners[e] || (i.eventsListeners[e] = []),
            i.eventsListeners[e][n](t);
        }),
        i
      );
    },
    once(e, t, s) {
      const i = this;
      if ("function" != typeof t) return i;
      function n() {
        i.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
        for (var s = arguments.length, r = new Array(s), o = 0; o < s; o++)
          r[o] = arguments[o];
        t.apply(i, r);
      }
      return (n.__emitterProxy = t), i.on(e, n, s);
    },
    onAny(e, t) {
      const s = this;
      if ("function" != typeof e) return s;
      const i = t ? "unshift" : "push";
      return (
        s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
      );
    },
    offAny(e) {
      const t = this;
      if (!t.eventsAnyListeners) return t;
      const s = t.eventsAnyListeners.indexOf(e);
      return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
    },
    off(e, t) {
      const s = this;
      return s.eventsListeners
        ? (e.split(" ").forEach((e) => {
            void 0 === t
              ? (s.eventsListeners[e] = [])
              : s.eventsListeners[e] &&
                s.eventsListeners[e].forEach((i, n) => {
                  (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                    s.eventsListeners[e].splice(n, 1);
                });
          }),
          s)
        : s;
    },
    emit() {
      const e = this;
      if (!e.eventsListeners) return e;
      let t, s, i;
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      "string" == typeof r[0] || Array.isArray(r[0])
        ? ((t = r[0]), (s = r.slice(1, r.length)), (i = e))
        : ((t = r[0].events), (s = r[0].data), (i = r[0].context || e)),
        s.unshift(i);
      return (
        (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
          e.eventsAnyListeners &&
            e.eventsAnyListeners.length &&
            e.eventsAnyListeners.forEach((e) => {
              e.apply(i, [t, ...s]);
            }),
            e.eventsListeners &&
              e.eventsListeners[t] &&
              e.eventsListeners[t].forEach((e) => {
                e.apply(i, s);
              });
        }),
        e
      );
    },
  };
  const $ = {
    updateSize: function () {
      const e = this;
      let t, s;
      const i = e.$el;
      (t =
        void 0 !== e.params.width && null !== e.params.width
          ? e.params.width
          : i[0].clientWidth),
        (s =
          void 0 !== e.params.height && null !== e.params.height
            ? e.params.height
            : i[0].clientHeight),
        (0 === t && e.isHorizontal()) ||
          (0 === s && e.isVertical()) ||
          ((t =
            t -
            parseInt(i.css("padding-left") || 0, 10) -
            parseInt(i.css("padding-right") || 0, 10)),
          (s =
            s -
            parseInt(i.css("padding-top") || 0, 10) -
            parseInt(i.css("padding-bottom") || 0, 10)),
          Number.isNaN(t) && (t = 0),
          Number.isNaN(s) && (s = 0),
          Object.assign(e, {
            width: t,
            height: s,
            size: e.isHorizontal() ? t : s,
          }));
    },
    updateSlides: function () {
      const e = this;
      function t(t) {
        return e.isHorizontal()
          ? t
          : {
              width: "height",
              "margin-top": "margin-left",
              "margin-bottom ": "margin-right",
              "margin-left": "margin-top",
              "margin-right": "margin-bottom",
              "padding-left": "padding-top",
              "padding-right": "padding-bottom",
              marginRight: "marginBottom",
            }[t];
      }
      function s(e, s) {
        return parseFloat(e.getPropertyValue(t(s)) || 0);
      }
      const i = e.params,
        { $wrapperEl: n, size: r, rtlTranslate: o, wrongRTL: a } = e,
        l = e.virtual && i.virtual.enabled,
        c = l ? e.virtual.slides.length : e.slides.length,
        d = n.children(`.${e.params.slideClass}`),
        u = l ? e.virtual.slides.length : d.length;
      let p = [];
      const m = [],
        f = [];
      let h = i.slidesOffsetBefore;
      "function" == typeof h && (h = i.slidesOffsetBefore.call(e));
      let v = i.slidesOffsetAfter;
      "function" == typeof v && (v = i.slidesOffsetAfter.call(e));
      const g = e.snapGrid.length,
        _ = e.slidesGrid.length;
      let b = i.spaceBetween,
        w = -h,
        S = 0,
        y = 0;
      if (void 0 === r) return;
      "string" == typeof b &&
        b.indexOf("%") >= 0 &&
        (b = (parseFloat(b.replace("%", "")) / 100) * r),
        (e.virtualSize = -b),
        o
          ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
          : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
        i.centeredSlides &&
          i.cssMode &&
          (T(e.wrapperEl, "--swiper-centered-offset-before", ""),
          T(e.wrapperEl, "--swiper-centered-offset-after", ""));
      const E = i.grid && i.grid.rows > 1 && e.grid;
      let C;
      E && e.grid.initSlides(u);
      const L =
        "auto" === i.slidesPerView &&
        i.breakpoints &&
        Object.keys(i.breakpoints).filter(
          (e) => void 0 !== i.breakpoints[e].slidesPerView
        ).length > 0;
      for (let n = 0; n < u; n += 1) {
        C = 0;
        const o = d.eq(n);
        if (
          (E && e.grid.updateSlide(n, o, u, t), "none" !== o.css("display"))
        ) {
          if ("auto" === i.slidesPerView) {
            L && (d[n].style[t("width")] = "");
            const r = getComputedStyle(o[0]),
              a = o[0].style.transform,
              l = o[0].style.webkitTransform;
            if (
              (a && (o[0].style.transform = "none"),
              l && (o[0].style.webkitTransform = "none"),
              i.roundLengths)
            )
              C = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
            else {
              const e = s(r, "width"),
                t = s(r, "padding-left"),
                i = s(r, "padding-right"),
                n = s(r, "margin-left"),
                a = s(r, "margin-right"),
                l = r.getPropertyValue("box-sizing");
              if (l && "border-box" === l) C = e + n + a;
              else {
                const { clientWidth: s, offsetWidth: r } = o[0];
                C = e + t + i + n + a + (r - s);
              }
            }
            a && (o[0].style.transform = a),
              l && (o[0].style.webkitTransform = l),
              i.roundLengths && (C = Math.floor(C));
          } else
            (C = (r - (i.slidesPerView - 1) * b) / i.slidesPerView),
              i.roundLengths && (C = Math.floor(C)),
              d[n] && (d[n].style[t("width")] = `${C}px`);
          d[n] && (d[n].swiperSlideSize = C),
            f.push(C),
            i.centeredSlides
              ? ((w = w + C / 2 + S / 2 + b),
                0 === S && 0 !== n && (w = w - r / 2 - b),
                0 === n && (w = w - r / 2 - b),
                Math.abs(w) < 0.001 && (w = 0),
                i.roundLengths && (w = Math.floor(w)),
                y % i.slidesPerGroup == 0 && p.push(w),
                m.push(w))
              : (i.roundLengths && (w = Math.floor(w)),
                (y - Math.min(e.params.slidesPerGroupSkip, y)) %
                  e.params.slidesPerGroup ==
                  0 && p.push(w),
                m.push(w),
                (w = w + C + b)),
            (e.virtualSize += C + b),
            (S = C),
            (y += 1);
        }
      }
      if (
        ((e.virtualSize = Math.max(e.virtualSize, r) + v),
        o &&
          a &&
          ("slide" === i.effect || "coverflow" === i.effect) &&
          n.css({ width: `${e.virtualSize + i.spaceBetween}px` }),
        i.setWrapperSize &&
          n.css({ [t("width")]: `${e.virtualSize + i.spaceBetween}px` }),
        E && e.grid.updateWrapperSize(C, p, t),
        !i.centeredSlides)
      ) {
        const t = [];
        for (let s = 0; s < p.length; s += 1) {
          let n = p[s];
          i.roundLengths && (n = Math.floor(n)),
            p[s] <= e.virtualSize - r && t.push(n);
        }
        (p = t),
          Math.floor(e.virtualSize - r) - Math.floor(p[p.length - 1]) > 1 &&
            p.push(e.virtualSize - r);
      }
      if ((0 === p.length && (p = [0]), 0 !== i.spaceBetween)) {
        const s = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
        d.filter((e, t) => !i.cssMode || t !== d.length - 1).css({
          [s]: `${b}px`,
        });
      }
      if (i.centeredSlides && i.centeredSlidesBounds) {
        let e = 0;
        f.forEach((t) => {
          e += t + (i.spaceBetween ? i.spaceBetween : 0);
        }),
          (e -= i.spaceBetween);
        const t = e - r;
        p = p.map((e) => (e < 0 ? -h : e > t ? t + v : e));
      }
      if (i.centerInsufficientSlides) {
        let e = 0;
        if (
          (f.forEach((t) => {
            e += t + (i.spaceBetween ? i.spaceBetween : 0);
          }),
          (e -= i.spaceBetween),
          e < r)
        ) {
          const t = (r - e) / 2;
          p.forEach((e, s) => {
            p[s] = e - t;
          }),
            m.forEach((e, s) => {
              m[s] = e + t;
            });
        }
      }
      if (
        (Object.assign(e, {
          slides: d,
          snapGrid: p,
          slidesGrid: m,
          slidesSizesGrid: f,
        }),
        i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
      ) {
        T(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
          T(
            e.wrapperEl,
            "--swiper-centered-offset-after",
            e.size / 2 - f[f.length - 1] / 2 + "px"
          );
        const t = -e.snapGrid[0],
          s = -e.slidesGrid[0];
        (e.snapGrid = e.snapGrid.map((e) => e + t)),
          (e.slidesGrid = e.slidesGrid.map((e) => e + s));
      }
      if (
        (u !== c && e.emit("slidesLengthChange"),
        p.length !== g &&
          (e.params.watchOverflow && e.checkOverflow(),
          e.emit("snapGridLengthChange")),
        m.length !== _ && e.emit("slidesGridLengthChange"),
        i.watchSlidesProgress && e.updateSlidesOffset(),
        !(l || i.cssMode || ("slide" !== i.effect && "fade" !== i.effect)))
      ) {
        const t = `${i.containerModifierClass}backface-hidden`,
          s = e.$el.hasClass(t);
        u <= i.maxBackfaceHiddenSlides
          ? s || e.$el.addClass(t)
          : s && e.$el.removeClass(t);
      }
    },
    updateAutoHeight: function (e) {
      const t = this,
        s = [],
        i = t.virtual && t.params.virtual.enabled;
      let n,
        r = 0;
      "number" == typeof e
        ? t.setTransition(e)
        : !0 === e && t.setTransition(t.params.speed);
      const o = (e) =>
        i
          ? t.slides.filter(
              (t) =>
                parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
            )[0]
          : t.slides.eq(e)[0];
      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
          t.visibleSlides.each((e) => {
            s.push(e);
          });
        else
          for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
            const e = t.activeIndex + n;
            if (e > t.slides.length && !i) break;
            s.push(o(e));
          }
      else s.push(o(t.activeIndex));
      for (n = 0; n < s.length; n += 1)
        if (void 0 !== s[n]) {
          const e = s[n].offsetHeight;
          r = e > r ? e : r;
        }
      (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`);
    },
    updateSlidesOffset: function () {
      const e = this,
        t = e.slides;
      for (let s = 0; s < t.length; s += 1)
        t[s].swiperSlideOffset = e.isHorizontal()
          ? t[s].offsetLeft
          : t[s].offsetTop;
    },
    updateSlidesProgress: function (e) {
      void 0 === e && (e = (this && this.translate) || 0);
      const t = this,
        s = t.params,
        { slides: i, rtlTranslate: n, snapGrid: r } = t;
      if (0 === i.length) return;
      void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
      let o = -e;
      n && (o = e),
        i.removeClass(s.slideVisibleClass),
        (t.visibleSlidesIndexes = []),
        (t.visibleSlides = []);
      for (let e = 0; e < i.length; e += 1) {
        const a = i[e];
        let l = a.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (l -= i[0].swiperSlideOffset);
        const c =
            (o + (s.centeredSlides ? t.minTranslate() : 0) - l) /
            (a.swiperSlideSize + s.spaceBetween),
          d =
            (o - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - l) /
            (a.swiperSlideSize + s.spaceBetween),
          u = -(o - l),
          p = u + t.slidesSizesGrid[e];
        ((u >= 0 && u < t.size - 1) ||
          (p > 1 && p <= t.size) ||
          (u <= 0 && p >= t.size)) &&
          (t.visibleSlides.push(a),
          t.visibleSlidesIndexes.push(e),
          i.eq(e).addClass(s.slideVisibleClass)),
          (a.progress = n ? -c : c),
          (a.originalProgress = n ? -d : d);
      }
      t.visibleSlides = v(t.visibleSlides);
    },
    updateProgress: function (e) {
      const t = this;
      if (void 0 === e) {
        const s = t.rtlTranslate ? -1 : 1;
        e = (t && t.translate && t.translate * s) || 0;
      }
      const s = t.params,
        i = t.maxTranslate() - t.minTranslate();
      let { progress: n, isBeginning: r, isEnd: o } = t;
      const a = r,
        l = o;
      0 === i
        ? ((n = 0), (r = !0), (o = !0))
        : ((n = (e - t.minTranslate()) / i), (r = n <= 0), (o = n >= 1)),
        Object.assign(t, { progress: n, isBeginning: r, isEnd: o }),
        (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
          t.updateSlidesProgress(e),
        r && !a && t.emit("reachBeginning toEdge"),
        o && !l && t.emit("reachEnd toEdge"),
        ((a && !r) || (l && !o)) && t.emit("fromEdge"),
        t.emit("progress", n);
    },
    updateSlidesClasses: function () {
      const e = this,
        {
          slides: t,
          params: s,
          $wrapperEl: i,
          activeIndex: n,
          realIndex: r,
        } = e,
        o = e.virtual && s.virtual.enabled;
      let a;
      t.removeClass(
        `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
      ),
        (a = o
          ? e.$wrapperEl.find(
              `.${s.slideClass}[data-swiper-slide-index="${n}"]`
            )
          : t.eq(n)),
        a.addClass(s.slideActiveClass),
        s.loop &&
          (a.hasClass(s.slideDuplicateClass)
            ? i
                .children(
                  `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                )
                .addClass(s.slideDuplicateActiveClass)
            : i
                .children(
                  `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                )
                .addClass(s.slideDuplicateActiveClass));
      let l = a.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
      s.loop && 0 === l.length && ((l = t.eq(0)), l.addClass(s.slideNextClass));
      let c = a.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
      s.loop &&
        0 === c.length &&
        ((c = t.eq(-1)), c.addClass(s.slidePrevClass)),
        s.loop &&
          (l.hasClass(s.slideDuplicateClass)
            ? i
                .children(
                  `.${s.slideClass}:not(.${
                    s.slideDuplicateClass
                  })[data-swiper-slide-index="${l.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(s.slideDuplicateNextClass)
            : i
                .children(
                  `.${s.slideClass}.${
                    s.slideDuplicateClass
                  }[data-swiper-slide-index="${l.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(s.slideDuplicateNextClass),
          c.hasClass(s.slideDuplicateClass)
            ? i
                .children(
                  `.${s.slideClass}:not(.${
                    s.slideDuplicateClass
                  })[data-swiper-slide-index="${c.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(s.slideDuplicatePrevClass)
            : i
                .children(
                  `.${s.slideClass}.${
                    s.slideDuplicateClass
                  }[data-swiper-slide-index="${c.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(s.slideDuplicatePrevClass)),
        e.emitSlidesClasses();
    },
    updateActiveIndex: function (e) {
      const t = this,
        s = t.rtlTranslate ? t.translate : -t.translate,
        {
          slidesGrid: i,
          snapGrid: n,
          params: r,
          activeIndex: o,
          realIndex: a,
          snapIndex: l,
        } = t;
      let c,
        d = e;
      if (void 0 === d) {
        for (let e = 0; e < i.length; e += 1)
          void 0 !== i[e + 1]
            ? s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2
              ? (d = e)
              : s >= i[e] && s < i[e + 1] && (d = e + 1)
            : s >= i[e] && (d = e);
        r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
      }
      if (n.indexOf(s) >= 0) c = n.indexOf(s);
      else {
        const e = Math.min(r.slidesPerGroupSkip, d);
        c = e + Math.floor((d - e) / r.slidesPerGroup);
      }
      if ((c >= n.length && (c = n.length - 1), d === o))
        return void (c !== l && ((t.snapIndex = c), t.emit("snapIndexChange")));
      const u = parseInt(
        t.slides.eq(d).attr("data-swiper-slide-index") || d,
        10
      );
      Object.assign(t, {
        snapIndex: c,
        realIndex: u,
        previousIndex: o,
        activeIndex: d,
      }),
        t.emit("activeIndexChange"),
        t.emit("snapIndexChange"),
        a !== u && t.emit("realIndexChange"),
        (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
    },
    updateClickedSlide: function (e) {
      const t = this,
        s = t.params,
        i = v(e).closest(`.${s.slideClass}`)[0];
      let n,
        r = !1;
      if (i)
        for (let e = 0; e < t.slides.length; e += 1)
          if (t.slides[e] === i) {
            (r = !0), (n = e);
            break;
          }
      if (!i || !r)
        return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
      (t.clickedSlide = i),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(
              v(i).attr("data-swiper-slide-index"),
              10
            ))
          : (t.clickedIndex = n),
        s.slideToClickedSlide &&
          void 0 !== t.clickedIndex &&
          t.clickedIndex !== t.activeIndex &&
          t.slideToClickedSlide();
    },
  };
  const A = {
    getTranslate: function (e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      const { params: t, rtlTranslate: s, translate: i, $wrapperEl: n } = this;
      if (t.virtualTranslate) return s ? -i : i;
      if (t.cssMode) return i;
      let r = b(n[0], e);
      return s && (r = -r), r || 0;
    },
    setTranslate: function (e, t) {
      const s = this,
        {
          rtlTranslate: i,
          params: n,
          $wrapperEl: r,
          wrapperEl: o,
          progress: a,
        } = s;
      let l,
        c = 0,
        d = 0;
      s.isHorizontal() ? (c = i ? -e : e) : (d = e),
        n.roundLengths && ((c = Math.floor(c)), (d = Math.floor(d))),
        n.cssMode
          ? (o[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal()
              ? -c
              : -d)
          : n.virtualTranslate ||
            r.transform(`translate3d(${c}px, ${d}px, 0px)`),
        (s.previousTranslate = s.translate),
        (s.translate = s.isHorizontal() ? c : d);
      const u = s.maxTranslate() - s.minTranslate();
      (l = 0 === u ? 0 : (e - s.minTranslate()) / u),
        l !== a && s.updateProgress(e),
        s.emit("setTranslate", s.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e, t, s, i, n) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === s && (s = !0),
        void 0 === i && (i = !0);
      const r = this,
        { params: o, wrapperEl: a } = r;
      if (r.animating && o.preventInteractionOnTransition) return !1;
      const l = r.minTranslate(),
        c = r.maxTranslate();
      let d;
      if (
        ((d = i && e > l ? l : i && e < c ? c : e),
        r.updateProgress(d),
        o.cssMode)
      ) {
        const e = r.isHorizontal();
        if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -d;
        else {
          if (!r.support.smoothScroll)
            return (
              E({ swiper: r, targetPosition: -d, side: e ? "left" : "top" }), !0
            );
          a.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
        }
        return !0;
      }
      return (
        0 === t
          ? (r.setTransition(0),
            r.setTranslate(d),
            s &&
              (r.emit("beforeTransitionStart", t, n), r.emit("transitionEnd")))
          : (r.setTransition(t),
            r.setTranslate(d),
            s &&
              (r.emit("beforeTransitionStart", t, n),
              r.emit("transitionStart")),
            r.animating ||
              ((r.animating = !0),
              r.onTranslateToWrapperTransitionEnd ||
                (r.onTranslateToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      r.onTranslateToWrapperTransitionEnd
                    ),
                    r.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      r.onTranslateToWrapperTransitionEnd
                    ),
                    (r.onTranslateToWrapperTransitionEnd = null),
                    delete r.onTranslateToWrapperTransitionEnd,
                    s && r.emit("transitionEnd"));
                }),
              r.$wrapperEl[0].addEventListener(
                "transitionend",
                r.onTranslateToWrapperTransitionEnd
              ),
              r.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                r.onTranslateToWrapperTransitionEnd
              ))),
        !0
      );
    },
  };
  function O(e) {
    let { swiper: t, runCallbacks: s, direction: i, step: n } = e;
    const { activeIndex: r, previousIndex: o } = t;
    let a = i;
    if (
      (a || (a = r > o ? "next" : r < o ? "prev" : "reset"),
      t.emit(`transition${n}`),
      s && r !== o)
    ) {
      if ("reset" === a) return void t.emit(`slideResetTransition${n}`);
      t.emit(`slideChangeTransition${n}`),
        "next" === a
          ? t.emit(`slideNextTransition${n}`)
          : t.emit(`slidePrevTransition${n}`);
    }
  }
  const z = {
    slideTo: function (e, t, s, i, n) {
      if (
        (void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === s && (s = !0),
        "number" != typeof e && "string" != typeof e)
      )
        throw new Error(
          `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
        );
      if ("string" == typeof e) {
        const t = parseInt(e, 10);
        if (!isFinite(t))
          throw new Error(
            `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
          );
        e = t;
      }
      const r = this;
      let o = e;
      o < 0 && (o = 0);
      const {
        params: a,
        snapGrid: l,
        slidesGrid: c,
        previousIndex: d,
        activeIndex: u,
        rtlTranslate: p,
        wrapperEl: m,
        enabled: f,
      } = r;
      if ((r.animating && a.preventInteractionOnTransition) || (!f && !i && !n))
        return !1;
      const h = Math.min(r.params.slidesPerGroupSkip, o);
      let v = h + Math.floor((o - h) / r.params.slidesPerGroup);
      v >= l.length && (v = l.length - 1),
        (u || a.initialSlide || 0) === (d || 0) &&
          s &&
          r.emit("beforeSlideChangeStart");
      const g = -l[v];
      if ((r.updateProgress(g), a.normalizeSlideIndex))
        for (let e = 0; e < c.length; e += 1) {
          const t = -Math.floor(100 * g),
            s = Math.floor(100 * c[e]),
            i = Math.floor(100 * c[e + 1]);
          void 0 !== c[e + 1]
            ? t >= s && t < i - (i - s) / 2
              ? (o = e)
              : t >= s && t < i && (o = e + 1)
            : t >= s && (o = e);
        }
      if (r.initialized && o !== u) {
        if (!r.allowSlideNext && g < r.translate && g < r.minTranslate())
          return !1;
        if (
          !r.allowSlidePrev &&
          g > r.translate &&
          g > r.maxTranslate() &&
          (u || 0) !== o
        )
          return !1;
      }
      let _;
      if (
        ((_ = o > u ? "next" : o < u ? "prev" : "reset"),
        (p && -g === r.translate) || (!p && g === r.translate))
      )
        return (
          r.updateActiveIndex(o),
          a.autoHeight && r.updateAutoHeight(),
          r.updateSlidesClasses(),
          "slide" !== a.effect && r.setTranslate(g),
          "reset" !== _ && (r.transitionStart(s, _), r.transitionEnd(s, _)),
          !1
        );
      if (a.cssMode) {
        const e = r.isHorizontal(),
          s = p ? g : -g;
        if (0 === t) {
          const t = r.virtual && r.params.virtual.enabled;
          t &&
            ((r.wrapperEl.style.scrollSnapType = "none"),
            (r._immediateVirtual = !0)),
            (m[e ? "scrollLeft" : "scrollTop"] = s),
            t &&
              requestAnimationFrame(() => {
                (r.wrapperEl.style.scrollSnapType = ""),
                  (r._swiperImmediateVirtual = !1);
              });
        } else {
          if (!r.support.smoothScroll)
            return (
              E({ swiper: r, targetPosition: s, side: e ? "left" : "top" }), !0
            );
          m.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
        }
        return !0;
      }
      return (
        r.setTransition(t),
        r.setTranslate(g),
        r.updateActiveIndex(o),
        r.updateSlidesClasses(),
        r.emit("beforeTransitionStart", t, i),
        r.transitionStart(s, _),
        0 === t
          ? r.transitionEnd(s, _)
          : r.animating ||
            ((r.animating = !0),
            r.onSlideToWrapperTransitionEnd ||
              (r.onSlideToWrapperTransitionEnd = function (e) {
                r &&
                  !r.destroyed &&
                  e.target === this &&
                  (r.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    r.onSlideToWrapperTransitionEnd
                  ),
                  r.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    r.onSlideToWrapperTransitionEnd
                  ),
                  (r.onSlideToWrapperTransitionEnd = null),
                  delete r.onSlideToWrapperTransitionEnd,
                  r.transitionEnd(s, _));
              }),
            r.$wrapperEl[0].addEventListener(
              "transitionend",
              r.onSlideToWrapperTransitionEnd
            ),
            r.$wrapperEl[0].addEventListener(
              "webkitTransitionEnd",
              r.onSlideToWrapperTransitionEnd
            )),
        !0
      );
    },
    slideToLoop: function (e, t, s, i) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === s && (s = !0);
      const n = this;
      let r = e;
      return n.params.loop && (r += n.loopedSlides), n.slideTo(r, t, s, i);
    },
    slideNext: function (e, t, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      const i = this,
        { animating: n, enabled: r, params: o } = i;
      if (!r) return i;
      let a = o.slidesPerGroup;
      "auto" === o.slidesPerView &&
        1 === o.slidesPerGroup &&
        o.slidesPerGroupAuto &&
        (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
      const l = i.activeIndex < o.slidesPerGroupSkip ? 1 : a;
      if (o.loop) {
        if (n && o.loopPreventsSlide) return !1;
        i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
      }
      return o.rewind && i.isEnd
        ? i.slideTo(0, e, t, s)
        : i.slideTo(i.activeIndex + l, e, t, s);
    },
    slidePrev: function (e, t, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      const i = this,
        {
          params: n,
          animating: r,
          snapGrid: o,
          slidesGrid: a,
          rtlTranslate: l,
          enabled: c,
        } = i;
      if (!c) return i;
      if (n.loop) {
        if (r && n.loopPreventsSlide) return !1;
        i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
      }
      function d(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      const u = d(l ? i.translate : -i.translate),
        p = o.map((e) => d(e));
      let m = o[p.indexOf(u) - 1];
      if (void 0 === m && n.cssMode) {
        let e;
        o.forEach((t, s) => {
          u >= t && (e = s);
        }),
          void 0 !== e && (m = o[e > 0 ? e - 1 : e]);
      }
      let f = 0;
      if (
        (void 0 !== m &&
          ((f = a.indexOf(m)),
          f < 0 && (f = i.activeIndex - 1),
          "auto" === n.slidesPerView &&
            1 === n.slidesPerGroup &&
            n.slidesPerGroupAuto &&
            ((f = f - i.slidesPerViewDynamic("previous", !0) + 1),
            (f = Math.max(f, 0)))),
        n.rewind && i.isBeginning)
      ) {
        const n =
          i.params.virtual && i.params.virtual.enabled && i.virtual
            ? i.virtual.slides.length - 1
            : i.slides.length - 1;
        return i.slideTo(n, e, t, s);
      }
      return i.slideTo(f, e, t, s);
    },
    slideReset: function (e, t, s) {
      return (
        void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        this.slideTo(this.activeIndex, e, t, s)
      );
    },
    slideToClosest: function (e, t, s, i) {
      void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        void 0 === i && (i = 0.5);
      const n = this;
      let r = n.activeIndex;
      const o = Math.min(n.params.slidesPerGroupSkip, r),
        a = o + Math.floor((r - o) / n.params.slidesPerGroup),
        l = n.rtlTranslate ? n.translate : -n.translate;
      if (l >= n.snapGrid[a]) {
        const e = n.snapGrid[a];
        l - e > (n.snapGrid[a + 1] - e) * i && (r += n.params.slidesPerGroup);
      } else {
        const e = n.snapGrid[a - 1];
        l - e <= (n.snapGrid[a] - e) * i && (r -= n.params.slidesPerGroup);
      }
      return (
        (r = Math.max(r, 0)),
        (r = Math.min(r, n.slidesGrid.length - 1)),
        n.slideTo(r, e, t, s)
      );
    },
    slideToClickedSlide: function () {
      const e = this,
        { params: t, $wrapperEl: s } = e,
        i =
          "auto" === t.slidesPerView
            ? e.slidesPerViewDynamic()
            : t.slidesPerView;
      let n,
        r = e.clickedIndex;
      if (t.loop) {
        if (e.animating) return;
        (n = parseInt(v(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
          t.centeredSlides
            ? r < e.loopedSlides - i / 2 ||
              r > e.slides.length - e.loopedSlides + i / 2
              ? (e.loopFix(),
                (r = s
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                g(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r)
            : r > e.slides.length - i
            ? (e.loopFix(),
              (r = s
                .children(
                  `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                )
                .eq(0)
                .index()),
              g(() => {
                e.slideTo(r);
              }))
            : e.slideTo(r);
      } else e.slideTo(r);
    },
  };
  const I = {
    loopCreate: function () {
      const e = this,
        t = o(),
        { params: s, $wrapperEl: i } = e,
        n = i.children().length > 0 ? v(i.children()[0].parentNode) : i;
      n.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
      let r = n.children(`.${s.slideClass}`);
      if (s.loopFillGroupWithBlank) {
        const e = s.slidesPerGroup - (r.length % s.slidesPerGroup);
        if (e !== s.slidesPerGroup) {
          for (let i = 0; i < e; i += 1) {
            const e = v(t.createElement("div")).addClass(
              `${s.slideClass} ${s.slideBlankClass}`
            );
            n.append(e);
          }
          r = n.children(`.${s.slideClass}`);
        }
      }
      "auto" !== s.slidesPerView ||
        s.loopedSlides ||
        (s.loopedSlides = r.length),
        (e.loopedSlides = Math.ceil(
          parseFloat(s.loopedSlides || s.slidesPerView, 10)
        )),
        (e.loopedSlides += s.loopAdditionalSlides),
        e.loopedSlides > r.length && (e.loopedSlides = r.length);
      const a = [],
        l = [];
      r.each((t, s) => {
        const i = v(t);
        s < e.loopedSlides && l.push(t),
          s < r.length && s >= r.length - e.loopedSlides && a.push(t),
          i.attr("data-swiper-slide-index", s);
      });
      for (let e = 0; e < l.length; e += 1)
        n.append(v(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
      for (let e = a.length - 1; e >= 0; e -= 1)
        n.prepend(v(a[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
    },
    loopFix: function () {
      const e = this;
      e.emit("beforeLoopFix");
      const {
        activeIndex: t,
        slides: s,
        loopedSlides: i,
        allowSlidePrev: n,
        allowSlideNext: r,
        snapGrid: o,
        rtlTranslate: a,
      } = e;
      let l;
      (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
      const c = -o[t] - e.getTranslate();
      if (t < i) {
        (l = s.length - 3 * i + t), (l += i);
        e.slideTo(l, 0, !1, !0) &&
          0 !== c &&
          e.setTranslate((a ? -e.translate : e.translate) - c);
      } else if (t >= s.length - i) {
        (l = -s.length + t + i), (l += i);
        e.slideTo(l, 0, !1, !0) &&
          0 !== c &&
          e.setTranslate((a ? -e.translate : e.translate) - c);
      }
      (e.allowSlidePrev = n), (e.allowSlideNext = r), e.emit("loopFix");
    },
    loopDestroy: function () {
      const { $wrapperEl: e, params: t, slides: s } = this;
      e
        .children(
          `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
        )
        .remove(),
        s.removeAttr("data-swiper-slide-index");
    },
  };
  function H(e) {
    const t = this,
      s = o(),
      i = l(),
      n = t.touchEventsData,
      { params: r, touches: a, enabled: c } = t;
    if (!c) return;
    if (t.animating && r.preventInteractionOnTransition) return;
    !t.animating && r.cssMode && r.loop && t.loopFix();
    let d = e;
    d.originalEvent && (d = d.originalEvent);
    let u = v(d.target);
    if ("wrapper" === r.touchEventsTarget && !u.closest(t.wrapperEl).length)
      return;
    if (
      ((n.isTouchEvent = "touchstart" === d.type),
      !n.isTouchEvent && "which" in d && 3 === d.which)
    )
      return;
    if (!n.isTouchEvent && "button" in d && d.button > 0) return;
    if (n.isTouched && n.isMoved) return;
    !!r.noSwipingClass &&
      "" !== r.noSwipingClass &&
      d.target &&
      d.target.shadowRoot &&
      e.path &&
      e.path[0] &&
      (u = v(e.path[0]));
    const p = r.noSwipingSelector
        ? r.noSwipingSelector
        : `.${r.noSwipingClass}`,
      m = !(!d.target || !d.target.shadowRoot);
    if (
      r.noSwiping &&
      (m
        ? (function (e, t) {
            return (
              void 0 === t && (t = this),
              (function t(s) {
                return s && s !== o() && s !== l()
                  ? (s.assignedSlot && (s = s.assignedSlot),
                    s.closest(e) || t(s.getRootNode().host))
                  : null;
              })(t)
            );
          })(p, d.target)
        : u.closest(p)[0])
    )
      return void (t.allowClick = !0);
    if (r.swipeHandler && !u.closest(r.swipeHandler)[0]) return;
    (a.currentX = "touchstart" === d.type ? d.targetTouches[0].pageX : d.pageX),
      (a.currentY =
        "touchstart" === d.type ? d.targetTouches[0].pageY : d.pageY);
    const f = a.currentX,
      h = a.currentY,
      g = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
      b = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
    if (g && (f <= b || f >= i.innerWidth - b)) {
      if ("prevent" !== g) return;
      e.preventDefault();
    }
    if (
      (Object.assign(n, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
      (a.startX = f),
      (a.startY = h),
      (n.touchStartTime = _()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      r.threshold > 0 && (n.allowThresholdMove = !1),
      "touchstart" !== d.type)
    ) {
      let e = !0;
      u.is(n.focusableElements) &&
        ((e = !1), "SELECT" === u[0].nodeName && (n.isTouched = !1)),
        s.activeElement &&
          v(s.activeElement).is(n.focusableElements) &&
          s.activeElement !== u[0] &&
          s.activeElement.blur();
      const i = e && t.allowTouchMove && r.touchStartPreventDefault;
      (!r.touchStartForcePreventDefault && !i) ||
        u[0].isContentEditable ||
        d.preventDefault();
    }
    t.params.freeMode &&
      t.params.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !r.cssMode &&
      t.freeMode.onTouchStart(),
      t.emit("touchStart", d);
  }
  function G(e) {
    const t = o(),
      s = this,
      i = s.touchEventsData,
      { params: n, touches: r, rtlTranslate: a, enabled: l } = s;
    if (!l) return;
    let c = e;
    if ((c.originalEvent && (c = c.originalEvent), !i.isTouched))
      return void (
        i.startMoving &&
        i.isScrolling &&
        s.emit("touchMoveOpposite", c)
      );
    if (i.isTouchEvent && "touchmove" !== c.type) return;
    const d =
        "touchmove" === c.type &&
        c.targetTouches &&
        (c.targetTouches[0] || c.changedTouches[0]),
      u = "touchmove" === c.type ? d.pageX : c.pageX,
      p = "touchmove" === c.type ? d.pageY : c.pageY;
    if (c.preventedByNestedSwiper) return (r.startX = u), void (r.startY = p);
    if (!s.allowTouchMove)
      return (
        v(c.target).is(i.focusableElements) || (s.allowClick = !1),
        void (
          i.isTouched &&
          (Object.assign(r, { startX: u, startY: p, currentX: u, currentY: p }),
          (i.touchStartTime = _()))
        )
      );
    if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
      if (s.isVertical()) {
        if (
          (p < r.startY && s.translate <= s.maxTranslate()) ||
          (p > r.startY && s.translate >= s.minTranslate())
        )
          return (i.isTouched = !1), void (i.isMoved = !1);
      } else if (
        (u < r.startX && s.translate <= s.maxTranslate()) ||
        (u > r.startX && s.translate >= s.minTranslate())
      )
        return;
    if (
      i.isTouchEvent &&
      t.activeElement &&
      c.target === t.activeElement &&
      v(c.target).is(i.focusableElements)
    )
      return (i.isMoved = !0), void (s.allowClick = !1);
    if (
      (i.allowTouchCallbacks && s.emit("touchMove", c),
      c.targetTouches && c.targetTouches.length > 1)
    )
      return;
    (r.currentX = u), (r.currentY = p);
    const m = r.currentX - r.startX,
      f = r.currentY - r.startY;
    if (s.params.threshold && Math.sqrt(m ** 2 + f ** 2) < s.params.threshold)
      return;
    if (void 0 === i.isScrolling) {
      let e;
      (s.isHorizontal() && r.currentY === r.startY) ||
      (s.isVertical() && r.currentX === r.startX)
        ? (i.isScrolling = !1)
        : m * m + f * f >= 25 &&
          ((e = (180 * Math.atan2(Math.abs(f), Math.abs(m))) / Math.PI),
          (i.isScrolling = s.isHorizontal()
            ? e > n.touchAngle
            : 90 - e > n.touchAngle));
    }
    if (
      (i.isScrolling && s.emit("touchMoveOpposite", c),
      void 0 === i.startMoving &&
        ((r.currentX === r.startX && r.currentY === r.startY) ||
          (i.startMoving = !0)),
      i.isScrolling)
    )
      return void (i.isTouched = !1);
    if (!i.startMoving) return;
    (s.allowClick = !1),
      !n.cssMode && c.cancelable && c.preventDefault(),
      n.touchMoveStopPropagation && !n.nested && c.stopPropagation(),
      i.isMoved ||
        (n.loop && !n.cssMode && s.loopFix(),
        (i.startTranslate = s.getTranslate()),
        s.setTransition(0),
        s.animating &&
          s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
        (i.allowMomentumBounce = !1),
        !n.grabCursor ||
          (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
          s.setGrabCursor(!0),
        s.emit("sliderFirstMove", c)),
      s.emit("sliderMove", c),
      (i.isMoved = !0);
    let h = s.isHorizontal() ? m : f;
    (r.diff = h),
      (h *= n.touchRatio),
      a && (h = -h),
      (s.swipeDirection = h > 0 ? "prev" : "next"),
      (i.currentTranslate = h + i.startTranslate);
    let g = !0,
      b = n.resistanceRatio;
    if (
      (n.touchReleaseOnEdges && (b = 0),
      h > 0 && i.currentTranslate > s.minTranslate()
        ? ((g = !1),
          n.resistance &&
            (i.currentTranslate =
              s.minTranslate() -
              1 +
              (-s.minTranslate() + i.startTranslate + h) ** b))
        : h < 0 &&
          i.currentTranslate < s.maxTranslate() &&
          ((g = !1),
          n.resistance &&
            (i.currentTranslate =
              s.maxTranslate() +
              1 -
              (s.maxTranslate() - i.startTranslate - h) ** b)),
      g && (c.preventedByNestedSwiper = !0),
      !s.allowSlideNext &&
        "next" === s.swipeDirection &&
        i.currentTranslate < i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      !s.allowSlidePrev &&
        "prev" === s.swipeDirection &&
        i.currentTranslate > i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      s.allowSlidePrev ||
        s.allowSlideNext ||
        (i.currentTranslate = i.startTranslate),
      n.threshold > 0)
    ) {
      if (!(Math.abs(h) > n.threshold || i.allowThresholdMove))
        return void (i.currentTranslate = i.startTranslate);
      if (!i.allowThresholdMove)
        return (
          (i.allowThresholdMove = !0),
          (r.startX = r.currentX),
          (r.startY = r.currentY),
          (i.currentTranslate = i.startTranslate),
          void (r.diff = s.isHorizontal()
            ? r.currentX - r.startX
            : r.currentY - r.startY)
        );
    }
    n.followFinger &&
      !n.cssMode &&
      (((n.freeMode && n.freeMode.enabled && s.freeMode) ||
        n.watchSlidesProgress) &&
        (s.updateActiveIndex(), s.updateSlidesClasses()),
      s.params.freeMode &&
        n.freeMode.enabled &&
        s.freeMode &&
        s.freeMode.onTouchMove(),
      s.updateProgress(i.currentTranslate),
      s.setTranslate(i.currentTranslate));
  }
  function D(e) {
    const t = this,
      s = t.touchEventsData,
      { params: i, touches: n, rtlTranslate: r, slidesGrid: o, enabled: a } = t;
    if (!a) return;
    let l = e;
    if (
      (l.originalEvent && (l = l.originalEvent),
      s.allowTouchCallbacks && t.emit("touchEnd", l),
      (s.allowTouchCallbacks = !1),
      !s.isTouched)
    )
      return (
        s.isMoved && i.grabCursor && t.setGrabCursor(!1),
        (s.isMoved = !1),
        void (s.startMoving = !1)
      );
    i.grabCursor &&
      s.isMoved &&
      s.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    const c = _(),
      d = c - s.touchStartTime;
    if (t.allowClick) {
      const e = l.path || (l.composedPath && l.composedPath());
      t.updateClickedSlide((e && e[0]) || l.target),
        t.emit("tap click", l),
        d < 300 &&
          c - s.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", l);
    }
    if (
      ((s.lastClickTime = _()),
      g(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !s.isTouched ||
        !s.isMoved ||
        !t.swipeDirection ||
        0 === n.diff ||
        s.currentTranslate === s.startTranslate)
    )
      return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
    let u;
    if (
      ((s.isTouched = !1),
      (s.isMoved = !1),
      (s.startMoving = !1),
      (u = i.followFinger
        ? r
          ? t.translate
          : -t.translate
        : -s.currentTranslate),
      i.cssMode)
    )
      return;
    if (t.params.freeMode && i.freeMode.enabled)
      return void t.freeMode.onTouchEnd({ currentPos: u });
    let p = 0,
      m = t.slidesSizesGrid[0];
    for (
      let e = 0;
      e < o.length;
      e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
    ) {
      const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
      void 0 !== o[e + t]
        ? u >= o[e] && u < o[e + t] && ((p = e), (m = o[e + t] - o[e]))
        : u >= o[e] && ((p = e), (m = o[o.length - 1] - o[o.length - 2]));
    }
    let f = null,
      h = null;
    i.rewind &&
      (t.isBeginning
        ? (h =
            t.params.virtual && t.params.virtual.enabled && t.virtual
              ? t.virtual.slides.length - 1
              : t.slides.length - 1)
        : t.isEnd && (f = 0));
    const v = (u - o[p]) / m,
      b = p < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
    if (d > i.longSwipesMs) {
      if (!i.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection &&
        (v >= i.longSwipesRatio
          ? t.slideTo(i.rewind && t.isEnd ? f : p + b)
          : t.slideTo(p)),
        "prev" === t.swipeDirection &&
          (v > 1 - i.longSwipesRatio
            ? t.slideTo(p + b)
            : null !== h && v < 0 && Math.abs(v) > i.longSwipesRatio
            ? t.slideTo(h)
            : t.slideTo(p));
    } else {
      if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation &&
      (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
        ? l.target === t.navigation.nextEl
          ? t.slideTo(p + b)
          : t.slideTo(p)
        : ("next" === t.swipeDirection && t.slideTo(null !== f ? f : p + b),
          "prev" === t.swipeDirection && t.slideTo(null !== h ? h : p));
    }
  }
  function B() {
    const e = this,
      { params: t, el: s } = e;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: i, allowSlidePrev: n, snapGrid: r } = e;
    (e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses(),
      ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
      e.isEnd &&
      !e.isBeginning &&
      !e.params.centeredSlides
        ? e.slideTo(e.slides.length - 1, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0),
      e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
      (e.allowSlidePrev = n),
      (e.allowSlideNext = i),
      e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
  }
  function N(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function j() {
    const e = this,
      { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
    if (!i) return;
    let n;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      -0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    const r = e.maxTranslate() - e.minTranslate();
    (n = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
      n !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }
  let V = !1;
  function W() {}
  const F = (e, t) => {
    const s = o(),
      {
        params: i,
        touchEvents: n,
        el: r,
        wrapperEl: a,
        device: l,
        support: c,
      } = e,
      d = !!i.nested,
      u = "on" === t ? "addEventListener" : "removeEventListener",
      p = t;
    if (c.touch) {
      const t = !(
        "touchstart" !== n.start ||
        !c.passiveListener ||
        !i.passiveListeners
      ) && { passive: !0, capture: !1 };
      r[u](n.start, e.onTouchStart, t),
        r[u](
          n.move,
          e.onTouchMove,
          c.passiveListener ? { passive: !1, capture: d } : d
        ),
        r[u](n.end, e.onTouchEnd, t),
        n.cancel && r[u](n.cancel, e.onTouchEnd, t);
    } else
      r[u](n.start, e.onTouchStart, !1),
        s[u](n.move, e.onTouchMove, d),
        s[u](n.end, e.onTouchEnd, !1);
    (i.preventClicks || i.preventClicksPropagation) &&
      r[u]("click", e.onClick, !0),
      i.cssMode && a[u]("scroll", e.onScroll),
      i.updateOnWindowResize
        ? e[p](
            l.ios || l.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            B,
            !0
          )
        : e[p]("observerUpdate", B, !0);
  };
  const R = {
      attachEvents: function () {
        const e = this,
          t = o(),
          { params: s, support: i } = e;
        (e.onTouchStart = H.bind(e)),
          (e.onTouchMove = G.bind(e)),
          (e.onTouchEnd = D.bind(e)),
          s.cssMode && (e.onScroll = j.bind(e)),
          (e.onClick = N.bind(e)),
          i.touch && !V && (t.addEventListener("touchstart", W), (V = !0)),
          F(e, "on");
      },
      detachEvents: function () {
        F(this, "off");
      },
    },
    X = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  const Y = {
    setBreakpoint: function () {
      const e = this,
        {
          activeIndex: t,
          initialized: s,
          loopedSlides: i = 0,
          params: n,
          $el: r,
        } = e,
        o = n.breakpoints;
      if (!o || (o && 0 === Object.keys(o).length)) return;
      const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
      if (!a || e.currentBreakpoint === a) return;
      const l = (a in o ? o[a] : void 0) || e.originalParams,
        c = X(e, n),
        d = X(e, l),
        u = n.enabled;
      c && !d
        ? (r.removeClass(
            `${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`
          ),
          e.emitContainerClasses())
        : !c &&
          d &&
          (r.addClass(`${n.containerModifierClass}grid`),
          ((l.grid.fill && "column" === l.grid.fill) ||
            (!l.grid.fill && "column" === n.grid.fill)) &&
            r.addClass(`${n.containerModifierClass}grid-column`),
          e.emitContainerClasses());
      const p = l.direction && l.direction !== n.direction,
        m = n.loop && (l.slidesPerView !== n.slidesPerView || p);
      p && s && e.changeDirection(), y(e.params, l);
      const f = e.params.enabled;
      Object.assign(e, {
        allowTouchMove: e.params.allowTouchMove,
        allowSlideNext: e.params.allowSlideNext,
        allowSlidePrev: e.params.allowSlidePrev,
      }),
        u && !f ? e.disable() : !u && f && e.enable(),
        (e.currentBreakpoint = a),
        e.emit("_beforeBreakpoint", l),
        m &&
          s &&
          (e.loopDestroy(),
          e.loopCreate(),
          e.updateSlides(),
          e.slideTo(t - i + e.loopedSlides, 0, !1)),
        e.emit("breakpoint", l);
    },
    getBreakpoint: function (e, t, s) {
      if ((void 0 === t && (t = "window"), !e || ("container" === t && !s)))
        return;
      let i = !1;
      const n = l(),
        r = "window" === t ? n.innerHeight : s.clientHeight,
        o = Object.keys(e).map((e) => {
          if ("string" == typeof e && 0 === e.indexOf("@")) {
            const t = parseFloat(e.substr(1));
            return { value: r * t, point: e };
          }
          return { value: e, point: e };
        });
      o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
      for (let e = 0; e < o.length; e += 1) {
        const { point: r, value: a } = o[e];
        "window" === t
          ? n.matchMedia(`(min-width: ${a}px)`).matches && (i = r)
          : a <= s.clientWidth && (i = r);
      }
      return i || "max";
    },
  };
  const U = {
    addClasses: function () {
      const e = this,
        { classNames: t, params: s, rtl: i, $el: n, device: r, support: o } = e,
        a = (function (e, t) {
          const s = [];
          return (
            e.forEach((e) => {
              "object" == typeof e
                ? Object.keys(e).forEach((i) => {
                    e[i] && s.push(t + i);
                  })
                : "string" == typeof e && s.push(t + e);
            }),
            s
          );
        })(
          [
            "initialized",
            s.direction,
            { "pointer-events": !o.touch },
            { "free-mode": e.params.freeMode && s.freeMode.enabled },
            { autoheight: s.autoHeight },
            { rtl: i },
            { grid: s.grid && s.grid.rows > 1 },
            {
              "grid-column":
                s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
            },
            { android: r.android },
            { ios: r.ios },
            { "css-mode": s.cssMode },
            { centered: s.cssMode && s.centeredSlides },
          ],
          s.containerModifierClass
        );
      t.push(...a), n.addClass([...t].join(" ")), e.emitContainerClasses();
    },
    removeClasses: function () {
      const { $el: e, classNames: t } = this;
      e.removeClass(t.join(" ")), this.emitContainerClasses();
    },
  };
  const K = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
  function J(e, t) {
    return function (s) {
      void 0 === s && (s = {});
      const i = Object.keys(s)[0],
        n = s[i];
      "object" == typeof n && null !== n
        ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
            !0 === e[i] &&
            (e[i] = { auto: !0 }),
          i in e && "enabled" in n
            ? (!0 === e[i] && (e[i] = { enabled: !0 }),
              "object" != typeof e[i] ||
                "enabled" in e[i] ||
                (e[i].enabled = !0),
              e[i] || (e[i] = { enabled: !1 }),
              y(t, s))
            : y(t, s))
        : y(t, s);
    };
  }
  const Q = {
      eventsEmitter: q,
      update: $,
      translate: A,
      transition: {
        setTransition: function (e, t) {
          const s = this;
          s.params.cssMode || s.$wrapperEl.transition(e),
            s.emit("setTransition", e, t);
        },
        transitionStart: function (e, t) {
          void 0 === e && (e = !0);
          const s = this,
            { params: i } = s;
          i.cssMode ||
            (i.autoHeight && s.updateAutoHeight(),
            O({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
        },
        transitionEnd: function (e, t) {
          void 0 === e && (e = !0);
          const s = this,
            { params: i } = s;
          (s.animating = !1),
            i.cssMode ||
              (s.setTransition(0),
              O({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
        },
      },
      slide: z,
      loop: I,
      grabCursor: {
        setGrabCursor: function (e) {
          const t = this;
          if (
            t.support.touch ||
            !t.params.simulateTouch ||
            (t.params.watchOverflow && t.isLocked) ||
            t.params.cssMode
          )
            return;
          const s =
            "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
          (s.style.cursor = "move"),
            (s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
            (s.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
            (s.style.cursor = e ? "grabbing" : "grab");
        },
        unsetGrabCursor: function () {
          const e = this;
          e.support.touch ||
            (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e[
              "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
            ].style.cursor = "");
        },
      },
      events: R,
      breakpoints: Y,
      checkOverflow: {
        checkOverflow: function () {
          const e = this,
            { isLocked: t, params: s } = e,
            { slidesOffsetBefore: i } = s;
          if (i) {
            const t = e.slides.length - 1,
              s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
            e.isLocked = e.size > s;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
            !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
            t && t !== e.isLocked && (e.isEnd = !1),
            t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
        },
      },
      classes: U,
      images: {
        loadImage: function (e, t, s, i, n, r) {
          const o = l();
          let a;
          function c() {
            r && r();
          }
          v(e).parent("picture")[0] || (e.complete && n)
            ? c()
            : t
            ? ((a = new o.Image()),
              (a.onload = c),
              (a.onerror = c),
              i && (a.sizes = i),
              s && (a.srcset = s),
              t && (a.src = t))
            : c();
        },
        preloadImages: function () {
          const e = this;
          function t() {
            null != e &&
              e &&
              !e.destroyed &&
              (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
              e.imagesLoaded === e.imagesToLoad.length &&
                (e.params.updateOnImagesReady && e.update(),
                e.emit("imagesReady")));
          }
          e.imagesToLoad = e.$el.find("img");
          for (let s = 0; s < e.imagesToLoad.length; s += 1) {
            const i = e.imagesToLoad[s];
            e.loadImage(
              i,
              i.currentSrc || i.getAttribute("src"),
              i.srcset || i.getAttribute("srcset"),
              i.sizes || i.getAttribute("sizes"),
              !0,
              t
            );
          }
        },
      },
    },
    Z = {};
  class ee {
    constructor() {
      let e, t;
      for (var s = arguments.length, i = new Array(s), n = 0; n < s; n++)
        i[n] = arguments[n];
      if (
        (1 === i.length &&
        i[0].constructor &&
        "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
          ? (t = i[0])
          : ([e, t] = i),
        t || (t = {}),
        (t = y({}, t)),
        e && !t.el && (t.el = e),
        t.el && v(t.el).length > 1)
      ) {
        const e = [];
        return (
          v(t.el).each((s) => {
            const i = y({}, t, { el: s });
            e.push(new ee(i));
          }),
          e
        );
      }
      const r = this;
      (r.__swiper__ = !0),
        (r.support = M()),
        (r.device = k({ userAgent: t.userAgent })),
        (r.browser = P()),
        (r.eventsListeners = {}),
        (r.eventsAnyListeners = []),
        (r.modules = [...r.__modules__]),
        t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
      const o = {};
      r.modules.forEach((e) => {
        e({
          swiper: r,
          extendParams: J(t, o),
          on: r.on.bind(r),
          once: r.once.bind(r),
          off: r.off.bind(r),
          emit: r.emit.bind(r),
        });
      });
      const a = y({}, K, o);
      return (
        (r.params = y({}, a, Z, t)),
        (r.originalParams = y({}, r.params)),
        (r.passedParams = y({}, t)),
        r.params &&
          r.params.on &&
          Object.keys(r.params.on).forEach((e) => {
            r.on(e, r.params.on[e]);
          }),
        r.params && r.params.onAny && r.onAny(r.params.onAny),
        (r.$ = v),
        Object.assign(r, {
          enabled: r.params.enabled,
          el: e,
          classNames: [],
          slides: v(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => "horizontal" === r.params.direction,
          isVertical: () => "vertical" === r.params.direction,
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: r.params.allowSlideNext,
          allowSlidePrev: r.params.allowSlidePrev,
          touchEvents: (function () {
            const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
              t = ["pointerdown", "pointermove", "pointerup"];
            return (
              (r.touchEventsTouch = {
                start: e[0],
                move: e[1],
                end: e[2],
                cancel: e[3],
              }),
              (r.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
              r.support.touch || !r.params.simulateTouch
                ? r.touchEventsTouch
                : r.touchEventsDesktop
            );
          })(),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: r.params.focusableElements,
            lastClickTime: _(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0,
          },
          allowClick: !0,
          allowTouchMove: r.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        r.emit("_swiper"),
        r.params.init && r.init(),
        r
      );
    }
    enable() {
      const e = this;
      e.enabled ||
        ((e.enabled = !0),
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled &&
        ((e.enabled = !1),
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"));
    }
    setProgress(e, t) {
      const s = this;
      e = Math.min(Math.max(e, 0), 1);
      const i = s.minTranslate(),
        n = (s.maxTranslate() - i) * e + i;
      s.translateTo(n, void 0 === t ? 0 : t),
        s.updateActiveIndex(),
        s.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className
        .split(" ")
        .filter(
          (t) =>
            0 === t.indexOf("swiper") ||
            0 === t.indexOf(e.params.containerModifierClass)
        );
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return e.className
        .split(" ")
        .filter(
          (e) =>
            0 === e.indexOf("swiper-slide") ||
            0 === e.indexOf(t.params.slideClass)
        )
        .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.each((s) => {
        const i = e.getSlideClasses(s);
        t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e, t) {
      void 0 === e && (e = "current"), void 0 === t && (t = !1);
      const {
        params: s,
        slides: i,
        slidesGrid: n,
        slidesSizesGrid: r,
        size: o,
        activeIndex: a,
      } = this;
      let l = 1;
      if (s.centeredSlides) {
        let e,
          t = i[a].swiperSlideSize;
        for (let s = a + 1; s < i.length; s += 1)
          i[s] &&
            !e &&
            ((t += i[s].swiperSlideSize), (l += 1), t > o && (e = !0));
        for (let s = a - 1; s >= 0; s -= 1)
          i[s] &&
            !e &&
            ((t += i[s].swiperSlideSize), (l += 1), t > o && (e = !0));
      } else if ("current" === e)
        for (let e = a + 1; e < i.length; e += 1) {
          (t ? n[e] + r[e] - n[a] < o : n[e] - n[a] < o) && (l += 1);
        }
      else
        for (let e = a - 1; e >= 0; e -= 1) {
          n[a] - n[e] < o && (l += 1);
        }
      return l;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: s } = e;
      function i() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
          s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let n;
      s.breakpoints && e.setBreakpoint(),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        e.params.freeMode && e.params.freeMode.enabled
          ? (i(), e.params.autoHeight && e.updateAutoHeight())
          : ((n =
              ("auto" === e.params.slidesPerView ||
                e.params.slidesPerView > 1) &&
              e.isEnd &&
              !e.params.centeredSlides
                ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                : e.slideTo(e.activeIndex, 0, !1, !0)),
            n || i()),
        s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, t) {
      void 0 === t && (t = !0);
      const s = this,
        i = s.params.direction;
      return (
        e || (e = "horizontal" === i ? "vertical" : "horizontal"),
        e === i ||
          ("horizontal" !== e && "vertical" !== e) ||
          (s.$el
            .removeClass(`${s.params.containerModifierClass}${i}`)
            .addClass(`${s.params.containerModifierClass}${e}`),
          s.emitContainerClasses(),
          (s.params.direction = e),
          s.slides.each((t) => {
            "vertical" === e ? (t.style.width = "") : (t.style.height = "");
          }),
          s.emit("changeDirection"),
          t && s.update()),
        s
      );
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      const s = v(e || t.params.el);
      if (!(e = s[0])) return !1;
      e.swiper = t;
      const i = () =>
        `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let n = (() => {
        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
          const t = v(e.shadowRoot.querySelector(i()));
          return (t.children = (e) => s.children(e)), t;
        }
        return s.children(i());
      })();
      if (0 === n.length && t.params.createElements) {
        const e = o().createElement("div");
        (n = v(e)),
          (e.className = t.params.wrapperClass),
          s.append(e),
          s.children(`.${t.params.slideClass}`).each((e) => {
            n.append(e);
          });
      }
      return (
        Object.assign(t, {
          $el: s,
          el: e,
          $wrapperEl: n,
          wrapperEl: n[0],
          mounted: !0,
          rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
          rtlTranslate:
            "horizontal" === t.params.direction &&
            ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
          wrongRTL: "-webkit-box" === n.css("display"),
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      if (t.initialized) return t;
      return (
        !1 === t.mount(e) ||
          (t.emit("beforeInit"),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.params.loop && t.loopCreate(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.preloadImages && t.preloadImages(),
          t.params.loop
            ? t.slideTo(
                t.params.initialSlide + t.loopedSlides,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              )
            : t.slideTo(
                t.params.initialSlide,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              ),
          t.attachEvents(),
          (t.initialized = !0),
          t.emit("init"),
          t.emit("afterInit")),
        t
      );
    }
    destroy(e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);
      const s = this,
        { params: i, $el: n, $wrapperEl: r, slides: o } = s;
      return (
        void 0 === s.params ||
          s.destroyed ||
          (s.emit("beforeDestroy"),
          (s.initialized = !1),
          s.detachEvents(),
          i.loop && s.loopDestroy(),
          t &&
            (s.removeClasses(),
            n.removeAttr("style"),
            r.removeAttr("style"),
            o &&
              o.length &&
              o
                .removeClass(
                  [
                    i.slideVisibleClass,
                    i.slideActiveClass,
                    i.slideNextClass,
                    i.slidePrevClass,
                  ].join(" ")
                )
                .removeAttr("style")
                .removeAttr("data-swiper-slide-index")),
          s.emit("destroy"),
          Object.keys(s.eventsListeners).forEach((e) => {
            s.off(e);
          }),
          !1 !== e &&
            ((s.$el[0].swiper = null),
            (function (e) {
              const t = e;
              Object.keys(t).forEach((e) => {
                try {
                  t[e] = null;
                } catch (e) {}
                try {
                  delete t[e];
                } catch (e) {}
              });
            })(s)),
          (s.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      y(Z, e);
    }
    static get extendedDefaults() {
      return Z;
    }
    static get defaults() {
      return K;
    }
    static installModule(e) {
      ee.prototype.__modules__ || (ee.prototype.__modules__ = []);
      const t = ee.prototype.__modules__;
      "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((e) => ee.installModule(e)), ee)
        : (ee.installModule(e), ee);
    }
  }
  Object.keys(Q).forEach((e) => {
    Object.keys(Q[e]).forEach((t) => {
      ee.prototype[t] = Q[e][t];
    });
  }),
    ee.use([
      function (e) {
        let { swiper: t, on: s, emit: i } = e;
        const n = l();
        let r = null,
          o = null;
        const a = () => {
            t &&
              !t.destroyed &&
              t.initialized &&
              (i("beforeResize"), i("resize"));
          },
          c = () => {
            t && !t.destroyed && t.initialized && i("orientationchange");
          };
        s("init", () => {
          t.params.resizeObserver && void 0 !== n.ResizeObserver
            ? t &&
              !t.destroyed &&
              t.initialized &&
              ((r = new ResizeObserver((e) => {
                o = n.requestAnimationFrame(() => {
                  const { width: s, height: i } = t;
                  let n = s,
                    r = i;
                  e.forEach((e) => {
                    let { contentBoxSize: s, contentRect: i, target: o } = e;
                    (o && o !== t.el) ||
                      ((n = i ? i.width : (s[0] || s).inlineSize),
                      (r = i ? i.height : (s[0] || s).blockSize));
                  }),
                    (n === s && r === i) || a();
                });
              })),
              r.observe(t.el))
            : (n.addEventListener("resize", a),
              n.addEventListener("orientationchange", c));
        }),
          s("destroy", () => {
            o && n.cancelAnimationFrame(o),
              r && r.unobserve && t.el && (r.unobserve(t.el), (r = null)),
              n.removeEventListener("resize", a),
              n.removeEventListener("orientationchange", c);
          });
      },
      function (e) {
        let { swiper: t, extendParams: s, on: i, emit: n } = e;
        const r = [],
          o = l(),
          a = function (e, t) {
            void 0 === t && (t = {});
            const s = new (o.MutationObserver || o.WebkitMutationObserver)(
              (e) => {
                if (1 === e.length) return void n("observerUpdate", e[0]);
                const t = function () {
                  n("observerUpdate", e[0]);
                };
                o.requestAnimationFrame
                  ? o.requestAnimationFrame(t)
                  : o.setTimeout(t, 0);
              }
            );
            s.observe(e, {
              attributes: void 0 === t.attributes || t.attributes,
              childList: void 0 === t.childList || t.childList,
              characterData: void 0 === t.characterData || t.characterData,
            }),
              r.push(s);
          };
        s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          i("init", () => {
            if (t.params.observer) {
              if (t.params.observeParents) {
                const e = t.$el.parents();
                for (let t = 0; t < e.length; t += 1) a(e[t]);
              }
              a(t.$el[0], { childList: t.params.observeSlideChildren }),
                a(t.$wrapperEl[0], { attributes: !1 });
            }
          }),
          i("destroy", () => {
            r.forEach((e) => {
              e.disconnect();
            }),
              r.splice(0, r.length);
          });
      },
    ]);
  const te = ee;
  function se(e) {
    let { swiper: t, extendParams: s, on: i, emit: n } = e;
    function r(e) {
      let s;
      return (
        e &&
          ((s = v(e)),
          t.params.uniqueNavElements &&
            "string" == typeof e &&
            s.length > 1 &&
            1 === t.$el.find(e).length &&
            (s = t.$el.find(e))),
        s
      );
    }
    function a(e, s) {
      const i = t.params.navigation;
      e &&
        e.length > 0 &&
        (e[s ? "addClass" : "removeClass"](i.disabledClass),
        e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = s),
        t.params.watchOverflow &&
          t.enabled &&
          e[t.isLocked ? "addClass" : "removeClass"](i.lockClass));
    }
    function l() {
      if (t.params.loop) return;
      const { $nextEl: e, $prevEl: s } = t.navigation;
      a(s, t.isBeginning && !t.params.rewind),
        a(e, t.isEnd && !t.params.rewind);
    }
    function c(e) {
      e.preventDefault(),
        (!t.isBeginning || t.params.loop || t.params.rewind) && t.slidePrev();
    }
    function d(e) {
      e.preventDefault(),
        (!t.isEnd || t.params.loop || t.params.rewind) && t.slideNext();
    }
    function u() {
      const e = t.params.navigation;
      if (
        ((t.params.navigation = (function (e, t, s, i) {
          const n = o();
          return (
            e.params.createElements &&
              Object.keys(i).forEach((r) => {
                if (!s[r] && !0 === s.auto) {
                  let o = e.$el.children(`.${i[r]}`)[0];
                  o ||
                    ((o = n.createElement("div")),
                    (o.className = i[r]),
                    e.$el.append(o)),
                    (s[r] = o),
                    (t[r] = o);
                }
              }),
            s
          );
        })(t, t.originalParams.navigation, t.params.navigation, {
          nextEl: "swiper-button-next",
          prevEl: "swiper-button-prev",
        })),
        !e.nextEl && !e.prevEl)
      )
        return;
      const s = r(e.nextEl),
        i = r(e.prevEl);
      s && s.length > 0 && s.on("click", d),
        i && i.length > 0 && i.on("click", c),
        Object.assign(t.navigation, {
          $nextEl: s,
          nextEl: s && s[0],
          $prevEl: i,
          prevEl: i && i[0],
        }),
        t.enabled ||
          (s && s.addClass(e.lockClass), i && i.addClass(e.lockClass));
    }
    function p() {
      const { $nextEl: e, $prevEl: s } = t.navigation;
      e &&
        e.length &&
        (e.off("click", d), e.removeClass(t.params.navigation.disabledClass)),
        s &&
          s.length &&
          (s.off("click", c), s.removeClass(t.params.navigation.disabledClass));
    }
    s({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
      },
    }),
      (t.navigation = {
        nextEl: null,
        $nextEl: null,
        prevEl: null,
        $prevEl: null,
      }),
      i("init", () => {
        u(), l();
      }),
      i("toEdge fromEdge lock unlock", () => {
        l();
      }),
      i("destroy", () => {
        p();
      }),
      i("enable disable", () => {
        const { $nextEl: e, $prevEl: s } = t.navigation;
        e &&
          e[t.enabled ? "removeClass" : "addClass"](
            t.params.navigation.lockClass
          ),
          s &&
            s[t.enabled ? "removeClass" : "addClass"](
              t.params.navigation.lockClass
            );
      }),
      i("click", (e, s) => {
        const { $nextEl: i, $prevEl: r } = t.navigation,
          o = s.target;
        if (t.params.navigation.hideOnClick && !v(o).is(r) && !v(o).is(i)) {
          if (
            t.pagination &&
            t.params.pagination &&
            t.params.pagination.clickable &&
            (t.pagination.el === o || t.pagination.el.contains(o))
          )
            return;
          let e;
          i
            ? (e = i.hasClass(t.params.navigation.hiddenClass))
            : r && (e = r.hasClass(t.params.navigation.hiddenClass)),
            n(!0 === e ? "navigationShow" : "navigationHide"),
            i && i.toggleClass(t.params.navigation.hiddenClass),
            r && r.toggleClass(t.params.navigation.hiddenClass);
        }
      }),
      Object.assign(t.navigation, { update: l, init: u, destroy: p });
  }
  window.addEventListener("load", function (e) {
    document.querySelector(".item-block-swiper") &&
      new te(".item-block-swiper", {
        modules: [se],
        observer: !0,
        observeParents: !0,
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
        autoHeight: !0,
        speed: 800,
        navigation: {
          prevEl: ".item-block__prev",
          nextEl: ".item-block__next",
        },
        breakpoints: {
          320: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 30,
            autoHeight: !0,
          },
          768: { slidesPerView: 3, spaceBetween: 30 },
        },
        on: {},
      }),
      document.querySelector(".categories-swiper") &&
        new te(".categories-swiper", {
          modules: [se],
          observer: !0,
          observeParents: !0,
          slidesPerView: 4,
          slidesPerGroup: 2,
          spaceBetween: 20,
          autoHeight: !0,
          speed: 800,
          navigation: {
            prevEl: ".categories__prev",
            nextEl: ".categories__next",
          },
          breakpoints: {
            320: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 30,
              autoHeight: !0,
            },
            768: { slidesPerView: 4, spaceBetween: 30 },
          },
        }),
      document.querySelector(".like-swiper") &&
        new te(".like-swiper", {
          modules: [se],
          observer: !0,
          observeParents: !0,
          slidesPerView: 4,
          slidesPerGroup: 2,
          spaceBetween: 20,
          autoHeight: !0,
          speed: 800,
          navigation: { prevEl: ".like__prev", nextEl: ".like__next" },
          breakpoints: {
            320: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 30,
              autoHeight: !0,
            },
            768: { slidesPerView: 4, spaceBetween: 30 },
          },
        });
  });
  let ie = !1;
  setTimeout(() => {
    if (ie) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0),
    document.addEventListener("click", function (e) {
      !(function (e) {
        document.querySelector(".search") && E();
        document.querySelector(".checkout") && (o(), C(), r());
        document.querySelector(".cart") && (T(), i(), s());
        document.querySelector(".card") && (l(), t());
        document.querySelector(".filter") && (a(), d(), c());
        document.querySelector(".catalog") && n();
        function t() {
          if (e.target.closest(".card__image-item")) {
            const t = e.target.closest(".card__image-item"),
              s = e.target.closest(".card__image-item > img");
            if (!t.classList.contains("card__image-item_active")) {
              document
                .querySelector(".card__image-item_active")
                .classList.remove("card__image-item_active");
              const e = document.querySelector(".card__main-image");
              t.classList.add("card__image-item_active"),
                (e.textContent = ""),
                e.insertAdjacentHTML("beforeend", s.outerHTML);
            }
          }
        }
        function s() {
          const t = document.querySelector(".cart__price");
          if (e.target.closest(".cart-item__sum-minus")) {
            const s = e.target.closest(".cart-item"),
              i = s.querySelector(".cart-item__sum-value");
            if (parseInt(i.innerHTML) > 1) {
              const e = s.querySelector(".cart-item__price").innerHTML;
              (i.innerHTML = --i.innerHTML),
                (t.innerHTML = parseInt(t.innerHTML) - parseInt(e));
            }
          }
          if (e.target.closest(".cart-item__sum-plus")) {
            const s = e.target.closest(".cart-item"),
              i = s.querySelector(".cart-item__sum-value");
            i.innerHTML = ++i.innerHTML;
            const n = s.querySelector(".cart-item__price").innerHTML;
            t.innerHTML = parseInt(n) + parseInt(t.innerHTML);
          }
        }
        function i() {
          if (e.target.closest(".card__button")) {
            t(e.target, e.target.closest(".card").dataset.cid);
          }
          if (e.target.closest(".cart-item__remove")) {
            s(e.target, e.target.closest(".cart-item").dataset.cartcid, !1);
          }
          function t(e, t) {
            e.classList.contains("_hold") ||
              (e.classList.add("_hold"), s(e, t));
          }
          function s(e, t, s = !0) {
            let i = document.querySelector(".cart-header__value"),
              n = document.querySelector(".cart__sum"),
              r = document.querySelector(".cart__price");
            const o = document.querySelector(`[data-cartcid="${t}"]`),
              a = document.querySelector(".cart__items");
            if (s) {
              if (o) {
                const e = document.querySelector(`[data-cid="${t}"]`),
                  s = o.querySelector(".cart-item__sum-value");
                s.innerHTML = ++s.innerHTML;
                const i = e.querySelector(".card__price").innerHTML;
                r.innerHTML = parseInt(i) + parseInt(r.innerHTML);
              } else {
                (i.innerHTML = ++i.innerHTML), (n.innerHTML = ++n.innerHTML);
                const e = document.querySelector(`[data-cid="${t}"]`),
                  s = e.querySelector(".card__main-image").innerHTML,
                  o = e.querySelector(".card__name").innerHTML,
                  l = e.querySelector(".card__price").innerHTML,
                  c = e.querySelector(".card__color-block").innerHTML;
                r.innerHTML = parseInt(l) + parseInt(r.innerHTML);
                const d = `\n                    <article data-cartcid="${t}" class="cart__item cart-item">\n                    <div class="cart-item__body">\n                        <div class="cart-item__image">\n                            ${s}\n                        </div>\n                        <div class="cart-item__content">\n                            <div class="cart-item__name">\n                                ${o}\n                            </div>\n                            <div class="cart-item__inputs">\n                                <div class="cart-item__color">\n                                    <label for="cart-item-color">Color:</label>\n                                    <div class="cart-item__color-body">\n                                        ${c}\n                                    </div>\n                                </div>\n                                <div class="cart-item__size">\n                                    <label for="cart-item-size">Size:</label>\n                                    <select name="cart-item-size" id="cart-item-size">\n                                        <option value="size-1">\n                                            S\n                                        </option>\n                                        <option value="size-2">\n                                            M\n                                        </option>\n                                        <option value="size-3">\n                                            L\n                                        </option>\n                                    </select>\n                                </div>\n                            </div>\n                        <div class="cart-item__sum">\n                            <div class="cart-item__sum-minus">-</div>\n                            <div class="cart-item__sum-value">1</div>\n                            <div class="cart-item__sum-plus">+</div>\n                        </div>\n                        </div>\n                    </div>\n                    <div class="cart-item__summary">\n                        <div class="cart-item__price">${l}</div>\n                        <div class="cart-item__remove">remove</div>\n                    </div>\n                    </article>\n                    `;
                a.insertAdjacentHTML("beforeend", d);
              }
              e.classList.remove("_hold");
            } else {
              o.remove(),
                (i.innerHTML = --i.innerHTML),
                (n.innerHTML = --n.innerHTML);
              const e = document
                  .querySelector(`[data-cid="${t}"]`)
                  .querySelector(".card__price").innerHTML,
                s = o.querySelector(".cart-item__sum-value").innerHTML;
              r.innerHTML = parseInt(r.innerHTML) - parseInt(e) * parseInt(s);
            }
          }
        }
        function n() {
          if (e.target.closest(".catalog__button")) {
            t(e.target);
          }
          async function t(e) {
            if (!e.classList.contains("_hold")) {
              e.classList.add("_hold");
              const t = "files/json/catalog.json";
              let i = await fetch(t, { method: "GET" });
              if (i.ok) {
                s(await i.json()), e.classList.remove("_hold"), e.remove();
              } else console.log("???????????? ?????????????????? ????????????????.");
            }
          }
          function s(e) {
            const t = document.querySelector(".catalog__items");
            e.catalog.forEach((e) => {
              const s = e.id,
                i = e.url,
                n = e.name,
                r = e.price,
                o = e.colors,
                a = e.images[0];
              console.log(e.images[0]);
              let l = `\n                <div data-cid="${s}" class="catalog__item item">\n                    <a href="${i}" class="item__image">\n                        <img src="/img/card/${a}" alt="???????? ????????????">\n                    </a>\n                    <div class="item__name">${n}</div>\n                    <div class="item__price">${r}</div>\n                 `,
                c = "";
              if (o) {
                let e = '<div class="item__colors">',
                  t = "</div></div>",
                  s = "";
                o.forEach((e) => {
                  s += `<div class="item_color item_color_${e}"></div>`;
                }),
                  (c += e),
                  (c += s),
                  (c += t);
              }
              (l += c), t.insertAdjacentHTML("beforeend", l);
            });
          }
        }
        function r() {
          if (e.target.closest("#payment-billing-different")) {
            document
              .querySelector(".payment__billing-different")
              .classList.add("payment__billing-different_active");
          }
          if (e.target.closest("#payment-billing-same")) {
            document
              .querySelector(".payment__billing-different")
              .classList.remove("payment__billing-different_active");
          }
        }
        function o() {
          function t() {
            document.querySelector(".sub-credit_active") &&
              document
                .querySelector(".sub-credit")
                .classList.remove("sub-credit_active"),
              document.querySelector(".payment__sub-shop_active") &&
                document
                  .querySelector(".payment__sub-shop")
                  .classList.remove("payment__sub-shop_active"),
              document.querySelector(".payment__sub-paypal_active") &&
                document
                  .querySelector(".payment__sub-paypal")
                  .classList.remove("payment__sub-paypal_active");
          }
          e.target.closest("#payment-credit") &&
            (t(),
            document
              .querySelector(".sub-credit")
              .classList.add("sub-credit_active")),
            e.target.closest("#payment-shop") &&
              (t(),
              document
                .querySelector(".payment__sub-shop")
                .classList.add("payment__sub-shop_active")),
            e.target.closest("#payment-paypal") &&
              (t(),
              document
                .querySelector(".payment__sub-paypal")
                .classList.add("payment__sub-paypal_active"));
        }
        function a() {
          u(), p(), m(), f();
        }
        function l() {
          if (e.target.closest(".card__details-content")) {
            document
              .querySelector(".card__details-spoiler")
              .classList.toggle("card__details-spoiler_active"),
              t();
          }
          if (e.target.closest(".card__subsize-content")) {
            document
              .querySelector(".card__subsize-spoiler")
              .classList.toggle("card__subsize-spoiler_active"),
              s();
          }
          if (e.target.closest(".card__shipping-content")) {
            document
              .querySelector(".card__shipping-spoiler")
              .classList.toggle("card__shipping-spoiler_active"),
              i();
          }
          function t() {
            const e = document.querySelector(".card__details-icon-plus"),
              t = document.querySelector(".card__details-icon-minus");
            e.classList.toggle("card__details-icon_active"),
              t.classList.toggle("card__details-icon_active");
          }
          function s() {
            const e = document.querySelector(".card__subsize-icon-plus"),
              t = document.querySelector(".card__subsize-icon-minus");
            e.classList.toggle("card__subsize-icon_active"),
              t.classList.toggle("card__subsize-icon_active");
          }
          function i() {
            const e = document.querySelector(".card__shipping-icon-plus"),
              t = document.querySelector(".card__shipping-icon-minus");
            e.classList.toggle("card__shipping-icon_active"),
              t.classList.toggle("card__shipping-icon_active");
          }
        }
        function c() {
          function t() {
            if (
              e.target.closest("#submenu-color-button") &&
              document.querySelector(
                ".item-submenu__color-list > .item-submenu__item_active"
              )
            ) {
              const e = document.querySelectorAll(
                ".item-submenu__color-list > .item-submenu__item_active"
              );
              document.querySelector(
                ".filter__item_color > .filter__item-text"
              ).textContent = `Color (${e.length})`;
            }
          }
          function s() {
            if (
              e.target.closest("#submenu-size-button") &&
              document.querySelector(
                ".item-submenu__size-list > .item-submenu__item_active"
              )
            ) {
              const e = document.querySelectorAll(
                ".item-submenu__size-list > .item-submenu__item_active"
              );
              document.querySelector(
                ".filter__item_size > .filter__item-text"
              ).textContent = `Size (${e.length})`;
            }
          }
          function i() {
            if (
              e.target.closest("#submenu-browse-button") &&
              document.querySelector(
                ".item-submenu__browse-list > .item-submenu__item_active"
              )
            ) {
              const e = document.querySelector(
                ".item-submenu__browse-list > .item-submenu__item_active"
              );
              (document.querySelector(
                ".filter__item_browse > .filter__item-text"
              ).textContent = `Browse / ${e.textContent}`),
                console.log(e.textContent);
            }
          }
          t(), s(), i();
        }
        function d() {
          if (
            e.target.closest(".item-submenu__color-list > .item-submenu__item")
          ) {
            e.target
              .closest(".item-submenu__item")
              .classList.toggle("item-submenu__item_active");
          }
          if (
            e.target.closest(".item-submenu__size-list > .item-submenu__item")
          ) {
            e.target
              .closest(".item-submenu__item")
              .classList.toggle("item-submenu__item_active");
          }
          if (
            e.target.closest(".item-submenu__browse-list > .item-submenu__item")
          ) {
            e.target.closest(
              ".item-submenu__browse-list > .item-submenu__item_active"
            ) ||
              (document.querySelector(
                ".item-submenu__browse-list > .item-submenu__item_active"
              ) &&
                document
                  .querySelector(
                    ".item-submenu__browse-list > .item-submenu__item_active"
                  )
                  .classList.remove("item-submenu__item_active"));
            e.target
              .closest(".item-submenu__item")
              .classList.toggle("item-submenu__item_active");
          }
          function t() {
            document
              .querySelectorAll(".item-submenu__item_active")
              .forEach(function (e) {
                e.classList.remove("item-submenu__item_active");
              });
          }
          e.target.closest(".item-submenu__clear") && t();
        }
        function u() {
          if (e.target.closest(".filter__item_color")) {
            const e = document.querySelector("#color-submenu");
            e.classList.contains("item-submenu_active") || h(),
              w(),
              e.classList.toggle("item-submenu_active"),
              v();
          }
        }
        function p() {
          if (e.target.closest(".filter__item_size")) {
            const e = document.querySelector("#size-submenu");
            e.classList.contains("item-submenu_active") || h(),
              w(),
              e.classList.toggle("item-submenu_active"),
              g();
          }
        }
        function m() {
          if (e.target.closest(".filter__item_browse")) {
            const e = document.querySelector("#browse-submenu");
            e.classList.contains("item-submenu_active") || h(),
              w(),
              e.classList.toggle("item-submenu_active"),
              _();
          }
        }
        function f() {
          if (e.target.closest(".filter__item_sort")) {
            const e = document.querySelector(".filter__sort-submenu");
            e.classList.contains("filter__sort-submenu_active") || h(),
              e.classList.toggle("filter__sort-submenu_active"),
              b();
          }
        }
        function h() {
          if (
            document.querySelector(".item-submenu_active") ||
            document.querySelector(".filter__sort-submenu_active")
          ) {
            if (document.querySelector(".item-submenu_active")) {
              document
                .querySelector(".item-submenu_active")
                .classList.remove("item-submenu_active"),
                y(),
                S();
            }
            if (document.querySelector(".filter__sort-submenu_active")) {
              document
                .querySelector(".filter__sort-submenu_active")
                .classList.remove("filter__sort-submenu_active"),
                y();
            }
          }
        }
        function v() {
          const e = document.querySelector(
              ".filter__item_color .filter__item-plus"
            ),
            t = document.querySelector(
              ".filter__item_color .filter__item-minus"
            );
          e.classList.toggle("filter__item-icon_active"),
            t.classList.toggle("filter__item-icon_active");
        }
        function g() {
          const e = document.querySelector(
              ".filter__item_size .filter__item-plus"
            ),
            t = document.querySelector(
              ".filter__item_size .filter__item-minus"
            );
          e.classList.toggle("filter__item-icon_active"),
            t.classList.toggle("filter__item-icon_active");
        }
        function _() {
          const e = document.querySelector(
              ".filter__item_browse .filter__item-plus"
            ),
            t = document.querySelector(
              ".filter__item_browse .filter__item-minus"
            );
          e.classList.toggle("filter__item-icon_active"),
            t.classList.toggle("filter__item-icon_active");
        }
        function b() {
          const e = document.querySelector(
              ".filter__item_sort .filter__item-plus"
            ),
            t = document.querySelector(
              ".filter__item_sort .filter__item-minus"
            );
          e.classList.toggle("filter__item-icon_active"),
            t.classList.toggle("filter__item-icon_active");
        }
        function w() {
          document.querySelector(".submenu").classList.toggle("submenu_active");
        }
        function S() {
          document.querySelector(".submenu").classList.remove("submenu_active");
        }
        function y() {
          if (
            document.querySelector(
              ".filter__item_color .filter__item-icon_active"
            )
          ) {
            e(
              document.querySelector(".filter__item_color .filter__item-plus"),
              document.querySelector(".filter__item_color .filter__item-minus")
            );
          }
          if (
            document.querySelector(
              ".filter__item_size .filter__item-icon_active"
            )
          ) {
            e(
              document.querySelector(".filter__item_size .filter__item-plus"),
              document.querySelector(".filter__item_size .filter__item-minus")
            );
          }
          if (
            document.querySelector(
              ".filter__item_browse .filter__item-icon_active"
            )
          ) {
            e(
              document.querySelector(".filter__item_browse .filter__item-plus"),
              document.querySelector(".filter__item_browse .filter__item-minus")
            );
          }
          if (
            document.querySelector(
              ".filter__item_sort .filter__item-icon_active"
            )
          ) {
            e(
              document.querySelector(".filter__item_sort .filter__item-plus"),
              document.querySelector(".filter__item_sort .filter__item-minus")
            );
          }
          function e(e, t) {
            e.classList.add("filter__item-icon_active"),
              t.classList.remove("filter__item-icon_active");
          }
        }
        function T() {
          const t = document.querySelector(".cart");
          t.classList.contains("cart_active") &&
            (e.target.closest(".cart") ||
              (t.classList.remove("cart_active"),
              document
                .querySelector(".blackout")
                .classList.remove("blackout_active"),
              document.querySelector("html").classList.remove("lock"))),
            e.target.closest(".cart-header") &&
              (t.classList.add("cart_active"),
              document
                .querySelector(".blackout")
                .classList.toggle("blackout_active"),
              document.querySelector("html").classList.toggle("lock")),
            e.target.closest(".cart__close") &&
              (t.classList.remove("cart_active"),
              document
                .querySelector(".blackout")
                .classList.toggle("blackout_active"),
              document.querySelector("html").classList.toggle("lock"));
        }
        function E() {
          const t = document.querySelectorAll(".search__ready"),
            s = document.querySelector(".darker");
          t.forEach(function (t) {
            e.target.closest(".search__ready") ||
              (t.classList.remove("search__ready_active"),
              window.innerWidth >= 767.98 &&
                s.classList.remove("darker_active"));
          }),
            t.forEach(function (t) {
              e.target.closest(".search__body") &&
                (t.classList.add("search__ready_active"),
                window.innerWidth >= 767.98 &&
                  s.classList.add("darker_active"));
            });
        }
        function C() {
          const t = document.querySelector("#checkout-menu-1"),
            s = document.querySelector("#checkout-menu-2"),
            i = document.querySelector("#checkout-menu-3"),
            n = document.querySelector("#steps-info"),
            r = document.querySelector("#steps-ship"),
            o = document.querySelector("#steps-payment"),
            a = document.querySelector(".ship__item-method");
          e.target.closest(".info-checkout__button") &&
            (t.classList.remove("checkout__information_active"),
            s.classList.add("checkout__ship_active"),
            document
              .querySelector(".ship__method")
              .classList.add("ship__method_active"),
            n.classList.remove("steps__item_active"),
            r.classList.add("steps__item_active")),
            e.target.closest(".ship__button") &&
              (document
                .querySelector(".ship__method")
                .classList.remove("ship__method_active"),
              i.classList.add("checkout__payment_active"),
              r.classList.remove("steps__item_active"),
              o.classList.add("steps__item_active"),
              a.classList.add("ship__item-method_active")),
            e.target.closest(".ship__return") &&
              (t.classList.add("checkout__information_active"),
              s.classList.remove("checkout__ship_active"),
              n.classList.add("steps__item_active"),
              r.classList.remove("steps__item_active")),
            e.target.closest(".payment__return") &&
              (document
                .querySelector(".ship__method")
                .classList.add("ship__method_active"),
              s.classList.add("checkout__ship_active"),
              i.classList.remove("checkout__payment_active"),
              r.classList.add("steps__item_active"),
              o.classList.remove("steps__item_active"),
              a.classList.remove("ship__item-method_active"));
        }
      })(e);
    }),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
    window.addEventListener("load", function () {
      setTimeout(function () {
        document.documentElement.classList.add("loaded");
      }, 0);
    }),
    document.querySelector(".icon-menu") &&
      document.addEventListener("click", function (i) {
        e &&
          i.target.closest(".icon-menu") &&
          (((e = 500) => {
            document.documentElement.classList.contains("lock") ? t(e) : s(e);
          })(),
          document.documentElement.classList.toggle("menu-open"));
      });
})();
