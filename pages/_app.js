import '../styles/globalStyles'
import { GlobalProvider } from "../context/globalContext";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}

export default MyApp
