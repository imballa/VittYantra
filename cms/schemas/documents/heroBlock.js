import { FiBookmark } from "react-icons/fi";

export default {
    type: "document",
    name: "heroBlock",
    icon: FiBookmark,
    title: "Hero Block",
    fields: [
      {
        name: "label",
        type: "string",
      },
      {
        name: "heading",
        type: "string",
        title: "Heading",
      },
      {
        name: "tagline",
        type: "blockContent",
      },
      {
        name: "illustration",
        type: "illustration",
      }
    ],
    preview: {
      select: {
        title: "heading",
        subtitle: "label",
        disabled: "disabled",
      },
      prepare({ title, disabled }) {
        return {
          title: `Hero: ${disabled ? "DISABLED" : title}`,
        };
      },
    },
  };
  