import { defineStore } from "pinia";
import state from "./state";
import getters from "./getter";
import actions from "./action";

export const useUserStore = defineStore({
  id: "user",
  state,
  getters,
  actions,
});
