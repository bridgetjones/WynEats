function mapInit() {};
var service;
var infowindow;
var gmarkers = new Array();
var marker;
const list = document.getElementById('marker_list')
var ol;
const array = new Array();
const map_array= new Array();
$(window).on('load', function(){

  // var QueryString = function () {
  // // This function is anonymous, is executed immediately and
  // // the return value is assigned to QueryString!
  // var query_string = {};
  // var query = window.location.search.substring(1);
  // var vars = query.split("&");
  // for (var i=0;i<vars.length;i++) {
  //   var pair = vars[i].split("=");
  //       // If first entry with this name
  //   if (typeof query_string[pair[0]] === "undefined") {
  //     query_string[pair[0]] = decodeURIComponent(pair[1]);
  //       // If second entry with this name
  //   } else if (typeof query_string[pair[0]] === "string") {
  //     var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
  //     query_string[pair[0]] = arr;
  //       // If third or later entry with this name
  //   } else {
  //     query_string[pair[0]].push(decodeURIComponent(pair[1]));
  //   }
  // }
  // return query_string;
  // }();
  // var input_query = QueryString.EnterSite.split('+').join(' ')
  // console.log(input_query);
  
  $(function() {
    console.log('script loaded');


    function mapInit() {

      var mycenter = {lat: 25.8028250, lng: -80.2043540};
      var bounds = new google.maps.LatLngBounds();
        map=new google.maps.Map($("#googleMap")[0], {
        zoom: 14,
        center: mycenter
      });


      infowindow = new google.maps.InfoWindow();
      service = new google.maps.places.PlacesService(map);
      service.textSearch({
        query: [searchTerm],
        location: mycenter,
        radius: 500,
        opennow: true,
        type: ['restaurant, grocery, bakery, cafe, meal_delivery, meal_takeaway']
      }, callback);

      function process(collection){
          console.log(collection);
      };
      function callback(place, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < place.length; i++) {
            createMarker(place[i]);
            array.push(place[i]);
          }
        }


        console.log(array[1]);
        for(i=0;i<array.length;i++){
          map_array.push(array[i]);
        }
        //do something with the arrays
        process(map_array);
      };
      $('#marker_list').on( "click", 'ul', function() {
        console.log("fuckinglink");
        console.dir(this.textContent);
      });

      function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
          map: map,
          customInfo: place.name,
          position: place.geometry.location
        });
        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
          " " + place.formatted_address + '</div>');
          console.log(marker.customInfo);
          infowindow.open(map, this);
          $('ol').append('<ul id="name_list">'+ 'blah blah' + '</ul>');
          $('ol').children().remove()
          $('ol').append('<ul id="name_list">'+ infowindow.content + '</ul>');
          $('#mbody_text').val(place.name + " " + place.formatted_address);
        });
        gmarkers.push(marker);
        function removeMarkers(gmarkers){
          for(i=0; i<gmarkers.length; i++){
            gmarkers[i].setMap(null);
          }
        }

        // $('#google_search').keypress(function(event){
        //   var keycode = (event.keyCode ? event.keyCode : event.which);
        //   if(keycode == 13){
        //   removeMarkers(gmarkers);
        //   console.log($('#google_search').val());
        //   service.textSearch({
        //     query: [$('#google_search').val(), "in wynwood"],
        //     location: mycenter,
        //     radius: 450,
        //     opennow: true,
        //     type: ['restaurant, bar, grocery, bakery, cafe, meal_delivery, meal_takeaway']
        //   }, callback);
        //   $('#name_sender').val();
        //   event.preventDefault();
        // }});

      };
    };
    google.maps.event.addDomListener(window, 'load', mapInit());
  });
});

// $('#mapbutton').click(function (){
//
//   $('#mapbutton').hide();
//   $hiddenInput.value = "";
// //   $
// //   $
// }() {
//
// })
