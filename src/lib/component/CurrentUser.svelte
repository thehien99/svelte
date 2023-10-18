<script>
  import { nameUser } from "./../../store/auth.js";
  import { onMount } from "svelte";
  import appAxios from "../../URL/Api";

  $: infoUser = "";
  onMount(async () => {
    const res = await appAxios.get("/getuser");
    infoUser = res?.response?.name;
    $nameUser = infoUser;
    window.localStorage.setItem("name", infoUser);
  });
</script>

<div class="currentUser">
  <span> Xin Chào, {infoUser} </span>
</div>

<style>
  .currentUser {
    display: block;
  }
</style>
