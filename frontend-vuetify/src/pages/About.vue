<template>
  <v-container>
    <p v-text="greeting"></p>
    <v-btn color="primary" @click="getGreeting">Say!</v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      greeting: ''
    }
  },
  methods: {
    getGreeting () {
      this.greeting = 'Waiting...'
      this.$axios.get('http://localhost:8080/greeting')
        .then((response) => {
          console.log(response)
          var date = new Date()
          this.greeting = response.data + ' / ' + date.toISOString()
        })
        .catch((reason) => {
          console.log(reason)
          this.greeting = 'Failed to get data'
        })
    }
  }
}
</script>
