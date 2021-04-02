import {MdFormatQuote} from 'react-icons/md'


export default {
  name: 'testimonial',
  type: 'document',
  icon: MdFormatQuote,
  title: 'Testimonial Block',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name *',
      validation: Rule => Rule.required(),
      description: 'Name is used to identify the person'
    },
    {
      name: 'role',
      type: 'string',
      title: 'Role',
      description: 'Add role of this person'
    },
    {
      name: 'quote',
      type: 'blockContent',
      title: 'Quote *',
      validation: Rule => Rule.required(),
      description: 'Add quote given by this person'
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'quote',
      media: 'MdFormatQuote'
    }
  }
}
