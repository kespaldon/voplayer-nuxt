import * as voplayer from "voplayer-html5";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      voplayer,
    },
  };
});
