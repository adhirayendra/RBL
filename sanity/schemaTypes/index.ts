import { type SchemaTypeDefinition } from "sanity";
import category from "./articles/category";
import author from "./articles/author";
import article from "./articles/article";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, author, article],
};
