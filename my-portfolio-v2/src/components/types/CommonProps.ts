import { Dispatch, SetStateAction } from "react";

export interface HeaderProps {
  children: React.ReactElement;
}

export interface PositionState {
  about: number;
  freelance: number;
  portfolio: number;
  service: number;
}

export interface ContextState {
  state: PositionState;
  dispatch: Dispatch<Action>;
}

export enum ActionKind {
  SetAbout = "SET_ABOUT",
  SetFreelance = "SET_FREELANCE",
  SetPortfolio = "SET_PORTFOLIO",
  SetService = "SET_SERVICE",
  SetContact = "SET_CONTACT",
}

export type Action = {
  type: ActionKind;
  payload: number;
};
