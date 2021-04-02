import {FiSliders} from 'react-icons/fi'

export default {
  name: 'sliderType',
  type: 'document',
  icon: FiSliders,
  title: 'Slider Type',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Slider Type'
    },
    {
      name: 'description',
      type: 'string',
      title: 'Slider Description'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
      media: 'FaSlidersH'
    }
  }
}
