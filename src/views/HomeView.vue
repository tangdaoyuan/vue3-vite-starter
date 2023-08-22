<script setup lang="ts">
import { onMounted } from 'vue'
import TheWelcome from '@/components/TheWelcome.vue'
import { useUserStore } from '@/stores/user'
const store = useUserStore()

onMounted(() => {
  store.getAccount()

  setTimeout(() => {
    store.$reset()
  }, 3000)
})
</script>

<template>
  <main>
    <TheWelcome />
  </main>
  <footer :class="$style['footer']">
    {{ store.accountName }}
  </footer>
</template>

<style lang="scss" module>
.footer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1/3;
}
</style>
