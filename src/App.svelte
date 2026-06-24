<script>
  import sejour from './data/sejour.ts'
  import Overview from './lib/Overview.svelte'
  import DayCard from './lib/DayCard.svelte'
  import Practical from './lib/Practical.svelte'

  let section = $state('apercu')

  // Onglet court à partir de la date ("Vendredi 21 août" -> "Ven 21")
  function shortLabel(date) {
    const w = date.split(' ')
    return `${w[0].slice(0, 3)} ${w[1]}`
  }

  const tabs = [
    { id: 'apercu', label: 'Aperçu', ico: '🏔️' },
    ...sejour.jours.map((j) => ({ id: j.id, label: shortLabel(j.date), ico: '🥾' })),
    { id: 'infos', label: 'Infos', ico: '📍' },
  ]

  const currentJour = $derived(sejour.jours.find((j) => j.id === section))

  function go(id) {
    section = id
    window.scrollTo(0, 0)
  }
</script>

<main>
  {#if section === 'apercu'}
    <Overview {sejour} onGo={go} />
  {:else if currentJour}
    <DayCard jour={currentJour} />
  {:else if section === 'infos'}
    <Practical {sejour} />
  {/if}
</main>

<nav class="tabbar">
  {#each tabs as t (t.id)}
    <button aria-current={section === t.id} onclick={() => go(t.id)}>
      <span class="ico">{t.ico}</span>
      {t.label}
    </button>
  {/each}
</nav>
