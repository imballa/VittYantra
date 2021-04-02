import { FiChevronDown } from 'react-icons/fi'

export default {
  name: 'accordionBlock',
  icon: FiChevronDown,
  type: 'document',
  title: 'Accordion Block',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Accordion Block Name *',
      validation: Rule => Rule.required(),
      description: 'Name is used to identify the text for page layout'
    },
    {
      name: 'textBlockBody',
      type: 'blockContent',
      title: 'Accordion Text Block',
      description: 'Add some rich text or quote'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'textBlockBody',
      media: 'MdTextFields'
    }
  }
}
