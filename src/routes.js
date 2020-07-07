import React from "react";
import { Redirect } from "react-router-dom";

import MainPage from "./layouts/MainPage.js"
import SubPage from "./layouts/SubPage.js"

import Fellow from "./components/Fellow/Fellow.js"
import DetailInfo from "./components/info/DetailInfo.js"
import DeviceInfo from "./components/info/DeviceInfo.js"
import ContactInfo from "./components/info/ContactInfo.js"
import PeopleProfile from "./components/info/PeopleProfile.js"

export default [
  {
    path: "/",
    exact: true,
    layout: MainPage,
  },
  {
    path: "/hot1",
    layout: SubPage,
    component: () => <Fellow/>
  },
  {
    path: "/hot2",
    layout: SubPage,
    component: () => <DetailInfo/>
  },
  {
    path: "/hot3",
    layout: SubPage,
    component: () => <DetailInfo/>
  },
  {
    path: "/hot4",
    layout: SubPage,
    component: () => <PeopleProfile/>
  },
  {
    path: "/people_profile",
    layout: SubPage,
    component: () => <DeviceInfo/>
  },
  {
    path: "/people",
    layout: SubPage,
    component: () => <Fellow/>
  },
  {
    path: "/ip",
    layout: SubPage,
    component: () => <DetailInfo/>
  },
  {
    path: "/project",
    layout: SubPage,
    component: () => <DetailInfo/>
  },
  {
    path: "/info",
    layout: SubPage,
    component: () => <DetailInfo/>
  },
  {
    path: "/device",
    layout: SubPage,
    component: () => <DeviceInfo/>
  },
  {
    path: "/contact",
    layout: SubPage,
    component: () => <ContactInfo/>
  },
  {
    path: "/people_profile",
    layout: SubPage,
    component: () => <PeopleProfile/>
  },
  {
    path: "/docs",
    layout: SubPage,
    component: () => <Fellow/>
  }
];
