<template>
  <div id="map">
    <v-container fluid>
        <h2 class="display-1 padded"><b>Our location</b></h2>
      <v-layout row wrap>
        <v-flex xs12 sm8 offset-sm2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59434.2179948562!2d-48.53109225079776!3d-21.40412923322414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9397251c5addf%3A0x42dfab50d8b2929e!2sTaquaritinga%2C+SP%2C+15900-000!5e0!3m2!1spt-BR!2sbr!4v1521840234577" width="800" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>
        </v-flex>
      </v-layout>
      <h2 class="display-1 padded"><b>Contact us</b></h2>
      <v-layout row wrap align-center>
      <v-flex xs12 align-center align-content-center>
        <v-divider></v-divider>
        <v-text-field
          placeholder="Tell us your main e-mail"
          single-line
          clearable
          full-width
          required
          hide-details>
        </v-text-field>
        <v-divider></v-divider>
        <v-text-field
          placeholder="What subject your message is about?"
          single-line
          max="75"
          clearable
          full-width
          required
          hide-details>
        </v-text-field>
        <v-divider></v-divider>
        <v-text-field
          placeholder="Finally, here you tell us everything!"
          v-model="title"
          counter
          clearable
          max="200"
          full-width
          required
          multi-line
          hide-details>
        </v-text-field>
        <v-divider></v-divider>
      </v-flex>
        <v-btn block large color="success"><b>Send</b></v-btn>
    </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {}
  }
}
</script>

<style scoped>
.padded {
  padding-top: 30px;
  padding-bottom: 40px;
}

div.input-group__input {
  margin: 5px;
  border: 1px solid black;
}

hr {
  background-color: black;
}

button, iframe {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

button {
  margin: 20px;
}
</style>
