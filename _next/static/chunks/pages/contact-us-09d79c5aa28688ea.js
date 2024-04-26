(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8455], {
        12873: function(e, a, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/contact-us", function() {
                return s(66884)
            }])
        },
        55315: function(e, a, s) {
            "use strict";
            s.d(a, {
                Ed: function() {
                    return r
                },
                UI: function() {
                    return l
                },
                XW: function() {
                    return n
                }
            });
            var t = s(67294);

            function l(e, a) {
                let s = 0;
                return t.Children.map(e, e => t.isValidElement(e) ? a(e, s++) : e)
            }

            function r(e, a) {
                let s = 0;
                t.Children.forEach(e, e => {
                    t.isValidElement(e) && a(e, s++)
                })
            }

            function n(e, a) {
                return t.Children.toArray(e).some(e => t.isValidElement(e) && e.type === a)
            }
        },
        85955: function(e, a, s) {
            "use strict";
            s.d(a, {
                Z: function() {
                    return T
                }
            });
            var t = s(93967),
                l = s.n(t),
                r = s(45697),
                n = s.n(r),
                i = s(67294),
                c = s(85893);
            let o = {
                    type: n().string,
                    tooltip: n().bool,
                    as: n().elementType
                },
                d = i.forwardRef((e, a) => {
                    let {
                        as: s = "div",
                        className: t,
                        type: r = "valid",
                        tooltip: n = !1,
                        ...i
                    } = e;
                    return (0, c.jsx)(s, { ...i,
                        ref: a,
                        className: l()(t, "".concat(r, "-").concat(n ? "tooltip" : "feedback"))
                    })
                });
            d.displayName = "Feedback", d.propTypes = o;
            let u = i.createContext({});
            var m = s(54728);
            let h = i.forwardRef((e, a) => {
                let {
                    id: s,
                    bsPrefix: t,
                    className: r,
                    type: n = "checkbox",
                    isValid: o = !1,
                    isInvalid: d = !1,
                    as: h = "input",
                    ...f
                } = e, {
                    controlId: x
                } = (0, i.useContext)(u);
                return t = (0, m.vE)(t, "form-check-input"), (0, c.jsx)(h, { ...f,
                    ref: a,
                    type: n,
                    id: s || x,
                    className: l()(r, t, o && "is-valid", d && "is-invalid")
                })
            });
            h.displayName = "FormCheckInput";
            let f = i.forwardRef((e, a) => {
                let {
                    bsPrefix: s,
                    className: t,
                    htmlFor: r,
                    ...n
                } = e, {
                    controlId: o
                } = (0, i.useContext)(u);
                return s = (0, m.vE)(s, "form-check-label"), (0, c.jsx)("label", { ...n,
                    ref: a,
                    htmlFor: r || o,
                    className: l()(t, s)
                })
            });
            f.displayName = "FormCheckLabel";
            var x = s(55315);
            let p = i.forwardRef((e, a) => {
                let {
                    id: s,
                    bsPrefix: t,
                    bsSwitchPrefix: r,
                    inline: n = !1,
                    reverse: o = !1,
                    disabled: p = !1,
                    isValid: j = !1,
                    isInvalid: v = !1,
                    feedbackTooltip: b = !1,
                    feedback: g,
                    feedbackType: N,
                    className: y,
                    style: C,
                    title: F = "",
                    type: w = "checkbox",
                    label: E,
                    children: k,
                    as: R = "input",
                    ..._
                } = e;
                t = (0, m.vE)(t, "form-check"), r = (0, m.vE)(r, "form-switch");
                let {
                    controlId: I
                } = (0, i.useContext)(u), L = (0, i.useMemo)(() => ({
                    controlId: s || I
                }), [I, s]), T = !k && null != E && !1 !== E || (0, x.XW)(k, f), S = (0, c.jsx)(h, { ..._,
                    type: "switch" === w ? "checkbox" : w,
                    ref: a,
                    isValid: j,
                    isInvalid: v,
                    disabled: p,
                    as: R
                });
                return (0, c.jsx)(u.Provider, {
                    value: L,
                    children: (0, c.jsx)("div", {
                        style: C,
                        className: l()(y, T && t, n && "".concat(t, "-inline"), o && "".concat(t, "-reverse"), "switch" === w && r),
                        children: k || (0, c.jsxs)(c.Fragment, {
                            children: [S, T && (0, c.jsx)(f, {
                                title: F,
                                children: E
                            }), g && (0, c.jsx)(d, {
                                type: N,
                                tooltip: b,
                                children: g
                            })]
                        })
                    })
                })
            });
            p.displayName = "FormCheck";
            var j = Object.assign(p, {
                Input: h,
                Label: f
            });
            s(42473);
            let v = i.forwardRef((e, a) => {
                let {
                    bsPrefix: s,
                    type: t,
                    size: r,
                    htmlSize: n,
                    id: o,
                    className: d,
                    isValid: h = !1,
                    isInvalid: f = !1,
                    plaintext: x,
                    readOnly: p,
                    as: j = "input",
                    ...v
                } = e, {
                    controlId: b
                } = (0, i.useContext)(u);
                return s = (0, m.vE)(s, "form-control"), (0, c.jsx)(j, { ...v,
                    type: t,
                    size: n,
                    ref: a,
                    readOnly: p,
                    id: o || b,
                    className: l()(d, x ? "".concat(s, "-plaintext") : s, r && "".concat(s, "-").concat(r), "color" === t && "".concat(s, "-color"), h && "is-valid", f && "is-invalid")
                })
            });
            v.displayName = "FormControl";
            var b = Object.assign(v, {
                Feedback: d
            });
            let g = i.forwardRef((e, a) => {
                let {
                    className: s,
                    bsPrefix: t,
                    as: r = "div",
                    ...n
                } = e;
                return t = (0, m.vE)(t, "form-floating"), (0, c.jsx)(r, {
                    ref: a,
                    className: l()(s, t),
                    ...n
                })
            });
            g.displayName = "FormFloating";
            let N = i.forwardRef((e, a) => {
                let {
                    controlId: s,
                    as: t = "div",
                    ...l
                } = e, r = (0, i.useMemo)(() => ({
                    controlId: s
                }), [s]);
                return (0, c.jsx)(u.Provider, {
                    value: r,
                    children: (0, c.jsx)(t, { ...l,
                        ref: a
                    })
                })
            });
            N.displayName = "FormGroup";
            var y = s(88083);
            let C = i.forwardRef((e, a) => {
                let {
                    as: s = "label",
                    bsPrefix: t,
                    column: r = !1,
                    visuallyHidden: n = !1,
                    className: o,
                    htmlFor: d,
                    ...h
                } = e, {
                    controlId: f
                } = (0, i.useContext)(u);
                t = (0, m.vE)(t, "form-label");
                let x = "col-form-label";
                "string" == typeof r && (x = "".concat(x, " ").concat(x, "-").concat(r));
                let p = l()(o, t, n && "visually-hidden", r && x);
                return (d = d || f, r) ? (0, c.jsx)(y.Z, {
                    ref: a,
                    as: "label",
                    className: p,
                    htmlFor: d,
                    ...h
                }) : (0, c.jsx)(s, {
                    ref: a,
                    className: p,
                    htmlFor: d,
                    ...h
                })
            });
            C.displayName = "FormLabel";
            let F = i.forwardRef((e, a) => {
                let {
                    bsPrefix: s,
                    className: t,
                    id: r,
                    ...n
                } = e, {
                    controlId: o
                } = (0, i.useContext)(u);
                return s = (0, m.vE)(s, "form-range"), (0, c.jsx)("input", { ...n,
                    type: "range",
                    ref: a,
                    className: l()(t, s),
                    id: r || o
                })
            });
            F.displayName = "FormRange";
            let w = i.forwardRef((e, a) => {
                let {
                    bsPrefix: s,
                    size: t,
                    htmlSize: r,
                    className: n,
                    isValid: o = !1,
                    isInvalid: d = !1,
                    id: h,
                    ...f
                } = e, {
                    controlId: x
                } = (0, i.useContext)(u);
                return s = (0, m.vE)(s, "form-select"), (0, c.jsx)("select", { ...f,
                    size: r,
                    ref: a,
                    className: l()(n, s, t && "".concat(s, "-").concat(t), o && "is-valid", d && "is-invalid"),
                    id: h || x
                })
            });
            w.displayName = "FormSelect";
            let E = i.forwardRef((e, a) => {
                let {
                    bsPrefix: s,
                    className: t,
                    as: r = "small",
                    muted: n,
                    ...i
                } = e;
                return s = (0, m.vE)(s, "form-text"), (0, c.jsx)(r, { ...i,
                    ref: a,
                    className: l()(t, s, n && "text-muted")
                })
            });
            E.displayName = "FormText";
            let k = i.forwardRef((e, a) => (0, c.jsx)(j, { ...e,
                ref: a,
                type: "switch"
            }));
            k.displayName = "Switch";
            var R = Object.assign(k, {
                Input: j.Input,
                Label: j.Label
            });
            let _ = i.forwardRef((e, a) => {
                let {
                    bsPrefix: s,
                    className: t,
                    children: r,
                    controlId: n,
                    label: i,
                    ...o
                } = e;
                return s = (0, m.vE)(s, "form-floating"), (0, c.jsxs)(N, {
                    ref: a,
                    className: l()(t, s),
                    controlId: n,
                    ...o,
                    children: [r, (0, c.jsx)("label", {
                        htmlFor: n,
                        children: i
                    })]
                })
            });
            _.displayName = "FloatingLabel";
            let I = {
                    _ref: n().any,
                    validated: n().bool,
                    as: n().elementType
                },
                L = i.forwardRef((e, a) => {
                    let {
                        className: s,
                        validated: t,
                        as: r = "form",
                        ...n
                    } = e;
                    return (0, c.jsx)(r, { ...n,
                        ref: a,
                        className: l()(s, t && "was-validated")
                    })
                });
            L.displayName = "Form", L.propTypes = I;
            var T = Object.assign(L, {
                Group: N,
                Control: b,
                Floating: g,
                Check: j,
                Switch: R,
                Label: C,
                Text: E,
                Range: F,
                Select: w,
                FloatingLabel: _
            })
        },
        88665: function(e, a, s) {
            "use strict";
            s.d(a, {
                Z: function() {
                    return n
                }
            });
            var t = s(85893),
                l = s(9008),
                r = s.n(l);

            function n(e) {
                let {
                    title: a = "TesseractX"
                } = e;
                return (0, t.jsx)(r(), {
                    children: (0, t.jsx)("title", {
                        children: "".concat(a, " | ").concat("TesseractX")
                    })
                })
            }
            s(67294)
        },
        66884: function(e, a, s) {
            "use strict";
            s.r(a);
            var t = s(85893);
            s(41664);
            var l = s(33353),
                r = s(85955),
                n = s(97673),
                i = s(33275),
                c = s(67294),
                o = s(55066),
                d = s(16310),
                u = s(9473),
                m = s(45012),
                h = s(88665),
                f = s(59889),
                x = s(18720),
                p = s(24715);
            a.default = () => {
                let {
                    userDetails: e,
                    loading: a
                } = (0, u.v9)(m.n2), s = (0, u.I0)(), j = (0, o.TA)({
                    initialValues: {},
                    validationSchema: d.Ry().shape({
                        name: d.Z_().required("Name is required"),
                        email: d.Z_().email("Invalid email address").required("Email is required"),
                        subject: d.Z_().required("Subject is required"),
                        message: d.Z_().required("Message is required")
                    }),
                    onSubmit: async (e, a) => {
                        if (!0 === (await s((0, f.Z1)(e))).payload.success) {
                            p.FN.success("Message send successfully !"), a.resetForm();
                            let s = Object.fromEntries(Object.keys(e).map(a => "name" !== a ? [a, ""] : [a, e[a]]));
                            a.setValues(s)
                        }
                    }
                });
                return (0, c.useEffect)(() => {
                    e && (null == j || j.setValues(a => ({ ...a,
                        name: j.values.name || (null == e ? void 0 : e.name),
                        email: j.values.email || (null == e ? void 0 : e.email)
                    })))
                }, [e]), (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(h.Z, {
                        title: "Contact-us"
                    }), (0, t.jsxs)(i.Fd, {
                        className: "dark-mode-body",
                        children: [(0, t.jsx)(x.Z, {}), (0, t.jsx)(l.Z, {
                            children: (0, t.jsxs)("div", {
                                className: "contact-block-main",
                                children: [(0, t.jsx)("div", {
                                    className: "contact-block-main-left",
                                    children: (0, t.jsx)("div", {
                                        className: "last-contact-block",
                                        children: (0, t.jsx)("img", {
                                            src: "../../images/contact-us-img.png",
                                            alt: "contact-banner"
                                        })
                                    })
                                }), (0, t.jsxs)("div", {
                                    className: "contact-block-main-right",
                                    children: [(0, t.jsxs)("div", {
                                        className: "contact-title",
                                        children: [(0, t.jsx)("h2", {
                                            children: "Contact Us"
                                        }), (0, t.jsxs)("p", {
                                            children: ["You can reach us anytime via", " ", (0, t.jsx)("a", {
                                                href: "#",
                                                children: "Info@TesseractX.com"
                                            })]
                                        })]
                                    }), (0, t.jsx)(r.Z, {
                                        onSubmit: j.handleSubmit,
                                        children: (0, t.jsxs)("div", {
                                            className: "TXtype-details-wrapper",
                                            children: [(0, t.jsxs)(n.FormGroup, {
                                                children: [(0, t.jsx)(n.Label, {
                                                    children: "Full Name"
                                                }), (0, t.jsx)(n.Input, {
                                                    type: "text",
                                                    id: "name",
                                                    name: "name",
                                                    onChange: j.handleChange,
                                                    onBlur: j.handleBlur,
                                                    value: j.values.name,
                                                    placeholder: "Your Full Name"
                                                }), (j.touched.name || j.submitCount) && j.errors.name ? (0, t.jsx)("div", {
                                                    className: "text-danger",
                                                    children: j.errors.name
                                                }) : null]
                                            }), (0, t.jsxs)(n.FormGroup, {
                                                children: [(0, t.jsx)(n.Label, {
                                                    children: "Email Address"
                                                }), (0, t.jsx)(n.Input, {
                                                    type: "email",
                                                    id: "email",
                                                    name: "email",
                                                    onChange: j.handleChange,
                                                    onBlur: j.handleBlur,
                                                    value: j.values.email,
                                                    placeholder: "Email Address"
                                                }), (j.touched.email || j.submitCount) && j.errors.email ? (0, t.jsx)("div", {
                                                    className: "text-danger",
                                                    children: j.errors.email
                                                }) : null]
                                            }), (0, t.jsxs)(n.FormGroup, {
                                                children: [(0, t.jsx)(n.Label, {
                                                    children: "Subject"
                                                }), (0, t.jsx)(n.Input, {
                                                    type: "text",
                                                    id: "subject",
                                                    name: "subject",
                                                    onChange: j.handleChange,
                                                    onBlur: j.handleBlur,
                                                    value: j.values.subject,
                                                    placeholder: "Subject"
                                                }), (j.touched.subject || j.submitCount) && j.errors.subject ? (0, t.jsx)("div", {
                                                    className: "text-danger",
                                                    children: j.errors.subject
                                                }) : null]
                                            }), (0, t.jsxs)(n.FormGroup, {
                                                children: [(0, t.jsx)(n.Label, {
                                                    children: "Message"
                                                }), (0, t.jsx)(n.Input, {
                                                    as: "textarea",
                                                    id: "message",
                                                    name: "message",
                                                    onChange: j.handleChange,
                                                    onBlur: j.handleBlur,
                                                    value: j.values.message,
                                                    placeholder: "Message",
                                                    rows: 4
                                                }), (j.touched.message || j.submitCount) && j.errors.message ? (0, t.jsx)("div", {
                                                    className: "text-danger",
                                                    children: j.errors.message
                                                }) : null]
                                            }), (0, t.jsx)("div", {
                                                className: "button-contact",
                                                children: (0, t.jsx)(n.Button, {
                                                    type: "submit",
                                                    children: a ? "Loding..." : "Send message"
                                                })
                                            })]
                                        })
                                    })]
                                })]
                            })
                        })]
                    }), " "]
                })
            }
        },
        9008: function(e, a, s) {
            e.exports = s(7828)
        }
    },
    function(e) {
        e.O(0, [6705, 3275, 8720, 2888, 9774, 179], function() {
            return e(e.s = 12873)
        }), _N_E = e.O()
    }
]);