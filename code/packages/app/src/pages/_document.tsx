import type { Metadata } from 'next'
import { SITE_DESCRIPTION, SITE_NAME } from '@/utils/site'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}