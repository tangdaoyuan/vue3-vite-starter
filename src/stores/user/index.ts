import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import { fetchAccount } from '@/api/user'

const InitValues = {
  username: 'UNKNOWN',
  password: 'UNKNOWN',
}

export const useUserStore = defineStore('user', () => {
  const state = reactive({ ...InitValues })

  const accountName = computed(() => state.username)

  async function getAccount() {
    try {
      const { code, data: user } = await fetchAccount()
      if (code !== 0) {
        ElMessage.error('获取当前用户信息失败!')
        return
      }
      [state.username, state.password] = [user.username, user.password]
    }
    catch (error) {
      ElMessage.error(`${error}`)
    }
  }

  function $reset() {
    Object.assign(state, InitValues)
  }

  return {
    state,
    $reset,
    accountName,
    getAccount,
  }
})
