/* ============================================
   THE LAST MOVE - Data Model
   Updated for the 6 Core Content Pillars
   ============================================ */

const TLM = {
  brand: {
    name: 'THE LAST MOVE',
    tagline: 'Built is the milestone. Ready is the destination. This is the last move.',
    host: 'Alex',
    youtube: {
      handle: '@TheLastMoveTV',
      url: 'https://www.youtube.com/@TheLastMoveTV'
    },
    email: 'thelastmovetv@gmail.com'
  },

  /**
   * The 6 Core Content Pillars
   */
  pillars: [
    {
      id: 'engineering-disasters',
      number: '01',
      emoji: '🏗️',
      title: 'Engineering & Tech Disasters',
      summary: 'Megaprojects, software glitches, infrastructure failures',
      image: 'assets/alex-blueprints.jpg'
    },
    {
      id: 'extreme-environments',
      number: '02',
      emoji: '🌋',
      title: 'Extreme Environments',
      summary: 'Deep ocean, space, polar ice, and what they do to the body',
      image: 'assets/alex-volcano.jpg'
    },
    {
      id: 'mind-under-pressure',
      number: '03',
      emoji: '🧠',
      title: 'The Mind Under Pressure',
      summary: 'Survival psychology, isolation, and sensory deprivation',
      image: 'assets/alex-space-alert.jpg'
    },
    {
      id: 'dangerous-life',
      number: '04',
      emoji: '🦠',
      title: 'Dangerous Life & History',
      summary: 'Deadly biology, predators, lost places, and dark history',
      image: 'assets/alex-volcano.jpg'
    },
    {
      id: 'human-limit',
      number: '05',
      emoji: '🫀',
      title: 'The Human Limit',
      summary: 'Crush depth, hypoxia, and extreme G-force timelines',
      image: 'assets/alex-avatar.jpg'
    },
    {
      id: 'system-collapse',
      number: '06',
      emoji: '🚀',
      title: 'System Collapse',
      summary: 'The crossover of technology, business, and logistics',
      image: 'assets/alex-executive.jpg'
    }
  ],

  documentaries: [],
  stories: [],

  categories: [
    { id: 'engineering-disasters', label: 'Engineering & Tech Disasters', emoji: '🏗️' },
    { id: 'extreme-environments',  label: 'Extreme Environments',          emoji: '🌋' },
    { id: 'mind-under-pressure',   label: 'The Mind Under Pressure',       emoji: '🧠' },
    { id: 'dangerous-life',        label: 'Dangerous Life & History',      emoji: '🦠' },
    { id: 'human-limit',           label: 'The Human Limit',               emoji: '🫀' },
    { id: 'system-collapse',       label: 'System Collapse',               emoji: '🚀' }
  ]
};
