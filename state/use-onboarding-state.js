import { createStore } from "state/helpers";

import { creators } from "./creatorsData";
import subscriptionPlans from "./subscriptionPlans";
import { wardrobeThemes } from "./wardrobeThemes";

import { subscriptions } from "./subscriptions";
const useOnboardingState = createStore((set) => ({
  users: [],

  currentUser: {
    complexion: "#9D5F5F",
    height: { feet: "5", inches: "5" },
    userBodyType: "Inverse-Triangle",
    userEmail: "raghavlakhanpal57@gmail.com",
    userName: "raghav",
  },

  creators,

  wardrobeThemes,

  subscriptionPlans,

  selectedQuantity: {
    outdoorCasual: 0,
    western: 0,
    formal: 0,
    dress: 0,
    sports: 0,
    holiday: 0,
  },

  selectedCreators: [],

  selectedWardrobeThemes: [],

  selectedFrequency: "",

  subscriptions,

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
      draft.currentUser = pd;
    });
  },

  updateSelectedCreators: (favourites) => {
    set((draft) => {
      draft.selectedCreators = [...draft.selectedCreators, favourites];
    });
  },

  updateSelectedWardrobeThemes: (selectedThemes) => {
    set((draft) => {
      draft.selectedWardrobeThemes = [
        ...draft.selectedWardrobeThemes,
        selectedThemes,
      ];
    });
    console.log(useOnboardingState.selectedWardrobeThemes);
  },

  updateSelectedFrequency: (frequency) => {
    set((draft) => {
      draft.selectedFrequency = frequency;
    });
  },

  updateSelectedQuantity: (quantity) => {
    set((draft) => {
      draft.selectedQuantity = { ...draft.selectedQuantity, ...quantity };
    });
  },
  findSingleSubscription: (id) => {
    set((draft) => {
      draft.subscriptions.find((data) => data.name === id);
    });
  },
  getPlanById:(id)=>{
    set((draft)=>{
      draft.plans.find((singlePlan)=>singlePlan.planId === id)
    })
  },
}));

export const selectors = {
  selectOnboardingState: (state) => state,
  selectOnboardingStateUsers: (state) => state.users,
  selectOnboardingStateCurrentUser: (state) => state.currentUser,
  selectOnboardingStateCreators: (state) => state.creators,
  selectOnboardingStateCreatorsCount: (state) => state.creators.length,
  selectOnboardingStateUpdateUsers: (state) => state.updateUsers,
  selectOnboardingStateUpdateSelectedCreators: (state) =>
    state.updateSelectedCreators,
  selectOnboardingStateUpdateSelectedWardrobeThemes: (state) =>
    state.updateSelectedWardrobeThemes,
  selectOnboardingStateThemes: (state) => state.wardrobeThemes,
  selectOnboardingStateUpdateSelectedFrequency: (state) =>
    state.updateSelectedFrequency,
  selectOnboardingStateUpdateSelectedQuantity: (state) =>
    state.updateSelectedQuantity,
  selectOnboardingStateSubscriptions: (state) => state.subscriptions,
  selectOnboardingStateFindSingleSubscription: (state) =>
    state.findSingleSubscription,
  selectOnboardingStateSubscriptionPlans: (state) => state.subscriptionPlans,
  selectOnboardingStateSubscriptionPlanById: (state) => state.getPlanById,
};

export default useOnboardingState;
