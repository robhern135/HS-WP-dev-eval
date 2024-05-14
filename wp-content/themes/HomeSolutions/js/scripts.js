"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
;
(function ($, root, undefined) {
  "use strict";

  Array.from(document.querySelectorAll("a")).forEach(function (a) {
    a.classList.add(location.hostname === a.hostname || !a.hostname.length ? "local" : "external");
  });
  $(function () {
    // DOM ready, take it away

    //passive event listeners for pagespeed
    // Passive event listeners for IE
    jQuery.event.special.touchstart = {
      setup: function setup(_, ns, handle) {
        this.addEventListener("touchstart", handle, {
          passive: !ns.includes("noPreventDefault")
        });
      }
    };
    jQuery.event.special.touchmove = {
      setup: function setup(_, ns, handle) {
        this.addEventListener("touchmove", handle, {
          passive: !ns.includes("noPreventDefault")
        });
      }
    };
    gsap.registerPlugin(ScrollTrigger);
    var gsapMarkers = false;
    //************* */
    //** => Header Scrolling
    //************* */
    var scroll_start = 0,
      scrollDistance = 150;
    handleHeaderBackground();
    $(document).scroll(function () {
      handleHeaderBackground();
    });
    function handleHeaderBackground() {
      scroll_start = $(window).scrollTop();
      if (scroll_start > scrollDistance) {
        $(".header").addClass("scrolled");
      } else {
        $(".header").removeClass("scrolled");
      }
    }

    //set global gsap markers for testing
    // let markersVisible = false

    //** set up plugins
    // gsap.registerPlugin(ScrollTrigger)

    // //********************* */
    // //** => GALLERY CAROUSEL
    // //********************* */

    var galleryCarousel = $(".gallery-carousel.owl-carousel.carousel");
    if (galleryCarousel[0]) {
      galleryCarousel.owlCarousel({
        center: false,
        loop: true,
        responsiveClass: true,
        autoplay: false,
        dots: false,
        nav: true,
        stagePadding: 20,
        margin: 25,
        navText: ['<span class="prev-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Pro 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.--><path d="M4.7 244.7c-6.2 6.2-6.2 16.4 0 22.6l176 176c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L54.6 272 432 272c8.8 0 16-7.2 16-16s-7.2-16-16-16L54.6 240 203.3 91.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-176 176z"/></svg></span>', '<span class="next-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Pro 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.--><path d="M435.3 267.3L446.6 256l-11.3-11.3-168-168L256 65.4 233.4 88l11.3 11.3L385.4 240 16 240 0 240l0 32 16 0 369.4 0L244.7 412.7 233.4 424 256 446.6l11.3-11.3 168-168z"/></svg></span>'],
        items: 3,
        responsive: {
          700: {
            nav: true,
            items: 3,
            margin: 25
          },
          500: {
            nav: true,
            items: 2,
            margin: 20,
            stagePadding: 30
          },
          450: {
            nav: true,
            items: 1,
            margin: 15,
            stagePadding: 40
          },
          0: {
            nav: true,
            items: 1,
            margin: 10,
            stagePadding: 30
          }
        },
        onInitialized: addDotButtonText,
        onRefresh: addDotButtonText
      });
    }

    //********************* */
    //** => OWL CAROUSEL FUNCTIONS
    //********************* */
    function addDotButtonText() {
      // loop through each dot element
      $(".owl-dot").each(function () {
        // remove old text nodes
        // $(this).find('.offscreen').remove();
        // grab its (zero-based) order in the series
        var idx = $(this).index() + 1;
        $(this).attr("aria-label", "dot ".concat(idx));
        // append a span to the button containing descriptive text
        $(this).append('<span class="sr-only offscreen">Go to slide ' + idx + "</span>");
      });

      // loop through each owl-prev element
      $(".owl-prev").each(function () {
        // remove old text nodes
        $(this).attr("aria-label", "previous");
        $(this).removeAttr("role");
      });
      // loop through each owl-prev element
      $(".owl-next").each(function () {
        // remove old text nodes
        $(this).attr("aria-label", "next");
        $(this).removeAttr("role");
      });
    }
    function getLocation() {
      return _getLocation.apply(this, arguments);
    }
    function _getLocation() {
      _getLocation = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var locationReplace;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              locationReplace = $(".locationReplace");
              _context.next = 3;
              return fetch("https://ipapi.co/8.8.8.8/json/").then(function (res) {
                res.json().then(function (jsonData) {
                  var city = jsonData.city,
                    region = jsonData.region;
                  locationReplace.html("in ".concat(city, ", ").concat(region));
                })["catch"](function (err) {
                  return console.log(err);
                });
              });
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return _getLocation.apply(this, arguments);
    }
    getLocation();

    //************* */
    //** => PAGE HERO
    //************* */
    var pageHero = $(".page-hero");
    if (pageHero[0]) {
      var heroImage = pageHero.find(".right"),
        heroImgElem = pageHero.find(".right img"),
        heroTitle = pageHero.find(".title"),
        heroSubtitle = pageHero.find(".subtitle"),
        heroLink = pageHero.find(".hero-btn"),
        heroTl = gsap.timeline({}),
        delay = 0.25,
        gsapDelay = "=+.".concat(delay),
        gsapDuration = 0.35;
      heroTl.from(heroImage, {
        autoAlpha: 0,
        scale: 0.9,
        duration: gsapDuration
      }, 0.5).from(heroImgElem, {
        scale: 1.1,
        duration: gsapDuration
      }, 0.5).from(heroTitle, {
        y: 20,
        autoAlpha: 0,
        duration: gsapDuration
      }, gsapDelay).from(heroSubtitle, {
        y: 20,
        autoAlpha: 0,
        duration: gsapDuration
      }, gsapDelay).from(heroLink, {
        autoAlpha: 0,
        duration: gsapDuration
      });
    }
    //************* */
    //** => Columns
    //************* */
    var imgText = $(".image-text-columns");
    if (imgText[0]) {
      imgText.each(function () {
        var elem = $(this),
          title = imgText.find(".title"),
          columns = imgText.find(".column-item"),
          colTl = gsap.timeline({}),
          duration = 0.35;
        ScrollTrigger.create({
          trigger: elem,
          animation: colTl,
          markers: gsapMarkers,
          start: "top 65%",
          pin: false,
          scrub: false
        });
        colTl.from(title, {
          autoAlpha: 0,
          y: 20,
          duration: duration
        }).from(columns, {
          stagger: 0.3,
          duration: duration,
          y: 30,
          autoAlpha: 0
        });
      });
    }
    //************* */
    //** => Testimonials
    //************* */
    var testimonials = $(".testimonials");
    if (testimonials[0]) {
      testimonials.each(function () {
        var elem = $(this),
          title = elem.find(".title"),
          subtitle = elem.find(".subtitle"),
          topTitle = elem.find(".top-title"),
          quotes = elem.find(".testimonial-item"),
          right = elem.find(".right"),
          testimonialTl = gsap.timeline({}),
          duration = 0.35;
        ScrollTrigger.create({
          trigger: testimonials,
          animation: testimonialTl,
          markers: gsapMarkers,
          start: "top 65%",
          pin: false,
          scrub: false
        });
        testimonialTl.from(title, {
          autoAlpha: 0,
          y: 20,
          duration: duration
        }).from(subtitle, {
          autoAlpha: 0,
          y: 20,
          duration: duration
        }, "=-.2").from(topTitle, {
          autoAlpha: 0,
          scale: 0.9,
          duration: duration
        }, "=-.2").from(quotes, {
          autoAlpha: 0,
          scale: 0.97,
          stagger: 0.2,
          duration: duration
        }).from(right, {
          autoAlpha: 0,
          duration: duration
        }, "=-".concat(duration * 2));
      });
    }

    //************* */
    //** => PAGE HERO
    //************* */
    var productHero = $(".product-hero");
    if (productHero[0]) {
      var _heroImage = productHero.find(".image"),
        _heroImgElem = productHero.find(".image img"),
        _heroTitle = productHero.find(".title"),
        _heroSubtitle = productHero.find(".subtitle"),
        features = productHero.find("li.item"),
        info = productHero.find(".product-info"),
        _heroTl = gsap.timeline({}),
        _delay = 0.25,
        _gsapDelay = "=+.".concat(_delay),
        _gsapDuration = 0.35;
      _heroTl.from(_heroImage, {
        autoAlpha: 0,
        scale: 0.9,
        duration: _gsapDuration
      }, 0.5).from(_heroImgElem, {
        scale: 1.1,
        duration: _gsapDuration
      }, 0.5).from(_heroTitle, {
        y: 20,
        autoAlpha: 0,
        duration: _gsapDuration
      }, _gsapDelay).from(_heroSubtitle, {
        y: 20,
        autoAlpha: 0,
        duration: _gsapDuration
      }, _gsapDelay).from(features, {
        autoAlpha: 0,
        y: 20,
        stagger: 0.2,
        duration: _gsapDuration
      }).from(info, {
        autoAlpha: 0,
        duration: _gsapDuration
      }, _gsapDelay);
    }
    //************* */
    //** => GALLERY
    //************* */
    var gallery = $(".gallery");
    if (gallery[0]) {
      var title = gallery.find(".title"),
        galleryItems = gallery.find(".gallery-carousel"),
        buttons = gallery.find(".owl-nav"),
        galleryTl = gsap.timeline({}),
        _delay2 = 0.25,
        _gsapDelay2 = "=+.".concat(_delay2),
        _gsapDuration2 = 0.35;
      ScrollTrigger.create({
        trigger: gallery,
        animation: galleryTl,
        markers: gsapMarkers,
        start: "top 70%",
        pin: false,
        scrub: false
      });
      galleryTl.from(title, {
        y: 20,
        autoAlpha: 0,
        duration: _gsapDuration2
      }, _gsapDelay2).from(galleryItems, {
        autoAlpha: 0,
        duration: _gsapDuration2
      }, _gsapDelay2).from(buttons, {
        autoAlpha: 0,
        duration: _gsapDuration2
      });
    }
  });
})(jQuery, void 0);