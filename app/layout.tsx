import './globals.css'
import './bootstrap.min.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar'
import {ContextProvider} from './studentsList/context/appContext'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
title: 'V.O.D Movies',
description: 'Movie search engine in next.js',
}

export default function RootLayout({
children,
}: {
children: React.ReactNode
}) {
return (
  <ContextProvider>
<html lang="en">

<body className={inter.className}>
  <NavBar />
  {children}
  </body>
</html>
</ContextProvider>
)
}