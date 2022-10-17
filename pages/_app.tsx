import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react' // hooks from react
import { GoogleOAuthProvider } from '@react-oauth/google'

import Navbar  from '../components/Navbar'
import Sidebar from '../components/Sidebar'

// SSR: Server Side Rendering
const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setIsSSR] = useState(true); // create useState, set True at the start, SSR at start

  // When it is not SSR, useEffect runs only at the start, the dependency array is empty
  useEffect(() => {
    setIsSSR(false); // render at client side
  }, []);
  
  if(isSSR) return null; // If is server side rendering, we won't show our components
  return (
    <GoogleOAuthProvider clientId= '721624696325-sila0a0au4tp82asrqp34ps333c0hfts.apps.googleusercontent.com'>
      <Navbar />
      <div className='flex gap-6 md:gap:20'>
        <div className='h-[92vh] overflow-hidden xl:hover:overflow-auto'>
          <Sidebar /> 
        </div>
        <div className='mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1'>
          <Component {...pageProps} />
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default MyApp

// Where we acrually create template