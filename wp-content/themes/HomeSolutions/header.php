<!DOCTYPE html>
<html <?php language_attributes(); ?> <?php blankslate_schema_type(); ?>>

<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>" />
  <meta name="viewport" content="width=device-width" />

  <link href="//www.google-analytics.com" rel="dns-prefetch">
  <link rel="dns-prefetch" href="//www.google-analytics.com">
  <link rel="dns-prefetch" href="//diffuser-cdn.app-us1.com">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>


  <link rel="apple-touch-icon" sizes="180x180"
    href="<?php echo get_template_directory_uri(); ?>/img/icons/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32"
    href="<?php echo get_template_directory_uri(); ?>/img/icons/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16"
    href="<?php echo get_template_directory_uri(); ?>/img/icons/favicon-16x16.png">
  <link rel="mask-icon" href="<?php echo get_template_directory_uri(); ?>/img/icons/safari-pinned-tab.svg"
    color="#ff572d">
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="theme-color" content="#ffffff">

  <link rel="alternate" type="application/rss+xml" title="<?php bloginfo( 'name' ); ?>"
    href="<?php bloginfo( 'rss2_url' ); ?>" />

  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="<?php bloginfo( 'description' ); ?>">

  <?php wp_head(); ?>

  <!-- Bootstrap Style -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">


  <!-- Custom Style -->
  <link rel='stylesheet' id='customStyle' href='<?php echo get_template_directory_uri(); ?>/style.css' media="print"
    onload="this.media='all'" />

  <?php include (TEMPLATEPATH . '/criticalCSS.php'); ?>
</head>

<body <?php body_class(); ?>>
  <?php wp_body_open(); 
  $site_title = get_bloginfo('name');
  $logo = get_field('logo','option');
  ?>
  <div id="wrapper">
    <header id="header" class="header" role="banner">
      <div class="header-inner site-bounds">
        <div id="branding" class="branding">
          <a href="<?php echo get_home_url();?>" class="logo" id="logo" itemprop="publisher" itemscope
            itemtype="https://schema.org/Organization">
            <div class="sr-only"><?php echo $site_title;?></div>
            <?php if($logo):?>
            <img src="<?php echo $logo['url'];?>" alt="" />
            <?php endif;?>
          </a>
          <div class="location-container">
            <p class="location">
              Our Gutters available <span class="locationReplace">near you</span>
            </p>
          </div>
        </div>
        <nav id="menu" role="navigation" itemscope itemtype="https://schema.org/SiteNavigationElement">
          <?php wp_nav_menu( array( 'theme_location' => 'main-menu', 'link_before' => '<span itemprop="name">', 'link_after' => '</span>' ) ); ?>
        </nav>
        <button class="burger"><?php echo burger();?><div class="sr-only">Open menu</div></button>
        <p class="location mobile">
          Our Gutters available <span class="locationReplace">near you</span>
        </p>
      </div>
    </header>
    <main id="content" role="main">