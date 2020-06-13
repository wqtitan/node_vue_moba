<template>
  <div class="home">
    <swiper :options="swiperOptions">
      <swiper-slide>
        <img
          class="w-100"
          src="../assets/banner/7e21ae26c9cfca91953e3e3dfc51879b.jpeg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-100"
          src="../assets/banner/471bcf301b5ce177768097d30156a5b7.jpeg"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-100"
          src="../assets/banner/b3d9f3b40ea5f3136adb87e05faaae63.png"
          alt=""
        />
      </swiper-slide>
      <div
        class="swiper-pagination pagination-home text-right px-3 pb-1"
        slot="pagination"
      ></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".pagination-home"
        }
        // Some Swiper option/callback...
      }
    };
  },
  components: {}
};
</script>

<style lang="scss">
@import "../assets/scss/variables";
.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    border-radius: 0.1538rem;
    background: map-get($map: $colors, $key: "white");
    &.swiper-pagination-bullet-active {
      background: map-get($map: $colors, $key: "info");
    }
  }
}
</style>
