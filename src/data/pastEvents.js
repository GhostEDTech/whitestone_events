export const pastEvents = [
  {
    slug: "ife-sylvester-wedding",
    category: "Weddings",
    title: "Ife & Sylvester's Wedding",
    date: "2024",
    hall: "Jadeite Hall",
    summary:
      "A full wedding day across three settings — traditional rites, a church blessing, and a reception that carried the celebration into the night.",
    detail: [
      "Ife and Sylvester's wedding moved through three distinct settings in a single day: the traditional ceremony, the wedding blessing at the cathedral, and a reception that closed the night in Jadeite Hall.",
      "The hall was reset between arrival and reception to carry the couple's colour palette through the room, with the dance floor positioned as the room's centrepiece for the evening's festivities.",
      "It's the kind of day Whitestone is built around — several ceremonies, several moods, one venue that can hold all of them without a single break in the day's momentum.",
    ],
  },
  {
    slug: "queen-bukola-saliu-40th",
    category: "Birthdays",
    title: "Queen Bukola Saliu's 40th Birthday",
    date: "2023",
    hall: "Jadeite Hall",
    summary:
      "A milestone fortieth birthday staged as a grand arrival, with décor and lighting built around the evening's regal theme.",
    detail: [
      "Queen Bukola Saliu's fortieth birthday was staged as a grand arrival — a red-carpet entrance leading into a hall dressed for the evening's regal theme, planned and decorated end to end by an outside events team working within the space.",
      "The evening ran as a single continuous programme: arrival, seated dinner, tributes, and a dance floor that stayed full until close.",
      "Milestone birthdays are one of the occasions Whitestone hosts most often, and this one showed the hall at full theatrical scale.",
    ],
  },
  {
    slug: "technova-product-launch",
    category: "Corporate Celebrations",
    title: "TechNova Product Launch Gala",
    date: "2024",
    hall: "Jadeite Hall",
    summary:
      "A brand's flagship product launch, staged with a stage build, live demo area, and an evening reception for press and partners.",
    detail: [
      "TechNova's flagship launch needed a room that could run as a conference in the afternoon and a reception by evening — a stage build with a live product demo area gave way to a seated dinner for press, partners, and investors once the presentations wrapped.",
      "AV and lighting were configured for a keynote-style presentation, with a breakout area set aside for one-on-one press conversations after the main programme.",
      "The turnaround between formats happened in under two hours, without guests ever leaving the hall.",
    ],
  },
  {
    slug: "resonance-book-launch",
    category: "Book Launches",
    title: "Resonance — A Book Launch",
    date: "2023",
    hall: "Moonstone Hall",
    summary:
      "An intimate launch for a debut novel, with a reading, a signing table, and a room sized for a close circle of readers.",
    detail: [
      "The launch of Resonance called for something smaller than our main hall could offer — Moonstone gave the author a room close enough for a reading to land as intended.",
      "The evening opened with a short reading, moved into a moderated conversation with the author, and closed with a signing table set up in the foyer for guests and press photographs.",
      "Tiered seating kept every guest facing the podium, with lighting kept low and warm through the reading itself.",
    ],
  },
  {
    slug: "lagos-heritage-arts-festival",
    category: "Cultural & Arts Festivals",
    title: "Lagos Heritage Arts Festival",
    date: "2024",
    hall: "Jadeite Hall & Grounds",
    summary:
      "A weekend-long cultural showcase spanning the hall and outdoor grounds, with exhibition stalls, performances, and a curated gallery walk.",
    detail: [
      "The Lagos Heritage Arts Festival used Whitestone's full footprint — Jadeite Hall set up gallery-style for a curated exhibition of visual art, with our grounds hosting craft stalls and a performance stage across the weekend.",
      "Modular staging let the performance schedule run continuously from midday into the evening, with gallery lighting kept separate from the outdoor rig so both spaces could operate at once.",
      "It's the largest-footprint format Whitestone hosts, and the one that makes the most use of the grounds alongside the halls.",
    ],
  },
  {
    slug: "nigerian-excellence-awards",
    category: "Award Ceremonies",
    title: "Nigerian Excellence Awards",
    date: "2023",
    hall: "Jadeite Hall",
    summary:
      "A red-carpet award night with a full production stage, nominee holding area, and a programme built around the moment names are called.",
    detail: [
      "The Nigerian Excellence Awards brought a full production crew into Jadeite Hall — a stage rig sized for live presentation, a backstage holding area for nominees, and a red carpet stretching the length of the entrance for arrivals.",
      "The programme ran to a strict runtime across categories, with the room reset from a standing red-carpet reception into fixed banquet seating before the ceremony began.",
      "Award nights are among the most technically demanding events Whitestone hosts, and the ones our stage and lighting rig are built to handle.",
    ],
  },
];

export const getPastEventBySlug = (slug) => pastEvents.find((e) => e.slug === slug);
