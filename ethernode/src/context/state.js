import React from "react";
import { CheckoutProvider } from "./checkout";
import { ContactProvider } from "./contact";

//This... is the royal motherfucker. Grabs all context(s) and makes one shallow copy.
function ProviderComposer({ contexts, children }) {
  return contexts.reduceRight(
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids
      }),
    children
  );
}

function ContextProvider({ children }) {
  return (
    <ProviderComposer contexts={[<CheckoutProvider />, <ContactProvider />]}>
      {children}
    </ProviderComposer>
  );
}

export { ContextProvider };
