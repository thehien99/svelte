<script>
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import Icon from "@iconify/svelte";
  import { nameUser, user } from "../../../../store/auth";
  $: pathname = $page.url.pathname;
  $: name = $nameUser;
  const sidebar = [
    {
      id: 1,
      path: "/admin/dashboard",
      name: "Quản lý tin đăng",
      icon: "material-symbols:bookmark-manager",
      color: "red",
    },
    {
      id: 2,
      path: "/admin/dashboard/upPost",
      name: "Đăng tin cho thuê",
      icon: "solar:pen-bold",
      color: "blue",
    },
    {
      id: 3,
      path: "/admin/dashboard/updateManage",
      name: "Sửa thông tin cá nhân",
      icon: "ic:round-manage-accounts",
      color: "pink",
    },
    {
      id: 4,
      path: "/",
      name: "Quay về trang chủ",
      icon: "mdi:home",
    },
  ];
  const handleLogout = () => {
    $user = null;
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    goto("/", { replaceState: true });
  };
  const isACtiveStyle =
    "hover:bg-gray-200 flex rounded-md items-center gap-2 py-2 mt-2 font-bold bg-gray-200 no-underline text-black ";
  const noActiveStyle =
    "hover:bg-gray-200 flex rounded-md items-center gap-2 py-2 mt-2 cursor-pointer no-underline text-black";
  let isOpenMenu = false;
  const handleOpenMenu = () => {
    isOpenMenu = !isOpenMenu;
  };
</script>

<div class="dashboard animate__animated animate__bounceInDown">
  <div class="w-[240px] bg-[#F1F2F7] sidebar" class:open={isOpenMenu}>
    <div class="h-[64px] logo">logo</div>
    <div class="menu_dashboard">
      <ul>
        <h1 class="text-[#082431] text-opacity-[0.5] ms-4 text-[20px]">Menu</h1>
        {#each sidebar as item (item.id)}
          <li class="mt-3">
            <a
              class={`text-[14px] ${
                pathname === item?.path ? isACtiveStyle : noActiveStyle
              }`}
              href={item?.path}
            >
              <span class="me-3">
                <Icon icon={item?.icon} color={item?.color} />
              </span>
              {item?.name}
            </a>
          </li>
        {/each}
        <button
          on:click={handleLogout}
          class="text-[14px] font-normal flex items-center uppercase ms-2 mt-3"
        >
          <span class="me-4">
            <Icon icon="bx:log-out" />
          </span>
          Đăng Xuất
        </button>
      </ul>
    </div>
  </div>
  <div class="bg-[#FFFFFF] content">
    <div class="h-[64px] header">
      <button class="icon_menu" on:click={handleOpenMenu}>
        <Icon icon="typcn:th-menu" width="30px" />
      </button>
      <div class="float-right me-[100px] font-bold name">
        Xin chàoo, {name}
      </div>
    </div>
    <div class="mt-4">
      <slot />
    </div>
  </div>
</div>

<style>
  @media (max-width: 424px) {
    .dashboard {
      display: flex;
      flex-direction: column;
    }
    .sidebar {
      display: none;
    }
    .sidebar.open {
      width: 100%;
      display: block;
      position: absolute;
      z-index: 1;
      left: 32px;
      bottom: 28%;
      border-radius: 10px;
      padding: 14px;
    }
    .header {
      display: flex;
      margin: 6% 6%;
      align-items: center;
    }
    .header .name {
      float: left;
      margin-right: 0;
      margin-left: 5%;
    }
  }
  @media (min-width: 425px) and (max-width: 768px) {
    .dashboard {
      display: flex;
      flex-direction: column;
    }
    .sidebar {
      display: none;
    }
    .sidebar.open {
      width: 85%;
      display: block;
      position: absolute;
      z-index: 1;
      left: 6%;
      bottom: 25%;
      border-radius: 10px;
      padding: 14px;
    }
    .header {
      display: flex;
      margin: 6% 6%;
      align-items: center;
    }
    .header .name {
      float: left;
      margin-right: 0;
      margin-left: 5%;
    }
  }
  @media (min-width: 768px) and (max-width: 992px) {
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    .dashboard {
      width: 100%;
      height: 960px;
      display: flex;
    }
    .logo {
      line-height: 64px;
      text-align: center;
      border-bottom: 1px solid #000;
    }
    .header {
      line-height: 64px;
      border-bottom: 1px solid #000;
    }
    .menu_dashboard {
      width: 200px;
      height: 398px;
      margin: 20px;
      margin-top: 40px;
    }
    .menu_dashboard > ul > li > a {
      padding: 8px;
      text-transform: uppercase;
      display: flex;
      align-items: center;
    }
    .icon_menu {
      display: none;
    }
    .content {
      width: 100%;
    }
  }
  @media (min-width: 1201px) {
    .dashboard {
      width: 100%;
      height: 960px;
      display: flex;
    }
    .logo {
      line-height: 64px;
      text-align: center;
      border-bottom: 1px solid #000;
    }
    .header {
      line-height: 64px;
      border-bottom: 1px solid #000;
    }
    .menu_dashboard {
      width: 200px;
      height: 398px;
      margin: 20px;
      margin-top: 40px;
    }
    .menu_dashboard > ul > li > a {
      padding: 8px;
      text-transform: uppercase;
      display: flex;
      align-items: center;
    }
    .icon_menu {
      display: none;
    }
    .content {
      width: 100%;
    }
  }
</style>
