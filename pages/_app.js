import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import Head from 'next/head'
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically 

function MyApp({ Component, pageProps }) {
    return (
        <div className="global" >
            <Head >
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap" rel="stylesheet" />
            </Head>
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp