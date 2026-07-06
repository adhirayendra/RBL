import { type SchemaTypeDefinition } from "sanity";
import category from "./articles/category";
import article from "./articles/article";
import topMusic from "./topMusic/topMusic";
import programSpotify from "./programSpotify/programSpotify";
import track from "./programSpotify/track";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, article, topMusic, programSpotify, track],
};