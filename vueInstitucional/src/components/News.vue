<template>
  <!-- "https://media.gettyimages.com/photos/defocused-blurred-soft-abstract-background-blue-picture-id504916590?b=1&k=6&m=504916590&s=612x612&w=0&h=gbfY6TEors_b0qcYD5f2vuWzZFTSs9kQdxo6NAyIGSg=" -->
  <article>
    <hr>
    <v-jumbotron src='https://i.imgur.com/L5SiK3y.png'>
      <v-container fill-height>
        <v-layout align-center>
          <v-flex>
            <h3 class="display-3"><b>Welcome to Area016</b></h3>
            <span class="subheading">Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>
            <v-divider class="my-3"></v-divider>
            <div class="title mb-3"><b>Check out our latest news!</b></div>
            <v-btn :to="{ name: 'About' }" exact large color="teal" class="mx-0"><b>Read our history</b></v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
    <hr>
    <div class="newsfeed" :key="i" v-for="(post, i) of news">
    <v-layout>
      <v-flex xs12 sm8 offset-sm2>
        <v-card >
          <v-card-media :src="post.src"  height="400px"></v-card-media>
          <v-divider></v-divider>
          <v-card-title primary-title>
            <div>
              <h3 v-bind="title" class="headline mb-0"><b>{{ post.title }}</b></h3>
              <div v-bind="description">{{ post.description }}</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn color="orange">{{ btn1 }}</v-btn>
            <v-btn exact :to="{ name: 'About' }" color="success">{{ btn2 }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    </div>
  </article>
</template>

<script>
export default {
  data () {
    return {
      news:
      [{
        title: 'The Wolf of Wall Street',
        src: 'https://i.imgur.com/GWw5umm.jpg'
      },
      { title: 'Akira retro 18',
        description: 'Akira alternative poster!',
        link: '/post/:akira18',
        src: 'https://20ui41tp7v127j03rcnp97oh-wpengine.netdna-ssl.com/wp-content/uploads/2016/06/mumford_akira.jpg'
      },
      {
        title: 'Developer Lifestyle',
        description: '',
        link: '',
        src: 'https://i.imgur.com/TFMxitb.jpg'
      },
      {
        title: 'Cthulhu',
        link: '',
        src: 'https://i.imgur.com/MvZVeVe.jpg'
      }
      ],
      btn1: 'Share',
      btn2: 'Explore'
    }
  }
}
</script>

<style scoped>
.newsfeed {
  padding: 15px;
}
div.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
