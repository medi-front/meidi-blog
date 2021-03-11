import { reactive, toRaw } from 'vue'

export function useLogin() {
  const data = reactive({
    loading: false,
    username: '',
    password: ''
  })
  const rules = reactive({
    
  })

  function login() {
    data.loading = true
  }

  return {
    data,
     rules,
     login
  }
}