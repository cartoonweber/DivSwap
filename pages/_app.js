import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import HeaderTopLine from './header-top-line';

function MyApp({ Component, pageProps }) {
    return (
        <div className="global" >
            <HeaderTopLine />
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp