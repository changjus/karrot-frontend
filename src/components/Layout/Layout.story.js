import { storiesOf } from '@storybook/vue'

import KTopbarUI from './KTopbarUI.vue'
import KFooter from './KFooter.vue'
import i18n from '@/i18n'
import router from '@/router'
import { createStore } from '>/helpers'
import { groupsMock, storesMock, usersMock } from '>/mockdata'

const store = createStore({
  about: {
    actions: { fetchAbout () {} },
  },
  groups: { getters: { all: () => groupsMock } },
  stores: { getters: { all: () => storesMock } },
  users: { getters: { all: () => usersMock } },
})

storiesOf('Layout', module)
  .add('KTopbar', () => ({
    render: h => h(KTopbarUI),
    i18n,
    router,
    store,
  }))
  .add('KFooter', () => ({
    render: h => h(KFooter),
    i18n,
    store,
  }))
