<?php
$title = get_field('title') ? get_field('title') : get_the_title();
$subtitle = get_field('subtitle');
$button = get_field('button');
$default = get_field('default_hero_image');
$image = get_the_post_thumbnail_url() ? get_the_post_thumbnail_url() : $default;
?>
<section class="hero page-hero">
  <div class="hero-inner content-bounds">
    <div class="left flex-equal">
      <h1 class="title"><?php echo $title;?></h1>
      <?php if($subtitle):?><h2 class="subtitle"><?php echo $subtitle;?></h2><?php endif;?>
      <?php if($button):?>
      <div class="hero-btn">
        <a href="<?php echo $button['url'];?>" class="button"><?php echo $button['title'];?></a>
      </div><?php endif;?>
    </div>
    <div class="right flex-equal">
      <img src="<?php echo $image;?>" />
    </div>
  </div>
</section>