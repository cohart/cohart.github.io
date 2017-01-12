$(function() {
  const $nav = $('nav');

  $nav.click(function(event) {
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
  toggle() {
    $(event.target).parent().children('.active').removeClass('active');

    $('section:visible').fadeToggle('fast');
  },

  loadAbout() {
    this.toggle()

    $(event.target).addClass('active');
    $('.about-content').fadeToggle('fast');
  },

  loadPortfolio() {
    this.toggle()

    $(event.target).addClass('active');
    // $('.about-content').toggle();
  },

  loadContact() {
    this.toggle()

    $(event.target).addClass('active');
    console.log("contact")
  }
}
