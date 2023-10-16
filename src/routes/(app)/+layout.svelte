<script>
	import Footer from './../../lib/component/Footer.svelte';
	import Navigation from './../../lib/component/Navigation.svelte';
  import Header from '../../lib/component/Header.svelte';
</script>

<div>
  <Header />
  <Navigation />
  <slot />
  <Footer />
</div>
