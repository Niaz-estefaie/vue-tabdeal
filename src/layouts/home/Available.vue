<script setup>
import Button from "../../components/base/Button.vue";
</script>

<template>
  <section class="available-section">
    <div class="available-container available-flex-section">
      <div class="available-content">
        <div class="available-title">همه جا در دسترس شما</div>
        <div class="available-image">
          <img
            src="https://tabdeal.org/_nuxt/image/f66ed0.webp"
            alt="dots"
            height="16"
          />
        </div>
        <div class="lower-text">
          با اپلیکیشن موبایل حرفه‌ای تبدیل، به سادگی و در هر شرایطی خرید و فروش
          امن ارز‌های دیجیتال را تجربه کنید!
        </div>
        <div class="py-4">
          <Button
            colorClasses="bg-primary text-black text-lg p-8 w-full lg:w-auto"
            effectClass="hover:opacity-90"
          >
            <template v-slot:text>دانلود اپلیکیشن تبدیل</template>
          </Button>
        </div>
      </div>
      <div class="img-class"></div>
    </div>
  </section>
</template>
<style scoped>
.available-section {
  @apply bg-zinc-800;
}
.available-container {
  @apply container m-auto;
}
.available-flex-section {
  @apply flex flex-col sm:flex-row;
}
.available-content {
  @apply m-auto py-12 lg:py-40 h-full flex-col items-center lg:items-start text-center lg:text-start gap-6;
}
.available-title {
  @apply text-4xl font-medium text-white;
}
.available-image {
  @apply flex items-center py-4 justify-center lg:justify-start;
}
.lower-text {
  @apply text-white py-4;
}
.img-class {
  @apply hidden lg:block w-full h-full;
  background: url(https://tabdeal.org/images/homepage/new-content/phone-mockup-opt.png)
    no-repeat;
  height: inherit;
}
</style>
