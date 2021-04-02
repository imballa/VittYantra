import { FiSettings } from 'react-icons/fi'

export default {
  name: 'siteInfo',
  type: 'document',
  icon: FiSettings,
  title: 'Site Information',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Site *',
      description: 'Enter your Site name',
      validation: Rule => Rule.required()
    },
    {
      name: 'logo',
      type: 'figure',
      title: 'Logo',
      description: 'Set up your logo image',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description:
        'Introduction to your business, and aims to tell an audience about your products or services.',
      validation: Rule => Rule.required()
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that will help users to find you well on internet.',
      of: [{ type: 'string' }],
    },
    {
        name: "email",
        title: "Email Address",
        type: "string",
    },
    {
        name: "phone",
        title: "Phone Number",
        type: "string",
    },
    {
        name: "address",
        title: "Address",
        type: "string",
    },
    {
      title: 'Facebook Channel',
      name: 'facebookurl',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel']
        })
    },
    {
      title: 'Pinterest Channel',
      name: 'pinteresturl',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel']
        })
    },
    {
      title: 'Instagram Channel',
      name: 'instaurl',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel']
        })
    },
    {
      title: 'YouTube Channel',
      name: 'youtubeurl',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel']
        })
    },
    {
      title: 'Twitter Channel',
      name: 'twitterurl',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel']
        })
    },
    {
      title: 'Domain Name (Local)',
      name: 'domainurl',
      type: 'url',
      description: `Enter the website Url`,
      validation: Rule =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel']
        })
    },
  ]
}
