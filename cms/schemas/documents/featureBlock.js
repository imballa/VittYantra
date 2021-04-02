import {FiGift} from 'react-icons/fi'

export default {
  name: 'featureBlock',
  type: 'document',
  icon: FiGift,
  title: 'Feature Block',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Feature Block Name *',
      validation: Rule => Rule.required(),
      description: 'Name is used to identify the feature block'
    },
    {
        name: 'features',
        title: 'Add Features',
        description: 'Add list of features to the block',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'feature' }]
          }
        ]
      },
  ],
  preview: {
    select: {
      title: 'name',
    }
  }
}
