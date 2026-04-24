/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AppGrid from '../components/AppGrid';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="portal-bg" />
      
      <Navbar />
      
      <main>
        <Hero />
        <AppGrid />
      </main>

      <Footer />
    </div>
  );
}
