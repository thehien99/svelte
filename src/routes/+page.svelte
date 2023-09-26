<script>
  import ProductList from "../lib/component/Product/productList.svelte";
  export let data;
  $: dataPost = data?.products?.rows;
  $: count = data?.products?.count;
</script>

<svelte:head>
  <title>Home-SvelteKit</title>
</svelte:head>
<div class="container-sm mt-3">
  <div class="container">
    <div class="row">
      <div class="col-8 product_list">
        <ProductList product={dataPost} totalPost={count} />
      </div>
      <div class="col-4">sidebar</div>
    </div>
  </div>
</div>

<style>
  .product_list {
    border: 1px solid #000;
  }
</style>
