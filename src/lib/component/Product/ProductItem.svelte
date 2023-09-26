<script>
  import StarRating from "@ernane/svelte-star-rating";
  export let title;
  export let price;
  export let area;
  export let address;
  export let description;
  export let name;
  export let zalo;
  export let phone;
  export let image;
  export let star;
  export let id;
  let img = [image];
  const config = {
    readOnly: false,
    countStars: +star,
    range: {
      min: 0,
      max: 5,
      step: 0.001,
    },
    starConfig: {
      size: 20,
      fillColor: "#F8DE22",
      strokeColor: "#F8DE22",
      unfilledColor: "#F8DE22",
      strokeUnfilledColor: "#F8DE22",
    },
  };
</script>

<div class="product_item row p-4">
  <div class="product_sub col-5">
    <a href="/">
      {#each img as item}
        <img src={item[0]} alt="" />
      {/each}</a
    >
  </div>
  <div class="col-7">
    <a href={`/product/${id}`} class="product_title">
      <span class="star">
        <StarRating {config} />
      </span>
      <span class="text-danger fw-bold">{title}</span>
    </a>
    <div class="product_info mt-3">
      <span class="price">Giá cho thuê: {price}</span>
      <span class="area">Diện tích: {area}</span>
      <span class="address mt-2">{address}</span>
    </div>
    <div class="mt-3">
      <span class="product_infomation">
        {description}
      </span>
    </div>
    <div class="product_user mt-2">
      <span class="rounded border border-1 p-1 bg-secondary text-white"
        >{name}</span
      >
      <div class="user_phone">
        <a
          target="_blank"
          href={`https://zalo.me/${zalo}`}
          class="me-3 rounded border border-1 p-1 bg-primary text-white"
          >Nhắn zalo</a
        >
        <a href={`tel:${phone}`} class="rounded border border-1 p-1 bg-info"
          >Gọi: {phone}</a
        >
      </div>
    </div>
  </div>
</div>

<style>
  .star {
    display: flex;
    justify-content: start;
  }
  .product_item {
    width: 100%;
    height: 100%;
  }
  .product_sub img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
  }
  .product_title {
    text-decoration: none;
    display: flex;
    flex-direction: column;
  }
  .product_info {
    display: flex;
    flex-wrap: wrap;
  }
  .product_info .price {
    width: 50%;
  }
  .area {
    width: 28%;
  }
  .product_user {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .product_infomation {
    color: #8a8d91;
    line-height: 1.5rem;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
  .user_phone a {
    text-decoration: none;
  }
</style>
