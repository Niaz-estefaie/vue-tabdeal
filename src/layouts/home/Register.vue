<script setup>
import Button from "../../components/base/Button.vue";
</script>

<template>
  <section class="register-section">
    <div class="register-container register-flex-section">
      <div class="register-content">
        <div class="register-title">همین حالا شروع کنید!</div>
        <div class="register-image">
          <img
            src="https://tabdeal.org/_nuxt/image/f66ed0.webp"
            alt="dots"
            height="16"
          />
        </div>
        <div class="lower-text">
          دکمه مقابل را بزنید و همین امروز معامله در تبدیل را آغاز کنید.
        </div>
      </div>
      <div class="flex-grow">
        <Button
            colorClasses="bg-primary text-black text-2xl p-8 w-full lg:w-1/2"
            effectClass="hover:opacity-90"
          >
            <template v-slot:text>ثبت نام</template>
          </Button>
      </div>
    </div>
  </section>
</template>
<style scoped>
.register-section {
  @apply bg-center bg-no-repeat;
  background: url(https://tabdeal.org/_nuxt/image/eeab23.webp) 50%;
}
.register-container {
  @apply container m-auto;
}
.register-flex-section {
  @apply flex flex-col items-center sm:flex-row py-6 lg:py-12;
}
.register-content {
  @apply h-full flex-col items-center lg:items-start text-center lg:text-start gap-6 flex-grow;
}
.register-title {
  @apply text-4xl font-medium text-white;
}
.register-image {
  @apply flex items-center py-4 justify-center lg:justify-start;
}
.lower-text {
  @apply text-white py-2;
}
</style>
