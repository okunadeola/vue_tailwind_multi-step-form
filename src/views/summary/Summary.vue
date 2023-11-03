<script setup lang="ts">
import { storeToRefs } from 'pinia';
import ButtonContainer from '../../components/ButtonContainer.vue';
import Titile from '../../components/Titile.vue';
import { useMultistep } from '../../store/multistep';
import { onMounted, ref } from 'vue';
import ChoicesOutline from './components/ChoicesOutline.vue';
import Total from './components/Total.vue';



const multistepStore = useMultistep()

const {subscriptionData: state} = storeToRefs(multistepStore);
const title = 'Finishing up'
const desc = 'Double-check everything looks OK before confirming.'


const total = ref<number>(0)
const isYearPlan = ref<boolean>(false)


onMounted(() => {

        isYearPlan.value = state.value.plan.planDuration === 'yearly'
    
        const addonTotal = state.value.addons.reduce((a, {monthly, yearly})=> isYearPlan ? a+yearly : a + monthly, 0)
    
        const planAmount = state.value.plan.planAmount
    
        total.value = addonTotal + planAmount
})

// next
const handleSubmit = ()=>{
   multistepStore.completeStep()
}

const seekSelectPlanUI = ()=>{
    multistepStore.goToPlanUI()
}


</script>

<template>
    <div  class='flex flex-col  w-full '>
        <Titile :title="title"  :desc="desc"/>
    
        <div className=' mt-0 flex flex-col gap-y-1 h-full'>
            <ChoicesOutline :data="state" @action="seekSelectPlanUI" :isYear="isYearPlan" />

            <Total :total="total" :isYear="isYearPlan"/>
        </div>
    
        <ButtonContainer :step="state.step" @nextAction="handleSubmit" />
    </div>
</template>

<style>

</style>