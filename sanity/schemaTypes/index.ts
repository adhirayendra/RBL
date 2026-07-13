import { type SchemaTypeDefinition } from "sanity";
import category from "./articles/category";
import article from "./articles/article";
import topMusic from "./topMusic/topMusic";
import programSpotify from "./programSpotify/programSpotify";
import track from "./programSpotify/track";
import youtubeProgram from "./programYoutube/youtubeProgram";
import youtubeVideo from "./programYoutube/youtubeVideo";
import broadcast from "./programBroadcast/broadcast";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    category,
    article,
    topMusic,
    programSpotify,
    track,
    youtubeProgram,
    youtubeVideo,
    broadcast,
  ],
};
