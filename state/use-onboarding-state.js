import { createStore } from "state/helpers";

const useOnboardingState = createStore(set => ({
  user: {},
  creators: [],
  setUser: u =>
    set(draft => {
      draft.user = u;
    }),
  setCreators: creatorsArray =>
    set(draft => {
      draft.creators = creatorsArray;
    }),
}));

export const selectors = {
  selectOnboardingState: state => state,
  selectOnboardingStateUser: state => state.user,
  selectOnboardingStateCreators: state => state.creators,
  selectOnboardingStateCreatorsCount: state => state.creators.length,
};

export default useOnboardingState;
