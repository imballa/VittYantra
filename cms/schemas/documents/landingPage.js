import {isUniqueAcrossAllDocuments} from '../../utils/isUniqueAcrossAllDocuments'
import { FiFileText } from "react-icons/fi";

export default {
  name: "landingPage",
  title: "Landing Pages",
  icon: FiFileText,
  description: "Full control to layout your landing pages",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Landing Page *",
      validation: (Rule) => Rule.required(),
      description: "Name your landing page - Used as internal identifier",
    },
    {
      name: "headline",
      type: "string",
      title: "Headline",
      description: "Headline of section / landing Page",
    },
    {
      name: "introduction",
      type: "blockContent",
      title: "Introduction",
      description: "Brief intro to this section / landing page",
    },
    {
      name: "pageSections",
      type: "array",
      title: "Layout / Order your sections on landing page",
      description: "Add/Order your page section layout",
      of: [ { type: "heroBlock" } ,{ type: "textBlock" }, { type: "featureBlock" }, { type: "imageBlock" }, { type: "accordionBlock" }, {type: "testimonial"}],
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "May be used for friendly url",
      validation: (Rule) => Rule.required(),
      options: {
        source: "name",
        maxLength: 96,
        isUnique: isUniqueAcrossAllDocuments
      },
    },
    {
      title: "SEO",
      name: "seo",
      type: "seo",
    },
  ],
  preview: {
    select: {
      title: "name",
    },
  },
};
