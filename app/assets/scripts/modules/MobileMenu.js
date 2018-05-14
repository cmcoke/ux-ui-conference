import $ from 'jquery';

class MobileMenu{
  constructor(){
   this.menuIcon = $(".mobile-menu-button");
   this.hamburgerIcon = $(".mobile-menu-button__hamburger");
   this.siteNav = $(".site-nav");
   this.events();
  }

  events(){
    this.menuIcon.click(this.toogleTheMenu.bind(this));
  }

  toogleTheMenu(){
    this.siteNav.toggleClass("site-nav--is-open");
    this.hamburgerIcon.toggleClass("site-nav--is-open");
  }

}


export default MobileMenu;
