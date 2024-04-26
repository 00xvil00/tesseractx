(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1793], {
        31793: function(e, s, l) {
            "use strict";
            l.r(s), l.d(s, {
                default: function() {
                    return F
                }
            });
            var i = l(85893),
                c = l(9008),
                r = l.n(c),
                n = l(33353),
                a = l(97673),
                d = l(33275),
                o = l(67294),
                t = l(9473),
                m = l(86249);
            l(51660), l(27880);
            var h = l(27098),
                x = l(27506),
                u = l(11163),
                j = l(59343),
                v = l(34965),
                g = l(78063),
                p = l(24486),
                N = l(24715),
                f = e => {
                    let {
                        item: s,
                        savedItem: l = !1,
                        handleLike: c
                    } = e, r = (0, u.useRouter)(), n = () => {
                        r.push({
                            pathname: p.v.item.details,
                            query: { ...(0, N.qK)(s)
                            }
                        })
                    };
                    return (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)("div", {
                            className: "common-product-block-inner",
                            children: (0, i.jsxs)("div", {
                                className: "common-product-block-inner-width",
                                children: [(0, i.jsxs)("div", {
                                    className: "top-block-product",
                                    children: [(0, i.jsx)("h4", {
                                        children: null == s ? void 0 : s.name
                                    }), (0, i.jsx)("span", {
                                        onClick: () => c(null == s ? void 0 : s._id),
                                        children: (0, i.jsx)(h.mN, {
                                            item: s
                                        })
                                    })]
                                }), (0, i.jsx)("div", {
                                    className: "product-details-profile full-width",
                                    children: (0, i.jsxs)("div", {
                                        className: "product-profile",
                                        children: [(0, i.jsx)("img", {
                                            src: (null == s ? void 0 : s.creatorLogo) || "/images/user.svg",
                                            alt: "product-img"
                                        }), (0, i.jsxs)("div", {
                                            className: "product-profile-details",
                                            children: [(0, i.jsx)("p", {
                                                children: "Creator"
                                            }), (0, i.jsx)("h5", {
                                                children: null == s ? void 0 : s.creatorName
                                            })]
                                        })]
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "product-img-time",
                                    children: (0, i.jsx)(j.Z, {
                                        src: null == s ? void 0 : s.image,
                                        alt: "product-img"
                                    })
                                }), l && (0, i.jsx)(i.Fragment, {
                                    children: (0, i.jsx)("div", {
                                        className: "product-details-profile full-width",
                                        children: (0, i.jsxs)("div", {
                                            className: "product-profile",
                                            children: [(0, i.jsx)("img", {
                                                src: (null == s ? void 0 : s.ownerLogo) || "/images/user.svg",
                                                alt: "product-img"
                                            }), (0, i.jsx)("div", {
                                                className: "product-profile-details",
                                                children: (0, i.jsx)("h5", {
                                                    children: null == s ? void 0 : s.ownerName
                                                })
                                            })]
                                        })
                                    })
                                }), (0, i.jsxs)("div", {
                                    className: "product-details-profile",
                                    children: [!l && (0, i.jsxs)("div", {
                                        className: "product-profile",
                                        children: [(0, i.jsx)("img", {
                                            src: v.c6[null == s ? void 0 : s.chainId],
                                            alt: "product-img"
                                        }), (null == s ? void 0 : s.marketPrice) ? (0, i.jsxs)("div", {
                                            className: "product-profile-details",
                                            children: [(0, i.jsx)("p", {
                                                children: null == s ? void 0 : s.currencySymbol
                                            }), (0, i.jsx)("h5", {
                                                children: (0, i.jsx)("span", {
                                                    children: (0, N.IA)((null == s ? void 0 : s.marketPrice) || 0, 4)
                                                })
                                            })]
                                        }) : ""]
                                    }), (0, i.jsx)("div", {
                                        className: "btn-product ".concat(l && "col-md-12"),
                                        children: (0, i.jsx)("button", {
                                            onClick: () => n(s),
                                            children: (0, i.jsx)("span", {
                                                children: "Details"
                                            })
                                        })
                                    })]
                                })]
                            })
                        })
                    })
                },
                b = l(52448);

            function k() {
                let {
                    page: e,
                    loading: s,
                    items: l,
                    payload: c,
                    hasMore: r,
                    categorys: d,
                    handleCategorySelect: o,
                    orderOption: t,
                    orderChange: m,
                    handlePageChange: h
                } = (0, g.Zr)(), {
                    handleLike: j,
                    liked: v
                } = (0, g.cY)();
                return (0, u.useRouter)(), (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)("div", {
                        className: "tab-filter-main-block",
                        children: (0, i.jsxs)(n.Z, {
                            children: [(0, i.jsx)("div", {
                                className: "common-title-block",
                                children: (0, i.jsxs)("h2", {
                                    children: [(0, i.jsx)("span", {
                                        children: "Hot Picks"
                                    }), (0, i.jsx)("img", {
                                        src: "../../images/fire-img-icon.svg",
                                        alt: "fire-img"
                                    })]
                                })
                            }), (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsxs)("div", {
                                    className: "top-button-select",
                                    children: [(0, i.jsx)("div", {
                                        className: "top-button-group",
                                        children: (null == d ? void 0 : d.length) > 0 && (0, i.jsxs)(i.Fragment, {
                                            children: [(0, i.jsx)("button", {
                                                className: "".concat((null == c ? void 0 : c.category) ? "" : "selected"),
                                                onClick: () => o(""),
                                                children: "All"
                                            }, "All"), null == d ? void 0 : d.map((e, s) => {
                                                var l;
                                                return (0, i.jsxs)("button", {
                                                    className: "".concat((null == c ? void 0 : null === (l = c.category) || void 0 === l ? void 0 : l.includes(null == e ? void 0 : e.value)) ? "selected" : ""),
                                                    onClick: () => o(null == e ? void 0 : e.value),
                                                    children: [null == e ? void 0 : e.label, " "]
                                                }, s)
                                            })]
                                        })
                                    }), (null == l ? void 0 : l.length) > 0 && t && (0, i.jsx)("div", {
                                        className: "form-group",
                                        children: (0, i.jsx)(x.ZP, {
                                            name: "Hot-Picks-Order",
                                            options: t,
                                            className: "TX-select2-wrapper",
                                            classNamePrefix: "TX-fix-select",
                                            onChange: m
                                        })
                                    })]
                                }), s && 1 == e ? (0, i.jsx)(i.Fragment, {
                                    children: (0, i.jsx)("div", {
                                        className: "d-flex justify-content-center m-4",
                                        children: (0, i.jsx)(b.Z, {
                                            animation: "border",
                                            size: "lg"
                                        })
                                    })
                                }) : !(null == l ? void 0 : l.length) > 0 ? (0, i.jsx)(i.Fragment, {}) : (0, i.jsx)("div", {
                                    className: "tab-filter-main-block-inner",
                                    children: (0, i.jsx)("div", {
                                        className: "showing-result-block full-width-showing",
                                        children: (0, i.jsx)(a.CommonProductBLock, {
                                            className: "explore-block-product",
                                            children: (0, i.jsx)("div", {
                                                className: "common-product-block flex-width-five",
                                                children: null == l ? void 0 : l.map((e, s) => (0, i.jsx)(i.Fragment, {
                                                    children: (0, i.jsx)(f, {
                                                        item: e,
                                                        handleLike: j
                                                    }, null == e ? void 0 : e._id)
                                                }))
                                            })
                                        })
                                    })
                                }), s && e > 1 && (0, i.jsx)(i.Fragment, {
                                    children: (0, i.jsx)("div", {
                                        className: "d-flex justify-content-center m-4",
                                        children: (0, i.jsx)(b.Z, {
                                            animation: "border",
                                            size: "lg"
                                        })
                                    })
                                }), !s && r && (0, i.jsx)("div", {
                                    className: "load-more-block",
                                    children: (0, i.jsx)(a.GradientBorderButton, {
                                        onClick: h,
                                        className: "border-dark-button",
                                        children: "Load More"
                                    })
                                })]
                            })]
                        })
                    })
                })
            }
            var w = l(39332),
                C = e => {
                    let {
                        user: s,
                        index: l
                    } = e, c = (0, w.useRouter)(), r = (0, o.useCallback)(() => {
                        c.push(p.v.user.detail(null == s ? void 0 : s.address))
                    }, [s]);
                    return (0, i.jsx)("div", {
                        className: "top-seller-block-inner",
                        children: (0, i.jsxs)("div", {
                            className: "top-seller-collection-profile-flex pointer",
                            onClick: r,
                            children: [(0, i.jsxs)("div", {
                                className: "top-seller-collection-profile",
                                children: [(0, i.jsx)("div", {
                                    className: "top-seller-collection-profile-img",
                                    children: (0, i.jsx)("img", {
                                        src: (null == s ? void 0 : s.userLogo) || "/images/user.svg",
                                        alt: null == s ? void 0 : s.userName
                                    })
                                }), (0, i.jsxs)("div", {
                                    className: "top-seller-collection-profile-content",
                                    children: [(0, i.jsx)("h4", {
                                        children: null == s ? void 0 : s.userName
                                    }), (0, i.jsxs)("div", {
                                        className: "d-flex justify-content-between w-full",
                                        style: {
                                            width: "200px"
                                        },
                                        children: [(0, i.jsxs)("p", {
                                            children: [(0, i.jsx)("span", {
                                                className: "text-black-50",
                                                children: "Buy: "
                                            }), (0, N.ag)((null == s ? void 0 : s.buyNumber) || 0, 2)]
                                        }), (0, i.jsxs)("p", {
                                            children: [(0, i.jsx)("span", {
                                                className: "text-black-50",
                                                children: "Sell: "
                                            }), (0, N.ag)((null == s ? void 0 : s.sellAmount) || 0, 2)]
                                        }), (0, i.jsxs)("p", {
                                            children: [(0, i.jsx)("span", {
                                                className: "text-black-50",
                                                children: "Volume: "
                                            }), (0, N.ag)((null == s ? void 0 : s.tradingVolume) || 0, 2)]
                                        })]
                                    })]
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "top-seller-item-block",
                                children: [(0, i.jsxs)("div", {
                                    className: "add-check-icon",
                                    children: [(0, i.jsx)("svg", {
                                        version: "1.2",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 14 14",
                                        width: "14",
                                        height: "14",
                                        children: (0, i.jsx)("path", {
                                            id: "Layer",
                                            class: "s0",
                                            d: "m7 0q-0.2 0-0.4 0.1-0.2 0.1-0.3 0.2-0.1 0.1-0.2 0.3-0.1 0.2-0.1 0.4v5h-5q-0.4 0-0.7 0.3-0.3 0.3-0.3 0.7 0 0.4 0.3 0.7 0.3 0.3 0.7 0.3h5v5q0 0.4 0.3 0.7 0.3 0.3 0.7 0.3 0.4 0 0.7-0.3 0.3-0.3 0.3-0.7v-5h5q0.4 0 0.7-0.3 0.3-0.3 0.3-0.7 0-0.4-0.3-0.7-0.3-0.3-0.7-0.3h-5v-5q0-0.2-0.1-0.4-0.1-0.2-0.2-0.3-0.1-0.1-0.3-0.2-0.2-0.1-0.4-0.1z"
                                        })
                                    }), (0, i.jsx)("img", {
                                        src: "../../images/check-icon-1.svg",
                                        alt: "check-img"
                                    })]
                                }), (0, i.jsx)("div", {
                                    className: "number-block-list",
                                    children: (0, i.jsxs)("h4", {
                                        children: ["# ", (0, i.jsx)("span", {
                                            children: l + 1
                                        })]
                                    })
                                })]
                            })]
                        })
                    })
                },
                y = () => {
                    let {
                        loading: e,
                        topSellers: s
                    } = (0, g.D0)();
                    return (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)("div", {
                            className: "top-seller-block",
                            children: (0, i.jsxs)(n.Z, {
                                children: [(0, i.jsx)("div", {
                                    className: "common-title-block text-center",
                                    children: (0, i.jsx)("h2", {
                                        children: "Top Collectors"
                                    })
                                }), e ? (0, i.jsx)(i.Fragment, {
                                    children: (0, i.jsx)("div", {
                                        className: "d-flex justify-content-center",
                                        children: (0, i.jsx)(b.Z, {
                                            animation: "border",
                                            size: "lg"
                                        })
                                    })
                                }) : !(null == s ? void 0 : s.length) > 0 ? (0, i.jsx)(i.Fragment, {}) : (0, i.jsx)(i.Fragment, {
                                    children: (0, i.jsx)("div", {
                                        className: "top-seller-block-main justify-content-center",
                                        children: null == s ? void 0 : s.map((e, s) => (0, i.jsx)(C, {
                                            index: s,
                                            user: e
                                        }, null == e ? void 0 : e._id))
                                    })
                                })]
                            })
                        })
                    })
                };

            function F() {
                let e = (0, u.useRouter)(),
                    {
                        chainId: s,
                        account: l,
                        library: c
                    } = (0, m.a)();
                return (0, t.I0)(), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(r(), {
                        children: [(0, i.jsx)("title", {
                            children: "TesseractX"
                        }), (0, i.jsx)("meta", {
                            name: "description",
                            content: "TesseractX is the ultimate NFT marketplace on PulseChain, offering generous rewards. Buy, sell, and trade unique digital collectibles!"
                        }), (0, i.jsx)("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1"
                        })]
                    }), (0, i.jsx)("main", {
                        children: (0, i.jsx)(d.Fd, {
                            className: "dark-mode-body",
                            children: (0, i.jsxs)(a.HomeMain, {
                                className: "home-grapics",
                                children: [(0, i.jsx)("div", {
                                    className: "home-grapics-one",
                                    children: (0, i.jsx)("img", {
                                        src: "../../images/common-grapics-shape.svg",
                                        alt: "common-img"
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "home-grapics-two",
                                    children: (0, i.jsx)("img", {
                                        src: "../../images/common-grpics-shape-2.svg",
                                        alt: "common-img"
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "home-grapics-three",
                                    children: (0, i.jsx)("img", {
                                        src: "../../images/common-grapics-shape.svg",
                                        alt: "common-img"
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "home-grapics-four",
                                    children: (0, i.jsx)("img", {
                                        src: "../../images/common-grapics-shape-3.svg",
                                        alt: "common-img"
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "home-grapics-five",
                                    children: (0, i.jsx)("img", {
                                        src: "../../images/common-grapics-shape-4.svg",
                                        alt: "common-img"
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "home-grapics-six",
                                    children: (0, i.jsx)("img", {
                                        src: "../../images/common-grapics-shape-5.svg",
                                        alt: "common-img"
                                    })
                                }), (0, i.jsx)(h.do, {}), (0, i.jsx)(h.vp, {}), (0, i.jsx)(h.M9, {}), (0, i.jsx)(k, {}), (0, i.jsx)(y, {}), (0, i.jsx)("div", {
                                    className: "create-art-block",
                                    children: (0, i.jsx)(n.Z, {
                                        children: (0, i.jsxs)("div", {
                                            className: "create-art-block-inner",
                                            children: [(0, i.jsxs)("div", {
                                                className: "create-art-block-inner-left",
                                                children: [(0, i.jsxs)("h2", {
                                                    children: ["Your Art", (0, i.jsx)("br", {}), " Your ", (0, i.jsx)("span", {
                                                        children: "FUTURE"
                                                    })]
                                                }), (0, i.jsx)("p", {
                                                    children: "Transform your artistic visions into valuable digital assets. With TesseractX, creating and selling your art becomes an effortless, rewarding journey."
                                                }), (0, i.jsxs)("div", {
                                                    className: "create-btn",
                                                    children: [(0, i.jsx)(a.Button, {
                                                        onClick: () => e.push(p.v.create.nfts),
                                                        children: "Create"
                                                    }), (0, i.jsx)(a.Button, {
                                                        className: "border-dark-button",
                                                        isBorderBtn: !0,
                                                        onClick: () => e.push(p.v.explore.nfts),
                                                        children: "Explore"
                                                    })]
                                                })]
                                            }), (0, i.jsxs)("div", {
                                                className: "create-art-block-inner-right",
                                                children: [(0, i.jsx)("img", {
                                                    src: "../../images/create-img-1.svg",
                                                    alt: "create-img"
                                                }), (0, i.jsxs)("div", {
                                                    className: "create-btn",
                                                    children: [(0, i.jsx)(a.Button, {
                                                        onClick: () => e.push(p.v.create.nfts),
                                                        children: "Create"
                                                    }), (0, i.jsx)(a.Button, {
                                                        className: "border-dark-button",
                                                        isBorderBtn: !0,
                                                        onClick: () => e.push(p.v.explore.nfts),
                                                        children: "Explore"
                                                    })]
                                                })]
                                            })]
                                        })
                                    })
                                })]
                            })
                        })
                    })]
                })
            }
        },
        27880: function() {},
        51660: function() {},
        9008: function(e, s, l) {
            e.exports = l(7828)
        }
    }
]);