<script>
  import { thumbnail } from './wikimedia'

  let { media, width = 500, ratio = '4 / 3' } = $props()

  // Chargement robuste : vignette (légère) -> image directe pleine résolution -> placeholder
  let stage = $state('thumb')
  const src = $derived(stage === 'thumb' ? thumbnail(media?.url, width) : media?.url)

  function onError() {
    stage = stage === 'thumb' ? 'full' : 'failed'
  }
</script>

{#if media}
  <figure class="figure">
    {#if stage !== 'failed'}
      <img
        {src}
        alt={media.alt}
        loading="lazy"
        style="aspect-ratio: {ratio}"
        onerror={onError}
      />
    {:else}
      <div class="ph" style="aspect-ratio: {ratio}">🏔️ image indisponible</div>
    {/if}
    <figcaption class="small muted">
      {#if media.domainePublic}
        Photo : {media.auteur} · domaine public
      {:else}
        © {media.auteur} · {media.licence} ·
        <a href={media.pageUrl} target="_blank" rel="noopener">source</a>
      {/if}
    </figcaption>
  </figure>
{/if}

<style>
  .figure { margin: 0; }
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 12px;
    background: var(--surface-2);
  }
  .ph {
    width: 100%;
    display: grid;
    place-items: center;
    border-radius: 12px;
    background: var(--surface-2);
    color: var(--ink-soft);
    font-size: 0.9rem;
  }
  figcaption { margin-top: 0.3em; }
</style>
