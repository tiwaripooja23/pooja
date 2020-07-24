import { string, any } from "prop-types";
import React, { lazy, Component, Suspense } from "react";
import shortid from "shortid";
import { JSXAttribute } from "@babel/types";

interface componentMapInterface {
  [name: string]: string
}
// let componentArray: componentMapInterface;
let componentMap =
{
  email: "../components/Form/Email",
  date: "../components/Form/Text",
  text: "../components/Form/Text",
  number: "../components/Form/Number",
  ssn: "../components/Form/Text",
  phone: "../components/Form/Text"
};
export const importView = (comp: string) => {
  const LazyComponent = lazy(() => import('../components/' + comp));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}

  
