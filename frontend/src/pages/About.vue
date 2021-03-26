<template>
    <div class="About">
        <div>About</div>
        <p v-text="greeting"></p>
        <div><input @click="getGreeting" type="button" value="Say!"></div>
    </div>
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
          this.greeting = response.data
        })
        .catch((reason) => {
          console.log(reason)
          this.greeting = 'Failed to get data'
        })
    }
  }
}
</script>
