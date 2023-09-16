import type { TinaField } from "tinacms";
export function blog_postFields() {
  return [
    {
      type: "string",
      name: "template",
      label: "template",
    },
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "slug",
      label: "slug",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "image",
      name: "featuredImage",
      label: "featuredImage",
    },
    {
      type: "string",
      name: "tags",
      label: "tags",
      list: true,
    },
  ] as TinaField[];
}
