<template>
  <div class="w-full">
    <label v-if="label" class="block mb-1 text-sm font-medium text-gray-700">
      {{ label }}
    </label>

    <input :type="type" :value="modelValue" @input="onInput" class="w-full border px-3 py-1 focus:outline-none focus:ring-0 border-border-500 rounded-input" :placeholder="placeholder" />

    <p v-if="error" class="text-sm text-red-600 mt-1">
      {{ error }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: [String, Number],
  label: String,
  type: {
    type: String,
    default: 'text'
  },
  placeholder: String,
  error: String
})

const emit = defineEmits(['update:modelValue'])

const onInput = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>