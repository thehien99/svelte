<script>
  import {browser} from "$app/environment";
  import Icon from "@iconify/svelte";
  import {onMount} from "svelte";
  import appAxios from "../../URL/Api";
  let cate = [];
  let isOpenMenu = false;
  onMount(async () => {
    const res = await appAxios.get("/getall");
    cate = res.response;
  });
  const handleOpenMenu = () => {
    isOpenMenu = !isOpenMenu;
  };
</script>

<button class="icon_menu" on:click={handleOpenMenu}>
  <Icon icon="solar:hamburger-menu-bold" width="40px" />
</button>
<div class="navigation" class:open={isOpenMenu}>
  <div class="navigation-home">
    <a class="p-3" href="/">Trang Chủ</a>
  </div>
  <div class="navigation-menu">
    {#if cate.length > 0}
      {#each cate as item (item.id)}
        <a class="p-3" href={`/rental/${item.code}`}>{item.value}</a>
      {/each}
    {/if}
  </div>
</div>

<style>
  @media (max-width: 424px) {
    .navigation {
      display: none;
    }
    .navigation.open {
      width: 100%;
      background-color: blue;
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      color: white;
      position: absolute;
      z-index: 2;
    }
    .navigation-menu {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .icon_menu {
      margin-left: 5%;
    }
  }
  @media (min-width: 425px) and (max-width: 768px) {
    .icon_menu {
      display: none;
    }
    .navigation {
      width: 100%;
      height: 76px;
      background-color: blue;
      opacity: 1;
      margin-top: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      color: white;
    }
    .navigation-home {
      display: flex;
    }
    .navigation .navigation-menu {
      display: flex;
    }
  }

  @media (min-width: 768px) and (max-width: 992px) {
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
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    .icon_menu {
      display: none;
    }
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
  }
  @media screen and (min-width: 1201px) {
    .icon_menu {
      display: none;
    }
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
  }
</style>
