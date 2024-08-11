"use client";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="shadow-lg bg-gradient-to-r from-blue-300 to-purple-400">
      <div className="flex items-center justify-between max-w-6xl p-3 mx-auto">
        {/* logo */}
        <Link href="/" className="text-2xl font-extrabold cursor-pointer group">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 drop-shadow-md group-hover:from-blue-400 group-hover:to-blue-600">
            Auth
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700 drop-shadow-md group-hover:from-purple-400 group-hover:to-purple-600">
            App
          </span>
        </Link>
        {/* add a navigation menu */}
        <nav>
          <ul className="flex gap-7">
            <Link
              href="/"
              className={`${
                pathname === "/"
                  ? "border-b-purple-700 text-purple-700"
                  : "border-b-transparent text-white"
              } border-b-4 pb-1`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${
                pathname === "/about"
                  ? "border-b-purple-700 text-purple-700"
                  : "border-b-transparent text-white"
              } border-b-4 pb-1`}
            >
              About
            </Link>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton
                className={`${
                pathname === "/sign-in"
                  ? "border-b-purple-700 text-purple-700"
                  : "border-b-transparent text-white"
              } border-b-4 pb-1`}
              />
            </SignedOut>
          </ul>
        </nav>
      </div>
    </header>
  );
}
