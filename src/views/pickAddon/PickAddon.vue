<script setup lang="ts">
import { storeToRefs } from 'pinia';
import ButtonContainer from '../../components/ButtonContainer.vue';
import Titile from '../../components/Titile.vue';
import { useMultistep } from '../../store/multistep';
import { onMounted, ref } from 'vue';
import { Addon, NextActionProp } from '../../model';
import AddonsChoice from './components/AddonsChoice.vue';



const multistepStore = useMultistep()

const {subscriptionData: state} = storeToRefs(multistepStore);
const title = 'Pick add-ons'
const desc = 'Add-ons help enhance your gaming experience.'


const addons = ref<Addon[]>([])
const isYearPlan = ref<boolean>(false)

const addonOptions = ref<Array<Addon>>([
    {
      id: 1,
      name: 'Online service',
      desc: 'Access to multiplayer games',
      yearly: 10,
      monthly: 1
    },
    {
      id: 2,
      name: 'Larger storage',
      desc: 'Extra 1TB of cloud save',
      yearly: 20,
      monthly: 2
    },
    {
      id: 3,
      name: 'Customizable profile',
      desc: 'Custom theme on your profile',
      yearly: 20,
      monthly: 2
    },
])

const selectAddon = (id: number)=>{
    const item = addons.value.find(it=> it.id === id)
    const theItem = addonOptions.value.find(it=> it.id === id)

    if(item){
        addons.value = [...addons.value?.filter(it => it.id !== item.id)]
    }else{
        addons.value = [...addons.value, theItem!]
    }
  }


  onMounted(() => {
    addons.value = [...state.value.addons]
    isYearPlan.value = state.value.plan?.planDuration === 'yearly'
  })

// next
const handleSubmit = ()=>{
    multistepStore.proceedToNextStep(addons.value, NextActionProp.ADDON)
}


</script>

<template>
    <div  class='flex flex-col  w-full '>
        <Titile :title="title"  :desc="desc"/>
    
        <div class=' mt-0 flex flex-col gap-y-1 h-full'>
            <AddonsChoice :options="addonOptions" :addons="addons" @selectAddon="selectAddon" :isYear="isYearPlan"/>
        </div>
    
        <ButtonContainer :step="state.step" @nextAction="handleSubmit" />
    </div>
</template>

<style>

</style>