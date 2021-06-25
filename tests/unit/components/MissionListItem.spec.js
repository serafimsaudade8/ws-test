import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import MissionListItem from '@/components/MissionListItem.vue'

describe('MissionListItem.vue', () => {
  it('should render component properly when full data is passed correctly', () => {
    const mission = {
      id: 'test-id',
      mission_name: 'test-mission-name',
      details: 'test-details',
      launch_date_local: '2020-09-24T11:31:00-04:00'
    }
    const wrapper = shallowMount(MissionListItem, {
      propsData: { mission },
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    expect(wrapper.find('.c-MissionListItem').exists()).toBe(true)
    expect(wrapper.find('.c-MissionListItem__title').exists()).toBe(true)
    expect(wrapper.find('.c-MissionListItem__title').text()).toEqual(mission.mission_name)
    expect(wrapper.find('.c-MissionListItem__desc').exists()).toBe(true)
    expect(wrapper.find('.c-MissionListItem__desc').text()).toEqual(mission.details)
    expect(wrapper.find('.c-MissionListItem__desc--empty').exists()).toBe(false)
    expect(wrapper.find('.c-MissionListItem__date').exists()).toBe(true)
    expect(wrapper.find('.c-MissionListItem__date').text()).toEqual('24/09/2020')
  })

  it('should render alt description if info is missing from the payload', () => {
    const mission = {
      id: 'test-id',
      mission_name: 'test-mission-name',
      launch_date_local: '2020-09-24T11:31:00-04:00'
    }
    const wrapper = shallowMount(MissionListItem, {
      propsData: { mission },
      stubs: {
        RouterLink: RouterLinkStub
      }
    })

    expect(wrapper.find('.c-MissionListItem__desc--empty').exists()).toBe(true)
    expect(wrapper.find('.c-MissionListItem__desc--empty').text()).toEqual('No description available...')
  })

  it('props default types should match correctly', () => {
    const wrapperNoProps = shallowMount(MissionListItem)

    expect(wrapperNoProps.props().mission).toEqual({})
  })
})
