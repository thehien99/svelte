<script>
  import {onMount, onDestroy} from "svelte";
  import {browser} from "$app/environment";
  export let address;
  let mapElement;
  let map;

  onMount(async () => {
    if (browser) {
      const leaflet = await import("leaflet");
      map = leaflet.map(mapElement).setView([0, 0], 13);
      leaflet
        .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        })
        .addTo(map);

      var geocodeUrl =
        "https://nominatim.openstreetmap.org/search?format=json&q=" +
        encodeURIComponent(address);
      fetch(geocodeUrl)
        .then((res) => res.json())
        .then((data) => {
          if (data.length > 0) {
            var latlng = [parseFloat(data[0].lat), parseFloat(data[0].lon)];
            leaflet
              .marker([latlng[0], latlng[1]])
              .addTo(map)
              .bindPopup(address)
              .openPopup();
            map.on("load", function (e) {
              leaflet.setView([latlng[0], latlng[1]], 13);
            });
          }
        })
        .catch((error) => console.log(error));
      // function success(address) {
      //   const lat = address.coords.latitude;
      //   const long = address.coords.longitude;
      //   leaflet
      //     .marker([lat, long])
      //     .addTo(map)
      //     .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
      //     .openPopup();
      // }
    }
  });

  onDestroy(async () => {
    if (map) {
      console.log("Unloading Leaflet map.");
      map.remove();
    }
  });
</script>

<main>
  <div bind:this={mapElement} />
</main>

<style>
  @import "leaflet/dist/leaflet.css";
  main div {
    height: 800px;
  }
</style>
