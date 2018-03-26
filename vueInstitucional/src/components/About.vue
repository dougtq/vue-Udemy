<template>
  <article>
    <div id="presentation">
      <v-layout>
      <v-flex xs12 sm7 offset-sm2>
        <v-card tile width="700px" img="https://i.imgur.com/AEUAIHH.jpg">
          <v-card-media src=""  height="400px"></v-card-media>
        </v-card>
      </v-flex>
    </v-layout>
    <!-- https://pm1.narvii.com/5992/5b87698536412310e48ad75e5907d0209d4657c9_hq.jpg -->
    </div>
    <div id="about">
      <v-expansion-panel popout>
        <v-expansion-panel-content hide-actions v-for="(item,i) in itens" :key="i">
          <div slot="header"><b>{{ item.title }}</b></div>
          <v-card>
            <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </div>
  </article>
</template>

<script>
export default {
  data () {
    return {
      itens: [
        {
          title: 'History',
          text: 'Area 16 is a newborn worldwide code program, created by a main that lives in the Brazilian 16 area.'
        },
        {
          title: 'Name',
          text: 'Area 16 is a newborn worldwide code program, created by a main that lives in the Brazilian 16 area.'
        },
        {
          title: 'Mission',
          text: 'Area 16 is a newborn worldwide code program, created by a main that lives in the Brazilian 16 area.'
        },
        {
          title: 'Vision',
          text: 'Area 16 is a newborn worldwide code program, created by a main that lives in the Brazilian 16 area.'
        }
      ]
    }
  }
}
</script>

<style scoped>
  #about {
    align-content: center;
  }
</style>

<style>
  .text {
    color: black;
    text-decoration: none;
    text-align: center;
  }
</style>
