import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DefaultHelloWorld',
  props: {
    title: {
      type: String,
      default: 'Hello World',
      required: false
    },
    text: {
      type: String,
      default: 'This is a subtitle',
      required: false
    }
  }
})
