// function initialize() {
//     var mapProp = {
//         center: new google.maps.LatLng(36.109935,-115.175416),
//         zoom:14,
//         mapTypeId:google.maps.MapTypeId.ROADMAP
//     };
//     var map = new google.maps.Map(document.getElementById("map"),mapProp);
//     var cosmo = new google.maps.Marker({
//         position: {lat:36.109935, lng: -115.175416},
//         title: 'The Cosmopolitan',
//         map: map
//     })
//     // var circus = new google.maps.Marker({
//     //     position: {lat:36.137845, lng: -115.165436},
//     //     title: 'Circus Circus',
//     //     map: map
//     // })
//     // var westin = new google.maps.Marker({
//     //     position: {lat:36.137845, lng: -115.165436},
//     //     title: 'The Terrible',
//     //     map: map
//     // })
//     console.log('sup im maps');
// }
// google.maps.event.addDomListener(window, 'load', initialize);
function initialize() {
  var myLatLng = {lat:47.611780, lng: -122.289885}
  var mapProp = {
    center:new google.maps.LatLng(47.611780,-122.289885),
    zoom:16,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
  var marker = new google.maps.Marker({
    position: myLatLng,
    title: 'Hello World',
    map: map
  })
}
google.maps.event.addDomListener(window, 'load', initialize);
