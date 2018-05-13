import $ from 'jquery';

class ticket {
  constructor() {
    this.events();
  }

  events() {
    $('.ticket').click(function(){
      $('.ticket').removeClass('ticket--active');
      $(this).addClass('ticket--active');
    }).first().click();

  }


}


export default ticket;
