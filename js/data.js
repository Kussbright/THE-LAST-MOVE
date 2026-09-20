/* ============================================
   THE LAST MOVE — Data Model
   ============================================
   
   This file defines the content data structures.
   Documentaries and stories can be added here
   without rebuilding the website.
   ============================================ */

const TLM = {
  brand: {
    name: 'THE LAST MOVE',
    tagline: 'Stories Behind a Complex World.',
    categories: ['Engineering', 'Technology', 'Science'],
    youtube: {
      handle: '@TheLastMoveTV',
      url: 'https://www.youtube.com/@TheLastMoveTV'
    },
    email: 'thelastmovetv@gmail.com'
  },

  /**
   * Documentary entries.
   * 
   * Schema for each documentary:
   * {
   *   id: string,              // Unique identifier
   *   title: string,           // Display title
   *   slug: string,            // URL-friendly slug
   *   subtitle: string,        // Short subtitle
   *   description: string,     // Full description
   *   pillar: string,          // 'engineering' | 'technology' | 'science'
   *   categories: string[],    // Array of category tags
   *   thumbnail: string,       // Path to thumbnail image
   *   heroImage: string,       // Path to hero/banner image
   *   youtubeUrl: string,      // YouTube video URL
   *   runtime: string,         // e.g. '45:00'
   *   publicationDate: string, // ISO date string
   *   status: string,          // 'published' | 'upcoming' | 'in-production'
   *   featured: boolean,       // Whether to feature prominently
   *   keyNumbers: object[],    // Array of { label, value } stats
   *   storySections: object[], // Array of { title, content } sections
   *   timeline: object[],      // Array of { date, event } entries
   *   sources: string[],       // Reference/source list
   *   relatedStories: string[],// IDs of related stories
   *   aiDisclosure: string,    // AI usage disclosure text
   *   visualCredits: string[]  // Image/visual credits
   * }
   */
  documentaries: [],

  /**
   * Story/article entries.
   * 
   * Schema for each story:
   * {
   *   id: string,
   *   title: string,
   *   slug: string,
   *   excerpt: string,
   *   content: string,
   *   pillar: string,
   *   categories: string[],
   *   thumbnail: string,
   *   publicationDate: string,
   *   status: string,
   *   featured: boolean,
   *   relatedDocumentary: string,
   *   sources: string[]
   * }
   */
  stories: [],

  /**
   * Documentary categories.
   * Ready for future filtering and navigation.
   */
  categories: [
    { id: 'engineering',       label: 'Engineering',          pillar: 'engineering' },
    { id: 'technology',        label: 'Technology',           pillar: 'technology' },
    { id: 'science',           label: 'Science',              pillar: 'science' },
    { id: 'megaprojects',      label: 'Megaprojects',         pillar: 'engineering' },
    { id: 'infrastructure',    label: 'Infrastructure',       pillar: 'engineering' },
    { id: 'failures',          label: 'Failures & Disasters', pillar: null },
    { id: 'industrial',        label: 'Industrial Stories',   pillar: 'engineering' },
    { id: 'complex-systems',   label: 'Complex Systems',      pillar: null },
    { id: 'tech-business',     label: 'Technology / Business', pillar: 'technology' }
  ]
};
