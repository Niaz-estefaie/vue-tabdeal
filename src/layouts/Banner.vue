<script setup>
import Button from "../components/base/Button.vue";
</script>

<template>
  <section class="banner-section">
    <div class="banner-section-outer">
      <div class="banner-section-inner"></div>
    </div>
    <div class="banner-section-text">
      <div class="banner-title">
        <div>صرافی ارز دیجیتال</div>
        <img
          src="https://tabdeal.org/images/homepage/tabdeal-typo-logo-white.svg"
          alt="tabdeal"
          width="107"
          height="44"
          class="mr-3"
        />
      </div>
      <p class="banner-text">
        خرید و فروش امن و آسان به‌روزترین ارزهای دیجیتال جهان
      </p>
      <div class="pt-4">
        <form action="submit" class="banner-form-section">
          <input
            type="number"
            class="banner-input"
            placeholder="شماره همراه خود را وارد کنید"
          />
          <div class="sm:w-1/3 w-full">
            <Button
              colorClasses="bg-primary text-black text-xl h-14 w-full"
              effectClass="hover:opacity-90"
            >
              <template v-slot:text>همین حالا ثبت نام کنید</template>
            </Button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.banner-section {
  height: 400px;
  @apply w-full bg-secondary-darkest z-0 flex;
}
.banner-section-text {
  @apply text-white flex flex-col justify-center items-center w-full z-30 px-2;
}
.banner-title {
  @apply mb-4 flex flex-col sm:flex-row items-center leading-[1.57] font-medium text-[42px];
}
.banner-text {
  @apply text-secondary-lightest text-sm sm:text-lg mb-2;
}
.banner-section-outer {
  @apply absolute left-0 z-0 flex max-w-full overflow-hidden;
  width: 638px;
  flex: 1 0 auto;
  height: inherit;
}
.banner-section-inner {
  @apply absolute top-0 left-0 w-full;
  background: url(https://tabdeal.org/images/homepage/new-content/homepage-banner-triangle.svg)
    no-repeat 50%;
  z-index: -1;
  height: inherit;
}
.banner-form-section {
  @apply flex flex-col sm:flex-row justify-center gap-4 sm:items-center px-3 sm:px-0 text-black md:w-[600px] sm:w-full;
}
.banner-input {
  @apply h-14 px-6 text-lg leading-7 leading-loose sm:w-2/3 w-full rounded placeholder-gray-400 focus:outline-0;
}
</style>
