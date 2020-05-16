import { Component, Mixins } from 'vue-property-decorator'

import RouterTransition from '@/Mixins/RouterTransition'

@Component
export default class Settings extends Mixins(RouterTransition) {
}
