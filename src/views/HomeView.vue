<script setup lang="ts">
import TheWelcome from "@/components/TheWelcome.vue";
import { useUserStore } from "@/stores/user";
import { computed, onMounted } from "vue";
const store = useUserStore();

onMounted(() => {
  store.getAccount();

  setTimeout(() => {
    store.$reset();
  }, 3000);
});
const name = computed(() => store.accountName);
</script>

<template>
  <main>
    <TheWelcome />
  </main>
  <footer :class="$style['footer']">{{ name }}</footer>
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
