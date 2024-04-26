(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3120], {
        40736: function(e, l, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/stats/ranking", function() {
                return s(21051)
            }])
        },
        21051: function(e, l, s) {
            "use strict";
            s.r(l);
            var i = s(85893),
                n = s(33353),
                a = s(52448),
                r = s(54568);
            s(67294);
            var c = s(33275),
                t = s(17258),
                d = s(24715),
                o = s(34965),
                h = s(90901),
                g = s(11163),
                x = s(24486),
                m = s(88665);
            l.default = () => {
                var e;
                let {
                    loading: l,
                    categorys: s,
                    ranking: j,
                    count: b,
                    totalPages: u,
                    page: p,
                    limit: N,
                    payload: k,
                    categoryChange: f,
                    handlePageChange: v
                } = (0, t.m9)(), _ = (0, g.useRouter)(), C = e => {
                    e && _.push(x.v.explore.collection(e))
                }, S = [{
                    label: "#",
                    isSortable: !0
                }, {
                    label: "Collection",
                    isSortable: !0
                }, {
                    label: "Volume",
                    isSortable: !0
                }, {
                    label: "Chain",
                    isSortable: !0
                }, {
                    label: "24h %",
                    isSortable: !0
                }, {
                    label: "7d %",
                    isSortable: !0
                }, {
                    label: "Floor Price",
                    isSortable: !0
                }, {
                    label: "Owners",
                    isSortable: !0
                }, {
                    label: "Assets",
                    isSortable: !0
                }];
                return (0, i.jsxs)(i.Fragment, {
                    children: [" ", (0, i.jsx)(m.Z, {
                        title: "Ranking"
                    }), (0, i.jsx)(c.Fd, {
                        className: "dark-mode-body",
                        children: (0, i.jsxs)(n.Z, {
                            children: [(0, i.jsx)("div", {
                                className: "graphics-inner-diff diff-img-graphics",
                                children: (0, i.jsx)("img", {
                                    src: "../../images/graphics-img-ranking.svg",
                                    alt: "graphics-img"
                                })
                            }), (0, i.jsx)("div", {
                                className: "graphics-inner-shape-two diff-ranking",
                                children: (0, i.jsx)("img", {
                                    src: "../../images/graphics-block-inner-2.png",
                                    alt: "graphics-img"
                                })
                            }), (0, i.jsxs)("div", {
                                className: "ranking-table-block",
                                children: [(0, i.jsxs)("div", {
                                    className: "ranking-table-block-top-button",
                                    children: [(0, i.jsx)("button", {
                                        onClick: () => {
                                            f(null)
                                        },
                                        className: "".concat(null == k.stateCategory[0] ? "selected" : ""),
                                        children: "All"
                                    }), null === (e = [...s].sort((e, l) => e.label.localeCompare(l.label))) || void 0 === e ? void 0 : e.map((e, l) => {
                                        let {
                                            value: s,
                                            label: n
                                        } = e;
                                        return (0, i.jsx)("button", {
                                            onClick: () => {
                                                f(s)
                                            },
                                            className: "".concat(k.stateCategory[0] == s ? "selected" : ""),
                                            children: n
                                        }, l)
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "ranking-table-block",
                                    children: [(0, i.jsxs)(r.Z, {
                                        children: [(0, i.jsx)("thead", {
                                            children: (0, i.jsx)("tr", {
                                                children: S.map((e, l) => {
                                                    let {
                                                        label: s
                                                    } = e;
                                                    return (0, i.jsx)("th", {
                                                        children: s
                                                    }, l)
                                                })
                                            })
                                        }), (0, i.jsx)("tbody", {
                                            children: l ? (0, i.jsx)("tr", {
                                                children: (0, i.jsx)("td", {
                                                    colSpan: S.length,
                                                    className: "text-center",
                                                    children: (0, i.jsx)(a.Z, {
                                                        size: "md"
                                                    })
                                                })
                                            }) : !(null == j ? void 0 : j.length) > 0 ? (0, i.jsx)("tr", {
                                                children: (0, i.jsx)("td", {
                                                    colSpan: S.length,
                                                    className: "text-center",
                                                    children: "No data found"
                                                })
                                            }) : null == j ? void 0 : j.map((e, l) => {
                                                let {
                                                    address: s,
                                                    collectionImage: n,
                                                    collectionName: a,
                                                    tradingVolume: r,
                                                    dayPercentage: c,
                                                    weekPercentage: t,
                                                    floorPrice: h,
                                                    chainId: g,
                                                    totalOwners: x,
                                                    totalItemCount: m
                                                } = e;
                                                return (0, i.jsxs)("tr", {
                                                    className: "pointer",
                                                    onClick: () => C(s),
                                                    children: [(0, i.jsx)("td", {
                                                        children: (p - 1) * N + l + 1
                                                    }), (0, i.jsx)("td", {
                                                        children: (0, i.jsxs)("div", {
                                                            className: "collection-name",
                                                            children: [(0, i.jsx)("div", {
                                                                className: "collection-profile",
                                                                children: (0, i.jsx)("img", {
                                                                    src: n || "../../images/collection-img.png",
                                                                    alt: "product-img"
                                                                })
                                                            }), (0, i.jsx)("h3", {
                                                                children: a || "-"
                                                            })]
                                                        })
                                                    }), (0, i.jsx)("td", {
                                                        children: d.VF.format(r || 0)
                                                    }), (0, i.jsx)("td", {
                                                        children: (0, i.jsxs)("div", {
                                                            className: "puls-chin-logo",
                                                            children: [(0, i.jsx)("img", {
                                                                src: o.c6[g],
                                                                alt: "chainLogo"
                                                            }), " ", o.p$[g]]
                                                        })
                                                    }), (0, d.MD)(c), (0, d.MD)(t), (0, i.jsxs)("td", {
                                                        children: [(0, d.IA)(h, 4), " ", o.Wm[g]]
                                                    }), (0, i.jsx)("td", {
                                                        children: (0, d.IA)(x || 0)
                                                    }), (0, i.jsx)("td", {
                                                        children: (0, d.IA)(m || 0)
                                                    })]
                                                }, l)
                                            })
                                        })]
                                    }), (0, i.jsx)(h.Z, {
                                        totalPages: u || 1,
                                        page: p || 1,
                                        onPageChange: v
                                    })]
                                })]
                            })]
                        })
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [3275, 7258, 1866, 2888, 9774, 179], function() {
            return e(e.s = 40736)
        }), _N_E = e.O()
    }
]);