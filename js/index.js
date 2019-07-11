        $(document).ready(function() {
            var myCenter = new google.maps.LatLng(51.508530, -0.076132);

            function initialize() {
                var mapProp = {
                    center: myCenter,
                    zoom: 8,
                    scrollwheel: false,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                var map = new google.maps.Map(document.getElementById("contact_map"), mapProp);
                var icon = {
                    url: 'images/map_pin.png'
                };
                var marker = new google.maps.Marker({
                    position: myCenter,
                    map: map,
                    title: 'Template Bundle',
                    icon: icon
                });
                marker.setMap(map);
                var infowindow = new google.maps.InfoWindow({
                    content: "<span> Template Bundle </span>"
                });
                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.open(map, marker);
                });
            }
            google.maps.event.addDomListener(window, 'load', initialize);
        });