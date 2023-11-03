<script setup lang="ts">

defineProps<{
    title: string,
    desc: string
}>()

</script>

<template>
    <div class='flex flex-col gap-y-2 mb-7'>
        <header class=' text-3xl font-extrabold text-color-primary-marine-blue'>{{title}}</header>
        <p class=' text-color-cool-gray'>{{desc}}</p>
      </div>
</template>

<style>

</style>