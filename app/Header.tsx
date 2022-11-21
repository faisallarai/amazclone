'use client';
import Image from 'next/image';
import React from 'react';
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { selectItems } from '../redux/basketSlice';
import { Session } from 'next-auth';
import { useRouter } from 'next/navigation';

interface IHeaderProps {
  session?: Session | null;
}

function Header({ session }: IHeaderProps) {
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header>
      {/* Top nav */}
      <nav className="flex flex-grow items-center bg-amazon_blue p-1 py-2">
        {/* Logo */}
        <div className="flex items-center mt-2 flex-grow sm:flex-grow-0">
          <Link href="/">
            <Image
              src="https://links.papareact.com/f90"
              width={150}
              height={40}
              style={{ objectFit: 'contain' }}
              alt="logo"
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          />
          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>

        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div
            className="link"
            onClick={session ? () => signOut() : () => signIn()}
          >
            <p>{session ? `Hello, ${session.user?.name}` : 'Sign In'}</p>
            <p className="font-extrabold md:text-sm">Accounts & Lists</p>
          </div>

          <Link href="/checkout/orders">
            <div className="link">
              <p>Returns</p>
              <p className="font-extrabold md:text-sm">& Orders</p>
            </div>
          </Link>

          <Link href="/checkout">
            <div className="relative link flex items-center">
              <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
                {items.length}
              </span>
              <ShoppingCartIcon className="h-10" />
              <p className="font-extrabold md:text-sm hidden md:inline mt-2">
                Basket
              </p>
            </div>
          </Link>
        </div>
      </nav>

      {/* Bottom nav */}
      <nav className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <div className="link flex items-center">
          <Bars3Icon className="h-6 mr-1" />
          All
        </div>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </nav>
    </header>
  );
}

export default Header;
