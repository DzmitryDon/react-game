import React, { lazy, Suspense } from "react";

import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Loading } from "../components/Loading";

const GameOver = lazy(() => import("../pages/GameOver"));
const Home = lazy(() => import("../pages/Home"));
const Exit = lazy(() => import("../components/Exit"));
const Puzzle = lazy(() => import("../pages/Puzzle"));

export default function RouterComponent() {
  const { modal } = useSelector((state) => state.ui);
  return (
    <Router>
      <Layout>
        <Switch>
          <Suspense fallback={<Loading />}>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/game">
              <Puzzle />
              <Exit open={modal} />
            </Route>
            <Route exact path="/game-over">
              <GameOver />
            </Route>
          </Suspense>
        </Switch>
      </Layout>
    </Router>
  );
}
