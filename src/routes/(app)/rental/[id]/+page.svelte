<script>
  import RentalItem from "$lib/component/Rental/RentalItem.svelte";
  import appAxios from "../../../../URL/Api";
  import {page} from "$app/stores";
  export let data;
  $: product = data.products.rows;
  let totalPage = data?.products?.count;
  let pages = [];
  let limit = 5;
  $: currentPage = 1;
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
    const paramsCate = $page.params.id;
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
    const data = await appAxios({
      method: "get",
      url: `/limit?categoryCode=${paramsCate}`,
      params: searchObj,
    });
    product = data.data.response.rows;
    let setcurrentPage = searchParams.get("page");
    if (setcurrentPage !== currentPage) {
      currentPage = setcurrentPage;
    }
  };
</script>

<div class="container-sm rental mt-3">
  {#each product as item}
    <RentalItem
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

  .btn-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
</style>
