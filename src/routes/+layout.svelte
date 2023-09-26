<script>
  import Footer from "../lib/component/Footer.svelte";
  import Header from "$lib/component/Header.svelte";
  import Navigation from "../lib/component/Navigation.svelte";
  import "../app.css";
</script>

<div>
  <Header />
  <Navigation />
  <slot />
  <Footer />
</div>
