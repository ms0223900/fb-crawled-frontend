<template>
  <div>
    <h2>{{ message || 'Empty' }}</h2>
  </div>
</template>

<script>
export default {
  name: 'EmptyMessage',
  props: {
    message: String
  }
};
</script>

<style scoped>
  h2 {
    color: #ccc;
    padding: 8px;
  }
</style>
