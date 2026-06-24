<script>
  import Figure from './Figure.svelte'

  let { sejour, onGo } = $props()
</script>

<section class="page stack">
  <Figure media={sejour.banniere} ratio="16 / 10" width={1200} />

  <header>
    <h1>{sejour.titre}</h1>
    <p class="sub">{sejour.sousTitre}</p>
    <p class="meta small">
      📅 {sejour.dates}<br />
      📍 {sejour.base}<br />
      🚗 Depuis {sejour.depuis}
    </p>
  </header>

  <p>{sejour.intro}</p>

  <p class="small note">🚗 {sejour.voiture}</p>

  <h2>Le programme</h2>
  {#each sejour.jours as jour (jour.id)}
    <button class="day card" onclick={() => onGo(jour.id)}>
      <span class="day-date small muted">{jour.date}</span>
      <span class="day-title">{jour.titre}</span>
      <span class="day-resume small muted">{jour.resume}</span>
      <span class="go">Voir le détail →</span>
    </button>
  {/each}
</section>

<style>
  .sub { font-size: 1.05rem; color: var(--brand-2); font-weight: 600; margin: 0 0 0.5em; }
  .meta { line-height: 1.7; }
  .note {
    background: var(--surface-2);
    padding: 0.6em 0.8em;
    border-radius: 8px;
  }
  .day {
    display: flex;
    flex-direction: column;
    gap: 0.25em;
    text-align: left;
    padding: 0.9rem;
    width: 100%;
    cursor: pointer;
  }
  .day-date { text-transform: capitalize; }
  .day-title { font-weight: 700; font-size: 1.05rem; color: var(--ink); }
  .go { color: var(--brand-2); font-weight: 600; font-size: 0.9rem; margin-top: 0.2em; }
</style>
