export default {
  name: "link",
  title: "Link",
  type: "object",
  fields: [
    {
      name: "ctaLabel",
      title: "CTA Label",
      type: "string",
    },
    {
      name: "page",
      title: "Link To",
      type: "reference",
      to: [{ type: "landingPage" }],
    },
  ],
};
