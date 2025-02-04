import { CartProvider } from "./cartContext/CartContext";
import { MenuProvider } from "./menuContext/MenuContext";

const BuildProviderTree = (providers) =>
  providers.reduceRight(
    (AccProvider, CurrentProvider) =>
      ({ children }) =>
        (
          <CurrentProvider>
            <AccProvider>{children}</AccProvider>
          </CurrentProvider>
        ),
    ({ children }) => <>{children}</>
  );

const Providers = BuildProviderTree([CartProvider, MenuProvider]);

export default Providers;