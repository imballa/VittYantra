import {FiGift} from 'react-icons/fi'

export default {
  name: 'feature',
  type: 'document',
  icon: FiGift,
  title: 'Key Features',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Feature Name *',
      validation: Rule => Rule.required(),
      description: 'Name is used to identify the feature'
    },
    {
      name: 'image',
      type: 'figure',
      title: 'Image Block',
      description: 'Typically, this may be a landscape image so dont foget about the focal point'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
