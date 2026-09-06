import bukola from "../images/bukola.png";
import bukola1 from "../videos/bukola.mp4"
import regina from "../images/regina.jpg"
import regina1 from "../videos/regina.mp4"
import amabas from "../images/amabas.png"
import amabas1 from "../videos/amabas.mp4"
import adigun from "../images/adigun.png"
import adigun1 from "../videos/adigun.mp4"
import cultural from "../images/cultural.png"
import cultural1 from "../videos/cultural.mp4"

export const pastEvents = [
  {
    slug: "Mrs-bukola",
    category: "Celebration of Public Service",
    title: "Mrs. Bello Risikat Bukola.",
    date: "2026",
    hall: "Jadeite Hall",
    image: bukola, // e.g. "/images/past-events/<slug>.jpg" — drop your file in public/images/past-events/
    video: bukola1, // e.g. "/videos/past-events/<slug>.mp4" — drop your file in public/videos/past-events/
    summary:
      "A lifetime of impact deserves a truly remarkable celebration. Finesse Events was honored to design and decorate the beautiful 60th Birthday & Retirement Celebration of TPL. Mrs. Bello Risikat Bukola.",
    detail: [
      "A lifetime of impact deserves a truly remarkable celebration. Finesse Events was honored to design and decorate the beautiful 60th Birthday & Retirement Celebration of TPL. Mrs. Bello Risikat Bukola.",
      "From elegant décor to a warm, unforgettable atmosphere, every detail reflected a life of excellence, dedication, and grace. As one chapter closes and another begins, we're grateful to have been part of such a memorable milestone.",
      "Here's to a well-deserved retirement and many more years of joy, fulfillment, and celebration.",
    ],
  },
  {
    slug: "deaconess-regina",
    category: "Celebration of Life",
    title: "Deaconnes Regina Omotayo Fagbenro",
    date: "2026",
    hall: "Jadeite Hall",
    image: regina, // e.g. "/images/past-events/<slug>.jpg" — drop your file in public/images/past-events/
    video: regina1, // e.g. "/videos/past-events/<slug>.mp4" — drop your file in public/videos/past-events/
    summary:
      "A milestone fortieth birthday staged as a grand arrival, with décor and lighting built around the evening's regal theme.",
    detail: [
      "Queen Bukola Saliu's fortieth birthday was staged as a grand arrival — a red-carpet entrance leading into a hall dressed for the evening's regal theme, planned and decorated end to end by an outside events team working within the space.",
      "The evening ran as a single continuous programme: arrival, seated dinner, tributes, and a dance floor that stayed full until close.",
      "Milestone birthdays are one of the occasions Whitestone hosts most often, and this one showed the hall at full theatrical scale.",
    ],
  },
  {
    slug: "amabas-wedding",
    category: "Wedding",
    title: "Amaras & Arnabas",
    date: "2026",
    hall: "Jadeite Hall",
    image: amabas, // e.g. "/images/past-events/<slug>.jpg" — drop your file in public/images/past-events/
    video: amabas1, // e.g. "/videos/past-events/<slug>.mp4" — drop your file in public/videos/past-events/
    summary:
      "An unforgettable evening, a timeless love, and a room full of memories that will last a lifetime. Tonight wasn't just a celebration—it was a wedding for the ages, reminding us all just how beautiful real love can be. Cheers to the new chapter and forever to go.",
    detail: [
      "A beautiful beginning to forever",
      "Love, laughter, family and unforgettable moments, all came together beautifully at Jadeite Hall.",
      "Jadeite Hall, where beautiful celebrations become lasting memories.",
    ],
  },
  {
    slug: "resonance-book-launch",
    category: "Birthday Celebration",
    title: "Engineer Sunday Adigun",
    date: "2026",
    hall: "Moonstone Hall",
    image: adigun, // e.g. "/images/past-events/<slug>.jpg" — drop your file in public/images/past-events/
    video: adigun1, // e.g. "/videos/past-events/<slug>.mp4" — drop your file in public/videos/past-events/
    summary:
      "A remarkable milestone deserves a remarkable celebration!",
    detail: [
      "Whitestone Event Center was honoured to host the 90th Birthday Celebration of Engineer Sunday Adigun -a beautiful celebration of a life filled with wisdom, excellence, impact, and countless memories.",
      "From the elegant ambience to the joyful moments shared with family, friends, and loved ones, it was truly a celebration to remember. 90 years of life. 90 years of legacy. 90 years of grace.",
      "Happy 90th Birthday, Engineer Sunday Adigun! May the years ahead be filled with continued joy, good health, peace, and fulfilment.",
    ],
  },
  {
    slug: "lagos-heritage-arts-festival",
    category: "Cultural Festivals",
    title: "Lagos Festival",
    date: "2026",
    hall: "Jadeite Hall & Grounds",
    image: cultural, // e.g. "/images/past-events/<slug>.jpg" — drop your file in public/images/past-events/
    video: cultural1, // e.g. "/videos/past-events/<slug>.mp4" — drop your file in public/videos/past-events/
    summary:
      "A weekend-long cultural showcase spanning the hall and outdoor grounds, with exhibition stalls, performances, and a curated gallery walk.",
    detail: [
      "From the very entrance of Jadeite Hall at Whitestone, the vibrant rhythm of traditional drums and graceful cultural dancers welcomed guests with pure joy. The rich, authentic beat set an immediate tone of celebration, immersing everyone in an atmosphere of warmth and heritage from the moment they arrived.",
      "One by one, smiles naturally turned into dance steps as guests embraced the rhythm and made their grand entrance part of the party itself. Family and friends shed all formality at the door, laughing and celebrating together to create an electric, unforgettable energy.",
      "That seamless blend of tradition, joy, and timeless elegance is what we bring to life every day. Jadeite Hall — where unforgettable celebrations come alive.",
    ],
  },
  // {
  //   slug: "nigerian-excellence-awards",
  //   category: "Award Ceremonies",
  //   title: "Nigerian Excellence Awards",
  //   date: "2023",
  //   hall: "Jadeite Hall",
  //   image: null, // e.g. "/images/past-events/<slug>.jpg" — drop your file in public/images/past-events/
  //   video: null, // e.g. "/videos/past-events/<slug>.mp4" — drop your file in public/videos/past-events/
  //   summary:
  //     "A red-carpet award night with a full production stage, nominee holding area, and a programme built around the moment names are called.",
  //   detail: [
  //     "The Nigerian Excellence Awards brought a full production crew into Jadeite Hall — a stage rig sized for live presentation, a backstage holding area for nominees, and a red carpet stretching the length of the entrance for arrivals.",
  //     "The programme ran to a strict runtime across categories, with the room reset from a standing red-carpet reception into fixed banquet seating before the ceremony began.",
  //     "Award nights are among the most technically demanding events Whitestone hosts, and the ones our stage and lighting rig are built to handle.",
  //   ],
  // },
];

export const getPastEventBySlug = (slug) => pastEvents.find((e) => e.slug === slug);
