<?php
require_once("../../wordpress/wp-config.php");

$args = array(
     'category_name' => 'n8112',
     'posts_per_page' => 12
);
query_posts( $args );
if ( have_posts() ) while ( have_posts() ) : the_post();
  $audio_args = array(
      'post_type' => 'attachment',
      'post_mime_type' => 'audio',
      'post_parent' => $post->ID,
      'numberposts' => 1 
  );
  $audio = get_children($audio_args);
  if($audio):
    $audio_file = wp_get_attachment_url(key($audio));
?>

<div class="col-lg-3 col-md-4 col-6 item" data-file="<?php echo $audio_file; ?>">
<div class="thumbnail mb-1" href="#">
  <?php the_post_thumbnail('medium'); ?>
  <i class="fa fa-play-circle fa-5x" aria-hidden="true"></i>
</div>
<h3 class="title h5">
  <a href="<?php the_permalink(); ?>"><?php the_title_attribute(); ?></a>
</h3>
<p class="name"><?php the_author(); ?></p>
</div>

<?php 
  endif;
endwhile;
wp_reset_query();
?>