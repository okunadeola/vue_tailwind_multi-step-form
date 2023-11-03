<script setup lang="ts">
    defineProps<{
        total: number,
        isYear: boolean
    }>()
</script>

<template>


    <div class="flex flex-col h-auto p-6 rounded-lg">
        <div class="flex justify-between">
            <div class=" text-color-cool-gray">Total (per {{isYear ? 'year' : 'month'}})</div>
            <div class="font-bold text-xl text-color-primary-purple-blue">+${{total}} 
                        /{{isYear ? 'yr' : 'mo'}}</div>
        </div>
    </div>


</template>

<style>

</style>