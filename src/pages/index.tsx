import Head from 'next/head'
import { useState } from 'react'
import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import Pricing from '@/components/sections/Pricing'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Guard-VPN - Secure Web-Based VPN Service</title>
        <meta name="description" content="Secure web-based VPN service with browser-native encryption" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Header />
        <Hero />
        <Features />
        <Pricing />
        <Footer />
      </main>
    </>
  )
}
