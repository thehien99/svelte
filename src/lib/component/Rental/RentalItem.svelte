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
  $: img = [image];
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

<div class="container-sm mt-[40px]">
  <div class="rental_item row p-4">
    <div class="rental_sub col-5">
      <a href={`/product/${id}`}>
        {#each img as item}
          <img src={item[0]} alt="" />
        {/each}</a
      >
    </div>
    <div class="col-7 pro">
      <a href={`/product/${id}`} class="rental_title">
        <span class="stars">
          <StarRating {config} />
        </span>
        <span class="text-danger fw-bold">{title}</span>
      </a>
      <div class="rental_info mt-3">
        <span class="price">Giá cho thuê: {price}</span>
        <span class="area">Diện tích: {area}</span>
        <span class="address mt-2">{address}</span>
      </div>
      <div class="mt-3">
        <span class="rental_infomation">
          {description}
        </span>
      </div>
      <div class="rental_user mt-2">
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
</div>

<style>
  @media (max-width: 424px) {
    .stars {
      display: flex;
    }
    .rental_item .rental_sub {
      width: 100%;
    }
    .rental_item .pro {
      width: 100%;
      margin-top: 10px;
    }
    .rental_infomation {
      color: #8a8d91;
      line-height: 1.5rem;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }
    .rental_info {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    .rental_user {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }
    .rental_user span {
      width: 100%;
      text-align: center;
    }
    .user_phone {
      display: flex;
      justify-content: center;
      width: 100%;
      flex-direction: column;
      text-align: center;
    }
    .user_phone a {
      margin-right: 0px !important;
    }
  }
  @media (min-width: 425px) and (max-width: 768px) {
    .stars {
      display: flex;
      justify-content: start;
    }
    .rental_item {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    .rental_sub {
      width: 100%;
    }
    .rental_infomation {
      color: #8a8d91;
      line-height: 1.5rem;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }
    .pro {
      width: 100%;
      margin-top: 10px;
    }
    .rental_user {
      display: flex;
      flex-direction: column-reverse;
    }
    .rental_user span {
      width: 100%;
    }
    .rental_user .user_phone {
      display: flex;
      margin-bottom: 10px;
      flex-direction: column;
      width: 100%;
    }
    .user_phone a {
      margin-right: 0px !important;
    }
  }
  @media (min-width: 768px) and (max-width: 992px) {
    .stars {
      display: flex;
      justify-content: start;
    }
    .rental_item {
      width: 100%;
      height: 100%;
      margin: auto;
    }
    .rental_sub img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: 10px;
    }
    .rental_title {
      text-decoration: none;
      display: flex;
      flex-direction: column;
    }
    .rental_info {
      display: flex;
      flex-wrap: wrap;
    }
    .rental_info .price {
      width: 50%;
    }
    .area {
      width: 28%;
    }
    .rental_user {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .rental_infomation {
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
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    .stars {
      display: flex;
      justify-content: start;
    }
    .rental_item {
      width: 100%;
      height: 100%;
      margin: auto;
    }
    .rental_sub img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: 10px;
    }
    .rental_title {
      text-decoration: none;
      display: flex;
      flex-direction: column;
    }
    .rental_info {
      display: flex;
      flex-wrap: wrap;
    }
    .rental_info .price {
      width: 50%;
    }
    .area {
      width: 28%;
    }
    .rental_user {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .rental_infomation {
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
  }
  @media (min-width: 1201px) {
    .stars {
      display: flex;
      justify-content: start;
    }
    .rental_item {
      width: 100%;
      height: 100%;
      margin: auto;
    }
    .rental_sub img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      border-radius: 10px;
    }
    .rental_title {
      text-decoration: none;
      display: flex;
      flex-direction: column;
    }
    .rental_info {
      display: flex;
      flex-wrap: wrap;
    }
    .rental_info .price {
      width: 50%;
    }
    .area {
      width: 28%;
    }
    .rental_user {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .rental_infomation {
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
  }
</style>
