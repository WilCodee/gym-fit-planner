'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <span className="text-2xl font-bold">El cardio es vida</span>
          </Link>

          {/* Desktop Menu */}
          {/* <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="hover:text-blue-100 transition duration-200"
            >
              Home
            </Link>
            <Link
              href="/feeding"
              className="hover:text-blue-100 transition duration-200"
            >
              Feeding Program
            </Link>
          </div> */}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded hover:bg-blue-700 transition"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block px-3 py-2 rounded hover:bg-blue-700 transition"
            >
              Home
            </Link>
            <Link
              href="/feeding"
              className="block px-3 py-2 rounded hover:bg-blue-700 transition"
            >
              Feeding Program
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
