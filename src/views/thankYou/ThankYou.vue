<script setup lang="ts">
import CheckImage from "../../assets/images/icon-thank-you.svg";
</script>

<template>
  <div class="flex flex-col w-full h-full">
    <div class="mt-0 flex flex-col gap-y-7 h-full justify-center items-center">
      <div>
        <img :src="CheckImage" alt="" />
      </div>
      <div>
        <span class="text-color-primary-marine-blue font-bold text-2xl"
          >Thank you!</span
        >
      </div>
      <div>
        <p class="text-center text-color-cool-gray text-lg">
          Thanks for confirming your subscription! <br />
          We hope you have fun using our <br />
          platform. If you ever need support, <br />
          please feel free to email us at <br />
          support@loremgaming.com.
        </p>
      </div>
    </div>
  </div>

</template>
<style></style>
