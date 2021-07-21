<template>
  <div>
    <v-text-field
      label="Main input"
      :rules="rules"
      hide-details="auto"
    ></v-text-field>
    <v-text-field label="Another input"></v-text-field>
  </div>
</template>

<script>

export default {
  name: 'Home',  
  data: () => ({
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
    }),
  methods: {
    
  },
  computed: {
    
  },
  created() {
    
  },
}
</script>
