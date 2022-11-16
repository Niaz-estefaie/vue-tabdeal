<script setup>
import Button from "../components/base/Button.vue";
</script>

<template>
  <div class="header-container">
    <div class="header-base">
      <a href="">
        <img
          src="https://tabdeal.org/_nuxt/image/6a75fe.webp"
          alt="main-logo"
          width="130"
          height="40"
        />
      </a>
      <div class="header-group-button">
        <Button
          borderClasses="border border-btn-secondary"
          colorClasses="bg-transparent text-btn-secondary"
          effectClass="hover:text-btn-secondary hover:bg-btn-hover"
        >
          <template v-slot:text>خرید و فروش</template>
        </Button>
        <Button
          borderClasses="border border-primary"
          colorClasses="bg-transparent text-primary"
          effectClass="hover:text-black hover:bg-primary"
        >
          <template v-slot:text>خرید آسان</template>
        </Button>
        <Button
          colorClasses="bg-transparent text-white"
          effectClass="hover:bg-btn-hover"
        >
          <template v-slot:text>راهنمای گام به گام</template>
        </Button>
        <Button
          colorClasses="bg-transparent text-white"
          effectClass="hover:bg-btn-hover"
        >
          <template v-slot:text>درآمد رایگان</template>
        </Button>
      </div>
    </div>
    <div class="flex items-center gap-4">
      <Button
        colorClasses="bg-transparent text-primary"
        effectClass="hover:bg-btn-hover"
      >
        <template v-slot:text>ورود</template>
      </Button>
      <Button
        colorClasses="bg-primary text-black"
        effectClass="hover:opacity-90"
      >
        <template v-slot:text>ثبت نام</template>
      </Button>
      <Button
        borderClasses="border border-btn-secondary"
        colorClasses="bg-transparent text-btn-secondary"
        effectClass="hover:text-btn-secondary hover:bg-btn-hover"
      >
        <template v-slot:text>پشتیبانی</template>
      </Button>
    </div>
  </div>
</template>

<style scoped>
.header-container {
  @apply w-full flex items-center justify-between h-16 bg-black text-gray-700 z-10 px-4;
}
.header-base {
  @apply flex items-center gap-4;
}
.header-group-button {
  @apply hidden md:flex md:justify-between md:items-center gap-2;
}
</style>
