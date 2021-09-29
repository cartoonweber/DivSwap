import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import HeaderTopLine from './header-top-line';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically 

function MyApp({ Component, pageProps }) {
    return (
        <div className="global" >
            <HeaderTopLine />
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp