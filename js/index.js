const app = new Vue({
	el: '#app',
  data: {
		title: 'Hello Vue dev!',
  	message: 'Hello Vue World',
    date: new Date(),
		number: 0,
    seen: true,
    msg: 'Test',
    todos: [{
    	text: 'Do Something'
    }, {
    	text: 'Do more'
    }]
  },
  methods: {
  	click: function () {
    	this.number = this.number + 1
    }
  }
})
