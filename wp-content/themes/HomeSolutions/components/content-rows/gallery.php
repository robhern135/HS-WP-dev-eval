<?php
$title = get_the_title();
$gallery_title = get_sub_field('title');
$n = 0; ?>
<div class="content-row gallery">
  <div class="gallery-inner content-bounds">
    <h4 class="title pb-3 px-3"><?php echo $gallery_title;?></h4>
    <?php if(have_rows('gallery')):?>
    <div class="gallery-carousel carousel owl-carousel owl-theme">
      <?php while( have_rows('gallery') ): the_row(); 
        $image = get_sub_field('image');
        $alt = $image['alt'] ? $image['alt'] : 'Image of '.$title;
        $n = $n + 1;
        ?>
      <button class="item" data-bs-toggle="modal" data-bs-target="#galleryModal-<?php echo $n; ?>">
        <img src="<?php echo $image['url'];?>" alt="" />
      </button>
      <?php endwhile; ?>
    </div>
    <?php endif;?>
  </div>
</div>

<?php if(have_rows('gallery')): $i = 0;?>
<?php while( have_rows('gallery') ): the_row(); 
        $image = get_sub_field('image');
        $alt = $image['alt'] ? $image['alt'] : 'Image of '.$title;
        $i = $i + 1;
        $title = get_sub_field('title');
        $description = get_sub_field('description');
        ?>
<div class="modal fade" id="galleryModal-<?php echo $i; ?>" tabindex="-1"
  aria-labelledby="galleryModal-<?php echo $i; ?>Label" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body">
        <img src="<?php echo $image['url'];?>" alt="" />

      </div>
      <div class="modal-footer d-flex align-items-start justify-content-start flex-column">
        <?php if($title):?><p class="modal-title"><?php echo $title;?></p><?php endif;?>
        <?php if($description):?><p class="modal-description"><?php echo $description;?></p><?php endif;?>
      </div>
    </div>
  </div>
</div>
<?php endwhile; ?>


<?php endif;?>