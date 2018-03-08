Vue.component('task', {
  template: '<li> <slot></slot> </li>'
})

Vue.component('list', {
  template: '<div><task v-for="task in tasks" :key="task.id"> {{task.desc}}</task></div>',
  data () {
    return {
      tasks: [{
        id: 1,
        desc: 'Go to the bank'
      }, {
        id:2,
        desc: 'Go to the park'
      }, {
        id: 3,
        desc: 'Go to the party'
      }]
    }
  }
})

const app = new Vue({
  el: '#app'
})
