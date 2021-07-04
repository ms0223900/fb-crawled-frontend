<template>
  <label>
    <input
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    {{ labelName }}
  </label>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    modelValue: Boolean,
    labelName: String
  },
  emits: [
    'on-change-checkbox'
  ]
};
</script>

<style scoped>
  * {
    user-select: none;
  }
  label {
    display: inline-block;
    padding: 4px;
    cursor: pointer;
  }
</style>
