<?php
$title = get_field('title') ? get_field('title') : get_the_title();
$subtitle = get_field('subtitle');
$default = get_field('default_hero_image');
$image = get_the_post_thumbnail_url() ? get_the_post_thumbnail_url() : $default;
$link = get_field('purchase_link');
$price = get_field('price');
?>
<section class="hero product-hero">
  <div class="hero-inner content-bounds">
    <div class="text">
      <h1 class="title"><?php echo $title;?></h1>
      <?php if($subtitle):?><h2 class="subtitle"><?php echo $subtitle;?></h2><?php endif;?>

      <?php if( have_rows('features') ):?>
      <ul class="features">
        <?php while( have_rows('features') ) : the_row();
          $item = get_sub_field('item');?>
        <li class="item"><span><?php echo $item;?></span></li>
        <?php endwhile;?>
      </ul>
      <?php endif;?>

      <div class="product-info d-flex flex-column flex-md-row">
        <?php if($price):?><p class="price mb-0">Price: $ <?php echo $price; ?></p><?php endif;?>
        <a href="#" class="button">Buy Now</a>
      </div>
    </div>
    <div class="image">
      <img src="<?php echo $image;?>" />
    </div>
  </div>

</section>