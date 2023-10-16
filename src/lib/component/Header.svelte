<script>
  import {goto} from "$app/Navigation";
  import {user} from "../../store/auth";
  import CurrentUser from "./CurrentUser.svelte";
  $: isLogin = $user;
  let valid = false;
  const handleLogin = () => {
    goto("/login", {replaceState: true});
  };
  const handleLogOut = () => {
    $user = null;
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    goto("/", {replaceState: true});
  };
  const handleSignUp = () => {
    goto("/signup", {replaceState: true});
  };
  const handleStatus = () => {
    valid = !valid;
  };
</script>

<div class="header">
  {#if !isLogin}
    <div class="container header-wrapper">
      <div>logo</div>
      <div />
      <div class="header-menu">
        <button class="bg-primary" on:click={handleLogin}>Đăng Nhập</button>
        <button class="bg-danger" on:click={handleSignUp}>Đăng Ký</button>
      </div>
    </div>
  {:else if isLogin}
    <div class="container header-wrapper">
      <div>logo</div>
      <div class="header-menu">
        <div>
          <CurrentUser />
        </div>
        <button on:click={handleStatus} class="bg-primary"
          >Quản Lý Tài Khoản
          <div class={`${valid ? "active" : "manager"}`}>
            <a href="/dashboard">Thông Tin Tài Khoản</a>
            <a href="/">Đăng Tin Cho Thuê</a>
          </div>
        </button>
        <button class="bg-danger" on:click={handleLogOut}>Đăng Xuất</button>
      </div>
    </div>
  {/if}
</div>

<style>
  @media (max-width: 424px) {
    .header-menu {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    button {
      text-decoration: none;
      color: #fff;
      border: 2px solid #000;
      border-radius: 10px;
      padding: 7px;
      margin-top: 5px;
    }
    .manager {
      display: none;
    }
    .active {
      display: flex;
      flex-direction: column;
      position: absolute;
      right: 0;
      align-items: center;
      z-index: 1;
      background-color: rgb(241 245 249);
      border-radius: 10px;
      padding: 7px;
      color: blue;
      width: 100%;
    }
  }
  @media (min-width: 425px) and (max-width: 768px) {
    .header-wrapper {
      margin-top: 10px;
      font-weight: 500;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      color: #000;
      text-align: center;
      position: relative;
    }
    .header-menu {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    button {
      margin-left: 15px;
      text-decoration: none;
      color: #fff;
      border: 2px solid #000;
      border-radius: 10px;
      padding: 7px;
    }
    .manager {
      display: none;
    }
    .active {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 50px;
      z-index: 1;
      background-color: rgb(241 245 249);
      border-radius: 10px;
      padding: 7px;
      color: blue;
    }
  }
  @media (min-width: 768px) and (max-width: 992px) {
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    .header-wrapper {
      margin-top: 10px;
      font-weight: 500;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      color: #000;
      text-align: center;
      position: relative;
    }
    .header-menu {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    button {
      margin-left: 15px;
      text-decoration: none;
      color: #fff;
      border: 2px solid #000;
      border-radius: 10px;
      padding: 7px;
    }
    .manager {
      display: none;
    }
    .active {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 50px;
      z-index: 1;
      background-color: rgb(241 245 249);
      border-radius: 10px;
      padding: 7px;
      color: blue;
    }
  }
  @media (min-width: 1201px) {
    .header-wrapper {
      margin-top: 10px;
      font-weight: 500;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      color: #000;
      text-align: center;
      position: relative;
    }
    .header-menu {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    button {
      margin-left: 15px;
      text-decoration: none;
      color: #fff;
      border: 2px solid #000;
      border-radius: 10px;
      padding: 7px;
    }
    .manager {
      display: none;
    }
    .active {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 50px;
      z-index: 1;
      background-color: rgb(241 245 249);
      border-radius: 10px;
      padding: 7px;
      color: blue;
    }
  }
</style>
