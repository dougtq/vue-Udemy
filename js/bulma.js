Vue.component('msg', {
  template: `<article class="message is-danger" v-show="showMessage">
    <div class="message-header">
      <p>{{title}}</p>
      <button class="delete" aria-label="delete"></button>
    </div>
    <div class="message-body">
      {{message}}
    </div>
  </article>`,
  props: ['title', 'message'],
  data () {
    return {
      showMessage: true
    }
  },
  methods: {
    hide () {
      this.showMessage = false
    }
  }
})

Vue.component('modal', {
  template: `
  <div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">
        <slot name="header"></slot>
      </p>
      <button @click="$emit('fechar')" class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
      <slot></slot>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success">Save</button>
      <button @click="$emit('fechar')" class="button" aria-label="close">Cancel</button>
    </footer>
  </div>
</div>`,
  props: ['message'],
  data () {
    return {
      showMessage: true
    }
  },
  methods: {
    hide () {
      this.showMessage = false
    }
  }
})

const app = new Vue({
  el: '#app',
  data: {
    showModal: false
  }
})
