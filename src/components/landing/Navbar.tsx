"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-[#1F1F27]">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <h2 className="text-[15px] font-medium text-[#F4F4F6]">
            PrintShop
          </h2>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-5 md:flex">
            <span className="text-sm text-[#9CA0AE]">
              How it works
            </span>

            <span className="text-sm text-[#9CA0AE]">
              Features
            </span>

            <span className="text-sm text-[#9CA0AE]">
              For print shops
            </span>

            <Link
              href="/login"
              className="text-sm text-[#F4F4F6] hover:text-white"
            >
              Sign in
            </Link>

            <Link
              href="/print"
              className="rounded-lg bg-[#6366F1] px-4 py-2 text-sm font-medium text-[#0A0A0F]"
            >
              Start printing
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg border border-[#2A2A35] p-2 text-[#F4F4F6] md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="mt-4 flex flex-col gap-4 border-t border-[#1F1F27] pt-4 md:hidden">
            <span className="text-sm text-[#9CA0AE]">
              How it works
            </span>

            <span className="text-sm text-[#9CA0AE]">
              Features
            </span>

            <span className="text-sm text-[#9CA0AE]">
              For print shops
            </span>

            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="text-sm text-[#F4F4F6]"
            >
              Sign in
            </Link>

            <Link
              href="/print"
              onClick={() => setIsOpen(false)}
              className="rounded-lg bg-[#6366F1] px-4 py-2 text-center text-sm font-medium text-[#0A0A0F]"
            >
              Start printing
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}