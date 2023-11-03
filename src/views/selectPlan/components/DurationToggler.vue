<script setup lang="ts">

defineProps<{
    isYear: boolean,
}>()


const emit = defineEmits<{
    (event: 'toggle'): void
}>()
</script>

<template>
    <div class='flex justify-center items-center p-3 bg-color-Magnolia rounded-lg h-auto'>
        <div class='flex gap-x-4 items-center'>
            
            <p class="font-medium " :class="isYear ? ' text-color-cool-gray' : ' text-color-primary-marine-blue'">Monthly</p>


            <label class="cursor-pointer relative inline-block w-16 h-8 rounded-full">
                            <input :checked="isYear" @change="emit('toggle')" type="checkbox"  class="peer opacity-0 w-0 h-0"/>
                            <span class="absolute top-0 left-0 right-0 bottom-0 bg-color-primary-marine-blue border border-solid border-color-primary-pastel-blue rounded-full duration-300 before:content-[''] before:absolute before:w-6 before:h-6 before:bottom-1 before:left-1 before:rounded-full before:bg-color-whiten before:duration-300 peer-checked:before:translate-x-7 "></span>
            </label>

            <p class="font-medium" :class="isYear ? ' text-color-primary-marine-blue' : ' text-color-cool-gray'">Yearly</p>

        </div>
    </div>
</template>

<style>

</style>