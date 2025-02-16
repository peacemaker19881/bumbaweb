<template>
    <button :class="buttonClass" @click="handleClick">
      <slot></slot>
    </button>
  </template>
  <script>
  export default {
    name: 'reusablebutton_component',
    props: {
      buttonClass: {
        type: String,
        default: 'default-button'
      }
    },
    methods: {
      handleClick() {
        this.$emit('click');
      }
    }
  }
  </script>

  <style scoped>
  .default-button {
    background-color: blue;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
  }
  </style>
