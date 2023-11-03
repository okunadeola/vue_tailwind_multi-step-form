<script setup lang="ts">
import { MultiStepData } from '../../../model';

    defineProps<{
        data: MultiStepData,
        isYear: boolean
    }>()

    const emit = defineEmits<{
        (event: 'action'): void
    }>()
</script>

<template>

    <div class="flex flex-col bg-color-Magnolia h-auto p-6 rounded-lg">
        <div class="flex justify-between text-color-primary-marine-blue font-semibold">
              <div>
                  <span>{{data?.plan?.planName}} ({{data?.plan?.planDuration}})</span>
                  <div>
                      <button class=" text-color-primary-purple-blue underline font-normal" @click='emit("action")'>Change</button>
                  </div>
              </div>
  
              <div>
                  ${{data?.plan?.planAmount}}/{{isYear ? 'yr' : 'mo'}}
              </div>
        </div>
        <div class="border-b  my-6"></div>
  
        <div class="flex flex-col gap-y-3">

            <div v-for="ad of data.addons" :key="ad.name" class="flex justify-between">
                <div class=" text-color-cool-gray">{{ad?.name}}</div>
                <div class=" text-color-primary-marine-blue opacity-80">
                    +${{isYear ? ad?.yearly : ad?.monthly}} 
                    /{{isYear ? 'yr' : 'mo'}}
                </div>
            </div>
        </div>
      </div>
      
</template>

<style>

</style>