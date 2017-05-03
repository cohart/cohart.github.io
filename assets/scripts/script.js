$(function() {
  const $nav = $('nav');

  $nav.click( (event) => {
    switch (event.target.className) {
      case 'about':
        if (uiObject.preventReload('about')) break;

        uiObject.loadAbout();
        break;
      case 'experience':
        if (uiObject.preventReload('experience')) break;

        uiObject.loadExperience();
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
});

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

    faded.then(() => {
    })
    .catch((err) => {
      console.error(err)
    })
  },

  loadExperience() {
    var target = event.target;
    var faded = new Promise((resolve, reject) => {
      this.toggle('.exp-content', target, resolve)
    })

    faded.then(() => {
    })
    .catch((err) => {
      console.error(err)
    })
  },

  loadContact() {
    var target = event.target;
    var faded = new Promise((resolve, reject) => {
      this.toggle('.contact-content', target, resolve)
    })

    faded.catch((err) => {
      console.error(err)
    })
  }
}
