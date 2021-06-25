import { shallowMount } from '@vue/test-utils'
import MissionList from '@/components/MissionList.vue'

describe('MissionList.vue', () => {
  it('should render component properly when data is passed', () => {
    const missions = [
      {
        id: 'test-mission-1'
      },
      {
        id: 'test-mission-2'
      },
      {
        id: 'test-mission-3'
      }
    ]
    const wrapper = shallowMount(MissionList, {
      propsData: { missions }
    })

    expect(wrapper.find('.c-MissionList').exists()).toBe(true)
    expect(wrapper.findAll('.c-MissionList li').length).toEqual(3)
  })

  it('props default types should match correctly', () => {
    const wrapperNoProps = shallowMount(MissionList)

    expect(wrapperNoProps.props().missions).toEqual([])
  })
})
