<script>
  import HikeCard from './HikeCard.svelte'

  let { jour } = $props()

  // Un jour propose un "choix" si une rando est marquée non recommandée (variante).
  const choice = $derived(jour.randos.some((r) => r.recommandee === false))
</script>

<section class="page stack">
  <header>
    <p class="date small muted">{jour.date}</p>
    <h1>{jour.titre}</h1>
  </header>

  {#if jour.transport}
    <p class="small transport">🚗 {jour.transport}</p>
  {/if}

  <p>{jour.resume}</p>

  {#if jour.piqueNique}
    <p class="small picnic">🥪 {jour.piqueNique}</p>
  {/if}

  {#each jour.randos as rando (rando.id)}
    <HikeCard {rando} {choice} />
  {/each}
</section>

<style>
  .date { margin: 0 0 0.1em; text-transform: capitalize; }
  .transport,
  .picnic {
    background: var(--surface-2);
    padding: 0.5em 0.7em;
    border-radius: 8px;
    margin: 0;
  }
</style>
