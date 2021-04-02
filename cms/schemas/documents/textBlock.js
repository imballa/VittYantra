import {FiFileText} from 'react-icons/fi'


export default {
  name: 'textBlock',
  type: 'document',
  icon: FiFileText,
  title: 'Text Block',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Text Block Name *',
      validation: Rule => Rule.required(),
      description: 'Name is used to identify the text for page layout'
    },
    {
      name: 'textBlockBody',
      type: 'blockContent',
      title: 'Text Block',
      description: 'Add some rich text or quote'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'textBlockBody',
      media: 'FiFileText'
    }
  }
}
