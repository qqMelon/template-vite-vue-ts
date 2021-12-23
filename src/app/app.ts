import { defineComponent, defineAsyncComponent } from 'vue'

const DefaultHelloWorld = defineAsyncComponent(() => import(/* webpackChunkName: "components_default-hello-world" */
  '@/components/default-hello-world/default-hello-world.vue'))

export default defineComponent({
  name: 'App',
  components: { DefaultHelloWorld }
})

