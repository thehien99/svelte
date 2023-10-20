<script>
  import Footer from "$lib/component/Footer.svelte";
  import Header from "$lib/component/Header.svelte";
  import Navigation from "$lib/component/Navigation.svelte";
</script>

<div class="animate__fadeInUpBig animate__animated">
  <Header />
  <Navigation />
  <slot />
  <Footer />
</div>
