(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1866], {
        55111: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return s
                }
            });
            var r = n(67294),
                a = n(78146);

            function s(e, t, n, s = !1) {
                let i = (0, a.Z)(n);
                (0, r.useEffect)(() => {
                    let n = "function" == typeof e ? e() : e;
                    return n.addEventListener(t, i, s), () => n.removeEventListener(t, i, s)
                }, [e])
            }
        },
        13551: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(67294);
            n(32092), n(92029);
            var a = n(78146);
            n(55111), n(6454), n(88833), n(99585), new WeakMap;
            var s = n(70861),
                i = n(85893);
            let c = ["onKeyDown"],
                l = r.forwardRef((e, t) => {
                    var n;
                    let {
                        onKeyDown: r
                    } = e, l = function(e, t) {
                        if (null == e) return {};
                        var n, r, a = {},
                            s = Object.keys(e);
                        for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                        return a
                    }(e, c), [o] = (0, s.FT)(Object.assign({
                        tagName: "a"
                    }, l)), u = (0, a.Z)(e => {
                        o.onKeyDown(e), null == r || r(e)
                    });
                    return (n = l.href) && "#" !== n.trim() && "button" !== l.role ? (0, i.jsx)("a", Object.assign({
                        ref: t
                    }, l, {
                        onKeyDown: r
                    })) : (0, i.jsx)("a", Object.assign({
                        ref: t
                    }, l, o, {
                        onKeyDown: u
                    }))
                });
            l.displayName = "Anchor";
            var o = l
        },
        70861: function(e, t, n) {
            "use strict";
            n.d(t, {
                FT: function() {
                    return i
                }
            });
            var r = n(67294),
                a = n(85893);
            let s = ["as", "disabled"];

            function i({
                tagName: e,
                disabled: t,
                href: n,
                target: r,
                rel: a,
                role: s,
                onClick: i,
                tabIndex: c = 0,
                type: l
            }) {
                e || (e = null != n || null != r || null != a ? "a" : "button");
                let o = {
                    tagName: e
                };
                if ("button" === e) return [{
                    type: l || "button",
                    disabled: t
                }, o];
                let u = r => {
                    var a;
                    if (!t && ("a" !== e || (a = n) && "#" !== a.trim()) || r.preventDefault(), t) {
                        r.stopPropagation();
                        return
                    }
                    null == i || i(r)
                };
                return "a" === e && (n || (n = "#"), t && (n = void 0)), [{
                    role: null != s ? s : "button",
                    disabled: void 0,
                    tabIndex: t ? void 0 : c,
                    href: n,
                    target: "a" === e ? r : void 0,
                    "aria-disabled": t || void 0,
                    rel: "a" === e ? a : void 0,
                    onClick: u,
                    onKeyDown: e => {
                        " " === e.key && (e.preventDefault(), u(e))
                    }
                }, o]
            }
            let c = r.forwardRef((e, t) => {
                let {
                    as: n,
                    disabled: r
                } = e, c = function(e, t) {
                    if (null == e) return {};
                    var n, r, a = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a
                }(e, s), [l, {
                    tagName: o
                }] = i(Object.assign({
                    tagName: n,
                    disabled: r
                }, c));
                return (0, a.jsx)(o, Object.assign({}, c, l, {
                    ref: t
                }))
            });
            c.displayName = "Button", t.ZP = c
        },
        23630: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return h
                }
            });
            var r = n(93967),
                a = n.n(r),
                s = n(67294),
                i = n(54728),
                c = n(13551),
                l = n(85893);
            let o = s.forwardRef((e, t) => {
                let {
                    active: n = !1,
                    disabled: r = !1,
                    className: s,
                    style: i,
                    activeLabel: o = "(current)",
                    children: u,
                    linkStyle: f,
                    linkClassName: d,
                    as: v = c.Z,
                    ...m
                } = e, j = n || r ? "span" : v;
                return (0, l.jsx)("li", {
                    ref: t,
                    style: i,
                    className: a()(s, "page-item", {
                        active: n,
                        disabled: r
                    }),
                    children: (0, l.jsxs)(j, {
                        className: a()("page-link", d),
                        style: f,
                        ...m,
                        children: [u, n && o && (0, l.jsx)("span", {
                            className: "visually-hidden",
                            children: o
                        })]
                    })
                })
            });

            function u(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e,
                    r = s.forwardRef((e, r) => {
                        let {
                            children: a,
                            ...s
                        } = e;
                        return (0, l.jsxs)(o, { ...s,
                            ref: r,
                            children: [(0, l.jsx)("span", {
                                "aria-hidden": "true",
                                children: a || t
                            }), (0, l.jsx)("span", {
                                className: "visually-hidden",
                                children: n
                            })]
                        })
                    });
                return r.displayName = e, r
            }
            o.displayName = "PageItem";
            let f = u("First", "\xab"),
                d = u("Prev", "‹", "Previous"),
                v = u("Ellipsis", "…", "More"),
                m = u("Next", "›"),
                j = u("Last", "\xbb"),
                p = s.forwardRef((e, t) => {
                    let {
                        bsPrefix: n,
                        className: r,
                        size: s,
                        ...c
                    } = e, o = (0, i.vE)(n, "pagination");
                    return (0, l.jsx)("ul", {
                        ref: t,
                        ...c,
                        className: a()(r, o, s && "".concat(o, "-").concat(s))
                    })
                });
            p.displayName = "Pagination";
            var h = Object.assign(p, {
                First: f,
                Prev: d,
                Ellipsis: v,
                Item: o,
                Next: m,
                Last: j
            })
        },
        54568: function(e, t, n) {
            "use strict";
            var r = n(93967),
                a = n.n(r),
                s = n(67294),
                i = n(54728),
                c = n(85893);
            let l = s.forwardRef((e, t) => {
                let {
                    bsPrefix: n,
                    className: r,
                    striped: s,
                    bordered: l,
                    borderless: o,
                    hover: u,
                    size: f,
                    variant: d,
                    responsive: v,
                    ...m
                } = e, j = (0, i.vE)(n, "table"), p = a()(r, j, d && "".concat(j, "-").concat(d), f && "".concat(j, "-").concat(f), s && "".concat(j, "-").concat("string" == typeof s ? "striped-".concat(s) : "striped"), l && "".concat(j, "-bordered"), o && "".concat(j, "-borderless"), u && "".concat(j, "-hover")), h = (0, c.jsx)("table", { ...m,
                    className: p,
                    ref: t
                });
                if (v) {
                    let e = "".concat(j, "-responsive");
                    return "string" == typeof v && (e = "".concat(e, "-").concat(v)), (0, c.jsx)("div", {
                        className: e,
                        children: h
                    })
                }
                return h
            });
            t.Z = l
        },
        88665: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(85893),
                a = n(9008),
                s = n.n(a);

            function i(e) {
                let {
                    title: t = "TesseractX"
                } = e;
                return (0, r.jsx)(s(), {
                    children: (0, r.jsx)("title", {
                        children: "".concat(t, " | ").concat("TesseractX")
                    })
                })
            }
            n(67294)
        },
        90901: function(e, t, n) {
            "use strict";
            var r = n(85893),
                a = n(67294),
                s = n(23630);
            t.Z = e => {
                let {
                    totalPages: t,
                    page: n,
                    onPageChange: i
                } = e, c = (0, a.useMemo)(() => t <= 3 ? Array.from({
                    length: t
                }, (e, t) => t + 1) : n <= 2 ? Array.from({
                    length: 3
                }, (e, t) => t + 1) : n >= t - 1 ? Array.from({
                    length: 3
                }, (e, n) => t - 2 + n) : Array.from({
                    length: 3
                }, (e, t) => n - 1 + t), [t, n]);
                return (0, r.jsx)(r.Fragment, {
                    children: t > 1 && (0, r.jsxs)(s.Z, {
                        className: "justify-content-end mt-5",
                        children: [t > 2 && (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(s.Z.First, {
                                onClick: () => i(1)
                            }), (0, r.jsx)(s.Z.Prev, {
                                onClick: () => {
                                    n <= 1 || i(n - 1)
                                }
                            })]
                        }), null == c ? void 0 : c.map((e, t) => (0, r.jsx)(s.Z.Item, {
                            onClick: () => i(e),
                            className: "".concat(n == e ? "active" : ""),
                            children: e
                        }, t)), t > 2 && (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(s.Z.Next, {
                                onClick: () => {
                                    n >= t || i(n + 1)
                                }
                            }), (0, r.jsx)(s.Z.Last, {
                                onClick: () => i(t)
                            })]
                        })]
                    })
                })
            }
        },
        9008: function(e, t, n) {
            e.exports = n(7828)
        }
    }
]);