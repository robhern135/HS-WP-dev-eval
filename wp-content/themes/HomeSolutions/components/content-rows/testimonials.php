<?php 
$title = get_sub_field('title');
$subtitle = get_sub_field('subtitle');
$top_title = get_sub_field('top_title');
$img = get_sub_field('image');

?>
<div class="content-row testimonials small-bounds">
  <div class="testimonials-inner text-center">
    <div class="titles d-flex align-items-center justify-content-center flex-column mb-5">
      <h4 class="top-title"><?php echo $top_title;?></h4>
      <h2 class="title"><?php echo $title;?></h2>
      <p class="subtitle"><?php echo $subtitle;?></p>
    </div>
    <div class="testimonial-container d-flex flex-column flex-md-row align-items-center justify-content-center">
      <?php if( have_rows('quotes') ): ?>
      <div class="left flex-equal">
        <?php while( have_rows('quotes') ): the_row();
        $quote = get_sub_field('quote');
        ?>
        <div class="testimonial-item d-flex flex-column align-items-start justify-content-start text-start">
          <?php echo $quote;?>
        </div>
        <?php endwhile; ?>
      </div>
      <?php endif; ?>

      <?php if($img):
        $alt = $img['alt'] ? $img['alt'] : $title;
        ?>
      <div class="right flex-equal">
        <img src="<?php echo $img['url'];?>" alt="<?php echo $alt;?>" />
      </div>
      <?php endif;?>
    </div>
  </div>
</div>