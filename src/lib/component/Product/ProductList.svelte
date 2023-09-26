<script>
  import {page} from "$app/stores";
  import appAxios from "../../../URL/Api";
  import ProductItem from "./ProductItem.svelte";

  export let product;
  export let totalPost;
  let dataPost = product;
  let totalPage = totalPost;
  let pages = [];
  let limit = 5;
  let currentPage = 1;
  let valid = false;
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
    const searchParams = new URLSearchParams($page.url.searchParams);
    searchParams.append(key, value);
    let params = [];
    for (let entry of searchParams.entries()) {
      params.push(entry);
    }
    let searchObj = {};
    params.forEach((i) => {
      searchObj = {...searchObj, [i[0]]: [i[1]]};
      return searchObj;
    });
    if (key === "order") {
      searchObj.order = ["createdAt", "DESC"];
    }
    const data = await appAxios({
      method: "get",
      url: `/limit`,
      params: searchObj,
    });
    dataPost = data.data.response.rows;
    currentPage = value;
  };
</script>

<div class="product_list">
  <h4 class="mt-3">danh sách tin đăng</h4>
  <div class="mt-3 status">
    <span class="fw-bold">Sắp Xếp :</span>
    <button class="ms-2" on:click={() => changePage("page", "1")}
      >mặc định</button
    >
    <button class="ms-2" on:click={() => changePage("order")}>tin mới</button>
  </div>
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
  .product_list {
    margin-top: 40px;
  }
  .status button {
    border: 1px solid red;
    padding: 2px;
    border-radius: 10px;
    font-weight: 500;
  }
  .btn-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>
