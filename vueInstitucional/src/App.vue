<template>
  <v-app>
    <header id="menu">
      <v-toolbar color="grey lighten-4 black--text">
        <v-toolbar-title>
          <v-btn :to="{ name: 'Index' }" id="brand-name" color="red"> <v-icon color="black">fas fa-terminal</v-icon> {{ title }} </v-btn>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down" justify-space-around>
          <v-btn exact flat raised :to="{ name: 'Index' }"><v-icon color="green">fas fa-university</v-icon></v-btn>
          <v-btn exact flat raised :to="{ name: 'News' }"><v-icon  color="blue">far fa-newspaper</v-icon></v-btn>
          <v-btn exact flat raised :to="{ name: 'About' }"><v-icon color="orange">far fa-id-badge</v-icon></v-btn>
          <v-btn exact flat raised :to="{ name: 'Findus' }"><v-icon color="teal">far fa-map</v-icon></v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </header>
    <section id="content">
      <v-container>
        <router-view></router-view>
      </v-container>
    </section>
    <footer id="footer">
      <v-footer dark height="auto">
      <v-card
        tile
        class="grey lighten-2 black--text text-xs-center">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            icon
            :href="icon.link"
            class="mx-3 black--text">
            <v-icon size="24px">{{ icon.icon }}</v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text class="black--text pt-0">
          The best kind of friends are those that enter your life, and help you to see a blue sky where before there was a cloudy sky. They are the ones that have so much faith in you that you start having faith in yourself.  These are the friends we should be grateful for.
          <v-divider></v-divider>
          — <strong>DougTQ</strong>
        </v-card-text>
        <v-card-text class="black--text">
          &copy;2018 — <strong>Area016</strong>
        </v-card-text>
      </v-card>
    </v-footer>
    </footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      title: 'Area016',
      icons: [{
        icon: 'fab fa-github',
        link: 'https://github.com/Area-16'
      },
      {
        icon: 'fab fa-grav'
      },
      {
        icon: 'fab fa-js'
      },
      {
        icon: 'fab fa-linkedin'
      },
      {
        icon: 'fab fa-node-js'
      },
      {
        icon: 'fab fa-npm'
      }]
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway:200');
@import url('https://fonts.googleapis.com/css?family=Merriweather');
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  padding: 10px;
}
.btn__content {
  color: black;
}
#content {
  font-family: 'Raleway', sans-serif;
}
#menu, #footer {
  font-family: 'Merriweather', serif;
}
.hidden-sm-and-down a {
  margin-right: 5px;
}
</style>
