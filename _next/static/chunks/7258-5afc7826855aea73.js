"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7258], {
        17258: function(e, a, t) {
            t.d(a, {
                Ce: function() {
                    return g
                },
                Kx: function() {
                    return y
                },
                MD: function() {
                    return m
                },
                SC: function() {
                    return O
                },
                V9: function() {
                    return h
                },
                W1: function() {
                    return R
                },
                Xk: function() {
                    return C
                },
                Y0: function() {
                    return T
                },
                a4: function() {
                    return N
                },
                eo: function() {
                    return P
                },
                hd: function() {
                    return S
                },
                m9: function() {
                    return G
                },
                o1: function() {
                    return v
                },
                vU: function() {
                    return H
                }
            });
            var l = t(34965),
                o = t(45012),
                r = t(70830),
                n = t(1961),
                s = t(40985),
                i = t(30186),
                u = t(11163),
                p = t(67294),
                d = t(9473),
                E = t(24715),
                c = t(86249);
            let A = {
                    PRICECHANGE: "PRICECHANGE",
                    SEARCH: "SERACH",
                    ACCOUNTCHANGE: "ACCOUNTCHANGE",
                    SETCOLLECTION: "SETCOLLECTION",
                    CATEGORYSELECT: "CATEGORYSELECT",
                    TYPECHANGE: "TYPECHANGE",
                    ORDERCHANGE: "ORDERCHANGE",
                    EXTRAFILTER: "EXTRAFILTER",
                    PAGECHANGE: "PAGECHANGE",
                    STOREDATA: "STOREDATA",
                    STARTLOADING: "STARTLOADING",
                    STOPLOADING: "STOPLOADING",
                    QUERYCHANGE: "QUERYCHANGE",
                    ATTIBUTESELECT: "ATTIBUTESELECT",
                    RESETPRICECHANGE: "RESETPRICECHANGE"
                },
                C = () => {
                    var e, a;
                    let {
                        categorys: t,
                        walletDetalis: {
                            account: r,
                            chainId: n,
                            status: i
                        }
                    } = (0, d.v9)(o.n2), [u, E] = (0, p.useState)([]), c = {
                        loading: !1,
                        items: [],
                        count: 0,
                        totalPages: 0,
                        page: 1,
                        limit: 8,
                        state: null,
                        hasMore: !1,
                        priceArray: [],
                        topAuction: {},
                        payload: {
                            extraFilter: null === (e = l.Cc[0]) || void 0 === e ? void 0 : e.value,
                            account: r,
                            chainId: n,
                            category: [],
                            standard: null === (a = l.dl[0]) || void 0 === a ? void 0 : a.value,
                            search: "",
                            price: {
                                min: "",
                                max: ""
                            }
                        }
                    }, [C, y] = (0, p.useReducer)((e, a) => {
                        let {
                            type: t,
                            payload: l
                        } = a;
                        switch (t) {
                            case A.ORDERCHANGE:
                                return { ...e,
                                    state: A.ORDERCHANGE,
                                    page: 1,
                                    payload: { ...e.payload,
                                        extraFilter: l
                                    }
                                };
                            case A.CATEGORYSELECT:
                                return { ...e,
                                    state: A.CATEGORYSELECT,
                                    page: 1,
                                    payload: { ...e.payload,
                                        category: l
                                    }
                                };
                            case A.PAGECHANGE:
                                return { ...e,
                                    state: A.PAGECHANGE,
                                    page: e.page + 1
                                };
                            case A.ACCOUNTCHANGE:
                                return { ...e,
                                    state: A.ACCOUNTCHANGE,
                                    page: 1,
                                    payload: { ...e.payload,
                                        account: r,
                                        chainId: n
                                    }
                                };
                            case A.STARTLOADING:
                                return { ...e,
                                    state: null,
                                    loading: !0
                                };
                            case A.PRICECHANGE:
                                return { ...e,
                                    state: A.PRICECHANGE,
                                    page: 1,
                                    payload: { ...e.payload,
                                        price: {
                                            min: l[0],
                                            max: l[1]
                                        }
                                    }
                                };
                            case A.RESETPRICECHANGE:
                                return { ...e,
                                    state: A.PRICECHANGE,
                                    page: 1,
                                    priceArray: [],
                                    payload: { ...e.payload,
                                        price: {
                                            min: "",
                                            max: ""
                                        }
                                    }
                                };
                            case A.SEARCH:
                                return { ...e,
                                    state: A.SEARCH,
                                    page: 1,
                                    payload: { ...e.payload,
                                        search: l
                                    }
                                };
                            case A.TYPECHANGE:
                                return { ...e,
                                    state: A.TYPECHANGE,
                                    page: 1,
                                    payload: { ...e.payload,
                                        standard: l
                                    }
                                };
                            case A.STOREDATA:
                                return { ...e,
                                    state: null,
                                    items: 1 === e.page ? l.items : [...e.items, ...l.items],
                                    count: l.count,
                                    totalPages: l.totalPages,
                                    hasMore: (null == l ? void 0 : l.totalPages) > e.page,
                                    minPrice: null == l ? void 0 : l.minPrice,
                                    maxPrice: null == l ? void 0 : l.maxPrice,
                                    priceArray: null == l ? void 0 : l.priceArray,
                                    topAuction: null == l ? void 0 : l.topAuction,
                                    loading: !1
                                };
                            default:
                                return e
                        }
                    }, c), g = async function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        y({
                            type: A.STARTLOADING
                        });
                        let a = { ...C.payload,
                                page: e ? 1 : C.page,
                                status: "Created",
                                limit: C.limit,
                                account: r,
                                chainId: n
                            },
                            {
                                data: t
                            } = await (0, s.Js)(a);
                        y({
                            type: A.STOREDATA,
                            payload: {
                                items: t.data,
                                count: t.count,
                                totalPages: t.totalPages,
                                minPrice: t.minPrice,
                                maxPrice: t.maxPrice,
                                priceArray: t.priceArray,
                                topAuction: t.topAuction
                            }
                        })
                    };
                    return (0, p.useEffect)(() => {
                        i && y({
                            type: A.ACCOUNTCHANGE
                        })
                    }, [i, r, n]), (0, p.useEffect)(() => {
                        let e;
                        if (C.state) return C.state === A.SEARCH ? e = setTimeout(() => {
                            g()
                        }, 800) : g(), () => clearTimeout(e)
                    }, [C]), { ...C,
                        categorys: t,
                        filterOptions: l.dl,
                        orderOptions: l.Cc,
                        getData: g,
                        setPriceFilter: E,
                        priceFilter: u,
                        orderChange: e => {
                            y({
                                type: A.ORDERCHANGE,
                                payload: e.value
                            })
                        },
                        handleCategorySelect: e => {
                            var a, t;
                            let l;
                            l = e.target.checked ? [...(null == C ? void 0 : null === (a = C.payload) || void 0 === a ? void 0 : a.category) || [], e.target.value] : ((null == C ? void 0 : null === (t = C.payload) || void 0 === t ? void 0 : t.category) || []).filter(a => a !== e.target.value), y({
                                type: A.CATEGORYSELECT,
                                payload: l
                            })
                        },
                        handlePageChange: () => {
                            y({
                                type: A.PAGECHANGE
                            })
                        },
                        handleSearch: e => {
                            y({
                                type: A.SEARCH,
                                payload: e.target.value
                            })
                        },
                        typeChange: e => {
                            y({
                                type: A.TYPECHANGE,
                                payload: e.value
                            })
                        },
                        handlePriceChange: e => {
                            e.length || y({
                                type: A.RESETPRICECHANGE
                            }), y({
                                type: A.PRICECHANGE,
                                payload: e
                            })
                        }
                    }
                },
                y = e => {
                    var a, t;
                    let {
                        onlyOwners: n = !1,
                        standard: s,
                        useMetaMaskChainId: i = !1
                    } = e, {
                        categorys: u,
                        walletDetalis: {
                            account: E,
                            chainId: C,
                            status: y
                        }
                    } = (0, d.v9)(o.n2), {
                        chainId: g
                    } = (0, c.a)(), T = i ? g : C, N = {
                        loading: !1,
                        items: [],
                        count: 0,
                        totalPages: 0,
                        page: 1,
                        state: null,
                        hasMore: !1,
                        priceArray: [],
                        payload: {
                            extraFilter: null === (a = l.Cc[0]) || void 0 === a ? void 0 : a.value,
                            account: E,
                            chainId: T,
                            category: [],
                            standard: null === (t = l.dl[0]) || void 0 === t ? void 0 : t.value,
                            search: "",
                            price: {
                                min: "",
                                max: ""
                            }
                        }
                    }, [G, R] = (0, p.useReducer)((e, a) => {
                        let {
                            type: t,
                            payload: l
                        } = a;
                        switch (t) {
                            case A.ORDERCHANGE:
                                return { ...e,
                                    state: A.ORDERCHANGE,
                                    page: 1,
                                    payload: { ...e.payload,
                                        extraFilter: l
                                    }
                                };
                            case A.CATEGORYSELECT:
                                return { ...e,
                                    state: A.CATEGORYSELECT,
                                    page: 1,
                                    payload: { ...e.payload,
                                        category: l
                                    }
                                };
                            case A.PAGECHANGE:
                                return { ...e,
                                    state: A.PAGECHANGE,
                                    page: e.page + 1
                                };
                            case A.ACCOUNTCHANGE:
                                let o = { ...e,
                                    state: A.ACCOUNTCHANGE,
                                    page: 1,
                                    payload: { ...e.payload,
                                        account: E,
                                        chainId: T
                                    }
                                };
                                return l && (o.payload.standard = l), o;
                            case A.STARTLOADING:
                                return { ...e,
                                    state: null,
                                    loading: !0
                                };
                            case A.SEARCH:
                                return { ...e,
                                    state: A.SEARCH,
                                    page: 1,
                                    payload: { ...e.payload,
                                        search: l
                                    }
                                };
                            case A.TYPECHANGE:
                                return { ...e,
                                    state: A.TYPECHANGE,
                                    page: 1,
                                    payload: { ...e.payload,
                                        standard: l
                                    }
                                };
                            case A.STOREDATA:
                                return { ...e,
                                    state: null,
                                    items: 1 === e.page ? l.items : [...e.items, ...l.items],
                                    count: l.count,
                                    totalPages: l.totalPages,
                                    hasMore: (null == l ? void 0 : l.totalPages) > e.page,
                                    loading: !1
                                };
                            default:
                                return e
                        }
                    }, N), H = async () => {
                        if (!G.state) return;
                        let e = { ...G.payload,
                            page: G.page,
                            account: E,
                            chainId: T
                        };
                        if (n) {
                            if (!E) return;
                            e.ownerAddress = E
                        }
                        R({
                            type: A.STARTLOADING
                        });
                        let {
                            data: a
                        } = await (0, r.vU)(e);
                        R({
                            type: A.STOREDATA,
                            payload: {
                                items: a.data || [],
                                count: a.count,
                                totalPages: a.totalPages
                            }
                        })
                    };
                    return (0, p.useEffect)(() => {
                        y && R({
                            type: A.ACCOUNTCHANGE,
                            payload: s
                        })
                    }, [y, E, T, s]), (0, p.useEffect)(() => {
                        let e;
                        return G.state === A.SEARCH ? e = setTimeout(() => {
                            H()
                        }, 800) : H(), () => clearTimeout(e)
                    }, [G]), { ...G,
                        categorys: u,
                        filterOptions: l.dl,
                        orderOptions: l.Cc,
                        orderChange: e => {
                            R({
                                type: A.ORDERCHANGE,
                                payload: e.value
                            })
                        },
                        handleCategorySelect: e => {
                            var a, t;
                            let l;
                            l = e.target.checked ? [...(null == G ? void 0 : null === (a = G.payload) || void 0 === a ? void 0 : a.category) || [], e.target.value] : ((null == G ? void 0 : null === (t = G.payload) || void 0 === t ? void 0 : t.category) || []).filter(a => a !== e.target.value), R({
                                type: A.CATEGORYSELECT,
                                payload: l
                            })
                        },
                        handlePageChange: () => {
                            R({
                                type: A.PAGECHANGE
                            })
                        },
                        handleSearch: e => {
                            R({
                                type: A.SEARCH,
                                payload: e.target.value
                            })
                        },
                        typeChange: e => {
                            R({
                                type: A.TYPECHANGE,
                                payload: e.value
                            })
                        }
                    }
                },
                g = () => {
                    var e, a;
                    let {
                        categorys: t,
                        walletDetalis: {
                            account: r,
                            chainId: n,
                            status: i
                        }
                    } = (0, d.v9)(o.n2), [u, c] = (0, p.useState)([]), C = {
                        loading: !1,
                        items: [],
                        count: 0,
                        totalPages: 0,
                        page: 1,
                        limit: 16,
                        state: null,
                        hasMore: !1,
                        priceArray: [],
                        payload: {
                            itemCollection: "",
                            extraFilter: null === (e = l.Cc[0]) || void 0 === e ? void 0 : e.value,
                            account: r,
                            chainId: n,
                            category: [],
                            itemStatus: [],
                            standard: null === (a = l.dl[0]) || void 0 === a ? void 0 : a.value,
                            search: "",
                            price: {
                                min: "",
                                max: ""
                            }
                        }
                    }, [y, g] = (0, p.useReducer)((e, a) => {
                        let {
                            type: t,
                            payload: l
                        } = a;
                        switch (t) {
                            case A.ORDERCHANGE:
                                return { ...e,
                                    state: A.ORDERCHANGE,
                                    page: 1,
                                    payload: { ...e.payload,
                                        extraFilter: l
                                    }
                                };
                            case A.CATEGORYSELECT:
                                return { ...e,
                                    state: A.CATEGORYSELECT,
                                    page: 1,
                                    payload: { ...e.payload,
                                        category: l
                                    }
                                };
                            case A.PAGECHANGE:
                                return { ...e,
                                    state: A.PAGECHANGE,
                                    page: e.page + 1
                                };
                            case A.ACCOUNTCHANGE:
                                return { ...e,
                                    state: A.ACCOUNTCHANGE,
                                    page: 1,
                                    payload: { ...e.payload,
                                        account: r,
                                        chainId: n
                                    }
                                };
                            case A.STARTLOADING:
                                return { ...e,
                                    state: null,
                                    loading: !0
                                };
                            case A.PRICECHANGE:
                                return { ...e,
                                    state: A.PRICECHANGE,
                                    page: 1,
                                    payload: { ...e.payload,
                                        price: {
                                            min: l[0],
                                            max: l[1]
                                        }
                                    }
                                };
                            case A.RESETPRICECHANGE:
                                return { ...e,
                                    state: A.PRICECHANGE,
                                    page: 1,
                                    priceArray: [],
                                    payload: { ...e.payload,
                                        price: {
                                            min: "",
                                            max: ""
                                        }
                                    }
                                };
                            case A.SEARCH:
                                return { ...e,
                                    state: A.SEARCH,
                                    page: 1,
                                    payload: { ...e.payload,
                                        search: l
                                    }
                                };
                            case A.SETCOLLECTION:
                                return { ...e,
                                    state: A.SETCOLLECTION,
                                    page: 1,
                                    payload: { ...e.payload,
                                        itemCollection: l
                                    }
                                };
                            case A.TYPECHANGE:
                                return { ...e,
                                    state: A.TYPECHANGE,
                                    page: 1,
                                    payload: { ...e.payload,
                                        itemStatus: l
                                    }
                                };
                            case A.EXTRAFILTER:
                                return { ...e,
                                    state: A.EXTRAFILTER,
                                    page: 1,
                                    payload: { ...e.payload,
                                        standard: l
                                    }
                                };
                            case A.STOREDATA:
                                return { ...e,
                                    state: null,
                                    items: 1 === e.page ? l.items : [...e.items, ...l.items],
                                    count: l.count,
                                    totalPages: l.totalPages,
                                    hasMore: (null == l ? void 0 : l.totalPages) > e.page,
                                    minPrice: null == l ? void 0 : l.minPrice,
                                    maxPrice: null == l ? void 0 : l.maxPrice,
                                    priceArray: null == l ? void 0 : l.priceArray,
                                    loading: !1
                                };
                            default:
                                return e
                        }
                    }, C), T = async () => {
                        if (y.state) try {
                            g({
                                type: A.STARTLOADING
                            });
                            let e = { ...y.payload,
                                    page: y.page,
                                    limit: y.limit,
                                    account: r,
                                    chainId: n
                                },
                                {
                                    data: a
                                } = await (0, s.A$)(e);
                            g({
                                type: A.STOREDATA,
                                payload: {
                                    items: a.data,
                                    count: a.count,
                                    totalPages: a.totalPages,
                                    minPrice: a.minPrice,
                                    maxPrice: a.maxPrice,
                                    priceArray: a.priceArray
                                }
                            })
                        } catch (e) {
                            E.FN.error(e.message), g({
                                type: A.STOREDATA,
                                payload: {
                                    items: [],
                                    count: 0,
                                    totalPages: 0,
                                    minPrice: null,
                                    maxPrice: null,
                                    priceArray: []
                                }
                            })
                        }
                    };
                    return (0, p.useEffect)(() => {
                        i && g({
                            type: A.ACCOUNTCHANGE
                        })
                    }, [i, r, n]), (0, p.useEffect)(() => {
                        let e;
                        return y.state === A.SEARCH ? e = setTimeout(() => {
                            T()
                        }, 800) : T(), () => clearTimeout(e)
                    }, [y]), { ...y,
                        categorys: t,
                        filterOptions: l.dl,
                        orderOptions: l.Cc,
                        priceFilter: u,
                        filterChange: e => {
                            var a, t;
                            let l;
                            l = e.target.checked ? [...(null == y ? void 0 : null === (a = y.payload) || void 0 === a ? void 0 : a.itemStatus) || [], e.target.value] : ((null == y ? void 0 : null === (t = y.payload) || void 0 === t ? void 0 : t.itemStatus) || []).filter(a => a !== e.target.value), g({
                                type: A.TYPECHANGE,
                                payload: l
                            })
                        },
                        setPriceFilter: c,
                        orderChange: e => {
                            g({
                                type: A.ORDERCHANGE,
                                payload: e.value
                            })
                        },
                        handleCategorySelect: e => {
                            var a, t;
                            let l;
                            l = e.target.checked ? [...(null == y ? void 0 : null === (a = y.payload) || void 0 === a ? void 0 : a.category) || [], e.target.value] : ((null == y ? void 0 : null === (t = y.payload) || void 0 === t ? void 0 : t.category) || []).filter(a => a !== e.target.value), g({
                                type: A.CATEGORYSELECT,
                                payload: l
                            })
                        },
                        handlePageChange: () => {
                            g({
                                type: A.PAGECHANGE
                            })
                        },
                        handleSearch: e => {
                            g({
                                type: A.SEARCH,
                                payload: e.target.value
                            })
                        },
                        typeChange: e => {
                            g({
                                type: A.EXTRAFILTER,
                                payload: e.value
                            })
                        },
                        handlePriceChange: e => {
                            e.length || g({
                                type: A.RESETPRICECHANGE
                            }), g({
                                type: A.PRICECHANGE,
                                payload: e
                            })
                        },
                        handleCollectionChange: e => {
                            g({
                                type: A.SETCOLLECTION,
                                payload: e
                            })
                        }
                    }
                },
                T = e => {
                    var a;
                    let {
                        onlyOwners: t = !1,
                        standard: n,
                        limit: s = 10
                    } = e, {
                        categorys: i,
                        walletDetalis: {
                            account: E,
                            chainId: c,
                            status: C
                        }
                    } = (0, d.v9)(o.n2), y = (0, u.useRouter)(), [g, T] = (0, p.useState)([]), N = {
                        loading: !1,
                        items: [],
                        count: 0,
                        totalPages: 0,
                        page: 1,
                        state: null,
                        hasMore: !1,
                        priceArray: [],
                        collectionDetails: {},
                        payload: {
                            extraFilter: null === (a = l.Cc[0]) || void 0 === a ? void 0 : a.value,
                            account: E,
                            chainId: c,
                            itemCollection: "",
                            itemStatus: [],
                            attributes: [],
                            search: "",
                            limit: s,
                            price: {
                                min: "",
                                max: ""
                            }
                        }
                    }, [G, R] = (0, p.useReducer)((e, a) => {
                        let {
                            type: t,
                            payload: l
                        } = a;
                        switch (t) {
                            case A.ORDERCHANGE:
                                return { ...e,
                                    state: A.ORDERCHANGE,
                                    page: 1,
                                    payload: { ...e.payload,
                                        extraFilter: l
                                    }
                                };
                            case A.ATTIBUTESELECT:
                                return { ...e,
                                    state: A.ATTIBUTESELECT,
                                    page: 1,
                                    payload: { ...e.payload,
                                        attributes: l
                                    }
                                };
                            case A.PAGECHANGE:
                                return { ...e,
                                    state: A.PAGECHANGE,
                                    page: e.page + 1
                                };
                            case A.ACCOUNTCHANGE:
                                let o = { ...e,
                                    state: A.ACCOUNTCHANGE,
                                    page: 1,
                                    payload: { ...e.payload,
                                        account: E,
                                        chainId: c
                                    }
                                };
                                return l && (o.payload.standard = l), o;
                            case A.STARTLOADING:
                                return { ...e,
                                    state: null,
                                    loading: !0
                                };
                            case A.PRICECHANGE:
                                return { ...e,
                                    state: A.PRICECHANGE,
                                    page: 1,
                                    payload: { ...e.payload,
                                        price: {
                                            min: l[0],
                                            max: l[1]
                                        }
                                    }
                                };
                            case A.RESETPRICECHANGE:
                                return { ...e,
                                    state: A.PRICECHANGE,
                                    page: 1,
                                    priceArray: [],
                                    payload: { ...e.payload,
                                        price: {
                                            min: "",
                                            max: ""
                                        }
                                    }
                                };
                            case A.SEARCH:
                                return { ...e,
                                    state: A.SEARCH,
                                    page: 1,
                                    payload: { ...e.payload,
                                        search: l
                                    }
                                };
                            case A.TYPECHANGE:
                                return { ...e,
                                    state: A.TYPECHANGE,
                                    page: 1,
                                    payload: { ...e.payload,
                                        itemStatus: l
                                    }
                                };
                            case A.QUERYCHANGE:
                                return { ...e,
                                    state: A.QUERYCHANGE,
                                    page: 1,
                                    payload: { ...e.payload,
                                        ...l
                                    }
                                };
                            case A.STOREDATA:
                                return { ...e,
                                    state: null,
                                    items: 1 === e.page ? l.items : [...e.items, ...l.items],
                                    count: l.count,
                                    totalPages: l.totalPages,
                                    hasMore: (null == l ? void 0 : l.totalPages) > e.page,
                                    loading: !1,
                                    collectionDetails: null == l ? void 0 : l.collectionDetails,
                                    priceArray: l.priceArray
                                };
                            default:
                                return e
                        }
                    }, N), H = async () => {
                        if (!G.state) return;
                        let e = { ...G.payload,
                            page: G.page,
                            account: E,
                            chainId: c
                        };
                        if (t) {
                            if (!E) return;
                            e.ownerAddress = E
                        }
                        R({
                            type: A.STARTLOADING
                        });
                        let {
                            data: a
                        } = await (0, r.my)(e);
                        R({
                            type: A.STOREDATA,
                            payload: {
                                items: a.data || [],
                                count: a.count,
                                totalPages: a.totalPages,
                                minPrice: a.minPrice,
                                maxPrice: a.maxPrice,
                                priceArray: a.priceArray || [],
                                collectionDetails: a.collectionDetails || {}
                            }
                        })
                    };
                    return (0, p.useEffect)(() => {
                        C && R({
                            type: A.ACCOUNTCHANGE,
                            payload: n
                        })
                    }, [C, E, c, n]), (0, p.useEffect)(() => {
                        var e;
                        let a = {
                            itemCollection: y.query.itemCollection
                        };
                        (null === (e = y.query) || void 0 === e ? void 0 : e.tokenId) && (a = { ...a,
                            remove: y.query.tokenId
                        }), R({
                            type: A.QUERYCHANGE,
                            payload: a
                        })
                    }, [y.isReady, y.query]), (0, p.useEffect)(() => {
                        let e;
                        if (y.isReady && y.query.itemCollection) return G.state === A.SEARCH ? e = setTimeout(() => {
                            H()
                        }, 800) : H(), () => clearTimeout(e)
                    }, [G]), { ...G,
                        filterOptions: l.dl,
                        orderOptions: l.Cc,
                        priceFilter: g,
                        setPriceFilter: T,
                        orderChange: e => {
                            R({
                                type: A.ORDERCHANGE,
                                payload: e.value
                            })
                        },
                        filterChange: e => {
                            let a;
                            (a = "All" == e ? [] : [e])[0] !== G.payload.itemStatus[0] && R({
                                type: A.TYPECHANGE,
                                payload: a
                            })
                        },
                        handleAttributeSelect: e => {
                            var a, t;
                            let l;
                            l = e.target.checked ? [...(null == G ? void 0 : null === (a = G.payload) || void 0 === a ? void 0 : a.attributes) || [], e.target.value] : ((null == G ? void 0 : null === (t = G.payload) || void 0 === t ? void 0 : t.attributes) || []).filter(a => a !== e.target.value), R({
                                type: A.ATTIBUTESELECT,
                                payload: l
                            })
                        },
                        handlePageChange: () => {
                            R({
                                type: A.PAGECHANGE
                            })
                        },
                        handleSearch: e => {
                            R({
                                type: A.SEARCH,
                                payload: e.target.value
                            })
                        },
                        typeChange: e => {
                            R({
                                type: A.TYPECHANGE,
                                payload: e.value
                            })
                        },
                        handlePriceChange: e => {
                            e.length || R({
                                type: A.RESETPRICECHANGE
                            }), R({
                                type: A.PRICECHANGE,
                                payload: e
                            })
                        }
                    }
                },
                N = () => {
                    let {
                        walletDetalis: {
                            account: e,
                            chainId: a,
                            status: t
                        }
                    } = (0, d.v9)(o.n2), [l, r] = (0, p.useReducer)((t, l) => {
                        let {
                            type: o,
                            payload: r
                        } = l;
                        switch (o) {
                            case A.PAGECHANGE:
                                return { ...t,
                                    state: A.PAGECHANGE,
                                    page: r
                                };
                            case A.ACCOUNTCHANGE:
                                return { ...t,
                                    state: A.ACCOUNTCHANGE,
                                    page: 1,
                                    payload: { ...t.payload,
                                        account: e,
                                        chainId: a
                                    }
                                };
                            case A.STARTLOADING:
                                return { ...t,
                                    state: null,
                                    loading: !0
                                };
                            case A.STOREDATA:
                                return { ...t,
                                    state: null,
                                    collectors: r.items,
                                    count: r.count,
                                    totalPages: r.totalPages,
                                    hasMore: (null == r ? void 0 : r.totalPages) > t.page,
                                    loading: !1
                                };
                            default:
                                return t
                        }
                    }, {
                        loading: !1,
                        collectors: [],
                        count: 0,
                        totalPages: 0,
                        page: 1,
                        limit: 10,
                        state: null
                    }), n = async () => {
                        if (!l.state) return;
                        r({
                            type: A.STARTLOADING
                        });
                        let t = { ...l.payload,
                                page: l.page,
                                limit: l.limit,
                                time: "Month",
                                account: e,
                                chainId: a
                            },
                            {
                                data: o
                            } = await (0, i.c0)(t);
                        r({
                            type: A.STOREDATA,
                            payload: {
                                items: o.data,
                                count: o.count,
                                totalPages: o.totalPages,
                                page: o.page
                            }
                        })
                    };
                    return (0, p.useEffect)(() => {
                        t && r({
                            type: A.ACCOUNTCHANGE
                        })
                    }, [t, e, a]), (0, p.useEffect)(() => {
                        n()
                    }, [l]), { ...l,
                        handlePageChange: e => {
                            e !== l.page && r({
                                type: A.PAGECHANGE,
                                payload: e
                            })
                        }
                    }
                },
                G = () => {
                    let {
                        categorys: e,
                        walletDetalis: {
                            account: a,
                            chainId: t,
                            status: l
                        }
                    } = (0, d.v9)(o.n2), [r, n] = (0, p.useReducer)((e, l) => {
                        let {
                            type: o,
                            payload: r
                        } = l;
                        switch (o) {
                            case A.PAGECHANGE:
                                return { ...e,
                                    state: A.PAGECHANGE,
                                    page: r
                                };
                            case A.ACCOUNTCHANGE:
                                return { ...e,
                                    state: A.ACCOUNTCHANGE,
                                    page: 1,
                                    payload: { ...e.payload,
                                        account: a,
                                        chainId: t
                                    }
                                };
                            case A.CATEGORYSELECT:
                                return { ...e,
                                    state: A.CATEGORYSELECT,
                                    page: 1,
                                    payload: { ...e.payload,
                                        stateCategory: r
                                    }
                                };
                            case A.STARTLOADING:
                                return { ...e,
                                    state: null,
                                    loading: !0
                                };
                            case A.STOREDATA:
                                return { ...e,
                                    state: null,
                                    ranking: r.items,
                                    count: r.count,
                                    totalPages: r.totalPages,
                                    hasMore: (null == r ? void 0 : r.totalPages) > e.page,
                                    loading: !1
                                };
                            default:
                                return e
                        }
                    }, {
                        loading: !1,
                        ranking: [],
                        count: 0,
                        totalPages: 0,
                        page: 1,
                        limit: 10,
                        state: null,
                        payload: {
                            stateCategory: []
                        }
                    }), s = async () => {
                        if (!r.state) return;
                        n({
                            type: A.STARTLOADING
                        });
                        let e = { ...r.payload,
                                page: r.page,
                                limit: r.limit
                            },
                            {
                                data: a
                            } = await (0, i.Bk)(e);
                        n({
                            type: A.STOREDATA,
                            payload: {
                                items: a.data,
                                count: a.count,
                                totalPages: a.totalPages,
                                page: a.page
                            }
                        })
                    };
                    return (0, p.useEffect)(() => {
                        l && n({
                            type: A.ACCOUNTCHANGE
                        })
                    }, [l, a, t]), (0, p.useEffect)(() => {
                        s()
                    }, [r]), { ...r,
                        categorys: e,
                        categoryChange: e => {
                            var a;
                            let t;
                            (t = null == e ? [] : [e])[0] !== (null == r ? void 0 : null === (a = r.payload) || void 0 === a ? void 0 : a.stateCategory[0]) && n({
                                type: A.CATEGORYSELECT,
                                payload: t
                            })
                        },
                        handlePageChange: e => {
                            e !== r.page && n({
                                type: A.PAGECHANGE,
                                payload: e
                            })
                        }
                    }
                },
                R = () => {
                    let {
                        walletDetalis: {
                            account: e,
                            chainId: a,
                            status: t
                        }
                    } = (0, d.v9)(o.n2), [l, r] = (0, p.useReducer)((t, l) => {
                        let {
                            type: o,
                            payload: r
                        } = l;
                        switch (o) {
                            case A.PAGECHANGE:
                                return { ...t,
                                    state: A.PAGECHANGE,
                                    page: r
                                };
                            case A.TYPECHANGE:
                                return { ...t,
                                    state: A.TYPECHANGE,
                                    page: 1,
                                    payload: { ...t.payload,
                                        timeperiod: r
                                    }
                                };
                            case A.SEARCH:
                                return { ...t,
                                    state: A.SEARCH,
                                    page: 1,
                                    payload: { ...t.payload,
                                        search: r
                                    }
                                };
                            case A.ACCOUNTCHANGE:
                                return { ...t,
                                    state: A.ACCOUNTCHANGE,
                                    page: 1,
                                    payload: { ...t.payload,
                                        account: e,
                                        chainId: a
                                    }
                                };
                            case A.STARTLOADING:
                                return { ...t,
                                    state: null,
                                    loading: !0
                                };
                            case A.STOREDATA:
                                return { ...t,
                                    state: null,
                                    popularCollections: r.items,
                                    count: r.count,
                                    totalPages: r.totalPages,
                                    hasMore: (null == r ? void 0 : r.totalPages) > t.page,
                                    loading: !1
                                };
                            default:
                                return t
                        }
                    }, {
                        loading: !1,
                        popularCollections: [],
                        count: 0,
                        totalPages: 0,
                        page: 1,
                        limit: 10,
                        state: null,
                        payload: {
                            timeperiod: "Day",
                            search: ""
                        }
                    }), n = async () => {
                        if (!l.state) return;
                        r({
                            type: A.STARTLOADING
                        });
                        let e = { ...l.payload,
                                page: l.page,
                                limit: l.limit,
                                chainId: a
                            },
                            {
                                data: t
                            } = await (0, i.Uv)(e);
                        r({
                            type: A.STOREDATA,
                            payload: {
                                items: t.data,
                                count: t.count,
                                totalPages: t.totalPages,
                                page: t.page
                            }
                        })
                    };
                    return (0, p.useEffect)(() => {
                        t && r({
                            type: A.ACCOUNTCHANGE
                        })
                    }, [t, e, a]), (0, p.useEffect)(() => {
                        let e;
                        return l.state === A.SEARCH ? e = setTimeout(() => {
                            n()
                        }, 800) : n(), () => clearTimeout(e)
                    }, [l]), { ...l,
                        TimePeriod: [{
                            value: "Hour",
                            label: "Last 1 Hour"
                        }, {
                            value: "Day",
                            label: "Last 24 Hour"
                        }, {
                            value: "Week",
                            label: "Last 7 Days"
                        }, {
                            value: "Month",
                            label: "Last 30 Days"
                        }],
                        timePeriodChange: e => {
                            r({
                                type: A.TYPECHANGE,
                                payload: e.value
                            })
                        },
                        handlePageChange: e => {
                            e !== l.page && r({
                                type: A.PAGECHANGE,
                                payload: e
                            })
                        },
                        handleSearch: e => {
                            r({
                                type: A.SEARCH,
                                payload: e.target.value
                            })
                        }
                    }
                },
                H = () => {
                    let {
                        categorys: e,
                        walletDetalis: {
                            account: a,
                            chainId: t,
                            status: l
                        }
                    } = (0, d.v9)(o.n2), r = (0, u.useRouter)(), [s, i] = (0, p.useReducer)((e, l) => {
                        let {
                            type: o,
                            payload: r
                        } = l;
                        switch (o) {
                            case A.PAGECHANGE:
                                return { ...e,
                                    state: A.PAGECHANGE,
                                    page: e.page + 1
                                };
                            case A.LIMITCHANGE:
                                return { ...e,
                                    state: A.LIMITCHANGE,
                                    page: 1,
                                    limit: r.limit
                                };
                            case A.TYPECHANGE:
                                return { ...e,
                                    state: A.TYPECHANGE,
                                    page: 1,
                                    payload: { ...e.payload,
                                        itemStatus: r.itemStatus
                                    }
                                };
                            case A.QUERYCHANGE:
                                let n = /^0x[a-fA-F0-9]{40}$/.test(r),
                                    s = !n && /\..+$/.test(r);
                                return { ...e,
                                    state: A.QUERYCHANGE,
                                    page: 1,
                                    payload: { ...e.payload,
                                        ownerAddress: n ? r : null,
                                        userName: s ? null : r,
                                        domainName: s ? r : null
                                    }
                                };
                            case A.ACCOUNTCHANGE:
                                return { ...e,
                                    state: A.ACCOUNTCHANGE,
                                    page: 1,
                                    payload: { ...e.payload,
                                        account: a,
                                        chainId: t
                                    }
                                };
                            case A.ORDERCHANGE:
                                return { ...e,
                                    state: A.ORDERCHANGE,
                                    page: 1,
                                    payload: { ...e.payload,
                                        extraFilter: r.extraFilter
                                    }
                                };
                            case A.STARTLOADING:
                                return { ...e,
                                    state: null,
                                    loading: !0
                                };
                            case A.STOREDATA:
                                return { ...e,
                                    state: null,
                                    items: 1 === e.page ? r.items : [...e.items, ...r.items],
                                    count: r.count,
                                    totalPages: r.totalPages,
                                    hasMore: (null == r ? void 0 : r.totalPages) > e.page,
                                    loading: !1
                                };
                            default:
                                return e
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
                            extraFilter: "Recently Created",
                            account: a,
                            ownerAddress: "",
                            itemStatus: [],
                            userName: ""
                        }
                    }), E = async () => {
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
                            } = await (0, n.AB)(e);
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
                    return (0, p.useEffect)(() => {
                        l && i({
                            type: A.ACCOUNTCHANGE
                        })
                    }, [l, a, t]), (0, p.useEffect)(() => {
                        r.isReady && r.query.userAddress && i({
                            type: A.QUERYCHANGE,
                            payload: r.query.userAddress
                        })
                    }, [r.isReady, r.query]), (0, p.useEffect)(() => {
                        E()
                    }, [s]), { ...s,
                        categorys: e,
                        orderOption: [{
                            value: "Recently Created",
                            label: "Recently Created"
                        }, {
                            value: "Oldest",
                            label: "Oldest"
                        }],
                        orderChange: e => {
                            i({
                                type: A.ORDERCHANGE,
                                payload: {
                                    extraFilter: e.value
                                }
                            })
                        },
                        handlePageChange: () => {
                            i({
                                type: A.PAGECHANGE
                            })
                        },
                        handleRouteChange: e => {
                            e && r.push(PATH_DASHBOARD.explore.collection(e))
                        },
                        handleFilterChange: e => {
                            i({
                                type: A.TYPECHANGE,
                                payload: {
                                    itemStatus: [e]
                                }
                            })
                        }
                    }
                },
                P = e => {
                    let {
                        limit: a = 9
                    } = e, {
                        isReady: t,
                        query: l
                    } = (0, u.useRouter)(), {
                        categorys: r,
                        walletDetalis: {
                            account: s
                        }
                    } = (0, d.v9)(o.n2), [i, E] = (0, p.useReducer)((e, a) => {
                        let {
                            type: t,
                            payload: l
                        } = a;
                        switch (t) {
                            case A.PAGECHANGE:
                                return { ...e,
                                    state: A.PAGECHANGE,
                                    page: e.page + 1
                                };
                            case A.ACCOUNTCHANGE:
                                return { ...e,
                                    state: A.ACCOUNTCHANGE
                                };
                            case A.QUERYCHANGE:
                                return { ...e,
                                    state: A.QUERYCHANGE,
                                    payload: { ...e.payload,
                                        tags: [...l]
                                    }
                                };
                            case A.STARTLOADING:
                                return { ...e,
                                    state: null,
                                    loading: !0
                                };
                            case A.STOREDATA:
                                return { ...e,
                                    state: null,
                                    items: 1 === e.page ? l.items : [...e.items, ...l.items],
                                    count: l.count,
                                    totalPages: l.totalPages,
                                    hasMore: (null == l ? void 0 : l.totalPages) > e.page,
                                    loading: !1
                                };
                            default:
                                return e
                        }
                    }, {
                        loading: !1,
                        items: [],
                        count: 0,
                        totalPages: 0,
                        page: 1,
                        state: null,
                        hasMore: !1,
                        payload: {
                            limit: a,
                            tags: []
                        }
                    }), c = async () => {
                        let e = { ...i.payload,
                            page: i.page
                        };
                        E({
                            type: A.STARTLOADING
                        });
                        let {
                            data: a
                        } = await (0, n.l3)(e);
                        E({
                            type: A.STOREDATA,
                            payload: {
                                items: (null == a ? void 0 : a.data) || [],
                                count: null == a ? void 0 : a.count,
                                totalPages: null == a ? void 0 : a.totalPages,
                                priceArray: (null == a ? void 0 : a.priceArray) || [],
                                collectionDetails: (null == a ? void 0 : a.collectionDetails) || {}
                            }
                        })
                    };
                    return (0, p.useEffect)(() => {
                        t && l.tag && E({
                            type: A.QUERYCHANGE,
                            payload: [l.tag]
                        })
                    }, [t, l]), (0, p.useEffect)(() => {
                        E({
                            type: A.ACCOUNTCHANGE
                        })
                    }, [s]), (0, p.useEffect)(() => {
                        i.state && c()
                    }, [i]), { ...i,
                        handlePageChange: () => {
                            E({
                                type: A.PAGECHANGE
                            })
                        }
                    }
                },
                m = () => {
                    let {
                        isReady: e,
                        query: a
                    } = (0, u.useRouter)(), [t, l] = (0, p.useReducer)((e, a) => {
                        let {
                            type: t,
                            payload: l
                        } = a;
                        switch (t) {
                            case A.PAGECHANGE:
                                return { ...e,
                                    state: A.PAGECHANGE,
                                    page: e.page + 1
                                };
                            case A.QUERYCHANGE:
                                return { ...e,
                                    state: A.QUERYCHANGE,
                                    payload: { ...e.payload,
                                        blogId: l
                                    }
                                };
                            case A.STARTLOADING:
                                return { ...e,
                                    state: null,
                                    commentsLoading: !0
                                };
                            case A.STOREDATA:
                                return { ...e,
                                    state: null,
                                    comments: 1 === e.page ? l.items : [...e.comments, ...l.items],
                                    count: l.count,
                                    totalPages: l.totalPages,
                                    commentsHasMore: (null == l ? void 0 : l.totalPages) > e.page,
                                    commentsLoading: !1
                                };
                            default:
                                return e
                        }
                    }, {
                        commentsLoading: !1,
                        comments: [],
                        count: 0,
                        totalPages: 0,
                        page: 1,
                        limit: 8,
                        state: null,
                        commentsHasMore: !1,
                        payload: {}
                    }), o = async () => {
                        if (!t.state) return;
                        let e = { ...t.payload,
                            page: t.page,
                            limit: t.limit
                        };
                        l({
                            type: A.STARTLOADING
                        });
                        let {
                            data: a
                        } = await (0, n.zI)(e);
                        l({
                            type: A.STOREDATA,
                            payload: {
                                items: (null == a ? void 0 : a.data) || [],
                                count: null == a ? void 0 : a.count,
                                totalPages: null == a ? void 0 : a.totalPages,
                                priceArray: (null == a ? void 0 : a.priceArray) || [],
                                collectionDetails: (null == a ? void 0 : a.collectionDetails) || {}
                            }
                        })
                    };
                    return (0, p.useEffect)(() => {
                        e && a.id && l({
                            type: A.QUERYCHANGE,
                            payload: a.id
                        })
                    }, [e, a]), (0, p.useEffect)(() => {
                        t.state && o()
                    }, [t]), { ...t,
                        handlePageChange: () => {
                            l({
                                type: A.PAGECHANGE
                            })
                        }
                    }
                },
                O = () => {
                    let e = (0, u.useRouter)(),
                        [a, t] = (0, p.useReducer)((e, a) => {
                            let {
                                type: t,
                                payload: l
                            } = a;
                            switch (t) {
                                case A.QUERYCHANGE:
                                    let o = /^0x[a-fA-F0-9]{40}$/.test(l),
                                        r = !o && /\..+$/.test(l);
                                    return { ...e,
                                        state: A.QUERYCHANGE,
                                        page: 1,
                                        payload: { ...e.payload,
                                            ownerAddress: o ? l : null,
                                            domainName: r ? l : null,
                                            name: r ? null : l
                                        }
                                    };
                                case A.STARTLOADING:
                                    return { ...e,
                                        state: null,
                                        ownerLoading: !0
                                    };
                                case A.STOPLOADING:
                                    return { ...e,
                                        state: null,
                                        ownerLoading: !1
                                    };
                                case A.STOREDATA:
                                    return { ...e,
                                        state: null,
                                        ownerDetails: 1 === e.page ? l.ownerDetails : [...e.ownerDetails, ...l.ownerDetails],
                                        ownerLoading: !1
                                    };
                                default:
                                    return e
                            }
                        }, {
                            ownerLoading: !1,
                            ownerDetails: {},
                            state: null,
                            payload: {
                                ownerAddress: "",
                                name: "",
                                domainName: ""
                            }
                        }),
                        l = async () => {
                            if (!a.state) return;
                            t({
                                type: A.STARTLOADING
                            });
                            let e = { ...a.payload
                            };
                            try {
                                let {
                                    data: a
                                } = await (0, n.C4)(e);
                                t({
                                    type: A.STOREDATA,
                                    payload: {
                                        ownerDetails: a.data
                                    }
                                })
                            } catch (e) {
                                console.log("error: ", e)
                            } finally {
                                t({
                                    type: A.STOPLOADING
                                })
                            }
                        };
                    return (0, p.useEffect)(() => {
                        t({
                            type: A.QUERYCHANGE,
                            payload: e.query.userAddress
                        })
                    }, [e.isReady, e.query]), (0, p.useEffect)(() => {
                        l()
                    }, [a]), { ...a
                    }
                },
                v = e => {
                    let {
                        ownerAddress: a = ""
                    } = e, {
                        walletDetalis: {
                            account: t,
                            chainId: l,
                            status: r
                        }
                    } = (0, d.v9)(o.n2);
                    (0, u.useRouter)();
                    let [s, i] = (0, p.useReducer)((e, a) => {
                        let {
                            type: t,
                            payload: o
                        } = a;
                        switch (t) {
                            case A.QUERYCHANGE:
                                return { ...e,
                                    state: A.QUERYCHANGE,
                                    page: 1,
                                    payload: { ...e.payload,
                                        owner: o
                                    }
                                };
                            case A.ACCOUNTCHANGE:
                                return { ...e,
                                    state: A.ACCOUNTCHANGE,
                                    page: 1,
                                    payload: { ...e.payload,
                                        chainId: l
                                    }
                                };
                            case A.PAGECHANGE:
                                return { ...e,
                                    state: A.PAGECHANGE,
                                    page: e.page + 1
                                };
                            case A.SEARCH:
                                return { ...e,
                                    state: A.SEARCH,
                                    page: 1,
                                    payload: { ...e.payload,
                                        collectionSearch: o
                                    }
                                };
                            case A.STARTLOADING:
                                return { ...e,
                                    state: null,
                                    collectionLoading: !0
                                };
                            case A.STOREDATA:
                                return { ...e,
                                    state: null,
                                    collections: 1 === e.page ? o.items : [...e.collections, ...o.items],
                                    count: o.count,
                                    totalPages: o.totalPages,
                                    hasMore: (null == o ? void 0 : o.totalPages) > e.page,
                                    collectionLoading: !1
                                };
                            case A.STOPLOADING:
                                return { ...e,
                                    state: null,
                                    collectionLoading: !1
                                };
                            default:
                                return e
                        }
                    }, {
                        collectionLoading: !1,
                        collections: [],
                        count: 0,
                        totalPages: 0,
                        page: 1,
                        limit: 10,
                        hasMore: !1,
                        state: null,
                        payload: {
                            owner: ""
                        }
                    });
                    (0, p.useEffect)(() => {
                        a && i({
                            type: A.QUERYCHANGE,
                            payload: a
                        })
                    }, [a]), (0, p.useEffect)(() => {
                        r && i({
                            type: A.ACCOUNTCHANGE
                        })
                    }, [r, t, l]), (0, p.useEffect)(() => {
                        let e;
                        if (s.state && s.payload.owner) return s.state === A.SEARCH ? e = setTimeout(() => {
                            E()
                        }, 800) : E(), () => clearTimeout(e)
                    }, [s]);
                    let E = async () => {
                        i({
                            type: A.STARTLOADING
                        });
                        let e = { ...s.payload,
                                page: s.page,
                                limit: s.limit,
                                chainId: l
                            },
                            {
                                data: a
                            } = await (0, n._S)(e);
                        i({
                            type: A.STOREDATA,
                            payload: {
                                items: null == a ? void 0 : a.data,
                                count: null == a ? void 0 : a.count,
                                totalPages: null == a ? void 0 : a.totalPages
                            }
                        })
                    };
                    return { ...s,
                        handlePageChange: () => {
                            i({
                                type: A.PAGECHANGE
                            })
                        },
                        handleSearch: e => {
                            i({
                                type: A.SEARCH,
                                payload: e.target.value
                            })
                        }
                    }
                },
                S = e => {
                    var a;
                    let {
                        ownerAddress: t = "",
                        ContextSearch: r = "",
                        ContextSort: n = {
                            value: "Recently Listed",
                            label: "Recently Listed"
                        },
                        ContextStatus: i = [],
                        selectedCollection: u,
                        created: c = !1
                    } = e, {
                        categorys: C,
                        walletDetalis: {
                            account: y,
                            chainId: g,
                            status: T
                        }
                    } = (0, d.v9)(o.n2), N = {
                        loading: !1,
                        items: [],
                        count: 0,
                        totalPages: 0,
                        page: 1,
                        limit: 20,
                        state: null,
                        hasMore: !1,
                        payload: {
                            owner: "",
                            itemCollection: "",
                            extraFilter: null === (a = l.Cc[0]) || void 0 === a ? void 0 : a.value,
                            account: y,
                            chainId: g,
                            itemStatus: [],
                            search: ""
                        }
                    }, [G, R] = (0, p.useReducer)((e, a) => {
                        let {
                            type: t,
                            payload: l
                        } = a;
                        switch (t) {
                            case A.QUERYCHANGE:
                                return { ...e,
                                    state: A.QUERYCHANGE,
                                    page: 1,
                                    loading: !0,
                                    payload: { ...e.payload,
                                        owner: l
                                    }
                                };
                            case A.ORDERCHANGE:
                                return { ...e,
                                    state: A.ORDERCHANGE,
                                    page: 1,
                                    payload: { ...e.payload,
                                        extraFilter: l
                                    }
                                };
                            case A.PAGECHANGE:
                                return { ...e,
                                    state: A.PAGECHANGE,
                                    page: e.page + 1
                                };
                            case A.ACCOUNTCHANGE:
                                return { ...e,
                                    state: A.ACCOUNTCHANGE,
                                    page: 1,
                                    payload: { ...e.payload,
                                        account: y,
                                        chainId: g
                                    }
                                };
                            case A.STARTLOADING:
                                return { ...e,
                                    state: null,
                                    loading: !0
                                };
                            case A.SEARCH:
                                return { ...e,
                                    state: A.SEARCH,
                                    page: 1,
                                    payload: { ...e.payload,
                                        search: l
                                    }
                                };
                            case A.SETCOLLECTION:
                                return { ...e,
                                    state: A.SETCOLLECTION,
                                    page: 1,
                                    payload: { ...e.payload,
                                        itemCollection: l
                                    }
                                };
                            case A.TYPECHANGE:
                                return { ...e,
                                    state: A.TYPECHANGE,
                                    page: 1,
                                    payload: { ...e.payload,
                                        itemStatus: l
                                    }
                                };
                            case A.STOREDATA:
                                return { ...e,
                                    state: null,
                                    items: 1 === e.page ? l.items : [...e.items, ...l.items],
                                    count: l.count,
                                    totalPages: l.totalPages,
                                    hasMore: (null == l ? void 0 : l.totalPages) > e.page,
                                    loading: !1
                                };
                            default:
                                return e
                        }
                    }, N);
                    (0, p.useEffect)(() => {
                        t && R({
                            type: A.QUERYCHANGE,
                            payload: t
                        })
                    }, [t]);
                    let H = async () => {
                        if (G.state && G.payload.owner) try {
                            R({
                                type: A.STARTLOADING
                            });
                            let a = { ...G.payload,
                                page: G.page,
                                limit: G.limit,
                                account: y,
                                chainId: g
                            };
                            if (c) {
                                var e;
                                a.creator = null === (e = G.payload) || void 0 === e ? void 0 : e.owner, delete a.owner
                            }
                            console.log("query", a);
                            let {
                                data: t
                            } = await (0, s.A$)(a);
                            R({
                                type: A.STOREDATA,
                                payload: {
                                    items: t.data,
                                    count: t.count,
                                    totalPages: t.totalPages
                                }
                            })
                        } catch (e) {
                            E.FN.error(e.message), R({
                                type: A.STOREDATA,
                                payload: {
                                    items: [],
                                    count: 0,
                                    totalPages: 0
                                }
                            })
                        }
                    };
                    return (0, p.useEffect)(() => {
                        T && R({
                            type: A.ACCOUNTCHANGE
                        })
                    }, [T, y, g]), (0, p.useEffect)(() => {
                        let e;
                        return G.state === A.SEARCH ? e = setTimeout(() => {
                            H()
                        }, 800) : H(), () => clearTimeout(e)
                    }, [G]), (0, p.useEffect)(() => {
                        n.value && R({
                            type: A.ORDERCHANGE,
                            payload: n.value
                        })
                    }, [n]), (0, p.useEffect)(() => {
                        R({
                            type: A.SEARCH,
                            payload: r
                        })
                    }, [r]), (0, p.useEffect)(() => {
                        u && R({
                            type: A.SETCOLLECTION,
                            payload: u
                        })
                    }, [u]), (0, p.useEffect)(() => {
                        i.length && R({
                            type: A.TYPECHANGE,
                            payload: [...i]
                        })
                    }, [i]), { ...G,
                        orderOptions: l.Cc,
                        filterChange: e => {
                            var a, t;
                            let l;
                            l = e.target.checked ? [...(null == G ? void 0 : null === (a = G.payload) || void 0 === a ? void 0 : a.itemStatus) || [], e.target.value] : ((null == G ? void 0 : null === (t = G.payload) || void 0 === t ? void 0 : t.itemStatus) || []).filter(a => a !== e.target.value), R({
                                type: A.TYPECHANGE,
                                payload: l
                            })
                        },
                        orderChange: e => {
                            R({
                                type: A.ORDERCHANGE,
                                payload: e.value
                            })
                        },
                        handlePageChange: () => {
                            R({
                                type: A.PAGECHANGE
                            })
                        },
                        handleSearch: e => {
                            R({
                                type: A.SEARCH,
                                payload: e.target.value
                            })
                        },
                        handleCollectionChange: e => {
                            R({
                                type: A.SETCOLLECTION,
                                payload: e
                            })
                        }
                    }
                },
                h = e => {
                    var a;
                    let {
                        ownerAddress: t = "",
                        ContextSearch: r = "",
                        ContextSort: n = {
                            value: "Recently Listed",
                            label: "Recently Listed"
                        },
                        selectedCollection: i
                    } = e, {
                        categorys: u,
                        walletDetalis: {
                            account: c,
                            chainId: C,
                            status: y
                        }
                    } = (0, d.v9)(o.n2), g = {
                        loading: !1,
                        items: [],
                        count: 0,
                        totalPages: 0,
                        page: 1,
                        limit: 20,
                        state: null,
                        hasMore: !1,
                        payload: {
                            itemCollection: "",
                            extraFilter: null === (a = l.Cc[0]) || void 0 === a ? void 0 : a.value,
                            account: c,
                            address: t,
                            chainId: C,
                            UserOffer: "All",
                            search: ""
                        }
                    }, [T, N] = (0, p.useReducer)((e, a) => {
                        let {
                            type: t,
                            payload: l
                        } = a;
                        switch (t) {
                            case A.QUERYCHANGE:
                                return { ...e,
                                    state: A.QUERYCHANGE,
                                    page: 1,
                                    loading: !0,
                                    payload: { ...e.payload,
                                        address: l
                                    }
                                };
                            case A.ORDERCHANGE:
                                return { ...e,
                                    state: A.ORDERCHANGE,
                                    page: 1,
                                    payload: { ...e.payload,
                                        extraFilter: l
                                    }
                                };
                            case A.PAGECHANGE:
                                return { ...e,
                                    state: A.PAGECHANGE,
                                    page: e.page + 1
                                };
                            case A.ACCOUNTCHANGE:
                                return { ...e,
                                    state: A.ACCOUNTCHANGE,
                                    page: 1,
                                    payload: { ...e.payload,
                                        account: c,
                                        chainId: C
                                    }
                                };
                            case A.STARTLOADING:
                                return { ...e,
                                    state: null,
                                    loading: !0
                                };
                            case A.SEARCH:
                                return { ...e,
                                    state: A.SEARCH,
                                    page: 1,
                                    payload: { ...e.payload,
                                        search: l
                                    }
                                };
                            case A.SETCOLLECTION:
                                return { ...e,
                                    state: A.SETCOLLECTION,
                                    page: 1,
                                    payload: { ...e.payload,
                                        itemCollection: l
                                    }
                                };
                            case A.TYPECHANGE:
                                return { ...e,
                                    state: A.TYPECHANGE,
                                    page: 1,
                                    payload: { ...e.payload,
                                        UserOffer: l
                                    }
                                };
                            case A.STOREDATA:
                                return { ...e,
                                    state: null,
                                    items: 1 === e.page ? l.items : [...e.items, ...l.items],
                                    count: l.count,
                                    totalPages: l.totalPages,
                                    hasMore: (null == l ? void 0 : l.totalPages) > e.page,
                                    loading: !1
                                };
                            default:
                                return e
                        }
                    }, g);
                    (0, p.useEffect)(() => {
                        t && N({
                            type: A.QUERYCHANGE,
                            payload: t
                        })
                    }, [t]);
                    let G = async () => {
                        if (console.log("calling", T), T.state && T.payload.address) try {
                            N({
                                type: A.STARTLOADING
                            });
                            let e = { ...T.payload,
                                    page: T.page,
                                    limit: T.limit,
                                    account: c,
                                    chainId: C
                                },
                                {
                                    data: a
                                } = await (0, s.lh)(e);
                            N({
                                type: A.STOREDATA,
                                payload: {
                                    items: a.data,
                                    count: a.count,
                                    totalPages: a.totalPages
                                }
                            })
                        } catch (e) {
                            E.FN.error(e.message), N({
                                type: A.STOREDATA,
                                payload: {
                                    items: [],
                                    count: 0,
                                    totalPages: 0
                                }
                            })
                        }
                    };
                    return (0, p.useEffect)(() => {
                        y && N({
                            type: A.ACCOUNTCHANGE
                        })
                    }, [y, c, C]), (0, p.useEffect)(() => {
                        let e;
                        return T.state === A.SEARCH ? e = setTimeout(() => {
                            G()
                        }, 800) : G(), () => clearTimeout(e)
                    }, [T]), (0, p.useEffect)(() => {
                        N({
                            type: A.SEARCH,
                            payload: r
                        })
                    }, [r]), (0, p.useEffect)(() => {
                        i && N({
                            type: A.SETCOLLECTION,
                            payload: i
                        })
                    }, [i]), { ...T,
                        orderOptions: l.Cc,
                        filterChange: e => {
                            N({
                                type: A.TYPECHANGE,
                                payload: e
                            })
                        },
                        orderChange: e => {
                            N({
                                type: A.ORDERCHANGE,
                                payload: e.value
                            })
                        },
                        handlePageChange: () => {
                            N({
                                type: A.PAGECHANGE
                            })
                        },
                        handleSearch: e => {
                            N({
                                type: A.SEARCH,
                                payload: e.target.value
                            })
                        },
                        handleCollectionChange: e => {
                            N({
                                type: A.SETCOLLECTION,
                                payload: e
                            })
                        }
                    }
                }
        }
    }
]);