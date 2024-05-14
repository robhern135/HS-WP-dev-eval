</main>

<footer id="footer" class="footer" role="contentinfo">
  <div
    class="footer-inner site-bounds d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-sm-between text-center text-sm-start">
    <div id="copyright" class="copyright mb-3 mb-sm-0">
      <p><b>&copy; <?php echo esc_html( date_i18n( __( 'Y', 'blankslate' ) ) ); ?> Roofing Inc</b></p>
      <p>
        <?php echo esc_html( get_bloginfo( 'name' ) ); ?></p>
    </div>
    <nav id="footermenu" role="navigation" class="footer-menu" itemscope
      itemtype="https://schema.org/SiteNavigationElement">
      <?php wp_nav_menu( array( 'theme_location' => 'footer-menu', 'link_before' => '<span itemprop="name">', 'link_after' => '</span>' ) ); ?>
    </nav>
  </div>
</footer>
</div>
<?php wp_footer(); ?>
</body>

</html>