<script setup lang="ts">
import { PlanOption } from '../../../model';
import Choice from './Choice.vue';


defineProps<{
    options: Array<PlanOption>,
    selectedPlan: string,
    isYear: boolean,
}>()


const emit = defineEmits<{
    (event: 'selectPlan', id: number): void
}>()

const select = (id: number)=>{
    emit("selectPlan", id)
}



</script>

<template>
    <div class='flex flex-col xlg:flex-row xlg:gap-x-2  gap-y-3 h-[50%]'>
            <Choice 
                v-for="opt of options"
                    :key="opt.id"
                    :name="opt.name"
                    :image="opt.image"
                    :monthly="opt.monthly"
                    :yearly="opt.yearly" 
                    :id="opt.id"
                    :isYear="isYear"
                    :selectedPlan="selectedPlan"
                    @selectPlan="select"
            />
      
       
      </div>
</template>

<style>

</style>