<script>
  import ProductList from "$lib/component/Product/productList.svelte";
  export let data;
  $: dataPost = data?.products?.rows;
  $: count = data?.products?.count;
</script>

<svelte:head>
  <title>Home-SvelteKit</title>
</svelte:head>
<div class="container-sm mt-3">
  <div class="container">
    <div class=" product_list">
      <ProductList product={dataPost} totalPost={count} />
    </div>
  </div>
</div>

<style>
  .product_list {
    border: 1px solid #000;
    border-radius: 10px;
  }
</style>
