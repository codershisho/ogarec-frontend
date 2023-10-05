import { defineStore } from "pinia";
import { Entry } from "../types/entry";

export const useEntryStore = defineStore("entry", {
  state: () => ({
    _entry: {} as Entry,
  }),
  getters: {
    entry(state): Entry {
      return state._entry;
    },
  },
  actions: {
    setEntry(payload: Entry): void {
      this._entry = payload;
    },
  },
});
