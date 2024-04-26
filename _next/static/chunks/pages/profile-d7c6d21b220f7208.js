(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [277], {
        31969: function(e, l, i) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/profile", function() {
                return i(35856)
            }])
        },
        35856: function(e, l, i) {
            "use strict";
            i.r(l), i.d(l, {
                default: function() {
                    return K
                }
            });
            var s = i(85893),
                n = i(41664),
                t = i.n(n),
                a = i(33353),
                r = i(94342);
            i(54403);
            var c = i(67294),
                d = i(33275),
                o = i(7226),
                h = i(54568),
                C = i(52448),
                x = i(34965),
                m = i(24715),
                j = i(27506),
                u = i(97673),
                g = i(11163),
                p = i(24486),
                v = () => {
                    let {
                        loading: e,
                        items: l,
                        count: i,
                        totalPages: n,
                        page: t,
                        limit: a,
                        hasMore: r,
                        payload: d,
                        handlePageChange: v,
                        handleLimitChange: f,
                        handleFilterChange: w
                    } = (0, o.mh)(), [b, N] = (0, c.useState)([]), [k, L] = (0, c.useState)(), [M, S] = (0, c.useState)("ASC"), y = (0, g.useRouter)(), B = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            l = arguments.length > 1 ? arguments[1] : void 0;
                        y.push({
                            pathname: p.v.item.details,
                            query: {
                                itemCollection: null == e ? void 0 : e.toLowerCase(),
                                tokenId: l
                            }
                        })
                    };
                    m.qK, (0, c.useEffect)(() => {
                        if (!k) {
                            N(l);
                            return
                        }
                        N([...l].sort((e, l) => {
                            let i;
                            return e[k] < l[k] && (i = -1), e[k] > l[k] && (i = 1), "ASC" === M ? i : -i
                        }))
                    }, [l, k, M]);
                    let Z = e => {
                            k === e ? S(e => "ASC" === e ? "DESC" : "ASC") : S("ASC"), L(e)
                        },
                        _ = [{
                            label: "Name",
                            id: "name",
                            isSortable: !0
                        }, {
                            label: "Collection",
                            id: "collectionName",
                            isSortable: !0
                        }, {
                            label: "Category",
                            id: "category",
                            isSortable: !0
                        }, {
                            label: "Blockchain",
                            id: "symbol",
                            isSortable: !0
                        }, {
                            label: "Bid",
                            id: "",
                            isSortable: !0
                        }, {
                            label: "Views",
                            id: "",
                            isSortable: !0
                        }, {
                            label: "Type",
                            id: "listingType",
                            isSortable: !0
                        }, {
                            label: "",
                            id: "",
                            isSortable: !1
                        }],
                        H = [{
                            value: "All",
                            label: "All"
                        }, {
                            value: "Listing",
                            label: "On Sale"
                        }, {
                            value: "Auction",
                            label: "On Auction"
                        }, {
                            value: "NOT_FOR_SALE",
                            label: "Not for Sale"
                        }];
                    return (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsxs)("div", {
                            className: "tab-block-right",
                            children: [(0, s.jsx)("h2", {
                                className: "title-text-right",
                                children: "Inventory"
                            }), (0, s.jsxs)("div", {
                                className: "search-select d-flex-right",
                                children: [(0, s.jsxs)("div", {
                                    className: "btn-showing-block",
                                    children: [(0, s.jsx)("p", {
                                        children: " Showing:"
                                    }), [10, 50, 100].map((e, l) => (0, s.jsx)("button", {
                                        className: a === e ? "selected" : "limitButton",
                                        onClick: () => f(e),
                                        children: e
                                    }, l))]
                                }), (0, s.jsx)(j.ZP, {
                                    name: "TypeFilter",
                                    options: H,
                                    className: "TX-select2-wrapper",
                                    classNamePrefix: "TX-fix-select",
                                    onChange: w,
                                    defaultValue: H[0]
                                })]
                            }), (0, s.jsx)("div", {
                                className: "table-block-scroll",
                                children: (0, s.jsxs)(h.Z, {
                                    children: [(0, s.jsx)("thead", {
                                        children: (0, s.jsx)("tr", {
                                            children: _.map((e, l) => {
                                                let {
                                                    label: i,
                                                    id: n,
                                                    isSortable: t
                                                } = e;
                                                return (0, s.jsxs)("th", {
                                                    children: [i, " ", t ? (0, s.jsx)("button", {
                                                        className: "btn",
                                                        onClick: () => Z(n),
                                                        children: (0, s.jsx)("svg", {
                                                            width: "10",
                                                            height: "6",
                                                            viewBox: "0 0 10 6",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: (0, s.jsx)("path", {
                                                                d: "M8.44531 0.433594L5 3.87891L1.55469 0.433594L0.5 1.48828L5 5.98828L9.5 1.48828L8.44531 0.433594Z",
                                                                fill: "#191820"
                                                            })
                                                        })
                                                    }) : ""]
                                                }, l)
                                            })
                                        })
                                    }), (0, s.jsxs)("tbody", {
                                        children: [e || b.length ? null == b ? void 0 : b.map((e, l) => {
                                            let {
                                                category: i,
                                                name: n,
                                                image: t,
                                                chainId: a,
                                                collectionName: r,
                                                symbol: c,
                                                listingType: d,
                                                latestBid: o,
                                                itemCollection: h,
                                                tokenId: C,
                                                viewsCount: j
                                            } = e;
                                            return (0, s.jsxs)("tr", {
                                                children: [(0, s.jsx)("td", {
                                                    children: (0, s.jsxs)("div", {
                                                        className: "collection-name",
                                                        children: [(0, s.jsx)("div", {
                                                            className: "collection-profile",
                                                            children: (0, s.jsx)("img", {
                                                                src: t || "../../images/profile-img-new.png",
                                                                alt: "profile-img"
                                                            })
                                                        }), (0, s.jsx)("h3", {
                                                            children: n || ""
                                                        })]
                                                    })
                                                }), (0, s.jsx)("td", {
                                                    children: r || ""
                                                }), (0, s.jsx)("td", {
                                                    children: i || ""
                                                }), (0, s.jsx)("td", {
                                                    children: (0, s.jsxs)("div", {
                                                        className: "total-volume-block",
                                                        children: [(0, s.jsx)("img", {
                                                            src: x.c6[a],
                                                            alt: "img"
                                                        }), (0, s.jsx)("p", {
                                                            children: (0, m.Ud)(a)
                                                        })]
                                                    })
                                                }), (0, s.jsx)("td", {
                                                    children: o || "-"
                                                }), (0, s.jsx)("td", {
                                                    children: j
                                                }), (0, s.jsx)("td", {
                                                    children: (0, s.jsx)("div", {
                                                        className: "auction-link-block-left",
                                                        children: d || ""
                                                    })
                                                }), (0, s.jsx)("td", {
                                                    children: (0, s.jsx)("div", {
                                                        className: "auction-link-block-left",
                                                        children: (0, s.jsx)("div", {
                                                            className: "auction-link-block",
                                                            children: (0, s.jsx)("p", {
                                                                onClick: () => B(h, C),
                                                                className: "pointer",
                                                                children: (0, s.jsx)("svg", {
                                                                    width: "20",
                                                                    height: "20",
                                                                    viewBox: "0 0 20 20",
                                                                    fill: "none",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    children: (0, s.jsx)("path", {
                                                                        d: "M5.00016 11.6666C4.54183 11.6666 4.14933 11.5033 3.82266 11.1766C3.496 10.8499 3.33294 10.4577 3.3335 9.99992C3.3335 9.54159 3.49683 9.14909 3.8235 8.82242C4.15016 8.49575 4.54239 8.3327 5.00016 8.33325C5.4585 8.33325 5.851 8.49659 6.17766 8.82325C6.50433 9.14992 6.66739 9.54214 6.66683 9.99992C6.66683 10.4583 6.5035 10.8508 6.17683 11.1774C5.85016 11.5041 5.45794 11.6671 5.00016 11.6666ZM10.0002 11.6666C9.54183 11.6666 9.14933 11.5033 8.82266 11.1766C8.496 10.8499 8.33294 10.4577 8.3335 9.99992C8.3335 9.54159 8.49683 9.14909 8.8235 8.82242C9.15016 8.49575 9.54239 8.3327 10.0002 8.33325C10.4585 8.33325 10.851 8.49659 11.1777 8.82325C11.5043 9.14992 11.6674 9.54214 11.6668 9.99992C11.6668 10.4583 11.5035 10.8508 11.1768 11.1774C10.8502 11.5041 10.4579 11.6671 10.0002 11.6666ZM15.0002 11.6666C14.5418 11.6666 14.1493 11.5033 13.8227 11.1766C13.496 10.8499 13.3329 10.4577 13.3335 9.99992C13.3335 9.54159 13.4968 9.14909 13.8235 8.82242C14.1502 8.49575 14.5424 8.3327 15.0002 8.33325C15.4585 8.33325 15.851 8.49659 16.1777 8.82325C16.5043 9.14992 16.6674 9.54214 16.6668 9.99992C16.6668 10.4583 16.5035 10.8508 16.1768 11.1774C15.8502 11.5041 15.4579 11.6671 15.0002 11.6666Z",
                                                                        fill: "black"
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })]
                                            }, l)
                                        }) : (0, s.jsx)("tr", {
                                            children: (0, s.jsx)("td", {
                                                colSpan: _.length,
                                                className: "text-center",
                                                children: "No data found"
                                            })
                                        }), e ? (0, s.jsx)("tr", {
                                            children: (0, s.jsx)("td", {
                                                colSpan: _.length,
                                                className: "text-center",
                                                children: (0, s.jsx)(C.Z, {
                                                    size: "md"
                                                })
                                            })
                                        }) : ""]
                                    })]
                                })
                            }), !e && r ? (0, s.jsx)("div", {
                                className: "load-more-btn",
                                children: (0, s.jsx)(u.Button, {
                                    isBorderBtn: !0,
                                    onClick: v,
                                    className: "border-dark-button",
                                    children: "Load More"
                                })
                            }) : ""]
                        })
                    })
                },
                f = () => {
                    let {
                        loading: e,
                        items: l,
                        limit: i,
                        hasMore: n,
                        handlePageChange: t,
                        handleRouteChange: a,
                        handleLimitChange: r,
                        handleFilterChange: d
                    } = (0, o.UJ)(), [j, g] = (0, c.useState)([]), [p, v] = (0, c.useState)(), [f, w] = (0, c.useState)("ASC");
                    (0, c.useEffect)(() => {
                        if (!p) {
                            g(l);
                            return
                        }
                        g([...l].sort((e, l) => {
                            let i;
                            return e[p] < l[p] && (i = -1), e[p] > l[p] && (i = 1), "ASC" === f ? i : -i
                        }))
                    }, [l, p, f]);
                    let b = e => {
                            p === e ? w(e => "ASC" === e ? "DESC" : "ASC") : w("ASC"), v(e)
                        },
                        N = [{
                            label: "Name",
                            id: "name",
                            isSortable: !0
                        }, {
                            label: "Category",
                            id: "category",
                            isSortable: !0
                        }, {
                            label: "Blockchain",
                            id: "symbol",
                            isSortable: !0
                        }, {
                            label: "Items",
                            id: "totalItemCount",
                            isSortable: !0
                        }, {
                            label: "Collectors",
                            id: "totalOwners",
                            isSortable: !0
                        }, {
                            label: "Volume",
                            id: "tradingVolume",
                            isSortable: !0
                        }];
                    return (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsxs)("div", {
                            className: "tab-block-right",
                            children: [(0, s.jsx)("h2", {
                                className: "title-text-right",
                                children: "Collections"
                            }), (0, s.jsx)("div", {
                                className: "search-select d-flex-right",
                                children: (0, s.jsxs)("div", {
                                    className: "btn-showing-block",
                                    children: [(0, s.jsx)("p", {
                                        children: " Showing:"
                                    }), [10, 50, 100].map((e, l) => (0, s.jsx)("button", {
                                        className: i === e ? "selected" : "limitButton",
                                        onClick: () => r(e),
                                        children: e
                                    }, l))]
                                })
                            }), (0, s.jsx)("div", {
                                className: "table-block-scroll",
                                children: (0, s.jsxs)(h.Z, {
                                    children: [(0, s.jsx)("thead", {
                                        children: (0, s.jsx)("tr", {
                                            children: N.map((e, l) => {
                                                let {
                                                    label: i,
                                                    id: n,
                                                    isSortable: t
                                                } = e;
                                                return (0, s.jsxs)("th", {
                                                    children: [i, " ", t ? (0, s.jsx)("button", {
                                                        className: "btn",
                                                        onClick: () => b(n),
                                                        children: (0, s.jsx)("svg", {
                                                            width: "10",
                                                            height: "6",
                                                            viewBox: "0 0 10 6",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: (0, s.jsx)("path", {
                                                                d: "M8.44531 0.433594L5 3.87891L1.55469 0.433594L0.5 1.48828L5 5.98828L9.5 1.48828L8.44531 0.433594Z",
                                                                fill: "#191820"
                                                            })
                                                        })
                                                    }) : ""]
                                                }, l)
                                            })
                                        })
                                    }), (0, s.jsxs)("tbody", {
                                        children: [!e && !(null == j ? void 0 : j.length) > 0 ? (0, s.jsx)("tr", {
                                            children: (0, s.jsx)("td", {
                                                colSpan: N.length,
                                                className: "text-center",
                                                children: "No data found"
                                            })
                                        }) : null == j ? void 0 : j.map((e, l) => {
                                            let {
                                                address: i,
                                                image: n,
                                                name: t,
                                                category: r,
                                                chainId: c,
                                                totalOwners: d,
                                                totalItemCount: o,
                                                tradingVolume: h
                                            } = e;
                                            return (0, s.jsx)(s.Fragment, {
                                                children: (0, s.jsxs)("tr", {
                                                    onClick: () => a(i),
                                                    style: {
                                                        cursor: "pointer"
                                                    },
                                                    children: [(0, s.jsx)("td", {
                                                        children: (0, s.jsxs)("div", {
                                                            className: "collection-name",
                                                            children: [(0, s.jsx)("div", {
                                                                className: "collection-profile",
                                                                children: (0, s.jsx)("img", {
                                                                    src: n || "../../images/profile-img-new.png",
                                                                    alt: "profile-img"
                                                                })
                                                            }), (0, s.jsx)("h3", {
                                                                children: t || ""
                                                            })]
                                                        })
                                                    }), (0, s.jsx)("td", {
                                                        children: r || ""
                                                    }), (0, s.jsx)("td", {
                                                        children: (0, s.jsxs)("div", {
                                                            className: "total-volume-block",
                                                            children: [(0, s.jsx)("img", {
                                                                src: x.c6[c],
                                                                alt: "img"
                                                            }), (0, s.jsx)("p", {
                                                                children: (0, m.Ud)(c)
                                                            })]
                                                        })
                                                    }), (0, s.jsx)("td", {
                                                        children: (0, m.IA)(o, 2)
                                                    }), (0, s.jsx)("td", {
                                                        children: (0, m.IA)(d, 2)
                                                    }), (0, s.jsx)("td", {
                                                        children: (0, m.IA)(h, 4)
                                                    })]
                                                }, l)
                                            })
                                        }), e ? (0, s.jsx)("tr", {
                                            children: (0, s.jsx)("td", {
                                                colSpan: N.length,
                                                className: "text-center",
                                                children: (0, s.jsx)(C.Z, {
                                                    size: "md"
                                                })
                                            })
                                        }) : ""]
                                    })]
                                })
                            }), n ? (0, s.jsx)("div", {
                                className: "load-more-btn",
                                children: (0, s.jsx)(u.Button, {
                                    isBorderBtn: !0,
                                    onClick: t,
                                    className: "border-dark-button",
                                    children: "Load More"
                                })
                            }) : ""]
                        })
                    })
                },
                w = i(48581),
                b = i(54613),
                N = () => {
                    let {
                        loading: e,
                        items: l,
                        count: i,
                        totalPages: n,
                        page: a,
                        limit: r,
                        hasMore: c,
                        payload: d,
                        handlePageChange: h
                    } = (0, o.$x)(), {
                        handleFollow: x
                    } = (0, o.Os)(), m = (0, g.useRouter)(), j = e => {
                        m.push({
                            pathname: p.v.user.detail(e)
                        })
                    };
                    return (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsxs)("div", {
                            className: "tab-block-right",
                            children: [(0, s.jsx)("h2", {
                                className: "title-text-right",
                                children: "Following"
                            }), (0, s.jsx)("div", {
                                className: "following-block-main",
                                children: l.length ? l.map((e, l) => (0, s.jsx)("div", {
                                    className: "following-block-main-inner",
                                    children: (0, s.jsxs)("div", {
                                        className: "following-block-main-block",
                                        children: [(0, s.jsxs)(b.Z, {
                                            children: [(0, s.jsx)(b.Z.Toggle, {
                                                variant: "success",
                                                id: "dropdown-basic",
                                                children: (0, s.jsx)("svg", {
                                                    width: "20",
                                                    height: "20",
                                                    viewBox: "0 0 20 20",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: (0, s.jsx)("path", {
                                                        d: "M5.00016 11.6666C4.54183 11.6666 4.14933 11.5033 3.82266 11.1766C3.496 10.8499 3.33294 10.4577 3.3335 9.99992C3.3335 9.54159 3.49683 9.14909 3.8235 8.82242C4.15016 8.49575 4.54239 8.3327 5.00016 8.33325C5.4585 8.33325 5.851 8.49659 6.17766 8.82325C6.50433 9.14992 6.66739 9.54214 6.66683 9.99992C6.66683 10.4583 6.5035 10.8508 6.17683 11.1774C5.85016 11.5041 5.45794 11.6671 5.00016 11.6666ZM10.0002 11.6666C9.54183 11.6666 9.14933 11.5033 8.82266 11.1766C8.496 10.8499 8.33294 10.4577 8.3335 9.99992C8.3335 9.54159 8.49683 9.14909 8.8235 8.82242C9.15016 8.49575 9.54239 8.3327 10.0002 8.33325C10.4585 8.33325 10.851 8.49659 11.1777 8.82325C11.5043 9.14992 11.6674 9.54214 11.6668 9.99992C11.6668 10.4583 11.5035 10.8508 11.1768 11.1774C10.8502 11.5041 10.4579 11.6671 10.0002 11.6666ZM15.0002 11.6666C14.5418 11.6666 14.1493 11.5033 13.8227 11.1766C13.496 10.8499 13.3329 10.4577 13.3335 9.99992C13.3335 9.54159 13.4968 9.14909 13.8235 8.82242C14.1502 8.49575 14.5424 8.3327 15.0002 8.33325C15.4585 8.33325 15.851 8.49659 16.1777 8.82325C16.5043 9.14992 16.6674 9.54214 16.6668 9.99992C16.6668 10.4583 16.5035 10.8508 16.1768 11.1774C15.8502 11.5041 15.4579 11.6671 15.0002 11.6666Z",
                                                        fill: "black"
                                                    })
                                                })
                                            }), (0, s.jsx)(b.Z.Menu, {
                                                children: (0, s.jsx)(b.Z.Item, {
                                                    children: (0, s.jsx)(t(), {
                                                        href: p.v.chat.user(null == e ? void 0 : e.address),
                                                        children: "Send Message"
                                                    })
                                                })
                                            })]
                                        }), (0, s.jsx)("img", {
                                            src: e.image || "/images/user.svg",
                                            alt: "profile-img",
                                            className: "pointer",
                                            onClick: () => j(null == e ? void 0 : e.address)
                                        }), (0, s.jsx)("h4", {
                                            children: e.name || "NoName"
                                        }), (0, s.jsxs)("p", {
                                            children: [e.totalItemsCount || 0, " ", (0, s.jsx)("span", {
                                                children: "items"
                                            })]
                                        }), (0, s.jsx)(w.Z, {
                                            item: e,
                                            handleFollow: x
                                        })]
                                    })
                                })) : (0, s.jsx)("div", {
                                    className: "d-flex justify-content-center w-100 align-items-center",
                                    style: {
                                        height: "350px"
                                    },
                                    children: (0, s.jsx)("p", {
                                        children: "You are not following anyone yet."
                                    })
                                })
                            }), e ? (0, s.jsx)("div", {
                                className: "text-center",
                                children: (0, s.jsx)(C.Z, {
                                    size: "md"
                                })
                            }) : "", c ? (0, s.jsx)("div", {
                                className: "load-more-btn",
                                children: (0, s.jsx)(u.Button, {
                                    isBorderBtn: !0,
                                    onClick: h,
                                    className: "border-dark-button",
                                    children: "Load More"
                                })
                            }) : ""]
                        })
                    })
                },
                k = () => {
                    let {
                        loading: e,
                        items: l,
                        count: i,
                        totalPages: n,
                        page: a,
                        limit: r,
                        hasMore: d,
                        payload: j,
                        handlePageChange: g,
                        handleSorting: v
                    } = (0, o.zW)(), [f, w] = (0, c.useState)([]), [b, N] = (0, c.useState)(), [k, L] = (0, c.useState)("ASC"), M = [{
                        label: "Name",
                        id: "itemName",
                        isSortable: !0
                    }, {
                        label: "Blockchain",
                        id: "Symbol",
                        isSortable: !0
                    }, {
                        label: "Collection",
                        id: "collectionName",
                        isSortable: !0
                    }, {
                        label: "Price",
                        id: "price",
                        isSortable: !0
                    }, {
                        label: "",
                        id: "",
                        isSortable: !1
                    }];
                    (0, c.useEffect)(() => {
                        if (!b) {
                            w(l);
                            return
                        }
                        w([...l].sort((e, l) => {
                            let i;
                            return e[b] < l[b] && (i = -1), e[b] > l[b] && (i = 1), "ASC" === k ? i : -i
                        }))
                    }, [l, b, k]);
                    let S = e => {
                        b === e ? L(e => "ASC" === e ? "DESC" : "ASC") : L("ASC"), N(e)
                    };
                    return (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsxs)("div", {
                            className: "tab-block-right",
                            children: [(0, s.jsx)("h2", {
                                className: "title-text-right",
                                children: "Favorites"
                            }), (0, s.jsx)("div", {
                                className: "table-block-scroll",
                                children: (0, s.jsxs)(h.Z, {
                                    children: [(0, s.jsx)("thead", {
                                        children: (0, s.jsx)("tr", {
                                            children: M.map((e, l) => {
                                                let {
                                                    label: i,
                                                    id: n,
                                                    isSortable: t
                                                } = e;
                                                return (0, s.jsxs)("th", {
                                                    children: [i, " ", t ? (0, s.jsx)("button", {
                                                        className: "btn",
                                                        onClick: () => S(n),
                                                        children: (0, s.jsx)("svg", {
                                                            width: "10",
                                                            height: "6",
                                                            viewBox: "0 0 10 6",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: (0, s.jsx)("path", {
                                                                d: "M8.44531 0.433594L5 3.87891L1.55469 0.433594L0.5 1.48828L5 5.98828L9.5 1.48828L8.44531 0.433594Z",
                                                                fill: "#191820"
                                                            })
                                                        })
                                                    }) : ""]
                                                }, l)
                                            })
                                        })
                                    }), (0, s.jsxs)("tbody", {
                                        children: [!e && !(null == f ? void 0 : f.length) > 0 ? (0, s.jsx)("tr", {
                                            children: (0, s.jsx)("td", {
                                                colSpan: M.length,
                                                className: "text-center",
                                                children: "No data found"
                                            })
                                        }) : null == f ? void 0 : f.map((e, l) => {
                                            let {
                                                _id: i,
                                                itemCollection: n,
                                                tokenId: a,
                                                itemName: r,
                                                itemImage: c,
                                                chainId: d,
                                                collectionName: o,
                                                collectionImage: h,
                                                price: C,
                                                Symbol: j,
                                                decimal: u
                                            } = e;
                                            return (0, s.jsx)(s.Fragment, {
                                                children: (0, s.jsxs)("tr", {
                                                    children: [(0, s.jsx)("td", {
                                                        children: (0, s.jsxs)("div", {
                                                            className: "collection-name",
                                                            children: [(0, s.jsx)("div", {
                                                                className: "collection-profile profile-img-big",
                                                                children: (0, s.jsx)("img", {
                                                                    src: c || "../../images/profile-img-new.png",
                                                                    alt: "profile-img"
                                                                })
                                                            }), (0, s.jsx)("h3", {
                                                                children: r || ""
                                                            })]
                                                        })
                                                    }), (0, s.jsx)("td", {
                                                        children: (0, s.jsxs)("div", {
                                                            className: "total-volume-block",
                                                            children: [(0, s.jsx)("img", {
                                                                src: x.c6[d] || "../../images/icon-total-table.png",
                                                                alt: "profile-img"
                                                            }), (0, s.jsx)("p", {
                                                                children: (0, m.Ud)(d)
                                                            })]
                                                        })
                                                    }), (0, s.jsx)("td", {
                                                        children: (0, s.jsxs)("div", {
                                                            className: "collection-name",
                                                            children: [(0, s.jsx)("div", {
                                                                className: "collection-profile",
                                                                children: (0, s.jsx)("img", {
                                                                    src: h || "../../images/profile-img-new.png",
                                                                    alt: "profile-img"
                                                                })
                                                            }), (0, s.jsx)("h3", {
                                                                children: o || ""
                                                            })]
                                                        })
                                                    }), (0, s.jsx)("td", {
                                                        children: (0, s.jsxs)("div", {
                                                            className: "auction-link-block-left",
                                                            children: [C || 0, " ", j, (0, s.jsx)("div", {
                                                                className: "auction-link-block",
                                                                children: (0, s.jsx)(t(), {
                                                                    href: "".concat(p.v.item.details, "?itemCollection=").concat(n, "&tokenId=").concat(a),
                                                                    children: (0, s.jsx)("svg", {
                                                                        width: "20",
                                                                        height: "20",
                                                                        viewBox: "0 0 20 20",
                                                                        fill: "none",
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        children: (0, s.jsx)("path", {
                                                                            d: "M5.00016 11.6666C4.54183 11.6666 4.14933 11.5033 3.82266 11.1766C3.496 10.8499 3.33294 10.4577 3.3335 9.99992C3.3335 9.54159 3.49683 9.14909 3.8235 8.82242C4.15016 8.49575 4.54239 8.3327 5.00016 8.33325C5.4585 8.33325 5.851 8.49659 6.17766 8.82325C6.50433 9.14992 6.66739 9.54214 6.66683 9.99992C6.66683 10.4583 6.5035 10.8508 6.17683 11.1774C5.85016 11.5041 5.45794 11.6671 5.00016 11.6666ZM10.0002 11.6666C9.54183 11.6666 9.14933 11.5033 8.82266 11.1766C8.496 10.8499 8.33294 10.4577 8.3335 9.99992C8.3335 9.54159 8.49683 9.14909 8.8235 8.82242C9.15016 8.49575 9.54239 8.3327 10.0002 8.33325C10.4585 8.33325 10.851 8.49659 11.1777 8.82325C11.5043 9.14992 11.6674 9.54214 11.6668 9.99992C11.6668 10.4583 11.5035 10.8508 11.1768 11.1774C10.8502 11.5041 10.4579 11.6671 10.0002 11.6666ZM15.0002 11.6666C14.5418 11.6666 14.1493 11.5033 13.8227 11.1766C13.496 10.8499 13.3329 10.4577 13.3335 9.99992C13.3335 9.54159 13.4968 9.14909 13.8235 8.82242C14.1502 8.49575 14.5424 8.3327 15.0002 8.33325C15.4585 8.33325 15.851 8.49659 16.1777 8.82325C16.5043 9.14992 16.6674 9.54214 16.6668 9.99992C16.6668 10.4583 16.5035 10.8508 16.1768 11.1774C15.8502 11.5041 15.4579 11.6671 15.0002 11.6666Z",
                                                                            fill: "black"
                                                                        })
                                                                    })
                                                                })
                                                            })]
                                                        })
                                                    })]
                                                }, l)
                                            })
                                        }), e ? (0, s.jsx)("tr", {
                                            children: (0, s.jsx)("td", {
                                                colSpan: M.length,
                                                className: "text-center",
                                                children: (0, s.jsx)(C.Z, {
                                                    size: "md"
                                                })
                                            })
                                        }) : ""]
                                    })]
                                })
                            }), d ? (0, s.jsx)("div", {
                                className: "load-more-btn",
                                children: (0, s.jsx)(u.Button, {
                                    isBorderBtn: !0,
                                    onClick: g,
                                    className: "border-dark-button",
                                    children: "Load More"
                                })
                            }) : ""]
                        })
                    })
                },
                L = i(45012),
                M = i(9473),
                S = () => {
                    let {
                        formik: e,
                        nameLoading: l,
                        unique: i,
                        handleFileChange: n,
                        handleRadioChange: t
                    } = (0, o.zL)(), [a, r] = (0, c.useState)({
                        Website: !1,
                        Discord: !1,
                        Instagram: !1,
                        Twitter: !1,
                        Telegram: !1
                    }), d = e => {
                        r({ ...a,
                            [e]: !a[e]
                        })
                    };
                    return (0, s.jsxs)("div", {
                        className: "tab-block-right",
                        children: [(0, s.jsx)("h2", {
                            className: "title-text-right",
                            children: "Edit Profile"
                        }), (0, s.jsxs)("form", {
                            onSubmit: e.handleSubmit,
                            children: [(0, s.jsxs)("div", {
                                className: "tab-block-right-account",
                                children: [(0, s.jsxs)("div", {
                                    className: "tab-block-right-account-left",
                                    children: [(0, s.jsx)("h3", {
                                        children: "Account information"
                                    }), (0, s.jsxs)(u.FormGroup, {
                                        children: [(0, s.jsx)(u.Label, {
                                            children: "Full name"
                                        }), (0, s.jsx)(u.Input, {
                                            type: "text",
                                            id: "name",
                                            name: "name",
                                            onChange: e.handleChange,
                                            onBlur: e.handleBlur,
                                            value: e.values.name,
                                            placeholder: "Name",
                                            disabled: "Yes" === e.values.usePns
                                        }), e.touched.name && e.errors.name ? (0, s.jsx)("div", {
                                            className: "text-danger",
                                            children: e.errors.name
                                        }) : null]
                                    }), (0, s.jsxs)(u.FormGroup, {
                                        className: "d-flex align-items-center",
                                        children: [(0, s.jsx)("p", {
                                            children: "Use Domain Name:"
                                        }), (0, s.jsxs)("div", {
                                            className: "d-flex align-items-center mx-2",
                                            children: [(0, s.jsx)("input", {
                                                type: "radio",
                                                id: "useENS",
                                                name: "useDomain",
                                                value: "ENS",
                                                onChange: t,
                                                checked: "ENS" === e.values.useDomain
                                            }), (0, s.jsx)("label", {
                                                htmlFor: "useENS",
                                                className: "ms-1",
                                                children: (0, s.jsx)("a", {
                                                    href: "https://ens.domains/",
                                                    target: "_blank",
                                                    className: "ms-2",
                                                    children: (0, s.jsx)("img", {
                                                        src: "/images/nameDomains/ens.svg",
                                                        alt: "ENS",
                                                        height: "20px"
                                                    })
                                                })
                                            })]
                                        }), (0, s.jsxs)("div", {
                                            className: "d-flex align-items-center mx-2",
                                            children: [(0, s.jsx)("input", {
                                                type: "radio",
                                                id: "usePNS",
                                                name: "useDomain",
                                                value: "PNS",
                                                onChange: t,
                                                checked: "PNS" === e.values.useDomain
                                            }), (0, s.jsx)("label", {
                                                htmlFor: "usePNS",
                                                className: "ms-1",
                                                children: (0, s.jsx)("a", {
                                                    href: "https://www.pulse.domains/",
                                                    target: "_blank",
                                                    className: "ms-1",
                                                    children: (0, s.jsx)("img", {
                                                        src: "/images/nameDomains/pns.png",
                                                        alt: "PNS",
                                                        height: "24px"
                                                    })
                                                })
                                            })]
                                        }), (0, s.jsxs)("div", {
                                            className: "d-flex align-items-center mx-2",
                                            children: [(0, s.jsx)("input", {
                                                type: "radio",
                                                id: "useBNS",
                                                name: "useDomain",
                                                value: "BNS",
                                                onChange: t,
                                                checked: "BNS" === e.values.useDomain
                                            }), (0, s.jsx)("label", {
                                                htmlFor: "useBNS",
                                                className: "ms-1",
                                                children: (0, s.jsx)("a", {
                                                    href: "https://basens.domains/",
                                                    target: "_blank",
                                                    className: "ms-1",
                                                    children: (0, s.jsx)("img", {
                                                        src: "/images/nameDomains/bns.png",
                                                        alt: "BNS",
                                                        height: "22px"
                                                    })
                                                })
                                            })]
                                        })]
                                    }), (0, s.jsxs)(u.FormGroup, {
                                        className: "file-input",
                                        children: [(0, s.jsx)(u.Label, {
                                            children: "Profile Image"
                                        }), (0, s.jsx)(u.Input, {
                                            type: "file",
                                            className: "file-input__input",
                                            name: "profilePic",
                                            onChange: n,
                                            id: "input-file-1",
                                            accept: "image/*"
                                        }), (0, s.jsx)("label", {
                                            class: "file-input__label",
                                            for: "input-file-1",
                                            children: (0, s.jsx)("img", {
                                                src: "/images/plus-icon.svg"
                                            })
                                        })]
                                    }), (0, s.jsxs)(u.FormGroup, {
                                        className: "file-input",
                                        children: [(0, s.jsx)(u.Label, {
                                            children: "Banner Image"
                                        }), (0, s.jsx)(u.Input, {
                                            type: "file",
                                            name: "banners",
                                            onChange: n,
                                            id: "input-file-2",
                                            className: "file-input__input",
                                            accept: "image/*"
                                        }), (0, s.jsx)("label", {
                                            class: "file-input__label",
                                            for: "input-file-2",
                                            children: (0, s.jsx)("img", {
                                                src: "/images/plus-icon.svg"
                                            })
                                        })]
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "tab-block-right-account-right",
                                    children: [(0, s.jsx)("h3", {
                                        children: "Add Social Media"
                                    }), (0, s.jsxs)("div", {
                                        className: "tab-block-right-account-social",
                                        children: [(0, s.jsxs)("div", {
                                            className: "social-block-inner",
                                            children: [(0, s.jsxs)("div", {
                                                className: "social-block",
                                                children: [(0, s.jsx)("div", {
                                                    className: "icon-svg",
                                                    children: (0, s.jsx)("svg", {
                                                        width: "25",
                                                        height: "25",
                                                        viewBox: "0 0 25 25",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: (0, s.jsx)("path", {
                                                            "fill-rule": "evenodd",
                                                            "clip-rule": "evenodd",
                                                            d: "M2.31779 11.2949H6.72904C6.9766 8.24396 7.99773 5.31532 9.68331 2.78174C5.75597 3.80434 2.77389 7.16899 2.31779 11.2949ZM12.1945 3.06989C10.3509 5.44507 9.22299 8.29918 8.94563 11.2949H15.4433C15.166 8.29918 14.0381 5.44507 12.1945 3.06989ZM15.4433 13.5033C15.166 16.4989 14.0381 19.3532 12.1945 21.7283C10.3509 19.3532 9.22299 16.4989 8.94563 13.5033H15.4433ZM6.72904 13.5033H2.31779C2.77389 17.6292 5.75597 20.9938 9.68331 22.0164C7.99773 19.4828 6.9766 16.5543 6.72904 13.5033ZM14.7057 22.0164C16.3912 19.4828 17.4124 16.5543 17.6599 13.5033H22.0712C21.6151 17.6292 18.6331 20.9938 14.7057 22.0164ZM22.0712 11.2949H17.6599C17.4124 8.24396 16.3912 5.31532 14.7057 2.78174C18.6331 3.80434 21.6151 7.16899 22.0712 11.2949ZM0.0488281 12.3991C0.0488281 5.69122 5.48663 0.253418 12.1945 0.253418C18.9024 0.253418 24.3402 5.69122 24.3402 12.3991C24.3402 19.107 18.9024 24.5448 12.1945 24.5448C5.48663 24.5448 0.0488281 19.107 0.0488281 12.3991Z",
                                                            fill: "#565660"
                                                        })
                                                    })
                                                }), (0, s.jsx)("h4", {
                                                    children: "Website"
                                                }), (0, s.jsx)("button", {
                                                    type: "button",
                                                    className: "btn",
                                                    onClick: () => d("Website"),
                                                    children: (0, s.jsx)("svg", {
                                                        width: "20",
                                                        height: "21",
                                                        viewBox: "0 0 20 21",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: (0, s.jsx)("path", {
                                                            d: "M2.5 14.775V17.9H5.625L14.8417 8.68332L11.7167 5.55832L2.5 14.775ZM17.2583 6.26665C17.3356 6.18956 17.3969 6.09798 17.4387 5.99717C17.4805 5.89636 17.502 5.78829 17.502 5.67915C17.502 5.57001 17.4805 5.46194 17.4387 5.36113C17.3969 5.26032 17.3356 5.16875 17.2583 5.09165L15.3083 3.14165C15.2312 3.0644 15.1397 3.00311 15.0389 2.96129C14.938 2.91947 14.83 2.89795 14.7208 2.89795C14.6117 2.89795 14.5036 2.91947 14.4028 2.96129C14.302 3.00311 14.2104 3.0644 14.1333 3.14165L12.6083 4.66665L15.7333 7.79165L17.2583 6.26665Z",
                                                            fill: "#C2C2C2"
                                                        })
                                                    })
                                                })]
                                            }), a.Website && (0, s.jsx)("div", {
                                                className: "edit-input-block",
                                                children: (0, s.jsx)(u.FormGroup, {
                                                    children: (0, s.jsx)(u.Input, {
                                                        type: "text",
                                                        id: "other",
                                                        name: "other",
                                                        onChange: e.handleChange,
                                                        onBlur: e.handleBlur,
                                                        value: e.values.other,
                                                        placeholder: "https://example.com"
                                                    })
                                                })
                                            })]
                                        }), (0, s.jsxs)("div", {
                                            className: "social-block-inner",
                                            children: [(0, s.jsxs)("div", {
                                                className: "social-block",
                                                children: [(0, s.jsx)("div", {
                                                    className: "icon-svg",
                                                    children: (0, s.jsx)("svg", {
                                                        width: "33",
                                                        height: "33",
                                                        viewBox: "0 0 33 33",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: (0, s.jsx)("path", {
                                                            d: "M25.5467 7.1932C23.8264 6.36474 21.9818 5.75437 20.0529 5.40479C20.0178 5.39804 19.9827 5.41489 19.9647 5.44862C19.7274 5.8915 19.4645 6.46927 19.2806 6.9234C17.206 6.59742 15.1422 6.59742 13.1101 6.9234C12.9261 6.45918 12.6537 5.8915 12.4154 5.44862C12.3973 5.41602 12.3622 5.39916 12.3271 5.40479C10.3994 5.75325 8.55466 6.36362 6.83332 7.1932C6.81842 7.19994 6.80565 7.2112 6.79716 7.2258C3.29809 12.7124 2.33955 18.0642 2.80978 23.3496C2.81191 23.3755 2.82573 23.4002 2.84489 23.416C5.15348 25.1954 7.38974 26.2757 9.58447 26.9917C9.6196 27.0029 9.65682 26.9894 9.67917 26.959C10.1983 26.2149 10.6611 25.4303 11.0579 24.6052C11.0813 24.5569 11.059 24.4995 11.0111 24.4805C10.2771 24.1882 9.57809 23.8319 8.90572 23.4272C8.85255 23.3947 8.84828 23.3148 8.89722 23.2766C9.0387 23.1653 9.18022 23.0495 9.31534 22.9326C9.33978 22.9113 9.37384 22.9067 9.40257 22.9202C13.8198 25.0369 18.6018 25.0369 22.9668 22.9202C22.9955 22.9056 23.0297 22.9101 23.0552 22.9315C23.1903 23.0484 23.3317 23.1653 23.4744 23.2766C23.5232 23.3148 23.5201 23.3947 23.4669 23.4272C22.7945 23.8398 22.0956 24.1882 21.3605 24.4793C21.3126 24.4985 21.2912 24.5569 21.3147 24.6052C21.72 25.4292 22.1827 26.2138 22.6923 26.958C22.7136 26.9894 22.752 27.0029 22.7871 26.9917C24.9924 26.2757 27.2287 25.1954 29.5373 23.416C29.5575 23.4002 29.5703 23.3766 29.5724 23.3508C30.1352 17.2402 28.6298 11.9323 25.5818 7.22692C25.5743 7.2112 25.5617 7.19994 25.5467 7.1932ZM11.7175 20.1314C10.3877 20.1314 9.29191 18.8499 9.29191 17.2762C9.29191 15.7024 10.3664 14.4211 11.7175 14.4211C13.0793 14.4211 14.1644 15.7138 14.1431 17.2762C14.1431 18.8499 13.0686 20.1314 11.7175 20.1314ZM20.686 20.1314C19.356 20.1314 18.2604 18.8499 18.2604 17.2762C18.2604 15.7024 19.3348 14.4211 20.686 14.4211C22.0476 14.4211 23.1328 15.7138 23.1116 17.2762C23.1116 18.8499 22.0476 20.1314 20.686 20.1314Z",
                                                            fill: "#565660"
                                                        })
                                                    })
                                                }), (0, s.jsx)("h4", {
                                                    children: "Discord"
                                                }), (0, s.jsx)("button", {
                                                    type: "button",
                                                    className: "btn",
                                                    onClick: () => d("Discord"),
                                                    children: (0, s.jsx)("svg", {
                                                        width: "20",
                                                        height: "21",
                                                        viewBox: "0 0 20 21",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: (0, s.jsx)("path", {
                                                            d: "M2.5 14.775V17.9H5.625L14.8417 8.68332L11.7167 5.55832L2.5 14.775ZM17.2583 6.26665C17.3356 6.18956 17.3969 6.09798 17.4387 5.99717C17.4805 5.89636 17.502 5.78829 17.502 5.67915C17.502 5.57001 17.4805 5.46194 17.4387 5.36113C17.3969 5.26032 17.3356 5.16875 17.2583 5.09165L15.3083 3.14165C15.2312 3.0644 15.1397 3.00311 15.0389 2.96129C14.938 2.91947 14.83 2.89795 14.7208 2.89795C14.6117 2.89795 14.5036 2.91947 14.4028 2.96129C14.302 3.00311 14.2104 3.0644 14.1333 3.14165L12.6083 4.66665L15.7333 7.79165L17.2583 6.26665Z",
                                                            fill: "#C2C2C2"
                                                        })
                                                    })
                                                })]
                                            }), a.Discord && (0, s.jsx)("div", {
                                                className: "edit-input-block",
                                                children: (0, s.jsx)(u.FormGroup, {
                                                    children: (0, s.jsx)(u.Input, {
                                                        type: "text",
                                                        id: "discord",
                                                        name: "discord",
                                                        onChange: e.handleChange,
                                                        onBlur: e.handleBlur,
                                                        value: e.values.discord,
                                                        placeholder: "https://discordapp.com/users/example"
                                                    })
                                                })
                                            })]
                                        }), (0, s.jsxs)("div", {
                                            className: "social-block-inner",
                                            children: [(0, s.jsxs)("div", {
                                                className: "social-block",
                                                children: [(0, s.jsx)("div", {
                                                    className: "icon-svg",
                                                    children: (0, s.jsxs)("svg", {
                                                        width: "33",
                                                        height: "34",
                                                        viewBox: "0 0 33 34",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: [(0, s.jsx)("path", {
                                                            d: "M16.192 10.7598C12.7453 10.7598 9.95312 13.5533 9.95312 16.9986C9.95312 20.4453 12.7453 23.2388 16.192 23.2388C19.636 23.2388 22.4308 20.4453 22.4308 16.9986C22.4308 13.5533 19.636 10.7598 16.192 10.7598ZM16.192 21.0526C13.9532 21.0526 12.138 19.2375 12.138 17C12.138 14.7611 13.9532 12.9473 16.192 12.9473C18.4309 12.9473 20.2433 14.7611 20.2433 17C20.2433 19.2375 18.4309 21.0526 16.192 21.0526Z",
                                                            fill: "#565660"
                                                        }), (0, s.jsx)("path", {
                                                            d: "M22.6801 11.985C23.4835 11.985 24.1349 11.3337 24.1349 10.5302C24.1349 9.72677 23.4835 9.07544 22.6801 9.07544C21.8766 9.07544 21.2253 9.72677 21.2253 10.5302C21.2253 11.3337 21.8766 11.985 22.6801 11.985Z",
                                                            fill: "#565660"
                                                        }), (0, s.jsx)("path", {
                                                            d: "M27.7085 9.05049C27.0756 7.41892 25.7868 6.12878 24.1553 5.49856C23.2119 5.14364 22.2146 4.95335 21.2052 4.93176C19.9056 4.87508 19.494 4.85889 16.1985 4.85889C12.9029 4.85889 12.4805 4.85889 11.1917 4.93176C10.185 4.952 9.18767 5.14229 8.24435 5.49856C6.61144 6.12878 5.32265 7.41892 4.69107 9.05049C4.33615 9.99516 4.14586 10.9911 4.12562 12.0005C4.06759 13.2988 4.05005 13.7104 4.05005 17.0073C4.05005 20.3028 4.05005 20.7225 4.12562 22.014C4.14586 23.0234 4.33615 24.0194 4.69107 24.9654C5.32399 26.5956 6.61279 27.8858 8.2457 28.5173C9.18497 28.8844 10.1823 29.0922 11.1944 29.1246C12.494 29.1813 12.9056 29.1988 16.2012 29.1988C19.4967 29.1988 19.9191 29.1988 21.2079 29.1246C22.216 29.1044 23.2133 28.9127 24.1579 28.5592C25.7895 27.9262 27.0783 26.6375 27.7112 25.0059C28.0662 24.0612 28.2564 23.0653 28.2767 22.0558C28.3347 20.7576 28.3523 20.346 28.3523 17.0491C28.3523 13.7522 28.3523 13.3339 28.2767 12.0424C28.2591 11.0194 28.0702 10.006 27.7085 9.05049ZM26.0648 21.9141C26.0554 22.6915 25.915 23.462 25.6451 24.1921C25.2335 25.2542 24.3955 26.0936 23.3347 26.5012C22.6127 26.7697 21.8516 26.9101 21.081 26.9208C19.799 26.9802 19.4373 26.9951 16.1499 26.9951C12.8597 26.9951 12.5237 26.9951 11.2173 26.9208C10.4495 26.9114 9.68564 26.7697 8.965 26.5012C7.90023 26.0949 7.05678 25.2555 6.64517 24.1921C6.38067 23.4715 6.23762 22.709 6.22547 21.9398C6.16744 20.6577 6.15395 20.2961 6.15395 17.0086C6.15395 13.7198 6.15395 13.3838 6.22547 12.0761C6.23492 11.2988 6.37527 10.5296 6.64517 9.79948C7.05678 8.73471 7.90023 7.89665 8.965 7.4891C9.68564 7.22189 10.4495 7.08019 11.2173 7.0694C12.5007 7.01137 12.8611 6.99518 16.1499 6.99518C19.4387 6.99518 19.7761 6.99518 21.081 7.0694C21.8516 7.07885 22.6127 7.22054 23.3347 7.4891C24.3955 7.898 25.2335 8.7374 25.6451 9.79948C25.9096 10.5201 26.0527 11.2826 26.0648 12.0518C26.1229 13.3352 26.1377 13.6955 26.1377 16.9843C26.1377 20.2718 26.1377 20.6253 26.0797 21.9155L26.0648 21.9141Z",
                                                            fill: "#565660"
                                                        })]
                                                    })
                                                }), (0, s.jsx)("h4", {
                                                    children: "Instagram"
                                                }), (0, s.jsx)("button", {
                                                    type: "button",
                                                    className: "btn",
                                                    onClick: () => d("Instagram"),
                                                    children: (0, s.jsx)("svg", {
                                                        width: "20",
                                                        height: "21",
                                                        viewBox: "0 0 20 21",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: (0, s.jsx)("path", {
                                                            d: "M2.5 14.775V17.9H5.625L14.8417 8.68332L11.7167 5.55832L2.5 14.775ZM17.2583 6.26665C17.3356 6.18956 17.3969 6.09798 17.4387 5.99717C17.4805 5.89636 17.502 5.78829 17.502 5.67915C17.502 5.57001 17.4805 5.46194 17.4387 5.36113C17.3969 5.26032 17.3356 5.16875 17.2583 5.09165L15.3083 3.14165C15.2312 3.0644 15.1397 3.00311 15.0389 2.96129C14.938 2.91947 14.83 2.89795 14.7208 2.89795C14.6117 2.89795 14.5036 2.91947 14.4028 2.96129C14.302 3.00311 14.2104 3.0644 14.1333 3.14165L12.6083 4.66665L15.7333 7.79165L17.2583 6.26665Z",
                                                            fill: "#C2C2C2"
                                                        })
                                                    })
                                                })]
                                            }), a.Instagram && (0, s.jsx)("div", {
                                                className: "edit-input-block",
                                                children: (0, s.jsx)(u.FormGroup, {
                                                    children: (0, s.jsx)(u.Input, {
                                                        type: "text",
                                                        id: "instagram",
                                                        name: "instagram",
                                                        onChange: e.handleChange,
                                                        onBlur: e.handleBlur,
                                                        value: e.values.instagram,
                                                        placeholder: "https://www.instagram.com/example/"
                                                    })
                                                })
                                            })]
                                        }), (0, s.jsxs)("div", {
                                            className: "social-block-inner",
                                            children: [(0, s.jsxs)("div", {
                                                className: "social-block",
                                                children: [(0, s.jsx)("div", {
                                                    className: "icon-svg",
                                                    children: (0, s.jsxs)("svg", {
                                                        width: "28",
                                                        height: "28",
                                                        viewBox: "0 0 28 28",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: [(0, s.jsx)("g", {
                                                            "clip-path": "url(#clip0_552_17304)",
                                                            filter: "url(#filter0_i_552_17304)",
                                                            children: (0, s.jsx)("path", {
                                                                d: "M27.3436 5.23173C26.4552 5.61442 25.5211 5.88091 24.5646 6.02461C25.0118 5.94788 25.6698 5.14221 25.9318 4.8161C26.3297 4.3242 26.633 3.76266 26.8262 3.16C26.8262 3.11525 26.8709 3.0513 26.8262 3.01933C26.8036 3.00702 26.7784 3.00057 26.7527 3.00057C26.727 3.00057 26.7018 3.00702 26.6792 3.01933C25.6406 3.58229 24.5352 4.01196 23.3891 4.29817C23.3492 4.31039 23.3067 4.31148 23.2662 4.30134C23.2256 4.2912 23.1886 4.27021 23.1591 4.24062C23.0699 4.13431 22.9739 4.03392 22.8717 3.9401C22.4042 3.52092 21.8739 3.17785 21.3001 2.92342C20.5255 2.60536 19.6888 2.46761 18.8533 2.52058C18.0425 2.57183 17.251 2.78948 16.5279 3.16C15.8158 3.55064 15.1899 4.08133 14.688 4.72019C14.1599 5.37774 13.7787 6.14084 13.57 6.95816C13.3978 7.7356 13.3783 8.53912 13.5125 9.32401C13.5125 9.45829 13.5125 9.47748 13.3975 9.45829C8.84247 8.7869 5.10518 7.16917 2.05147 3.69712C1.91731 3.54366 1.84703 3.54366 1.73843 3.69712C0.409615 5.71769 1.05486 8.91479 2.71587 10.4942C2.93947 10.7052 3.16946 10.9098 3.41222 11.1016C2.65066 11.0475 1.90769 10.8409 1.22735 10.4942C1.09958 10.411 1.0293 10.4558 1.02291 10.6092C1.0048 10.822 1.0048 11.0359 1.02291 11.2487C1.15621 12.2683 1.55768 13.2342 2.18626 14.0476C2.81484 14.861 3.64798 15.4927 4.60049 15.8781C4.83268 15.9776 5.07463 16.0526 5.32239 16.1019C4.61737 16.2408 3.89428 16.2624 3.18223 16.1658C3.02891 16.1338 2.97141 16.217 3.02891 16.364C3.96802 18.9217 6.00596 19.7018 7.50087 20.1366C7.70531 20.1686 7.90974 20.1686 8.13973 20.2197C8.13973 20.2197 8.13973 20.2197 8.1014 20.2581C7.66059 21.0638 5.87819 21.6073 5.06046 21.8886C3.56789 22.4252 1.97654 22.6303 0.396838 22.4897C0.147686 22.4513 0.0901893 22.4577 0.026304 22.4897C-0.0375812 22.5216 0.026304 22.592 0.0965778 22.6559C0.416004 22.8669 0.73543 23.0524 1.06763 23.2314C2.05661 23.7713 3.10215 24.2002 4.18523 24.5102C9.79435 26.0576 16.1062 24.9195 20.3162 20.7313C23.6255 17.4446 24.7882 12.9112 24.7882 8.37128C24.7882 8.19863 24.999 8.09633 25.1204 8.00681C25.9576 7.35389 26.6958 6.58281 27.3117 5.71769C27.4184 5.58873 27.473 5.42453 27.465 5.2573C27.465 5.16139 27.465 5.18057 27.3436 5.23173Z",
                                                                fill: "#565660"
                                                            })
                                                        }), (0, s.jsxs)("defs", {
                                                            children: [(0, s.jsxs)("filter", {
                                                                id: "filter0_i_552_17304",
                                                                x: "0",
                                                                y: "0.0671387",
                                                                width: "27.4658",
                                                                height: "27.771",
                                                                filterUnits: "userSpaceOnUse",
                                                                "color-interpolation-filters": "sRGB",
                                                                children: [(0, s.jsx)("feFlood", {
                                                                    "flood-opacity": "0",
                                                                    result: "BackgroundImageFix"
                                                                }), (0, s.jsx)("feBlend", {
                                                                    mode: "normal",
                                                                    in: "SourceGraphic",
                                                                    in2: "BackgroundImageFix",
                                                                    result: "shape"
                                                                }), (0, s.jsx)("feColorMatrix", { in: "SourceAlpha",
                                                                    type: "matrix",
                                                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                                                    result: "hardAlpha"
                                                                }), (0, s.jsx)("feOffset", {
                                                                    dy: "0.305175"
                                                                }), (0, s.jsx)("feGaussianBlur", {
                                                                    stdDeviation: "0.762938"
                                                                }), (0, s.jsx)("feComposite", {
                                                                    in2: "hardAlpha",
                                                                    operator: "arithmetic",
                                                                    k2: "-1",
                                                                    k3: "1"
                                                                }), (0, s.jsx)("feColorMatrix", {
                                                                    type: "matrix",
                                                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                                                                }), (0, s.jsx)("feBlend", {
                                                                    mode: "normal",
                                                                    in2: "shape",
                                                                    result: "effect1_innerShadow_552_17304"
                                                                })]
                                                            }), (0, s.jsx)("clipPath", {
                                                                id: "clip0_552_17304",
                                                                children: (0, s.jsx)("rect", {
                                                                    width: "27.4658",
                                                                    height: "27.4658",
                                                                    fill: "white",
                                                                    transform: "translate(0 0.0671387)"
                                                                })
                                                            })]
                                                        })]
                                                    })
                                                }), (0, s.jsx)("h4", {
                                                    children: "Twitter"
                                                }), (0, s.jsx)("button", {
                                                    type: "button",
                                                    className: "btn",
                                                    onClick: () => d("Twitter"),
                                                    children: (0, s.jsx)("svg", {
                                                        width: "20",
                                                        height: "21",
                                                        viewBox: "0 0 20 21",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: (0, s.jsx)("path", {
                                                            d: "M2.5 14.775V17.9H5.625L14.8417 8.68332L11.7167 5.55832L2.5 14.775ZM17.2583 6.26665C17.3356 6.18956 17.3969 6.09798 17.4387 5.99717C17.4805 5.89636 17.502 5.78829 17.502 5.67915C17.502 5.57001 17.4805 5.46194 17.4387 5.36113C17.3969 5.26032 17.3356 5.16875 17.2583 5.09165L15.3083 3.14165C15.2312 3.0644 15.1397 3.00311 15.0389 2.96129C14.938 2.91947 14.83 2.89795 14.7208 2.89795C14.6117 2.89795 14.5036 2.91947 14.4028 2.96129C14.302 3.00311 14.2104 3.0644 14.1333 3.14165L12.6083 4.66665L15.7333 7.79165L17.2583 6.26665Z",
                                                            fill: "#C2C2C2"
                                                        })
                                                    })
                                                })]
                                            }), a.Twitter && (0, s.jsx)("div", {
                                                className: "edit-input-block",
                                                children: (0, s.jsx)(u.FormGroup, {
                                                    children: (0, s.jsx)(u.Input, {
                                                        type: "text",
                                                        id: "twitter",
                                                        name: "twitter",
                                                        onChange: e.handleChange,
                                                        onBlur: e.handleBlur,
                                                        value: e.values.twitter,
                                                        placeholder: "https://twitter.com/example"
                                                    })
                                                })
                                            })]
                                        }), (0, s.jsxs)("div", {
                                            className: "social-block-inner",
                                            children: [(0, s.jsxs)("div", {
                                                className: "social-block",
                                                children: [(0, s.jsx)("div", {
                                                    className: "icon-svg",
                                                    children: (0, s.jsxs)("svg", {
                                                        width: "28",
                                                        height: "29",
                                                        viewBox: "0 0 28 29",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: [(0, s.jsx)("g", {
                                                            filter: "url(#filter0_i_552_17308)",
                                                            children: (0, s.jsx)("path", {
                                                                d: "M3.32881 13.42C3.32881 13.42 14.1266 8.63137 17.8714 6.94515C19.307 6.27072 24.1753 4.11236 24.1753 4.11236C24.1753 4.11236 26.4222 3.16816 26.235 5.46132C26.1725 6.40561 25.6732 9.71045 25.1739 13.2852C24.4249 18.3437 23.6135 23.8743 23.6135 23.8743C23.6135 23.8743 23.4887 25.4256 22.4277 25.6954C21.3667 25.9652 19.619 24.7512 19.307 24.4813C19.0572 24.2791 14.6258 21.2439 13.0031 19.76C12.5662 19.3554 12.0669 18.5461 13.0654 17.6018C15.3124 15.376 17.9962 12.6107 19.619 10.8571C20.368 10.0477 21.1169 8.15922 17.9962 10.4524C13.5648 13.7573 9.19579 16.8599 9.19579 16.8599C9.19579 16.8599 8.19713 17.5343 6.32471 16.9273C4.45221 16.3203 2.2677 15.5109 2.2677 15.5109C2.2677 15.5109 0.769835 14.4992 3.32881 13.42Z",
                                                                fill: "#565660"
                                                            })
                                                        }), (0, s.jsx)("defs", {
                                                            children: (0, s.jsxs)("filter", {
                                                                id: "filter0_i_552_17308",
                                                                x: "0",
                                                                y: "0.867065",
                                                                width: "27.4658",
                                                                height: "27.771",
                                                                filterUnits: "userSpaceOnUse",
                                                                "color-interpolation-filters": "sRGB",
                                                                children: [(0, s.jsx)("feFlood", {
                                                                    "flood-opacity": "0",
                                                                    result: "BackgroundImageFix"
                                                                }), (0, s.jsx)("feBlend", {
                                                                    mode: "normal",
                                                                    in: "SourceGraphic",
                                                                    in2: "BackgroundImageFix",
                                                                    result: "shape"
                                                                }), (0, s.jsx)("feColorMatrix", { in: "SourceAlpha",
                                                                    type: "matrix",
                                                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                                                    result: "hardAlpha"
                                                                }), (0, s.jsx)("feOffset", {
                                                                    dy: "0.305175"
                                                                }), (0, s.jsx)("feGaussianBlur", {
                                                                    stdDeviation: "0.762938"
                                                                }), (0, s.jsx)("feComposite", {
                                                                    in2: "hardAlpha",
                                                                    operator: "arithmetic",
                                                                    k2: "-1",
                                                                    k3: "1"
                                                                }), (0, s.jsx)("feColorMatrix", {
                                                                    type: "matrix",
                                                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                                                                }), (0, s.jsx)("feBlend", {
                                                                    mode: "normal",
                                                                    in2: "shape",
                                                                    result: "effect1_innerShadow_552_17308"
                                                                })]
                                                            })
                                                        })]
                                                    })
                                                }), (0, s.jsx)("h4", {
                                                    children: "Telegram"
                                                }), (0, s.jsx)("button", {
                                                    type: "button",
                                                    className: "btn",
                                                    onClick: () => d("Telegram"),
                                                    children: (0, s.jsx)("svg", {
                                                        width: "20",
                                                        height: "21",
                                                        viewBox: "0 0 20 21",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: (0, s.jsx)("path", {
                                                            d: "M2.5 14.775V17.9H5.625L14.8417 8.68332L11.7167 5.55832L2.5 14.775ZM17.2583 6.26665C17.3356 6.18956 17.3969 6.09798 17.4387 5.99717C17.4805 5.89636 17.502 5.78829 17.502 5.67915C17.502 5.57001 17.4805 5.46194 17.4387 5.36113C17.3969 5.26032 17.3356 5.16875 17.2583 5.09165L15.3083 3.14165C15.2312 3.0644 15.1397 3.00311 15.0389 2.96129C14.938 2.91947 14.83 2.89795 14.7208 2.89795C14.6117 2.89795 14.5036 2.91947 14.4028 2.96129C14.302 3.00311 14.2104 3.0644 14.1333 3.14165L12.6083 4.66665L15.7333 7.79165L17.2583 6.26665Z",
                                                            fill: "#C2C2C2"
                                                        })
                                                    })
                                                })]
                                            }), a.Telegram && (0, s.jsx)("div", {
                                                className: "edit-input-block",
                                                children: (0, s.jsx)(u.FormGroup, {
                                                    children: (0, s.jsx)(u.Input, {
                                                        type: "text",
                                                        id: "telegram",
                                                        name: "telegram",
                                                        onChange: e.handleChange,
                                                        onBlur: e.handleBlur,
                                                        value: e.values.telegram,
                                                        placeholder: "https://t.me/example"
                                                    })
                                                })
                                            })]
                                        })]
                                    })]
                                })]
                            }), (0, s.jsx)("div", {
                                className: "load-more-btn full-width-block",
                                children: (0, s.jsx)(u.Button, {
                                    type: "submit",
                                    disabled: l || !i && e.touched.name,
                                    children: "Update Profile"
                                })
                            })]
                        })]
                    })
                },
                y = i(66517),
                B = e => {
                    let {
                        enabled: l,
                        onClick: i
                    } = e;
                    return (0, s.jsx)("div", {
                        className: "toggle-container",
                        onClick: i,
                        children: (0, s.jsx)("div", {
                            style: {
                                marginLeft: l ? "14px" : "4px"
                            },
                            className: "toggle-enable ".concat("")
                        })
                    })
                },
                Z = i(83977);
            i(99261);
            let _ = {
                apiKey: "AIzaSyAMlYqBa08W01XBCWvdl9IOwsXUZ-nuLUM",
                authDomain: "tesseractx-321b0.firebaseapp.com",
                projectId: "tesseractx-321b0",
                storageBucket: "tesseractx-321b0.appspot.com",
                messagingSenderId: "83184855782",
                appId: "1:83184855782:web:57d33bd6e1a189c6c7e927",
                measurementId: "G-QMQ8F2CF0Y"
            };
            i(1961), i(59889);
            var H = e => {
                    let {
                        title: l,
                        dec: i,
                        mainObj: n,
                        type: t,
                        name: a,
                        isChecked: r,
                        account: c,
                        loading: d,
                        updatePreference: o
                    } = e, h = async () => {
                        o(n, t, !r)
                    };
                    return (0, s.jsxs)("div", {
                        className: "notification-item-list",
                        children: [(0, s.jsx)("input", {
                            type: "checkbox",
                            className: "notification-checkbox",
                            checked: r,
                            disabled: d,
                            onChange: h
                        }), (0, s.jsxs)("div", {
                            className: "notification-item-sub-box",
                            children: [(0, s.jsx)("div", {
                                className: "notification-item-text",
                                children: l
                            }), (0, s.jsx)("div", {
                                className: "notification-item-sub-text",
                                children: i
                            })]
                        })]
                    })
                },
                F = i(86249),
                I = i(9134);
            let P = [{
                    name: "Personal"
                }, {
                    name: "Following"
                }, {
                    name: "Collections"
                }, {
                    name: "System"
                }],
                A = [{
                    key: "itemSold",
                    name: "Item Sold",
                    dec: "When someone purchased one of your items"
                }, {
                    key: "bidActivity",
                    name: "Bid Activity",
                    dec: "When someone bids on one of your items"
                }, {
                    key: "priceChange",
                    name: "Price Change",
                    dec: "When an item you made an offer on changes in price"
                }, {
                    key: "auctionExpiration",
                    name: "Auction Expiration",
                    dec: "When a timed auction you created ends"
                }, {
                    key: "successfulPurchase",
                    name: "Successful Purchase",
                    dec: "When you successfully buy an item"
                }, {
                    key: "successfulMint",
                    name: "Successful Mint",
                    dec: "When you successfully mint an item"
                }];
            var V = () => {
                    let e = (0, Z.ZF)(_),
                        {
                            account: l
                        } = (0, F.a)(),
                        [i, n] = (0, c.useState)(0),
                        [t, a] = (0, c.useState)(!1),
                        {
                            userDetails: r,
                            loading: d
                        } = (0, M.v9)(L.n2) || {},
                        {
                            addFCM: h,
                            updateNotification: C
                        } = (0, o.zL)(),
                        x = r && r.notificationsEnabled,
                        [m, j] = (0, c.useState)({
                            personalNotificationPreferences: {
                                itemSold: !1,
                                bidActivity: !1,
                                priceChange: !1,
                                auctionExpiration: !1,
                                successfulPurchase: !1,
                                successfulMint: !1
                            }
                        });
                    async function g() {
                        if (!e) return;
                        let l = (0, y.KL)(e);
                        try {
                            console.log("log"), Notification.permission;
                            let e = await Notification.requestPermission();
                            if (e && "granted" === e) {
                                let e = await (0, y.LP)(l, {
                                    vapidKey: "BNfmyGJ9kQMlilb7H813hY8Dp6kO1wgonJd50BsCRJG-G43wrhGMekBCC8Qa2DNXuv0HijK06UHaHhL80TWtDOE"
                                });
                                "" != e && h(e)
                            } else "denied" === e && I.Am.error("denied")
                        } catch (e) {
                            console.log(e)
                        }
                    }(0, c.useEffect)(() => {
                        console.log(m)
                    }, [m]), (0, c.useEffect)(() => {
                        x && r.personalNotificationPreferences ? (a(!0), Object.keys(r.personalNotificationPreferences).forEach(e => {
                            console.log(e), m.personalNotificationPreferences.hasOwnProperty(e) && j(l => ({ ...l,
                                personalNotificationPreferences: { ...l.personalNotificationPreferences,
                                    [e]: r.personalNotificationPreferences[e]
                                }
                            }))
                        })) : a(!1)
                    }, [x, r]);
                    let p = (e, l, i) => {
                            j(s => ({ ...s,
                                [e]: { ...s[e],
                                    [l]: i
                                }
                            }))
                        },
                        v = async () => {
                            (null == r ? void 0 : r.notificationsEnabled) ? (console.log("already done "), h("")) : await g()
                        };
                    return (0, s.jsxs)("div", {
                        className: "tab-block-right",
                        children: [(0, s.jsx)("h2", {
                            className: "title-text-right",
                            children: "Edit Notification"
                        }), (0, s.jsx)("div", {
                            children: (0, s.jsxs)("div", {
                                className: "toggle-btn-main",
                                children: [(0, s.jsx)(B, {
                                    enabled: t,
                                    onClick: () => v()
                                }), (0, s.jsx)("div", {
                                    children: "Enable"
                                })]
                            })
                        }), (0, s.jsxs)("div", {
                            children: [(0, s.jsx)("div", {
                                className: "tab-notification",
                                children: P.map((e, l) => (0, s.jsx)("div", {
                                    className: l === i ? "active-tab" : "",
                                    onClick: () => n(l),
                                    children: (0, s.jsx)("div", {
                                        className: "text-tab-notification",
                                        children: e.name
                                    })
                                }, l))
                            }), (0, s.jsxs)("div", {
                                className: "tab-content",
                                children: [0 === i && (0, s.jsx)("div", {
                                    className: "n-Preferences",
                                    children: null == A ? void 0 : A.map(e => {
                                        var i, n;
                                        let t = null == e ? void 0 : e.key,
                                            a = null !== (n = null == m ? void 0 : null === (i = m.personalNotificationPreferences) || void 0 === i ? void 0 : i[t]) && void 0 !== n && n;
                                        return (0, s.jsx)(H, {
                                            title: e.name,
                                            dec: e.dec,
                                            loading: d || !(null == r ? void 0 : r.notificationsEnabled),
                                            type: t,
                                            mainObj: "personalNotificationPreferences",
                                            account: l,
                                            isChecked: a,
                                            updatePreference: p
                                        })
                                    })
                                }), 1 === i && (0, s.jsx)("div", {
                                    children: "Content for Tab 2"
                                }), 2 === i && (0, s.jsx)("div", {
                                    children: "Content for Tab 3"
                                }), 3 === i && (0, s.jsx)("div", {
                                    children: "Content for Tab 4"
                                })]
                            }), (0, s.jsx)("div", {
                                className: "load-more-btn full-width-block",
                                children: (0, s.jsx)(u.Button, {
                                    onClick: () => {
                                        C("personalNotificationPreferences", m.personalNotificationPreferences)
                                    },
                                    children: "Update Setting"
                                })
                            })]
                        })]
                    })
                },
                E = i(30381),
                O = i.n(E),
                D = () => {
                    let {
                        account: e,
                        loading: l,
                        events: i,
                        count: n,
                        totalPages: t,
                        page: a,
                        limit: r,
                        hasMore: c,
                        payload: d,
                        eventsNames: h,
                        filterChange: j,
                        handlePageChange: g,
                        handleSearch: p,
                        resetHandler: v
                    } = (0, o.ms)(), f = {
                        Purchase: "Purchase",
                        Offer: "Offer",
                        Bids: "Bid",
                        Following: "Following",
                        Like: "Like",
                        Minted: "Minted"
                    }, w = {
                        Purchase: "Purchased by",
                        Offer: "Offered by",
                        Bids: "Bided by",
                        Following: "Started Following",
                        Like: "Liked by",
                        Minted: "Mint by"
                    }, b = {
                        Purchase: (0, s.jsx)("svg", {
                            width: "21",
                            height: "21",
                            viewBox: "0 0 21 21",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, s.jsx)("path", {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M8.35393 7.09367C8.35393 6.43063 8.61732 5.79474 9.08616 5.3259C9.555 4.85706 10.1909 4.59367 10.8539 4.59367C11.517 4.59367 12.1529 4.85706 12.6217 5.3259C13.0905 5.79474 13.3539 6.43063 13.3539 7.09367H8.35393ZM6.68726 7.09367C6.68726 5.9886 7.12625 4.92879 7.90765 4.14739C8.68905 3.36599 9.74886 2.927 10.8539 2.927C11.959 2.927 13.0188 3.36599 13.8002 4.14739C14.5816 4.92879 15.0206 5.9886 15.0206 7.09367H17.5206C17.6364 7.09366 17.7509 7.11777 17.8568 7.16447C17.9627 7.21116 18.0577 7.27941 18.1358 7.36487C18.2139 7.45033 18.2733 7.55112 18.3103 7.66081C18.3473 7.77051 18.361 7.88671 18.3506 8.002L17.6548 15.6537C17.5982 16.2748 17.3115 16.8524 16.851 17.273C16.3904 17.6936 15.7893 17.9269 15.1656 17.927H6.54226C5.91855 17.9269 5.31742 17.6936 4.85688 17.273C4.39633 16.8524 4.10965 16.2748 4.0531 15.6537L3.35726 8.002C3.34685 7.88671 3.36056 7.77051 3.39754 7.66081C3.43452 7.55112 3.49394 7.45033 3.57203 7.36487C3.65012 7.27941 3.74516 7.21116 3.85108 7.16447C3.95701 7.11777 4.0715 7.09366 4.18726 7.09367H6.68726Z",
                                fill: "black"
                            })
                        }),
                        Offer: (0, s.jsxs)("svg", {
                            width: "21",
                            height: "21",
                            viewBox: "0 0 21 21",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, s.jsx)("g", {
                                "clip-path": "url(#clip0_577_5648)",
                                children: (0, s.jsx)("path", {
                                    d: "M17.5609 9.93627L8.81087 19.3113C8.71814 19.4102 8.59574 19.4763 8.46215 19.4996C8.32855 19.5229 8.191 19.5021 8.07026 19.4404C7.94952 19.3787 7.85213 19.2793 7.7928 19.1574C7.73346 19.0354 7.7154 18.8975 7.74133 18.7644L8.88665 13.0355L4.3843 11.3449C4.28761 11.3087 4.20138 11.2491 4.13332 11.1715C4.06526 11.0939 4.01749 11.0006 3.99428 10.9C3.97106 10.7994 3.97313 10.6946 4.00029 10.595C4.02745 10.4954 4.07886 10.4041 4.14993 10.3292L12.8999 0.954242C12.9927 0.855286 13.115 0.789173 13.2486 0.765881C13.3822 0.742588 13.5198 0.76338 13.6405 0.825118C13.7613 0.886857 13.8587 0.986192 13.918 1.10813C13.9773 1.23008 13.9954 1.36801 13.9695 1.50112L12.821 7.23627L17.3234 8.92455C17.4193 8.96097 17.5049 9.02046 17.5724 9.09778C17.6399 9.1751 17.6874 9.26786 17.7106 9.36787C17.7337 9.46787 17.7319 9.57205 17.7052 9.67118C17.6786 9.77032 17.6279 9.86137 17.5577 9.93627H17.5609Z",
                                    fill: "black"
                                })
                            }), (0, s.jsx)("defs", {
                                children: (0, s.jsx)("clipPath", {
                                    id: "clip0_577_5648",
                                    children: (0, s.jsx)("rect", {
                                        width: "20",
                                        height: "20",
                                        fill: "white",
                                        transform: "translate(0.853882 0.134766)"
                                    })
                                })
                            })]
                        }),
                        Bids: (0, s.jsxs)("svg", {
                            width: "21",
                            height: "21",
                            viewBox: "0 0 21 21",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, s.jsx)("g", {
                                "clip-path": "url(#clip0_577_5620)",
                                children: (0, s.jsx)("path", {
                                    d: "M2.5922 9.14533C2.39869 9.3388 2.24518 9.56848 2.14045 9.82128C2.03572 10.0741 1.98181 10.345 1.98181 10.6187C1.98181 10.8923 2.03572 11.1633 2.14045 11.416C2.24518 11.6688 2.39869 11.8985 2.5922 12.092L4.9497 14.4487C5.28815 14.7871 5.73281 14.9987 6.20892 15.0478C6.68503 15.097 7.16354 14.9807 7.56399 14.7185C7.96444 14.4564 8.2624 14.0643 8.40777 13.6083C8.55313 13.1522 8.53704 12.6601 8.3622 12.2145L9.02137 11.5553L14.3605 17.7153C14.5699 17.9567 14.8268 18.1523 15.1151 18.2901C15.4034 18.4279 15.7169 18.5048 16.0363 18.5161C16.3556 18.5275 16.6738 18.4729 16.9711 18.3559C17.2685 18.2388 17.5385 18.0618 17.7644 17.8359C17.9904 17.61 18.1674 17.3399 18.2844 17.0426C18.4014 16.7453 18.456 16.427 18.4447 16.1077C18.4334 15.7884 18.3564 15.4748 18.2187 15.1865C18.0809 14.8982 17.8852 14.6414 17.6439 14.432L11.4839 9.09283L12.143 8.4345C12.5887 8.60977 13.0812 8.62612 13.5376 8.48079C13.9939 8.33547 14.3863 8.03735 14.6486 7.63663C14.9109 7.23591 15.0271 6.75705 14.9776 6.28068C14.9282 5.8043 14.7162 5.35951 14.3772 5.02117L12.0205 2.66367C11.6821 2.32522 11.2374 2.11363 10.7613 2.06448C10.2852 2.01533 9.80669 2.13163 9.40625 2.3938C9.0058 2.65597 8.70784 3.04804 8.56247 3.50407C8.4171 3.9601 8.43319 4.45227 8.60803 4.89783L4.8272 8.67867C4.44967 8.53046 4.03709 8.49567 3.64008 8.57856C3.24306 8.66146 2.87888 8.85844 2.5922 9.14533Z",
                                    fill: "black"
                                })
                            }), (0, s.jsx)("defs", {
                                children: (0, s.jsx)("clipPath", {
                                    id: "clip0_577_5620",
                                    children: (0, s.jsx)("rect", {
                                        width: "20",
                                        height: "20",
                                        fill: "white",
                                        transform: "translate(0.353882 0.427002)"
                                    })
                                })
                            })]
                        }),
                        Following: (0, s.jsx)("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 20 20",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, s.jsx)("path", {
                                d: "M13.3334 9.16675C14.7167 9.16675 15.825 8.05008 15.825 6.66675C15.825 5.28341 14.7167 4.16675 13.3334 4.16675C11.95 4.16675 10.8334 5.28341 10.8334 6.66675C10.8334 8.05008 11.95 9.16675 13.3334 9.16675ZM6.66671 9.16675C8.05004 9.16675 9.15837 8.05008 9.15837 6.66675C9.15837 5.28341 8.05004 4.16675 6.66671 4.16675C5.28337 4.16675 4.16671 5.28341 4.16671 6.66675C4.16671 8.05008 5.28337 9.16675 6.66671 9.16675ZM6.66671 10.8334C4.72504 10.8334 0.833374 11.8084 0.833374 13.7501V15.8334H12.5V13.7501C12.5 11.8084 8.60837 10.8334 6.66671 10.8334ZM13.3334 10.8334C13.0917 10.8334 12.8167 10.8501 12.525 10.8751C13.4917 11.5751 14.1667 12.5167 14.1667 13.7501V15.8334H19.1667V13.7501C19.1667 11.8084 15.275 10.8334 13.3334 10.8334Z",
                                fill: "black"
                            })
                        }),
                        Like: (0, s.jsx)("svg", {
                            width: "21",
                            height: "21",
                            viewBox: "0 0 21 21",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, s.jsx)("path", {
                                d: "M10.8538 17.7809L9.64551 16.6976C8.24273 15.4337 7.08301 14.3434 6.16634 13.4268C5.24967 12.5101 4.52051 11.687 3.97884 10.9576C3.43717 10.2287 3.05884 9.5587 2.84384 8.94759C2.62884 8.33648 2.52106 7.71148 2.52051 7.07259C2.52051 5.76704 2.95801 4.67676 3.83301 3.80176C4.70801 2.92676 5.79829 2.48926 7.10384 2.48926C7.82606 2.48926 8.51356 2.64204 9.16634 2.94759C9.81912 3.25315 10.3816 3.6837 10.8538 4.23926C11.3261 3.6837 11.8886 3.25315 12.5413 2.94759C13.1941 2.64204 13.8816 2.48926 14.6038 2.48926C15.9094 2.48926 16.9997 2.92676 17.8747 3.80176C18.7497 4.67676 19.1872 5.76704 19.1872 7.07259C19.1872 7.71148 19.0794 8.33648 18.8638 8.94759C18.6483 9.5587 18.27 10.2287 17.7288 10.9576C17.1872 11.687 16.458 12.5101 15.5413 13.4268C14.6247 14.3434 13.465 15.4337 12.0622 16.6976L10.8538 17.7809Z",
                                fill: "black"
                            })
                        }),
                        Minted: (0, s.jsxs)("svg", {
                            width: "21",
                            height: "21",
                            viewBox: "0 0 21 21",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, s.jsx)("g", {
                                "clip-path": "url(#clip0_577_5620)",
                                children: (0, s.jsx)("path", {
                                    d: "M2.5922 9.14533C2.39869 9.3388 2.24518 9.56848 2.14045 9.82128C2.03572 10.0741 1.98181 10.345 1.98181 10.6187C1.98181 10.8923 2.03572 11.1633 2.14045 11.416C2.24518 11.6688 2.39869 11.8985 2.5922 12.092L4.9497 14.4487C5.28815 14.7871 5.73281 14.9987 6.20892 15.0478C6.68503 15.097 7.16354 14.9807 7.56399 14.7185C7.96444 14.4564 8.2624 14.0643 8.40777 13.6083C8.55313 13.1522 8.53704 12.6601 8.3622 12.2145L9.02137 11.5553L14.3605 17.7153C14.5699 17.9567 14.8268 18.1523 15.1151 18.2901C15.4034 18.4279 15.7169 18.5048 16.0363 18.5161C16.3556 18.5275 16.6738 18.4729 16.9711 18.3559C17.2685 18.2388 17.5385 18.0618 17.7644 17.8359C17.9904 17.61 18.1674 17.3399 18.2844 17.0426C18.4014 16.7453 18.456 16.427 18.4447 16.1077C18.4334 15.7884 18.3564 15.4748 18.2187 15.1865C18.0809 14.8982 17.8852 14.6414 17.6439 14.432L11.4839 9.09283L12.143 8.4345C12.5887 8.60977 13.0812 8.62612 13.5376 8.48079C13.9939 8.33547 14.3863 8.03735 14.6486 7.63663C14.9109 7.23591 15.0271 6.75705 14.9776 6.28068C14.9282 5.8043 14.7162 5.35951 14.3772 5.02117L12.0205 2.66367C11.6821 2.32522 11.2374 2.11363 10.7613 2.06448C10.2852 2.01533 9.80669 2.13163 9.40625 2.3938C9.0058 2.65597 8.70784 3.04804 8.56247 3.50407C8.4171 3.9601 8.43319 4.45227 8.60803 4.89783L4.8272 8.67867C4.44967 8.53046 4.03709 8.49567 3.64008 8.57856C3.24306 8.66146 2.87888 8.85844 2.5922 9.14533Z",
                                    fill: "black"
                                })
                            }), (0, s.jsx)("defs", {
                                children: (0, s.jsx)("clipPath", {
                                    id: "clip0_577_5620",
                                    children: (0, s.jsx)("rect", {
                                        width: "20",
                                        height: "20",
                                        fill: "white",
                                        transform: "translate(0.353882 0.427002)"
                                    })
                                })
                            })]
                        })
                    }, N = l => {
                        let {
                            event: i
                        } = l;
                        return i.name === f.Purchase || i.name === f.Minted ? (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)("h3", {
                                children: (null == i ? void 0 : i.itemName) || ""
                            }), (0, s.jsxs)("p", {
                                className: "text-title-name",
                                children: [w[i.name] || "", " ", (0, s.jsx)("span", {
                                    children: (null == i ? void 0 : i.toUsername) ? (null == i ? void 0 : i.toUseraddress) !== e ? null == i ? void 0 : i.toUsername : "You" : "unknown"
                                }), " ", (null == i ? void 0 : i.price) ? (0, m.IA)(null == i ? void 0 : i.price, 4) : "", " ", (null == i ? void 0 : i.price) ? null == i ? void 0 : i.symbol : ""]
                            })]
                        }) : i.name !== f.Following ? (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)("h3", {
                                children: (null == i ? void 0 : i.itemName) || ""
                            }), (0, s.jsxs)("p", {
                                className: "text-title-name",
                                children: [w[i.name] || "", " ", (0, s.jsx)("span", {
                                    children: (null == i ? void 0 : i.fromUsername) ? (null == i ? void 0 : i.fromUseraddress) !== e ? null == i ? void 0 : i.fromUsername : "You" : "unknown"
                                }), " ", (null == i ? void 0 : i.price) ? (0, m.IA)(null == i ? void 0 : i.price, 4) : "", " ", (null == i ? void 0 : i.price) ? null == i ? void 0 : i.symbol : ""]
                            })]
                        }) : (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)("h3", {
                                children: (null == i ? void 0 : i.fromUsername) ? (null == i ? void 0 : i.fromUseraddress) !== e ? null == i ? void 0 : i.fromUsername : "You" : "unknown"
                            }), (0, s.jsxs)("p", {
                                className: "text-title-name",
                                children: ["Started Following", " ", (0, s.jsx)("span", {
                                    children: (null == i ? void 0 : i.toUsername) ? (null == i ? void 0 : i.toUseraddress) !== e ? null == i ? void 0 : i.toUsername : "You" : "unknown"
                                })]
                            })]
                        })
                    };
                    return (0, s.jsxs)("div", {
                        className: "tab-block-right",
                        children: [(0, s.jsx)("h2", {
                            className: "title-text-right",
                            children: "History"
                        }), (0, s.jsxs)("div", {
                            className: "tab-block-right-history-left",
                            children: [(0, s.jsxs)("div", {
                                className: "tab-block-right-history-profile",
                                children: [(null == i ? void 0 : i.length) ? null == i ? void 0 : i.map((e, l) => (0, s.jsxs)("div", {
                                    className: "tab-block-right-history-profile-inner",
                                    children: [(0, s.jsxs)("div", {
                                        className: "tab-block-right-history-profile-left",
                                        children: [(0, s.jsx)("img", {
                                            src: (null == e ? void 0 : e.itemImage) || (null == e ? void 0 : e.fromUserlogo) || "../../images/profile-img-new.png",
                                            alt: "img"
                                        }), (0, s.jsxs)("div", {
                                            className: "tab-block-right-history-content-left",
                                            children: [(0, s.jsx)(N, {
                                                event: e
                                            }), (0, s.jsxs)("p", {
                                                className: "text-date-time",
                                                children: [O()(new Date(e.date)).format("LT"), " ", (0, s.jsx)("span", {
                                                    children: "•"
                                                }), " ", O()(new Date(e.date)).format("L")]
                                            })]
                                        })]
                                    }), (0, s.jsx)("div", {
                                        className: "tab-block-right-history-profile-right",
                                        children: (0, s.jsxs)("button", {
                                            children: [b[e.name], (0, s.jsx)("span", {
                                                children: f[e.name]
                                            })]
                                        })
                                    })]
                                }, l)) : "", l ? (0, s.jsx)(s.Fragment, {
                                    children: (0, s.jsx)("div", {
                                        className: "d-flex justify-content-center align-items-center items-center mt-3",
                                        children: (0, s.jsx)(C.Z, {
                                            size: "md"
                                        })
                                    })
                                }) : !(null == i ? void 0 : i.length) && (0, s.jsx)("p", {
                                    className: "text-center mt-5",
                                    children: "No events found"
                                }), !l && c && (0, s.jsx)("div", {
                                    className: "load-more-btn",
                                    children: (0, s.jsx)(u.Button, {
                                        className: "border-dark-button",
                                        isBorderBtn: !0,
                                        onClick: g,
                                        children: "Load More"
                                    })
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "tab-block-right-history-search",
                                children: [(0, s.jsx)("div", {
                                    className: "search-box-inner",
                                    children: (0, s.jsxs)("div", {
                                        className: "search-box-form",
                                        children: [(0, s.jsx)("input", {
                                            type: "text",
                                            name: "GlobalSearch",
                                            autoComplete: "off",
                                            placeholder: "Search",
                                            value: d.search,
                                            onChange: p
                                        }), (0, s.jsx)("button", {
                                            children: (0, s.jsx)("svg", {
                                                width: "20",
                                                height: "20",
                                                viewBox: "0 0 20 20",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: (0, s.jsx)("path", {
                                                    d: "M18.125 17.2411L13.405 12.5211C14.5393 11.1595 15.1049 9.41291 14.9842 7.64483C14.8635 5.87675 14.0658 4.22326 12.757 3.02834C11.4483 1.83341 9.72922 1.18906 7.95748 1.22932C6.18574 1.26958 4.49773 1.99134 3.2446 3.24448C1.99147 4.49761 1.2697 6.18562 1.22944 7.95736C1.18918 9.7291 1.83354 11.4482 3.02846 12.7569C4.22338 14.0657 5.87687 14.8634 7.64495 14.9841C9.41303 15.1047 11.1596 14.5391 12.5213 13.4049L17.2413 18.1249L18.125 17.2411ZM2.50001 8.12489C2.50001 7.01237 2.82991 5.92483 3.44799 4.99981C4.06608 4.07478 4.94458 3.35381 5.97242 2.92807C7.00025 2.50232 8.13125 2.39093 9.22239 2.60797C10.3135 2.82501 11.3158 3.36074 12.1025 4.14741C12.8892 4.93408 13.4249 5.93636 13.6419 7.02751C13.859 8.11865 13.7476 9.24965 13.3218 10.2775C12.8961 11.3053 12.1751 12.1838 11.2501 12.8019C10.3251 13.42 9.23753 13.7499 8.12501 13.7499C6.63368 13.7482 5.2039 13.1551 4.14936 12.1005C3.09483 11.046 2.50167 9.61622 2.50001 8.12489Z",
                                                    fill: "#9E9E9E"
                                                })
                                            })
                                        })]
                                    })
                                }), (0, s.jsxs)("div", {
                                    className: "search-filter-block",
                                    children: [(0, s.jsxs)("div", {
                                        className: "search-filter-block-title",
                                        children: [(0, s.jsx)("h4", {
                                            children: "Filter"
                                        }), (0, s.jsx)("p", {
                                            onClick: v,
                                            className: "pointer",
                                            children: "Reset"
                                        })]
                                    }), (0, s.jsx)("div", {
                                        className: "search-filter-block-button",
                                        children: Object.keys(f).map((e, l) => (0, s.jsxs)("button", {
                                            onClick: () => j(x.Kg[e]),
                                            className: "".concat((null == d ? void 0 : d.event) === x.Kg[e] ? "selected" : ""),
                                            children: [b[e], (0, s.jsx)("span", {
                                                children: x.Kg[e]
                                            })]
                                        }, l))
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                U = i(59343),
                G = i(27098),
                T = i(88665),
                K = () => {
                    var e, l, i, n;
                    let {
                        loading: o,
                        userDetails: h,
                        walletDetalis: {
                            account: C,
                            chainId: j
                        }
                    } = (0, M.v9)(L.n2), [u, p] = (0, c.useState)(), {
                        query: w
                    } = (0, g.useRouter)();
                    (0, c.useEffect)(() => {
                        var e;
                        p(null == h ? void 0 : null === (e = h.marketDetails) || void 0 === e ? void 0 : e.findIndex(e => e.chainId === j))
                    }, [h, j]);
                    let [b, y] = (0, c.useState)(0);
                    return (0, c.useEffect)(() => {
                        w.t && (w.t > 5 ? y(0) : y(parseInt(w.t)))
                    }, [w]), (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(T.Z, {
                            title: "Profile"
                        }), (0, s.jsx)(G.o_, {
                            children: (0, s.jsxs)(d.Fd, {
                                className: "dark-mode-body",
                                children: [(0, s.jsx)("div", {
                                    className: "top-collection-block-main",
                                    children: (0, s.jsxs)("div", {
                                        className: "top-collection-block",
                                        children: [(0, s.jsx)("div", {
                                            className: "top-banner-main",
                                            children: (0, s.jsx)(U.Z, {
                                                src: (null == h ? void 0 : h.bannerUrl) || "../../images/banner-collection.png",
                                                alt: "Banner"
                                            })
                                        }), (0, s.jsx)("div", {
                                            className: "add-to-block",
                                            children: (0, s.jsxs)("ul", {
                                                children: [(null == h ? void 0 : h.other) && (0, s.jsx)("li", {
                                                    children: (0, s.jsx)(t(), {
                                                        href: null == h ? void 0 : h.other,
                                                        target: "blank",
                                                        children: (0, s.jsx)("svg", {
                                                            width: "18",
                                                            height: "18",
                                                            viewBox: "0 0 18 18",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: (0, s.jsx)("path", {
                                                                d: "M12.6333 10.667C12.7 10.117 12.75 9.56699 12.75 9.00033C12.75 8.43366 12.7 7.88366 12.6333 7.33366H15.45C15.5833 7.86699 15.6666 8.42533 15.6666 9.00033C15.6666 9.57533 15.5833 10.1337 15.45 10.667M11.1583 15.3003C11.6583 14.3753 12.0416 13.3753 12.3083 12.3337H14.7666C13.9593 13.7239 12.6784 14.777 11.1583 15.3003ZM10.95 10.667H7.04996C6.96663 10.117 6.91663 9.56699 6.91663 9.00033C6.91663 8.43366 6.96663 7.87533 7.04996 7.33366H10.95C11.025 7.87533 11.0833 8.43366 11.0833 9.00033C11.0833 9.56699 11.025 10.117 10.95 10.667ZM8.99996 15.6337C8.30829 14.6337 7.74996 13.5253 7.40829 12.3337H10.5916C10.25 13.5253 9.69163 14.6337 8.99996 15.6337ZM5.66663 5.66699H3.23329C4.03234 4.273 5.31229 3.21823 6.83329 2.70033C6.33329 3.62533 5.95829 4.62533 5.66663 5.66699ZM3.23329 12.3337H5.66663C5.95829 13.3753 6.33329 14.3753 6.83329 15.3003C5.31548 14.7767 4.03733 13.7234 3.23329 12.3337ZM2.54996 10.667C2.41663 10.1337 2.33329 9.57533 2.33329 9.00033C2.33329 8.42533 2.41663 7.86699 2.54996 7.33366H5.36663C5.29996 7.88366 5.24996 8.43366 5.24996 9.00033C5.24996 9.56699 5.29996 10.117 5.36663 10.667M8.99996 2.35866C9.69163 3.35866 10.25 4.47533 10.5916 5.66699H7.40829C7.74996 4.47533 8.30829 3.35866 8.99996 2.35866ZM14.7666 5.66699H12.3083C12.0475 4.63487 11.6613 3.63857 11.1583 2.70033C12.6916 3.22533 13.9666 4.28366 14.7666 5.66699ZM8.99996 0.666992C4.39163 0.666992 0.666626 4.41699 0.666626 9.00033C0.666626 11.2105 1.5446 13.3301 3.1074 14.8929C3.88122 15.6667 4.79988 16.2805 5.81093 16.6993C6.82198 17.1181 7.90561 17.3337 8.99996 17.3337C11.2101 17.3337 13.3297 16.4557 14.8925 14.8929C16.4553 13.3301 17.3333 11.2105 17.3333 9.00033C17.3333 7.90598 17.1177 6.82234 16.699 5.8113C16.2802 4.80025 15.6663 3.88159 14.8925 3.10777C14.1187 2.33395 13.2 1.72012 12.189 1.30133C11.1779 0.88254 10.0943 0.666992 8.99996 0.666992Z",
                                                                fill: "white"
                                                            })
                                                        })
                                                    })
                                                }), (null == h ? void 0 : h.discord) && (0, s.jsx)("li", {
                                                    children: (0, s.jsx)(t(), {
                                                        href: null == h ? void 0 : h.discord,
                                                        target: "blank",
                                                        children: (0, s.jsx)("svg", {
                                                            width: "20",
                                                            height: "20",
                                                            viewBox: "0 0 20 20",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: (0, s.jsx)("path", {
                                                                d: "M16.0584 4.44138C14.9501 3.92471 13.7501 3.54971 12.5001 3.33305C12.4891 3.3327 12.4782 3.33475 12.4681 3.33907C12.458 3.34339 12.449 3.34987 12.4417 3.35805C12.2917 3.63305 12.1167 3.99138 12.0001 4.26638C10.6742 4.06638 9.32589 4.06638 8.00006 4.26638C7.88339 3.98305 7.70839 3.63305 7.55006 3.35805C7.54172 3.34138 7.51672 3.33305 7.49172 3.33305C6.24172 3.54971 5.05006 3.92471 3.93339 4.44138C3.92506 4.44138 3.91672 4.44971 3.90839 4.45805C1.64172 7.84971 1.01672 11.1497 1.32506 14.4164C1.32506 14.433 1.33339 14.4497 1.35006 14.458C2.85006 15.558 4.29172 16.2247 5.71672 16.6664C5.74172 16.6747 5.76672 16.6664 5.77506 16.6497C6.10839 16.1914 6.40839 15.708 6.66672 15.1997C6.68339 15.1664 6.66672 15.133 6.63339 15.1247C6.15839 14.9414 5.70839 14.7247 5.26672 14.4747C5.23339 14.458 5.23339 14.408 5.25839 14.383C5.35006 14.3164 5.44172 14.2414 5.53339 14.1747C5.55006 14.158 5.57506 14.158 5.59172 14.1664C8.45839 15.4747 11.5501 15.4747 14.3834 14.1664C14.4001 14.158 14.4251 14.158 14.4417 14.1747C14.5334 14.2497 14.6251 14.3164 14.7167 14.3914C14.7501 14.4164 14.7501 14.4664 14.7084 14.483C14.2751 14.7414 13.8167 14.9497 13.3417 15.133C13.3084 15.1414 13.3001 15.183 13.3084 15.208C13.5751 15.7164 13.8751 16.1997 14.2001 16.658C14.2251 16.6664 14.2501 16.6747 14.2751 16.6664C15.7084 16.2247 17.1501 15.558 18.6501 14.458C18.6667 14.4497 18.6751 14.433 18.6751 14.4164C19.0417 10.6414 18.0667 7.36638 16.0917 4.45805C16.0834 4.44971 16.0751 4.44138 16.0584 4.44138ZM7.10006 12.4247C6.24172 12.4247 5.52506 11.633 5.52506 10.658C5.52506 9.68305 6.22506 8.89138 7.10006 8.89138C7.98339 8.89138 8.68339 9.69138 8.67506 10.658C8.67506 11.633 7.97506 12.4247 7.10006 12.4247ZM12.9084 12.4247C12.0501 12.4247 11.3334 11.633 11.3334 10.658C11.3334 9.68305 12.0334 8.89138 12.9084 8.89138C13.7917 8.89138 14.4917 9.69138 14.4834 10.658C14.4834 11.633 13.7917 12.4247 12.9084 12.4247Z",
                                                                fill: "white"
                                                            })
                                                        })
                                                    })
                                                }), (null == h ? void 0 : h.twitter) && (0, s.jsx)("li", {
                                                    children: (0, s.jsx)(t(), {
                                                        href: null == h ? void 0 : h.twitter,
                                                        target: "blank",
                                                        children: (0, s.jsxs)("svg", {
                                                            width: "20",
                                                            height: "20",
                                                            viewBox: "0 0 20 20",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: [(0, s.jsx)("g", {
                                                                "clip-path": "url(#clip0_543_15933)",
                                                                children: (0, s.jsx)("path", {
                                                                    d: "M15.7508 0.960938H18.8175L12.1175 8.61927L20 19.0384H13.8283L8.995 12.7184L3.46333 19.0384H0.395L7.56167 10.8468L0 0.961771H6.32833L10.6975 6.73844L15.7508 0.960938ZM14.675 17.2034H16.3742L5.405 2.7001H3.58167L14.675 17.2034Z",
                                                                    fill: "white"
                                                                })
                                                            }), (0, s.jsx)("defs", {
                                                                children: (0, s.jsx)("clipPath", {
                                                                    id: "clip0_543_15933",
                                                                    children: (0, s.jsx)("rect", {
                                                                        width: "20",
                                                                        height: "20",
                                                                        fill: "white"
                                                                    })
                                                                })
                                                            })]
                                                        })
                                                    })
                                                }), (null == h ? void 0 : h.instagram) && (0, s.jsx)("li", {
                                                    children: (0, s.jsx)(t(), {
                                                        href: null == h ? void 0 : h.instagram,
                                                        target: "blank",
                                                        children: (0, s.jsx)("svg", {
                                                            width: "20",
                                                            height: "20",
                                                            viewBox: "0 0 20 20",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: (0, s.jsx)("path", {
                                                                d: "M6.50002 1.66699H13.5C16.1667 1.66699 18.3334 3.83366 18.3334 6.50033V13.5003C18.3334 14.7822 17.8241 16.0116 16.9177 16.918C16.0113 17.8244 14.7819 18.3337 13.5 18.3337H6.50002C3.83335 18.3337 1.66669 16.167 1.66669 13.5003V6.50033C1.66669 5.21845 2.17591 3.98907 3.08234 3.08264C3.98876 2.17622 5.21814 1.66699 6.50002 1.66699ZM6.33335 3.33366C5.5377 3.33366 4.77464 3.64973 4.21203 4.21234C3.64942 4.77495 3.33335 5.53801 3.33335 6.33366V13.667C3.33335 15.3253 4.67502 16.667 6.33335 16.667H13.6667C14.4623 16.667 15.2254 16.3509 15.788 15.7883C16.3506 15.2257 16.6667 14.4626 16.6667 13.667V6.33366C16.6667 4.67533 15.325 3.33366 13.6667 3.33366H6.33335ZM14.375 4.58366C14.6513 4.58366 14.9162 4.69341 15.1116 4.88876C15.3069 5.08411 15.4167 5.34906 15.4167 5.62533C15.4167 5.90159 15.3069 6.16654 15.1116 6.3619C14.9162 6.55725 14.6513 6.66699 14.375 6.66699C14.0988 6.66699 13.8338 6.55725 13.6384 6.3619C13.4431 6.16654 13.3334 5.90159 13.3334 5.62533C13.3334 5.34906 13.4431 5.08411 13.6384 4.88876C13.8338 4.69341 14.0988 4.58366 14.375 4.58366ZM10 5.83366C11.1051 5.83366 12.1649 6.27265 12.9463 7.05405C13.7277 7.83545 14.1667 8.89526 14.1667 10.0003C14.1667 11.1054 13.7277 12.1652 12.9463 12.9466C12.1649 13.728 11.1051 14.167 10 14.167C8.89495 14.167 7.83514 13.728 7.05374 12.9466C6.27234 12.1652 5.83335 11.1054 5.83335 10.0003C5.83335 8.89526 6.27234 7.83545 7.05374 7.05405C7.83514 6.27265 8.89495 5.83366 10 5.83366ZM10 7.50033C9.33698 7.50033 8.70109 7.76372 8.23225 8.23256C7.76341 8.7014 7.50002 9.33728 7.50002 10.0003C7.50002 10.6634 7.76341 11.2993 8.23225 11.7681C8.70109 12.2369 9.33698 12.5003 10 12.5003C10.6631 12.5003 11.2989 12.2369 11.7678 11.7681C12.2366 11.2993 12.5 10.6634 12.5 10.0003C12.5 9.33728 12.2366 8.7014 11.7678 8.23256C11.2989 7.76372 10.6631 7.50033 10 7.50033Z",
                                                                fill: "white"
                                                            })
                                                        })
                                                    })
                                                }), (null == h ? void 0 : h.telegram) && (0, s.jsx)("li", {
                                                    children: (0, s.jsx)(t(), {
                                                        href: null == h ? void 0 : h.telegram,
                                                        target: "blank",
                                                        children: (0, s.jsxs)("svg", {
                                                            width: "20",
                                                            height: "20",
                                                            viewBox: "0 0 20 20",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: [(0, s.jsx)("g", {
                                                                filter: "url(#filter0_i_577_5178)",
                                                                children: (0, s.jsx)("path", {
                                                                    d: "M2.42367 9.14102C2.42367 9.14102 10.2864 5.65401 13.0133 4.42614C14.0586 3.93504 17.6036 2.36337 17.6036 2.36337C17.6036 2.36337 19.2398 1.67582 19.1034 3.34564C19.058 4.03326 18.6944 6.43977 18.3308 9.0428C17.7854 12.7263 17.1946 16.7536 17.1946 16.7536C17.1946 16.7536 17.1037 17.8832 16.3311 18.0797C15.5584 18.2761 14.2858 17.3921 14.0586 17.1956C13.8768 17.0483 10.6499 14.8382 9.46826 13.7577C9.1501 13.463 8.78653 12.8737 9.51367 12.1861C11.1499 10.5653 13.1042 8.5517 14.2858 7.27476C14.8312 6.68536 15.3766 5.3102 13.1041 6.98002C9.8773 9.38661 6.69587 11.6458 6.69587 11.6458C6.69587 11.6458 5.96867 12.1369 4.60522 11.6949C3.2417 11.2529 1.65098 10.6635 1.65098 10.6635C1.65098 10.6635 0.560271 9.92686 2.42367 9.14102Z",
                                                                    fill: "white"
                                                                })
                                                            }), (0, s.jsx)("defs", {
                                                                children: (0, s.jsxs)("filter", {
                                                                    id: "filter0_i_577_5178",
                                                                    x: "0",
                                                                    y: "0",
                                                                    width: "20",
                                                                    height: "20.2265",
                                                                    filterUnits: "userSpaceOnUse",
                                                                    "color-interpolation-filters": "sRGB",
                                                                    children: [(0, s.jsx)("feFlood", {
                                                                        "flood-opacity": "0",
                                                                        result: "BackgroundImageFix"
                                                                    }), (0, s.jsx)("feBlend", {
                                                                        mode: "normal",
                                                                        in: "SourceGraphic",
                                                                        in2: "BackgroundImageFix",
                                                                        result: "shape"
                                                                    }), (0, s.jsx)("feColorMatrix", { in: "SourceAlpha",
                                                                        type: "matrix",
                                                                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                                                        result: "hardAlpha"
                                                                    }), (0, s.jsx)("feOffset", {
                                                                        dy: "0.226456"
                                                                    }), (0, s.jsx)("feGaussianBlur", {
                                                                        stdDeviation: "0.566141"
                                                                    }), (0, s.jsx)("feComposite", {
                                                                        in2: "hardAlpha",
                                                                        operator: "arithmetic",
                                                                        k2: "-1",
                                                                        k3: "1"
                                                                    }), (0, s.jsx)("feColorMatrix", {
                                                                        type: "matrix",
                                                                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                                                                    }), (0, s.jsx)("feBlend", {
                                                                        mode: "normal",
                                                                        in2: "shape",
                                                                        result: "effect1_innerShadow_577_5178"
                                                                    })]
                                                                })
                                                            })]
                                                        })
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                }), (0, s.jsx)(a.Z, {
                                    children: (0, s.jsxs)("div", {
                                        className: "two-block-profile",
                                        children: [(0, s.jsx)("div", {
                                            className: "two-block-profile-left",
                                            children: (0, s.jsxs)("div", {
                                                className: "two-block-profile-left-inner",
                                                children: [(0, s.jsxs)("div", {
                                                    className: "img-block-profile",
                                                    children: [o ? "" : (0, s.jsx)("img", {
                                                        src: (null == h ? void 0 : h.highLogo) ? null == h ? void 0 : h.highLogo : "/images/user.svg",
                                                        rounded: !0,
                                                        alt: "profile-img"
                                                    }), (0, s.jsx)("h2", {
                                                        onClick: () => {
                                                            if (!h.referralCode) return;
                                                            let e = new URL(window.location.href),
                                                                l = "".concat(e.origin, "/?ref=").concat(h.referralCode);
                                                            (0, m.vQ)(l)
                                                        },
                                                        className: "pointer",
                                                        title: "Copy Referral Link",
                                                        children: (null == h ? void 0 : h.name) || "noName"
                                                    }), (0, s.jsx)("p", {
                                                        children: (null == h ? void 0 : h.address) ? (0, m.El)(null == h ? void 0 : h.address, 7, 8) : ""
                                                    })]
                                                }), (0, s.jsx)("div", {
                                                    className: "text-block-profile",
                                                    children: (0, s.jsx)("p", {
                                                        children: null == h ? void 0 : h.bio
                                                    })
                                                }), (0, s.jsxs)("div", {
                                                    className: "volume-text-inner",
                                                    children: [(0, s.jsxs)("p", {
                                                        children: [(0, s.jsx)("span", {
                                                            children: "Volume"
                                                        }), (0, s.jsxs)("span", {
                                                            className: "bold-text",
                                                            children: [h ? (0, m.IA)((null == h ? void 0 : null === (e = h.marketDetails[u]) || void 0 === e ? void 0 : e.tradingVolume) || 0, 2) : "", " ", x.p$[j]]
                                                        })]
                                                    }), (0, s.jsxs)("p", {
                                                        children: [(0, s.jsx)("span", {
                                                            children: "Items"
                                                        }), (0, s.jsx)("span", {
                                                            className: "bold-text",
                                                            children: h ? (0, m.IA)((null == h ? void 0 : null === (l = h.marketDetails[u]) || void 0 === l ? void 0 : l.itemsCount) || 0) : 0
                                                        })]
                                                    }), (0, s.jsxs)("p", {
                                                        children: [(0, s.jsx)("span", {
                                                            children: "Buys"
                                                        }), (0, s.jsx)("span", {
                                                            className: "bold-text",
                                                            children: h ? (0, m.IA)((null == h ? void 0 : null === (i = h.marketDetails[u]) || void 0 === i ? void 0 : i.buy) || 0) : 0
                                                        })]
                                                    }), (0, s.jsxs)("p", {
                                                        children: [(0, s.jsx)("span", {
                                                            children: "Sales"
                                                        }), (0, s.jsx)("span", {
                                                            className: "bold-text",
                                                            children: h ? (0, m.IA)((null == h ? void 0 : null === (n = h.marketDetails[u]) || void 0 === n ? void 0 : n.sell) || 0) : 0
                                                        })]
                                                    })]
                                                }), (0, s.jsx)("div", {
                                                    className: "tabs-block-profile",
                                                    children: (0, s.jsx)(r.mQ, {
                                                        selectedIndex: b,
                                                        onSelect: e => y(e),
                                                        children: (0, s.jsxs)(r.td, {
                                                            children: [(0, s.jsx)(r.OK, {
                                                                children: (0, s.jsxs)("div", {
                                                                    className: "tabs-block-link",
                                                                    children: [(0, s.jsx)("svg", {
                                                                        width: "20",
                                                                        height: "20",
                                                                        viewBox: "0 0 20 20",
                                                                        fill: "none",
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        children: (0, s.jsx)("path", {
                                                                            d: "M3.33342 16.6667C2.87508 16.6667 2.48258 16.5034 2.15592 16.1767C1.82925 15.85 1.66619 15.4578 1.66675 15V5.00004C1.66675 4.54171 1.83008 4.14921 2.15675 3.82254C2.48342 3.49588 2.87564 3.33282 3.33342 3.33338H8.33342L10.0001 5.00004H16.6667C17.1251 5.00004 17.5176 5.16338 17.8442 5.49004C18.1709 5.81671 18.334 6.20893 18.3334 6.66671V15C18.3334 15.4584 18.1701 15.8509 17.8434 16.1775C17.5167 16.5042 17.1245 16.6673 16.6667 16.6667H3.33342ZM3.33342 15H16.6667V6.66671H9.31258L7.64592 5.00004H3.33342V15Z",
                                                                            fill: "black"
                                                                        })
                                                                    }), (0, s.jsx)("h4", {
                                                                        children: "Inventory"
                                                                    })]
                                                                })
                                                            }), (0, s.jsx)(r.OK, {
                                                                children: (0, s.jsxs)("div", {
                                                                    className: "tabs-block-link",
                                                                    children: [(0, s.jsx)("svg", {
                                                                        width: "20",
                                                                        height: "20",
                                                                        viewBox: "0 0 20 20",
                                                                        fill: "none",
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        children: (0, s.jsx)("path", {
                                                                            d: "M14.9999 3.33329H15.8333V1.66663H4.16658V3.33329H14.9999ZM17.4999 6.24996H2.49992V4.58329H17.4999V6.24996ZM19.1666 7.49996V18.3333H0.833252V7.49996H19.1666ZM17.4999 9.16663H2.49992V16.6666H17.4999V9.16663Z",
                                                                            fill: "black"
                                                                        })
                                                                    }), (0, s.jsx)("h4", {
                                                                        children: "Collections"
                                                                    })]
                                                                })
                                                            }), (0, s.jsx)(r.OK, {
                                                                children: (0, s.jsxs)("div", {
                                                                    className: "tabs-block-link",
                                                                    children: [(0, s.jsx)("svg", {
                                                                        width: "20",
                                                                        height: "20",
                                                                        viewBox: "0 0 20 20",
                                                                        fill: "none",
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        children: (0, s.jsx)("path", {
                                                                            d: "M10 17.5C8.08333 17.5 6.41306 16.8644 4.98917 15.5933C3.56528 14.3222 2.74944 12.7356 2.54167 10.8333H4.25C4.44444 12.2778 5.08694 13.4722 6.1775 14.4167C7.26806 15.3611 8.54222 15.8333 10 15.8333C11.625 15.8333 13.0036 15.2672 14.1358 14.135C15.2681 13.0028 15.8339 11.6244 15.8333 10C15.8333 8.375 15.2672 6.99639 14.135 5.86417C13.0028 4.73194 11.6244 4.16611 10 4.16667C9.04167 4.16667 8.14583 4.38889 7.3125 4.83333C6.47917 5.27778 5.77778 5.88889 5.20833 6.66667H7.5V8.33333H2.5V3.33333H4.16667V5.29167C4.875 4.40278 5.73972 3.71528 6.76083 3.22917C7.78194 2.74306 8.86167 2.5 10 2.5C11.0417 2.5 12.0175 2.69806 12.9275 3.09417C13.8375 3.49028 14.6292 4.02472 15.3025 4.6975C15.9758 5.37139 16.5106 6.16306 16.9067 7.0725C17.3028 7.98194 17.5006 8.95778 17.5 10C17.5 11.0417 17.3019 12.0175 16.9058 12.9275C16.5097 13.8375 15.9753 14.6292 15.3025 15.3025C14.6286 15.9758 13.8369 16.5106 12.9275 16.9067C12.0181 17.3028 11.0422 17.5006 10 17.5ZM12.3333 13.5L9.16667 10.3333V5.83333H10.8333V9.66667L13.5 12.3333L12.3333 13.5Z",
                                                                            fill: "black"
                                                                        })
                                                                    }), (0, s.jsx)("h4", {
                                                                        children: "History"
                                                                    })]
                                                                })
                                                            }), (0, s.jsx)(r.OK, {
                                                                children: (0, s.jsxs)("div", {
                                                                    className: "tabs-block-link",
                                                                    children: [(0, s.jsxs)("svg", {
                                                                        width: "20",
                                                                        height: "20",
                                                                        viewBox: "0 0 20 20",
                                                                        fill: "none",
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        children: [(0, s.jsx)("g", {
                                                                            "clip-path": "url(#clip0_577_5444)",
                                                                            children: (0, s.jsx)("path", {
                                                                                d: "M10 10.625C11.3583 10.625 12.5583 10.95 13.5333 11.375C14.4333 11.775 15 12.675 15 13.65V15H5V13.6583C5 12.675 5.56667 11.775 6.46667 11.3833C7.44167 10.95 8.64167 10.625 10 10.625ZM3.33333 10.8333C4.25 10.8333 5 10.0833 5 9.16667C5 8.25 4.25 7.5 3.33333 7.5C2.41667 7.5 1.66667 8.25 1.66667 9.16667C1.66667 10.0833 2.41667 10.8333 3.33333 10.8333ZM4.275 11.75C3.96667 11.7 3.65833 11.6667 3.33333 11.6667C2.50833 11.6667 1.725 11.8417 1.01667 12.15C0.71476 12.279 0.457436 12.494 0.276682 12.7681C0.0959273 13.0422 -0.000286405 13.3633 6.40412e-07 13.6917V15H3.75V13.6583C3.75 12.9667 3.94167 12.3167 4.275 11.75ZM16.6667 10.8333C17.5833 10.8333 18.3333 10.0833 18.3333 9.16667C18.3333 8.25 17.5833 7.5 16.6667 7.5C15.75 7.5 15 8.25 15 9.16667C15 10.0833 15.75 10.8333 16.6667 10.8333ZM20 13.6917C20 13.0167 19.6 12.4167 18.9833 12.15C18.2526 11.8312 17.4639 11.6666 16.6667 11.6667C16.3417 11.6667 16.0333 11.7 15.725 11.75C16.0583 12.3167 16.25 12.9667 16.25 13.6583V15H20V13.6917ZM10 5C11.3833 5 12.5 6.11667 12.5 7.5C12.5 8.88333 11.3833 10 10 10C8.61667 10 7.5 8.88333 7.5 7.5C7.5 6.11667 8.61667 5 10 5Z",
                                                                                fill: "black"
                                                                            })
                                                                        }), (0, s.jsx)("defs", {
                                                                            children: (0, s.jsx)("clipPath", {
                                                                                id: "clip0_577_5444",
                                                                                children: (0, s.jsx)("rect", {
                                                                                    width: "20",
                                                                                    height: "20",
                                                                                    fill: "white"
                                                                                })
                                                                            })
                                                                        })]
                                                                    }), (0, s.jsx)("h4", {
                                                                        children: "Following"
                                                                    })]
                                                                })
                                                            }), (0, s.jsx)(r.OK, {
                                                                children: (0, s.jsxs)("div", {
                                                                    className: "tabs-block-link",
                                                                    children: [(0, s.jsx)("svg", {
                                                                        width: "20",
                                                                        height: "20",
                                                                        viewBox: "0 0 20 20",
                                                                        fill: "none",
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        children: (0, s.jsx)("path", {
                                                                            d: "M10.0001 17.5L8.79175 16.4167C7.38897 15.1528 6.22925 14.0625 5.31258 13.1459C4.39591 12.2292 3.66675 11.4062 3.12508 10.6767C2.58341 9.94782 2.20508 9.27782 1.99008 8.66671C1.77508 8.0556 1.6673 7.4306 1.66675 6.79171C1.66675 5.48615 2.10425 4.39587 2.97925 3.52087C3.85425 2.64587 4.94453 2.20837 6.25008 2.20837C6.9723 2.20837 7.6598 2.36115 8.31258 2.66671C8.96536 2.97226 9.52786 3.40282 10.0001 3.95837C10.4723 3.40282 11.0348 2.97226 11.6876 2.66671C12.3404 2.36115 13.0279 2.20837 13.7501 2.20837C15.0556 2.20837 16.1459 2.64587 17.0209 3.52087C17.8959 4.39587 18.3334 5.48615 18.3334 6.79171C18.3334 7.4306 18.2256 8.0556 18.0101 8.66671C17.7945 9.27782 17.4162 9.94782 16.8751 10.6767C16.3334 11.4062 15.6042 12.2292 14.6876 13.1459C13.7709 14.0625 12.6112 15.1528 11.2084 16.4167L10.0001 17.5Z",
                                                                            fill: "black"
                                                                        })
                                                                    }), (0, s.jsx)("h4", {
                                                                        children: "Favorites"
                                                                    })]
                                                                })
                                                            }), (0, s.jsx)(r.OK, {
                                                                children: (0, s.jsxs)("div", {
                                                                    className: "tabs-block-link",
                                                                    children: [(0, s.jsxs)("svg", {
                                                                        width: "20",
                                                                        height: "20",
                                                                        viewBox: "0 0 20 20",
                                                                        fill: "none",
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        children: [(0, s.jsx)("g", {
                                                                            "clip-path": "url(#clip0_3784_6921)",
                                                                            children: (0, s.jsx)("path", {
                                                                                d: "M10.0002 1.66669C8.45313 1.66669 6.9694 2.28127 5.87544 3.37523C4.78147 4.46919 4.16689 5.95292 4.16689 7.50002V10.44C4.16701 10.5693 4.13706 10.6968 4.07939 10.8125L2.64856 13.6734C2.57867 13.8131 2.54566 13.9684 2.55268 14.1245C2.55971 14.2807 2.60652 14.4324 2.68868 14.5653C2.77084 14.6982 2.88562 14.8079 3.02212 14.884C3.15861 14.9601 3.31229 15 3.46856 15H16.5319C16.6882 15 16.8418 14.9601 16.9783 14.884C17.1148 14.8079 17.2296 14.6982 17.3118 14.5653C17.3939 14.4324 17.4407 14.2807 17.4478 14.1245C17.4548 13.9684 17.4218 13.8131 17.3519 13.6734L15.9219 10.8125C15.8639 10.6969 15.8337 10.5694 15.8336 10.44V7.50002C15.8336 5.95292 15.219 4.46919 14.125 3.37523C13.0311 2.28127 11.5473 1.66669 10.0002 1.66669ZM10.0002 17.5C9.48305 17.5002 8.97854 17.34 8.55618 17.0415C8.13383 16.743 7.8144 16.3209 7.64189 15.8334H12.3586C12.1861 16.3209 11.8666 16.743 11.4443 17.0415C11.0219 17.34 10.5174 17.5002 10.0002 17.5Z",
                                                                                fill: "black"
                                                                            })
                                                                        }), (0, s.jsx)("defs", {
                                                                            children: (0, s.jsx)("clipPath", {
                                                                                id: "clip0_3784_6921",
                                                                                children: (0, s.jsx)("rect", {
                                                                                    width: "20",
                                                                                    height: "20",
                                                                                    fill: "white"
                                                                                })
                                                                            })
                                                                        })]
                                                                    }), (0, s.jsx)("h4", {
                                                                        children: "Notification Settings"
                                                                    })]
                                                                })
                                                            }), (0, s.jsx)(r.OK, {
                                                                children: (0, s.jsxs)("div", {
                                                                    className: "tabs-block-link",
                                                                    children: [(0, s.jsx)("svg", {
                                                                        width: "20",
                                                                        height: "20",
                                                                        viewBox: "0 0 20 20",
                                                                        fill: "none",
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        children: (0, s.jsx)("path", {
                                                                            "fill-rule": "evenodd",
                                                                            "clip-rule": "evenodd",
                                                                            d: "M11.8992 1.79329C11.5909 1.66663 11.1992 1.66663 10.4167 1.66663C9.63419 1.66663 9.24252 1.66663 8.93419 1.79329C8.52373 1.9618 8.197 2.28643 8.02585 2.69579C7.94752 2.88163 7.91752 3.09913 7.90502 3.41496C7.89946 3.6438 7.83563 3.86743 7.71956 4.06473C7.60349 4.26202 7.43901 4.42645 7.24168 4.54246C7.04064 4.65421 6.81464 4.71341 6.58462 4.71458C6.35461 4.71574 6.12802 4.65884 5.92585 4.54913C5.64419 4.40079 5.44002 4.31913 5.23835 4.29246C4.79715 4.23453 4.35091 4.35313 3.99669 4.62246C3.73169 4.82413 3.53585 5.16079 3.14502 5.83329C2.75335 6.50579 2.55835 6.84163 2.51419 7.17079C2.45585 7.60913 2.57585 8.05246 2.84752 8.40329C2.97085 8.56329 3.14502 8.69746 3.41419 8.86579C3.81169 9.11329 4.06669 9.53496 4.06669 9.99996C4.06669 10.465 3.81169 10.8866 3.41502 11.1333C3.14502 11.3025 2.97085 11.4366 2.84669 11.5966C2.71259 11.7699 2.61416 11.9681 2.55709 12.1796C2.50002 12.3911 2.48544 12.6119 2.51419 12.8291C2.55835 13.1575 2.75335 13.4941 3.14502 14.1666C3.53669 14.8391 3.73169 15.175 3.99669 15.3775C4.35002 15.6466 4.79669 15.765 5.23835 15.7075C5.44002 15.6808 5.64419 15.5991 5.92585 15.4508C6.12812 15.3409 6.35487 15.2839 6.58504 15.2851C6.81522 15.2863 7.04137 15.3456 7.24252 15.4575C7.64752 15.6908 7.88752 16.12 7.90502 16.585C7.91752 16.9016 7.94752 17.1183 8.02585 17.3041C8.19585 17.7125 8.52252 18.0375 8.93419 18.2066C9.24252 18.3333 9.63419 18.3333 10.4167 18.3333C11.1992 18.3333 11.5909 18.3333 11.8992 18.2066C12.3096 18.0381 12.6364 17.7135 12.8075 17.3041C12.8859 17.1183 12.9159 16.9016 12.9284 16.585C12.945 16.12 13.1859 15.69 13.5917 15.4575C13.7927 15.3457 14.0187 15.2865 14.2487 15.2853C14.4788 15.2842 14.7053 15.3411 14.9075 15.4508C15.1892 15.5991 15.3934 15.6808 15.595 15.7075C16.0367 15.7658 16.4834 15.6466 16.8367 15.3775C17.1017 15.1758 17.2975 14.8391 17.6884 14.1666C18.08 13.4941 18.275 13.1583 18.3192 12.8291C18.3478 12.6119 18.3331 12.3911 18.2759 12.1795C18.2187 11.968 18.1201 11.7698 17.9859 11.5966C17.8625 11.4366 17.6884 11.3025 17.4192 11.1341C17.0217 10.8866 16.7667 10.465 16.7667 9.99996C16.7667 9.53496 17.0217 9.11329 17.4184 8.86663C17.6884 8.69746 17.8625 8.56329 17.9867 8.40329C18.1208 8.23001 18.2192 8.03187 18.2763 7.82032C18.3334 7.60877 18.3479 7.38801 18.3192 7.17079C18.275 6.84246 18.08 6.50579 17.6884 5.83329C17.2967 5.16079 17.1017 4.82496 16.8367 4.62246C16.4825 4.35313 16.0362 4.23453 15.595 4.29246C15.3934 4.31913 15.1892 4.40079 14.9075 4.54913C14.7052 4.65898 14.4785 4.71597 14.2483 4.71481C14.0182 4.71364 13.792 4.65436 13.5909 4.54246C13.3937 4.42634 13.2294 4.26187 13.1135 4.06459C12.9975 3.8673 12.9338 3.64372 12.9284 3.41496C12.9159 3.09829 12.8859 2.88163 12.8075 2.69579C12.7228 2.49307 12.599 2.30903 12.4431 2.15417C12.2873 1.99932 12.1024 1.87669 11.8992 1.79329ZM10.4167 12.5C11.8084 12.5 12.9359 11.3808 12.9359 9.99996C12.9359 8.61913 11.8075 7.49996 10.4167 7.49996C9.02502 7.49996 7.89752 8.61913 7.89752 9.99996C7.89752 11.3808 9.02585 12.5 10.4167 12.5Z",
                                                                            fill: "black"
                                                                        })
                                                                    }), (0, s.jsx)("h4", {
                                                                        children: "Settings"
                                                                    })]
                                                                })
                                                            })]
                                                        })
                                                    })
                                                })]
                                            })
                                        }), (0, s.jsx)("div", {
                                            className: "two-block-profile-right",
                                            children: (0, s.jsx)("div", {
                                                className: "two-block-profile-right-inner",
                                                children: (0, s.jsxs)(r.mQ, {
                                                    selectedIndex: b,
                                                    onSelect: e => y(e),
                                                    children: [(0, s.jsx)(r.x4, {
                                                        children: (0, s.jsx)(v, {})
                                                    }), (0, s.jsx)(r.x4, {
                                                        children: (0, s.jsx)(f, {})
                                                    }), (0, s.jsx)(r.x4, {
                                                        children: (0, s.jsx)(D, {})
                                                    }), (0, s.jsx)(r.x4, {
                                                        children: (0, s.jsx)(N, {})
                                                    }), (0, s.jsx)(r.x4, {
                                                        children: (0, s.jsx)(k, {})
                                                    }), (0, s.jsx)(r.x4, {
                                                        children: (0, s.jsx)(V, {})
                                                    }), (0, s.jsx)(r.x4, {
                                                        children: (0, s.jsx)(S, {})
                                                    })]
                                                })
                                            })
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
        e.O(0, [7506, 6705, 643, 8999, 8642, 4844, 3275, 3775, 2888, 9774, 179], function() {
            return e(e.s = 31969)
        }), _N_E = e.O()
    }
]);