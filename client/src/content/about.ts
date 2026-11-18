/**
 * About page content for BIRASANZWE INITIATIVE.
 *
 * ⚠️  No unverified historical events, founding dates, founders, statistics,
 *     or external achievements have been invented. Provisional copy is clearly
 *     labeled so it can be refined with official organizational statements later.
 */

export const ABOUT_SEO = {
  title: 'About Birasanzwe Initiative | Aspire to Include',
  description:
    'Discover Birasanzwe Initiative, our story, mission, vision, and commitment to inclusion, dignity, and opportunities for people with disabilities, people with chronic diseases, and vulnerable communities in Rwanda.',
  path: '/about',
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
  titleLines: ['ASPIRE TO INCLUDE.', 'A MOVEMENT OF DIGNITY.'] as const,
  supporting:
    'We promote inclusion, dignity, talent recognition, and equal participation for people with disabilities, people with chronic diseases, and vulnerable people facing illness, poverty, or circumstances that can lead to exclusion.',
} as const

/* --------------------------------------------------------------------------
 * SECTION 2 — OUR STORY
 * ------------------------------------------------------------------------ */
export const ABOUT_STORY = {
  eyebrow: 'OUR STORY',
  heading: 'A BELIEF THAT BECAME A PURPOSE.',
  provisionalLead:
    '“Birasanzwe Initiative is built on a clear human truth: disability, chronic illness, and poverty are normal human conditions that should never result in stigma, exclusion, or discrimination. Guided by our message — Aspire to Include — we create platforms where abilities are celebrated, vulnerable communities are supported, and inclusion becomes a lived reality.”',
  body: [
    'Across Rwanda, people with disabilities, people living with chronic diseases, and vulnerable individuals facing illness, poverty, or marginalizing circumstances hold extraordinary creative, artistic, and human potential. Yet stigma and social barriers too often stand between them and full participation in society.',
    'Birasanzwe Initiative was founded to transform that reality — combining artistic advocacy, music, storytelling, and practical community support to challenge stigma, uphold human dignity, and bring communities together in compassion and shared responsibility.',
  ],
  pullQuote: {
    text: 'Aspire to Include — every talent deserves a platform, and no human condition should ever lead to exclusion.',
    attribution: 'Core Conviction · Birasanzwe Initiative',
  },
  journey: [
    {
      step: '01',
      phase: 'The Conviction',
      title: 'Challenging stigma & exclusion',
      description:
        'Affirming that disability, chronic diseases, illness, and poverty are normal human conditions that must never lead to discrimination or exclusion.',
    },
    {
      step: '02',
      phase: 'The Platform',
      title: 'Artistic advocacy & practical support',
      description:
        'Using music, storytelling, cultural expression, and charitable community support — such as the Birasanzwe Rwanda Tour — to uplift talents and vulnerable groups.',
    },
    {
      step: '03',
      phase: 'The Movement',
      title: 'Aspiring to include everyone',
      description:
        'Mobilizing communities, local leaders, and partner organizations across Rwanda to practice compassion, social responsibility, and equal participation.',
    },
  ] as const,
} as const

/* --------------------------------------------------------------------------
 * SECTION 3 — OUR MISSION
 * ------------------------------------------------------------------------ */
export const ABOUT_MISSION = {
  eyebrow: 'OUR MISSION',
  headingLines: ['ASPIRE TO INCLUDE.', 'CELEBRATING HUMAN DIGNITY.'] as const,
  statement:
    'To promote an inclusive and compassionate society by recognizing talents, challenging stigma, and supporting people with disabilities, people with chronic diseases, and vulnerable people facing illness, poverty, and other circumstances that can lead to exclusion.',
  pillars: [
    {
      label: 'What We Do',
      detail: 'Combine artistic advocacy, talent platforms, awareness dialogues, and practical support for vulnerable communities.',
    },
    {
      label: 'Who We Serve',
      detail: 'People with disabilities, people with chronic diseases, and vulnerable people facing illness, poverty, and other circumstances that can lead to exclusion.',
    },
    {
      label: 'How We Measure',
      detail: 'By stigma challenged, dignity upheld, essential support delivered, and communities united in inclusion.',
    },
  ] as const,
} as const

/* --------------------------------------------------------------------------
 * SECTION 4 — OUR VISION
 * ------------------------------------------------------------------------ */
export const ABOUT_VISION = {
  eyebrow: 'OUR VISION',
  heading: 'A SOCIETY WHERE NO ONE IS EXCLUDED.',
  statement:
    'To build an inclusive, equitable, and compassionate Rwanda where people with disabilities, people living with chronic diseases, and vulnerable groups are respected for their dignity, recognized for their abilities, and empowered to participate fully in society.',
  distinction: 'Where our mission defines our daily action, our vision defines the inclusive society we are building together.',
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
  statement: 'ASPIRE TO INCLUDE.',
  supportingLines: [
    'Disability, chronic illness, and poverty are normal human conditions — never reasons for exclusion.',
    'People with disabilities, chronic diseases, and vulnerable circumstances deserve dignity and equal participation.',
    'Every person deserves to be recognized, supported, and included beyond stigma.',
  ] as const,
} as const

/* --------------------------------------------------------------------------
 * SECTION 8 — OUR FUTURE
 * ------------------------------------------------------------------------ */
export const ABOUT_FUTURE = {
  eyebrow: 'OUR FUTURE',
  heading: 'THE FUTURE WE ARE WORKING TOWARDS.',
  message:
    'We envision a Rwanda where stigma around disability, chronic illness, and poverty is replaced by compassion, equal participation, and meaningful opportunities for every person to thrive.',
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
