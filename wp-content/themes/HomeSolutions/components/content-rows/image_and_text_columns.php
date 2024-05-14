<?php 
$title = get_sub_field('title');
if( have_rows('columns') ):
?>
<div class="content-row image-text-columns content-bounds">
  <?php if($title):?><h2 class="title mb-5 text-center w-100"><?php echo $title;?></h2><?php endif;?>
  <div
    class="image-text-columns-inner d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-start justify-content-md-center">
    <?php while( have_rows('columns') ): the_row(); 
      $link = get_sub_field('link');
      $description = get_sub_field('description');
      $image = get_sub_field('image');
      if($link):
      $alt = $image['alt'] ? $image['alt'] : $link['title'];
    ?>
    <a href="<?php echo $link['url'];?>"
      class="column-item d-flex flex-column align-items-center justify-content-center gap-2 flex-equal">
      <?php if($image):?>
      <div class="image-outer">
        <div class="image-container">
          <img src="<?php echo $image['url'];?>" class="img-elem" alt="" />
        </div>
      </div>
      <?php endif;?>
      <div class="content-container d-flex flex-column align-items-center justify-content-start">
        <h3 class="col-title"><?php echo $link['title'];?></h3>
        <p class="description"><?php echo $description;?></p>
      </div>
    </a>
    <?php endif; endwhile; ?>
  </div>
</div>
<?php endif; ?>