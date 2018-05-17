import $ from 'jquery';

class Speaker2Modal{
  constructor(){
    this.openModalButton = $('.open-modal-2');
    this.modal = $('.speaker-2-modal');
    this.closeModalButton = $('.speaker-2-modal__close');
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
    this.modal.addClass('speaker-2-modal--is-visible');
    return false;
  }

  closeModal(){
    this.modal.removeClass('speaker-2-modal--is-visible');
  }


}

export default Speaker2Modal;
