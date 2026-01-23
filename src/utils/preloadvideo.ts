import { preload } from "react-dom";

export function preloadvideo(path: string) {
  return preload(path, {
    as: "video",
    type: "video/mp4",
    crossOrigin: "anonymous",
  });
}
