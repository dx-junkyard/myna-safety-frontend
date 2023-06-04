<script lang="ts">
import { Loader } from '@googlemaps/js-api-loader';

export default {
  name: 'GoogleMap',
  
  data : function(){
    return {
      map: null,
      google: null,
      
    }
  },
  methods : {},
  mounted : function(){
    new Loader({
		apiKey: import.meta.env.VITE_MAP_API,
		version: 'frozen',
		libraries: ["places", "drawing", "geometry", "visualization"],
		language: 'ja',
    })
    .load()
    .then((google) => {


// The location of ueno
const ueno = { lat: 35.712223, lng: 139.771118 };
// The map, centered at ueno
const map = new google.maps.Map(
  document.getElementById("map") as HTMLElement,
  {
    zoom: 15,
    center: ueno,
  }
);
const request = {
    placeId: "ChIJCwbTk56OGGARRJJPe22ziWw",
    fields: ["name", "formatted_address", "place_id", "geometry"],
  };
  const infowindow = new google.maps.InfoWindow();
  const service = new google.maps.places.PlacesService(map);
// The marker, positioned at ueno
const marker = new google.maps.Marker({
  position: ueno,
  map: map,
});

const beaches = [
    ["Bondi Beach", 35.712223, 139.771118],
    ["Bondi Beach1", 35.712223, 139.781119],
    ["Bondi Beach2", 35.712223, 139.791120],
    ["Bondi Beach3", 35.712223, 139.761121],
    ["Bondi Beach4", 35.712223, 139.751122],
];

// マーカー一つだと詳細表示できるけど、複数の時のやりかたがまだできていない
function setMarkers(map) {
        const image = {
          url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
          size: new google.maps.Size(20, 32),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(0, 32),
        };
        const shape = {
          coords: [1, 1, 1, 20, 18, 20, 18, 1],
          type: "poly",
        };

        for (let i = 0; i < beaches.length; i++) {
          const beach = beaches[i];

          new google.maps.Marker({
            position: { lat: beach[1], lng: beach[2] },
            map,
            //icon: image,
            //shape: shape,
            //title: beach[0],
            //zIndex: beach[3],
          });
        }
      }
setMarkers(map);
service.getDetails(request, (place, status) => {
    if (
    status === google.maps.places.PlacesServiceStatus.OK &&
    place &&
    place.geometry &&
    place.geometry.location
    ) {
    const marker = new google.maps.Marker({
        map,
        position: place.geometry.location,
    });

    google.maps.event.addListener(marker, "click", () => {
        const content = document.createElement("div");
        const nameElement = document.createElement("h2");

        nameElement.textContent = place.name;
        content.appendChild(nameElement);

        const placeIdElement = document.createElement("p");

        placeIdElement.textContent = place.place_id;
        content.appendChild(placeIdElement);

        const placeAddressElement = document.createElement("p");

        placeAddressElement.textContent = place.formatted_address;
        content.appendChild(placeAddressElement);
        infowindow.setContent(content);
        infowindow.open(map, marker);
    });
    }
});
window.map = map;
}

    )
    .catch(e => {
      console.error(e);
    });
  },
}
</script>

<template>
    <div id="map"
      class="pa-0"
    >
      google map
    </div>
    <!--<iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d810.3326425623934!2d139.70214685694324!3d35.67022196781234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQwJzEyLjgiTiAxMznCsDQyJzA5LjciRQ!5e0!3m2!1sja!2sjp!4v1571820504380!5m2!1sja!2sjp" 
        width="100%"
        frameborder="0"
        style="border:0; height: 100vh;"></iframe>-->
</template>

<style>
#map {
  height: 100vh;
  width: 100%;
}
</style>