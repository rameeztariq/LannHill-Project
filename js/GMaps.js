
var PropertyList = [["Vila Lantana 2 Al Barsha", 25.0929764, 55.1814362, "AED 270,000","https://s3-ap-southeast-1.amazonaws.com/mycrm-pro-accounts-v2/property/full/664/9JqJh61v4G1xvnix.jpg","Special Offer"],    
    ["Madinat Al Souq", 25.1333574, 55.1845128, "AED 370,000","https://s3-ap-southeast-1.amazonaws.com/mycrm-pro-accounts-v2/property/full/664/QFjDIfIftXAIO95M.jpg","Hot Deal"],        
    ["Shangrila Hotel", 25.2081988, 55.2696503, "AED 400,000","https://s3-ap-southeast-1.amazonaws.com/mycrm-pro-accounts-v2/property/full/664/P244yImcyOr8gfG8.jpg","Featured Property"]];
function LoadMap() {

    var map = new google.maps.Map(document.getElementById('map'),
        {
            zoom: 10,
            draggable: true,
            scaleControl: true,
            scrollwheel: false,
            streetViewControl: true,
            panControl: true,
            zoomControl: true,            
            center: new google.maps.LatLng(25.2048, 55.2708),
            mapTypeId: google.maps.MapTypeId.ROADMAP,            
        });


    var infowindow = new google.maps.InfoWindow();
    var marker, i;    
    var markericon = 'https://raw.githubusercontent.com/rameeztariq/LannHill-Project/master/images/marker.png';
    for (i = 0; i < PropertyList.length; i++) {          
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(PropertyList[i][1], PropertyList[i][2]),
            map: map,
            label: PropertyList[i][3],
            icon: markericon,
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                var myHtml = null;               
                infowindow.maxWidth = 300;
                myHtml = '<div class="col-md-12 markerPopUp"><span class="carousel-header">' + PropertyList[i][5] + '</span>';
                myHtml = myHtml + '<div class="col-md-12"><img src="' + PropertyList[i][4] +'" class="img-responsive" /></div>';
                myHtml = myHtml + '<div class="innertext"><h4>' + PropertyList[i][3] + '/-</h4><p>' + PropertyList[i][0] + '</p>';
                myHtml = myHtml + '<p><div class="row col-md-12"><div class="col-md-6"><span>Call </span><span class="glyphicon glyphicon-earphone"></span></div><div class="row col-md-6"><a href="mailto:abc@demo.com">Email</a><span class="glyphicon glyphicon-envelope"></span></div></div></p></div></div>'

                infowindow.setContent(myHtml);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}
