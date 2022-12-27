import { persist } from "zustand/middleware";
import produce from "immer";
import * as R from "ramda";
import create from "zustand";

// Log every time state is changed
const log = config => (set, get, api) =>
  config(
    args => {
      console.log("  applying", args);
      set(args);
      console.log("  new state", get());
    },
    get,
    api
  );

export const immer = config => (set, get, api) =>
  config(
    (partial, replace) => {
      const nextState =
        typeof partial === "function" ? produce(partial) : partial;
      return set(nextState, replace);
    },
    get,
    api
  );

export const createStore = R.pipe(log, immer, persist, create);
