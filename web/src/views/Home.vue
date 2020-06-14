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
    <!-- end of swiper -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="n in 10" :key="n">
          <div class="sprite-news-border">
            <i class="sprite sprite-news"></i>
          </div>
          <div class="py-1 name-news-border">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- end of nav icons -->
    <m-card icon="menu" title="新闻资讯">
      <div class="nav jc-between">
        <div class="nav-item active">
          <div class="nav-link">热门</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">新闻</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">新闻</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">新闻</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">新闻</div>
        </div>
      </div>
      <div class="pt-3">
        <swiper>
          <swiper-slide v-for="m in 5" :key="m">
            <div class="py-2" v-for="n in 5" :key="n">
              <span>[新闻]</span>
              <span>|</span>
              <span>文章标题文章标题文章标题文章标题</span>
              <span>06/14</span>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </m-card>

    <m-card icon="card-hero" title="英雄列表"></m-card>
    <m-card icon="menu" title="精彩视频"></m-card>
    <m-card icon="menu" title="图文功率"></m-card>
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

.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;

  .nav-item {
    width: 25%;
    .sprite-news-border {
      border-right: 1px solid $border-color;
    }
    .name-news-border {
      border-right: 1px solid $border-color;
    }
    &:nth-child(4n) div {
      border-right: none;
    }
  }
}
</style>
