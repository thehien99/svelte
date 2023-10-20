<script>
  import ProductList from "$lib/component/Product/ProductList.svelte";

  export let data;
  $: dataPost = data?.products?.rows;
  $: count = data?.products?.count;
</script>

<div class="container-sm mt-3 animate__animated animate__fadeInUp">
  <div class="container">
    <div class=" product_list">
      <ProductList product={dataPost} totalPost={count} />
    </div>
  </div>
</div>
