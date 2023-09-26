<script>
  import {onMount} from "svelte";
  import appAxios from "../../URL/Api";
  import {infoUser} from "../../store/auth";

  onMount(async () => {
    const res = await appAxios.get("/getuser");
    infoUser.update((value) => (value = res.response));
  });
</script>

<div class="currentUSer">
  <span>
    Xin Chào, {$infoUser.name}
  </span>
  <span>
    Mã tài khoản: {$infoUser?.id?.slice(0, 4)}
  </span>
</div>

<style>
  .currentUSer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
  }
</style>
