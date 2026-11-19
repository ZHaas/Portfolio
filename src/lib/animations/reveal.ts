export function reveal(node: HTMLElement) {
  const motionPreference = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  );

  if (
    motionPreference.matches ||
    !("IntersectionObserver" in window) ||
    typeof node.animate !== "function"
  ) {
    return;
  }

  const rawDelay = Number(node.dataset.revealDelay ?? 0);
  const delay = Number.isFinite(rawDelay) ? rawDelay : 0;

  // Prepare the starting state now, rather than hiding the
  // element only after it has already scrolled into view.
  const animation = node.animate(
    [
      {
        opacity: 0,
        transform: "translateY(28px)",
      },
      {
        opacity: 1,
        transform: "translateY(0)",
      },
    ],
    {
      duration: 750,
      delay,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      fill: "both",
    },
  );

  animation.pause();
  animation.currentTime = 0;

  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;

      observer.disconnect();
      animation.play();
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -64px 0px",
    },
  );

  // Observe only after the paused starting state is prepared.
  observer.observe(node);

  function showImmediately() {
    observer.disconnect();
    animation.cancel();
  }

  function handleMotionChange() {
    if (motionPreference.matches) {
      showImmediately();
    }
  }

  function handleFinish() {
    // The normal CSS already matches the final state.
    // Remove the finished animation so it doesn't override
    // future hover effects.
    animation.cancel();
  }

  node.addEventListener("focusin", showImmediately);
  motionPreference.addEventListener("change", handleMotionChange);
  animation.addEventListener("finish", handleFinish);

  return () => {
    observer.disconnect();
    animation.cancel();
    node.removeEventListener("focusin", showImmediately);
    motionPreference.removeEventListener("change", handleMotionChange);
    animation.removeEventListener("finish", handleFinish);
  };
}
