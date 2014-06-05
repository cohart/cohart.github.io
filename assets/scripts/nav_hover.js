$().ready(function() {
  $("#about").mouseenter(function() {
      $( "#content" ).empty();
      $("#content").append( $( "<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, quibusdam, atque cum consequuntur suscipit ea facilis hic deserunt voluptatibus praesentium aperiam cupiditate tempora neque voluptatem perferendis iusto aliquam. Iste, magnam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, earum, facere expedita itaque eius commodi amet incidunt minima aliquid cupiditate quod reprehenderit voluptate iusto aut aliquam inventore sapiente voluptates quia. </span>" ).fadeIn("slow") );
    }
  );

  $("#resume").mouseenter(function() {
      $( "#content" ).empty();
      $("#content").append( $( "<a href='assets/web/viewer.html?file=web-resume.pdf'><img src='assets/images/resume-clip.png' id='resume-clip' alt=''></a>" ).fadeIn("slow") );
      $("#content").append( $( "<div id='link-to-resume'> <a href='assets/web/viewer.html?file=web-resume.pdf'>click for full resume</a></div>" ).fadeIn("slow") );
    }
  );

  $("#smooth-streets").mouseenter(function() {
    $( "#content" ).empty();
    $(" #content ").append( $( "<a href='http://smoothstreets.herokuapp.com'><img src='assets/images/smooth-streets.png' id='smooth-streets-pic' alt='smooth streets'></a>" ).fadeIn("slow") );
    $("#content").append( $( "<div id='link-to-challenge-post'> <a href='http://challengepost.com/software/smooth-streets'>Challenge Post</a></div>" ).fadeIn("slow") );
  }
  );
});
