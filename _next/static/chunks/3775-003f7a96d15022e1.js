"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3775], {
        88665: function(e, t, a) {
            a.d(t, {
                Z: function() {
                    return s
                }
            });
            var l = a(85893),
                n = a(9008),
                o = a.n(n);

            function s(e) {
                let {
                    title: t = "TesseractX"
                } = e;
                return (0, l.jsx)(o(), {
                    children: (0, l.jsx)("title", {
                        children: "".concat(t, " | ").concat("TesseractX")
                    })
                })
            }
            a(67294)
        },
        48581: function(e, t, a) {
            var l = a(85893),
                n = a(45012),
                o = a(97673),
                s = a(67294),
                i = a(9473);
            t.Z = e => {
                let {
                    item: t,
                    handleFollow: a = () => {},
                    children: r
                } = e, {
                    walletDetalis: {
                        account: u
                    }
                } = (0, i.v9)(n.n2), [d, g] = (0, s.useState)(null == t ? void 0 : t.follow), {
                    recentFollowItem: c
                } = (0, i.v9)(n.n2);
                return (0, s.useEffect)(() => {
                    (null == t ? void 0 : t.address) === (null == c ? void 0 : c.id) && g(null == c ? void 0 : c.follow)
                }, [c, t]), (0, l.jsx)(l.Fragment, {
                    children: u !== (null == t ? void 0 : t.address) && (0, l.jsxs)(o.Button, {
                        isBorderBtn: !0,
                        className: "button-following",
                        onClick: () => a(t.address),
                        children: [r, (0, l.jsx)("span", {
                            children: d ? "Following" : "Follow"
                        })]
                    })
                })
            }
        },
        7226: function(e, t, a) {
            a.d(t, {
                $x: function() {
                    return C
                },
                Os: function() {
                    return T
                },
                UJ: function() {
                    return y
                },
                mh: function() {
                    return h
                },
                ms: function() {
                    return m
                },
                zL: function() {
                    return E
                },
                zW: function() {
                    return N
                }
            });
            var l = a(86249),
                n = a(9473),
                o = a(67294),
                s = a(55066),
                i = a(59889),
                r = a(45012),
                u = a(1961),
                d = a(11163),
                g = a(24486),
                c = a(24715),
                p = a(16310);
            let A = {
                    SEARCH: "SERACH",
                    ACCOUNTCHANGE: "ACCOUNTCHANGE",
                    TYPECHANGE: "TYPECHANGE",
                    ORDERCHANGE: "ORDERCHANGE",
                    PAGECHANGE: "PAGECHANGE",
                    STOREDATA: "STOREDATA",
                    STARTLOADING: "STARTLOADING",
                    LIMITCHANGE: "LIMITCHANGE",
                    RESET: "RESET"
                },
                E = () => {
                    let {
                        account: e,
                        sdk: t,
                        library: a,
                        chainId: d
                    } = (0, l.a)(), {
                        userDetails: g
                    } = (0, n.v9)(r.n2), A = (0, n.I0)(), [E, m] = (0, o.useState)(1), [C, T] = (0, o.useState)(!1), [N, y] = (0, o.useState)(""), [h, v] = (0, o.useState)(!1), f = p.Ry().shape({
                        name: p.Z_().required("Name is required").matches(/^[a-z0-9_]+$/, "Name must contain only lowercase letters and numbers").test("unique", "Name is already taken", function() {
                            return h
                        })
                    }), G = (0, s.TA)({
                        initialValues: {
                            name: "",
                            email: "",
                            profilePic: "",
                            bannerPic: "",
                            bio: "",
                            instagram: "",
                            twitter: "",
                            discord: "",
                            telegram: "",
                            other: "",
                            originalLogo: "",
                            lowLogo: "",
                            mediumLogo: "",
                            highLogo: "",
                            banners: "",
                            bannerUrl: "",
                            signature: "",
                            usePns: "",
                            useDomain: ""
                        },
                        validationSchema: f,
                        onSubmit: async (e, a) => {
                            A((0, i.LJ)({
                                payload: e,
                                sdk: t,
                                fileRatio: E
                            }))
                        },
                        validateOnChange: !0
                    });
                    (0, o.useEffect)(() => {
                        g && (null == G || G.setValues(e => ({ ...e,
                            name: G.values.name || (null == g ? void 0 : g.name),
                            email: G.values.email || (null == g ? void 0 : g.email),
                            bio: G.values.bio || (null == g ? void 0 : g.bio),
                            instagram: G.values.instagram || (null == g ? void 0 : g.instagram),
                            twitter: G.values.twitter || (null == g ? void 0 : g.twitter),
                            discord: G.values.discord || (null == g ? void 0 : g.discord),
                            telegram: G.values.telegram || (null == g ? void 0 : g.telegram),
                            other: G.values.other || (null == g ? void 0 : g.other),
                            originalLogo: (null == g ? void 0 : g.originalLogo) ? g.originalLogo : "",
                            lowLogo: (null == g ? void 0 : g.lowLogo) ? null == g ? void 0 : g.lowLogo : "",
                            mediumLogo: "",
                            highLogo: (null == g ? void 0 : g.highLogo) ? null == g ? void 0 : g.highLogo : "",
                            bannerUrl: "",
                            usePns: (null == g ? void 0 : g.usePns) ? null == g ? void 0 : g.usePns : "No",
                            useDomain: (null == g ? void 0 : g.useDomain) ? null == g ? void 0 : g.useDomain : ""
                        })))
                    }, [g]), (0, o.useEffect)(() => {
                        e && (G.resetForm(), A((0, i._j)({
                            account: e
                        })))
                    }, [e]), (0, o.useEffect)(() => {
                        var e, t, a;
                        let l;
                        return (null === (e = G.values) || void 0 === e ? void 0 : e.name) == g.name ? v(!0) : (null === (a = G.values) || void 0 === a ? void 0 : null === (t = a.name) || void 0 === t ? void 0 : t.trim()) !== "" ? l = setTimeout(() => {
                            P(G.values.name)
                        }, 300) : v(!1), () => clearTimeout(l)
                    }, [G.values.name]);
                    let P = async t => {
                        try {
                            let {
                                data: a
                            } = await (0, u.mE)({
                                name: t,
                                account: e
                            });
                            v(a.unique)
                        } catch (e) {
                            console.error("Error checking name uniqueness:", e)
                        }
                    };
                    return {
                        formik: G,
                        addFCM: async e => {
                            A((0, i.Kq)({
                                fcmToken: e,
                                sdk: t
                            }))
                        },
                        updateNotification: async (e, a) => {
                            A((0, i.vH)({
                                sdk: t,
                                mainObj: e,
                                dataObj: a
                            }))
                        },
                        nameLoading: C,
                        unique: h,
                        handleFileChange: function(e) {
                            let {
                                files: t
                            } = e.target;
                            if (t.length) {
                                if ("profilePic" === e.target.name) {
                                    if (t[0].size > 4e6) {
                                        c.FN.error("The asset should not be more than 4MB"), e.target.value = "";
                                        return
                                    }
                                    if ("image" === t[0].type.split("/")[0]) {
                                        G.setFieldValue("profilePic", t[0]);
                                        var a = new Image;
                                        a.src = URL.createObjectURL(t[0]), a.onload = function() {
                                            A((0, r.kW)({
                                                profileImage: URL.createObjectURL(t[0])
                                            })), URL.revokeObjectURL(a.src), m(a.height / a.width)
                                        }
                                    } else c.FN.error("Unsupported Type")
                                }
                                if ("banners" === e.target.name) {
                                    if ((null == g ? void 0 : g.bannerUrl) instanceof Blob && URL.revokeObjectURL(null == g ? void 0 : g.bannerUrl), "image" === t[0].type.split("/")[0]) {
                                        G.setFieldValue("banners", t[0]);
                                        var a = new Image;
                                        a.src = URL.createObjectURL(t[0]), a.onload = function() {
                                            A((0, r.KG)({
                                                bannerUrl: URL.createObjectURL(t[0])
                                            })), URL.revokeObjectURL(a.src), m(a.height / a.width)
                                        }
                                    } else c.FN.error("Unsupported Type")
                                }
                            }
                        },
                        handleRadioChange: e => {
                            y(e.target.value), G.setFieldValue("useDomain", e.target.value)
                        }
                    }
                },
                m = () => {
                    let {
                        walletDetalis: {
                            account: e,
                            chainId: t,
                            status: a
                        }
                    } = (0, n.v9)(r.n2), [l, s] = (0, o.useReducer)((a, l) => {
                        let {
                            type: n,
                            payload: o
                        } = l;
                        switch (n) {
                            case A.PAGECHANGE:
                                return { ...a,
                                    state: A.PAGECHANGE,
                                    page: a.page + 1
                                };
                            case A.SEARCH:
                                return { ...a,
                                    state: A.SEARCH,
                                    page: 1,
                                    events: [],
                                    payload: { ...a.payload,
                                        search: o
                                    }
                                };
                            case A.RESET:
                                return { ...a,
                                    state: A.RESET,
                                    page: 1,
                                    events: [],
                                    payload: { ...a.payload,
                                        search: "",
                                        event: ""
                                    }
                                };
                            case A.TYPECHANGE:
                                return { ...a,
                                    state: A.TYPECHANGE,
                                    page: 1,
                                    events: [],
                                    payload: { ...a.payload,
                                        event: o
                                    }
                                };
                            case A.ACCOUNTCHANGE:
                                return { ...a,
                                    state: A.ACCOUNTCHANGE,
                                    page: 1,
                                    events: [],
                                    payload: { ...a.payload,
                                        account: e,
                                        chainId: t
                                    }
                                };
                            case A.STARTLOADING:
                                return { ...a,
                                    state: null,
                                    loading: !0
                                };
                            case A.STOREDATA:
                                return { ...a,
                                    state: null,
                                    events: 1 === a.page ? o.items : [...a.events, ...o.items],
                                    count: o.count,
                                    totalPages: o.totalPages,
                                    hasMore: (null == o ? void 0 : o.totalPages) > a.page,
                                    loading: !1
                                };
                            default:
                                return a
                        }
                    }, {
                        loading: !1,
                        events: [],
                        count: 0,
                        totalPages: 0,
                        page: 1,
                        limit: 8,
                        state: null,
                        hasMore: !1,
                        payload: {
                            search: "",
                            event: "",
                            eventNames: ["Purchase", "Offer", "Bids", "Following", "Like", "Minted"]
                        }
                    }), i = async () => {
                        if (!l.state) return;
                        s({
                            type: A.STARTLOADING
                        });
                        let e = { ...l.payload,
                                page: l.page,
                                limit: l.limit,
                                chainId: t
                            },
                            {
                                data: a
                            } = await (0, u.tP)(e);
                        s({
                            type: A.STOREDATA,
                            payload: {
                                items: a.data,
                                count: a.count,
                                totalPages: a.totalPages,
                                page: a.page
                            }
                        })
                    };
                    return (0, o.useEffect)(() => {
                        a && s({
                            type: A.ACCOUNTCHANGE
                        })
                    }, [a, e, t]), (0, o.useEffect)(() => {
                        let t;
                        if (e) return l.state === A.SEARCH ? t = setTimeout(() => {
                            i()
                        }, 800) : i(), () => clearTimeout(t)
                    }, [l]), { ...l,
                        eventsNames: [{
                            label: "Minted",
                            value: "Minted"
                        }, {
                            label: "Listing",
                            value: "Listing"
                        }, {
                            label: "UnFollow",
                            value: "UnFollow"
                        }, {
                            label: "Transfer",
                            value: "Transfer"
                        }, {
                            label: "Following",
                            value: "Following"
                        }, {
                            label: "Offer",
                            value: "Offer"
                        }, {
                            label: "Auction",
                            value: "Auction"
                        }],
                        account: e,
                        filterChange: e => {
                            let t = e !== l.payload.event ? e : "";
                            s({
                                type: A.TYPECHANGE,
                                payload: t
                            })
                        },
                        handlePageChange: () => {
                            s({
                                type: A.PAGECHANGE
                            })
                        },
                        handleSearch: e => {
                            s({
                                type: A.SEARCH,
                                payload: e.target.value
                            })
                        },
                        resetHandler: () => {
                            s({
                                type: A.RESET
                            })
                        }
                    }
                },
                C = () => {
                    let {
                        walletDetalis: {
                            account: e,
                            chainId: t,
                            status: a
                        }
                    } = (0, n.v9)(r.n2), [l, s] = (0, o.useReducer)((a, l) => {
                        let {
                            type: n,
                            payload: o
                        } = l;
                        switch (n) {
                            case A.PAGECHANGE:
                                return { ...a,
                                    state: A.PAGECHANGE,
                                    page: a.page + 1
                                };
                            case A.ACCOUNTCHANGE:
                                return { ...a,
                                    state: A.ACCOUNTCHANGE,
                                    page: 1,
                                    payload: { ...a.payload,
                                        account: e,
                                        chainId: t
                                    }
                                };
                            case A.STARTLOADING:
                                return { ...a,
                                    state: null,
                                    loading: !0
                                };
                            case A.STOREDATA:
                                return { ...a,
                                    state: null,
                                    items: 1 === a.page ? o.items : [...a.items, ...o.items],
                                    count: o.count,
                                    totalPages: o.totalPages,
                                    hasMore: (null == o ? void 0 : o.totalPages) > a.page,
                                    loading: !1
                                };
                            default:
                                return a
                        }
                    }, {
                        loading: !1,
                        items: [],
                        count: 0,
                        totalPages: 0,
                        page: 1,
                        limit: 6,
                        hasMore: !1,
                        state: null,
                        payload: {
                            search: ""
                        }
                    }), i = async () => {
                        if (!l.state) return;
                        s({
                            type: A.STARTLOADING
                        });
                        let e = { ...l.payload,
                                page: l.page,
                                limit: l.limit,
                                chainId: t
                            },
                            {
                                data: a
                            } = await (0, u.Cw)(e);
                        s({
                            type: A.STOREDATA,
                            payload: {
                                items: a.data,
                                count: a.count,
                                totalPages: a.totalPages,
                                page: a.page
                            }
                        })
                    };
                    return (0, o.useEffect)(() => {
                        a && s({
                            type: A.ACCOUNTCHANGE
                        })
                    }, [a, e, t]), (0, o.useEffect)(() => {
                        e && i()
                    }, [l]), { ...l,
                        handlePageChange: () => {
                            s({
                                type: A.PAGECHANGE
                            })
                        }
                    }
                },
                T = () => {
                    let {
                        walletDetalis: {
                            account: e
                        }
                    } = (0, n.v9)(r.n2), t = (0, n.I0)();
                    return {
                        handleFollow: a => {
                            if (!e) return c.FN.error("Please connect your wallet");
                            t((0, i.x6)({
                                follower: a,
                                followedBy: e
                            }))
                        }
                    }
                },
                N = () => {
                    let {
                        walletDetalis: {
                            account: e,
                            chainId: t,
                            status: a
                        }
                    } = (0, n.v9)(r.n2), [l, s] = (0, o.useReducer)((a, l) => {
                        let {
                            type: n,
                            payload: o
                        } = l;
                        switch (n) {
                            case A.PAGECHANGE:
                                return { ...a,
                                    state: A.PAGECHANGE,
                                    page: Math.ceil(a.items.length / a.defaultLimit) + 1,
                                    limit: a.defaultLimit
                                };
                            case A.ORDERCHANGE:
                                return { ...a,
                                    state: A.ORDERCHANGE,
                                    page: 1,
                                    limit: a.items.length,
                                    payload: { ...a.payload,
                                        sortBy: o.sortBy,
                                        sort: o.order
                                    }
                                };
                            case A.ACCOUNTCHANGE:
                                return { ...a,
                                    state: A.ACCOUNTCHANGE,
                                    page: 1,
                                    limit: a.defaultLimit,
                                    payload: { ...a.payload,
                                        account: e,
                                        chainId: t
                                    }
                                };
                            case A.STARTLOADING:
                                return { ...a,
                                    state: null,
                                    loading: !0
                                };
                            case A.STOREDATA:
                                return { ...a,
                                    state: null,
                                    items: 1 === a.page ? o.items : [...a.items, ...o.items],
                                    count: o.count,
                                    totalPages: o.totalPages,
                                    hasMore: (null == o ? void 0 : o.totalPages) > a.page,
                                    loading: !1
                                };
                            default:
                                return a
                        }
                    }, {
                        loading: !1,
                        items: [],
                        count: 0,
                        totalPages: 0,
                        page: 1,
                        limit: 8,
                        defaultLimit: 8,
                        hasMore: !1,
                        state: null,
                        payload: {
                            account: "",
                            chainId: "",
                            sortBy: "",
                            sort: ""
                        }
                    }), i = async () => {
                        if (!l.state) return;
                        s({
                            type: A.STARTLOADING
                        });
                        let e = { ...l.payload,
                                page: l.page,
                                limit: l.limit,
                                chainId: t
                            },
                            {
                                data: a
                            } = await (0, u.IT)(e);
                        s({
                            type: A.STOREDATA,
                            payload: {
                                items: a.data,
                                count: a.count,
                                totalPages: a.totalPages,
                                page: a.page
                            }
                        })
                    };
                    return (0, o.useEffect)(() => {
                        a && s({
                            type: A.ACCOUNTCHANGE
                        })
                    }, [a, e, t]), (0, o.useEffect)(() => {
                        e && i()
                    }, [l]), { ...l,
                        handlePageChange: () => {
                            s({
                                type: A.PAGECHANGE
                            })
                        },
                        handleSorting: e => {
                            let t = e !== l.payload.sortBy ? "ASC" : "DESC" !== l.payload.sort ? "DESC" : "ASC";
                            s({
                                type: A.ORDERCHANGE,
                                payload: {
                                    order: t,
                                    sortBy: e
                                }
                            })
                        }
                    }
                },
                y = () => {
                    let {
                        walletDetalis: {
                            account: e,
                            chainId: t,
                            status: a
                        }
                    } = (0, n.v9)(r.n2), l = (0, d.useRouter)(), [s, i] = (0, o.useReducer)((a, l) => {
                        let {
                            type: n,
                            payload: o
                        } = l;
                        switch (n) {
                            case A.PAGECHANGE:
                                return { ...a,
                                    state: A.PAGECHANGE,
                                    page: a.page + 1
                                };
                            case A.LIMITCHANGE:
                                return { ...a,
                                    state: A.LIMITCHANGE,
                                    page: 1,
                                    limit: o.limit
                                };
                            case A.TYPECHANGE:
                                return { ...a,
                                    state: A.TYPECHANGE,
                                    page: 1,
                                    payload: { ...a.payload,
                                        itemStatus: o.itemStatus
                                    }
                                };
                            case A.ACCOUNTCHANGE:
                                return { ...a,
                                    state: A.ACCOUNTCHANGE,
                                    page: 1,
                                    payload: { ...a.payload,
                                        ownerAddress: e,
                                        chainId: t
                                    }
                                };
                            case A.STARTLOADING:
                                return { ...a,
                                    state: null,
                                    loading: !0
                                };
                            case A.STOREDATA:
                                return { ...a,
                                    state: null,
                                    items: 1 === a.page ? o.items : [...a.items, ...o.items],
                                    count: o.count,
                                    totalPages: o.totalPages,
                                    hasMore: (null == o ? void 0 : o.totalPages) > a.page,
                                    loading: !1
                                };
                            default:
                                return a
                        }
                    }, {
                        loading: !1,
                        items: [],
                        count: 0,
                        totalPages: 0,
                        page: 1,
                        limit: 10,
                        hasMore: !1,
                        state: null,
                        payload: {
                            ownerAddress: "",
                            itemStatus: []
                        }
                    }), c = async () => {
                        if (!s.state) return;
                        i({
                            type: A.STARTLOADING
                        });
                        let e = { ...s.payload,
                                page: s.page,
                                limit: s.limit,
                                chainId: t
                            },
                            {
                                data: a
                            } = await (0, u.AB)(e);
                        i({
                            type: A.STOREDATA,
                            payload: {
                                items: a.data,
                                count: a.count,
                                totalPages: a.totalPages,
                                page: a.page
                            }
                        })
                    };
                    return (0, o.useEffect)(() => {
                        a && i({
                            type: A.ACCOUNTCHANGE
                        })
                    }, [a, e, t]), (0, o.useEffect)(() => {
                        console.log("stateChanged", s), e && c()
                    }, [s]), { ...s,
                        handlePageChange: () => {
                            i({
                                type: A.PAGECHANGE
                            })
                        },
                        handleRouteChange: e => {
                            e && l.push(g.v.explore.collection(e))
                        },
                        handleLimitChange: e => {
                            i({
                                type: A.LIMITCHANGE,
                                payload: {
                                    limit: e
                                }
                            })
                        },
                        handleFilterChange: e => {
                            let t = [e.target.value];
                            i({
                                type: A.TYPECHANGE,
                                payload: {
                                    itemStatus: t
                                }
                            })
                        }
                    }
                },
                h = () => {
                    let {
                        walletDetalis: {
                            account: e,
                            chainId: t,
                            status: a
                        }
                    } = (0, n.v9)(r.n2);
                    (0, d.useRouter)();
                    let [l, s] = (0, o.useReducer)((a, l) => {
                        let {
                            type: n,
                            payload: o
                        } = l;
                        switch (n) {
                            case A.PAGECHANGE:
                                return { ...a,
                                    state: A.PAGECHANGE,
                                    page: a.page + 1
                                };
                            case A.LIMITCHANGE:
                                return { ...a,
                                    state: A.LIMITCHANGE,
                                    page: 1,
                                    limit: o.limit
                                };
                            case A.TYPECHANGE:
                                return { ...a,
                                    state: A.TYPECHANGE,
                                    page: 1,
                                    payload: { ...a.payload,
                                        nftStatus: o
                                    }
                                };
                            case A.ACCOUNTCHANGE:
                                return { ...a,
                                    state: A.ACCOUNTCHANGE,
                                    page: 1,
                                    payload: { ...a.payload,
                                        owner: e,
                                        chainId: t
                                    }
                                };
                            case A.STARTLOADING:
                                return { ...a,
                                    state: null,
                                    loading: !0
                                };
                            case A.STOREDATA:
                                return { ...a,
                                    state: null,
                                    items: 1 === a.page ? o.items : [...a.items, ...o.items],
                                    count: o.count,
                                    totalPages: o.totalPages,
                                    hasMore: (null == o ? void 0 : o.totalPages) > a.page,
                                    loading: !1
                                };
                            default:
                                return a
                        }
                    }, {
                        loading: !1,
                        items: [],
                        count: 0,
                        totalPages: 0,
                        page: 1,
                        limit: 10,
                        hasMore: !1,
                        state: null,
                        payload: {
                            owner: e,
                            nftStatus: [],
                            extraFilter: "Default"
                        }
                    }), i = async () => {
                        if (!l.state) return;
                        s({
                            type: A.STARTLOADING
                        });
                        let e = { ...l.payload,
                                page: l.page,
                                limit: l.limit,
                                chainId: t
                            },
                            {
                                data: a
                            } = await (0, u.wg)(e);
                        s({
                            type: A.STOREDATA,
                            payload: {
                                items: a.data,
                                count: a.count,
                                totalPages: a.totalPages,
                                page: a.page
                            }
                        })
                    };
                    return (0, o.useEffect)(() => {
                        a && s({
                            type: A.ACCOUNTCHANGE
                        })
                    }, [a, e, t]), (0, o.useEffect)(() => {
                        e && i()
                    }, [l]), { ...l,
                        handlePageChange: () => {
                            s({
                                type: A.PAGECHANGE
                            })
                        },
                        handleLimitChange: e => {
                            s({
                                type: A.LIMITCHANGE,
                                payload: {
                                    limit: e
                                }
                            })
                        },
                        handleFilterChange: e => {
                            let {
                                value: t
                            } = e;
                            s({
                                type: A.TYPECHANGE,
                                payload: "All" == t ? [] : [t]
                            })
                        }
                    }
                }
        }
    }
]);