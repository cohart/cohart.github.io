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
  toggle(fader, target, resolve) {
    $(event.target).parent().children('.active').removeClass('active');
    // NEEDS A PROMISE
    if ($('section:visible').length) {
      $('section:visible').fadeToggle('fast', () => {
        $(target).addClass('active');

        $(fader).fadeToggle('fast', () => {
          resolve()
        });
      });
    } else {
      $(target).addClass('active');
      resolve($(fader).fadeToggle('fast'))
    }
  },

  loadAbout() {
    var target = event.target;
    var faded = new Promise((resolve, reject) => {
      this.toggle('.about-content', target, resolve)
    })

    faded.catch((err) => {
      console.error(err)
    })
  },

  loadPortfolio() {
    var target = event.target;

    var faded = new Promise((resolve, reject) => {
      this.toggle('.portfolio-content', target, resolve)
    })

    faded.then(() => {
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
  },

  loadContact() {
    this.toggle()

    $(event.target).addClass('active');
    console.log("contact")
  }
}
