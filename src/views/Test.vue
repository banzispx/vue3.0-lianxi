<template>
  <div class="home">
    mian
    <div>
      <validate-input
        v-model="emailVal"
        :rules="emailRules"
        placeholder="请输入邮箱地址"
        type="text"
      />
      {{ emailVal }}
    </div>
    <div style="width: 50%; margin: 0 auto">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Email address</label
          >
          <validate-input
            v-model="emailVal"
            :rules="emailRules"
            placeholder="hello"
            type="password"
          />
          <div id="emailHelp" class="form-text" v-if="emailRef.error">
            {{ emailRef.message }}
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >Check me out</label
          >
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import validateInput, { RulesProp } from '../components/ValidateInput.vue'
export default defineComponent({
  name: 'Test',
  components: {
    validateInput,
  },
  setup() {
    const emailVal = ref('')
    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱的地址不能为空' },
      {
        type: 'email',
        message: '请输入正确的格式',
      },
    ]
    const emailRef = reactive({
      val: '',
      error: false,
      message: '',
    })
    const validateEmail = () => {
      if (emailRef.val.trim() === '') {
        emailRef.error = true
        emailRef.message = 'can not'
      }
    }
    return {
      emailRef,
      validateEmail,
      emailRules,
      emailVal,
    }
  },
})
</script>
