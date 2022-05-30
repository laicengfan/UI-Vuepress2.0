<template>
  <a-input v-model:value="value" placeholder="Basic usage" />
</template>
<script setup>
import { ref, defineProps } from "vue";
const props = defineProps({
  defaultValue:String
})
const value = ref(props.defaultValue);

</script>