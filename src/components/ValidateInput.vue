<template>
  <div class="col-md-6">
    <label for="validationServer03" class="form-label">City</label>
    <input
      class="form-control"
      :class="{ 'is-invalid': inputRef.error }"
      id="validationServer03"
      @blur="validateInput"
      :value="inputRef.val"
      @input="updateValue"
      v-bind="$attrs"
    />
    <div
      id="validationServer03Feedback"
      class="invalid-feedback"
      v-if="inputRef.error"
    >
      {{ inputRef.message }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'
// const emailReg = /^[A-Za-z0-9\u4e00-\u9fa5]$/
interface RuleProp {
  type: 'required' | 'email'
  message: string
}
export type RulesProp = RuleProp[]
export default defineComponent({
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String,
  },
  inheritAttrs: false,
  setup(props, context) {
    const inputRef = reactive({
      val: props.modelValue || '',
      error: false,
      message: '',
    })
    const validateInput = () => {
      if (props.rules) {
        const allPassed = props.rules.every((rule) => {
          let passed = true
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              passed = inputRef.val.trim() != ''
              break
            case 'email':
              passed = inputRef.val.indexOf('a') > -1
              break
            default:
              break
          }
          console.log(inputRef.val.trim() === '')
          return passed
        })
        inputRef.error = !allPassed
      }
    }
    const updateValue = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value
      inputRef.val = targetValue
      context.emit('update:modelValue', targetValue)
    }
    return {
      inputRef,
      validateInput,
      updateValue,
    }
  },
})
</script>
