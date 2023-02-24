import Head from 'next/head'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Todo App</title>
            </Head>
            <main>
                    <Component {...pageProps} />
            </main>
        </>
    )
}

export default MyApp
