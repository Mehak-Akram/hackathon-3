import { defineType } from "sanity";

export const order = defineType({
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    {
      name: "customerName",
      title: "Customer Name",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "email",
      title: "Email Address",
      type: "string",
      validation: (rule) => rule.required().email(),
    },
    {
      name: "phone",
      title: "Phone Number",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "address",
      title: "Shipping Address",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "totalAmount",
      title: "Total Amount",
      type: "number",
      validation: (rule) => rule.required().min(0),
    },
    {
      name: "items",
      title: "Ordered Items",
      type: "array",
      of: [{ type: "item" }], 
    },
    {
      name: "status",
      title: "Order Status",
      type: "string",
      options: {
        list: ["Pending", "Processing", "Shipped", "Delivered"],
      },
      initialValue: "Pending",
    },
  ],
});
