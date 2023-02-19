"use client";

import { useReducer } from "react";

enum ActionKind {
  ADD_VIEW = "ADD_VIEW",
  ADD_LIKE = "ADD_LIKE",
  ADD_SAVE = "ADD_SAVE",
}

interface Action {
  type: ActionKind;
}

const initialState: state = {
  views: 0,
  likes: 0,
  saves: 0
}

interface state {
  views: number;
  likes: number;
  saves: number
}

const reducer = (state: typeof initialState, action: Action) => {
  const { type } = action;
  switch (type) {
    case ActionKind.ADD_VIEW: {
      return {
        ...state,
        views: state.views + 1,
      };
    }
    case ActionKind.ADD_LIKE: {
      return {
        ...state,
        likes: state.likes + 1,
      };
    }
    case ActionKind.ADD_SAVE: {
      return {
        ...state,
        saves: state.saves + 1,
      };
    }
    default:
      return state;
  }
};

export const useInteraction = (filmInteractions: { views: number, likes: number, saves: number}) => {
  const [state, dispatch] = useReducer(reducer, {
    views: filmInteractions.views,
    likes: filmInteractions.likes,
    saves: filmInteractions.saves,
  });

  const { views, likes, saves } = state;

  const addView = (): void => {
    dispatch({ type: ActionKind.ADD_VIEW })
  }

  const addLike = (): void => {
    dispatch({ type: ActionKind.ADD_LIKE })
  }

  const addSave = (): void => {
    dispatch({ type: ActionKind.ADD_SAVE })
  }

  return {
    views,
    likes,
    saves,
    addView,
    addLike,
    addSave,
  };
};
