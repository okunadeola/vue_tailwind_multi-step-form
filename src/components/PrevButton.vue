<script setup lang="ts">

import { useMultistep } from '../store/multistep';

const multistepStore = useMultistep()





</script>

<template>
    <div>
        <button class=' text-color-cool-gray hover:text-color-primary-marine-blue' @click="multistepStore.goToPrevStep">Go Back</button>
      </div>
</template>

<style>

</style>