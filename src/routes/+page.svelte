<script lang="ts">
  import ProjectShowcase from "#lib/components/ProjectShowcase.svelte";
  import { reveal } from "#lib/animations/reveal.ts";

  const projects = [
    {
      title: "Custom Communications Platform",
      description:
        "A staff-facing communications platform with API integrations, message drafts, reusable templates, and scheduled messaging.",
      focus: "Integrations · Messaging · Workflow",
      featuredImage: {
        src: "/projects/CommunicationManagerNewMessage.png",
        alt: "New message form in the Custom Communications Platform",
      },
    },
    {
      title: "Web & Mobile Event Registration",
      description:
        "Household event registration with capacity checks, form validation, conference selections, and Square checkout with promotional pricing.",
      focus: "Full-Stack Development · Payments · Registration",
      featuredImage: {
        src: "/projects/EventRegistrationDetails.png",
        alt: "Event details and registration interface",
      },
    },
    {
      title: "Location-Based Group Finder",
      description:
        "A responsive group finder with filtering, location-based search, map and list views, and group availability indicators.",
      focus: "Search · Maps · Responsive Interfaces",
      featuredImage: {
        src: "/projects/GroupFinderStart.png",
        alt: "Location-Based Group Finder",
      },
    },
  ];

  type Screenshot = {
    src: string;
    alt: string;
    caption: string;
  };

  const projectScreenshots: Record<string, Screenshot[]> = {
    "Custom Communications Platform": [
      {
        src: "/projects/CommunicationManagerNewMessage.png",
        alt: "Screenshot of Custom Communications Platform New Message Interface",
        caption:
          "Compose messages with database-populated fields, reusable shared templates, and rich-text editing powered by TinyMCE.",
      },
      {
        src: "/projects/CommunicationManagerDistributionLists.png",
        alt: "Screenshot of Custom Communications Platform Distribution Lists Interface",
        caption:
          "Generate email and text-message recipient lists from distribution lists stored in the database.",
      },
      {
        src: "/projects/CommunicationManagerRecurringMessages.png",
        alt: "Screenshot of Custom Communications Platform Recurring Messages Interface",
        caption:
          "Recurring messages can be managed and edited within the platform.",
      },
      {
        src: "/projects/CommunicationManagerSignatureEdit.png",
        alt: "Screenshot of Custom Communications Platform Signature Edit Interface",
        caption: "Signatures can be created and edited within the platform.",
      },
    ],
    "Web & Mobile Event Registration": [
      {
        src: "/projects/EventRegistrationSearch.png",
        alt: "Screenshot of Web Event Registration Search",
        caption:
          "Filter events with search controls synchronized to URL query parameters, allowing filtered views to be shared or opened directly.",
      },
      {
        src: "/projects/EventRegistrationDetails.png",
        alt: "Screenshot of Web Event Registration Details",
        caption:
          "View database-backed event details with support for authenticated and unauthenticated visitors.",
      },
      {
        src: "/projects/EventRegistrationOptions.png",
        alt: "Screenshot of Web Event Registration Options",
        caption:
          "Select registration options with availability checks, duplicate-payment safeguards, and Square payment integration.",
      },
      {
        src: "/projects/EventRegistrationUpdateIndividual.png",
        alt: "Screenshot of Web Event Registration Update Individual",
        caption:
          "Update attendee information and registration selections, with changes reflected in the interface as they are made.",
      },
      {
        src: "/projects/EventRegistrationFormIntegration.png",
        alt: "Screenshot of Web Event Registration Form Integration",
        caption:
          "Event registration form integration allows seamless embedding of registration forms into web pages with real-time updates. Forms are dynamically generated from the database.",
      },
      {
        src: "/projects/EventRegistrationSquareIntegration.png",
        alt: "Screenshot of Web Event Registration Square Integration",
        caption:
          "Event registration allows secure payment processing through Square with real-time updates. Supports promo codes and card validation.",
      },
      {
        src: "/projects/EventRegistrationConfirmation.png",
        alt: "Screenshot of Web Event Registration Confirmation",
        caption:
          "Event registration confirmation provides real-time updates and confirmation details to attendees. Emails are sent based on data attached to each event or sub event.",
      },
      {
        src: "/projects/EventRegistrationMobile.png",
        alt: "Screenshot of Web Event Registration Mobile",
        caption:
          "Event registration mobile interface provides a seamless experience for attendees on mobile devices. Includes all features as desktop version.",
      },
      {
        src: "/projects/EventRegistrationMobileDashboard.png",
        alt: "Screenshot of Web Event Registration Mobile Dashboard",
        caption:
          "Event registration mobile dashboard provides organizers with real-time updates and management capabilities on mobile devices. Exists as a desktop equivalent as well.",
      },
    ],
    "Location-Based Group Finder": [
      {
        src: "/projects/GroupFinder.png",
        alt: "Screenshot of Location-Based Group Finder",
        caption:
          "Location-Based Group Finder helps users find and join local groups based on their interests and location.",
      },
      {
        src: "/projects/GroupFinderStart.png",
        alt: "Screenshot of Location-Based Group Finder Start",
        caption:
          "Group Finder offers various filters and an inviting message. ",
      },
      {
        src: "/projects/GroupFinderLocation.png",
        alt: "Screenshot of Location-Based Group Finder Location",
        caption:
          "Group Finder allows users to specify their location to find relevant local groups.",
      },
      {
        src: "/projects/GroupFinderFilters.png",
        alt: "Screenshot of Location-Based Group Finder Filters",
        caption:
          "Group Finder provides various filters to help users find the most relevant local groups.",
      },
      {
        src: "/projects/GroupFinderResults.png",
        alt: "Screenshot of Location-Based Group Finder Results",
        caption:
          "Browse results based on location and selected filters, then carry those filters into the full group-listing page.",
      },
    ],
  };

  type ProjectDetail = {
    contribution: string;
    technologies: string[];
  };

  const projectDetails: Record<string, ProjectDetail> = {
    "Custom Communications Platform": {
      contribution:
        "Built message composition, shared templates, distribution-list integration, signature editing, and recurring-message management as part of a small development team. Also contributed final refinements and testing.",
      technologies: [
        "TypeScript",
        "React",
        "Node.js",
        "REST APIs",
        "Zod",
        "Tailwind CSS",
        "TinyMCE",
      ],
    },

    "Web & Mobile Event Registration": {
      contribution:
        "Developed the web and mobile registration experience largely independently, from concept through implementation. Built searchable event listings, household registration, capacity checks, dynamic forms, and Square checkout, integrating existing backend endpoints where available.",
      technologies: [
        "TypeScript",
        "Svelte 5",
        "React Native",
        "Node.js",
        "Zod",
        "Superforms",
        "Tailwind CSS",
        "Square",
      ],
    },

    "Location-Based Group Finder": {
      contribution:
        "Developed the group finder independently, from concept through implementation. Built filtering, location-based search, map and list views, and availability indicators, integrating existing backend endpoints where available.",
      technologies: [
        "TypeScript",
        "Svelte 5",
        "Node.js",
        "REST APIs",
        "Tailwind CSS",
        "Google Maps",
      ],
    },
  };
