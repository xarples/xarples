import { reactive } from '@vue/composition-api'

export default function useLogin() {
  const state = reactive({
    username: '',
    password: ''
  })

  async function handleLogin() {
    await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({
        username: state.username,
        password: state.password
      })
    })
  }

  return {
    state,
    handleLogin
  }
}
