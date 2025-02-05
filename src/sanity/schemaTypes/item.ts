import { defineType } from "sanity";

export const item = defineType({
  name: "item",
  title: "Order Item",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Product Title",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (rule) => rule.required().min(0),
    },
    {
      name: "quantity",
      title: "Quantity",
      type: "number",
      validation: (rule) => rule.required().min(1),
    },
  ],
});
