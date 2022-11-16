<script setup>
import { ref } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const breakpoints = ref({
  300: {
    itemsToShow: 1,
  },
  640: {
    itemsToShow: 1,
  },
  768: {
    itemsToShow: 3,
  },
  1024: {
    itemsToShow: 4,
  },
});
</script>

<template>
  <div class="container my-10 mx-auto">
    <Carousel
      :itemsToShow="4"
      :wrapAround="true"
      :autoplay="4000"
      :transition="1500"
      :breakpoints="breakpoints"
    >
      <Slide v-for="slide in 6" :key="slide">
        <img
          src="https://tabdeal.org/images/homepage/promo-banners-v2/crypto-promo-banner-desktop.png"
          alt="crypto promotion banner"
          class="promo-img"
        />
      </Slide>
      <template #addons>
        <navigation />
      </template>
    </Carousel>
  </div>
</template>
<style scoped>
.promo-img {
  @apply rounded-xl px-2 h-auto;
}
</style>
