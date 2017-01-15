$(function() {
  const $nav = $('nav');

  $nav.click( function(event) {
    switch (event.target.className) {
      case 'about':
        if (uiObject.preventReload('about')) break;

        uiObject.loadAbout();
        break;
      case 'portfolio':
        if (uiObject.preventReload('portfolio')) break;

        uiObject.loadPortfolio();
        break;
      case 'contact':
        if (uiObject.preventReload('contact')) break;

        uiObject.loadContact();
        break;
      case 'logo':
        break;
      default:
        console.log('default')
    }
  });
})

const stateObject = {
  currentState: '',

  setState(state) {
    this.currentState = state;
  }
}

const uiObject = {
  preventReload(selectedState) {
    if (stateObject.currentState == selectedState) {
      return true
    } else {
      stateObject.setState(selectedState);
      return false
    }
  },
  toggle(fader, target, resolve) {
    $(event.target).closest('ul').children('.active').removeClass('active');

    if ($('section:visible').length) {
      $('section:visible').fadeToggle('fast', () => {
        if ($(target).is('span')) {
          $(target).parent().addClass('active');
        } else {
          $(target).addClass('active');
        }

        $(fader).fadeToggle('fast', () => {
          resolve()
        });
      });
    } else {
      if ($(target).is('span')) {
        $(target).parent().addClass('active');
      } else {
        $(target).addClass('active');
      }

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
