import type { Sejour, Media } from './types'

// --- Médias (Wikimedia Commons, vérifiés en exploration) ---------------------
const imgMeije: Media = {
  url: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Lever_de_soleil_sur_la_Meije_-_Massif_des_Ecrins.jpg',
  alt: 'Lever de soleil sur la Meije, massif des Écrins',
  auteur: 'Romaric Juvanon',
  licence: 'CC BY-SA 4.0',
  pageUrl:
    'https://commons.wikimedia.org/wiki/File:Lever_de_soleil_sur_la_Meije_-_Massif_des_Ecrins.jpg',
}
const imgLaGrave: Media = {
  url: 'https://upload.wikimedia.org/wikipedia/commons/3/33/La_Grave_-531.jpg',
  alt: 'Le village de La Grave',
  auteur: 'MOSSOT',
  licence: 'CC BY 3.0',
  pageUrl: 'https://commons.wikimedia.org/wiki/File:La_Grave_-531.jpg',
}
const imgEmparis: Media = {
  url: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Emparis-_massif_de_la_Meije_depuis_le_lac_Noir.jpg',
  alt: 'La Meije se reflétant dans le Lac Noir, plateau d’Emparis',
  auteur: 'Eusebius',
  licence: 'CC BY 3.0',
  pageUrl:
    'https://commons.wikimedia.org/wiki/File:Emparis-_massif_de_la_Meije_depuis_le_lac_Noir.jpg',
}
const imgPontet: Media = {
  url: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Lac_du_Pontet_%2805%29.jpg',
  alt: 'Lac du Pontet, Villar-d’Arène',
  auteur: 'Christophe Boittet',
  licence: 'CC0 (domaine public)',
  pageUrl: 'https://commons.wikimedia.org/wiki/File:Lac_du_Pontet_(05).jpg',
  domainePublic: true,
}
const imgArsine: Media = {
  url: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Glacier_d%27Arsine_%28France%29.JPG',
  alt: 'Le glacier d’Arsine et son lac, parc national des Écrins',
  auteur: 'Milvus',
  licence: 'GFDL / CC BY-SA 3.0',
  pageUrl: "https://commons.wikimedia.org/wiki/File:Glacier_d'Arsine_(France).JPG",
}
const imgLauvitel: Media = {
  url: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Lac_Lauvitel_-_Massif_des_Ecrins.jpg',
  alt: 'Le lac du Lauvitel, massif des Écrins',
  auteur: 'Romaric Juvanon',
  licence: 'CC BY-SA 4.0',
  pageUrl:
    'https://commons.wikimedia.org/wiki/File:Lac_Lauvitel_-_Massif_des_Ecrins.jpg',
}

