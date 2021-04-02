import { FiCreditCard } from "react-icons/fi";

export default {
  name: "header",
  title: "Header",
  icon: FiCreditCard,
  type: "document",
  fields: [
    {
      name: "menu",
      title: "Header Navigation",
      type: "array",
      of: [{ type: "headerNavigation" }],
    },
  ],
  preview: {
    select: {
      title: "header",
    },
  },
};
