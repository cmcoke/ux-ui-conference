window.initMap = function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 34.0433455,
      lng: -118.2697967
    },
    zoom: 17,
    styles: [{
        "featureType": "all",
        "stylers": [{
            "saturation": 0
          },
          {
            "hue": "#e7ecf0"
          }
        ]
      },
      {
        "featureType": "road",
        "stylers": [{
          "saturation": -70
        }]
      },
      {
        "featureType": "transit",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "poi",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "water",
        "stylers": [{
            "visibility": "simplified"
          },
          {
            "saturation": -60
          }
        ]
      }
    ]

  });

  var marker = new google.maps.Marker({
    position: {
      lat: 34.0433455,
      lng: -118.2697967
    },
    map: map,
    icon: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png'
  });

}

export default initMap;
