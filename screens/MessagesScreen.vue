<template>
  <view class="container">
    <text-input
      :style="{height:40, width:200, borderColor:'gray',borderWidth:1}"
      v-model="messageText"
    />

    <button :on-press="saveMessage" title="Save"/>

    <text v-for="(message, idx) in messages" :key="idx">
      {{message}}
    </text>
  </view>
</template>

<script>
import Store from '../store'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      messageText: '',
      // messages: []
    }
  },
  // computed: mapState({
  //   messages: state => state.messages
  // }),
  computed: {
    // ...mapState(['messages'])

    // ...mapState({
    //   messages: state => state.messages
    // })
    
    messages() {
      return Store.getters.messages
    }
  },
  methods: {
    saveMessage() {
      Store.dispatch('addMessage', this.messageText)
      // this.messages.push(this.messageText)
      this.messageText = ''
    }
  }
}
</script>

<style>
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-color-primary {
  color: blue;
}
</style>