</script>

<svelte:head>
  <title>Zachary Haas | Software Engineer</title>
  <meta
    name="description"
    content="Zachary Haas is a software engineer building web and mobile applications with TypeScript, SvelteKit, React, and Node.js."
  />
</svelte:head>

<a class="skip-link" href="#main">Skip to content</a>

<header class="site-header">
  <a class="brand" href="#home">Zach Haas<span></span></a>

  <nav aria-label="Main navigation">
    <a href="#work">Work</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </nav>
</header>

<main id="main">
  <section class="hero" id="home" aria-labelledby="hero-title">
    <p class="eyebrow">Software Engineer · Flowery Branch, GA</p>

    <h1 id="hero-title">
      Thoughtful software.
      <span>Practical solutions.</span>
    </h1>

    <p class="intro">
      I'm Zach, a software engineer building and modernizing web and mobile
      applications—from registration and payments to mapping and communications.
    </p>

    <div class="actions">
      <a class="button primary" href="#work"> Explore my work </a>

      <a
        class="button secondary"
        href="/resume/ZachHaasResumeCondensed.docx"
        download="ZachHaasResumeCondensed.docx"
      >
        Download resume
        <span class="file-type">DOCX</span>
      </a>

      <a class="contact-link" href="mailto:zacharyahaas@gmail.com">
        Get in touch <span aria-hidden="true">↗</span>
      </a>
    </div>

    <p class="tech-line">
      TypeScript / SvelteKit / React / Node.js / React Native / SQL
    </p>
  </section>

  <section class="section" id="work" aria-labelledby="work-title">
    <p class="eyebrow">Selected Work</p>
    <h2 id="work-title">Projects with a practical purpose.</h2>
    <p class="section-intro">
      Selected work from With One Vision Technologies. Working on a small,
      collaborative team, I contributed across the stack and developed several
      features largely independently (from concept through release). Explore
      each project for screenshots, implementation details, and my specific
      contributions.
    </p>

    <div class="project-grid">
      {#each projects as project, index (project.title)}
        <article
          class="project-card"
          data-reveal-delay={index * 90}
          {@attach reveal}
        >
          <p class="project-focus">{project.focus}</p>
          <h3>{project.title}</h3>
          {#if project.featuredImage}
            <img
              class="project-image"
              src={project.featuredImage.src}
              alt={project.featuredImage.alt}
              loading="lazy"
              decoding="async"
            />
          {/if}
          <p>{project.description}</p>

          <ProjectShowcase
            title={project.title}
            description={project.description}
            screenshots={projectScreenshots[project.title] ?? []}
            contribution={projectDetails[project.title]?.contribution ?? ""}
            technologies={projectDetails[project.title]?.technologies ?? []}
          />
        </article>
      {/each}
    </div>
  </section>

  <section class="section about" id="about" aria-labelledby="about-title">
    <div {@attach reveal}>
      <p class="eyebrow">About Me</p>
      <h2 id="about-title">Technical work. Human perspective.</h2>
    </div>

    <div class="about-copy" data-reveal-delay="100" {@attach reveal}>
      <p>
        I build web and mobile applications using TypeScript, React, SvelteKit,
        Node.js, and React Native. My work includes modernizing applications,
        building SQL-backed features, and connecting third-party services.
      </p>
      <p>
        Before software engineering, I worked in customer support, digital
        marketing, and team leadership. That background shapes how I approach
        development: understand the people, clarify the problem, and build
        something useful.
      </p>
      <details class="ai-approach">
        <summary>How I use AI</summary>

        <div class="ai-approach-content">
          <p>
            I use AI as a collaborator, not a substitute for understanding. It
            helps me explore ideas, troubleshoot problems, and build readable,
            maintainable software. I review AI-generated code, work to
            understand how it fits into the application, and test its behavior
            before committing it.
          </p>

          <p>
            I'm responsible for what I ship, regardless of who (or what)helped
            write it. I also respect project policies and protect confidential
            code and data when choosing which tools to use.
          </p>

          <p class="ai-signoff">
            To borrow a lesson from Spider-Man:
            <em>with great power comes great responsibility.</em>
          </p>
        </div>
      </details>
    </div>
  </section>

  <section class="section contact" id="contact" aria-labelledby="contact-title">
    <div {@attach reveal}>
      <p class="eyebrow">Contact</p>
      <h2 id="contact-title">Let's create something awesome.</h2>
      <p>
        Have a role or project in mind? I'd be glad to connect. I can even help
        you build a portfolio like this!
      </p>

      <div class="actions">
        <a class="button primary" href="mailto:zacharyahaas@gmail.com">
          Email me
        </a>
        <a class="button secondary" href="https://www.linkedin.com/in/zachhaas">
          LinkedIn
        </a>
        <a
          class="button secondary"
          href="/resume/ZachHaasResumeCondensed.docx"
          download="ZachHaasResumeCondensed.docx"
        >
          Download resume
        </a>
      </div>
    </div>
  </section>
</main>

<footer class="site-footer">
  <p>Zach Haas · Software Engineer</p>
  <p>Built with SvelteKit.</p>
</footer>

<style>
  /* A soft glow behind the introduction */
  .hero {
    position: relative;
    isolation: isolate;
  }

  .hero::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;

    background: radial-gradient(
        ellipse 38% 40% at 40% 45%,
        rgb(34 211 238 / 14%) 0%,
        rgb(34 211 238 / 6%) 45%,
        rgb(34 211 238 / 0%) 100%
      ),
      radial-gradient(
        ellipse 32% 38% at 65% 55%,
        rgb(167 139 250 / 14%) 0%,
        rgb(167 139 250 / 6%) 45%,
        rgb(167 139 250 / 0%) 100%
      );
  }

  /* Cyan-to-purple gradient on the second headline line */
  h1 span {
    color: #a5b4fc;
    background: linear-gradient(110deg, #67e8f9, #a78bfa, #f0abfc, #67e8f9);
    background-size: 250% 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* Animate only when the visitor hasn't requested reduced motion */
  @media (prefers-reduced-motion: no-preference) {
    h1 span {
      animation: gradient-shift 12s ease-in-out infinite;
    }

    .button {
      transition:
        transform 180ms ease,
        background-color 180ms ease,
        box-shadow 180ms ease;
    }

    .project-card {
      transition:
        border-color 200ms ease,
        box-shadow 200ms ease;
    }

    .button:active {
      transform: translateY(1px);
    }
  }

  /* Mouse-specific effects */
  @media (hover: hover) and (pointer: fine) {
    .project-card:hover {
      border-color: #609ba9;
      box-shadow: 0 0 28px rgb(103 232 249 / 8%);
    }
  }

  @media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
    .button:hover {
      transform: translateY(-3px);
    }

    .primary:hover {
      box-shadow: 0 8px 28px rgb(103 232 249 / 20%);
    }
  }

  @keyframes gradient-shift {
    0%,
    100% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }
  }
  :global(*) {
    box-sizing: border-box;
  }

  :global(body) {
    margin: 0;
    background: #0b1120;
    color: #e7edf7;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.65;
  }

  :global(a) {
    color: inherit;
  }

  :global(a:focus-visible) {
    outline: 3px solid #67e8f9;
    outline-offset: 5px;
  }

  :global(h1),
  :global(h2),
  :global(h3),
  :global(p) {
    margin-top: 0;
  }

  :global(h1),
  :global(h2),
  :global(h3) {
    line-height: 1.15;
  }

  :global(section[id]) {
    scroll-margin-top: 2rem;
  }

  .skip-link {
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 10;
    transform: translateY(-200%);
    padding: 0.75rem 1rem;
    background: #67e8f9;
    color: #0b1120;
  }

  .skip-link:focus {
    transform: translateY(0);
  }

  .site-header,
  main,
  .site-footer {
    width: min(1120px, calc(100% - 3rem));
    margin-inline: auto;
  }

  .site-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    padding-block: 1.75rem;
    border-bottom: 1px solid #263247;
  }

  .brand {
    font-size: 1.2rem;
    font-weight: 700;
    text-decoration: none;
  }

  .brand span {
    color: #67e8f9;
  }

  nav {
    display: flex;
    gap: 1.5rem;
  }

  nav a {
    color: #b8c6db;
    text-decoration: none;
  }

  nav a:hover {
    color: #67e8f9;
  }

  .hero {
    max-width: 850px;
    padding-block: 7rem 6rem;
  }

  .eyebrow {
    margin-bottom: 1rem;
    color: #67e8f9;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  h1 {
    margin-bottom: 1.5rem;
    font-size: clamp(2.75rem, 7vw, 5.25rem);
    letter-spacing: -0.045em;
  }

  h1 span {
    display: block;
    color: #9eafc8;
  }

  .intro {
    max-width: 660px;
    color: #b8c6db;
    font-size: 1.15rem;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.85rem;
    margin-top: 1.75rem;
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    padding: 0.7rem 1.2rem;
    border: 1px solid transparent;
    border-radius: 8px;
    font-weight: 700;
    text-decoration: none;
  }

  .primary {
    background: #67e8f9;
    color: #0b1120;
  }

  .primary:hover {
    background: #a5f3fc;
  }

  .secondary {
    border-color: #41516a;
  }

  .secondary:hover {
    background: #172238;
  }

  .tech-line {
    margin-top: 2rem;
    color: #9eafc8;
    font-size: 0.9rem;
  }

  .section {
    padding-block: 4.5rem;
    border-top: 1px solid #263247;
  }

  h2 {
    max-width: 750px;
    margin-bottom: 1.25rem;
    font-size: clamp(2rem, 4vw, 3rem);
    letter-spacing: -0.03em;
  }

  .section-intro,
  .about-copy,
  .contact > div > p:not(.eyebrow) {
    max-width: 720px;
    color: #b8c6db;
  }

  .project-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.25rem;
    margin-top: 2rem;
  }

  .project-card {
    padding: 1.75rem;
    border: 1px solid #2b3b53;
    border-radius: 14px;
    background: linear-gradient(145deg, #172238, #101827);
  }

  .project-focus {
    color: #67e8f9;
    font-size: 0.8rem;
  }

  .project-card h3 {
    font-size: 1.4rem;
  }

  .project-image {
    display: block;
    width: 100%;
    aspect-ratio: 4 / 3;
    margin-bottom: 1.25rem;
    border-radius: 6px;
    background: #fff;
    object-fit: cover;
    object-position: top;
  }

  .project-card > p:not(.project-focus) {
    margin-bottom: 0;
    color: #b8c6db;
  }

  .about {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  .site-footer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0.75rem;
    padding-block: 1.75rem;
    border-top: 1px solid #263247;
    color: #9eafc8;
    font-size: 0.85rem;
  }

  .site-footer p {
    margin: 0;
  }

  @media (max-width: 800px) {
    .project-grid,
    .about {
      grid-template-columns: 1fr;
    }

    .about {
      gap: 1rem;
    }

    .hero {
      padding-block: 4rem;
    }

    .section {
      padding-block: 3rem;
    }
  }

  /* A short, staggered entrance for the introduction */
  @media (prefers-reduced-motion: no-preference) {
    .site-header {
      animation: enter-page 600ms ease-out both;
    }

    .hero > * {
      animation: enter-page 750ms cubic-bezier(0.22, 1, 0.36, 1) both;
    }

    .hero > :nth-child(1) {
      animation-delay: 80ms;
    }

    .hero > :nth-child(2) {
      animation-delay: 160ms;
    }

    .hero > :nth-child(3) {
      animation-delay: 240ms;
    }

    .hero > :nth-child(4) {
      animation-delay: 320ms;
    }

    .hero > :nth-child(5) {
      animation-delay: 400ms;
    }

    /* Don't leave focused links inside a fading container. */
    .site-header:focus-within,
    .hero > :focus-within {
      animation: none;
    }
  }

  @keyframes enter-page {
    from {
      opacity: 0;
      transform: translateY(18px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Navigation: an underline that grows from left to right */
  nav a {
    position: relative;
    padding-block: 0.35rem;
  }

  nav a::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    border-radius: 2px;
    background: #67e8f9;
    transform: scaleX(0);
    transform-origin: left;
  }

  nav a:hover::after,
  nav a:focus-visible::after {
    transform: scaleX(1);
  }

  /* Buttons: keep the sheen inside the button */
  .button {
    position: relative;
    overflow: hidden;
    isolation: isolate;
  }

  .button::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(
      110deg,
      transparent 20%,
      rgb(255 255 255 / 24%) 50%,
      transparent 80%
    );
    transform: translateX(-150%);
  }

  /* Cards: a little extra depth on hover */
  @media (hover: hover) and (pointer: fine) {
    .project-card:hover {
      border-color: #609ba9;
      box-shadow:
        0 16px 36px rgb(0 0 0 / 20%),
        0 0 24px rgb(103 232 249 / 7%);
    }
  }

  /* Movement only when the visitor allows it */
  @media (prefers-reduced-motion: no-preference) {
    nav a::after {
      transition: transform 220ms ease;
    }

    .project-card {
      transition:
        transform 240ms ease,
        border-color 240ms ease,
        box-shadow 240ms ease;
    }

    .button:hover::after,
    .button:focus-visible::after {
      animation: button-sheen 650ms ease-out;
    }
  }

  @media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
    .project-card:hover {
      transform: translateY(-6px);
    }
  }

  @keyframes button-sheen {
    from {
      transform: translateX(-150%);
    }

    to {
      transform: translateX(150%);
    }
  }
  /* Align the text link with the two buttons */
  .hero .actions {
    align-items: center;
  }

  .file-type {
    margin-left: 0.65rem;
    padding: 0.1rem 0.35rem;
    border: 1px solid #52637d;
    border-radius: 4px;
    color: #b8c6db;
    font-size: 0.65rem;
    letter-spacing: 0.06em;
  }

  .contact-link {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    min-height: 48px;
    padding-inline: 0.4rem;
    color: #b8c6db;
    text-decoration: none;
  }

  .contact-link:hover {
    color: #67e8f9;
    text-decoration: underline;
    text-underline-offset: 5px;
  }
  .ai-approach {
    margin-top: 1.5rem;
    border: 1px solid #33435c;
    border-radius: 12px;
    background: #101827;
  }

  .ai-approach summary {
    padding: 1rem 1.25rem;
    border-radius: 12px;
    color: #67e8f9;
    font-weight: 700;
    cursor: pointer;
  }

  .ai-approach summary:hover {
    background: rgb(103 232 249 / 5%);
  }

  .ai-approach summary:focus-visible {
    outline: 3px solid #67e8f9;
    outline-offset: 4px;
  }

  .ai-approach-content {
    padding: 0 1.25rem 1.25rem;
    color: #b8c6db;
  }

  .ai-approach-content p:last-child {
    margin-bottom: 0;
  }

  .ai-signoff {
    padding-top: 1rem;
    border-top: 1px solid #263247;
    color: #e7edf7;
  }
</style>
