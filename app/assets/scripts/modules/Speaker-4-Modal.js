import $ from 'jquery';

class Speaker4Modal{
  constructor(){
    this.openModalButton = $('.open-modal-4');
    this.modal = $('.speaker-4-modal');
    this.closeModalButton = $('.speaker-4-modal__close');
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
    this.modal.addClass('speaker-4-modal--is-visible');
    return false;
  }

  closeModal(){
    this.modal.removeClass('speaker-4-modal--is-visible');
  }


}

export default Speaker4Modal;