// --- Le séjour ---------------------------------------------------------------
const sejour: Sejour = {
  titre: 'Séjour dans les Écrins',
  sousTitre: 'La Grave & la Meije — escapade en amoureux',
  dates: 'Du vendredi 21 au dimanche 23 août 2026',
  base: 'La Grave / La Meije (Hautes-Alpes)',
  depuis: 'La Tour-du-Pin',
  voiture:
    'Base unique à La Grave (2 nuits). Les départs de rando sont à 10–20 min, et la dernière journée se fait sur le trajet du retour : un minimum de voiture.',
  intro:
    'Trois jours face à la Meije : une mise en jambes tranquille, une grande journée sur le plateau d’Emparis, puis un lac glaciaire avant de rentrer. Pique-nique le midi, dîner à l’hébergement.',
  banniere: imgMeije,

  jours: [
    {
      id: 'j1',
      date: 'Vendredi 21 août',
      titre: 'Arrivée & mise en jambes',
      resume:
        'Route le matin depuis La Tour-du-Pin (~3 h via Grenoble, Bourg-d’Oisans et le col du Lautaret). Installation à La Grave, puis après-midi facile autour du Chazelet, face à la Meije.',
      transport: 'La Tour-du-Pin → La Grave : ~3 h de route (arrivée en matinée).',
      piqueNique: 'Pique-nique au bord du lac du Pontet.',
      randos: [
        {
          id: 'pontet',
          nom: 'Lac du Pontet',
          niveau: 'Facile',
          distanceKm: '6,0 km (boucle) — variante courte ~3,8 km',
          deniveleM: '~224 m',
          dureeH: '~2 h 20',
          type: 'boucle',
          recommandee: true,
          depart: {
            nom: 'Parking du Chazelet (~1 800 m)',
            latlng: [45.0486, 6.3465],
            acces:
              'Depuis Villar-d’Arène, petite route goudronnée montant aux Cours puis au Chazelet.',
          },
          interet:
            'Lac turquoise face à la face nord de la Meije et au Goléon ; marmottes, buvette estivale au bord du lac.',
          gpxId: 'pontet',
          topoUrl:
            'https://www.visorando.com/randonnee-le-lac-du-pontet-et-l-aiguillon/',
          statut: 'Accessible (secteur La Grave / Villar-d’Arène, non touché par la crue 2024).',
          images: [imgPontet],
        },
        {
          id: 'oratoire',
          nom: 'Oratoire & Perchoir du Chazelet',
          niveau: 'Très facile',
          distanceKm: 'Quelques centaines de m (≈ 30 min via le GR54)',
          deniveleM: 'Négligeable',
          dureeH: '10–45 min',
          type: 'aller-retour',
          depart: {
            nom: 'Hameau du Chazelet (~1 834 m)',
            latlng: [45.0455, 6.3422],
            acces: '~10 min de voiture depuis La Grave.',
          },
          interet:
            'L’un des plus beaux panoramas des Alpes sur la face nord de la Meije ; table d’orientation et « Perchoir » suspendu. Parfait au coucher du soleil.',
          topoUrl:
            'https://www.lepetitoiseau.fr/le-perchoir-de-loratoire-du-chazelet-acces-libre-gratuit/',
          statut: 'Accès libre et gratuit.',
          images: [imgMeije],
        },
      ],
    },
    {
      id: 'j2',
      date: 'Samedi 22 août',
      titre: 'Grande journée — Plateau d’Emparis',
      resume:
        'La journée phare : montée sur le plateau d’Emparis jusqu’aux lacs Lérié et Noir, où la Meije se reflète dans l’eau. Panorama sur toute la chaîne.',
      transport: 'La Grave → parking du Chazelet : ~10 min.',
      piqueNique: 'Pique-nique au bord des lacs (baignade interdite, pas de feu).',
      randos: [
        {
          id: 'emparis',
          nom: 'Plateau d’Emparis — Lacs Lérié & Noir',
          niveau: 'Moyenne (longue, sans difficulté technique)',
          distanceKm: '16,8 km (boucle) — ~14,5 km en aller-retour',
          deniveleM: '~750 à 1 000 m (selon variante)',
          dureeH: '6 h à 7 h 40',
          type: 'boucle',
          recommandee: true,
          depart: {
            nom: 'Parking du Chazelet (~1 800 m)',
            latlng: [45.0486, 6.3465],
            acces: 'Route du Chazelet depuis Villar-d’Arène.',
          },
          interet:
            'La carte postale du secteur : la Meije se reflète dans le Lac Lérié (2 400 m) et le Lac Noir (2 450 m), à 10 min l’un de l’autre.',
          gpxId: 'emparis',
          topoUrl:
            'https://www.visorando.com/en/walk-plateau-d-emparis-lac-lerie-lac-noir/',
          statut: 'Accessible (secteur non touché par la crue 2024).',
          images: [imgEmparis],
        },
      ],
    },
    {
      id: 'j3',
      date: 'Dimanche 23 août',
      titre: 'Lac glaciaire & retour',
      resume:
        'Dernière rando avant la route du retour (le soir). Au choix : le lac glaciaire d’Arsine (recommandé, depuis Villar-d’Arène) ou, en option plus contrainte, le Lauvitel sur le chemin du retour.',
      transport:
        'Départ d’Arsine à ~15 min de La Grave ; retour vers La Tour-du-Pin en soirée.',
      piqueNique: 'Pique-nique au bord du lac.',
      randos: [
        {
          id: 'arsine',
          nom: 'Lac & col d’Arsine',
          niveau: 'Moyenne mais longue (grosse journée)',
          distanceKm: '~14,7 à 19 km (selon parking)',
          deniveleM: '~810 à 850 m',
          dureeH: '~6 h 30',
          type: 'aller-retour',
          recommandee: true,
          depart: {
            nom: 'Villar-d’Arène — Pied du Col (~1 650 m)',
            latlng: [45.0199, 6.3717],
            acces:
              'RD1091 jusqu’à Villar-d’Arène puis route du Pied du Col. ⚠️ Piste du parking haut dégradée : se garer en bas (fin du bitume), +30 min A/R.',
          },
          interet:
            'Cœur du parc des Écrins : lac du Glacier d’Arsine (2 465 m) né du recul du glacier, front glaciaire plongeant dans l’eau turquoise.',
          gpxId: 'arsine',
          topoUrl:
            'https://www.visorando.com/en/walk-lacs-du-glacier-d-arsine/',
          statut:
            'Accessible (RD1091, non touché par la crue). Piste d’accès au parking haut dégradée.',
          images: [imgArsine],
        },
        {
          id: 'lauvitel',
          nom: 'Lac du Lauvitel (option sur le retour)',
          niveau: 'Moyenne',
          distanceKm: '~6,1 km (boucle)',
          deniveleM: '~555 m',
          dureeH: '~3 h 20',
          type: 'boucle',
          recommandee: false,
          depart: {
            nom: 'La Danchère (~984 m), près de Bourg-d’Oisans',
            latlng: [44.9873, 6.0794],
            acces:
              '⚠️ Accès voiture coupé depuis la crue de juin 2024 (RD530 fermée). Navette gratuite depuis Bourg-d’Oisans (arrêt Les Ougiers) ou accès piéton via la télécabine de Venosc.',
          },
          interet:
            'Plus grand et plus profond lac des Écrins (~35 ha), entouré de falaises ; réserve intégrale sur une rive.',
          gpxId: 'lauvitel',
          topoUrl:
            'https://www.visorando.com/en/walk-le-lac-du-lauvitel-a-partir-de-la-danche/',
          statut:
            '⚠️ Accès voiture coupé (crue 2024) : navette obligatoire. Sentier parfois fermé par arrêté. À confirmer la veille.',
          images: [imgLauvitel],
        },
      ],
    },
  ],

  hebergement: {
    nom: 'Hôtel Le Castillan ⭐⭐⭐',
    type: 'Hôtel 3 étoiles avec restaurant (piscine, sauna)',
    adresse: 'Route des Grands Cols (RD1091), 05320 La Grave',
    latlng: [45.0454, 6.3076],
    tel: '04 76 79 90 04',
    telFiable: true,
    reservationUrl: 'https://www.le-castillan.com/',
    demiPension: 'Oui (chambre double en demi-pension)',
    prix: '~180 € / nuit chambre double en demi-pension',
    note: 'Établissement historique (depuis 1930), chambre privée, restaurant sur place.',
    fiabilite:
      'Tarif issu de la saison 2024/2025 — à confirmer pour le 21–22 août 2026 par téléphone. (Un 2ᵉ numéro 04 76 79 90 93 circule ; privilégier le site officiel.)',
  },

  alternatives: [
    {
      nom: 'Au Vieux Guide',
      type: 'Gîte-auberge (chambres privées) — La Grave',
      adresse: 'Le Village, 05320 La Grave',
      tel: '04 76 79 90 75',
      telFiable: true,
      reservationUrl: 'https://www.au-vieux-guide-grave.fr/chambre',
      demiPension: 'Oui — ~50 €/pers (chambre 2 pers)',
      note: 'Bon rapport qualité-prix pour un couple.',
      fiabilite: 'Tarifs à confirmer pour vos dates.',
    },
    {
      nom: 'Auberge Le Bec',
      type: 'Auberge-gîte avec restaurant — Villar-d’Arène',
      adresse: 'Place de l’Église, 05480 Villar-d’Arène',
      demiPension: 'Oui (demi-pension et pension complète)',
      note: 'Chambres avec salle de bain privée.',
      fiabilite: 'Téléphone et tarifs à vérifier (via l’Office de Tourisme).',
    },
    {
      nom: 'Hôtel Le Sérac',
      type: 'Hôtel-restaurant — La Grave',
      adresse: '2 rue de Babiole, 05320 La Grave',
      reservationUrl: 'https://www.hotel-le-serac.com/',
      demiPension: 'Oui — ~72 €/pers, mais minimum 3 nuits',
      note: 'Très réputé, vue Meije. Minimum 3 nuits en demi-pension : à négocier pour 2 nuits.',
      fiabilite: 'Contrainte 3 nuits à confirmer.',
    },
  ],

  contacts: [
    {
      nom: 'Office de Tourisme La Grave – La Meije',
      type: 'Information & disponibilités hébergements',
      adresse: 'RD1091, 05320 La Grave',
      tel: '04 76 79 90 05',
      telFiable: true,
      reservationUrl: 'https://www.hautesvallees.com/la-grave/',
      note: 'À appeler en premier pour confirmer les disponibilités demi-pension du 21–22 août 2026.',
    },
  ],
}

export default sejour
