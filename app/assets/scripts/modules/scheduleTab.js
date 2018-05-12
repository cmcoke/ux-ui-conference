import $ from 'jquery';

class ScheduleTab {
  constructor() {
    this.ScheduleTab = $('.schedule__tab');
    this.ScheduleNav = $(".schedule__tab-nav");
    this.events();
  }

  events() {
    this.ScheduleTab.hide();
    this.ScheduleNav.find('a').on('click', function(e) {
      e.preventDefault();
      $('.schedule__tab-nav').find('.current').removeClass('current');
      $(this).addClass('current');

      var newTab = $(this.hash);
      var newHeight = newTab.height();
      var container = $(".schedule__tab-container");

      newTab.siblings(":visible").fadeOut('fast');
      container.animate({'height' : newHeight}, 300, function(){
        newTab.fadeIn('fast');
      });


    }).first().click();
  }

}

export default ScheduleTab;
