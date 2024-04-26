(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [337], {
        56520: function(e, s, l) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/explore/collection", function() {
                return l(43610)
            }])
        },
        43610: function(e, s, l) {
            "use strict";
            l.r(s);
            var i = l(85893),
                n = l(88665),
                c = l(90901),
                r = l(34965),
                t = l(17258),
                a = l(24486),
                d = l(33275),
                h = l(24715),
                o = l(11163);
            l(67294);
            var x = l(33353),
                j = l(54568),
                p = l(52448),
                m = l(27506);
            s.default = () => {
                let {
                    loading: e,
                    popularCollections: s,
                    count: l,
                    totalPages: g,
                    page: u,
                    limit: f,
                    payload: N,
                    TimePeriod: k,
                    timePeriodChange: v,
                    handlePageChange: w,
                    handleSearch: _
                } = (0, t.W1)(), b = (0, o.useRouter)(), C = e => {
                    b.push({
                        pathname: a.v.explore.collection(e)
                    })
                };
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(n.Z, {
                        title: "Popular-Collections"
                    }), (0, i.jsx)(d.Fd, {
                        className: "dark-mode-body",
                        children: (0, i.jsxs)(x.Z, {
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
                            }), (0, i.jsx)("div", {
                                className: "common-title-page text-center-space",
                                children: (0, i.jsx)("h1", {
                                    children: "Popular Collections"
                                })
                            }), (0, i.jsxs)("div", {
                                className: "search-select",
                                children: [(0, i.jsx)("div", {
                                    className: "search-box-inner",
                                    children: (0, i.jsxs)("div", {
                                        className: "search-box-form",
                                        children: [(0, i.jsx)("input", {
                                            type: "text",
                                            name: "GlobalSearch",
                                            autoComplete: "off",
                                            placeholder: "Filter by Collection Name",
                                            onChange: _
                                        }), (0, i.jsx)("button", {
                                            children: (0, i.jsxs)("svg", {
                                                width: "25",
                                                height: "24",
                                                viewBox: "0 0 25 24",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [(0, i.jsxs)("g", {
                                                    opacity: "0.4",
                                                    "clip-path": "url(#clip0_73_3465)",
                                                    children: [(0, i.jsx)("path", {
                                                        d: "M11.1555 18C15.2977 18 18.6555 14.6421 18.6555 10.5C18.6555 6.35786 15.2977 3 11.1555 3C7.01338 3 3.65552 6.35786 3.65552 10.5C3.65552 14.6421 7.01338 18 11.1555 18Z",
                                                        stroke: "#191820",
                                                        "stroke-width": "3",
                                                        "stroke-linecap": "round",
                                                        "stroke-linejoin": "round"
                                                    }), (0, i.jsx)("path", {
                                                        d: "M16.459 15.8037L21.6555 21.0003",
                                                        stroke: "#191820",
                                                        "stroke-width": "3",
                                                        "stroke-linecap": "round",
                                                        "stroke-linejoin": "round"
                                                    })]
                                                }), (0, i.jsx)("defs", {
                                                    children: (0, i.jsx)("clipPath", {
                                                        id: "clip0_73_3465",
                                                        children: (0, i.jsx)("rect", {
                                                            width: "24",
                                                            height: "24",
                                                            fill: "white",
                                                            transform: "translate(0.655518)"
                                                        })
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                }), (0, i.jsx)(m.ZP, {
                                    name: "colors",
                                    options: k,
                                    className: "TX-select2-wrapper",
                                    classNamePrefix: "TX-fix-select",
                                    defaultValue: k[1],
                                    onChange: v
                                })]
                            }), (0, i.jsx)("div", {
                                className: "ranking-table-block",
                                children: (0, i.jsxs)("div", {
                                    className: "ranking-table-block",
                                    children: [(0, i.jsxs)(j.Z, {
                                        children: [(0, i.jsx)("thead", {
                                            children: (0, i.jsxs)("tr", {
                                                children: [(0, i.jsx)("th", {
                                                    children: "#"
                                                }), (0, i.jsx)("th", {
                                                    children: "Collection"
                                                }), (0, i.jsx)("th", {
                                                    children: "Floor"
                                                }), (0, i.jsx)("th", {
                                                    children: "24h Vol"
                                                }), (0, i.jsx)("th", {
                                                    children: "24h % Vol"
                                                }), (0, i.jsx)("th", {
                                                    children: "Sales"
                                                }), (0, i.jsx)("th", {
                                                    children: "Total Vol"
                                                }), (0, i.jsx)("th", {
                                                    children: "Owners"
                                                }), (0, i.jsx)("th", {
                                                    children: "Supply"
                                                })]
                                            })
                                        }), (0, i.jsx)("tbody", {
                                            children: e ? (0, i.jsx)("tr", {
                                                children: (0, i.jsx)("td", {
                                                    colSpan: 9,
                                                    className: "text-center",
                                                    children: (0, i.jsx)(p.Z, {
                                                        size: "md"
                                                    })
                                                })
                                            }) : !(null == s ? void 0 : s.length) > 0 ? (0, i.jsx)("tr", {
                                                children: (0, i.jsx)("td", {
                                                    colSpan: 9,
                                                    className: "text-center",
                                                    children: "No data found"
                                                })
                                            }) : null == s ? void 0 : s.map((e, s) => {
                                                let {
                                                    _id: l,
                                                    image: n,
                                                    name: c,
                                                    floor: t,
                                                    sales: a,
                                                    totalVolume: d,
                                                    owners: o,
                                                    address: x,
                                                    chainId: j,
                                                    type: p,
                                                    dayVolume: m,
                                                    dayPercentage: g,
                                                    supply: N
                                                } = e;
                                                return (0, i.jsxs)("tr", {
                                                    onClick: () => C(x),
                                                    style: {
                                                        cursor: "pointer"
                                                    },
                                                    children: [(0, i.jsx)("td", {
                                                        children: (u - 1) * f + s + 1
                                                    }), (0, i.jsx)("td", {
                                                        children: (0, i.jsxs)("div", {
                                                            className: "collection-name",
                                                            children: [(0, i.jsx)("div", {
                                                                className: "collection-profile",
                                                                children: (0, i.jsx)("img", {
                                                                    src: n || "../../images/collection-img.png",
                                                                    alt: "product-img"
                                                                })
                                                            }), (0, i.jsxs)("h3", {
                                                                className: "flex-reward",
                                                                children: [c, " "]
                                                            })]
                                                        })
                                                    }), (0, i.jsx)("td", {
                                                        children: (0, h.IA)(t, 4)
                                                    }), (0, i.jsx)("td", {
                                                        children: (0, h.IA)(m, 4)
                                                    }), (0, h.MD)(g), (0, i.jsx)("td", {
                                                        children: a
                                                    }), (0, i.jsx)("td", {
                                                        children: (0, i.jsxs)("div", {
                                                            className: "total-volume-block",
                                                            children: [(0, i.jsx)("img", {
                                                                src: r.c6[j],
                                                                alt: "icon-img"
                                                            }), (0, i.jsx)("p", {
                                                                children: (0, h.IA)(d, 4)
                                                            })]
                                                        })
                                                    }), (0, i.jsx)("td", {
                                                        children: o
                                                    }), (0, i.jsx)("td", {
                                                        children: (0, h.IA)(N, 4)
                                                    })]
                                                }, s)
                                            })
                                        })]
                                    }), (0, i.jsx)(c.Z, {
                                        totalPages: g || 1,
                                        page: u || 1,
                                        onPageChange: w
                                    })]
                                })
                            })]
                        })
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [7506, 3275, 7258, 1866, 2888, 9774, 179], function() {
            return e(e.s = 56520)
        }), _N_E = e.O()
    }
]);