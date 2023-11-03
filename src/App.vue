<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useMultistep } from './store/multistep';
import Stepper from './components/Stepper.vue';
import PersonalInfo from './views/personalInfo/PersonalInfo.vue'
import SelectPlan from './views/selectPlan/SelectPlan.vue'
import PickAddon from './views/pickAddon/PickAddon.vue'
import Summary from './views/summary/Summary.vue'
import ThankYou from './views/thankYou/ThankYou.vue'



  const multistepStore = useMultistep()

  const {subscriptionData: state} = storeToRefs(multistepStore);


</script>

<template>
  <div className='h-screen w-full grid place-items-center bg-color-light-gray' >

  

    <div className='w-full xl:w-4/6  xlg:w-[90%] h-full xlg:h-[73%] bg-transparent xlg:bg-color-whiten rounded-xl xlg:p-3  relative'>

     <div className='flex flex-col  xlg:gap-x-3 gap-0 md:gap-x-4 h-full w-full  xlg:flex-row'>


       <Stepper/>

       <div className='flex-1 xlg:py-7 py-7 px-9 bg-color-whiten absolute xlg:relative top-[9rem]  right-0 left-0 overflow-hidden  xlg:top-0 min-h-[60%] xlg:h-auto xlg:rounded-none rounded-2xl  2xl:mx-0 mx-4'>

          <template v-if="state.step === 0">
            <PersonalInfo/>
          </template>
          <template v-else-if="state.step === 1">
            <SelectPlan/>
          </template>
          <template v-else-if="state.step === 2">
            <PickAddon/>
          </template>
          <template v-else-if="state.step === 3">
            <Summary/>
          </template>
          <template v-else-if="state.step === 4">
            <ThankYou/>
          </template>

       </div>

     </div>
    </div>

</div>
</template>

<style scoped>
</style>
