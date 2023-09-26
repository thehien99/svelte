<script>
  import {goto} from "$app/Navigation";
  import {user} from "../../store/auth";
  import CurrentUser from "./CurrentUser.svelte";
  const handleLogin = () => {
    goto("/auth/login", {replaceState: true});
  };
  const handleLogOut = () => {
    $user = null;
    localStorage.removeItem("token");
  };
  const handleSignUp = () => {
    goto("/auth/signup", {replaceState: true});
  };

  $: isLogin = $user;
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
        <button class="bg-primary">Quản lý</button>
        <button class="bg-danger" on:click={handleLogOut}>Đăng Xuất</button>
      </div>
    </div>
  {/if}
</div>

<style>
  .header-wrapper {
    margin-top: 10px;
    font-weight: 500;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: #000;
    text-align: center;
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
</style>
