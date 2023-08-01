"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "../redux/Store";

type Props = {
  children: React.ReactNode;
};

export default function ProviderRedux({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}
