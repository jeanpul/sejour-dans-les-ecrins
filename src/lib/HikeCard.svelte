<script>
  import Figure from './Figure.svelte'
  import MapView from './MapView.svelte'

  let { rando, choice = false } = $props()

  const alert = $derived(!!(rando.statut && rando.statut.includes('⚠️')))
</script>

<article class="card hike">
  {#if rando.images && rando.images.length}
    <Figure media={rando.images[0]} ratio="16 / 9" />
  {/if}

  <div class="body stack">
    <header class="head">
      <h3>{rando.nom}</h3>
      {#if choice && rando.recommandee}
        <span class="badge reco">Recommandée</span>
      {:else if choice && rando.recommandee === false}
        <span class="badge alt">Alternative</span>
      {/if}
    </header>

    <ul class="stats">
      <li><span class="k">Distance</span><span class="v">{rando.distanceKm}</span></li>
      <li><span class="k">Dénivelé +</span><span class="v">{rando.deniveleM}</span></li>
      <li><span class="k">Durée</span><span class="v">{rando.dureeH}</span></li>
      <li><span class="k">Type</span><span class="v">{rando.type}</span></li>
      <li><span class="k">Niveau</span><span class="v">{rando.niveau}</span></li>
    </ul>

    <p>{rando.interet}</p>

    <p class="small">
      <strong>Départ :</strong> {rando.depart.nom}
      {#if rando.depart.acces}<br /><span class="muted">{rando.depart.acces}</span>{/if}
    </p>

    {#if rando.statut}
      <p class="small" class:note-warn={alert}>{rando.statut}</p>
    {/if}

    <MapView {rando} />

    {#if rando.topoUrl}
      <div class="actions">
        <a class="action" href={rando.topoUrl} target="_blank" rel="noopener">
          🗺️ Fiche topo & GPX
        </a>
      </div>
    {/if}
  </div>
</article>

<style>
  .hike { padding: 0; }
  .body { padding: 0.9rem; }
  .head {
    display: flex;
    align-items: center;
    gap: 0.5em;
    justify-content: space-between;
  }
  .head h3 { margin: 0; }
  .stats {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.4em 0.8em;
  }
  .stats li { display: flex; flex-direction: column; }
  .stats .k {
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    color: var(--ink-soft);
  }
  .stats .v { font-weight: 600; }
</style>
