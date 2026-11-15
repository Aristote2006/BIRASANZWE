/**
 * About page content for BIRASANZWE INITIATIVE.
 *
 * ⚠️  No unverified historical events, founding dates, founders, statistics,
 *     or external achievements have been invented. Provisional copy is clearly
 *     labeled so it can be refined with official organizational statements later.
 */

export const ABOUT_SEO = {
  title: 'About Birasanzwe Initiative | Our Story, Mission & Vision',
  description:
    'Discover Birasanzwe Initiative, our story, mission, vision, and commitment to inclusion, talent recognition, and opportunities for persons with disabilities in Rwanda.',
  path: '/about',
  /** Uses the official Rwanda Tour WebP image as the current social preview; replace with a dedicated 1200×630 OG image when available. */
  ogImage: '/assets/images/tour.webp',
} as const

/* --------------------------------------------------------------------------
 * SECTION 1 — ABOUT HERO
 * ------------------------------------------------------------------------ */
export const ABOUT_HERO = {
  breadcrumb: [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
  ] as const,
  eyebrow: 'ABOUT BIRASANZWE INITIATIVE',
  titleLines: ['MORE THAN INCLUSION.', 'A MOVEMENT OF POSSIBILITY.'] as const,
  supporting:
    'We believe every person deserves the opportunity to express their abilities, discover their potential, and contribute meaningfully to society.',
} as const

/* --------------------------------------------------------------------------
 * SECTION 2 — OUR STORY
 * ------------------------------------------------------------------------ */
export const ABOUT_STORY = {
  eyebrow: 'OUR STORY',
  heading: 'A BELIEF THAT BECAME A PURPOSE.',
  /**
   * PROVISIONAL COPY — Official story placeholder.
   * Replace or expand with confirmed narrative from Birasanzwe Initiative leadership.
   */
  provisionalLead:
    '“Birasanzwe Initiative is built on a simple but powerful belief: disability does not define a person’s ability, talent, or potential. We exist to create opportunities where abilities can be recognized, talents can be expressed, and inclusion can become a lived experience.”',
  body: [
    'Across Rwanda, persons with disabilities hold extraordinary creative, artistic, intellectual, and entrepreneurial gifts. Yet too often, assumptions and barriers stand between those abilities and the platforms where they can shine.',
    'Birasanzwe Initiative was shaped to change that conversation — shifting attention away from limitation or pity and placing it squarely on human dignity, capability, and equal opportunity. Through community-rooted platforms, public engagement, and collaborative partnerships, we work so every talent can be seen on its own merit.',
  ],
  pullQuote: {
    text: 'Every talent deserves a platform. Every ability deserves recognition.',
    attribution: 'Core Conviction · Birasanzwe Initiative',
  },
  /**
   * Conceptual journey stages (non-dated, non-fabricated milestones).
   * Ready to be updated with official dates or historical milestones when confirmed.
   */
  journey: [
    {
      step: '01',
      phase: 'The Conviction',
      title: 'Seeing ability first',
      description:
        'Challenging assumptions around disability in Rwanda by affirming that human potential is never defined by physical or sensory differences.',
    },
    {
      step: '02',
      phase: 'The Platform',
      title: 'Creating spaces for expression',
      description:
        'Designing initiatives — such as the Birasanzwe Rwanda Tour — where persons with disabilities step forward as artists, leaders, and contributors.',
    },
    {
      step: '03',
      phase: 'The Movement',
      title: 'Growing collective inclusion',
      description:
        'Bringing communities, partner organizations, and supporters together to turn inclusion from an ideal into an everyday reality.',
    },
  ] as const,
} as const

/* --------------------------------------------------------------------------
 * SECTION 3 — OUR MISSION
 * ------------------------------------------------------------------------ */
export const ABOUT_MISSION = {
  eyebrow: 'OUR MISSION',
  headingLines: ['CREATING OPPORTUNITIES.', 'CELEBRATING ABILITY.'] as const,
  statement:
    'To promote inclusion, recognize the talents and abilities of persons with disabilities, and create meaningful opportunities for participation, expression, and contribution within society.',
  pillars: [
    {
      label: 'What We Do',
      detail: 'Open doors for participation, creative expression, and visible leadership.',
    },
    {
      label: 'Who We Serve',
      detail: 'Persons with disabilities across Rwanda whose talents deserve recognition.',
    },
    {
      label: 'How We Measure',
      detail: 'By dignity upheld, platforms created, and communities transformed.',
    },
  ] as const,
} as const

