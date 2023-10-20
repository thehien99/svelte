<script>
  import { page } from "$app/stores";
  import appAxios from "../../../URL/Api";
  import ProductItem from "./ProductItem.svelte";

  export let product;
  export let totalPost;
  $: currentPage = 1;
  let dataPost = product;
  let totalPage = totalPost;
  let pages = [];
  let limit = 5;
  let scroll;
  function createArray(value) {
    const totalPages = Math.ceil(value / limit);
    let arr = [];
    for (let i = 1; i <= totalPages; i++) {
      arr.push(i);
    }
    return arr;
  }
  pages = createArray(totalPage);
  const changePage = async (key, value) => {
    scroll.scrollIntoView({
      behavior: "smooth",
    });
    const searchParams = new URLSearchParams($page.url.searchParams);
    searchParams.append(key, value);
    let params = [];
    for (let entry of searchParams.entries()) {
      params.push(entry);
    }
    let searchObj = {};
    params.forEach((i) => {
      searchObj = { ...searchObj, [i[0]]: [i[1]] };
      return searchObj;
    });
    const data = await appAxios({
      method: "get",
      url: `/limit`,
      params: searchObj,
    });
    dataPost = data.data.response.rows;
    currentPage = value;
  };
</script>

<div class="product_list" bind:this={scroll}>
  <h1 class="mt-3 text-center font-bold fs-3 uppercase">danh sách tin đăng</h1>
  <div class="mt-5 w-full">
    {#each dataPost as item (item.id)}
      <ProductItem
        image={JSON.parse(item.images.image)}
        title={item.title}
        price={item.attributes.price}
        area={item.attributes.acreage}
        address={item.address}
        description={JSON.parse(item.description)}
        name={item.sellers.name}
        zalo={item.sellers.zalo}
        phone={item.sellers.phone}
        star={item.star}
        id={item?.id}
      />
    {/each}
  </div>
  <div class="btn-pagination">
    {#each pages as item}
      <button
        class={`border p-2 ms-2 ${currentPage === item ? "bg-danger" : ""}`}
        on:click={() => changePage("page", item)}>{item}</button
      >
    {/each}
  </div>
</div>

<style>
  @media (max-width: 424px) {
  }
  @media (min-width: 425px) and (max-width: 768px) {
    .product_list {
      margin-top: 40px;
    }
  }
  @media (min-width: 768px) and (max-width: 992px) {
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    .product_list {
      margin-top: 40px;
    }
    .btn-pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
  @media (min-width: 1201px) {
    .product_list {
      margin-top: 40px;
    }
    .btn-pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }
</style>
