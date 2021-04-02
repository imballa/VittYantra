export default {
  title: "name",
  name: "headerNavigation",
  type: "object",
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Navigation Link Name'
    },
    {
      name: 'landingPage',
      title: 'Landing Page',
      description: 'Select Landing Page',
      type: 'reference',
      to: {
        type: 'landingPage'
      }
    },
    {
      name: 'path',
      title: 'Path',
      description: 'Example: /about-us',
      type: 'string'
    },
    {
      name: 'externalLink',
      title: 'External Link',
      description: 'Example: https:www.unilever.com/privacy',
      type: 'url'
    }
  ],
};
