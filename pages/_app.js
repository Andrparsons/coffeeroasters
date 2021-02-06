import '../styles/globals.css'

import AppLayout from '../components/Layouts/AppLayout'

function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout || ((page) => <AppLayout children={page} />);


    return getLayout(<Component {...pageProps} />);

}

export default MyApp
