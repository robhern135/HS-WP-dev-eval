<?php
if( have_rows('content_blocks') ):
?>

<section id="content-rows" class="content-rows">
  <?php while( have_rows('content_blocks') ): the_row(); 
      $row_id = get_sub_field('custom_id');
      $title = get_sub_field('title');
      $bg = get_sub_field('background_color');
      ?>
  <div class="content-block<?php if($bg):?> bg-<?php echo $bg;?><?php endif;?>"
    <?php if($row_id):?>id="<?php echo esc_attr($row_id); ?>" <?php endif; ?>>
    <?php if( have_rows('content_rows') ): 
        // loop through all the rows of flexible content
        while ( have_rows('content_rows') ) : the_row();

        if( get_row_layout() == 'testimonials' )
          get_template_part('components/content-rows/testimonials');

        if( get_row_layout() == 'image_and_text_columns' )
          get_template_part('components/content-rows/image_and_text_columns');

        if( get_row_layout() == 'gallery' )
          get_template_part('components/content-rows/gallery');
          wp_enqueue_script('owl-script'); 


        
        endwhile; // close the loop of flexible content
        endif; // close flexible content conditional ?>
  </div>
  <?php endwhile; ?>
</section>
<?php endif; ?>