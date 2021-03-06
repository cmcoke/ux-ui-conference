import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';


class StickyHeader{
  constructor(){
    this.lazyImages = $('.lazyload');
    this.siteHeader = $('.site-header');
    this.headerTriggerElement = $('.hero__small-title');
    this.createHeaderWayPoint();
    this.PageSections = $('.page-section, .current-section');
    this.headerLinks = $('.site-nav a');
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
    this.refreshWayPoints();
  }


  refreshWayPoints(){
    this.lazyImages.on('load', function(){
      Waypoint.refreshAll();
    });
  }


  addSmoothScrolling(){
    this.headerLinks.smoothScroll();
  }

  createHeaderWayPoint(){
    var that = this;
    new Waypoint({
      element: this.headerTriggerElement[0],
      handler: function(direction){
        if(direction == 'down'){
          that.siteHeader.addClass('site-header--dark');
        } else {
          that.siteHeader.removeClass('site-header--dark');
        }
      }
    });
  }

  createPageSectionWaypoints(){
    var that = this;
    this.PageSections.each(function(){
      var currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: function(direction){
          if(direction=='down'){
            var matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
            that.headerLinks.removeClass('is-current-link');
            $(matchingHeaderLink).addClass('is-current-link');
          }
        },
        offset:'18%'
      });
      new Waypoint({
        element: currentPageSection,
        handler: function(direction){
          if(direction=='up'){
            var matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
            that.headerLinks.removeClass('is-current-link');
            $(matchingHeaderLink).addClass('is-current-link');
          }
        },
        offset:'-11%'
      });
    });
  }
}

export default StickyHeader;
