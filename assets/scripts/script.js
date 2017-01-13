$(function() {
  const $nav = $('nav');

  $nav.click( function(event) {
    switch (event.target.className) {
      case "about":
        uiObject.loadAbout();
        break;
      case "portfolio":
        uiObject.loadPortfolio();
        break;
      case "contact":
        uiObject.loadContact();
        break;
      case "logo":
        break;
      default:
        console.log('default')
    }
  });
})


const uiObject = {
  toggle(fader, resolve) {
    $(event.target).parent().children('.active').removeClass('active');
    // NEEDS A PROMISE
    if ($('section:visible').length) {
      $('section:visible').fadeToggle('fast', (resolve) => {
        $(fader).fadeToggle('fast', (resolve) => {
          resolve()
        });
      });
    } else {
      debugger
      resolve()
    }
  },

  loadAbout() {
    var faded = new Promise((resolve, reject) => {
      this.toggle('.about-content', resolve)
    })

    faded.then(() => {
      $('.about-content').toggle();
    })
    .then(() => {
      $(event.target).addClass('active');
    })
    .catch((err) => {
      console.error(err)
    })
  },

  loadPortfolio() {
    var faded = new Promise((resolve, reject) => {
      this.toggle('.portfolio-content', resolve)
    })

    faded.then(() => {
      $('.portfolio-content').toggle();
    })
    .then(() => {
      $(event.target).addClass('active');
    })
    .then(() => {
      var t = setInterval( function() {
        $("#carousel ul").animate({marginLeft: -480}, 2000 , function() {
          $(this).find("li:last").after($(this).find("li:first"));
          $(this).css({marginLeft: 0});
        })
      }, 2500);
    })
    .catch((err) => {
      console.error(err)
    })

    // this.toggle('.portfolio-content')
    //
    // $(event.target).addClass('active');
    // $('.portfolio-content').toggle();

    // Set the interval to be 2.5 seconds
  },

  loadContact() {
    this.toggle()

    $(event.target).addClass('active');
    console.log("contact")
  }
}
