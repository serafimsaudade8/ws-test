import { shallowMount } from '@vue/test-utils'
import Loading from '@/components/Loading.vue'

describe('Loading.vue', () => {
  it('should render component properly', () => {
    const wrapper = shallowMount(Loading)

    expect(wrapper.find('.c-Loading').exists()).toBe(true)
    expect(wrapper.find('.c-Loading .c-Loading__animation').exists()).toBe(true)
    expect(wrapper.find('.c-Loading .c-Loading__logo').exists()).toBe(true)
  })
})
