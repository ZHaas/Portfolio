<script lang="ts">
  import { page } from "$app/state";
  import favicon from "#lib/assets/favicon.svg";
  import { inject, pageview } from "@vercel/analytics";
  import { onMount } from "svelte";
  import type { LayoutProps } from "./$types";

  let analyticsReady = $state(false);
  let lastRoute = "";

  onMount(() => {
    inject({
      framework: "sveltekit",
      disableAutoTrack: true,
    });

    const { route, url } = page;
    lastRoute = `${route.id ?? ""}:${url.pathname}`;

    if (route.id) {
      pageview({ route: route.id, path: url.pathname });
    }

    analyticsReady = true;
  });

  $effect(() => {
    if (!analyticsReady) return;

    const { route, url } = page;
    if (!route.id) return;

    const routeKey = `${route.id}:${url.pathname}`;
    if (routeKey === lastRoute) return;

    lastRoute = routeKey;
    pageview({ route: route.id, path: url.pathname });
  });

  let { children }: LayoutProps = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
