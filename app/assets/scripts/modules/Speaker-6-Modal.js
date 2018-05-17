import $ from 'jquery';

class Speaker6Modal{
  constructor(){
    this.openModalButton = $('.open-modal-6');
    this.modal = $('.speaker-6-modal');
    this.closeModalButton = $('.speaker-6-modal__close');
    this.events();
  }

  events(){
    //clicking the open modal button
    this.openModalButton.click(this.openModal.bind(this));

    //clicking the x close modal button
    this.closeModalButton.click(this.closeModal.bind(this));

    //pushes any key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e){
    if(e.keyCode==27){
      this.closeModal();
    }
  }

  openModal(){
    this.modal.addClass('speaker-6-modal--is-visible');
    return false;
  }

  closeModal(){
    this.modal.removeClass('speaker-6-modal--is-visible');
  }


}

export default Speaker6Modal;
