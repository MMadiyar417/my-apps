<template>
  <div class="flex flex-col min-h-screen">
    <TheHeader />
    <main class="flex-grow p-4">
        <slot></slot>
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from '@/components/layouts/TheFooter.vue'
import TheHeader from '@/components/layouts/TheHeader.vue'

export default {
  components: { TheHeader, TheFooter }
}
</script>


