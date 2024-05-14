<style>@charset "UTF-8";
.para, .hero .subtitle, p,
li {
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 10px;
}

* {
  box-sizing: border-box;
  font-size: 18px;
  line-height: 1.2;
  color: #1d1d1d;
  font-family: "Geist", sans-serif;
  font-weight: 300;
}

body {
  position: relative;
  background: #fff;
}

main {
  padding-top: 135px;
}

html {
  margin-top: 0 !important;
  scroll-behavior: smooth;
}

img,
picture,
source {
  max-width: 100%;
  width: auto;
  height: auto;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
}

.site-bounds {
  max-width: 1400px;
  margin: auto;
  padding: 0 20px;
}

.content-bounds {
  max-width: 1280px;
  margin: auto;
  padding: 0 20px;
}

.sr-only {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

.flex-equal {
  flex: 1;
}

.content-rows {
  position: relative;
}

strong,
b,
em,
i {
  font-size: inherit;
  color: inherit;
  font-weight: 400;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 500;
}

h1 {
  font-size: 45px;
  margin: 0 0 10px 0;
  font-weight: 700;
}

.small-bounds {
  max-width: 845px;
  padding: 0 20px;
  margin: 0 auto 50px auto;
}

.text-center {
  text-align: center;
}

.button {
  font-size: inherit;
  line-height: 1;
  background-color: #1d1d1d;
  color: #fff;
  border-radius: 5px;
  padding: 10px 30px;
  border: 2px solid #1d1d1d;
  transition: 150ms linear all;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.button:hover {
  background-color: transparent;
  text-decoration: none;
  color: #1d1d1d;
  transition: 150ms linear all;
}

.bg-grey {
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #f1f2f4;
  margin-bottom: 50px;
}

@font-face {
  font-family: "Geist";
  src: url("../../wp-content/themes/HomeSolutions/fonts/geist-sans/Geist-Regular.ttf");
  src: url("../../wp-content/themes/HomeSolutions/fonts/geist-sans/Geist-Regular.woff2") format("woff2");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Geist";
  src: url("../../wp-content/themes/HomeSolutions/fonts/geist-sans/Geist-Bold.ttf");
  src: url("../../wp-content/themes/HomeSolutions/fonts/geist-sans/Geist-Bold.woff2") format("woff2");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Geist";
  src: url("../../wp-content/themes/HomeSolutions/fonts/geist-sans/Geist-Black.ttf");
  src: url("../../wp-content/themes/HomeSolutions/fonts/geist-sans/Geist-Black.woff2") format("woff2");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes slideDown {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  padding: 10px;
  transition: 150ms linear all;
  background: white;
  animation-name: slideDown;
  animation-duration: 500ms;
  animation-delay: 0.5;
  animation-fill-mode: forwards;
}
.header .header-inner {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.header .branding {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
.header .logo {
  max-width: 220px;
  transition: 150ms linear all;
}
.header p.location {
  font-weight: 500;
  font-size: 18px;
  opacity: 0;
  animation-name: fadeIn;
  animation-duration: 150ms;
  animation-delay: 300ms;
  animation-fill-mode: forwards;
  margin: 0;
  padding: 5px;
}
.header p.location.mobile {
  display: none;
}
.header.scrolled .logo {
  max-width: 120px;
  transition: 150ms linear all;
}
.header nav#menu ul {
  padding: 0;
  display: flex;
  align-items: center;
  list-style: none;
  justify-content: flex-end;
  gap: 5px;
  margin: 0;
}
.header nav#menu ul li {
  margin: 0;
}
.header nav#menu ul li a {
  padding: 5px 10px;
  text-decoration: none;
  position: relative;
}
.header nav#menu ul li a:before, .header nav#menu ul li a:after {
  position: absolute;
  left: 0px;
  width: 100%;
  height: 1px;
  background: #1d1d1d;
  content: "";
  opacity: 0;
  transition: all 0.3s;
}
.header nav#menu ul li a:before {
  top: 0px;
  transform: translateY(-10px);
}
.header nav#menu ul li a:after {
  bottom: 0px;
  transform: translateY(10px);
}
.header nav#menu ul li a:hover:before, .header nav#menu ul li a:hover:after {
  opacity: 1;
  transform: translateY(0px);
}
.header .burger {
  display: none;
  border: 0;
  background: transparent;
}
.header .burger svg {
  width: 25px;
  height: 25px;
}

@media only screen and (max-width: 1220px) {
  .header p.location {
    font-size: 16px;
  }
  .header p.location span {
    font-size: inherit;
  }
  .header nav#menu ul li a span {
    font-size: 16px;
  }
}
@media only screen and (max-width: 1130px) {
  .header .burger {
    display: block;
  }
  .header nav#menu {
    display: none;
  }
}
@media only screen and (max-width: 477px) {
  .header .logo {
    max-width: 150px;
  }
}
@media only screen and (max-width: 475px) {
  .header .header-inner {
    flex-wrap: wrap;
  }
  .header p.location {
    display: none;
  }
  .header p.location.mobile {
    text-align: center;
    display: inline;
    width: 100%;
    flex: 0 0 100%;
  }
}
.hero {
  padding-bottom: 50px;
}
.hero .hero-inner {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 40px;
}
.hero .title {
  margin-bottom: 0;
}
.hero .subtitle {
  max-width: 500px;
  margin-bottom: 5px;
}
.hero .left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
}
.hero .right picture,
.hero .right source,
.hero .right img {
  border-radius: 18px;
}
.hero.product-hero ul.features {
  padding-left: 15px;
}
.hero.product-hero ul.features li span {
  padding-left: 5px;
}
.hero.product-hero ul.features li::marker {
  content: "✓";
}
.hero.product-hero .product-info {
  align-items: center;
  justify-content: flex-start;
}
.hero.product-hero h1 {
  font-size: 30px;
  margin-bottom: 10px;
}
.hero.product-hero .image {
  overflow: hidden;
  border-radius: 18px;
}
.hero.product-hero .text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.hero.product-hero .hero-inner {
  flex-direction: row-reverse;
}
.hero.product-hero .hero-inner .text {
  flex: 3;
}
.hero.product-hero .hero-inner .image {
  flex: 2;
}

@media only screen and (max-width: 760px) {
  .hero .hero-inner {
    flex-direction: column-reverse;
  }
  .hero .hero-inner .right {
    max-width: 450px;
    margin: 0 auto;
  }
}
@media only screen and (max-width: 690px) {
  .hero.product-hero .hero-inner {
    flex-direction: column-reverse;
  }
  .hero.product-hero .hero-inner .image {
    max-width: 450px;
  }
  body.single-product .hero.product-hero .product-info {
    align-items: flex-start;
    gap: 20px;
  }
}</style>