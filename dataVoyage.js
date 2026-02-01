window.DATA_VOYAGE = {
  meta: {
    startDateLabel: "11 septembre",
    intensityLevels: 4,
    comfortLevels: 3,
    modes: [
      "chill_premium",
      "chill_roots",
      "adventure_comfort",
      "adventure_pure"
    ]
  },

  modeMapping: {
    rules: [
      { if: { intensityMin: 1, intensityMax: 2, comfort: 3 }, mode: "chill_premium" },
      { if: { intensityMin: 1, intensityMax: 2, comfortMin: 1, comfortMax: 2 }, mode: "chill_roots" },
      { if: { intensityMin: 3, intensityMax: 4, comfort: 3 }, mode: "adventure_comfort" },
      { if: { intensityMin: 3, intensityMax: 4, comfortMin: 1, comfortMax: 2 }, mode: "adventure_pure" }
    ]
  },

  countries: [
    "Italie",
    "Slovénie",
    "Autriche",
    "République Tchèque",
    "Hongrie",
    "Slovaquie",
    "Croatie",
    "Roumanie",
    "Bosnie",
    "Allemagne",
    "Pologne",
    "Suisse",
    "Serbie"
  ],

  activities: [
    {
      id: "cities_ambience",
      label: "Villes & ambiance",
      examples: "vieux centres, points de vue, quartiers vivants",
      phrases: {
        chill_premium: "Balade dans une vieille ville + pause en terrasse dans un spot canon.",
        chill_roots: "Flânerie libre au cœur de la ville, ruelles, marchés et petites trouvailles.",
        adventure_comfort: "City-exploration bien dense + un point de vue au coucher du soleil.",
        adventure_pure: "Grosse journée “à pied” avec quartiers, escaliers, belvédères et surprises."
      }
    },
    {
      id: "water_lakes",
      label: "Lacs / eau & baignade",
      examples: "lac, rivière, cascade, thermes",
      phrases: {
        chill_premium: "Moment au bord d’un lac d’exception, ambiance carte postale.",
        chill_roots: "Petite baignade / coin nature simple, loin des foules si possible.",
        adventure_comfort: "Tour du lac + spot secret + pause chill (sans se cramer).",
        adventure_pure: "Itinéraire eau-nature : lac + cascade / gorge, avec marche et défis."
      }
    },
    {
      id: "food",
      label: "Gastronomie",
      examples: "restos typiques, spécialités locales",
      phrases: {
        chill_premium: "Une table “wow” avec spécialités locales et vue / ambiance parfaite.",
        chill_roots: "Repas typique simple mais ultra bon (le genre qu’on veut refaire chez soi).",
        adventure_comfort: "Food day : marché + spécialités + une adresse signature le soir.",
        adventure_pure: "On goûte “sur la route” : snacks locaux + petite pépite imprévue."
      }
    },
    {
      id: "soft_thrills",
      label: "Adrénaline soft",
      examples: "tyrolienne, rafting tranquille, via ferrata facile",
      phrases: {
        chill_premium: "Une activité fun, encadrée, avec confort derrière (zéro galère).",
        chill_roots: "Un petit défi accessible, version simple mais mémorable.",
        adventure_comfort: "Une vraie activité sensation + récup bien méritée ensuite.",
        adventure_pure: "Challenge nature : ça bouge, ça grimpe / ça glisse, et on s’en souvient."
      }
    },
    {
      id: "nature_views",
      label: "Nature & panoramas",
      examples: "parcs, belvédères, rando courte",
      phrases: {
        chill_premium: "Point de vue incroyable avec accès facile + moment contemplatif.",
        chill_roots: "Balade nature courte, simple, mais qui fait du bien.",
        adventure_comfort: "Rando grand paysage + retour dans un endroit cosy.",
        adventure_pure: "Trek plus engagé : grandes vues, effort, et petite fierté."
      }
    },
    {
      id: "local_tasting",
      label: "Dégustation produits locaux",
      examples: "vin/bière/fromage/charcut/huile…",
      phrases: {
        chill_premium: "Dégustation dans un lieu super stylé, ambiance “on se fait plaisir”.",
        chill_roots: "Petit producteur / spécialité locale, simple mais authentique.",
        adventure_comfort: "Dégustation + découverte du coin (vignes / atelier / visite courte).",
        adventure_pure: "Dégustation improvisée sur la route : “on s’arrête là… et c’est une pépite”."
      }
    },
    {
      id: "nightlife",
      label: "Vie nocturne",
      examples: "bars, rooftops, ambiance",
      phrases: {
        chill_premium: "Rooftop / bar chic : une belle soirée, sans finir en mode zombie.",
        chill_roots: "Bars locaux, ambiance sympa, on se laisse porter.",
        adventure_comfort: "Soirée animée + retour confortable (oui, on anticipe).",
        adventure_pure: "Sortie plus tardive : quartier vivant, musique, et anecdotes garanties."
      }
    },
    {
      id: "castles_postcards",
      label: "Châteaux & villages “carte postale”",
      examples: "villages charmants, lieux iconiques",
      phrases: {
        chill_premium: "Visite d’un lieu iconique + café/tea-time dans un décor de film.",
        chill_roots: "Village charmant + ruelles + petit point de vue, tranquille.",
        adventure_comfort: "Château + balade autour + une autre étape coup de cœur.",
        adventure_pure: "Itinéraire “conte de fées” : plusieurs spots, marche et exploration."
      }
    },
    {
      id: "spa_thermal",
      label: "Thermes & détente",
      examples: "spa, bains, sources chaudes",
      phrases: {
        chill_premium: "Session thermale premium : détente totale, ambiance luxe tranquille.",
        chill_roots: "Pause bien-être simple : on se détend, point.",
        adventure_comfort: "Après une journée active : thermes / spa pour recharger à fond.",
        adventure_pure: "Récup “méritée” : bain chaud après l’effort, version récompense."
      }
    },
    {
      id: "public_transport_routes",
      label: "Trains insolites / trajets mythiques",
      examples: "trains, bus, ferries, funiculaires",
      phrases: {
        chill_premium: "Un trajet panoramique en train + pauses “photo/café” sans se presser.",
    chill_roots: "On se laisse porter : train/bus local, petites gares, arrêts coups de cœur.",
    adventure_comfort: "Journée multi-étapes optimisée en train/bus, avec un vrai spot “wow”.",
    adventure_pure: "Mode interrail : enchaînement de trajets et d’étapes, rythme soutenu (zéro voiture)."
  }
    },
    {
      id: "romantic_wow",
      label: "Romantique & “moments wow”",
      examples: "sunset, dîner avec vue",
      phrases: {
        chill_premium: "Dîner / coucher de soleil dans un endroit qui met une claque.",
        chill_roots: "Petit moment simple mais fort : coucher de soleil, balade main dans la main.",
        adventure_comfort: "Surprise romantique après l’aventure : ça fait un combo parfait.",
        adventure_pure: "Moment wow “mérité” : on se dépasse et on finit sur une scène incroyable."
      }
    },
    {
      id: "photospots",
      label: "Photospots / instagrammable",
      examples: "spots, belvédères, ruelles",
      phrases: {
        chill_premium: "Les plus beaux spots, aux meilleures heures, sans se presser.",
        chill_roots: "Quelques photos naturelles, authentiques, comme un carnet de voyage.",
        adventure_comfort: "Spot + point de vue + petit détour : on capture du lourd.",
        adventure_pure: "Chasse aux spots : lever tôt / marche / belvédères, pour les photos qui claquent."
      }
    }
  ],

  insoliteChoices: [
    "Baignade thermale",
    "Bateau sur un lac",
    "Nuit en refuge / chalet",
    "Via ferrata facile",
    "Rafting / canyoning soft",
    "Dégustation dans un vignoble",
    "Train panoramique / funiculaire",
    "Château emblématique"
  ]
};
console.log("dataVoyage.js exécuté ✅", !!window.DATA_VOYAGE, window.DATA_VOYAGE?.activities?.length);
