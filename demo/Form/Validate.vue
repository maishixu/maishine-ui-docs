<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { reactive, ref } from 'vue'
import { Form } from 'maishine-ui'
import { FormItem } from 'maishine-ui'
import { Input } from 'maishine-ui'
import { Button } from 'maishine-ui'
import { Switch } from 'maishine-ui'
import { Select } from 'maishine-ui'
const model = reactive({
  email: '',
  password: '',
  agreement: false,
  zone: ''
})
const rules = {
  // name: [{ type: 'string', required: true, trigger: 'blur' }, { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },],
  email: [{ type: 'email', required: true, trigger: 'blur' }],
  password: [{ type: 'string', required: true, trigger: 'blur' }, { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' } ],
  agreement: [{ type: 'enum', required: true, enum: [true], message: '请同意协议'} ],
  zone: [{ type: 'string', required: true, trigger: 'change' }],
}
const options = [
  { label: 'zone 1', value: 'one' },
  { label: 'zone 2', value: 'two' },
  { label: 'zone 3', value: 'three' }
]
const formRef = ref()
const submit = async () => {
  try {
    await formRef.value.validate()
    console.log('passed!')
  } catch(e) {
    console.log('the promise', e)
  }
}
const reset = () => {
  formRef.value.resetFields()
}
</script>

<template>
<div>
  <Form :model="model" :rules="rules" ref="formRef">
    <!-- <FormItem prop="name" label="enter your name" #default="{ validate }">
      <input v-model="model.name" @blur="validate('blur')" @input="validate('input')"/>
    </FormItem> -->
    <FormItem prop="email" label="the email">
      <Input v-model="model.email" />
    </FormItem>
    <FormItem prop="password" label="the password">
      <Input v-model="model.password" type="password" />
    </FormItem>
    <FormItem prop="agreement" label="agreement">
      <Switch v-model="model.agreement" />
    </FormItem>
    <FormItem prop="zone" label="zone">
      <Select v-model="model.zone" :options="options" />
    </FormItem>
    <FormItem>
      <Button @click.prevent="submit" type="primary">Submit</Button>
      <Button @click.prevent="reset">Reset</Button>
    </FormItem>
  </Form>

  <p>
    form value:
    <pre>{{model}}</pre>
  </p>
</div>
</template>

<style>

</style>
