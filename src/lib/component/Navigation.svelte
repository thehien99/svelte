<script>
  import {goto} from "$app/Navigation";
  import {onMount} from "svelte";
  import appAxios from "../../URL/Api";
  import {page} from "$app/stores";
  let cate = [];
  onMount(async () => {
    const res = await appAxios.get("/getall");
    cate = res.response;
  });
</script>

<div class="navigation">
  <div class="navigation-home">
    <a class="p-3" href="/">Trang Chủ</a>
  </div>
  <div class="navigation-menu">
    {#each cate as item (item.id)}
      <a href={`${item.code}`} class="p-3"> {item.value}</a>
    {/each}
  </div>
</div>

<style>
  .navigation {
    width: 100%;
    height: 50px;
    background-color: blue;
    opacity: 1;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: white;
  }
</style>
