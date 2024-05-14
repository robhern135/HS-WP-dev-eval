<?php get_header();
if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

<div id="primary" class="content-area product-page">
  <?php
    get_template_part('components/product-hero');
    get_template_part('components/content-rows');
  ?>
</div>
<?php endwhile;
endif; 
get_footer();