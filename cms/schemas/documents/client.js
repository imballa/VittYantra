import { FiUsers } from "react-icons/fi";

export default {
  name: "client",
  title: "Client",
  icon: FiUsers,
  type: "document",
  fields: [
    {
      name: "name",
      title: "Client Name",
      type: "string",
    },
    {
      name: "logo",
      title: "Client Logo",
      type: "figure",
      options: {
        hotspot: true,
      },
    },
  ],

  preview: {
    select: {
      title: "name",
      media: "logo",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
