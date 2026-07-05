import { type SchemaTypeDefinition } from "sanity";
import category from "./articles/category";
import article from "./articles/article";
import topMusic from "./topMusic/topMusic";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, article, topMusic],
};