/* --------------------------------------------------------------------------
 * SECTION 4 — OUR VISION
 * ------------------------------------------------------------------------ */
export const ABOUT_VISION = {
  eyebrow: 'OUR VISION',
  heading: 'A FUTURE WHERE EVERY ABILITY MATTERS.',
  statement:
    'To contribute to a society where persons with disabilities are recognized for their abilities, included in opportunities, and empowered to participate fully in community life.',
  distinction: 'Where our mission defines our daily action, our vision defines the society we are helping build.',
} as const

/* --------------------------------------------------------------------------
 * SECTION 5 — OUR CORE VALUES
 * ------------------------------------------------------------------------ */
export const ABOUT_VALUES = {
  eyebrow: 'OUR CORE VALUES',
  heading: 'THE PRINCIPLES THAT GUIDE US.',
  description:
    'Every project, partnership, and public platform we build is anchored in six non-negotiable human principles.',
  items: [
    {
      key: 'dignity',
      title: 'Dignity',
      description: 'Every person deserves respect, recognition, and equal human value.',
    },
    {
      key: 'inclusion',
      title: 'Inclusion',
      description: 'Everyone deserves opportunities to participate and contribute.',
    },
    {
      key: 'ability',
      title: 'Ability',
      description: 'We focus on talents, strengths, skills, and potential.',
    },
    {
      key: 'equality',
      title: 'Equality',
      description: 'We believe opportunities should be accessible and fair.',
    },
    {
      key: 'empowerment',
      title: 'Empowerment',
      description: 'We create spaces where people can express themselves, develop, and thrive.',
    },
    {
      key: 'collaboration',
      title: 'Collaboration',
      description: 'We believe meaningful inclusion requires collective effort.',
    },
  ] as const,
} as const

/* --------------------------------------------------------------------------
 * SECTION 6 — OUR APPROACH
 * ------------------------------------------------------------------------ */
export const ABOUT_APPROACH = {
  eyebrow: 'OUR APPROACH',
  heading: 'HOW WE BRING OUR BELIEF TO LIFE.',
  description:
    'Our approach to disability inclusion in Rwanda connects talent recognition with real platforms, community awareness, and lasting partnerships.',
  pillars: [
    {
      step: '01',
      key: 'talent',
      title: 'Recognizing Talent',
      description: 'We create opportunities to discover and showcase abilities, skills, and creativity.',
    },
    {
      step: '02',
      key: 'platforms',
      title: 'Creating Platforms',
      description:
        'We support spaces where persons with disabilities can express their talents and participate meaningfully.',
    },
    {
      step: '03',
      key: 'inclusion',
      title: 'Promoting Inclusion',
      description:
        'We encourage communities and institutions to recognize ability and support equal participation.',
    },
    {
      step: '04',
      key: 'partnerships',
      title: 'Building Partnerships',
      description: 'We believe collaboration creates stronger and more sustainable opportunities.',
    },
  ] as const,
} as const

/* --------------------------------------------------------------------------
 * SECTION 7 — OUR PHILOSOPHY
 * ------------------------------------------------------------------------ */
export const ABOUT_PHILOSOPHY = {
  eyebrow: 'OUR PHILOSOPHY',
  statement: 'DISABILITY IS NOT INABILITY.',
  supportingLines: [
    'A disability does not erase talent.',
    'A limitation does not define potential.',
    'Every person deserves to be recognized beyond assumptions.',
  ] as const,
} as const

/* --------------------------------------------------------------------------
 * SECTION 8 — OUR FUTURE
 * ------------------------------------------------------------------------ */
export const ABOUT_FUTURE = {
  eyebrow: 'OUR FUTURE',
  heading: 'THE FUTURE WE ARE WORKING TOWARDS.',
  message:
    'We envision a Rwanda where talent is recognized, inclusion is practiced, and persons with disabilities have meaningful opportunities to contribute to society.',
  cta: {
    label: 'EXPLORE OUR PROJECTS',
    to: '/projects',
  },
} as const

/* --------------------------------------------------------------------------
 * SECTION 9 — CALL TO ACTION
 * ------------------------------------------------------------------------ */
export const ABOUT_CTA = {
  eyebrow: 'JOIN THE MOVEMENT',
  heading: 'BE PART OF A MORE INCLUSIVE FUTURE.',
  supporting:
    'Together, we can create opportunities, celebrate talent, and build a society where every ability deserves recognition.',
  primaryCta: { label: 'Get Involved', to: '/get-involved' },
  secondaryCta: { label: 'Support Our Mission', to: '/support-us' },
} as const
