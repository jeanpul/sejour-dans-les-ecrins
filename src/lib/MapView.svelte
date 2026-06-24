<script>
  import { onMount, onDestroy } from 'svelte'
  import L from 'leaflet'
  import 'leaflet/dist/leaflet.css'
  import { getGpxRaw, gpxToGeoJson } from './gpx.js'

  let { rando } = $props()
  let el
  let map
  let hasTrace = $state(false)

  onMount(() => {
    const ign = L.tileLayer(
      'https://data.geopf.fr/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&STYLE=normal&TILEMATRIXSET=PM&FORMAT=image/png&LAYER=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}',
      { maxZoom: 18, attribution: 'Carte © IGN-F / Géoplateforme' }
    )
    const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap',
    })

    map = L.map(el, { layers: [ign], scrollWheelZoom: false })

    let switched = false
    ign.on('tileerror', () => {
      if (!switched) {
        switched = true
        map.addLayer(osm)
        map.removeLayer(ign)
      }
    })

    const start = rando.depart.latlng
    const pin = L.divIcon({
      className: 'map-pin',
      html: '📍',
      iconSize: [28, 28],
      iconAnchor: [14, 28],
    })
    L.marker(start, { icon: pin }).addTo(map).bindPopup(rando.depart.nom)

    const geo = gpxToGeoJson(getGpxRaw(rando.gpxId))
    if (geo && geo.features && geo.features.length) {
      const layer = L.geoJSON(geo, {
        style: { color: '#c2410c', weight: 4 },
        // Les waypoints GPX -> petits cercles (évite l'icône marqueur par défaut
        // dont les images PNG ne sont pas embarquées dans le bundle).
        pointToLayer: (feature, latlng) =>
          L.circleMarker(latlng, {
            radius: 4,
            color: '#1d3b53',
            weight: 2,
            fillColor: '#fff',
            fillOpacity: 1,
          }),
      }).addTo(map)
      try {
        map.fitBounds(layer.getBounds(), { padding: [20, 20] })
        hasTrace = true
      } catch {
        map.setView(start, 13)
      }
    } else {
      map.setView(start, 13)
    }

    setTimeout(() => map && map.invalidateSize(), 0)
  })

  onDestroy(() => {
    if (map) map.remove()
  })
</script>

<div class="map" bind:this={el}></div>
{#if !hasTrace}
  <p class="small muted trace-note">
    Tracé GPX à ajouter — pour l’instant seul le départ est marqué. Récupère la trace
    via le lien topo ci-dessous.
  </p>
{/if}

<style>
  .map {
    height: 240px;
    width: 100%;
    border-radius: 12px;
    z-index: 0;
  }
  .trace-note { margin-top: 0.4em; }
  :global(.map-pin) {
    font-size: 22px;
    line-height: 1;
    text-align: center;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.4));
  }
</style>
