(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3803], {
        2423: function(e, s, l) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/explore/nfts", function() {
                return l(44266)
            }])
        },
        20753: function(e, s, l) {
            "use strict";
            var c = l(85893),
                i = l(34965),
                n = l(86249),
                a = l(45012);
            l(67294);
            var r = l(9473),
                o = l(24715);
            s.Z = () => {
                let {
                    walletDetalis: {
                        chainId: e
                    }
                } = (0, r.v9)(a.n2), s = (0, r.I0)(), {
                    switchNetwork: l
                } = (0, n.a)(), d = async e => {
                    try {
                        "All" !== e && await l(e), s((0, a.o0)(e))
                    } catch (e) {
                        console.log("err", e), o.FN.error("user reject transaction")
                    }
                };
                return (0, c.jsx)(c.Fragment, {
                    children: i.Km.map((s, l) => (0, c.jsxs)("div", {
                        className: "radio-filter-block",
                        children: [(0, c.jsx)("input", {
                            type: "radio",
                            id: s.name,
                            name: s.name,
                            checked: s.chainId === e,
                            onChange: () => d(s.chainId)
                        }), (0, c.jsxs)("label", {
                            for: s.name,
                            children: [(0, c.jsx)("img", {
                                src: s.logo,
                                alt: "check-icon"
                            }), (0, c.jsx)("h4", {
                                children: s.name
                            })]
                        })]
                    }, l))
                })
            }
        },
        88665: function(e, s, l) {
            "use strict";
            l.d(s, {
                Z: function() {
                    return a
                }
            });
            var c = l(85893),
                i = l(9008),
                n = l.n(i);

            function a(e) {
                let {
                    title: s = "TesseractX"
                } = e;
                return (0, c.jsx)(n(), {
                    children: (0, c.jsx)("title", {
                        children: "".concat(s, " | ").concat("TesseractX")
                    })
                })
            }
            l(67294)
        },
        54947: function(e, s) {
            "use strict";
            s.Z = e => {
                let {
                    page: s,
                    data: l,
                    count: c
                } = e;
                return "Showing ".concat(0, "–").concat(null == l ? void 0 : l.length, " of ").concat(c, " results")
            }
        },
        44266: function(e, s, l) {
            "use strict";
            l.r(s), l.d(s, {
                default: function() {
                    return g
                }
            });
            var c = l(85893),
                i = l(27098),
                n = l(20753),
                a = l(88665),
                r = l(54947),
                o = l(17258),
                d = l(24715);
            l(67294);
            var t = e => {
                    let {
                        handleSelect: s
                    } = e, {
                        items: l,
                        hasMore: i,
                        handleSearch: n,
                        handlePageChange: a
                    } = (0, o.Kx)({});
                    return (0, c.jsxs)(c.Fragment, {
                        children: [(0, c.jsx)("div", {
                            className: "search-form-block",
                            children: (0, c.jsxs)("div", {
                                className: "search-box-form",
                                children: [(0, c.jsx)("input", {
                                    type: "text",
                                    placeholder: "Search by Collections",
                                    name: "Search-NFT",
                                    onChange: n
                                }), (0, c.jsx)("button", {
                                    children: (0, c.jsx)("svg", {
                                        width: "20",
                                        height: "20",
                                        viewBox: "0 0 20 20",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: (0, c.jsx)("path", {
                                            d: "M18.1249 17.2411L13.4049 12.5211C14.5391 11.1595 15.1047 9.41291 14.9841 7.64483C14.8634 5.87675 14.0657 4.22326 12.7569 3.02834C11.4482 1.83341 9.7291 1.18906 7.95736 1.22932C6.18562 1.26958 4.49761 1.99134 3.24448 3.24448C1.99134 4.49761 1.26958 6.18562 1.22932 7.95736C1.18906 9.7291 1.83341 11.4482 3.02834 12.7569C4.22326 14.0657 5.87675 14.8634 7.64483 14.9841C9.41291 15.1047 11.1595 14.5391 12.5211 13.4049L17.2411 18.1249L18.1249 17.2411ZM2.49989 8.12489C2.49989 7.01237 2.82979 5.92483 3.44787 4.99981C4.06596 4.07478 4.94446 3.35381 5.97229 2.92807C7.00013 2.50232 8.13113 2.39093 9.22227 2.60797C10.3134 2.82501 11.3157 3.36074 12.1024 4.14741C12.889 4.93408 13.4248 5.93636 13.6418 7.02751C13.8588 8.11865 13.7475 9.24965 13.3217 10.2775C12.896 11.3053 12.175 12.1838 11.25 12.8019C10.3249 13.42 9.23741 13.7499 8.12489 13.7499C6.63355 13.7482 5.20377 13.1551 4.14924 12.1005C3.09471 11.046 2.50154 9.61622 2.49989 8.12489Z",
                                            fill: "#9E9E9E"
                                        })
                                    })
                                })]
                            })
                        }), (0, c.jsxs)("div", {
                            className: "search-collection-block",
                            children: [null == l ? void 0 : l.map(e => (0, c.jsxs)("div", {
                                className: "search-collection-block-inner pointer",
                                onClick: () => s(null == e ? void 0 : e.address),
                                children: [(0, c.jsxs)("div", {
                                    className: "search-collection-block-left",
                                    children: [(0, c.jsx)("img", {
                                        src: (null == e ? void 0 : e.image) || "../../images/check-icon-block.svg",
                                        alt: "product-img"
                                    }), (0, c.jsxs)("div", {
                                        className: "content-block",
                                        children: [(0, c.jsx)("h4", {
                                            children: (0, c.jsx)("span", {
                                                children: null == e ? void 0 : e.name
                                            })
                                        }), (0, c.jsxs)("p", {
                                            children: ["Floor:", " ", (0, d.ag)(null == e ? void 0 : e.floorPrice, 3), " ", null == e ? void 0 : e.floorSymbol]
                                        })]
                                    })]
                                }), (0, c.jsx)("div", {
                                    className: "search-collection-block-right",
                                    children: (null == e ? void 0 : e.tradingVolume) ? (0, c.jsxs)("h4", {
                                        children: [d.VF.format((null == e ? void 0 : e.tradingVolume) || 0), " ", null == e ? void 0 : e.symbol]
                                    }) : ""
                                })]
                            }, null == e ? void 0 : e._id)), i && (0, c.jsx)("div", {
                                className: "load-more",
                                children: (0, c.jsx)("button", {
                                    onClick: a,
                                    children: "Load More"
                                })
                            })]
                        })]
                    })
                },
                h = l(78063),
                x = l(97673),
                m = l(33275);
            l(41664);
            var j = l(78857),
                u = l(52448),
                v = l(27506),
                g = () => {
                    let {
                        loading: e,
                        categorys: s,
                        priceArray: l,
                        page: d,
                        items: g,
                        count: p,
                        hasMore: f,
                        filterOptions: b,
                        orderOptions: k,
                        filterChange: N,
                        priceFilter: C,
                        setPriceFilter: y,
                        orderChange: Z,
                        handleCategorySelect: w,
                        handlePageChange: B,
                        handleSearch: F,
                        typeChange: T,
                        handlePriceChange: _,
                        handleCollectionChange: E
                    } = (0, o.Ce)(), {
                        handleLike: L
                    } = (0, h.cY)();
                    return (0, c.jsxs)(c.Fragment, {
                        children: [(0, c.jsx)(a.Z, {
                            title: "NFT's"
                        }), (0, c.jsxs)(m.Fd, {
                            className: "no-container-padding dark-mode-body",
                            children: [(0, c.jsx)("div", {
                                className: "graphics-inner-shape",
                                children: (0, c.jsx)("img", {
                                    src: "../../images/graphics-block-inner.png",
                                    alt: "graphics-img"
                                })
                            }), (0, c.jsx)("div", {
                                className: "graphics-inner-shape-two",
                                children: (0, c.jsx)("img", {
                                    src: "../../images/graphics-block-inner-2.png",
                                    alt: "graphics-img"
                                })
                            }), (0, c.jsx)("div", {
                                className: "graphics-inner-shape-three",
                                children: (0, c.jsx)("img", {
                                    src: "../../images/graphics-block-inner-3.png",
                                    alt: "graphics-img"
                                })
                            }), (0, c.jsxs)("div", {
                                className: "explore-block-main",
                                children: [(0, c.jsx)("div", {
                                    className: "common-title-page text-center-space",
                                    children: (0, c.jsx)("h1", {
                                        children: "Explore Items"
                                    })
                                }), (0, c.jsxs)("div", {
                                    className: "filter-block-data-block",
                                    children: [(0, c.jsx)("div", {
                                        className: "filter-block-data-block-left",
                                        children: (0, c.jsx)("div", {
                                            className: "filter-block-data-block-left-inner",
                                            children: (0, c.jsxs)(j.Z, {
                                                defaultActiveKey: "0",
                                                alwaysOpen: !0,
                                                children: [(0, c.jsxs)(j.Z.Item, {
                                                    eventKey: "0",
                                                    children: [(0, c.jsx)(j.Z.Header, {
                                                        children: "Search"
                                                    }), (0, c.jsx)(j.Z.Body, {
                                                        children: (0, c.jsx)("div", {
                                                            className: "search-form-block",
                                                            children: (0, c.jsxs)("div", {
                                                                className: "search-box-form",
                                                                children: [(0, c.jsx)("input", {
                                                                    type: "text",
                                                                    placeholder: "Search NFT",
                                                                    name: "Search-NFT",
                                                                    onChange: F
                                                                }), (0, c.jsx)("button", {
                                                                    children: (0, c.jsx)("svg", {
                                                                        width: "20",
                                                                        height: "20",
                                                                        viewBox: "0 0 20 20",
                                                                        fill: "none",
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        children: (0, c.jsx)("path", {
                                                                            d: "M18.1249 17.2411L13.4049 12.5211C14.5391 11.1595 15.1047 9.41291 14.9841 7.64483C14.8634 5.87675 14.0657 4.22326 12.7569 3.02834C11.4482 1.83341 9.7291 1.18906 7.95736 1.22932C6.18562 1.26958 4.49761 1.99134 3.24448 3.24448C1.99134 4.49761 1.26958 6.18562 1.22932 7.95736C1.18906 9.7291 1.83341 11.4482 3.02834 12.7569C4.22326 14.0657 5.87675 14.8634 7.64483 14.9841C9.41291 15.1047 11.1595 14.5391 12.5211 13.4049L17.2411 18.1249L18.1249 17.2411ZM2.49989 8.12489C2.49989 7.01237 2.82979 5.92483 3.44787 4.99981C4.06596 4.07478 4.94446 3.35381 5.97229 2.92807C7.00013 2.50232 8.13113 2.39093 9.22227 2.60797C10.3134 2.82501 11.3157 3.36074 12.1024 4.14741C12.889 4.93408 13.4248 5.93636 13.6418 7.02751C13.8588 8.11865 13.7475 9.24965 13.3217 10.2775C12.896 11.3053 12.175 12.1838 11.25 12.8019C10.3249 13.42 9.23741 13.7499 8.12489 13.7499C6.63355 13.7482 5.20377 13.1551 4.14924 12.1005C3.09471 11.046 2.50154 9.61622 2.49989 8.12489Z",
                                                                            fill: "#9E9E9E"
                                                                        })
                                                                    })
                                                                })]
                                                            })
                                                        })
                                                    })]
                                                }), (0, c.jsxs)(j.Z.Item, {
                                                    eventKey: "1",
                                                    children: [(0, c.jsx)(j.Z.Header, {
                                                        children: "Status"
                                                    }), (0, c.jsx)(j.Z.Body, {
                                                        children: (0, c.jsxs)("div", {
                                                            className: "checkbox-block-custom-filter",
                                                            children: [(0, c.jsxs)("div", {
                                                                className: "checkbox-filter-block",
                                                                children: [(0, c.jsx)("input", {
                                                                    type: "checkbox",
                                                                    id: "buy",
                                                                    name: "Listing",
                                                                    value: "Listing",
                                                                    onChange: N
                                                                }), (0, c.jsxs)("label", {
                                                                    for: "buy",
                                                                    children: [(0, c.jsx)("span", {
                                                                        children: (0, c.jsx)("img", {
                                                                            src: "../../images/check-icon-block.svg",
                                                                            alt: "check-icon"
                                                                        })
                                                                    }), (0, c.jsx)("h4", {
                                                                        children: "Buy Now"
                                                                    })]
                                                                })]
                                                            }), (0, c.jsxs)("div", {
                                                                className: "checkbox-filter-block",
                                                                children: [(0, c.jsx)("input", {
                                                                    type: "checkbox",
                                                                    id: "auctions",
                                                                    name: "Auction",
                                                                    value: "Auction",
                                                                    onChange: N
                                                                }), (0, c.jsxs)("label", {
                                                                    for: "auctions",
                                                                    children: [(0, c.jsx)("span", {
                                                                        children: (0, c.jsx)("img", {
                                                                            src: "../../images/check-icon-block.svg",
                                                                            alt: "check-icon"
                                                                        })
                                                                    }), (0, c.jsx)("h4", {
                                                                        children: "On Auctions"
                                                                    })]
                                                                })]
                                                            }), (0, c.jsxs)("div", {
                                                                className: "checkbox-filter-block",
                                                                children: [(0, c.jsx)("input", {
                                                                    type: "checkbox",
                                                                    id: "offers",
                                                                    name: "Offer",
                                                                    value: "Offer",
                                                                    onChange: N
                                                                }), (0, c.jsxs)("label", {
                                                                    for: "offers",
                                                                    children: [(0, c.jsx)("span", {
                                                                        children: (0, c.jsx)("img", {
                                                                            src: "../../images/check-icon-block.svg",
                                                                            alt: "check-icon"
                                                                        })
                                                                    }), (0, c.jsx)("h4", {
                                                                        children: "Has Offers"
                                                                    })]
                                                                })]
                                                            })]
                                                        })
                                                    })]
                                                }), (0, c.jsxs)(j.Z.Item, {
                                                    eventKey: "2",
                                                    children: [(0, c.jsx)(j.Z.Header, {
                                                        children: "Collections"
                                                    }), (0, c.jsx)(j.Z.Body, {
                                                        children: (0, c.jsx)(t, {
                                                            handleSelect: E
                                                        })
                                                    })]
                                                }), (0, c.jsxs)(j.Z.Item, {
                                                    eventKey: "3",
                                                    children: [(0, c.jsx)(j.Z.Header, {
                                                        children: "Type"
                                                    }), (0, c.jsx)(j.Z.Body, {
                                                        children: (0, c.jsx)("div", {
                                                            className: "checkbox-block-custom-filter",
                                                            children: null == s ? void 0 : s.map(e => (0, c.jsxs)("div", {
                                                                className: "checkbox-filter-block",
                                                                children: [(0, c.jsx)("input", {
                                                                    type: "checkbox",
                                                                    id: null == e ? void 0 : e.value,
                                                                    value: null == e ? void 0 : e.value,
                                                                    name: null == e ? void 0 : e.value,
                                                                    onChange: w
                                                                }), (0, c.jsxs)("label", {
                                                                    for: null == e ? void 0 : e.value,
                                                                    children: [(0, c.jsx)("span", {
                                                                        children: (0, c.jsx)("img", {
                                                                            src: "../../images/check-icon-block.svg",
                                                                            alt: "check-icon"
                                                                        })
                                                                    }), (0, c.jsx)("h4", {
                                                                        children: null == e ? void 0 : e.label
                                                                    })]
                                                                })]
                                                            }, null == e ? void 0 : e.value))
                                                        })
                                                    })]
                                                }), (0, c.jsxs)(j.Z.Item, {
                                                    eventKey: "4",
                                                    children: [(0, c.jsx)("h5", {
                                                        className: "fw-bold",
                                                        children: "Price"
                                                    }), (null == l ? void 0 : l.length) > 1 && (0, c.jsxs)(c.Fragment, {
                                                        children: [(0, c.jsx)("div", {
                                                            className: "d-flex mb-1",
                                                            children: (0, c.jsx)("div", {
                                                                className: "d-flex w-100",
                                                                children: (0, c.jsx)(i.b5, {
                                                                    barMargin: 1,
                                                                    data: [...l],
                                                                    getBoundries: e => {
                                                                        var s, c;
                                                                        y([null === (s = l.find(s => s.value === (null == e ? void 0 : e.selectionMin))) || void 0 === s ? void 0 : s.price, null === (c = l.find(s => s.value === (null == e ? void 0 : e.selectionMax))) || void 0 === c ? void 0 : c.price])
                                                                    }
                                                                })
                                                            })
                                                        }), (0, c.jsxs)("div", {
                                                            className: "d-flex justify-content-around",
                                                            children: [(0, c.jsx)(x.Button, {
                                                                onClick: () => {
                                                                    _([])
                                                                },
                                                                className: "mt-2",
                                                                style: {
                                                                    padding: "8px 12px",
                                                                    width: "40%"
                                                                },
                                                                children: "Reset"
                                                            }), (0, c.jsx)(x.Button, {
                                                                onClick: () => {
                                                                    _(C)
                                                                },
                                                                className: "mt-2",
                                                                style: {
                                                                    padding: "8px 12px",
                                                                    width: "40%"
                                                                },
                                                                children: "Apply"
                                                            })]
                                                        })]
                                                    }), (0, c.jsx)(j.Z.Body, {})]
                                                }), (0, c.jsxs)(j.Z.Item, {
                                                    eventKey: "5",
                                                    children: [(0, c.jsx)(j.Z.Header, {
                                                        children: "Chains"
                                                    }), (0, c.jsx)(j.Z.Body, {
                                                        children: (0, c.jsx)("div", {
                                                            className: "radio-last",
                                                            children: (0, c.jsx)(n.Z, {})
                                                        })
                                                    })]
                                                })]
                                            })
                                        })
                                    }), (0, c.jsxs)("div", {
                                        className: "filter-block-data-block-right",
                                        children: [(0, c.jsx)("div", {
                                            className: "addvertise-block",
                                            children: (0, c.jsx)("img", {
                                                src: "../../images/addvertise-img.png",
                                                alt: "addvertise-icon"
                                            })
                                        }), (0, c.jsxs)("div", {
                                            className: "top-showing-result-block",
                                            children: [(0, c.jsx)("p", {
                                                children: (0, c.jsx)(r.Z, {
                                                    page: d,
                                                    data: g,
                                                    count: p
                                                })
                                            }), (0, c.jsxs)("div", {
                                                className: "select-block-explore",
                                                children: [(0, c.jsx)("div", {
                                                    className: "form-group",
                                                    children: (0, c.jsx)(v.ZP, {
                                                        name: "filter1",
                                                        options: b,
                                                        className: "TX-select2-wrapper",
                                                        classNamePrefix: "TX-fix-select",
                                                        onChange: T,
                                                        defaultValue: b[0]
                                                    })
                                                }), (0, c.jsx)("div", {
                                                    className: "form-group",
                                                    children: (0, c.jsx)(v.ZP, {
                                                        name: "filter2",
                                                        options: k,
                                                        className: "TX-select2-wrapper",
                                                        classNamePrefix: "TX-fix-select",
                                                        onChange: Z,
                                                        defaultValue: k[0]
                                                    })
                                                })]
                                            })]
                                        }), (0, c.jsxs)(x.CommonProductBLock, {
                                            className: "explore-block-product",
                                            children: [e && 1 == d ? (0, c.jsx)(c.Fragment, {
                                                children: (0, c.jsx)("div", {
                                                    className: "d-flex justify-content-center vh-100 align-items-center",
                                                    children: (0, c.jsx)(u.Z, {
                                                        animation: "border",
                                                        size: "lg"
                                                    })
                                                })
                                            }) : !(null == g ? void 0 : g.length) > 0 ? (0, c.jsx)(c.Fragment, {
                                                children: (0, c.jsx)("div", {
                                                    className: "d-flex justify-content-center",
                                                    children: "No NFTs Found!"
                                                })
                                            }) : (0, c.jsx)("div", {
                                                className: "common-product-block",
                                                children: null == g ? void 0 : g.map((e, s) => (0, c.jsx)(i.qg, {
                                                    item: e,
                                                    handleLike: L
                                                }, s))
                                            }), e && d > 1 && (0, c.jsx)("div", {
                                                className: "d-flex justify-content-center mt-3",
                                                children: (0, c.jsx)(u.Z, {
                                                    size: "lg"
                                                })
                                            }), !e && f && (0, c.jsx)("div", {
                                                className: "common-btn-block",
                                                children: (0, c.jsx)(x.Button, {
                                                    className: "border-dark-button",
                                                    isBorderBtn: !0,
                                                    onClick: B,
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
        9008: function(e, s, l) {
            e.exports = l(7828)
        }
    },
    function(e) {
        e.O(0, [7506, 8857, 3275, 7258, 2888, 9774, 179], function() {
            return e(e.s = 2423)
        }), _N_E = e.O()
    }
]);