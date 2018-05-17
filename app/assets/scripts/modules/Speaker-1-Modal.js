import $ from 'jquery';

class Speaker1Modal{
  constructor(){
    this.openModalButton = $('.open-modal-1');
    this.modal = $('.speaker-1-modal');
    this.closeModalButton = $('.speaker-1-modal__close');
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
    this.modal.addClass('speaker-1-modal--is-visible');
    return false;
  }

  closeModal(){
    this.modal.removeClass('speaker-1-modal--is-visible');
  }


}

export default Speaker1Modal;
