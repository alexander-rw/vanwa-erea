import { GET_VERSION, VersionAction } from "./types";

export const getVersion = (version: string): VersionAction => ({
  type: GET_VERSION,
  payload: version,
});
