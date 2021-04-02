import { FiLayout } from "react-icons/fi";

export default {
  name: "footer",
  title: "Footer",
  icon: FiLayout,
  type: "document",
  fields: [
    {
      name: "navigationLinks",
      title: "Primary Navigation Links",
      type: "array",
      of: [{ type: "navigation" }],
    },
    {
      name: "secondaryNavigationLinks",
      title: "Secondary Navigation Links",
      type: "array",
      of: [{ type: "navigation" }],
    },
    {
      name: "copywrite",
      title: "Copy write",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "navigationLinks.name",
    },
    prepare(selections) {
      const { title } = selections;
      return {
        title: title,
      };
    },
  },
};
