import React from "react";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiMessageCircle,
  FiLinkedin,
} from "react-icons/fi";

function getSocialIcon(value) {
  switch (value) {
    case "Facebook":
      return FiFacebook;
    case "Twitter":
      return FiTwitter;
    case "Instagram":
      return FiInstagram;
    case "Linkedin":
      return FiLinkedin;
    default:
      return FiMessageCircle;
  }
}

export default {
  title: "Social Presense",
  name: "socialPlatform",
  icon: FiFacebook,
  type: "object",
  fields: [
    {
      name: "platform",
      type: "string",
      title: "Platform",
      options: {
        list: [
          { title: "Facebook", value: "Facebook" },
          { title: "Instagram", value: "Instagram" },
          { title: "Twitter", value: "Twitter" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "link",
      type: "string",
      title: "Social Link",
    },
  ],
  preview: {
    select: {
      title: "platform",
      subtitle: "link",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle,
        media: getSocialIcon(title),
      };
    },
  },
};
