<script>
  import Icon from "@iconify/svelte";
  import avatar from "../../../untils/img/user.jpg";
  import SilderSlick from "../../../lib/component/SilderSlick.svelte";
  import Map from "../../../lib/component/Map.svelte";
  export let data;
  let product = data.products[0];
</script>

<div class="container-xxl h-full flex gap-4 mt-7">
  <div class="w-3/5 bg-[#fff] border rounded-md border-[#dedede]">
    <SilderSlick img={JSON?.parse(product?.images?.image)} />
    <div>
      <header class="ps-4">
        <h4 class="flex">
          <span class="flex" />
          <div />
        </h4>
        <p class="mt-7 flex flex-col">
          <span class="ms-1 cursor-pointer underline text-blue-600">
            Chuyên mục: {product?.labels?.value}
          </span>
          <span class="ms-1 cursor-pointer mt-2 font-bold">
            {product?.address}
          </span>
        </p>
        <address class="flex items-center font-medium mt-3" />
        <div class="flex">
          <div
            class="flex items-center text-2xl font-bold text-green-500 text-center"
          >
            <Icon icon="tdesign:money" />
            {product?.attributes?.price}
          </div>
          <div class="flex items-center ms-12">
            <Icon icon="academicons:ieee-square" />
            {product?.attributes?.acreage}
          </div>
          <div class="flex items-center ms-12">
            <Icon icon="icon-park:time" />
            {product?.attributes?.published}
          </div>
          <div class="flex items-center ms-12">{product?.overviews?.code}</div>
        </div>
      </header>
      <section class="mt-7 ps-4">
        <div>
          <h1 class="font-bold fs-4">Thông tin mô tả:</h1>
          <div class="mt-2 p-2 flex flex-col gap-2">
            {#each JSON.parse(product?.description) as item}
              <span>{item}</span>
            {/each}
          </div>
        </div>
      </section>
      <section class="mt-7 ps-4">
        <div>
          <h4 class="font-bold fs-4">Đặc điểm tin đăng</h4>
        </div>
        <div>
          <table class="table">
            <tbody>
              <tr>
                <td>Mã tin:</td>
                <td>{product?.attributes?.hashtag}</td>
              </tr>
              <tr class="bg-[#ccc]">
                <td>Khu vực</td>
                <td>{product?.labels?.value}</td>
              </tr>
              <tr>
                <td>Loại tin rao:</td>
                <td>{product?.overviews?.type}</td>
              </tr>
              <tr class="bg-[#ccc]">
                <td>Đối tượng thuê:</td>
                <td>{product?.overviews?.target}</td>
              </tr>
              <tr>
                <td>Gói tin:</td>
                <td>{product?.overviews?.bonus}</td>
              </tr>
              <tr class="bg-[#ccc]">
                <td>Ngày đăng:</td>
                <td>
                  <time title={product?.overviews?.created}
                    >{product?.overviews?.created}
                  </time>
                </td>
              </tr>
              <tr>
                <td>Ngày hết hạn:</td>
                <td>
                  <time title={product?.overviews?.expired}
                    >{product?.overviews?.expired}</time
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section class="mt-7 ps-4">
        <div>
          <h3 class="font-bold fs-4">Thông tin liên hệ</h3>
        </div>
        <div class="section-content">
          <table class="table">
            <tbody>
              <tr>
                <td class="w-[33%]">Liên hệ:</td>
                <td>{product?.sellers?.name}(*)</td>
              </tr>
              <tr>
                <td>Điện thoại:</td>
                <td>{product?.sellers?.phone}</td>
              </tr>
              <tr>
                <td>Zalo</td>
                <td> {product?.sellers?.zalo} </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section class="mt-7 ps-4">
        <div>
          <h3>Bản đồ</h3>
          <Map address={(product?.address).slice(9)} />
        </div>
      </section>
    </div>
  </div>
  <div class="w-1/4">
    <div
      class="p-3 w-full h-[20rem] bg-[#febb02] flex flex-col items-center border rounded-md"
    >
      <img
        src={avatar}
        alt=""
        class="w-[6rem] rounded-full border object-contain"
      />
      <h4 class="mt-2 font-bold fs-4">{product?.sellers?.name}</h4>
      <span class="flex items-center">
        <span class="text-sm font-normal">Đang hoạt động</span>
      </span>
      <div
        class="w-full mt-2 bg-green-600 p-2 flex justify-center items-center gap-2 rounded-md"
      >
        <Icon icon="ph:phone-fill" width="25" color="red" />
        <a
          target="_blank"
          href={`tel:${product?.sellers?.phone}`}
          class="no-underline text-white text-xl font-bold cursor-pointer"
          >{product?.sellers?.phone}</a
        >
      </div>
      <div
        class="w-full mt-2 bg-white p-2 flex justify-center items-center gap-2 rounded-md"
      >
        <Icon icon="arcticons:zalo" color="red" width="25" />
        <a
          target="_blank"
          href={`https://zalo.me/${product?.sellers?.phone}`}
          class="no-underline text-black text-xl font-bold cursor-pointer"
          >{product?.sellers?.phone}</a
        >
      </div>
    </div>
  </div>
</div>
