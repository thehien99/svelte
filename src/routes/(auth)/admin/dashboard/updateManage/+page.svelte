<script>
  import avatar from "../../../../../untils/img/user.jpg";
  import { onMount } from "svelte";
  import Swal from "sweetalert2";
  import appAxios from "../../../../../URL/Api.js";
  import { nameUser } from "../../../../../store/auth";
  import { validatePhoneNumber } from "../../../../../lib/function/validateForm";
  $: payload = {
    name: inforUser?.name || "",
    phone: inforUser?.phone || "",
  };
  $: invalidPhone = validatePhoneNumber(payload?.phone);
  let inforUser = {};
  onMount(async () => {
    const res = await appAxios.get("/getuser");
    inforUser = res.response;
  });
  let setName = (e) => {
    payload.name = e.target.value;
  };
  let setPhone = (e) => {
    payload.phone = e.target.value;
  };
  const handleUpdate = async () => {
    const res = await appAxios({
      method: "put",
      url: "/updateuser",
      data: payload,
    });
    if (res.err === 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your update success",
        showConfirmButton: false,
        timer: 1500,
      });
      const res = await appAxios.get("/getuser");
      nameUser.update((value) => (value = res?.response?.name));
    }
  };
</script>

<h1 class="fs-1 font-bold text-center">Sửa Thông Tin Cá Nhân</h1>
<div class="edit_account mt-[25px]">
  <div class="w-full mt-3">
    <label for="" class="italic font-semibold">Tên Hiển Thị</label>
    <input
      name="name"
      type="text"
      class="w-full bg-red border-2 border-solid p-2"
      on:change={setName}
      value={payload?.name}
    />
  </div>
  <div class="w-full mt-3">
    <label for="" class="italic font-semibold">Số Điện Thoại</label>
    <input
      name="phone"
      type="number"
      class="w-full bg-red border-2 border-solid p-2"
      on:change={setPhone}
      value={payload?.phone}
    />
    {#if !invalidPhone}
      <p class="text-danger">pls inputs number phone</p>
    {/if}
  </div>
  <div class="w-full mt-3">
    <a href="/" class="text-blue-700">Đổi Mật Khẩu*</a>
  </div>
  <div class="w-full mt-3">
    <span>Ảnh đại diện</span>
    <img
      src={inforUser.avatar || avatar}
      alt="hinh"
      class="w-[6rem] rounded-full border object-contain mt-2"
    />
  </div>
  <button
    class="mt-3 border-2 p-2 bg-blue-500 text-white"
    on:click={handleUpdate}
  >
    Cập Nhật</button
  >
</div>

<style>
  @media (max-width: 424px) {
    .edit_account {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 50%;
      transform: translate(-50%, -50%);
      margin-top: 15%;
    }
  }
  @media (min-width: 425px) and (max-width: 768px) {
    .edit_account {
      position: absolute;
      top: 60%;
      left: 50%;
      width: 50%;
      transform: translate(-50%, -50%);
    }
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    .edit_account {
      position: absolute;
      top: 60%;
      left: 60%;
      width: 50%;
      transform: translate(-50%, -50%);
    }
  }
  @media (min-width: 1201px) {
    .edit_account {
      position: absolute;
      top: 40%;
      left: 60%;
      width: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>
