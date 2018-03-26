<template>
  <article>
    <v-carousel interval="3000" hide-delimiters hide-controls dark>
      <v-carousel-item  v-for="(item, i) in pics" :src="item.src" :key="i"></v-carousel-item>
    </v-carousel>
  </article>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      pics: [{
        src: 'https://i.imgur.com/mypQVKr.jpg'
      },
      {
        src: 'https://assets.papodehomem.com.br/2016/11/01/15/52/50/07f91723-f52e-4503-ae62-795156ef360c/akira-10.jpg'
      },
      {
        src: 'http://senpuu.com.br/wp-content/uploads/2013/07/Tetsuo-1.jpg'
      },
      {
        src: 'https://i.imgur.com/L5SiK3y.png'
      }]
    }
  }
}
</script>

<style scoped>
</style>
