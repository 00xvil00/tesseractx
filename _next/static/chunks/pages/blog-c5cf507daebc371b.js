(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9195], {
        57286: function(e, n, l) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/blog", function() {
                return l(35196)
            }])
        },
        88665: function(e, n, l) {
            "use strict";
            l.d(n, {
                Z: function() {
                    return c
                }
            });
            var s = l(85893),
                i = l(9008),
                t = l.n(i);

            function c(e) {
                let {
                    title: n = "TesseractX"
                } = e;
                return (0, s.jsx)(t(), {
                    children: (0, s.jsx)("title", {
                        children: "".concat(n, " | ").concat("TesseractX")
                    })
                })
            }
            l(67294)
        },
        35196: function(e, n, l) {
            "use strict";
            l.r(n);
            var s = l(85893),
                i = l(88665),
                t = l(17258),
                c = l(24486),
                r = l(97673),
                a = l(33275),
                o = l(30381),
                d = l.n(o),
                m = l(5152),
                h = l.n(m),
                x = l(11163);
            l(67294);
            var g = l(33353),
                u = l(52448);
            h()(Promise.all([l.e(8194), l.e(1650)]).then(l.bind(l, 11650)), {
                loadableGenerated: {
                    webpack: () => [11650]
                },
                ssr: !1
            }), n.default = () => {
                let {
                    loading: e,
                    items: n,
                    page: l,
                    hasMore: o,
                    handlePageChange: m
                } = (0, t.eo)({
                    limit: 9
                }), {
                    push: h
                } = (0, x.useRouter)(), j = e => {
                    h(c.v.blog.details(e))
                };
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(i.Z, {
                        title: "Blogs"
                    }), (0, s.jsx)(a.Fd, {
                        className: "dark-mode-body",
                        children: (0, s.jsx)(g.Z, {
                            children: (0, s.jsxs)("div", {
                                className: "blog-main",
                                children: [(0, s.jsx)("div", {
                                    className: "common-title-page text-center-space",
                                    children: (0, s.jsx)("h2", {
                                        children: "Blog"
                                    })
                                }), e && 1 == l ? (0, s.jsx)(s.Fragment, {
                                    children: (0, s.jsx)("div", {
                                        className: "d-flex justify-content-center vh-100 align-items-center",
                                        children: (0, s.jsx)(u.Z, {
                                            animation: "border",
                                            size: "lg"
                                        })
                                    })
                                }) : !(null == n ? void 0 : n.length) > 0 ? (0, s.jsx)(s.Fragment, {
                                    children: (0, s.jsx)("div", {
                                        className: "d-flex justify-content-center",
                                        children: "No Blogs Found!"
                                    })
                                }) : (0, s.jsx)("div", {
                                    className: "blog-main-inner",
                                    children: n.map((e, n) => (0, s.jsx)("div", {
                                        className: "blog-main-inner-block pointer",
                                        onClick: () => j(null == e ? void 0 : e._id),
                                        children: (0, s.jsxs)("div", {
                                            className: "blog-main-block",
                                            children: [(0, s.jsx)("img", {
                                                src: e.thumbnail || "../../images/blog-img.png",
                                                className: "main-blog-img",
                                                alt: "blog-img"
                                            }), (0, s.jsxs)("div", {
                                                className: "title-blog-inner",
                                                children: [(0, s.jsx)("h3", {
                                                    children: (null == e ? void 0 : e.title) || ""
                                                }), (0, s.jsx)("button", {
                                                    children: null == e ? void 0 : e.tags[0]
                                                })]
                                            }), (0, s.jsx)("p", {
                                                children: null == e ? void 0 : e.shortDescription
                                            }), (0, s.jsxs)("div", {
                                                className: "blog-last-block",
                                                children: [(0, s.jsx)("div", {
                                                    className: "blog-last-block-inner"
                                                }), (0, s.jsxs)("div", {
                                                    className: "blog-last-block-inner",
                                                    children: [(0, s.jsx)("img", {
                                                        src: "../../images/clock-blog.svg",
                                                        alt: "blog-img"
                                                    }), (0, s.jsx)("h5", {
                                                        children: d()(null == e ? void 0 : e.createdAt).format("LL")
                                                    })]
                                                })]
                                            })]
                                        })
                                    }, n))
                                }), e && l > 1 && (0, s.jsx)("div", {
                                    className: "d-flex justify-content-center mt-3",
                                    children: (0, s.jsx)(u.Z, {
                                        size: "lg"
                                    })
                                }), !e && o && (0, s.jsx)("div", {
                                    className: "d-flex justify-content-center",
                                    children: (0, s.jsx)(r.Button, {
                                        isBorderBtn: !0,
                                        onClick: m,
                                        style: {
                                            width: "190px"
                                        },
                                        children: "Load more"
                                    })
                                })]
                            })
                        })
                    })]
                })
            }
        },
        9008: function(e, n, l) {
            e.exports = l(7828)
        }
    },
    function(e) {
        e.O(0, [3275, 7258, 2888, 9774, 179], function() {
            return e(e.s = 57286)
        }), _N_E = e.O()
    }
]);