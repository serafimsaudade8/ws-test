import { shallowMount } from '@vue/test-utils'
import SingleMissionCard from '@/components/SingleMissionCard.vue'

const singleMission = {
  id: 'test-id',
  mission_name: 'test-mission-name',
  details: 'test-details',
  links: {
    flickr_images: [
      'img_src'
    ],
    article_link: 'some-article-link'
  }
}

describe('SingleMissionCard.vue', () => {
  it('should render component properly when full data is passed correctly', () => {
    const wrapper = shallowMount(SingleMissionCard, {
      propsData: { singleMission }
    })

    expect(wrapper.find('.c-SingleMissionCard').exists()).toBe(true)
    expect(wrapper.find('.c-SingleMissionCard__coverImg').exists()).toBe(true)
    expect(wrapper.find('.c-SingleMissionCard__coverImg').attributes('src')).toBe(singleMission.links.flickr_images[0])
    expect(wrapper.find('.c-SingleMissionCard__infoContainer').exists()).toBe(true)
    expect(wrapper.find('.c-SingleMissionCard__infoContainer .c-SingleMissionCard__title').exists()).toBe(true)
    expect(wrapper.find('.c-SingleMissionCard__infoContainer .c-SingleMissionCard__title').text()).toEqual(singleMission.mission_name)
    expect(wrapper.find('.c-SingleMissionCard__infoContainer .c-SingleMissionCard__desc').exists()).toBe(true)
    expect(wrapper.find('.c-SingleMissionCard__infoContainer .c-SingleMissionCard__desc').text()).toEqual(singleMission.details)
    expect(wrapper.find('.c-SingleMissionCard__infoContainer .c-SingleMissionCard__desc--empty').exists()).toBe(false)
    expect(wrapper.find('.c-SingleMissionCard__infoContainer .c-SingleMissionCard__seeMore').exists()).toBe(true)
    expect(wrapper.find('.c-SingleMissionCard__infoContainer .c-SingleMissionCard__seeMore').attributes('href')).toBe(singleMission.links.article_link)
    expect(wrapper.find('.c-SingleMissionCard__infoContainer .c-SingleMissionCard__seeMore').attributes('target')).toBe('_blank')
    expect(wrapper.find('.c-SingleMissionCard__infoContainer .c-SingleMissionCard__seeMore').attributes('rel')).toBe('noopener noreferrer')
    expect(wrapper.find('.c-SingleMissionCard__infoContainer .c-SingleMissionCard__seeMore span').text()).toEqual('See more')
  })

  it('should render alt image and alt description and no link if info is missing from the payload', () => {
    const missingDataMission = {
      id: 'test-id',
      mission_name: 'test-mission-name'
    }
    const wrapper = shallowMount(SingleMissionCard, {
      propsData: { missingDataMission }
    })

    expect(wrapper.find('.c-SingleMissionCard__coverImg').attributes('src')).toBe('/SpaceX-Logo.png')
    expect(wrapper.find('.c-SingleMissionCard__infoContainer').exists()).toBe(true)
    expect(wrapper.find('.c-SingleMissionCard__infoContainer .c-SingleMissionCard__desc--empty').exists()).toBe(true)
    expect(wrapper.find('.c-SingleMissionCard__infoContainer .c-SingleMissionCard__desc--empty').text()).toEqual('No description available...')
    expect(wrapper.find('.c-SingleMissionCard__infoContainer .c-SingleMissionCard__seeMore').exists()).toBe(false)
  })

  it('"imgLoaded" is emmited if image is loaded', () => {
    const wrapper = shallowMount(SingleMissionCard, {
      propsData: { singleMission }
    })

    wrapper.vm.imgLoaded()
    expect(wrapper.emitted().imgLoaded[0]).toBeTruthy()
  })

  it('props default types should match correctly', () => {
    const wrapperNoProps = shallowMount(SingleMissionCard)

    expect(wrapperNoProps.props().singleMission).toEqual({})
  })
})
