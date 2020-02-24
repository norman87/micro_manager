import React from "react";
import { Route } from "react-router-dom";
import luckyDraw1 from "../templates/luckyDraw1";
import luckyDrawPage from "../templates/luckyDrawPage";

export default [
  <Route exact path="/luckydraw1" component={luckyDraw1} noLayout />,
  <Route exact path="/luckydrawpage" component={luckyDrawPage} noLayout />
];
