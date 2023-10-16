<script>
  import {onMount} from "svelte";
  import appAxios from "../../../URL/Api";
  import Swal from "sweetalert2";
  let data = [];
  onMount(async () => {
    const admin = await appAxios({
      method: "get",
      url: `limit-admin`,
    });
    data = admin.response.data.rows;
  });
  const handleDeletePost = async (postId) => {
    const deletepost = await appAxios({
      method: "delete",
      url: "/delete",
      params: {postId},
    });
    if (deletepost.err === 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your delete success",
        showConfirmButton: false,
        timer: 1500,
      });
      const admin = await appAxios({
        method: "get",
        url: `limit-admin`,
      });
      data = admin.response.data.rows;
    }
  };
</script>

<div>
  <h1 class="fs-1 mb-4 ms-4 mt-4 font-bold">Quản Lý Tin Đăng</h1>
  <table class="table p-5">
    <thead>
      <tr class="font-bold">
        <th scope="col">Mã Tin Đăng</th>
        <th scope="col">Ảnh</th>
        <th scope="col">Giá</th>
        <th scope="col">Ngày tạo tin</th>
        <th scope="col">Ngày hết hạn</th>
        <th scope="col"> Tuỳ chọn </th>
      </tr>
    </thead>
    {#each data as item}
      <tbody>
        <tr>
          <td>{item?.id.slice(0, 8)}</td>
          <td>
            <img
              src={JSON.parse(item?.images?.image)}
              alt="hinh"
              class="w-[60px] rounded-md object-cover"
            />
          </td>
          <td>{item?.attributes?.price}</td>
          <td>{item?.overviews?.created}</td>
          <td>{item?.overviews?.expired}</td>
          <td>
            <button
              class="border-2 p-1 bg-danger text-white"
              on:click={handleDeletePost(item.id)}>Xoá</button
            >
            <button class="border-2 p-1 bg-primary text-white">Sửa</button>
          </td>
        </tr>
      </tbody>
    {/each}
  </table>
</div>
