import { computed, defineComponent } from 'vue'
import { store } from '@/store'

export default defineComponent({
  name: 'AppCounter',
  setup: function() {
    const addCount = () => store.commit('add', 1)
    const count = computed(() => store.state.count)

    return {
      addCount,
      count
    }
  }
})
