<script>
  import {onMount} from "svelte";
  import appAxios from "../../URL/Api";

  $: infoUser = "";
  onMount(async () => {
    const res = await appAxios.get("/getuser");
    infoUser = res?.response?.name;
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
