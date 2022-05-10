import { createContext } from "react";

// set the defaults
const GlobalContext = createContext({
  products: undefined,
  toggleProductFav: () => {}
});

export default GlobalContext;
