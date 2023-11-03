<script setup lang="ts">


defineProps<{
    name: string,
    image: string,
    monthly: number,
    yearly: number,
    id: number,
    isYear: boolean,
    selectedPlan: string
}>()


const emit = defineEmits<{
    (event: 'selectPlan', id: number): void
}>()

const select = (id: number)=>{
    emit("selectPlan", id)
}
</script>

<template>
    <button  @click="select(id)" type='button' class="flex flex-1 xlg:flex-col xlg:py-5 md:px-5 p-3 gap-3 border rounded-lg h-[70%] xlg:h-full   xlg:justify-between hover:border-color-primary-purple-blue  overflow-hidden" :class="selectedPlan === name && 'border-color-primary-marine-blue'" >

        <img :src="image" alt="img" class='w-10' />
        <div class='text-start'>
            <div class=' text-color-primary-marine-blue font-bold'>{{name}}</div>
            <div class=' text-color-cool-gray'>
                {{
                    isYear ? yearly : monthly
                }}/{{
                    isYear ? 'yr' : 'mo' 
                }}
            </div>
            <div>
                
                    <span v-if="isYear" class=' text-color-primary-marine-blue xlg:font-light  font-medium text-sm'>2 months free</span>
                
            </div>
        </div>
    </button>
</template>

<style>

</style>