
import 'Gapps_trial/styles/landingPage.css'
import 'Gapps_trial/styles/globals.css'
import ResponsiveAppBar from "./navbar"


function MyApp({ Component, pageProps }) {
  return (
    <div>
    <ResponsiveAppBar />
    <Component {...pageProps} />
    </div>
  
  );
}

export default MyApp
