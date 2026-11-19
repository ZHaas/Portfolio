<script lang="ts">
  import favicon from "#lib/assets/favicon.svg";
  import { dev } from "$app/env";
  import type { LayoutProps } from "./$types";
  import { injectAnalytics } from "@vercel/analytics/sveltekit";

  injectAnalytics({ mode: dev ? "development" : "production" });

  let { children }: LayoutProps = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
