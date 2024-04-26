(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3699], {
        45198: function(e, t, i) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/explore/auctions", function() {
                return i(80354)
            }])
        },
        20753: function(e, t, i) {
            "use strict";
            var s = i(85893),
                a = i(34965),
                l = i(86249),
                r = i(45012);
            i(67294);
            var o = i(9473),
                n = i(24715);
            t.Z = () => {
                let {
                    walletDetalis: {
                        chainId: e
                    }
                } = (0, o.v9)(r.n2), t = (0, o.I0)(), {
                    switchNetwork: i
                } = (0, l.a)(), c = async e => {
                    try {
                        "All" !== e && await i(e), t((0, r.o0)(e))
                    } catch (e) {
                        console.log("err", e), n.FN.error("user reject transaction")
                    }
                };
                return (0, s.jsx)(s.Fragment, {
                    children: a.Km.map((t, i) => (0, s.jsxs)("div", {
                        className: "radio-filter-block",
                        children: [(0, s.jsx)("input", {
                            type: "radio",
                            id: t.name,
                            name: t.name,
                            checked: t.chainId === e,
                            onChange: () => c(t.chainId)
                        }), (0, s.jsxs)("label", {
                            for: t.name,
                            children: [(0, s.jsx)("img", {
                                src: t.logo,
                                alt: "check-icon"
                            }), (0, s.jsx)("h4", {
                                children: t.name
                            })]
                        })]
                    }, i))
                })
            }
        },
        88665: function(e, t, i) {
            "use strict";
            i.d(t, {
                Z: function() {
                    return r
                }
            });
            var s = i(85893),
                a = i(9008),
                l = i.n(a);

            function r(e) {
                let {
                    title: t = "TesseractX"
                } = e;
                return (0, s.jsx)(l(), {
                    children: (0, s.jsx)("title", {
                        children: "".concat(t, " | ").concat("TesseractX")
                    })
                })
            }
            i(67294)
        },
        54947: function(e, t) {
            "use strict";
            t.Z = e => {
                let {
                    page: t,
                    data: i,
                    count: s
                } = e;
                return "Showing ".concat(0, "–").concat(null == i ? void 0 : i.length, " of ").concat(s, " results")
            }
        },
        80354: function(e, t, i) {
            "use strict";
            let s, a;
            i.r(t), i.d(t, {
                default: function() {
                    return ew
                }
            });
            var l, r = i(85893);
            i(41664);
            var o = i(33353),
                n = i(52448),
                c = i(33275),
                d = i(97673),
                m = i(27506),
                p = i(78857),
                u = i(17258),
                h = i(54947),
                x = i(27098),
                f = i(34965),
                g = i(24715),
                v = i(67294),
                j = i(59343),
                b = i(11163),
                y = i(24486),
                N = e => {
                    let {
                        item: t,
                        handleLike: i = () => {},
                        handleOpen: s = () => {}
                    } = e, a = (0, b.useRouter)();
                    return (0, r.jsx)("div", {
                        className: "common-product-block-inner",
                        children: (0, r.jsxs)("div", {
                            className: "common-product-block-inner-width",
                            children: [(0, r.jsxs)("div", {
                                className: "top-block-product",
                                children: [(0, r.jsx)("h4", {
                                    children: null == t ? void 0 : t.name
                                }), (0, r.jsx)("div", {
                                    onClick: () => i(null == t ? void 0 : t._id),
                                    children: (0, r.jsx)(x.mN, {
                                        item: t
                                    })
                                })]
                            }), (0, r.jsx)("div", {
                                className: "product-img-time pointer",
                                onClick: () => {
                                    a.push({
                                        pathname: y.v.item.details,
                                        query: { ...(0, g.qK)(t)
                                        }
                                    })
                                },
                                children: (0, r.jsx)(j.Z, {
                                    src: null == t ? void 0 : t.image,
                                    alt: "product-img"
                                })
                            }), (0, r.jsxs)("div", {
                                className: "product-details-profile",
                                children: [(0, r.jsxs)("div", {
                                    className: "product-profile",
                                    children: [(0, r.jsx)("img", {
                                        src: (null == t ? void 0 : t.collectionLogo) || "/images/profile-img-product.png",
                                        alt: "product-img",
                                        className: "pointer",
                                        onClick: () => {
                                            a.push(y.v.explore.collection(null == t ? void 0 : t.collectionAddress))
                                        }
                                    }), (0, r.jsxs)("div", {
                                        className: "product-profile-details",
                                        children: [(0, r.jsx)("h5", {
                                            className: "diff-padding-block",
                                            children: null == t ? void 0 : t.collectionName
                                        }), (0, r.jsx)("p", {
                                            children: "Collection"
                                        })]
                                    })]
                                }), (0, r.jsxs)("div", {
                                    className: "bid-common",
                                    children: [(0, r.jsx)("p", {
                                        children: "Current bid"
                                    }), (0, r.jsxs)("h5", {
                                        children: [(0, r.jsx)("img", {
                                            src: f.c6[null == t ? void 0 : t.chainId],
                                            alt: "ethe-img"
                                        }), (0, r.jsxs)("span", {
                                            children: [(0, g.IA)((null == t ? void 0 : t.latestBid) || 0, 4), " ", null == t ? void 0 : t.symbol]
                                        })]
                                    })]
                                })]
                            }), (0, r.jsx)("div", {
                                className: "btn-product diff-padding",
                                children: (0, r.jsxs)("button", {
                                    onClick: () => s(t),
                                    children: [(0, r.jsx)("svg", {
                                        width: "15",
                                        height: "15",
                                        viewBox: "0 0 15 15",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: (0, r.jsx)("path", {
                                            "fill-rule": "evenodd",
                                            "clip-rule": "evenodd",
                                            d: "M10.407 4.27218H10.5417C12.3128 4.27218 13.7501 5.58547 13.7501 7.19646V10.4184C13.7501 12.0294 12.3128 13.3369 10.5417 13.3369H4.45854C2.68749 13.3369 1.25012 12.0294 1.25012 10.4184V7.19646C1.25012 5.58547 2.68749 4.27218 4.45854 4.27218H4.5933C4.60613 3.57175 4.90772 2.91802 5.45315 2.42772C6.005 1.93158 6.71085 1.6806 7.50654 1.66309C9.09792 1.66309 10.3877 2.83046 10.407 4.27218ZM6.12713 3.05271C5.76779 3.37957 5.56886 3.8115 5.55603 4.27262H9.44464C9.42538 3.31537 8.56553 2.53906 7.50675 2.53906C7.01265 2.53906 6.49931 2.72001 6.12713 3.05271ZM9.93854 6.51941C10.208 6.51941 10.4198 6.32095 10.4198 6.08164V5.40456C10.4198 5.16525 10.208 4.9668 9.93854 4.9668C9.67545 4.9668 9.45728 5.16525 9.45728 5.40456V6.08164C9.45728 6.32095 9.67545 6.51941 9.93854 6.51941ZM5.48551 6.08185C5.48551 6.32117 5.27376 6.51962 5.00425 6.51962C4.74116 6.51962 4.52299 6.32117 4.52299 6.08185V5.40478C4.52299 5.16546 4.74116 4.96701 5.00425 4.96701C5.27376 4.96701 5.48551 5.16546 5.48551 5.40478V6.08185Z",
                                            fill: "#565660"
                                        })
                                    }), (0, r.jsx)("span", {
                                        children: "Place Bid"
                                    })]
                                })
                            })]
                        })
                    })
                },
                k = i(20753),
                w = i(78063);
            i(14425);
            var C = i(67364),
                Z = i(93390),
                E = i(88665),
                B = i(86249);
            let A = {
                    data: ""
                },
                I = e => "object" == typeof window ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), {
                    innerHTML: " ",
                    id: "_goober"
                })).firstChild : e || A,
                $ = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
                T = /\/\*[^]*?\*\/|  +/g,
                _ = /\n+/g,
                F = (e, t) => {
                    let i = "",
                        s = "",
                        a = "";
                    for (let l in e) {
                        let r = e[l];
                        "@" == l[0] ? "i" == l[1] ? i = l + " " + r + ";" : s += "f" == l[1] ? F(r, l) : l + "{" + F(r, "k" == l[1] ? "" : t) + "}" : "object" == typeof r ? s += F(r, t ? t.replace(/([^,])+/g, e => l.replace(/(^:.*)|([^,])+/g, t => /&/.test(t) ? t.replace(/&/g, e) : e ? e + " " + t : t)) : l) : null != r && (l = /^--/.test(l) ? l : l.replace(/[A-Z]/g, "-$&").toLowerCase(), a += F.p ? F.p(l, r) : l + ":" + r + ";")
                    }
                    return i + (t && a ? t + "{" + a + "}" : a) + s
                },
                P = {},
                M = e => {
                    if ("object" == typeof e) {
                        let t = "";
                        for (let i in e) t += i + M(e[i]);
                        return t
                    }
                    return e
                },
                z = (e, t, i, s, a) => {
                    var l;
                    let r = M(e),
                        o = P[r] || (P[r] = (e => {
                            let t = 0,
                                i = 11;
                            for (; t < e.length;) i = 101 * i + e.charCodeAt(t++) >>> 0;
                            return "go" + i
                        })(r));
                    if (!P[o]) {
                        let t = r !== e ? e : (e => {
                            let t, i, s = [{}];
                            for (; t = $.exec(e.replace(T, ""));) t[4] ? s.shift() : t[3] ? (i = t[3].replace(_, " ").trim(), s.unshift(s[0][i] = s[0][i] || {})) : s[0][t[1]] = t[2].replace(_, " ").trim();
                            return s[0]
                        })(e);
                        P[o] = F(a ? {
                            ["@keyframes " + o]: t
                        } : t, i ? "" : "." + o)
                    }
                    let n = i && P.g ? P.g : null;
                    return i && (P.g = P[o]), l = P[o], n ? t.data = t.data.replace(n, l) : -1 === t.data.indexOf(l) && (t.data = s ? l + t.data : t.data + l), o
                },
                L = (e, t, i) => e.reduce((e, s, a) => {
                    let l = t[a];
                    if (l && l.call) {
                        let e = l(i),
                            t = e && e.props && e.props.className || /^go/.test(e) && e;
                        l = t ? "." + t : e && "object" == typeof e ? e.props ? "" : F(e, "") : !1 === e ? "" : e
                    }
                    return e + s + (null == l ? "" : l)
                }, "");

            function O(e) {
                let t = this || {},
                    i = e.call ? e(t.p) : e;
                return z(i.unshift ? i.raw ? L(i, [].slice.call(arguments, 1), t.p) : i.reduce((e, i) => Object.assign(e, i && i.call ? i(t.p) : i), {}) : i, I(t.target), t.g, t.o, t.k)
            }
            O.bind({
                g: 1
            });
            let X, H, V, K = O.bind({
                k: 1
            });

            function S(e, t) {
                let i = this || {};
                return function() {
                    let s = arguments;

                    function a(l, r) {
                        let o = Object.assign({}, l),
                            n = o.className || a.className;
                        i.p = Object.assign({
                            theme: H && H()
                        }, o), i.o = / *go\d+/.test(n), o.className = O.apply(i, s) + (n ? " " + n : ""), t && (o.ref = r);
                        let c = e;
                        return e[0] && (c = o.as || e, delete o.as), V && c[0] && V(o), X(c, o)
                    }
                    return t ? t(a) : a
                }
            }
            var q = e => "function" == typeof e,
                D = (e, t) => q(e) ? e(t) : e,
                R = (s = 0, () => (++s).toString()),
                U = () => {
                    if (void 0 === a && "u" > typeof window) {
                        let e = matchMedia("(prefers-reduced-motion: reduce)");
                        a = !e || e.matches
                    }
                    return a
                },
                Y = new Map,
                G = e => {
                    if (Y.has(e)) return;
                    let t = setTimeout(() => {
                        Y.delete(e), et({
                            type: 4,
                            toastId: e
                        })
                    }, 1e3);
                    Y.set(e, t)
                },
                J = e => {
                    let t = Y.get(e);
                    t && clearTimeout(t)
                },
                Q = (e, t) => {
                    switch (t.type) {
                        case 0:
                            return { ...e,
                                toasts: [t.toast, ...e.toasts].slice(0, 20)
                            };
                        case 1:
                            return t.toast.id && J(t.toast.id), { ...e,
                                toasts: e.toasts.map(e => e.id === t.toast.id ? { ...e,
                                    ...t.toast
                                } : e)
                            };
                        case 2:
                            let {
                                toast: i
                            } = t;
                            return e.toasts.find(e => e.id === i.id) ? Q(e, {
                                type: 1,
                                toast: i
                            }) : Q(e, {
                                type: 0,
                                toast: i
                            });
                        case 3:
                            let {
                                toastId: s
                            } = t;
                            return s ? G(s) : e.toasts.forEach(e => {
                                G(e.id)
                            }), { ...e,
                                toasts: e.toasts.map(e => e.id === s || void 0 === s ? { ...e,
                                    visible: !1
                                } : e)
                            };
                        case 4:
                            return void 0 === t.toastId ? { ...e,
                                toasts: []
                            } : { ...e,
                                toasts: e.toasts.filter(e => e.id !== t.toastId)
                            };
                        case 5:
                            return { ...e,
                                pausedAt: t.time
                            };
                        case 6:
                            let a = t.time - (e.pausedAt || 0);
                            return { ...e,
                                pausedAt: void 0,
                                toasts: e.toasts.map(e => ({ ...e,
                                    pauseDuration: e.pauseDuration + a
                                }))
                            }
                    }
                },
                W = [],
                ee = {
                    toasts: [],
                    pausedAt: void 0
                },
                et = e => {
                    ee = Q(ee, e), W.forEach(e => {
                        e(ee)
                    })
                },
                ei = (e, t = "blank", i) => ({
                    createdAt: Date.now(),
                    visible: !0,
                    type: t,
                    ariaProps: {
                        role: "status",
                        "aria-live": "polite"
                    },
                    message: e,
                    pauseDuration: 0,
                    ...i,
                    id: (null == i ? void 0 : i.id) || R()
                }),
                es = e => (t, i) => {
                    let s = ei(t, e, i);
                    return et({
                        type: 2,
                        toast: s
                    }), s.id
                },
                ea = (e, t) => es("blank")(e, t);
            ea.error = es("error"), ea.success = es("success"), ea.loading = es("loading"), ea.custom = es("custom"), ea.dismiss = e => {
                et({
                    type: 3,
                    toastId: e
                })
            }, ea.remove = e => et({
                type: 4,
                toastId: e
            }), ea.promise = (e, t, i) => {
                let s = ea.loading(t.loading, { ...i,
                    ...null == i ? void 0 : i.loading
                });
                return e.then(e => (ea.success(D(t.success, e), {
                    id: s,
                    ...i,
                    ...null == i ? void 0 : i.success
                }), e)).catch(e => {
                    ea.error(D(t.error, e), {
                        id: s,
                        ...i,
                        ...null == i ? void 0 : i.error
                    })
                }), e
            };
            var el = K `
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
                er = K `
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
                eo = K `
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
                en = S("div")
            `
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${el} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${er} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${eo} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`, ec = K `
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, ed = S("div")
            `
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${ec} 1s linear infinite;
`, em = K `
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`, ep = K `
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`, eu = S("div")
            `
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${em} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ep} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`, eh = S("div")
            `
  position: absolute;
`, ex = S("div")
            `
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, ef = K `
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`, eg = S("div")
            `
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ef} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, ev = ({
                toast: e
            }) => {
                let {
                    icon: t,
                    type: i,
                    iconTheme: s
                } = e;
                return void 0 !== t ? "string" == typeof t ? v.createElement(eg, null, t) : t : "blank" === i ? null : v.createElement(ex, null, v.createElement(ed, { ...s
                }), "loading" !== i && v.createElement(eh, null, "error" === i ? v.createElement(en, { ...s
                }) : v.createElement(eu, { ...s
                })))
            }, ej = e => `
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, eb = e => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`, ey = S("div")
            `
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`, eN = S("div")
            `
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, ek = (e, t) => {
                let i = e.includes("top") ? 1 : -1,
                    [s, a] = U() ? ["0%{opacity:0;} 100%{opacity:1;}", "0%{opacity:1;} 100%{opacity:0;}"] : [ej(i), eb(i)];
                return {
                    animation: t ? `${K(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${K(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`
                }
            };
            v.memo(({
                toast: e,
                position: t,
                style: i,
                children: s
            }) => {
                let a = e.height ? ek(e.position || t || "top-center", e.visible) : {
                        opacity: 0
                    },
                    l = v.createElement(ev, {
                        toast: e
                    }),
                    r = v.createElement(eN, { ...e.ariaProps
                    }, D(e.message, e));
                return v.createElement(ey, {
                    className: e.className,
                    style: { ...a,
                        ...i,
                        ...e.style
                    }
                }, "function" == typeof s ? s({
                    icon: l,
                    message: r
                }) : v.createElement(v.Fragment, null, l, r))
            }), l = v.createElement, F.p = void 0, X = l, H = void 0, V = void 0, O `
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;
            var ew = () => {
                var e;
                let {
                    loading: t,
                    categorys: i,
                    priceArray: s,
                    page: a,
                    items: l,
                    count: f,
                    hasMore: A,
                    topAuction: I,
                    filterOptions: $,
                    orderOptions: T,
                    priceFilter: _,
                    setPriceFilter: F,
                    orderChange: P,
                    handleCategorySelect: M,
                    handlePageChange: z,
                    handleSearch: L,
                    typeChange: O,
                    handlePriceChange: X,
                    getData: H
                } = (0, u.Xk)(), {
                    account: V,
                    chainId: K
                } = (0, B.a)(), {
                    handleLike: S
                } = (0, w.cY)(), {
                    push: q
                } = (0, b.useRouter)(), [D, R] = (0, v.useState)();
                console.log("topAuction", I);
                let U = e => {
                        q({
                            pathname: y.v.item.details,
                            query: {
                                itemCollection: null == e ? void 0 : e.itemCollection,
                                tokenId: null == e ? void 0 : e.tokenId
                            }
                        })
                    },
                    Y = e => {
                        let t = (0, g.q0)(V, K, null == e ? void 0 : e.chainId);
                        if (!t.status) return g.FN.error(t.message);
                        R(e)
                    },
                    G = e => {
                        q({
                            pathname: y.v.user.detail(e)
                        })
                    };
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(E.Z, {
                        title: "Auctions"
                    }), (0, r.jsxs)(c.Fd, {
                        className: "no-container-padding dark-mode-body",
                        children: [(0, r.jsx)(Z.Z, {
                            show: !!D,
                            handleClose: () => {
                                R()
                            },
                            item: D,
                            refetchBids: !1,
                            refetch: () => H(!0),
                            auctionCreator: null == D ? void 0 : D.lister
                        }), (0, r.jsx)("div", {
                            className: "auction-top-block-main",
                            children: (0, r.jsx)(o.Z, {
                                children: (0, r.jsxs)("div", {
                                    className: "auction-top-block",
                                    children: [(0, r.jsxs)("div", {
                                        className: "auction-top-block-left",
                                        children: [(0, r.jsx)("div", {
                                            className: "auction-graphics",
                                            children: (0, r.jsx)("img", {
                                                src: "../../images/auction-grphics.png",
                                                alt: "img"
                                            })
                                        }), (0, r.jsx)("div", {
                                            className: "auction-top-block-left-inner",
                                            children: (0, r.jsxs)("h2", {
                                                children: ["Today’s Top ", (0, r.jsx)("br", {}), " Auction"]
                                            })
                                        })]
                                    }), I ? (0, r.jsxs)("div", {
                                        className: "auction-top-block-right",
                                        children: [(0, r.jsx)("div", {
                                            className: "auction-graphics",
                                            children: (0, r.jsx)("img", {
                                                src: "../../images/img-shape-auction.png",
                                                alt: "img"
                                            })
                                        }), (0, r.jsxs)("div", {
                                            className: "auction-top-block-right-inner",
                                            children: [(0, r.jsxs)("div", {
                                                className: "auction-top-block-frame",
                                                children: [(0, r.jsx)(j.Z, {
                                                    src: null == I ? void 0 : I.image,
                                                    alt: "",
                                                    classProp: "rounded-4"
                                                }), (0, r.jsxs)("div", {
                                                    className: "auction-bid",
                                                    children: [(0, r.jsx)("p", {
                                                        children: "Current bid"
                                                    }), (0, r.jsxs)("h4", {
                                                        children: [(null == I ? void 0 : I.latestBid) || 0, " ", null == I ? void 0 : I.symbol]
                                                    })]
                                                }), (null == I ? void 0 : I.name) && (0, r.jsxs)("div", {
                                                    className: "bid-profile-block",
                                                    children: [(0, r.jsx)("img", {
                                                        src: (null == I ? void 0 : I.creatorLogo) || "../../images/profile-img-product.png",
                                                        alt: "product-img"
                                                    }), (0, r.jsxs)("div", {
                                                        className: "bid-profile-block-text",
                                                        children: [(0, r.jsxs)("h3", {
                                                            className: "pointer",
                                                            onClick: () => U(I),
                                                            children: ["“", (null == I ? void 0 : I.name) || " ", "”"]
                                                        }), (0, r.jsx)("p", {
                                                            className: "pointer",
                                                            onClick: () => G(null == I ? void 0 : I.creatorAddress),
                                                            children: (null == I ? void 0 : null === (e = I.creatorUser) || void 0 === e ? void 0 : e.name) && "@".concat(I.creatorName)
                                                        })]
                                                    })]
                                                })]
                                            }), (0, r.jsx)("div", {
                                                className: "time-line-block-inner",
                                                children: (null == I ? void 0 : I.endTime) && (0, r.jsx)(C.Z, {
                                                    date: null == I ? void 0 : I.endTime,
                                                    useFor: "auction"
                                                })
                                            }), (0, r.jsx)("div", {
                                                className: "d-flex justify-content-center",
                                                children: (0, r.jsx)(d.Button, {
                                                    isBorderBtn: !0,
                                                    className: "w-50",
                                                    onClick: () => Y(I),
                                                    children: "Place Bid"
                                                })
                                            })]
                                        })]
                                    }) : ""]
                                })
                            })
                        }), (0, r.jsx)("div", {
                            className: "graphics-inner-diff",
                            children: (0, r.jsx)("img", {
                                src: "../../images/shape-graphics-auction.png",
                                alt: "graphics-img"
                            })
                        }), (0, r.jsx)("div", {
                            className: "graphics-inner-shape-two",
                            children: (0, r.jsx)("img", {
                                src: "../../images/graphics-block-inner-2.png",
                                alt: "graphics-img"
                            })
                        }), (0, r.jsx)("div", {
                            className: "graphics-inner-shape-three",
                            children: (0, r.jsx)("img", {
                                src: "../../images/graphics-block-inner-3.png",
                                alt: "graphics-img"
                            })
                        }), (0, r.jsxs)("div", {
                            className: "explore-block-main",
                            children: [(0, r.jsx)("div", {
                                className: "common-title-page text-center-space",
                                children: (0, r.jsx)("h1", {
                                    children: "Auctions"
                                })
                            }), (0, r.jsxs)("div", {
                                className: "filter-block-data-block",
                                children: [(0, r.jsx)("div", {
                                    className: "filter-block-data-block-left",
                                    children: (0, r.jsx)("div", {
                                        className: "filter-block-data-block-left-inner",
                                        children: (0, r.jsxs)(p.Z, {
                                            defaultActiveKey: "0",
                                            alwaysOpen: !0,
                                            children: [(0, r.jsxs)(p.Z.Item, {
                                                eventKey: "0",
                                                children: [(0, r.jsx)(p.Z.Header, {
                                                    children: "Search"
                                                }), (0, r.jsx)(p.Z.Body, {
                                                    children: (0, r.jsx)("div", {
                                                        className: "search-form-block",
                                                        children: (0, r.jsxs)("div", {
                                                            className: "search-box-form",
                                                            children: [(0, r.jsx)("input", {
                                                                type: "text",
                                                                placeholder: "Search",
                                                                name: "Search",
                                                                onChange: L
                                                            }), (0, r.jsx)("button", {
                                                                children: (0, r.jsx)("svg", {
                                                                    width: "20",
                                                                    height: "20",
                                                                    viewBox: "0 0 20 20",
                                                                    fill: "none",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    children: (0, r.jsx)("path", {
                                                                        d: "M18.1249 17.2411L13.4049 12.5211C14.5391 11.1595 15.1047 9.41291 14.9841 7.64483C14.8634 5.87675 14.0657 4.22326 12.7569 3.02834C11.4482 1.83341 9.7291 1.18906 7.95736 1.22932C6.18562 1.26958 4.49761 1.99134 3.24448 3.24448C1.99134 4.49761 1.26958 6.18562 1.22932 7.95736C1.18906 9.7291 1.83341 11.4482 3.02834 12.7569C4.22326 14.0657 5.87675 14.8634 7.64483 14.9841C9.41291 15.1047 11.1595 14.5391 12.5211 13.4049L17.2411 18.1249L18.1249 17.2411ZM2.49989 8.12489C2.49989 7.01237 2.82979 5.92483 3.44787 4.99981C4.06596 4.07478 4.94446 3.35381 5.97229 2.92807C7.00013 2.50232 8.13113 2.39093 9.22227 2.60797C10.3134 2.82501 11.3157 3.36074 12.1024 4.14741C12.889 4.93408 13.4248 5.93636 13.6418 7.02751C13.8588 8.11865 13.7475 9.24965 13.3217 10.2775C12.896 11.3053 12.175 12.1838 11.25 12.8019C10.3249 13.42 9.23741 13.7499 8.12489 13.7499C6.63355 13.7482 5.20377 13.1551 4.14924 12.1005C3.09471 11.046 2.50154 9.61622 2.49989 8.12489Z",
                                                                        fill: "#9E9E9E"
                                                                    })
                                                                })
                                                            })]
                                                        })
                                                    })
                                                })]
                                            }), (0, r.jsxs)(p.Z.Item, {
                                                eventKey: "3",
                                                children: [(0, r.jsx)(p.Z.Header, {
                                                    children: "Type"
                                                }), (0, r.jsx)(p.Z.Body, {
                                                    children: (0, r.jsx)("div", {
                                                        className: "checkbox-block-custom-filter",
                                                        children: null == i ? void 0 : i.map(e => (0, r.jsxs)("div", {
                                                            className: "checkbox-filter-block",
                                                            children: [(0, r.jsx)("input", {
                                                                type: "checkbox",
                                                                id: null == e ? void 0 : e.value,
                                                                value: null == e ? void 0 : e.value,
                                                                name: null == e ? void 0 : e.value,
                                                                onChange: M
                                                            }), (0, r.jsxs)("label", {
                                                                for: null == e ? void 0 : e.value,
                                                                children: [(0, r.jsx)("span", {
                                                                    children: (0, r.jsx)("img", {
                                                                        src: "../../images/check-icon-block.svg",
                                                                        alt: "check-icon"
                                                                    })
                                                                }), (0, r.jsx)("h4", {
                                                                    children: null == e ? void 0 : e.label
                                                                })]
                                                            })]
                                                        }, null == e ? void 0 : e.value))
                                                    })
                                                })]
                                            }), (0, r.jsxs)(p.Z.Item, {
                                                eventKey: "4",
                                                children: [(0, r.jsx)("h5", {
                                                    className: "fw-bold",
                                                    children: "Price"
                                                }), (null == s ? void 0 : s.length) > 1 && (0, r.jsxs)(r.Fragment, {
                                                    children: [(0, r.jsx)("div", {
                                                        className: "d-flex mb-1",
                                                        children: (0, r.jsx)("div", {
                                                            className: "d-flex w-100",
                                                            children: (0, r.jsx)(x.b5, {
                                                                barMargin: 1,
                                                                data: [...s],
                                                                getBoundries: e => {
                                                                    var t, i;
                                                                    F([null === (t = s.find(t => t.value === (null == e ? void 0 : e.selectionMin))) || void 0 === t ? void 0 : t.price, null === (i = s.find(t => t.value === (null == e ? void 0 : e.selectionMax))) || void 0 === i ? void 0 : i.price])
                                                                }
                                                            })
                                                        })
                                                    }), (0, r.jsxs)("div", {
                                                        className: "d-flex justify-content-around",
                                                        children: [(0, r.jsx)(d.Button, {
                                                            onClick: () => {
                                                                X([])
                                                            },
                                                            className: "mt-2",
                                                            style: {
                                                                padding: "8px 12px",
                                                                width: "40%"
                                                            },
                                                            children: "Reset"
                                                        }), (0, r.jsx)(d.Button, {
                                                            onClick: () => {
                                                                X(_)
                                                            },
                                                            className: "mt-2",
                                                            style: {
                                                                padding: "8px 12px",
                                                                width: "40%"
                                                            },
                                                            children: "Apply"
                                                        })]
                                                    })]
                                                })]
                                            }), (0, r.jsxs)(p.Z.Item, {
                                                eventKey: "5",
                                                children: [(0, r.jsx)(p.Z.Header, {
                                                    children: "Chains"
                                                }), (0, r.jsx)(p.Z.Body, {
                                                    children: (0, r.jsx)("div", {
                                                        className: "radio-last",
                                                        children: (0, r.jsx)(k.Z, {})
                                                    })
                                                })]
                                            })]
                                        })
                                    })
                                }), (0, r.jsxs)("div", {
                                    className: "filter-block-data-block-right",
                                    children: [(0, r.jsxs)("div", {
                                        className: "top-showing-result-block",
                                        children: [(0, r.jsx)("p", {
                                            children: (0, r.jsx)(h.Z, {
                                                page: a,
                                                data: l,
                                                count: f
                                            })
                                        }), (0, r.jsxs)("div", {
                                            className: "select-block-explore",
                                            children: [(0, r.jsx)("div", {
                                                className: "form-group",
                                                children: (0, r.jsx)(m.ZP, {
                                                    name: "filter1",
                                                    options: $,
                                                    className: "TX-select2-wrapper",
                                                    classNamePrefix: "TX-fix-select",
                                                    onChange: O,
                                                    defaultValue: $[0]
                                                })
                                            }), (0, r.jsx)("div", {
                                                className: "form-group",
                                                children: (0, r.jsx)(m.ZP, {
                                                    name: "filter2",
                                                    options: T,
                                                    className: "TX-select2-wrapper",
                                                    classNamePrefix: "TX-fix-select",
                                                    onChange: P,
                                                    defaultValue: T[0]
                                                })
                                            })]
                                        })]
                                    }), (0, r.jsxs)(d.CommonProductBLock, {
                                        children: [t && 1 == a ? (0, r.jsx)(r.Fragment, {
                                            children: (0, r.jsx)("div", {
                                                className: "d-flex justify-content-center vh-100 align-items-center",
                                                children: (0, r.jsx)(n.Z, {
                                                    animation: "border",
                                                    size: "lg"
                                                })
                                            })
                                        }) : !(null == l ? void 0 : l.length) > 0 ? (0, r.jsx)(r.Fragment, {
                                            children: (0, r.jsx)("div", {
                                                className: "d-flex justify-content-center",
                                                children: "No Auctions Found!"
                                            })
                                        }) : (0, r.jsx)("div", {
                                            className: "common-product-block",
                                            children: null == l ? void 0 : l.map((e, t) => (0, r.jsx)(N, {
                                                item: e,
                                                handleLike: S,
                                                handleOpen: Y
                                            }, t))
                                        }), t && a > 1 && (0, r.jsx)("div", {
                                            className: "d-flex justify-content-center mt-3",
                                            children: (0, r.jsx)(n.Z, {
                                                size: "lg"
                                            })
                                        }), !t && A && (0, r.jsx)("div", {
                                            className: "common-btn-block",
                                            children: (0, r.jsx)(d.Button, {
                                                className: "border-dark-button",
                                                isBorderBtn: !0,
                                                onClick: z,
                                                children: "Load more"
                                            })
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    })]
                })
            }
        },
        9008: function(e, t, i) {
            e.exports = i(7828)
        }
    },
    function(e) {
        e.O(0, [7506, 8857, 3275, 7258, 2888, 9774, 179], function() {
            return e(e.s = 45198)
        }), _N_E = e.O()
    }
]);