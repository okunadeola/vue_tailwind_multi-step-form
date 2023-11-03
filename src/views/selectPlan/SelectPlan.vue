<script setup lang="ts">
import { storeToRefs } from 'pinia';
import ButtonContainer from '../../components/ButtonContainer.vue';
import Titile from '../../components/Titile.vue';
import { useMultistep } from '../../store/multistep';
import { Plan, PlanOption, NextActionProp } from '../../model';
import { onMounted, ref, watch } from 'vue';
import ArcadeImage from '../../assets/images/icon-advanced.svg'
import AdvanceImage from '../../assets/images/icon-advanced.svg'
import ProImage from '../../assets/images/icon-pro.svg'
import SelectPlanChoice from './components/SelectPlanChoice.vue';
import DurationToggler from './components/DurationToggler.vue';

const multistepStore = useMultistep()

const {subscriptionData: state} = storeToRefs(multistepStore);
const title = 'Select your plan'
const desc = 'You have the option of monthlty or yearly billing.'

const planChoice = ref<Plan>({
    planName: '',
    planAmount: 0,
    planDuration: ''
})

const isYearPlan = ref<boolean>(false)

const error = ref<boolean>(false)

const planOptions = ref<Array<PlanOption>>([
    {
      image: ArcadeImage,
      name: 'Arcade',
      monthly: 9,
      yearly: 90,
      id: 1
    },
    {
      image: AdvanceImage,
      name: 'Advanced',
      monthly: 12,
      yearly: 120,
      id: 2
    },
    {
      image: ProImage,
      name: 'Pro',
      monthly: 15,
      yearly: 150,
      id: 3
    },
])

onMounted(() => {
    isYearPlan.value = state.value.plan.planDuration === 'yearly'
    planChoice.value = state.value.plan
})




watch(isYearPlan, () => {
    const item = planOptions.value.find(it => it.name === planChoice.value?.planName)

    if(item){
    const amount = isYearPlan.value ? item.yearly : item.monthly
    const duration = isYearPlan.value ? 'yearly' : 'monthly'

    planChoice.value =  {
        planName: item.name, 
        planAmount: amount,   
        planDuration: duration }
    }
})


// select a plan
const selectPlan = (id: number)=>{
  const item = planOptions.value.find(it => it.id === id)

  if(item){
      const amount = isYearPlan.value ? item.yearly : item.monthly
      const duration = isYearPlan.value ? 'yearly' : 'monthly'
    
      planChoice.value =  {
            planName: item.name, 
            planAmount: amount,   
            planDuration: duration }

     error.value =false
  }
}




// next
const handleSubmit = ()=>{
    const { planName, planAmount, planDuration} = planChoice.value

    if(planName && planAmount && planDuration){
        multistepStore.proceedToNextStep(planChoice.value, NextActionProp.PLAN)
    }else{
        error.value =true
    }
}


</script>

<template>
    <div  class='flex flex-col  w-full h-full'>
        <Titile :title="title"  :desc="desc"/>
    
        <div class=' mt-2 flex flex-col gap-y-5 h-full'>
            <div>
              
               <span v-if="error" class=' text-color-berry-red'>Please select a plan</span>
              
            </div>

            <SelectPlanChoice 
            :options="planOptions" :selectedPlan="planChoice.planName" :isYear="isYearPlan" 
            @selectPlan="selectPlan"/>

            <DurationToggler @toggle="isYearPlan = !isYearPlan" :isYear="isYearPlan"/>

        </div>
    
        <ButtonContainer :step="state.step" @nextAction="handleSubmit" />
    </div>
</template>

<style>

</style>