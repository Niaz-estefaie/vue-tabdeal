<template>
  <div class="footer-container">
    <div class="menu-link">
      <span>
        پلتفرم معاملاتی <span class="text-gray-400">تبدیل</span> مکانی امن و
        مطمئن برای خرید و فروش آنلاین ارز‌های دیجیتال می‌باشد. تبدیل یک صرافی
        آنلاین برای خرید و فروش <span class="text-gray-400">بیت کوین</span> و
        تبادل سایر ارزهای دیجیتال به صورت تخصصی می‌باشد.
      </span>
    </div>
    <div class="menu-link">
      <div class="font-bold">درباره ما</div>
      <div class="active-link">داستان ما</div>
      <div class="active-link">تماس با ما</div>
      <div class="active-link">سوالات متداول</div>
      <div class="active-link">قوانین و مقررات</div>
      <div class="active-link">کارمزد تبدیل</div>
    </div>
    <div class="menu-link">
      <div class="font-bold">خدمات تبدیل</div>
      <div class="active-link">راهنمای گام به گام</div>
      <div class="active-link">مشاوره رایگان</div>
      <div class="active-link">صرافی ارز دیجیتال</div>
      <div class="active-link">مستندات</div>
    </div>
    <div class="menu-link">
      <div class="font-bold">لینک های مفید</div>
      <div class="active-link">خرید آسان</div>
      <div class="active-link">خرید لونا کلاسیک</div>
      <div class="active-link">خرید سولانا</div>
      <div class="active-link">خرید فانتوم</div>
      <div class="active-link">قیمت ارز دیجیتال</div>
      <div class="active-link">انواع ارز دیجیتال</div>
    </div>
    <div class="menu-link">
      <div class="font-bold">لینک های مفید</div>
      <div class="active-link">خرید بیت کوین</div>
      <div class="active-link">خرید تتر</div>
      <div class="active-link">خرید اتریوم</div>
      <div class="active-link">خرید شیبا</div>
      <div class="active-link">قیمت ارز دیجیتال</div>
    </div>
    <div class="menu-link">
      <div class="font-bold">در شبکه های اجتماعی ما را دنبال کنید</div>
    </div>
  </div>
</template>
<style scoped>
.footer-container {
  @apply w-full bg-zinc-800 text-white flex flex-col sm:flex-row sm:justify-start justify-center p-10 gap-4 text-sm;
}
.menu-link {
  @apply sm:w-1/6 w-full sm:text-right text-center;
}
.active-link {
  @apply text-gray-400 active:bg-zinc-700 hover:bg-zinc-700 cursor-pointer py-2;
}
</style>
