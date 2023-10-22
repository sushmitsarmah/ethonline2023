import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head';

import { SITE_DESCRIPTION, SITE_NAME } from '@/utils/site'

import { Layout } from '@/components/Layout'
import { Web3Provider } from '@/context/Web3'
import '../assets/globals.css'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    return (
        <Web3Provider>
            <Layout>
                <Head>
                    <title>{SITE_NAME}</title>
                    <meta name="description" content={SITE_DESCRIPTION} />
                </Head>
                <Component {...pageProps} />
            </Layout>
        </Web3Provider>
    )
}