<script lang="ts">
  type Screenshot = {
    src: string;
    alt: string;
    caption: string;
  };

  type Props = {
    title: string;
    description: string;
    screenshots?: Screenshot[];
    contribution?: string;
    technologies?: string[];
  };

  let {
    title,
    description,
    screenshots = [],
    contribution = "",
    technologies = [],
  }: Props = $props();

  let dialog: HTMLDialogElement;
  let currentIndex = $state(0);

  const currentScreenshot = $derived(screenshots[currentIndex]);

  function openShowcase() {
    currentIndex = 0;

    if (!dialog.open) {
      dialog.showModal();
    }
  }

  function selectScreenshot(index: number) {
    currentIndex = index;
  }

  function changeScreenshot(direction: -1 | 1) {
    if (screenshots.length < 2) return;

    currentIndex =
      (currentIndex + direction + screenshots.length) % screenshots.length;
  }

  function handleKeydown(event: KeyboardEvent) {
    if (
      !dialog?.open ||
      event.defaultPrevented ||
      event.altKey ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey
    ) {
      return;
    }

    // Don't intercept typing or native selection controls.
    const target = event.target;

    if (
      target instanceof HTMLElement &&
      target.closest(
        "input, textarea, select, [contenteditable]:not([contenteditable='false'])",
      )
    ) {
      return;
    }

    if (screenshots.length < 2) return;

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      changeScreenshot(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      changeScreenshot(1);
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<button class="showcase-trigger" type="button" onclick={openShowcase}>
  Explore project
  <span aria-hidden="true">↗</span>
  <span class="sr-only">: {title}</span>
</button>

<dialog
  bind:this={dialog}
  aria-label={`${title} project showcase`}
  closedby="any"
>
  <div class="dialog-content">
    <header class="showcase-header">
      <div>
        <p class="eyebrow">Project Showcase</p>
        <h2>{title}</h2>
      </div>

      <button
        class="close-button"
        type="button"
        aria-label="Close project showcase"
        onclick={() => dialog.close()}
      >
        <span aria-hidden="true">✕</span>
      </button>
    </header>

    <p class="description">{description}</p>

    {#if contribution || technologies.length > 0}
      <div class="project-details">
        {#if contribution}
          <section class="contribution" aria-label="My contribution">
            <h3>My contribution</h3>
            <p>{contribution}</p>
          </section>
        {/if}

        {#if technologies.length > 0}
          <section class="technologies" aria-label="Project technologies">
            <h3>Built with</h3>

            <ul class="technology-list">
              {#each technologies as technology (technology)}
                <li>{technology}</li>
              {/each}
            </ul>
          </section>
        {/if}
      </div>
    {/if}

    {#if currentScreenshot}
      <figure>
        <div class="image-frame">
          <img
            class="main-screenshot"
            src={currentScreenshot.src}
            alt={currentScreenshot.alt}
            decoding="async"
          />
        </div>

        <figcaption>
          <span class="image-count">
            {currentIndex + 1} / {screenshots.length}
          </span>

          <span>{currentScreenshot.caption}</span>
        </figcaption>
      </figure>

      <div class="image-actions">
        <a
          class="full-size-link"
          href={currentScreenshot.src}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open full-size image
          <span aria-hidden="true">↗</span>
          <span class="sr-only">in a new tab</span>
        </a>
      </div>

      {#if screenshots.length > 1}
        <div class="gallery-controls">
          <button
            class="gallery-button"
            type="button"
            onclick={() => changeScreenshot(-1)}
          >
            ← Previous
          </button>

          <span class="keyboard-hint">Use ← → keys</span>

          <button
            class="gallery-button"
            type="button"
            onclick={() => changeScreenshot(1)}
          >
            Next →
          </button>
        </div>

        <div
          class="thumbnail-grid"
          role="group"
          aria-label="Choose a screenshot"
        >
          {#each screenshots as screenshot, index (screenshot.src)}
            <button
              class="thumbnail"
              class:selected={index === currentIndex}
              type="button"
              aria-label={`Show screenshot ${index + 1}: ${screenshot.alt}`}
              aria-pressed={index === currentIndex}
              onclick={() => selectScreenshot(index)}
            >
              <img
                src={screenshot.src}
                alt=""
                loading="lazy"
                decoding="async"
              />

              <span class="thumbnail-number" aria-hidden="true">
                {index + 1}
              </span>
            </button>
          {/each}
        </div>
      {/if}

      <p class="sr-only" role="status" aria-atomic="true">
        Screenshot {currentIndex + 1} of {screenshots.length}:
        {currentScreenshot.alt}
      </p>
    {:else}
      <div class="empty-preview">
        <p>No screenshots added yet.</p>
        <span>This area will display your approved project images.</span>
      </div>
    {/if}
  </div>
</dialog>

<style>
  button {
    font: inherit;
    cursor: pointer;
  }

  button:focus-visible {
    outline: 3px solid #67e8f9;
    outline-offset: 4px;
  }

  .showcase-trigger {
    display: inline-flex;
    align-items: center;
    gap: 0.65rem;
    min-height: 44px;
    margin-top: 1.25rem;
    padding: 0;
    border: 0;
    background: transparent;
    color: #67e8f9;
    font-weight: 700;
    text-align: left;
  }

  dialog {
    width: min(1000px, calc(100% - 2rem));
    max-height: 90dvh;
    padding: 0;
    overflow-y: auto;
    border: 1px solid #41516a;
    border-radius: 18px;
    background: #101827;
    color: #e7edf7;
    box-shadow: 0 30px 100px rgb(0 0 0 / 45%);
  }

  dialog::backdrop {
    background: rgb(3 7 18 / 80%);
    backdrop-filter: blur(8px);
  }

  .dialog-content {
    padding: clamp(1.25rem, 4vw, 2.5rem);
  }

  .showcase-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
  }

  .eyebrow {
    margin-bottom: 0.75rem;
    color: #67e8f9;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  h2 {
    margin: 0;
    font-size: clamp(1.6rem, 4vw, 2.5rem);
    letter-spacing: -0.03em;
  }

  .close-button {
    display: grid;
    flex-shrink: 0;
    place-items: center;
    width: 44px;
    height: 44px;
    border: 1px solid #41516a;
    border-radius: 50%;
    background: #172238;
    color: #e7edf7;
  }

  .close-button:hover {
    border-color: #67e8f9;
    color: #67e8f9;
  }

  .description {
    max-width: 750px;
    margin-block: 1.25rem 2rem;
    color: #b8c6db;
  }

  figure {
    margin: 0;
  }

  /* A consistent stage for portrait and landscape screenshots */
  .image-frame {
    display: grid;
    place-items: center;
    height: clamp(220px, 48dvh, 520px);
    overflow: hidden;
    border: 1px solid #33435c;
    border-radius: 12px;
    background: radial-gradient(
        ellipse at center,
        rgb(103 232 249 / 5%),
        transparent 75%
      ),
      #080e19;
  }

  .main-screenshot {
    display: block;
    width: 100%;
    height: 100%;
    min-height: 0;
    object-fit: contain;
  }

  figcaption {
    display: flex;
    align-items: baseline;
    gap: 1rem;
    margin-top: 1rem;
    color: #b8c6db;
    font-size: 0.9rem;
  }

  .image-count {
    flex-shrink: 0;
    color: #67e8f9;
    font-variant-numeric: tabular-nums;
  }

  .gallery-controls {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 1.5rem;
  }

  .gallery-button {
    min-height: 44px;
    padding: 0.6rem 1rem;
    border: 1px solid #41516a;
    border-radius: 8px;
    background: #172238;
    color: #e7edf7;
  }

  .gallery-button:hover {
    border-color: #67e8f9;
  }

  .empty-preview {
    padding: 4rem 1.25rem;
    border: 1px dashed #41516a;
    border-radius: 12px;
    text-align: center;
  }

  .empty-preview p {
    margin-bottom: 0.5rem;
    font-weight: 700;
  }

  .empty-preview span {
    color: #9eafc8;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }

  @media (prefers-reduced-motion: no-preference) {
    dialog[open] {
      animation: showcase-enter 260ms cubic-bezier(0.22, 1, 0.36, 1);
    }

    .showcase-trigger span[aria-hidden="true"] {
      transition: transform 180ms ease;
    }

    .showcase-trigger:hover span[aria-hidden="true"],
    .showcase-trigger:focus-visible span[aria-hidden="true"] {
      transform: translate(3px, -3px);
    }
  }

  @keyframes showcase-enter {
    from {
      opacity: 0;
      transform: translateY(16px) scale(0.98);
    }

    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  .image-actions {
    display: flex;
    justify-content: flex-end;
    margin-top: 0.75rem;
  }

  .full-size-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    min-height: 44px;
    color: #67e8f9;
    font-size: 0.85rem;
    text-decoration: none;
  }

  .full-size-link:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  .full-size-link:focus-visible {
    outline: 3px solid #67e8f9;
    outline-offset: 4px;
    border-radius: 3px;
  }

  .gallery-controls {
    align-items: center;
    flex-wrap: wrap;
  }

  .keyboard-hint {
    color: #9eafc8;
    font-size: 0.8rem;
  }

  .thumbnail-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    gap: 0.65rem;
    margin-top: 1.25rem;
  }

  .thumbnail {
    position: relative;
    min-width: 0;
    aspect-ratio: 4 / 3;
    padding: 4px;
    overflow: hidden;
    border: 2px solid #33435c;
    border-radius: 8px;
    background: #080e19;
  }

  .thumbnail img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 3px;
    object-fit: contain;
  }

  .thumbnail:hover {
    border-color: #91a6c3;
  }

  .thumbnail.selected {
    border-color: #67e8f9;
    box-shadow: 0 0 0 1px rgb(103 232 249 / 20%);
  }

  .thumbnail-number {
    position: absolute;
    right: 4px;
    bottom: 4px;
    display: grid;
    place-items: center;
    min-width: 22px;
    height: 22px;
    padding-inline: 4px;
    border-radius: 4px;
    background: #0b1120;
    color: #e7edf7;
    font-size: 0.7rem;
  }

  @media (prefers-reduced-motion: no-preference) {
    .thumbnail {
      transition:
        border-color 180ms ease,
        box-shadow 180ms ease;
    }
  }

  @media (max-width: 600px) {
    .keyboard-hint {
      display: none;
    }

    figcaption {
      gap: 0.65rem;
    }
  }
  .project-details {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 1.5rem;
    margin-bottom: 2rem;
    padding: 1.25rem;
    border: 1px solid #33435c;
    border-radius: 12px;
    background: #0c1423;
  }

  .project-details h3 {
    margin: 0 0 0.75rem;
    color: #e7edf7;
    font-size: 0.9rem;
  }

  .contribution p {
    margin: 0;
    color: #b8c6db;
    font-size: 0.9rem;
  }

  .technology-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .technology-list li {
    padding: 0.3rem 0.65rem;
    border: 1px solid #334c60;
    border-radius: 999px;
    background: rgb(103 232 249 / 5%);
    color: #a5f3fc;
    font-size: 0.75rem;
  }

  @media (max-width: 650px) {
    .project-details {
      grid-template-columns: 1fr;
    }
  }
</style>
