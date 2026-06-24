<script>
  import { telHref, mapsHref } from './links.js'

  let { sejour } = $props()
</script>

{#snippet lieuCard(lieu, primary = false)}
  <article class="card lieu" class:primary>
    <h3>{lieu.nom}</h3>
    <p class="small muted type">{lieu.type}</p>
    {#if lieu.adresse}<p class="small">📍 {lieu.adresse}</p>{/if}
    {#if lieu.demiPension}<p class="small">🍽️ Demi-pension : {lieu.demiPension}</p>{/if}
    {#if lieu.prix}<p class="small">💶 {lieu.prix}</p>{/if}
    {#if lieu.note}<p class="small">{lieu.note}</p>{/if}

    <div class="actions">
      {#if lieu.tel}
        <a class="action primary" href={telHref(lieu.tel)}>📞 {lieu.tel}</a>
      {/if}
      {#if lieu.reservationUrl}
        <a class="action" href={lieu.reservationUrl} target="_blank" rel="noopener">
          🔗 Réserver / site
        </a>
      {/if}
      {#if lieu.adresse || lieu.latlng}
        <a class="action" href={mapsHref(lieu)} target="_blank" rel="noopener">🧭 Itinéraire</a>
      {/if}
    </div>

    {#if !lieu.tel && lieu.telFiable !== true}
      <p class="small note-warn">Téléphone à vérifier (via l’Office de Tourisme).</p>
    {/if}
    {#if lieu.fiabilite}
      <p class="small note-warn">⚠️ {lieu.fiabilite}</p>
    {/if}
  </article>
{/snippet}

<section class="page stack">
  <header>
    <h1>Infos pratiques</h1>
    <p class="muted small">
      Disponibilités, tarifs et téléphones sont à confirmer avant le départ.
    </p>
  </header>

  <h2>Hébergement</h2>
  {@render lieuCard(sejour.hebergement, true)}

  <h2>Alternatives</h2>
  {#each sejour.alternatives as lieu (lieu.nom)}
    {@render lieuCard(lieu)}
  {/each}

  <h2>Contacts utiles</h2>
  {#each sejour.contacts as lieu (lieu.nom)}
    {@render lieuCard(lieu)}
  {/each}
</section>

<style>
  .lieu { padding: 0.9rem; }
  .lieu h3 { margin-bottom: 0.1em; }
  .lieu .type { margin-top: 0; }
  .lieu.primary { border-color: var(--brand-2); border-width: 2px; }
  .lieu .actions { margin-top: 0.6em; }
</style>
