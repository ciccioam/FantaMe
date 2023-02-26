! function (e) {
    var n = {};

    function t(i) {
        if (n[i]) return n[i].exports;
        var o = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }
    t.m = e, t.c = n, t.d = function (e, n, i) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }, t.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function (e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, t.p = "https://leghe.fantagazzetta.com/", t(t.s = 19)
}([function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    n.VENDOR_CONSENT_COOKIE_NAME = "fgconsent", n.PUBLISHER_CONSENT_COOKIE_NAME = "fgpubconsent", n.COOKIE_MAX_AGE = 33696e3, n.CONSENT_STRING_VERSION = 1, n.BETA_MAX_VENDOR_ID = 4020, n.MARKDOWN_LINK_REGEX = /^\[(.+)\]\((http\:\/\/.+|https\:\/\/.+)\)$/, n.DEFAULT_LANGUAGE = "en", n.THIRD_PARTY_COOKIE_CHECK_TIMEOUT = 3e3, n.THIRD_PARTY_COOKIE_MARK = "_cmpQcif3pcsupported"
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.isUnsupportedBrowser = n.isValidPublisherVendorListUrl = n.isValidMarkdownLink = n.isPositiveInt = n.isNonEmptyString = n.isObjectAllFalse = n.isArrayAllFalse = n.isObject = n.isArray = n.doCallbackApply = n.doCallback = n.executePendingCalls = n.CallbackArray = n.logError = n.getJson = n.MILLISEC_DAY = void 0;
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
        o = t(0),
        r = t(5),
        s = (n.MILLISEC_DAY = 864e5, n.getJson = function (e, n) {
            var t = new XMLHttpRequest;
            t.onreadystatechange = function () {
                n(t)
            }, t.open("GET", e.url), t.withCredentials = !!e.withCredentials, t.responseType = "json", t.send()
        }, n.logError = function (e, n) {
            console.error(e + ": " + n + (n && n.stack ? "\n" + n.stack : ""))
        }),
        a = (n.CallbackArray = function () {
            return {
                cbArray: [],
                push: function (e) {
                    if ("function" != typeof e) throw "Should push only functions into Callback array. Trying to push " + (void 0 === e ? "undefined" : i(e));
                    var n = [].slice.call(arguments, 1);
                    this.cbArray.push({
                        func: e,
                        args: n
                    })
                },
                call: function () {
                    for (; this.cbArray.length > 0;) {
                        var e = this.cbArray.shift(),
                            n = [].slice.call(arguments);
                        e.func.apply(null, e.args.concat(n))
                    }
                    this.cbArray = []
                },
                size: function () {
                    return this.cbArray.length
                }
            }
        }, n.executePendingCalls = function (e) {
            for (; e.length > 0;) try {
                var n = e.shift();
                if (!n) continue;
                window.__cmp.apply(null, n)
            } catch (e) {
                s("Error running pending call", e)
            }
        }, n.doCallback = function (e) {
            if ("function" == typeof e) return e.apply(null, [].slice.call(arguments, 1))
        }, n.doCallbackApply = function (e, n) {
            if ("function" == typeof e) return e.apply(null, n)
        }, n.isArray = function (e) {
            return e && "object" === (void 0 === e ? "undefined" : i(e)) && e.constructor === Array
        }),
        u = n.isObject = function (e) {
            return e && "object" === (void 0 === e ? "undefined" : i(e)) && e.constructor === Object
        };
    n.isArrayAllFalse = function (e) {
        return !!a(e) && e.every(function (e) {
            return !e
        })
    }, n.isObjectAllFalse = function (e) {
        if (!u(e)) return !1;
        for (var n in e)
            if (Object.prototype.hasOwnProperty.call(e, n) && e[n]) return !1;
        return !0
    }, n.isNonEmptyString = function (e) {
        return e && e.length && e.trim()
    }, n.isPositiveInt = function (e) {
        return "number" == typeof e && isFinite(e) && Math.floor(e) === e && e >= 0
    }, n.isValidMarkdownLink = function (e) {
        if ("string" == typeof e) {
            var n = e.match(o.MARKDOWN_LINK_REGEX);
            return n && r.isUri(n[2])
        }
    }, n.isValidPublisherVendorListUrl = function (e) {
        return r.isUri(e) && -1 != e.indexOf("/.well-known/pubvendors.json")
    }, n.isUnsupportedBrowser = function () {
        return window.navigator.userAgent.match(/MSIE [2-9]\.(0|5)/)
    }
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.initializeConfig = n.getConfig = n.isConfigInitialized = n.config = void 0;
    var i = t(1),
        o = t(0),
        r = t(9),
        s = n.config = {},
        a = (n.isConfigInitialized = !1, {
            displayUi: {
                publicConfigKey: "Display UI",
                getDefaultValue: function () {
                    return window.__cmp.gdprAppliesGlobally ? "always" : "inEU"
                },
                isValidValue: function (e) {
                    var n = !1;
                    return ["never", "inEU", "always"].forEach(function (t) {
                        t === e && (n = !0)
                    }), n
                },
                validValue: "one of 'never', 'inEU', or 'always'"
            },
            uiLayout: {
                publicConfigKey: "UI Layout",
                getDefaultValue: function () {
                    return "popup"
                },
                isValidValue: function (e) {
                    var n = !1;
                    return ["popup", "banner"].forEach(function (t) {
                        t === e && (n = !0)
                    }), n
                },
                validValue: "one of 'popup', or 'banner'"
            },
            vendorListUpdateFreq: {
                publicConfigKey: "Min Days Between UI Displays",
                getDefaultValue: function () {
                    return 30
                },
                isValidValue: i.isPositiveInt,
                validValue: "a positive integer"
            },
            nonconsentDisplayFrequency: {
                publicConfigKey: "Non-Consent Display Frequency",
                getDefaultValue: function () {
                    return 1
                },
                isValidValue: i.isPositiveInt,
                validValue: "a positive integer"
            },
            consentScope: {
                publicConfigKey: "Consent Scope",
                getDefaultValue: function () {
                    return "global"
                },
                isValidValue: function (e) {
                    return ["global", "service", "global group", "service group"].includes(e)
                },
                validValue: "one of 'global', 'service', 'global group', 'service group'",
                hasDependency: function () {
                    return ["global", "service"].includes(s.consentScope) ? {
                        dependentConfig: null,
                        isValid: !0,
                        invalidValueMessage: ""
                    } : a.consentScopeGroupURL.isValidValue(s.consentScopeGroupURL) ? {
                        dependentConfig: a.consentScopeGroupURL.publicConfigKey,
                        isValid: !0,
                        invalidValueMessage: ""
                    } : (s.consentScope = "global group" === s.consentScope ? "global" : "service", {
                        dependentConfig: a.consentScopeGroupURL.publicConfigKey,
                        isValid: !1,
                        invalidValueMessage: a.consentScopeGroupURL.publicConfigKey + " must be " + a.consentScopeGroupURL.validValue + " when " + this.publicConfigKey + " is 'global group', or 'service group'. Resetting it to " + s.consentScope
                    })
                }
            },
            consentScopeGroupURL: {
                publicConfigKey: "Consent Scope Group URL",
                getDefaultValue: function () {
                    return ""
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty domain",
                hasDependency: function () {
                    return ["global group", "service group"].includes(s.consentScope) ? {
                        dependentConfig: a.consentScope.publicConfigKey,
                        isValid: !0,
                        invalidValueMessage: ""
                    } : {
                            dependentConfig: a.consentScope.publicConfigKey,
                            isValid: !1,
                            invalidValueMessage: a.consentScope.publicConfigKey + " should be either 'global group', or 'service group' for Group Url to be effective. Group Url will be ignored"
                        }
                }
            },
            rejectConsentRedirectUrl: {
                publicConfigKey: "Post Consent Page",
                getDefaultValue: function () {
                    return null
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            publisherName: {
                publicConfigKey: "Publisher Name",
                getDefaultValue: function () {
                    return "[Company Name]"
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            publisherPurposeIds: {
                publicConfigKey: "Publisher Purpose IDs",
                getDefaultValue: function () {
                    return []
                },
                isValidValue: function (e) {
                    return (0, i.isArray)(e) && e.reduce(function (e, n) {
                        return e && (0, i.isPositiveInt)(n)
                    }, !0)
                },
                validValue: "an array containing purpose ids"
            },
            publisherPurposeLegitimateInterestIds: {
                publicConfigKey: "Publisher Purpose Legitimate Interest IDs",
                getDefaultValue: function () {
                    return []
                },
                isValidValue: function (e) {
                    return (0, i.isArray)(e) && e.reduce(function (e, n) {
                        return e && (0, i.isPositiveInt)(n)
                    }, !0)
                },
                validValue: "an array containing only purpose ids listed in the Publisher Purpose IDs array",
                hasDependency: function () {
                    return s.publisherPurposeLegitimateInterestIds.every(function (e) {
                        return s.publisherPurposeIds.includes(e)
                    }) ? {
                            dependentConfig: a.publisherPurposeIds.publicConfigKey,
                            isValid: !0,
                            invalidValueMessage: ""
                        } : {
                            dependentConfig: a.publisherPurposeIds.publicConfigKey,
                            isValid: !1,
                            invalidValueMessage: "Publisher Purpose Legitimate Interest IDs must be an array containing only purpose IDs contained in the Publisher Purpose IDs array, the following purpose IDs will be ignored: " + s.publisherPurposeLegitimateInterestIds.filter(function (e) {
                                if (!s.publisherPurposeIds.includes(e)) return e
                            }).join(", ")
                        }
                }
            },
            publisherLogo: {
                publicConfigKey: "Publisher Logo",
                getDefaultValue: function () {
                    return ""
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            defaultToggleValue: {
                publicConfigKey: "Default Value for Toggles",
                getDefaultValue: function () {
                    return "off"
                },
                isValidValue: function (e) {
                    return ["on", "off"].indexOf(e) >= 0
                },
                validValue: "one of either 'on', or 'off'"
            },
            language: {
                publicConfigKey: "Language",
                getValue: function (e) {
                    return e.toLowerCase()
                },
                getDefaultValue: function () {
                    return o.DEFAULT_LANGUAGE
                },
                isValidValue: function (e) {
                    return !(!e || !r.IAB_SUPPORTED_LANGUAGES.includes(e.toLowerCase()))
                },
                validValue: "one of the following languages: {" + r.IAB_SUPPORTED_LANGUAGES + "}"
            },
            initScreenTitle: {
                publicConfigKey: "Initial Screen Title Text",
                getDefaultValue: function () {
                    return (0, r.getTranslationOrDefault)(s.language, "INIT_SCREEN_TITLE_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            initScreenBodyTextOption: {
                publicConfigKey: "Initial Screen Body Text Option",
                getDefaultValue: function () {
                    return 1
                },
                isValidValue: function (e) {
                    return [1, 2, 3].includes(e)
                },
                validValue: "one of the following values: {1, 2, 3}"
            },
            initScreenBody: {
                publicConfigKey: "Initial Screen Body Text",
                getDefaultValue: function () {
                    return s.publisherName + " and our partners use technology such as cookies on our site to personalize content and ads, provide social media features, and analyze our traffic. Click below to consent to the use of this technology by " + s.publisherName + " and these 3rd parties across the web. You can change your mind and revisit your consent choices at anytime by returning to this site."
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            initScreenRejectButton: {
                publicConfigKey: "Initial Screen Reject Button Text",
                getDefaultValue: function () {
                    return (0, r.getTranslationOrDefault)(s.language, "INIT_SCREEN_REJECT_BUTTON_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            initScreenRejectButtonAsLink: {
                publicConfigKey: "Display No Button as Link",
                getDefaultValue: function () {
                    return !1
                },
                isValidValue: function (e) {
                    return "boolean" == typeof e
                },
                validValue: "a boolean"
            },
            initScreenRejectButtonShowing: {
                publicConfigKey: "No Option",
                getDefaultValue: function () {
                    return !0
                },
                isValidValue: function (e) {
                    return "boolean" == typeof e
                },
                validValue: "a boolean"
            },
            initScreenAcceptButton: {
                publicConfigKey: "Initial Screen Accept Button Text",
                getDefaultValue: function () {
                    return (0, r.getTranslationOrDefault)(s.language, "INIT_SCREEN_ACCEPT_BUTTON_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            initScreenPurposeLink: {
                publicConfigKey: "Initial Screen Purpose Link Text",
                getDefaultValue: function () {
                    return (0, r.getTranslationOrDefault)(s.language, "INIT_SCREEN_PURPOSE_LINK_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            initScreenCustomLinks: {
                publicConfigKey: "Custom Links Displayed on Initial Screen",
                getDefaultValue: function () {
                    return []
                },
                isValidValue: function (e) {
                    return e.length <= 2 && e.every(function (e) {
                        return (0, i.isValidMarkdownLink)(e)
                    })
                },
                validValue: 'an array of 2 or fewer markdown links: "[link text](url)"'
            },
            purposeScreenHeaderTitle: {
                publicConfigKey: "Purpose Screen Header Title Text",
                getDefaultValue: function () {
                    return "Privacy Settings"
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            purposeScreenTitle: {
                publicConfigKey: "Purpose Screen Title Text",
                getDefaultValue: function () {
                    return (0, r.getTranslationOrDefault)(s.language, "PURPOSE_SCREEN_TITLE_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            purposeScreenBody: {
                publicConfigKey: "Purpose Screen Body Text",
                getDefaultValue: function () {
                    return (0, r.getTranslationOrDefault)(s.language, "PURPOSE_SCREEN_BODY_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            purposeScreenEnableAllButton: {
                publicConfigKey: "Purpose Screen Enable All Button Text",
                getDefaultValue: function () {
                    return (0, r.getTranslationOrDefault)(s.language, "PURPOSE_SCREEN_ENABLE_ALL_BUTTON_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            purposeScreenVendorLink: {
                publicConfigKey: "Purpose Screen Vendor Link Text",
                getDefaultValue: function () {
                    return (0, r.getTranslationOrDefault)(s.language, "PURPOSE_SCREEN_VENDOR_LINK_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            purposeScreenCancelButton: {
                publicConfigKey: "Purpose Screen Cancel Button Text",
                getDefaultValue: function () {
                    return (0, r.getTranslationOrDefault)(s.language, "PURPOSE_SCREEN_CANCEL_BUTTON_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            purposeScreenSaveAndExitButton: {
                publicConfigKey: "Purpose Screen Save and Exit Button Text",
                getDefaultValue: function () {
                    return (0, r.getTranslationOrDefault)(s.language, "PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            vendorScreenTitle: {
                publicConfigKey: "Vendor Screen Title Text",
                getDefaultValue: function () {
                    return (0, r.getTranslationOrDefault)(s.language, "VENDOR_SCREEN_TITLE_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            vendorScreenBody: {
                publicConfigKey: "Vendor Screen Body Text",
                getDefaultValue: function () {
                    return (0, r.getTranslationOrDefault)(s.language, "VENDOR_SCREEN_BODY_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            vendorScreenRejectAllButton: {
                publicConfigKey: "Vendor Screen Reject All Button Text",
                getDefaultValue: function () {
                    return (0, r.getTranslationOrDefault)(s.language, "VENDOR_SCREEN_REJECT_ALL_BUTTON_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            vendorScreenAcceptAllButton: {
                publicConfigKey: "Vendor Screen Accept All Button Text",
                getDefaultValue: function () {
                    return (0, r.getTranslationOrDefault)(s.language, "VENDOR_SCREEN_ACCEPT_ALL_BUTTON_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            vendorScreenPurposesLink: {
                publicConfigKey: "Vendor Screen Purposes Link Text",
                getDefaultValue: function () {
                    return (0, r.getTranslationOrDefault)(s.language, "VENDOR_SCREEN_PURPOSES_LINK_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            vendorScreenCancelButton: {
                publicConfigKey: "Vendor Screen Cancel Button Text",
                getDefaultValue: function () {
                    return (0, r.getTranslationOrDefault)(s.language, "VENDOR_SCREEN_CANCEL_BUTTON_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            vendorScreenSaveAndExitButton: {
                publicConfigKey: "Vendor Screen Save and Exit Button Text",
                getDefaultValue: function () {
                    return (0, r.getTranslationOrDefault)(s.language, "VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            vendorWhiteBlackList: {
                publicConfigKey: "Vendor White List or Black List",
                getDefaultValue: function () {
                    return {}
                },
                isValidValue: function (e) {
                    if (void 0 === e.isWhitelist || "boolean" != typeof e.isWhitelist) return !1;
                    if (!(0, i.isArray)(e.vendorIds) || !e.vendorIds.length) return !1;
                    for (var n = 0; n < e.vendorIds.length; n++)
                        if (!(0, i.isPositiveInt)(e.vendorIds[n])) return !1;
                    return !0
                },
                validValue: "{ isWhitelist: <true/false>, vendorIds: <an array of vendor ID> }"
            },
            publisherVendorListUrl: {
                publicConfigKey: "Publisher Vendor List URL",
                getDefaultValue: function () {
                    return ""
                },
                isValidValue: i.isValidPublisherVendorListUrl,
                validValue: "a valid URL containing /.well-known/pubvendors.json"
            }
        });
    n.getConfig = function () {
        return s
    }, n.initializeConfig = function (e) {
        for (var t in e = e || {}, a) {
            var i = e[a[t].publicConfigKey];
            if (void 0 !== i)
                if (a[t].isValidValue(i)) void 0 !== a[t].getValue ? s[t] = a[t].getValue(i) : s[t] = i;
                else {
                    s[t] = a[t].getDefaultValue();
                    var o = a[t].publicConfigKey,
                        u = i + " is not a valid value for the config option " + o + ". ",
                        l = o + " must be " + a[t].validValue;
                    console.warn(u + l)
                }
            else s[t] = a[t].getDefaultValue()
        }
        for (var t in a)
            if (e[a[t].publicConfigKey] && a[t].hasDependency) {
                var c = a[t].hasDependency();
                c.isValid || console.warn("Dependency check failed for " + a[t].publicConfigKey + ": " + c.invalidValueMessage)
            } ! function (e) {
                var n = e[a.initScreenBodyTextOption.publicConfigKey],
                    t = e[a.language.publicConfigKey],
                    i = e[a.initScreenBody.publicConfigKey];
                a.initScreenBodyTextOption.isValidValue(n) && a.language.isValidValue(t) ? s.initScreenBody = (0, r.getTranslationOrDefault)(s.language, "INIT_SCREEN_BODY_TEXT")[s.initScreenBodyTextOption] : a.initScreenBody.isValidValue(i) || (s.initScreenBody = s.initScreenBody = (0, r.getTranslationOrDefault)(s.language, "INIT_SCREEN_BODY_TEXT")[s.initScreenBodyTextOption])
            }(e), n.isConfigInitialized = !0
    };
    n.default = s
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = t(1),
        o = (t(4), t(0)),
        r = null,
        s = null,
        a = {},
        u = {},
        l = !1,
        c = function (e, n, t, i) {
            n && n.trim() ? (n = n.trim(), null == e ? p(n, t, i) : f(e, n, t, i)) : "function" == typeof i && i({
                status: "error",
                message: "Cookie name cannot be empty"
            }, !1)
        },
        d = function (e, n, t) {
            n && n.trim() ? (n = n.trim(), void 0 == a[n] ? null == e ? E(n, t) : _(e, n, t) : "function" == typeof t && t(a[n], !0)) : "function" == typeof t && t({
                status: "error",
                message: "Cookie name cannot be empty"
            }, !1)
        },
        p = function (e, n, t) {
            if (e && e.trim()) {
                e = e.trim();
                var i = new Date(Date.now() + 1e3 * o.COOKIE_MAX_AGE).toUTCString();
                document.cookie = e + "=" + n + ";path=/;max-age=" + o.COOKIE_MAX_AGE + ";expires=" + i, a[e] = {
                    value: n,
                    status: "found"
                }, "function" == typeof t && t(a[e], !0)
            } else "function" == typeof t && t({
                status: "error",
                message: "empty cookie name"
            }, !1)
        },
        E = function (e, n) {
            if (e && e.trim()) {
                e = e.trim();
                var t = document.cookie.split(";").filter(function (n) {
                    return n.trim().startsWith(e + "=")
                });
                return 1 == t.length ? a[e] = {
                    value: t[0].trim().substring(e.length + 1),
                    status: "found"
                } : a[e] = {
                    value: null,
                    status: "notfound"
                }, "function" == typeof n && n(a[e], !0), a[e]
            }
            "function" == typeof n && n({
                status: "error",
                message: "empty cookie name"
            }, !1)
        },
        f = function (e, n, t, i) {
            if (e && n && n.trim()) {
                n = n.trim();
                var o = new XMLHttpRequest;
                o.onreadystatechange = function () {
                    T(n, t, o, i)
                }, o.open("POST", e), o.setRequestHeader("Content-Type", "application/json"), o.withCredentials = !0;
                var r = {};
                r[n] = t, o.send(JSON.stringify(r))
            } else "function" == typeof i && i({
                status: "error",
                message: "Could not set cookie for " + n + " using api : " + e
            }, !1)
        },
        _ = function (e, n, t) {
            e && n && n.trim() ? (n = n.trim(), u[n] ? u[n].push(t) : (u[n] = new i.CallbackArray, u[n].push(t), (0, i.getJson)({
                url: e,
                withCredentials: !0
            }, function (e) {
                g(n, e, function (e, t) {
                    u[n].call(e, t), u[n] = void 0
                })
            }))) : "function" == typeof t && t({
                status: "error",
                message: "Could not set cookie for " + n + " using api : " + e
            }, !1)
        },
        T = function (e, n, t, o) {
            if (t.readyState === XMLHttpRequest.DONE) {
                var r, s = !0;
                200 === t.status ? r = a[e] = {
                    value: n,
                    status: "found"
                } : ((0, i.logError)("Setting cookie for " + e + " with value " + n + " failed with httpRequest status", t.status), r = {
                    status: "error"
                }, s = !1), "function" == typeof o && o(r, s)
            }
        },
        g = function (e, n, t) {
            if (n.readyState === XMLHttpRequest.DONE) {
                var o, r = !0;
                if (200 === n.status) {
                    var s = {};
                    if ("string" == typeof n.response) try {
                        s = JSON.parse(n.response)
                    } catch (e) {
                        (0, i.logError)("error parsing cookie response", e)
                    } else s = n.response;
                    s && s[e] ? o = a[e] = {
                        value: s[e],
                        status: "found"
                    } : (o = a[e] = {
                        value: void 0,
                        status: "error"
                    }, r = !1)
                } else 404 === n.status ? o = a[e] = {
                    value: null,
                    status: "notfound"
                } : (o = a[e] = {
                    value: void 0,
                    status: "error"
                }, r = !1);
                "function" == typeof t && t(o, r)
            }
        },
        C = {
            isGlobalScope: l,
            cookie: a,
            setPublisherConsentCookie: function (e, n) {
                e && e.trim() ? (c(s, o.PUBLISHER_CONSENT_COOKIE_NAME, e, n), window.__cmpui && window.__cmpui.hasTrack && window.__cmpui("track", "CMP|Publisher Cookie Set", {
                    "cookie value": e
                })) : "function" == typeof n && n({
                    status: "error",
                    message: "cannot set empty publisher purpose cookie value"
                }, !1)
            },
            fetchPublisherConsentCookie: function (e) {
                d(s, o.PUBLISHER_CONSENT_COOKIE_NAME, e)
            },
            setVendorConsentCookie: function (e, n) {
                e && e.trim() ? (c(r, o.VENDOR_CONSENT_COOKIE_NAME, e, n), window.__cmpui && window.__cmpui.hasTrack && window.__cmpui("track", "CMP|Vendor Cookie Set", {
                    "cookie value": e
                })) : "function" == typeof n && n({
                    status: "error",
                    message: "cannot set empty vendor purpose cookie value"
                }, !1)
            },
            fetchVendorConsentCookie: function (e) {
                d(r, o.VENDOR_CONSENT_COOKIE_NAME, e)
            },
            init: function (e, n) {
                if (e && n && "" === e.publisherVendorListUrl) switch (e.consentScope) {
                    case "global group":
                        s = e.consentScopeGroupURL, r = "https://quantcast.mgr.consensu.org/CookieAccess", l = !0;
                        break;
                    case "global":
                        r = "https://quantcast.mgr.consensu.org/CookieAccess", l = !0;
                        break;
                    case "service group":
                        r = e.consentScopeGroupURL, s = e.consentScopeGroupURL
                }
            }
        };
    n.default = C
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.PublisherConsentAccess = n.VendorConsentAccess = n.ConsentAccess = void 0;
    var i = t(0),
        o = t(1),
        r = {
            CMP_ID: 10,
            CMP_VERSION: 1,
            LOWERCASE_START: "a".charCodeAt(0),
            PAD_ZEROS: "00000000000000000000000000000000000000000000000000",
            BITFIELD_ENCODING: 0,
            RANGES_ENCODING: 1
        },
        s = function () {
            this.binaryStr = "", this.addField = function (e, n, t) {
                var i = (e + 0 || 0).toString(2);
                if (i.length < n) i = r.PAD_ZEROS.substr(0, n - i.length) + i;
                else if (i.length > n) throw new Error("Encountered an overflow setting cookie field " + t);
                this.binaryStr += i
            }
        },
        a = function (e) {
            this.fieldSizes = e, this.fields = {}
        };
    a.prototype.build = function (e, n) {
        var t = this.encodeBinary(e, n),
            i = this.binaryToBytes(t);
        return this.toWebSafeBase64(i)
    }, a.prototype.setAll = function (e) {
        var n = this.fromWebSafeBase64(e),
            t = this.bytesToBinary(n);
        return this.decodeBinary(t)
    }, a.prototype.bytesToBinary = function (e) {
        for (var n, t = "", i = ["0000", "0001", "0010", "0011", "0100", "0101", "0110", "0111", "1000", "1001", "1010", "1011", "1100", "1101", "1110", "1111"], o = 0; o < e.length; o++) t += (n = e.charCodeAt(o), i[n >>> 4 & 15] + i[15 & n]);
        return {
            string: t,
            atPos: 0,
            getBits: function (e) {
                var n = parseInt(this.string.substr(this.atPos, e), 2);
                return this.atPos += e, n
            }
        }
    }, a.prototype.binaryToBytes = function (e) {
        var n = "";
        e += r.PAD_ZEROS.substr(0, 7 - (e.length + 7) % 8);
        for (var t = 0; t < e.length; t += 8) n += String.fromCharCode(parseInt(e.substr(t, 8), 2));
        return n
    }, a.prototype.toWebSafeBase64 = function (e) {
        return btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
    }, a.prototype.fromWebSafeBase64 = function (e) {
        return atob(e.replace(/-/g, "+").replace(/_/g, "/"))
    }, a.prototype.languageFromCookieValue = function (e) {
        return String.fromCharCode(r.LOWERCASE_START + e / 64 >>> 0) + String.fromCharCode(r.LOWERCASE_START + e % 64)
    }, a.prototype.languageToCookieValue = function (e) {
        return 64 * (e.charCodeAt(0) - r.LOWERCASE_START) + (e.charCodeAt(1) - r.LOWERCASE_START)
    }, a.prototype.dateFromDeciseconds = function (e) {
        return new Date(100 * e)
    }, a.prototype.dateToDeciseconds = function (e) {
        return Math.floor(e.getTime() / 100)
    }, a.prototype.decodeSharedFields = function (e) {
        var n = this.fieldSizes,
            t = e.getBits(n.version);
        if (t != i.CONSENT_STRING_VERSION) throw new Error("Cookie version " + t + " is not supported");
        var o = {
            version: t,
            created: this.dateFromDeciseconds(e.getBits(n.created)),
            lastUpdated: this.dateFromDeciseconds(e.getBits(n.lastUpdated)),
            cmpId: e.getBits(n.cmpId),
            cmpVersion: e.getBits(n.cmpVersion)
        };
        return o.cmpVersion >= Math.pow(2, n.cmpVersionOld) && (e.atPos -= n.cmpVersion, o.cmpVersion = e.getBits(n.cmpVersionOld)), o.consentScreen = e.getBits(n.consentScreen), o.consentLanguage = this.languageFromCookieValue(e.getBits(n.consentLanguage)), o.vendorListVersion = e.getBits(n.vendorListVersion), o
    }, a.prototype.encodeSharedFields = function (e) {
        var n = this.fieldSizes,
            t = new s;
        if (e.version != i.CONSENT_STRING_VERSION) throw new Error("version " + e.version + " not supported");
        return t.addField(e.version, n.version, "version"), t.addField(this.dateToDeciseconds(e.created), n.created, "created"), t.addField(this.dateToDeciseconds(e.lastUpdated), n.lastUpdated, "lastUpdated"), t.addField(e.cmpId, n.cmpId, "cmpId"), t.addField(e.cmpVersion, n.cmpVersion, "cmpVersion"), t.addField(e.consentScreen, n.consentScreen, "consentScreen"), t.addField(this.languageToCookieValue(e.consentLanguage || "en"), n.consentLanguage, "consentLanguage"), t.addField(e.vendorListVersion, n.vendorListVersion, "vendorListVersion"), t
    };
    var u = {
        version: 6,
        created: 36,
        lastUpdated: 36,
        cmpId: 12,
        cmpVersion: 12,
        cmpVersionOld: 6,
        consentScreen: 6,
        consentLanguage: 12,
        vendorListVersion: 12,
        purposesAllowed: 24,
        maxVendorId: 16,
        encodingType: 1,
        numEntries: 12,
        defaultConsent: 1,
        isRange: 1,
        startVendorId: 16,
        endVendorId: 16
    };

    function l() {
        a.call(this, u)
    }
    l.prototype = Object.create(a.prototype), l.prototype.constructor = l, l.prototype.decodeBinary = function (e) {
        var n = this.fieldSizes,
            t = this.decodeSharedFields(e);
        t.purposesAllowed = e.getBits(n.purposesAllowed), t.maxVendorId = e.getBits(n.maxVendorId), t.encodingType = e.getBits(n.encodingType);
        var i = t.maxVendorId,
            o = new Array(i + 1);
        if (t.encodingType == r.BITFIELD_ENCODING) {
            var s = e.string.length - e.atPos;
            if (s < i) throw new Error("Incorrect bitfield size: " + s + " < " + i);
            for (var a = 0; a < i; a++) o[a + 1] = "1" == e.string.charAt(e.atPos + a)
        } else {
            t.defaultConsent = 1 == e.getBits(n.defaultConsent);
            for (a = 0; a < i; a++) o[a + 1] = t.defaultConsent;
            t.numEntries = e.getBits(n.numEntries);
            for (a = 0; a < t.numEntries; a++) {
                var u = 1 == e.getBits(n.isRange),
                    l = e.getBits(n.startVendorId),
                    c = u ? e.getBits(n.endVendorId) : l;
                if (e.atPos > e.string.length) throw new Error("Not enough bits for numEntries in ranges");
                if (l > c || c > i) throw new Error("Invalid vendorId range: " + l + "-" + c + ". The max valid vendorId is: " + i);
                for (var d = l; d <= c; d++) o[d] = !t.defaultConsent
            }
        }
        return t.vendorConsents = o, t
    }, l.prototype.encodeRanges = function (e) {
        for (var n, t, i = this.fieldSizes, o = new s, r = e.vendorConsents, a = !!r[1], u = !1, l = e.maxVendorId, c = 0, d = 2; d <= l; d++) {
            var p = !!r[d] != !!a;
            if (p && (u || (n = d, u = !0), t = d), u && (!p || d == l)) {
                c++;
                var E = t > n;
                if (o.addField(E ? 1 : 0, i.isRange, "isRange"), o.addField(n, i.startVendorId, "startVendorId"), E && o.addField(t, i.endVendorId, "endVendorId"), 13 + o.binaryStr.length > l) return null;
                u = !1
            }
        }
        return {
            binary: o,
            defaultConsent: a ? 1 : 0,
            numEntries: c
        }
    }, l.prototype.encodeBinary = function (e, n) {
        var t = this.fieldSizes,
            i = e.vendorConsents,
            o = this.encodeSharedFields(e);
        if (n) return o.binaryStr;
        o.addField(e.purposesAllowed, t.purposesAllowed, "purposesAllowed"), o.addField(e.maxVendorId, t.maxVendorId, "maxVendorId");
        var s = this.encodeRanges(e);
        if (e.encodingType = s ? r.RANGES_ENCODING : r.BITFIELD_ENCODING, o.addField(e.encodingType, t.encodingType, "encodingType"), e.encodingType == r.BITFIELD_ENCODING)
            for (var a = 1; a <= e.maxVendorId; a++) o.binaryStr += i[a] ? "1" : "0";
        else e.defaultConsent = s.defaultConsent, e.numEntries = s.numEntries, o.addField(e.defaultConsent, t.defaultConsent, "defaultConsent"), o.addField(e.numEntries, t.numEntries, "numEntries"), o.binaryStr += s.binary.binaryStr;
        return o.binaryStr
    };
    var c = n.ConsentAccess = function (e, n) {
        this.data = e, this.fields = n
    };
    c.prototype.getVersion = function () {
        return this.fields.version
    }, c.prototype.getCreated = function () {
        return this.fields.created
    }, c.prototype.getLastUpdated = function () {
        return this.fields.lastUpdated
    }, c.prototype.getCmpId = function () {
        return this.fields.cmpId
    }, c.prototype.getCmpVersion = function () {
        return this.fields.cmpVersion
    }, c.prototype.getConsentScreen = function () {
        return this.fields.consentScreen
    }, c.prototype.setConsentScreen = function (e) {
        this.fields.consentScreen = e
    }, c.prototype.getVendorListVersion = function () {
        return this.fields.vendorListVersion
    }, c.prototype.setVendorListVersion = function (e) {
        this.fields.vendorListVersion = e
    }, c.prototype._setPurposeConsent = function (e, n, t) {
        var i = 1 << this.data.fieldSizes[t] - n;
        this.fields[t] = e ? this.fields[t] | i : this.fields[t] & ~i
    }, c.prototype._getPurposeConsent = function (e, n) {
        var t = this.data.fieldSizes;
        if (e) {
            var i = 1 << t[n] - e;
            return 0 != (this.fields[n] & i)
        }
        for (var o = {}, r = 1; r < t[n] + 1; r++) {
            i = 1 << t[n] - r;
            o[r] = 0 != (this.fields[n] & i)
        }
        return o
    }, c.prototype.initializeFields = function (e) {
        (e || void 0 === this.fields.version) && (this.fields.version = i.CONSENT_STRING_VERSION), (e || void 0 === this.fields.cmpId) && (this.fields.cmpId = r.CMP_ID), (e || void 0 === this.fields.cmpVersion) && (this.fields.cmpVersion = r.CMP_VERSION), void 0 === this.fields.created && (this.fields.created = new Date), (e || void 0 === this.fields.lastUpdated) && (this.fields.lastUpdated = new Date)
    }, c.prototype.build = function () {
        return this.initializeFields(!0), this.data.build(this.fields, !1)
    };
    var d = {};
    c.prototype.setAll = function (e) {
        var n = !0;
        if (!e) return !1;
        if (d[e]) this.fields = d[e];
        else try {
            this.fields = this.data.setAll(e), d[e] = this.fields
        } catch (t) {
            (0, o.logError)("Error parsing cookie: " + e, t), n = !1
        }
        return n
    }, c.prototype.getMetadata = function (e) {
        return e ? (this.initializeFields(!1), this.data.build(this.fields, !0)) : {
            version: this.fields.version,
            created: this.fields.created,
            lastUpdated: this.fields.lastUpdated,
            cmpId: this.fields.cmpId,
            cmpVersion: this.fields.cmpVersion,
            consentScreen: this.fields.consentScreen,
            consentLanguage: this.fields.consentLanguage,
            vendorListVersion: this.fields.vendorListVersion
        }
    };
    var p = n.VendorConsentAccess = function () {
        c.call(this, new l, {
            vendorConsents: []
        })
    };
    p.prototype = Object.create(c.prototype), p.prototype.constructor = p, p.prototype.setPurposeConsent = function (e, n) {
        this._setPurposeConsent(e, n, "purposesAllowed")
    }, p.prototype.getPurposeConsent = function (e) {
        return this._getPurposeConsent(e, "purposesAllowed")
    }, p.prototype.getMaxVendorId = function (e) {
        return this.fields.maxVendorId
    }, p.prototype.setMaxVendorId = function (e) {
        this.fields.maxVendorId = e
    }, p.prototype.getVendorConsent = function (e) {
        if (!(e > this.fields.maxVendorId)) return e ? !!this.fields.vendorConsents[e] : this.fields.vendorConsents
    }, p.prototype.setVendorConsent = function (e, n) {
        this.fields.vendorConsents[n] = !!e
    };
    var E = {
        version: 6,
        created: 36,
        lastUpdated: 36,
        cmpId: 12,
        cmpVersion: 12,
        cmpVersionOld: 6,
        consentScreen: 6,
        consentLanguage: 12,
        vendorListVersion: 12,
        publisherPurposesVersion: 12,
        standardPurposesAllowed: 24,
        numberCustomPurposes: 6
    };

    function f() {
        a.call(this, E)
    }
    f.prototype = Object.create(a.prototype), f.prototype.constructor = f, f.prototype.decodeBinary = function (e) {
        var n = this.fieldSizes,
            t = this.decodeSharedFields(e);
        t.publisherPurposesVersion = e.getBits(n.publisherPurposesVersion), t.standardPurposesAllowed = e.getBits(n.standardPurposesAllowed), t.numberCustomPurposes = e.getBits(n.numberCustomPurposes);
        for (var i = new Array(t.numberCustomPurposes + 1), o = 0; o < t.numberCustomPurposes; o++) i[o + 1] = "1" == e.string.charAt(e.atPos + o);
        return t.customPurposeConsents = i, t
    }, f.prototype.encodeBinary = function (e, n) {
        var t = this.fieldSizes,
            i = this.encodeSharedFields(e);
        if (i.addField(e.publisherPurposesVersion, t.publisherPurposesVersion, "publisherPurposesVersion"), n) return i.binaryStr;
        i.addField(e.standardPurposesAllowed, t.standardPurposesAllowed, "standardPurposesAllowed"), i.addField(e.numberCustomPurposes, t.numberCustomPurposes, "numberCustomPurposes");
        for (var o = 1; o <= e.numberCustomPurposes; o++) i.binaryStr += e.customPurposeConsents[o] ? "1" : "0";
        return i.binaryStr
    };
    var _ = n.PublisherConsentAccess = function () {
        c.call(this, new f, {
            customPurposeConsents: []
        })
    };
    _.prototype = Object.create(c.prototype), _.prototype.constructor = _, _.prototype.setStandardPurposeConsent = function (e, n) {
        this._setPurposeConsent(e, n, "standardPurposesAllowed")
    }, _.prototype.getStandardPurposeConsent = function (e) {
        return this._getPurposeConsent(e, "standardPurposesAllowed")
    }, _.prototype.getNumberCustomPurposes = function () {
        return this.fields.numberCustomPurposes
    }, _.prototype.setNumberCustomPurposes = function (e) {
        this.fields.numberCustomPurposes = e
    }, _.prototype.setCustomPurposeConsent = function (e, n) {
        this.fields.customPurposeConsents[n] = !!e
    }, _.prototype.getCustomPurposeConsent = function (e) {
        return !!this.fields.customPurposeConsents[e]
    }
}, function (e, n, t) {
    "use strict";
    (function (e) {
        ! function (e) {
            e.exports.is_uri = t, e.exports.is_http_uri = i, e.exports.is_https_uri = o, e.exports.is_web_uri = r, e.exports.isUri = t, e.exports.isHttpUri = i, e.exports.isHttpsUri = o, e.exports.isWebUri = r;
            var n = function (e) {
                return e.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/)
            };

            function t(e) {
                if (e && !/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(e) && !/%[^0-9a-f]/i.test(e) && !/%[0-9a-f](:?[^0-9a-f]|$)/i.test(e)) {
                    var t, i, o, r, s, a = "",
                        u = "";
                    if (a = (t = n(e))[1], i = t[2], o = t[3], r = t[4], s = t[5], a && a.length && o.length >= 0) {
                        if (i && i.length) {
                            if (0 !== o.length && !/^\//.test(o)) return
                        } else if (/^\/\//.test(o)) return;
                        if (/^[a-z][a-z0-9\+\-\.]*$/.test(a.toLowerCase())) return u += a + ":", i && i.length && (u += "//" + i), u += o, r && r.length && (u += "?" + r), s && s.length && (u += "#" + s), u
                    }
                }
            }

            function i(e, i) {
                if (t(e)) {
                    var o, r, s, a, u = "",
                        l = "",
                        c = "",
                        d = "";
                    if (u = (o = n(e))[1], l = o[2], r = o[3], s = o[4], a = o[5], u) {
                        if (i) {
                            if ("https" != u.toLowerCase()) return
                        } else if ("http" != u.toLowerCase()) return;
                        if (l) return /:(\d+)$/.test(l) && (c = l.match(/:(\d+)$/)[0], l = l.replace(/:\d+$/, "")), d += u + ":", d += "//" + l, c && (d += c), d += r, s && s.length && (d += "?" + s), a && a.length && (d += "#" + a), d
                    }
                }
            }

            function o(e) {
                return i(e, !0)
            }

            function r(e) {
                return i(e) || o(e)
            }
        }(e)
    }).call(n, t(6)(e))
}, function (e, n, t) {
    "use strict";
    e.exports = function (e) {
        return e.webpackPolyfill || (e.deprecate = function () { }, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = {
        isUserInEU: true,
        FREE_GEO_IP: "http://freegeoip.net/json/",
        EU_COUNTRIES: ["AT", "BE", "BG", "CH", "CY", "CZ", "DK", "DE", "EE", "ES", "FI", "FO", "FR", "GB", "GR", "HU", "HR", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PO", "PT", "RO", "SE", "SI", "SK"],
        setUserInEU: function (e) {
            this.isUserInEU = e
        },
        fetchIsUserInEU: function (e) {
            var n, t = this,
                i = function (e) {
                    for (var n = 0; n < t.EU_COUNTRIES.length; n++)
                        if (t.EU_COUNTRIES[n] === e) return !0;
                    return !1
                };
            window.XMLHttpRequest ? ((n = new XMLHttpRequest).onreadystatechange = function () {
                if (4 === n.readyState && 200 === n.status) {
                    var t = JSON.parse(n.response);
                    this.isUserInEU = i(t.country_code), e(this.isUserInEU)
                }
            }, n.open("GET", this.FREE_GEO_IP, !1), n.send()) : ((n = new window.XDomainRequest).open("GET", this.FREE_GEO_IP), n.onload = function () {
                var t = JSON.parse(n.responseText);
                this.isUserInEU = i(t.country_code), e(this.isUserInEU)
            }, setTimeout(function () {
                n.send()
            }, 0))
        },
        checkUserIsInEUCallbacks: new (t(1).CallbackArray),
        checkUserIsInEU: function (e) {
            null == this.isUserInEU ? (this.checkUserIsInEUCallbacks.push(e), 1 == this.checkUserIsInEUCallbacks.size() && this.fetchIsUserInEU(function (e) {
                i.checkUserIsInEUCallbacks.call(e)
            })) : "function" == typeof e && e(this.isUserInEU)
        }
    };
    n.default = i
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = t(1),
        o = l(t(2)),
        r = l(t(3)),
        s = t(4),
        a = t(0),
        u = l(t(14));

    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var c = {
        cachedVendorLists: {},
        cachedVendorIdMap: {},
        cachedPublisherVendorList: void 0,
        vendorListCallbacks: {},
        vendorListResponseHandler: function (e, n, t, i) {
            try {
                if (4 === e.readyState) {
                    if (200 !== e.status) throw "cannot fetch the vendor list";
                    t(e.response ? "string" == typeof e.response ? JSON.parse(e.response) : e.response : JSON.parse(e.responseText))
                }
            } catch (e) {
                i(n)
            }
        },
        mergeVendorList: function (e) {
            for (var n = c.cachedPublisherVendorList.vendors, t = c.getVendorIdMap(e), i = [], o = 0; o < n.length; o++) {
                var r = t[n[o].id.toString()];
                i.push(r)
            }
            return i
        },
        getVendorIdMap: function (e) {
            if (c.cachedVendorIdMap[e.vendorListVersion]) return c.cachedVendorIdMap[e.vendorListVersion];
            for (var n, t = {}, i = e.vendors, o = 0; o < i.length; o++) {
                var r = i[o].id;
                (void 0 === n || r > n) && (n = r), t[r] = i[o]
            }
            return t.max = n, c.cachedVendorIdMap[e.vendorListVersion] = t, t
        },
        retrieveVendorList: function (e, n, t) {
            if (this.cachedVendorLists[n]) t(this.cachedVendorLists[n], !0);
            else if (this.vendorListCallbacks[n] && this.vendorListCallbacks[n].size() > 0) this.vendorListCallbacks[n].push(t);
            else {
                this.vendorListCallbacks[n] = new i.CallbackArray, this.vendorListCallbacks[n].push(t);
                var o = e.replace("{version}", "LATEST" === n ? "" : "v-" + n + "/");
                c.fetchGlobalVendorList(o, n)
            }
        },
        fetchGlobalVendorList: function (e, n) {
            (0, i.getJson)({
                url: e
            }, function (e) {
                c.vendorListResponseHandler(e, n, function (e) {
                    e.vendors = c.sortVendorList(e.vendors);
                    var t = c.getVendorIdMap(e);
                    c.cachedVendorIdMap[n] = t, c.cachedVendorLists[n] = e, u.default.setPurposeList(a.DEFAULT_LANGUAGE, {
                        purposes: e.purposes,
                        features: e.features
                    }), "" !== o.default.publisherVendorListUrl ? c.fetchPublisherVendorList(n) : c.vendorListCallbacks[n].call(c.cachedVendorLists[n], !0)
                }, function (n) {
                    c.vendorListCallbacks[n].call({
                        status: "Exception caught when parsing & handling global vendor list." + e.responseURL
                    }, !1)
                })
            })
        },
        fetchPublisherVendorList: function (e) {
            if (void 0 === c.cachedPublisherVendorList) (0, i.getJson)({
                url: o.default.publisherVendorListUrl
            }, function (n) {
                c.vendorListResponseHandler(n, e, function (n) {
                    c.cachedPublisherVendorList = n;
                    var t = c.mergeVendorList(c.cachedVendorLists[e]);
                    c.cachedVendorLists[e].vendors = c.sortVendorList(t), c.vendorListCallbacks[e].call(c.cachedVendorLists[e], !0)
                }, function (n) {
                    c.vendorListCallbacks[n].call(c.cachedVendorLists[e], !0)
                })
            });
            else {
                var n = c.mergeVendorList(c.cachedVendorLists[e]);
                c.cachedVendorLists[e].vendors = c.sortVendorList(n), c.vendorListCallbacks[e].call(c.cachedVendorLists[e], !0)
            }
        },
        getVendorList: function (e, n) {
            null === e || void 0 === e ? r.default.fetchVendorConsentCookie(function (e) {
                var t = "LATEST";
                if (e && "found" === e.status) {
                    var i = new s.VendorConsentAccess;
                    i.setAll(e.value) && (t = i.getVendorListVersion(), c.isBetaVendorListVersion(i) && (t = "LATEST"))
                }
                c.retrieveVendorList("https://d2lhpso9w1g8dk.cloudfront.net/web/js/cmp/vendorlist.json", t, n)
            }) : "number" == typeof e || "LATEST" === e ? c.retrieveVendorList("https://d2lhpso9w1g8dk.cloudfront.net/web/js/cmp/vendorlist.json", e, n) : n({
                error: "Requesting invalid version: " + e
            }, !1)
        },
        checkForNewVendorList: function (e, n) {
            var t = !1;
            c.getVendorList("LATEST", function (i) {
                "error" !== i.status && i.vendorListVersion > e && (t = !0), "function" == typeof n && n(t)
            })
        },
        shouldUpdateVendorList: function (e) {
            return Date.now() - e > o.default.vendorListUpdateFreq * i.MILLISEC_DAY
        },
        isBetaVendorListVersion: function (e) {
            return e.getMaxVendorId() == a.BETA_MAX_VENDOR_ID
        },
        sortVendorList: function (e) {
            return e.sort(function (e, n) {
                var t = e.name.toLowerCase(),
                    i = n.name.toLowerCase();
                return t < i ? -1 : t > i ? 1 : 0
            }), e
        }
    };
    n.default = c
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.TRANSLATIONS = n.getTranslationOrDefault = n.QC_SUPPORTED_LANGUAGES = n.IAB_SUPPORTED_LANGUAGES = void 0;
    var i = t(0),
        o = (n.IAB_SUPPORTED_LANGUAGES = ["bg", "cs", "da", "de", "el", "en", "es", "et", "fi", "fr", "ga", "hr", "hu", "it", "lt", "lv", "mt", "nl", "pl", "pt", "ro", "sk", "sl", "sv"], n.QC_SUPPORTED_LANGUAGES = ["en", "fr", "de", "it", "es", "nl", "ru", "ar", "fa"], n.getTranslationOrDefault = function (e, n) {
            return (o[e] || o[i.DEFAULT_LANGUAGE])[n]
        }, n.TRANSLATIONS = {
            en: {
                INIT_SCREEN_TITLE_TEXT: "We value your privacy",
                INIT_SCREEN_BODY_TEXT: {
                    1: "We and our partners use technology such as cookies on our site to personalise content and ads, provide social media features, and analyse our traffic. Click below to consent to the use of this technology across the web. You can change your mind and change your consent choices at anytime by returning to this site.",
                    2: "We and our partners process your personal data using technology such as cookies in order to serve advertising, analyse our traffic and deliver customised experiences for you. You have choice in who uses your data and for what purposes and after setting your preferences may come back anytime to make changes.",
                    3: "The quality content and information we provide to you depends on the revenue we generate from advertising. We and our partners use your personal data in order to serve personalised advertising, measure activity on the site and deliver personalised features and content to you. Click below to consent to the use of your data. You can revisit your choices at any time."
                },
                INIT_SCREEN_REJECT_BUTTON_TEXT: "I do not accept",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "I accept",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "Show Purposes",
                PURPOSE_SCREEN_TITLE_TEXT: "We value your privacy",
                PURPOSE_SCREEN_BODY_TEXT: "You can set your consent preferences and determine how you want your data to be used based on the purposes below. You may set your preferences for us independently from those of third-party partners. Each purpose has a description so that you know how we and partners use your data.",
                PURPOSE_SCREEN_ENABLE_ALL_BUTTON_TEXT: "Enable all purposes",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "See full vendor list",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "Cancel",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Save & Exit",
                VENDOR_SCREEN_TITLE_TEXT: "We value your privacy",
                VENDOR_SCREEN_BODY_TEXT: "You can set consent preferences for each individual third-party company below. Expand each company list item to see what purposes they use data for to help make your choices. In some cases, companies may disclose that they use your data without asking for your consent, based on their legitimate interests. You can click on their privacy policies for more information and to opt out.",
                VENDOR_SCREEN_REJECT_ALL_BUTTON_TEXT: "Reject all",
                VENDOR_SCREEN_ACCEPT_ALL_BUTTON_TEXT: "Accept all",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "Back to purposes",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "Cancel",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Save & Exit"
            },
            fr: {
                INIT_SCREEN_TITLE_TEXT: "Le respect de votre vie privée est notre priorité",
                INIT_SCREEN_BODY_TEXT: {
                    1: "Nos partenaires et nous-mêmes utilisons différentes technologies, telles que les cookies, pour personnaliser les contenus et les publicités, proposer des fonctionnalités sur les réseaux sociaux et analyser le trafic. Merci de cliquer sur le bouton ci-dessous pour donner votre accord. Vous pouvez changer d’avis et modifier vos choix à tout moment.",
                    2: "Nos partenaires et nous-mêmes traitons vos données personnelles afin de vous montrer de la publicité, comprendre notre audience et offrir une expérience utilisateur personnalisée. Vous pouvez choisir qui utilise vos données personnelles et dans quel but. Vous pouvez également faire le choix à tout moment de modifier vos réglages en matière de cookies.",
                    3: "La qualité du contenu et les informations que nous vous apportons dépend du revenue généré par la publicité. Nos partenaires et nous-mêmes recueillons et traitons vos données personnelles afin de proposer de la publicité personnalisée, analyser l’activité sur le site et offrir des fonctionnalités ainsi que du contenu personnalisé. Cliquez ci-dessous pour accepter l’utilisation des données. Vous pouvez faire le choix à tout moment de modifier vos réglages en matière de cookies."
                },
                INIT_SCREEN_REJECT_BUTTON_TEXT: "Je refuse",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "J'accepte",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "Afficher toutes les utilisations prévues",
                PURPOSE_SCREEN_TITLE_TEXT: "Le respect de votre vie privée est notre priorité",
                PURPOSE_SCREEN_BODY_TEXT: "Vous pouvez configurer vos réglages et choisir comment vous souhaitez que vos données personnelles soient utilisée en fonction des objectifs ci-dessous. Vous pouvez configurer les réglages de manière indépendante pour chaque partenaire. Vous trouverez une description de chacun des objectifs sur la façon dont nos partenaires et nous-mêmes utilisons vos données personnelles.",
                PURPOSE_SCREEN_ENABLE_ALL_BUTTON_TEXT: "Consentement à toutes les utilisations prévues",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "Afficher la liste complète des partenaires",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "Annuler",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Enregistrer et quitter",
                VENDOR_SCREEN_TITLE_TEXT: "Le respect de votre vie privée est notre priorité",
                VENDOR_SCREEN_BODY_TEXT: "Vous pouvez configurer vos réglages indépendamment pour chaque partenaire listé ci-dessous. Afin de faciliter votre décision, vous pouvez développer la liste de chaque entreprise pour voir à quelles fins il utilise les données. Dans certains cas, les entreprises peuvent révéler qu'elles utilisent vos données sans votre consentement, en fonction de leurs intérêts légitimes. Vous pouvez cliquer sur leurs politiques de confidentialité pour obtenir plus d'informations et pour vous désinscrire.",
                VENDOR_SCREEN_REJECT_ALL_BUTTON_TEXT: "Tout Refuser",
                VENDOR_SCREEN_ACCEPT_ALL_BUTTON_TEXT: "Tout Accepter",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "Revenir aux Objectifs",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "Annuler",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Enregistrer et quitter"
            },
            de: {
                INIT_SCREEN_TITLE_TEXT: "Wir respektieren Ihre Privatsphäre",
                INIT_SCREEN_BODY_TEXT: {
                    1: "Wir und unsere Partner nutzen auf unserer Website Technologien wie beispielsweise Cookies, um Inhalte und Werbung zu personalisieren, Social-Media-Funktionen anzubieten und den Website-Traffic zu analysieren. Durch einen Klick auf die untenstehende Schaltfläche stimmen Sie dem Einsatz dieser Technologie im gesamten Internet zu. Sie können diese Einwilligung jederzeit überarbeiten oder zurücknehmen, indem Sie auf diese Website zurückkehren.",
                    2: "Wir und unsere Partner verarbeiten Ihre persönlichen Daten auf der Basis von Technologien wie Cookies, um Ihnen Werbung auszuspielen, den Traffic zu analysieren und personalisierte Inhalte anzuzeigen. Sie haben die Wahl, welche Partner Ihre Daten für welche Zwecke nutzen dürfen. Nach der Auswahl Ihrer Präferenzen können Sie diese jederzeit bearbeiten, indem Sie auf diese Website zurückkehren.",
                    3: "Die Inhalte und Informationen, die wir Ihnen zur Verfügung stellen, werden durch die Einnahmen  finanziert, die wir durch Werbung generieren. Wir und unsere Partner nutzen Ihre persönlichen Daten, um Ihnen personalisierte Werbung anzuzeigen, Aktivitäten auf unserer Website zu analysieren und Ihnen personalisierte Funktionalitäten sowie Inhalte anzubieten. Durch einen Klick auf die untenstehende Schaltfläche können Sie der Nutzung Ihrer Daten zustimmen. Sie haben jederzeit die Möglichkeit, Ihre Entscheidung zu ändern."
                },
                INIT_SCREEN_REJECT_BUTTON_TEXT: "Ablehnen",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "Annehmen",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "Nutzungszwecke anzeigen",
                PURPOSE_SCREEN_TITLE_TEXT: "Wir respektieren Ihre Privatsphäre",
                PURPOSE_SCREEN_BODY_TEXT: "Sie können Ihre bevorzugten Einwilligungseinstellungen festlegen und definieren, für welche der unten aufgeführen Zwecke Ihre Daten genutzt werden dürfen. Sie können die Einstellungen für uns unabhängig von den Einstellungen für die Drittleister festlegen. Jeder Nutzungszweck ist gesondert beschrieben, damit Sie sich ein Bild machen können, wie wir und unsere Partner Ihre Daten nutzen.",
                PURPOSE_SCREEN_ENABLE_ALL_BUTTON_TEXT: "Alle Nutzungszwecke erlauben",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "Komplette Partnerliste ansehen",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "Abbrechen",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Speichern & verlassen",
                VENDOR_SCREEN_TITLE_TEXT: "Wir respektieren Ihre Privatsphäre",
                VENDOR_SCREEN_BODY_TEXT: "Sie können Ihre bevorzugten Einwilligungseinstellungen für jeden aufgeführten Partner individuell festlegen. Klappen Sie hierzu die Informationen der einzelnen Partnner aus, um Ihre Auswahl zu treffen und zu sehen, welche Daten diese Partner nutzen. In manchen Fällen können Unternehmen begründet durch ein berechtigtes Interesse angeben, Ihre persönlichen Daten zu nutzen, ohne Sie hierfür nach einer Einwilligung zu fragen. Sie können auf die Datenschutzrichtlinien der jeweiligen Unternehmen klicken, um weitere Informationen zu erhalten und ein Opt-Out zu aktivieren.",
                VENDOR_SCREEN_REJECT_ALL_BUTTON_TEXT: "Alle ablehnen",
                VENDOR_SCREEN_ACCEPT_ALL_BUTTON_TEXT: "Alle akzeptieren",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "Zurück zu Nutzungszwecken",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "Abbrechen",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Speichern & verlassen"
            },
            it: {
                INIT_SCREEN_TITLE_TEXT: "Il rispetto della tua privacy è la nostra priorità",
                INIT_SCREEN_BODY_TEXT: {
                    1: "Questo sito utilizza cookie, anche di terze parti, per inviarti pubblicità e servizi in linea con le tue preferenze. Se vuoi saperne di più o negare il consenso a tutti o ad alcuni cookie clicca qui. Chiudendo questo banner, scorrendo questa pagina o cliccando qualunque suo elemento acconsenti all’uso dei cookie.",
                    2: "Noi e i nostri partner processiamo i tuoi dati personali utilizzando tecnologie, come i cookie, per erogare pubblicità, analizzare il nostro traffico e fornire all'utente un'esperienza di navigazione personalizzata. Hai la possibilità di scegliere chi utilizza i tuoi dati e per quali scopi, dopo aver impostato le tue preferenze puoi tornare in qualsiasi momento per apportare modifiche.",
                    3: "La qualità del contenuto e delle informazioni che forniamo dipendono dai ricavi generati dalla pubblicità. Noi e i nostri partner raccogliamo e processiamo i tuoi dati personali per erogare pubblicità personalizzata, analizzare l'attività sul nostro sito e fornire funzionalità e contenuti personalizzati. Facendo clic di seguito si acconsente all'utilizzo dei tuoi dati. Puoi modificare le tue scelte in qualsiasi momento."
                },
                INIT_SCREEN_REJECT_BUTTON_TEXT: "Non Accetto",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "Accetto",
                //INIT_SCREEN_PURPOSE_LINK_TEXT: "Mostra tutte le finalità di utilizzo",
				INIT_SCREEN_PURPOSE_LINK_TEXT: "",
                PURPOSE_SCREEN_TITLE_TEXT: "Il rispetto della tua privacy è la nostra priorità",
                PURPOSE_SCREEN_BODY_TEXT: "È possibile impostare le tue preferenze sul consenso e scegliere come i tuoi dati vengono utilizzati in relazione alle diverse finalità riportate di seguito. Inoltre, potrai configurare le impostazioni per il nostro sito indipendentemente da quelle per i nostri partner. Troverai una descrizione per ciasuna delle finalità di utilizzo, in modo che tu sia a conoscenza di come noi e i nostri partner utilizziamo i tuoi dati.",
                PURPOSE_SCREEN_ENABLE_ALL_BUTTON_TEXT: "Abilita consenso per tutti gli usi previsti",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "Visualizza la lista completa dei partner",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "Annullare",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Salva ed Esci",
                VENDOR_SCREEN_TITLE_TEXT: "Il rispetto della tua privacy è la nostra priorità",
                VENDOR_SCREEN_BODY_TEXT: "È possibile impostare le preferenze sul consenso per ogni singola società partner riportata di seguito. Per facilitare la tua decisione, puoi espandere l'elenco di ciascun partner e visualizzare per quali finalità utilizza i dati. In alcuni casi, le società possono affermare che utilizzano i tuoi dati senza chiedere il consenso, in quanto esiste un legittimo interesse. Puoi fare clic sulle loro politiche sulla privacy per ottenere maggiori informazioni e per revocare il consenso.",
                VENDOR_SCREEN_REJECT_ALL_BUTTON_TEXT: "Rifiutare tutto",
                VENDOR_SCREEN_ACCEPT_ALL_BUTTON_TEXT: "Accettare tutto",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "Ritorna alle finalità di utilizzo",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "Annullare",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Salva ed Esci"
            },
            es: {
                INIT_SCREEN_TITLE_TEXT: "Tu privacidad es importante para nosotros",
                INIT_SCREEN_BODY_TEXT: {
                    1: "Tanto nuestros partners como nosotros utilizamos cookies en nuestro sitio web para personalizar contenido y publicidad, proporcionar funcionalidades a las redes sociales, o analizar nuestro tráfico. Haciendo click consientes el uso de esta tecnologia en nuestra web. Puedes cambiar de opinion y personalizar tu consentimiento siempre que quieras volviendo a esta web",
                    2: "Tanto nuestros partners como nosotros procesamos tu información personal como las cookies para hacer publicidad, analizar nuestro tráfico y proporcionar experiencias personalizadas en tu navegación. Tu tienes el control sobre quién utiliza tu información personal y para que propósitos. Una vez has configurado tus preferencias puedes volver siempre que quieras para realizar cualquier cambio.",
                    3: "El contenido de calidad e información que proporcionamos depende de los ingresos que generamos por publicidad. Tanto nuestros partners como nosotros utilizamos tu información personal (cookies) con el propósito de server publicidad personalizada, medir la actividad del sitio web y proporcionar contenido y funcionalidades personalizadas para ti. Haz click a continuación para aceptar el uso de tu información personal (cookies). Puedes revisar este consentimiento siempre que quieras."
                },
                INIT_SCREEN_REJECT_BUTTON_TEXT: "No acepto",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "Acepto",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "Más información",
                PURPOSE_SCREEN_TITLE_TEXT: "Tu privacidad es importante para nosotros",
                PURPOSE_SCREEN_BODY_TEXT: "Puedes configurar tus preferencias y elegir como quieres que tus datos sean utilizados para los siguientes propósitos. Puedes elegir configurar tus preferencias solo con nosotros independientemente del resto de nuestros partners. Cada propósito tiene una descripción para que puedas saber como nosotros y nuestros partners utilizamos tus datos",
                PURPOSE_SCREEN_ENABLE_ALL_BUTTON_TEXT: "Habilitar todo",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "Ver lista completa de partners",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "Cancelar",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Guardar y salir",
                VENDOR_SCREEN_TITLE_TEXT: "Tu privacidad es importante para nosotros",
                VENDOR_SCREEN_BODY_TEXT: "Puedes dar tu consentimiento de manera individual a cada partner. Ver la lista de todos los propósitos para los cuales utilizan tus datos para tener más información. En algunos casos, las empresas pueden revelar que usan tus datos sin pedir tu consentimiento, en función de intereses legítimos. Puedes hacer click en su política de privacidad para obtener más información al respecto o para rechazarlo.",
                VENDOR_SCREEN_REJECT_ALL_BUTTON_TEXT: "Rechazar todo",
                VENDOR_SCREEN_ACCEPT_ALL_BUTTON_TEXT: "Aceptar todo",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "Volver a propósitos",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "Cancelar",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Guardar y salir"
            },
            nl: {
                INIT_SCREEN_TITLE_TEXT: "We respecteren uw privacy",
                INIT_SCREEN_BODY_TEXT: {
                    1: "Wij en onze partners gebruiken technologie op onze site, zoals cookies om inhoud en advertenties te personaliseren, social media functies te bieden en ons websiteverkeer te analyseren. Klik hieronder om akkoord te gaan met het gebruik van deze technologie op het internet. U kunt op elk moment van gedachten veranderen en uw instemmingskeuzes wijzigen door terug te keren naar deze site.",
                    2: "Wij en onze partners verwerken uw persoonlijke gegevens met behulp van technologie zoals cookies om advertenties weer te geven, ons verkeer te analyseren en op maat gemaakte ervaringen voor u te leveren. U hebt de keuze wie uw gegevens gebruikt en voor welke doeleinden en na het instellen van uw voorkeuren kunt u op elk moment terugkomen om wijzigingen aan te brengen.",
                    3: "De kwaliteit van de inhoud en informatie die we u verstrekken, is afhankelijk van de inkomsten die we genereren uit advertenties. Wij en onze partners gebruiken uw persoonlijke gegevens om gepersonaliseerde reclame te bieden, activiteiten op de site te meten en gepersonaliseerde functies en inhoud aan u te leveren. Klik hieronder om toestemming te geven voor het gebruik van uw gegevens. U kunt uw keuzes op elk gewenst moment opnieuw bekijken."
                },
                INIT_SCREEN_REJECT_BUTTON_TEXT: "Ik accepteer niet",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "Ik accepteer",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "Meer informatie",
                PURPOSE_SCREEN_TITLE_TEXT: "Wij respecteren uw privacy",
                PURPOSE_SCREEN_BODY_TEXT: "U kunt uw toestemmingsvoorkeuren instellen en aangeven hoe u wilt dat uw gegevens worden gebruikt voor de onderstaande doeleinden. U kunt uw voorkeuren voor ons onafhankelijk van die externe partners instellen. Elk doel heeft een beschrijving zodat u weet hoe wij en partners uw gegevens gebruiken.",
                PURPOSE_SCREEN_ENABLE_ALL_BUTTON_TEXT: "Alles toestaan",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "Zie volledige partnerlijst",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "Annuleer",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Opslaan en afsluiten",
                VENDOR_SCREEN_TITLE_TEXT: "Wij respecteren uw privacy",
                VENDOR_SCREEN_BODY_TEXT: "U kunt hieronder toestemming geven afzonderlijk voor elke externe partner . Breid uw bedrijfslijst uit om te zien welke mogelijkheden u gebruikt om uw keuzes te maken. In sommige gevallen kunnen bedrijven aangeven dat ze uw gegevens gebruiken zonder uw toestemming, op basis van hun legitieme belangen. U kunt op hun privacybeleid klikken voor meer informatie en om u af te melden.",
                VENDOR_SCREEN_REJECT_ALL_BUTTON_TEXT: "Alles afwijzen",
                VENDOR_SCREEN_ACCEPT_ALL_BUTTON_TEXT: "Accepteer alles",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "Terug naar doeleinden",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "Annuleer",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Opslaan en afsluiten"
            },
            ru: {
                INIT_SCREEN_TITLE_TEXT: "Мы с большим уважением относимся к Bашей конфиденциальности",
                INIT_SCREEN_BODY_TEXT: {
                    1: "Мы и наши партнёры исполузем онлайн технологии, такие как куки, для персонализации контента и рекламы, предоставления функций социальных сетей и анализа нашего трафика. Нажмите для согласия на использование этих онлайн-технологий. Вы сможете изменить свой выбор и отказаться от согласия в любой момент, вернувшись на этот сайт.",
                    2: "Мы и наши партнеры обрабатываем ваши персональные данные с использованием таких технологий, как куки, чтобы добавлять в контент рекламу, анализировать трафик и предоставлять Bам более персонифицированный подход. Вы можете выбрать, кто и для каких целей сможет использовать ваши персональные данные, и после настройки Bаших предпочтений Вы сможете вернуться сюда в любой момент, если решите внести изменения.",
                    3: "Качественный контент и информация, которые мы Bам предоставляем, зависят от дохода, который мы получаем от онлайн-рекламы. Мы и наши партнеры используем ваши личные данные, чтобы предлагать более персонализированную рекламу, измерять активность пользователей на сайте и предоставлять Bам специальные функции и контент. Нажмите, чтобы согласиться на использование Bаших личных данных. Вы можете изменить свой выбор в любой момент."
                },
                INIT_SCREEN_REJECT_BUTTON_TEXT: "Я не даю согласие",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "Я даю согласие",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "Объяснить подробнее",
                PURPOSE_SCREEN_TITLE_TEXT: "Мы с большим уважением относимся к Bашей конфиденциальности",
                PURPOSE_SCREEN_BODY_TEXT: "Вы можете установить предпочтения и определить, на какое использование Bаших данных Вы согласны. Вы также можете указать свои предпочтения для нашего сайта независимо от сайтов наших партнеров. Каждая алгоритм имеет своё описание, объясняющее, как мы и наши партнеры используем ваши данные.",
                PURPOSE_SCREEN_ENABLE_ALL_BUTTON_TEXT: "Согласие на любое использование данных",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "Полный список партнёров",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "Отменить",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Сохранить и выйти",
                VENDOR_SCREEN_TITLE_TEXT: "Мы с большим уважением относимся к Bашей конфиденциальности",
                VENDOR_SCREEN_BODY_TEXT: "Ниже Вы можете настроить ваши предпочтения для каждой отдельной компании. Разверните каждый элемент списка компаний, чтобы узнать, для каких целей они используют данные, и затем сделать ваш выбор. В некоторых случаях компании указать, что ваши данные используются без вашего согласия в рамках законных интересов. Вы можете кликнуть на раздел политики конфиденциальности этих компаний для получения дополнительной информации и при желании отказаться.",
                VENDOR_SCREEN_REJECT_ALL_BUTTON_TEXT: "Отказаться от всего",
                VENDOR_SCREEN_ACCEPT_ALL_BUTTON_TEXT: "Согласиться со всем",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "Вернуться к алгоритму",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "Отменить",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Сохранить и выйти"
            },
            ar: {
                INIT_SCREEN_TITLE_TEXT: "خصوصيتك تهمنا",
                INIT_SCREEN_BODY_TEXT: {
                    1: "نستخدم نحن وشركاؤنا ملفات التعريف على موقعنا بهدف تخصيص المحتوى والإعلانات المبوبة. كما يمكننا عن طريقها تزويد الصفحة بأيقونات وسائل التواصل الاجتماعي المختلفة. باستخدام هذه الخاصية يمكننا السيطرة على انتقاء زوار الصفحة.أنقر أدناه للموافقة على استخدام هذه التقنية عبر الويب يمكنك تغيير قرارك عبر تغيير خيارات الموافقة الموجودة على الموقع في جميع الأوقات.",
                    2: "نحن وشركاؤنا نعالج البيانات الشخصية عن طريق استخدام التكنولوجيا المعلوماتية للتعرف على ما يحلوا لزوار الصفحة مما يساعد الفريق الصحفي على اتخاذ قراراته التحريرية. ولديك مطلق الحرية في اختيار من يستخدم بياناتك ولأي هدف. كما يمكنك العودة لتغيير بياناتك الشخصية على الصفحة في أي وقت أردت",
                    3: "تعتمد جودة المعلومات التي نقدمها لك على الأرباح التي نحققها من الإعلانات. نحن وشركاؤنا نستخدم بياناتك الشخصية لتزويدك بالإعلانات التي تهمك ومعرفة الموضوعات التي تهمك على موقعنا ونسبة نشاطك. إذا وافقت على استخدام بياناتك الشخصية للأهداف السابقة فقط أنقر أدناه، يمكنك تغيير اختيارك في أي وقت."
                },
                INIT_SCREEN_REJECT_BUTTON_TEXT: "غير موافق",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "موافق",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "اظهار الاستخدامات",
                PURPOSE_SCREEN_TITLE_TEXT: "خصوصيتك تهمنا",
                PURPOSE_SCREEN_BODY_TEXT: "يمكنك تحديد كيفية استخدام بياناتك الشخصية وفقا للأدوات الموضحة أدناه. يمكنك أيضا اختيار قائمتك المفضلة بشكل مستقل بعيدا عن شركاء الطرف الثالث كل غرض له تعريف مفصل لكي تتعرف على كيفية استخدامنا لبياناتك الشخصية",
                PURPOSE_SCREEN_ENABLE_ALL_BUTTON_TEXT: "تفعيل الاستخدامات",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "تعرف على قائمة المشاركين",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "حذف",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "حفظ وخروج",
                VENDOR_SCREEN_TITLE_TEXT: "خصوصيتك تهمنا",
                VENDOR_SCREEN_BODY_TEXT: "يمكنك التعرف على خواص كل شركة على حدا فيما يلي. هناك قائمة خاصة بكل شركة لمعرفة كيفية استخدامهم لبياناتك الشخصية. في بعض الحالات تتعرف الشركات على بياناتك الخاصة دون استئذانك سعيا لتقديم ما هو أفضل. أنقر هنا للتعرف على سياسات الخصوصية والمعلومات لاختيار ما يناسبك.",
                VENDOR_SCREEN_REJECT_ALL_BUTTON_TEXT: "غير موافق على كل ما سبق",
                VENDOR_SCREEN_ACCEPT_ALL_BUTTON_TEXT: "أوافق على كل ما سبق",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "العودة إلى الاستخدامات",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "حذف",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "حفظ وخروج"
            },
            fa: {
                INIT_SCREEN_TITLE_TEXT: "ما به حریم خصوصی شما احترام می‌گذاریم",
                INIT_SCREEN_BODY_TEXT: {
                    1: "ما و شرکایمان از فناوری کوکی برروی سایتمان استفاده می کنیم و به این ترتیب محتوا و تبلیغات متناسب شخصیت شما ارائه خواهد شد. برای اعلام موافقت خود در زیر کلیک می کنید. شما می‌توانید این تنظیمات را هر موقع که خواستید تغییر دهید.",
                    2: "ما و شرکایمان داده‌های شخصی را با استفاده از فناوری کوکی بررسی می کنیم تا از آن برای تبلیغ، تحلیل ترافیک سایت و ارائه بهتر اطلاعات به شما استفاده کنیم. شما امکان تعیین اینکه چه کسی از داده های شما برای چه هدفی استفاده کند را خواهید داشت و می‌توانید این تنظیمات را در آینده تغییر دهید.",
                    3: "کیفیت مطالبی که به شما ارائه می کنیم به درآمدی که از راه تبلیغات کسب می کنیم، بستگی خواهد شد. ما و شرکایمان از داده های شخصی شما برای ارائه تبلیغات متناسب با وضعیت شما و بررسی میزان فعالیت بر روی وبسایت و ارائه محتوای متناسب با حال شما استفاده خواهیم کرد. برای اعلام موافقت خود در زیر کلیک کنید. هر گاه خواستید می‌توانید در انتخاب خود تجدیدنظر کنید."
                },
                INIT_SCREEN_REJECT_BUTTON_TEXT: "قبول نمی کنم",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "قبول می کنم",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "اهداف را نشان دهید",
                PURPOSE_SCREEN_TITLE_TEXT: "ما به حریم خصوصی شما احترام می‌گذاریم",
                PURPOSE_SCREEN_BODY_TEXT: "شما می‌توانید درجه رضایت خود را تنظیم و اعلام کنید. می توانید تعیین کنید چگونه می‌خواهید از داده های شما برای اهداف زیر استفاده شود. می توانید تنظیمات خود را به طور مستقل از شرکای ما اعلام کنید. برای هر هدف تعریفی ارائه شده است تا شما بدانید ما چگونه از داده های شما بهره می گیریم.",
                PURPOSE_SCREEN_ENABLE_ALL_BUTTON_TEXT: "فعال سازی تمام اهداف",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "دیدن فهرست کامل شرکاء",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "لغو",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "ثبت تنظیمات و خروج",
                VENDOR_SCREEN_TITLE_TEXT: "ما به حریم خصوصی شما احترام می‌گذاریم",
                VENDOR_SCREEN_BODY_TEXT: "می توانید ترجیحات خود در زمینه اعلام رضایت برای هر کدام از شرکت ها زیر اعلام کنید. فهرست هر کدام از شرکت ها را باز کنید تا ببینید برای چه هدفی آنها از داده های شما استفاده می کنند. در برخی موارد شرکت‌ها ممکن است استفاده از اطلاعات شما را براساس منافع مشروع خود و بدون کسب رضایت شما افشاء کنند. می‌توانید بر روی سیاست‌های آن‌ها در زمینه حریم خصوصی کلیک کنید تا به اطلاعات بیشتر دست یابید.",
                VENDOR_SCREEN_REJECT_ALL_BUTTON_TEXT: "هیچکدام از موارد را نمی‌پذیرم",
                VENDOR_SCREEN_ACCEPT_ALL_BUTTON_TEXT: "پذیرش کلیه موارد",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "بازگشت به اهداف",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "لغو",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "ثبت تنظیمات و خروج"
            }
        })
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.getConsentData = n.getCurrentVendorConsents = n.getVendorConsents = n.retrieveParsedPublisherConsents = n.getCurrentPublisherConsents = n.getPublisherConsents = n.callbacksWaitingForConsent = n.runConsentUiCallback = n.setConsentUiCallback = n.saveConsents = n.displayConsentUi = n.publisherConsentValues = n.vendorConsentValues = void 0;
    var i = t(2),
        o = p(i),
        r = p(t(3)),
        s = p(t(7)),
        a = p(t(11)),
        u = t(1),
        l = t(0),
        c = t(4),
        d = p(t(8));

    function p(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var E = n.vendorConsentValues = new c.VendorConsentAccess,
        f = n.publisherConsentValues = new c.PublisherConsentAccess,
        _ = (n.displayConsentUi = function (e) {
            if (!(0, u.isUnsupportedBrowser)())
                if (e = e || 1, i.isConfigInitialized)
                    if (window.__cmpui) window.__cmpui("init", e);
                    else {
                        var n = window.innerWidth < 500 ? "popup" : o.default.uiLayout,
                            t = document.createElement("script");
                        t.type = "text/javascript", document.head.insertBefore(t, document.head.childNodes[0]), t.onload = function () {
                            window.__cmpui("init", e)
                        }, t.src = "https://d2lhpso9w1g8dk.cloudfront.net/web/js/cmp/cmpui-banner-fix.js"
                    }
                else console.error("You must initialize the config before displaying the consent ui!")
        }, n.saveConsents = function (e, n) {
            if (!(0, u.isUnsupportedBrowser)()) {
                for (var t = e.vendorList, i = d.default.getVendorIdMap(t), o = e.publisherPurposes, s = o.length, a = 0; a < s; a++) f.setStandardPurposeConsent(e.publisherPurposeConsents[a], o[a].id);
                s && r.default.setPublisherConsentCookie(f.build(), null);
                var l = t.purposes,
                    c = l.length;
                for (a = 0; a < c; a++) E.setPurposeConsent(e.purposeConsents[a], l[a].id);
                var p = t.vendors;
                p.length;
                E.setMaxVendorId(i.max);
                for (var _ = 0; _ < p.length; _++) {
                    var T = p[_].id;
                    E.setVendorConsent(e.vendorConsents[T], T)
                }
                E.setVendorListVersion(t.vendorListVersion), E.setConsentScreen(e.consentPage), r.default.setVendorConsentCookie(E.build(), n)
            }
        }, []),
        T = (n.setConsentUiCallback = function (e) {
            "function" == typeof e && _.push(e)
        }, n.runConsentUiCallback = function (e) {
            for (; _.length > 0;) _.shift()(e)
        }, n.callbacksWaitingForConsent = []),
        g = (n.getPublisherConsents = function (e, n) {
            if (a.default.isInitialized) return g(e, n);
            T.push(["getPublisherConsents", e, n])
        }, n.getCurrentPublisherConsents = function (e, t) {
            C(function (i, o) {
                var r = {},
                    s = o;
                o && "parsed" === i.status && (n.publisherConsentValues = f = i.publisherConsentValues, (0, u.isArray)(e) && e.length > 0 ? (e.forEach(function (e) {
                    r[e] = f.getStandardPurposeConsent(e)
                }), s = !0) : null === e || void 0 === e || (0, u.isArray)(e) && 0 === e.length ? (r = f.getStandardPurposeConsent(), s = !0) : (r = null, s = !1)), (0, u.doCallback)(t, {
                    standardPurposeConsents: r
                }, s)
            })
        }),
        C = n.retrieveParsedPublisherConsents = function (e) {
            o.default.publisherPurposeIds && 0 != o.default.publisherPurposeIds.length ? r.default.fetchPublisherConsentCookie(function (n, t) {
                if (t)
                    if ("notfound" !== n.status) {
                        var i = new c.PublisherConsentAccess;
                        i.setAll(n.value) ? (0, u.doCallback)(e, {
                            status: "parsed",
                            publisherConsentValues: i
                        }, !0) : (0, u.doCallback)(e, {
                            status: "parse_error"
                        }, !1)
                    } else (0, u.doCallback)(e, {
                        status: "notfound"
                    }, !0);
                else (0, u.doCallback)(e, {
                    status: "fetch_error"
                }, !1)
            }) : (0, u.doCallback)(e, {
                status: "notneeded"
            }, !0)
        },
        h = (n.getVendorConsents = function (e, n) {
            v("getVendorConsents", e, n, !0)
        }, n.getCurrentVendorConsents = function (e, n) {
            (0, u.isUnsupportedBrowser)() || v("getCurrentVendorConsents", e, n, !1)
        }),
        N = function (e) {
            return !!(e || o.default && "always" === o.default.displayUi)
        },
        S = function (e, n, t) {
            "function" == typeof e && e({
                metadata: null,
                gdprApplies: N(n),
                hasGlobalConsent: r.default.isGlobalScope,
                purposeConsents: t ? {} : null,
                vendorConsents: t ? {} : null
            }, !0)
        },
        v = function (e, n, t, i) {
            if ("function" == typeof t) {
                var o = !1;
                o = i ? a.default.isInitialized : !!r.default.cookie[l.VENDOR_CONSENT_COOKIE_NAME];
                var c = r.default.cookie[l.VENDOR_CONSENT_COOKIE_NAME];
                o ? s.default.checkUserIsInEU(function (e) {
                    var i = {};
                    if (c && "notfound" !== c.status)
                        if (E.setAll(c.value)) {
                            if (d.default.isBetaVendorListVersion(E) && S(t, e, !0), n)
                                for (s = 0; s < n.length; s++) i[n[s]] = E.getVendorConsent(n[s]);
                            else {
                                var o = E.getVendorConsent(null);
                                if (o)
                                    for (var s = 0; s < o.length; s++) void 0 !== o[s] && (i[s] = !!o[s])
                            }
                            "function" == typeof t && t({
                                metadata: (0, u.isUnsupportedBrowser)() ? null : E.getMetadata(!0),
                                gdprApplies: N(e),
                                hasGlobalConsent: r.default.isGlobalScope,
                                purposeConsents: E.getPurposeConsent(),
                                vendorConsents: i
                            }, !0)
                        } else (0, u.logError)("error fetching consents"), S(t, e, !1);
                    else S(t, e, !0)
                }) : "getVendorConsents" === e ? T.push(["getVendorConsents", n, t]) : "getCurrentVendorConsents" === e && r.default.fetchVendorConsentCookie(function () {
                    h(n, t)
                })
            }
        };
    n.getConsentData = function (e, n) {
        (0, u.isUnsupportedBrowser)() || (null === e || void 0 === e || e == l.CONSENT_STRING_VERSION ? a.default.isInitialized ? s.default.checkUserIsInEU(function (e) {
            try {
                var t = r.default.cookie[l.VENDOR_CONSENT_COOKIE_NAME].value;
                "function" == typeof n && n({
                    gdprApplies: N(e),
                    hasGlobalConsent: r.default.isGlobalScope,
                    consentData: t
                }, !0)
            } catch (t) {
                "function" == typeof n && n({
                    gdprApplies: N(e),
                    hasGlobalConsent: null,
                    consentData: null
                }, !1)
            }
        }) : T.push(["getConsentData", e, n]) : "function" == typeof n && n(null, !1))
    }
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = t(2),
        o = p(i),
        r = p(t(3)),
        s = t(10),
        a = p(t(13)),
        u = p(t(7)),
        l = t(1),
        c = p(t(8)),
        d = t(4);
    t(0);

    function p(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var E = {
        isInitialized: !1,
        initCalled: !1,
        initConsentState: function () {
            (0, s.retrieveParsedPublisherConsents)(function (e, n) {
                n && "notfound" !== e.status ? r.default.fetchVendorConsentCookie(function (e, n) {
                    if (n && "notfound" !== e.status)
                        if ("found" === e.status) {
                            var t = new d.VendorConsentAccess;
                            if (t.setAll(e.value)) {
                                var i = c.default.isBetaVendorListVersion(t),
                                    r = t.getLastUpdated(),
                                    a = function () {
                                        (0, s.getCurrentPublisherConsents)(null, function (e) {
                                            (0, l.isObjectAllFalse)(e.standardPurposeConsents) ? (0, s.getCurrentVendorConsents)(null, function (e) {
                                                (0, l.isObjectAllFalse)(e.purposeConsents) && Date.now() - r > o.default.nonconsentDisplayFrequency * l.MILLISEC_DAY ? (0, s.displayConsentUi)() : (0, s.runConsentUiCallback)({
                                                    reason: "consent-current",
                                                    uiShown: !1
                                                })
                                            }) : (0, s.runConsentUiCallback)({
                                                reason: "consent-current",
                                                uiShown: !1
                                            })
                                        })
                                    };
                                if (c.default.shouldUpdateVendorList(t.getLastUpdated()) || i) {
                                    var u = i ? 0 : t.getVendorListVersion();
                                    c.default.checkForNewVendorList(u, function (e) {
                                        e ? (0, s.displayConsentUi)() : a()
                                    })
                                } else a()
                            } else (0, l.logError)("error parsing cookie"), (0, s.displayConsentUi)()
                        } else (0, l.logError)("Fetch Cookie response is invalid: ", e.status);
                    else (0, s.displayConsentUi)()
                }) : (0, s.displayConsentUi)()
            })
        },
        initConsentStateForIE: function () {
            for (var e = o.default.publisherPurposeIds, n = e.length, t = 0; t < n; t++) s.publisherConsentValues.setStandardPurposeConsent(!0, e[t]);
            for (t = 1; t <= 5; t++) s.vendorConsentValues.setPurposeConsent(!0, t);
            s.vendorConsentValues.setMaxVendorId(300);
            for (t = 1; t <= 300; t++) s.vendorConsentValues.setVendorConsent(!1, t);
            (0, s.runConsentUiCallback)({
                reason: "unsupported-browser",
                uiShown: !1
            })
        },
        init: function (e) {
            if (E.initCalled) console.warn("init has already been called and should only be run one time.");
            else {
                E.initCalled = !0, !e && i.isConfigInitialized || (0, i.initializeConfig)(e);
                var n = function (e) {
                    return function () {
                        r.default.init(o.default, e), (0, s.setConsentUiCallback)(function () {
                            E.isInitialized = !0, (0, l.executePendingCalls)(s.callbacksWaitingForConsent)
                        }), (0, l.isUnsupportedBrowser)() ? (u.default.setUserInEU(!1), E.initConsentStateForIE()) : "always" === o.default.displayUi ? E.initConsentState() : u.default.checkUserIsInEU(function (e) {
                            e ? E.initConsentState() : (0, s.runConsentUiCallback)({
                                reason: "not-EU",
                                uiShown: !1
                            })
                        })
                    }
                };
                a.default.setup(n(!0), n(!1))
            }
        }
    };
    n.default = E
}, , function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    t(1);
    var i = t(0),
        o = {
            setup: function (e, n) {
                var t = !1,
                    o = !1,
                    r = function () {
                        var e = document.getElementById("qc_choice_3pc_frame");
                        try {
                            e && document.body.removeChild(e)
                        } catch (e) { }
                    },
                    s = setTimeout(function () {
                        o || (t = !0, -1 != document.cookie.indexOf(i.THIRD_PARTY_COOKIE_MARK + "=1") ? e() : (document.cookie.indexOf(i.THIRD_PARTY_COOKIE_MARK + "=0"), n()), r())
                    }, i.THIRD_PARTY_COOKIE_CHECK_TIMEOUT),
                    a = function (a) {
                        "string" == typeof a.data && -1 != a.data.indexOf("3PC_check:") && (clearTimeout(s), t || (o = !0, "3PC_check:supported" === a.data ? (document.cookie = i.THIRD_PARTY_COOKIE_MARK + "=1", e()) : "3PC_check:unsupported" === a.data && (document.cookie = i.THIRD_PARTY_COOKIE_MARK + "=0", n()), r()))
                    };
                void 0 == window.addEventListener ? window.attachEvent("onmessage", a) : window.addEventListener("message", a, !1);
                ! function e() {
                    if (document.body) {
                       /* var n = document.createElement("iframe");
                        n.src = "https://static.quantcast.mgr.consensu.org/v3/cmp-3pc-check.html", n.id = "qc_choice_3pc_frame", n.integrity = "sha256-T8dpP8lDEFrer+RTfTh0cxDmLaO3kSco55MPB33xOMU=", n.crossOrigin = "anonymous", document.body.appendChild(n)*/
                    } else setTimeout(e, 10)
                }()
            }
        };
    n.default = o
}, function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var i = t(1),
        o = (t(0), t(9)),
        r = {
            cachedPurposeList: {},
            purposeListCallbacks: {},
            purposeListResponseHandler: function (e, n, t) {
                try {
                    if (4 === e.readyState) {
                        if (200 !== e.status) throw "could fetch the purpose list for language: " + n;
                        var o;
                        o = e.response ? "string" == typeof e.response ? JSON.parse(e.response) : e.response : JSON.parse(e.responseText), (0, i.doCallback)(t, o, !0)
                    }
                } catch (e) {
                    (0, i.doCallback)(t, null, !1)
                }
            },
            fetchPurposeList: function (e, n) {
                if (o.IAB_SUPPORTED_LANGUAGES.includes(e))
                    if (r.cachedPurposeList[e]) (0, i.doCallback)(n, r.cachedPurposeList[e], !0);
                    else if (r.purposeListCallbacks[e] && r.purposeListCallbacks[e].size() > 0) r.purposeListCallbacks[e].push(n);
                    else {
                        r.purposeListCallbacks[e] = new i.CallbackArray, r.purposeListCallbacks[e].push(n);
                        var t = "https://d2lhpso9w1g8dk.cloudfront.net/web/js/cmp/purposes-it.json".replace("{language}", e.toLowerCase());
                        (0, i.getJson)({
                            url: t
                        }, function (n) {
                            r.purposeListResponseHandler(n, e, function (n, t) {
                                t && (r.cachedPurposeList[e] = n), r.purposeListCallbacks[e].call(n, t)
                            })
                        })
                    } else (0, i.doCallback)(n, {
                        error: "Does not support the requested Language: " + e
                    }, !1)
            },
            setPurposeList: function (e, n) {
                r.cachedPurposeList[e] = n
            }
        };
    n.default = r
}, , , , , function (e, n, t) {
    "use strict";
    var i = t(2),
        o = function (e) {
            if (e && e.__esModule) return e;
            var n = {};
            if (null != e)
                for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]);
            return n.default = e, n
        }(t(10)),
        r = (l(t(3)), l(t(11))),
        s = (l(t(20)), l(t(8))),
        a = t(1),
        u = l(t(14));

    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var c = [];
    window.__cmp = new function (e) {
        var n;
        if (e.__cmp) {
            n = e.__cmp.gdprAppliesGlobally;
            try {
                if (e.__cmp("__cmp")) return e.__cmp;
                c = __cmp() || []
            } catch (n) {
                return e.__cmp
            }
        }
        var t = function (e) {
            return {
                displayConsentUi: o.displayConsentUi,
                getConfig: i.getConfig,
                getCurrentVendorConsents: o.getCurrentVendorConsents,
                getConsentData: o.getConsentData,
                getPublisherConsents: o.getPublisherConsents,
                getCurrentPublisherConsents: o.getCurrentPublisherConsents,
                getVendorConsents: o.getVendorConsents,
                getVendorList: s.default.getVendorList,
                init: r.default.init,
                initConfig: i.initializeConfig,
                runConsentUiCallback: o.runConsentUiCallback,
                saveConsents: o.saveConsents,
                setConsentUiCallback: o.setConsentUiCallback,
                fetchPurposeList: u.default.fetchPurposeList,
                ping: function (e, n) {
                    var t = i.config.displayUi ? "always" === i.config.displayUi : window.__cmp.gdprAppliesGlobally;
                    (0, a.doCallback)(n, {
                        gdprAppliesGlobally: t,
                        cmpLoaded: !0
                    }, !0)
                },
                __cmp: function () {
                    return !0
                }
            }[e].apply(null, [].slice.call(arguments, 1))
        };
        return t.gdprAppliesGlobally = n, t
    }(window), (0, a.executePendingCalls)(c)
}, function (e, n, t) {
    "use strict";
    var i, o, r;
    Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
        value: function (e) {
            if (null == this) throw new TypeError('"this" is null or not defined');
            var n = Object(this),
                t = n.length >>> 0;
            if ("function" != typeof e) throw new TypeError("predicate must be a function");
            for (var i = arguments[1], o = 0; o < t;) {
                var r = n[o];
                if (e.call(i, r, o, n)) return r;
                o++
            }
        },
        configurable: !0,
        writable: !0
    }), Array.prototype.fill || Object.defineProperty(Array.prototype, "fill", {
        value: function (e) {
            if (null == this) throw new TypeError("this is null or not defined");
            for (var n = Object(this), t = n.length >>> 0, i = arguments[1] >> 0, o = i < 0 ? Math.max(t + i, 0) : Math.min(i, t), r = arguments[2], s = void 0 === r ? t : r >> 0, a = s < 0 ? Math.max(t + s, 0) : Math.min(s, t); o < a;) n[o] = e, o++;
            return n
        }
    }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
        value: function (e, n) {
            if (null == this) throw new TypeError('"this" is null or not defined');
            var t = Object(this),
                i = t.length >>> 0;
            if (0 === i) return !1;
            var o, r, s = 0 | n,
                a = Math.max(s >= 0 ? s : i - Math.abs(s), 0);
            for (; a < i;) {
                if ((o = t[a]) === (r = e) || "number" == typeof o && "number" == typeof r && isNaN(o) && isNaN(r)) return !0;
                a++
            }
            return !1
        }
    }), String.prototype.startsWith || (i = function () {
        try {
            var e = {},
                n = Object.defineProperty,
                t = n(e, e, e) && n
        } catch (e) { }
        return t
    }(), o = {}.toString, r = function (e) {
        if (null == this) throw TypeError();
        var n = String(this);
        if (e && "[object RegExp]" == o.call(e)) throw TypeError();
        var t = n.length,
            i = String(e),
            r = i.length,
            s = arguments.length > 1 ? arguments[1] : void 0,
            a = s ? Number(s) : 0;
        a != a && (a = 0);
        var u = Math.min(Math.max(a, 0), t);
        if (r + u > t) return !1;
        for (var l = -1; ++l < r;)
            if (n.charCodeAt(u + l) != i.charCodeAt(l)) return !1;
        return !0
    }, i ? i(String.prototype, "startsWith", {
        value: r,
        configurable: !0,
        writable: !0
    }) : String.prototype.startsWith = r), Array.prototype.filter || (Array.prototype.filter = function (e, n) {
        if ("Function" != typeof e && "function" != typeof e || !this) throw new TypeError;
        var t = this.length >>> 0,
            i = new Array(t),
            o = this,
            r = 0,
            s = -1;
        if (void 0 === n)
            for (; ++s !== t;) s in this && e(o[s], s, o) && (i[r++] = o[s]);
        else
            for (; ++s !== t;) s in this && e.call(n, o[s], s, o) && (i[r++] = o[s]);
        return i.length = r, i
    })
}]);