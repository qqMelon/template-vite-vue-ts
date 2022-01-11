import { defineComponent, defineAsyncComponent } from 'vue'

const DefaultHelloWorld = defineAsyncComponent(() => import(/* webpackChunkName: "components_default-hello-world" */
  '@/components/default-hello-world/default-hello-world.vue'))

const AppCounter = defineAsyncComponent(() => import(/* webpackChunkName: "components_app-counter" */
  '@/components/app-counter/app-counter.vue'))

export default defineComponent({
  name: 'App',
  components: { DefaultHelloWorld, AppCounter }
})

