import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-[#1F1F27]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h2 className="text-[15px] font-medium text-[#F4F4F6]">
          PrintShop
        </h2>

        <div className="flex items-center gap-5">
          <span className="text-sm text-[#9CA0AE]">How it works</span>
          <span className="text-sm text-[#9CA0AE]">Features</span>
          <span className="text-sm text-[#9CA0AE]">For print shops</span>

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
      </div>
    </nav>
  );
}