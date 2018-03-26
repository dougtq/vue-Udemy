Vue.component('tabs', {
  template: `<div>
    <div class="tabs">
      <ul>
        <li v-for="tab in tabs" :class="{'is-active': tab.isActive }"><a @click="selectedTab(tab)">{{tab.title}}</a></li>
      </ul>
    </div>
    <div class="tabs-detail">
      <slot></slot>
    </div>
  </div>`,
  data () {
    return {
      tabs: []
    }
  },
  created () {
    this.tabs = this.$children
  },
  methods: {
    selectedTab (tab) {
      this.tabs.forEach(element => {
        element.isActive = (element.title === tab.title)
      });
    }
  }
})

Vue.component('tab', {
  props: { 
    title: { required: true },
    selected: { default: false }
  },
  template: `<div v-show="isActive"><slot></slot></div>`,
  data () {
    return {
      isActive: false
    }
  },
  mounted () {
    this.isActive = this.selected
  }
})

const app = new Vue({
  el: '#app',
  data: {}
})

