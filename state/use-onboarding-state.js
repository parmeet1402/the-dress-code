import { createStore } from "state/helpers";

import { creators } from "./creatorsData";

const useOnboardingState = createStore((set) => ({
  users: [],
  currentUser: {},
  creators: creators,
  selectedCreators: [],
  setUser: (u) =>
    set((draft) => {
      draft.user = u;
    }),
  setCreators: (creatorsArray) =>
    set((draft) => {
      draft.creators = creatorsArray;
    }),
  updateUsers: (pd) => {
    set((draft) => {
      draft.users = [...draft.users, pd];
    });
  },
  updateSelectedCreators: (favourites) => {
    set((draft) => {
      draft.selectedCreators = [...draft.selectedCreators, favourites];
    });
    console.log(useOnboardingState.selectedCreators);
  },
}));

export const selectors = {
  selectOnboardingState: (state) => state,
  selectOnboardingStateUser: (state) => state.user,
  selectOnboardingStateCreators: (state) => state.creators,
  selectOnboardingStateCreatorsCount: (state) => state.creators.length,
  selectOnboardingStateUpdateUsers: (state) => state.updateUsers,
  selectOnboardingStateUpdateSelectedCreators: (state) =>
    state.updateSelectedCreators,
};

export default useOnboardingState;
