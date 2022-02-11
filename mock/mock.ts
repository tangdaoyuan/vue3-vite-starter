import type { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/api/ping",
    method: "get",
    response: () => {
      return {
        code: 0,
        data: "pong!",
      };
    },
  },
] as MockMethod[];
