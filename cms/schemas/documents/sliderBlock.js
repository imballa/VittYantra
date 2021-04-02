import { FiSliders } from 'react-icons/fi'

export default {
  name: 'slider',
  type: 'document',
  icon: FiSliders,
  title: 'Slider',
  description: 'Slider for showing clients or anything',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Slider',
      description: 'Name is used to identify the slider for page layout'
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'Headline will be displayed on website'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'Description will be displayed on website'
    },
    {
      name: 'slideType',
      title: 'Slide Type',
      type: 'reference',
      to: {
        type: 'sliderType'
      },
      description: 'Select Slide Type'
    },
    {
      name: 'slides',
      type: 'array',
      title: 'Slides',
      description: 'Add list of clients',
      of: [
        {
          type: 'reference',
          to: [{ type: 'client' }]
        }
      ]
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slideType.name',
      media: 'FaSlidersH'
    }
  }
}
