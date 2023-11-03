<script setup lang="ts">
import { storeToRefs } from 'pinia';
import ButtonContainer from '../../components/ButtonContainer.vue';
import Titile from '../../components/Titile.vue';
import { useMultistep } from '../../store/multistep';
import * as yup from 'yup'
import { useForm } from 'vee-validate';
import Input from './components/Input.vue';
import { NextActionProp, PersonalInfo } from '../../model';
import { onMounted } from 'vue';

const multistepStore = useMultistep()

const {subscriptionData: state} = storeToRefs(multistepStore);

const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,8}$/

  const schema = yup.object().shape({
    name: yup.string().required("This is required"),
    email: yup.string().required("This is required").email('Invalid email format'),
    phone: yup.string().required("This is required").matches(phoneRegExp, 'Invalid phone')
  })

  const  { defineInputBinds, errors, handleSubmit, setValues, resetForm } = useForm({
    validationSchema: schema,
  });

  const name = defineInputBinds('name');
  const email = defineInputBinds('email');
  const phone = defineInputBinds('phone');

    const title = 'Personal info'
    const desc = 'Please provide your name, email address, and phone mumber'

    const onSubmit = handleSubmit(values => {

    multistepStore.proceedToNextStep(values as PersonalInfo, NextActionProp.PERSONAL)
  });



  onMounted(() => {
    const {name, email, phone} = multistepStore.subscriptionData.personalInfo
    resetForm()

    if(name &&  email && phone){
      setValues({
        name: name,
        email: email,
        phone: phone
      })
    }
  })

</script>



<template>
  <div  class='flex flex-col  w-full '>
    <Titile :title="title"  :desc="desc"/>

  <div class=' mt-5'>
    <form @submit="onSubmit" class='flex flex-col gap-y-7 xlg:gap-y-4'>
        <Input  type='text' label="Name" name="name" placeholder='your fullname' :binder="name"  :error="errors.name" />

        <Input type='email' label='Email' name="email" placeholder="example@mail.com" :binder="email" :error="errors.email"  />

        <Input type='number' label="Phone Number" name="phone" placeholder='e.g +1 234 56 798'  :error="errors.phone" :binder="phone" />
    </form>
  </div>

    <ButtonContainer :step="state.step" @nextAction="onSubmit" />
</div>
</template>

<style>

</style>