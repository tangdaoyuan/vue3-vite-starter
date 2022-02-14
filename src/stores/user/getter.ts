import type { IState } from "./state";

const getters = {
  accountName: (state: IState) => state.username,
};

export default getters;

export type IGetter = typeof getters;
