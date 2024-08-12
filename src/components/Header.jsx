"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";

export default function Header() {
  const pathname = usePathname();

  const activeLinkStyle = "border-b-purple-700 text-purple-700";
  const notActiveLinkStyle =
    "border-b-transparent text-white hover:text-purple-500";
  const basicLinkStyle = "pb-1 border-b-2";

  const isLinkActive = {
    "/": activeLinkStyle,
    "/about": activeLinkStyle,
    "/sign-in": activeLinkStyle,
  };

  return (
    <header className="shadow-lg bg-gradient-to-r from-blue-300 to-purple-400">
      <div className="flex items-center justify-between max-w-6xl p-3 mx-auto">
        <Link href="/" className="text-2xl font-extrabold cursor-pointer group">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 drop-shadow-md group-hover:from-blue-400 group-hover:to-blue-600">
            Auth
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700 drop-shadow-sm group-hover:from-purple-400 group-hover:to-purple-600">
            App
          </span>
        </Link>
        <nav>
          <ul className="flex gap-7">
            <li>
              <Link
                href="/"
                className={`${
                  pathname === "/" ? isLinkActive[pathname] : notActiveLinkStyle
                } ${basicLinkStyle}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`${
                  pathname === "/about" ? isLinkActive[pathname] : notActiveLinkStyle
                } ${basicLinkStyle}`}
              >
                About
              </Link>
            </li>
            <li>
              <SignedOut>
                <SignInButton
                  className={`${
                    pathname === "/sign-in"
                      ? isLinkActive[pathname]
                      : notActiveLinkStyle
                  } ${basicLinkStyle}`}
                />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
