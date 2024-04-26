"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1650], {
        11650: function(e, t, l) {
            l.r(t);
            var r = l(85893);
            l(67294);
            var s = l(23851),
                n = l.n(s),
                a = l(47311);
            let c = e => {
                    let {
                        data: t,
                        className: l = ""
                    } = e, s = "h".concat(t.level || 3);
                    return (0, r.jsx)(s, {
                        className: l,
                        style: {
                            margin: "0px opx 15px"
                        },
                        children: (0, a.ZP)(t.text)
                    })
                },
                i = e => {
                    let {
                        data: t
                    } = e;
                    return (0, r.jsx)("p", {
                        children: (0, a.ZP)(t.text)
                    })
                },
                d = e => {
                    let {
                        data: t,
                        className: l = "object-contain text-center"
                    } = e;
                    return (0, r.jsx)("img", {
                        className: l,
                        src: t.file.url,
                        alt: t.caption
                    })
                },
                u = e => {
                    let {
                        data: t,
                        className: l = ""
                    } = e;
                    return (0, r.jsxs)("p", {
                        style: {
                            padding: "1rem",
                            backgroundColor: "rgb(248 250 252 )",
                            borderLeft: "4px solid black"
                        },
                        children: [(0, r.jsxs)("i", {
                            className: l,
                            children: ['"', (0, a.ZP)(t.text), '"']
                        }), " -", t.caption]
                    })
                },
                o = e => {
                    let {
                        data: t,
                        className: l = ""
                    } = e;
                    return (0, r.jsx)("ol", {
                        className: l,
                        children: t.items.map((e, t) => (0, r.jsx)("li", {
                            className: "",
                            children: e
                        }, t))
                    })
                },
                h = e => {
                    let {
                        data: t,
                        className: l = ""
                    } = e;
                    return (0, r.jsx)("div", {
                        className: "d-flex justify-content-center",
                        children: (0, r.jsx)("figure", {
                            className: "rounded-4",
                            children: (0, r.jsx)("iframe", {
                                className: "rounded-4",
                                src: t.embed,
                                height: t.height,
                                width: t.width
                            })
                        })
                    })
                };
            t.default = e => {
                let {
                    item: t
                } = e;
                return (null == t ? void 0 : t.content) ? (0, r.jsx)("div", {
                    className: "blog-detail-review-b",
                    children: (0, r.jsx)(n(), {
                        renderers: {
                            header: c,
                            list: o,
                            paragraph: i,
                            image: d,
                            quote: u,
                            embed: h
                        },
                        data: null == t ? void 0 : t.content
                    })
                }) : null
            }
        }
    }
]);