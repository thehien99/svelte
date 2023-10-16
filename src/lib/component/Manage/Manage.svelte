<script>
  import {infoUser} from "./../../../store/auth.js";
  import Icon from "@iconify/svelte";
  $: user = $infoUser;
  $: console.log(user);
</script>

<div class="dashboard">
  <div class="w-[240px] bg-[#F1F2F7] sidebar">
    <div class="h-[64px] logo">logo</div>
    <div class="menu_dashboard">
      <ul>
        <h1 class="text-[#082431] text-opacity-[0.5] ms-4 text-[20px]">Menu</h1>
        <li>
          <span class="me-3">
            <Icon icon="solar:pen-bold" color="blue" />
          </span>
          <a class="text-[14px]" href="/">đăng tin cho thuê</a>
        </li>
        <li>
          <span class="me-3">
            <Icon icon="material-symbols:bookmark-manager" color="red" />
          </span>
          <a class="text-[14px]" href="/dashboard/tableManage"
            >Quản lý tin đăng</a
          >
        </li>
        <li>
          <span class="me-3">
            <Icon icon="ic:round-manage-accounts" color="pink" />
          </span>
          <a class="text-[14px]" href="/">Sửa thông tin cá nhan</a>
        </li>
        <li>
          <span class="me-3">
            <Icon icon="bx:log-out" />
          </span>
          <a class="text-[14px]" href="/">Đăng Xuất</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="w-full bg-[#FFFFFF] content">
    <div class="h-[64px] header">
      <div class="float-right me-[100px]">
        <span class="font-bold"> Xin Chào, {user.name}</span>
      </div>
    </div>
  </div>
</div>

<style>
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
  .menu_dashboard > ul > li {
    padding: 15px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
  }
</style>
