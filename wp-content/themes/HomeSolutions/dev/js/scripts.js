;(function ($, root, undefined) {
  "use strict"

  Array.from(document.querySelectorAll("a")).forEach((a) => {
    a.classList.add(location.hostname === a.hostname || !a.hostname.length ? "local" : "external")
  })

  $(function () {
    // DOM ready, take it away

    //passive event listeners for pagespeed
    // Passive event listeners for IE
    jQuery.event.special.touchstart = {
      setup: function (_, ns, handle) {
        this.addEventListener("touchstart", handle, {
          passive: !ns.includes("noPreventDefault"),
        })
      },
    }
    jQuery.event.special.touchmove = {
      setup: function (_, ns, handle) {
        this.addEventListener("touchmove", handle, {
          passive: !ns.includes("noPreventDefault"),
        })
      },
    }

    gsap.registerPlugin(ScrollTrigger)
    let gsapMarkers = false
    //************* */
    //** => Header Scrolling
    //************* */
    let scroll_start = 0,
      scrollDistance = 150

    handleHeaderBackground()

    $(document).scroll(function () {
      handleHeaderBackground()
    })

    function handleHeaderBackground() {
      scroll_start = $(window).scrollTop()
      if (scroll_start > scrollDistance) {
        $(".header").addClass("scrolled")
      } else {
        $(".header").removeClass("scrolled")
      }
    }

    //set global gsap markers for testing
    // let markersVisible = false

    //** set up plugins
    // gsap.registerPlugin(ScrollTrigger)

    // //********************* */
    // //** => GALLERY CAROUSEL
    // //********************* */

    const galleryCarousel = $(".gallery-carousel.owl-carousel.carousel")
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
        navText: [
          '<span class="prev-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Pro 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.--><path d="M4.7 244.7c-6.2 6.2-6.2 16.4 0 22.6l176 176c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L54.6 272 432 272c8.8 0 16-7.2 16-16s-7.2-16-16-16L54.6 240 203.3 91.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-176 176z"/></svg></span>',
          '<span class="next-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Pro 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2024 Fonticons, Inc.--><path d="M435.3 267.3L446.6 256l-11.3-11.3-168-168L256 65.4 233.4 88l11.3 11.3L385.4 240 16 240 0 240l0 32 16 0 369.4 0L244.7 412.7 233.4 424 256 446.6l11.3-11.3 168-168z"/></svg></span>',
        ],
        items: 3,
        responsive: {
          700: { nav: true, items: 3, margin: 25 },
          500: { nav: true, items: 2, margin: 20, stagePadding: 30 },
          450: { nav: true, items: 1, margin: 15, stagePadding: 40 },
          0: { nav: true, items: 1, margin: 10, stagePadding: 30 },
        },
        onInitialized: addDotButtonText,
        onRefresh: addDotButtonText,
      })
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
        let idx = $(this).index() + 1
        $(this).attr("aria-label", `dot ${idx}`)
        // append a span to the button containing descriptive text
        $(this).append('<span class="sr-only offscreen">Go to slide ' + idx + "</span>")
      })

      // loop through each owl-prev element
      $(".owl-prev").each(function () {
        // remove old text nodes
        $(this).attr("aria-label", "previous")
        $(this).removeAttr("role")
      })
      // loop through each owl-prev element
      $(".owl-next").each(function () {
        // remove old text nodes
        $(this).attr("aria-label", "next")
        $(this).removeAttr("role")
      })
    }

    async function getLocation() {
      const locationReplace = $(".locationReplace")

      await fetch("https://ipapi.co/8.8.8.8/json/").then(function (res) {
        res
          .json()
          .then((jsonData) => {
            const { city, region } = jsonData
            locationReplace.html(`in ${city}, ${region}`)
          })
          .catch((err) => console.log(err))
      })
    }
    getLocation()

    //************* */
    //** => PAGE HERO
    //************* */
    const pageHero = $(".page-hero")
    if (pageHero[0]) {
      const heroImage = pageHero.find(".right"),
        heroImgElem = pageHero.find(".right img"),
        heroTitle = pageHero.find(".title"),
        heroSubtitle = pageHero.find(".subtitle"),
        heroLink = pageHero.find(".hero-btn"),
        heroTl = gsap.timeline({}),
        delay = 0.25,
        gsapDelay = `=+.${delay}`,
        gsapDuration = 0.35

      heroTl.from(heroImage, { autoAlpha: 0, scale: 0.9, duration: gsapDuration }, 0.5).from(heroImgElem, { scale: 1.1, duration: gsapDuration }, 0.5).from(heroTitle, { y: 20, autoAlpha: 0, duration: gsapDuration }, gsapDelay).from(heroSubtitle, { y: 20, autoAlpha: 0, duration: gsapDuration }, gsapDelay).from(heroLink, { autoAlpha: 0, duration: gsapDuration })
    }
    //************* */
    //** => Columns
    //************* */
    const imgText = $(".image-text-columns")
    if (imgText[0]) {
      imgText.each(function () {
        const elem = $(this),
          title = imgText.find(".title"),
          columns = imgText.find(".column-item"),
          colTl = gsap.timeline({}),
          duration = 0.35

        ScrollTrigger.create({
          trigger: elem,
          animation: colTl,
          markers: gsapMarkers,
          start: "top 65%",
          pin: false,
          scrub: false,
        })

        colTl.from(title, { autoAlpha: 0, y: 20, duration: duration }).from(columns, { stagger: 0.3, duration: duration, y: 30, autoAlpha: 0 })
      })
    }
    //************* */
    //** => Testimonials
    //************* */
    const testimonials = $(".testimonials")
    if (testimonials[0]) {
      testimonials.each(function () {
        const elem = $(this),
          title = elem.find(".title"),
          subtitle = elem.find(".subtitle"),
          topTitle = elem.find(".top-title"),
          quotes = elem.find(".testimonial-item"),
          right = elem.find(".right"),
          testimonialTl = gsap.timeline({}),
          duration = 0.35

        ScrollTrigger.create({
          trigger: testimonials,
          animation: testimonialTl,
          markers: gsapMarkers,
          start: "top 65%",
          pin: false,
          scrub: false,
        })

        testimonialTl
          .from(title, { autoAlpha: 0, y: 20, duration: duration })
          .from(subtitle, { autoAlpha: 0, y: 20, duration: duration }, "=-.2")
          .from(topTitle, { autoAlpha: 0, scale: 0.9, duration: duration }, "=-.2")
          .from(quotes, { autoAlpha: 0, scale: 0.97, stagger: 0.2, duration: duration })
          .from(right, { autoAlpha: 0, duration: duration }, `=-${duration * 2}`)
      })
    }

    //************* */
    //** => PAGE HERO
    //************* */
    const productHero = $(".product-hero")
    if (productHero[0]) {
      const heroImage = productHero.find(".image"),
        heroImgElem = productHero.find(".image img"),
        heroTitle = productHero.find(".title"),
        heroSubtitle = productHero.find(".subtitle"),
        features = productHero.find("li.item"),
        info = productHero.find(".product-info"),
        heroTl = gsap.timeline({}),
        delay = 0.25,
        gsapDelay = `=+.${delay}`,
        gsapDuration = 0.35

      heroTl
        .from(heroImage, { autoAlpha: 0, scale: 0.9, duration: gsapDuration }, 0.5)
        .from(heroImgElem, { scale: 1.1, duration: gsapDuration }, 0.5)
        .from(heroTitle, { y: 20, autoAlpha: 0, duration: gsapDuration }, gsapDelay)
        .from(heroSubtitle, { y: 20, autoAlpha: 0, duration: gsapDuration }, gsapDelay)
        .from(features, { autoAlpha: 0, y: 20, stagger: 0.2, duration: gsapDuration })
        .from(info, { autoAlpha: 0, duration: gsapDuration }, gsapDelay)
    }
    //************* */
    //** => GALLERY
    //************* */
    const gallery = $(".gallery")
    if (gallery[0]) {
      const title = gallery.find(".title"),
        galleryItems = gallery.find(".gallery-carousel"),
        buttons = gallery.find(".owl-nav"),
        galleryTl = gsap.timeline({}),
        delay = 0.25,
        gsapDelay = `=+.${delay}`,
        gsapDuration = 0.35

      ScrollTrigger.create({
        trigger: gallery,
        animation: galleryTl,
        markers: gsapMarkers,
        start: "top 70%",
        pin: false,
        scrub: false,
      })

      galleryTl.from(title, { y: 20, autoAlpha: 0, duration: gsapDuration }, gsapDelay).from(galleryItems, { autoAlpha: 0, duration: gsapDuration }, gsapDelay).from(buttons, { autoAlpha: 0, duration: gsapDuration })
    }
  })
})(jQuery, this)
