'use client';
import Link from 'next/link';
import React from 'react';
import { FaSearch } from 'react-icons/fa';

import { UserDropdown } from '|/components/notus/dropdowns/user-dropdown';

export function AdminNavbar() {
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <Link
            className="text-white dark:text-black text-sm uppercase hidden lg:inline-block font-semibold"
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            Dashboard
          </Link>
          {/* Form */}
          <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal absolute text-center text-slate-300 dark:text-slate-700 bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                {/* <i className="fas fa-search" /> */}
                <FaSearch className="inline-block" />
              </span>
              <input
                type="text"
                placeholder="Search here..."
                className="border-0 px-3 py-3 placeholder-slate-300 dark:placeholder-slate-700 text-slate-600 dark:text-slate-400 relative bg-white dark:bg-black rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
              />
            </div>
          </form>
          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <UserDropdown />
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
