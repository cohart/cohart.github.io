$().ready(function() {
  $("#about").mouseenter(function() {
      $( "#content" ).empty();
      $("#content").append( $( "<div>I'm a web developer with experience in numerous technologies and languages including Ruby on Rails, Javascript, Backbone.js, as well as testing suites like Rspec, Capybara, and Jasmine. I’m an Agile developer who always enjoys a good scrum and absolutely loves dealing with data and APIs.</div>" ).fadeIn("slow") );
    }
  );

  $("#resume").mouseenter(function() {
      $( "#content" ).empty();
      $("#content").append( $( "<a href='assets/web/viewer.html?file=web-resume.pdf'><img src='assets/images/resume-clip.png' id='resume-clip' alt=''></a>" ).fadeIn("slow") );
      $("#content").append( $( "<div id='link-to-resume'> <a href='assets/web/viewer.html?file=web-resume.pdf'>Full Resume</a></div>" ).fadeIn("slow") );
    }
  );

  $("#seedly").mouseenter(function() {
      $( "#content" ).empty();
      $("#content").append( $( "<div><img src='assets/images/seedly-logo1.png' id='seedly-logo' alt='seedly logo'></div>" ).fadeIn("slow") );
      $("#content").append( $( "<div id='seedly-content'>Seedly is an app for gardeners that lets the user easily find their local frost date, calculate when individual seeds should be planted.</div>" ).fadeIn("slow") );
      $("#content").append( $( "<div id='seedly-links'><i class='fa fa-github-alt'></i><a href='https://github.com/cohart/seedly'>Source</a> | <a href='http://seed-ly.herokuapp.com/'>Seedly</a></div>" ).fadeIn("slow") );
    }
  );

  $("#farmsense-wrapper").mouseenter(function() {
      $( "#content" ).empty();
      $("#content").append( $( "<div><img src='assets/images/farmsense.png' id='farmsense-img' alt='farmsense download image'></div>" ).fadeIn("slow") );
      $("#content").append( $( "<div id='farmsense-content'>FarmsenseWrapper is a lightweight wrapper for the Farmsense API. This gem returns a list of nearby weather stations and probabilities of spring/fall frost dates for each station.</div>" ).fadeIn("slow") );
      $("#content").append( $( "<div id='farmsense-links'><i class='fa fa-github-alt'></i><a href='https://github.com/cohart/farmsense_wrapper'>Source</a> | <a href='https://rubygems.org/gems/farmsense_wrapper'>RubyGems/farmsense</a></div>" ).fadeIn("slow") );

    }
  );

  $("#smooth-streets").mouseenter(function() {
    $( "#content" ).empty();
    $(" #content ").append( $( "<img src='assets/images/smooth-streets.png' id='smooth-streets-pic' alt='smooth streets'>" ).fadeIn("slow") );
    $("#content").append( $( "<div id='smooth-streets-links'><i class='fa fa-github-alt'></i><a href='https://github.com/trivett/smooth_streets'>Source</a> | <a href='http://smoothstreets.herokuapp.com/'>SmoothStreets</a> | <a href='http://challengepost.com/software/smooth-streets '>Challenge Post</a></div>" ).fadeIn("slow") );
    }
  );
});
