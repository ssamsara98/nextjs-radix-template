/* eslint-disable @next/next/no-img-element */
'use client';
import Link from 'next/link';
import React from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaUniversity } from 'react-icons/fa';

import { Footer } from '|/components/notus/footers/footer';
import { AuthNavbar } from '|/components/notus/navbars/auth-navbar';

export default function Profile() {
  return (
    <>
      <AuthNavbar transparent />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black dark:bg-white"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: 'translateZ(0)' }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-slate-200 dark:text-slate-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-slate-200 dark:bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-black w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src="/img/team-2-800x800.jpg"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        className="bg-slate-700 dark:bg-slate-300 active:bg-slate-600 dark:active:bg-slate-400 uppercase text-white dark:text-black font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Connect
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-600 dark:text-slate-400">
                          22
                        </span>
                        <span className="text-sm text-slate-400 dark:text-slate-600">Friends</span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-600 dark:text-slate-400">
                          10
                        </span>
                        <span className="text-sm text-slate-400 dark:text-slate-600">Photos</span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-slate-600 dark:text-slate-400">
                          89
                        </span>
                        <span className="text-sm text-slate-400 dark:text-slate-600">Comments</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-slate-700 dark:text-slate-300">
                    Jenna Stones
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-slate-400 dark:text-slate-600 font-bold uppercase">
                    {/* <i className="fas fa-map-marker-alt mr-2 text-lg text-slate-400 dark:text-slate-600" /> */}
                    <FaMapMarkerAlt className="inline-block mr-2 text-lg text-slate-400 dark:text-slate-600" />
                    Los Angeles, California
                  </div>
                  <div className="mb-2 text-slate-600 dark:text-slate-400 mt-10">
                    {/* <i className="fas fa-briefcase mr-2 text-lg text-slate-400 dark:text-slate-600" /> */}
                    <FaBriefcase className="inline-block mr-2 text-lg text-slate-400 dark:text-slate-600" />
                    Solution Manager - Creative Tim Officer
                  </div>
                  <div className="mb-2 text-slate-600 dark:text-slate-400">
                    {/* <i className="fas fa-university mr-2 text-lg text-slate-400 dark:text-slate-600" /> */}
                    <FaUniversity className="inline-block mr-2 text-lg text-slate-400 dark:text-slate-600" />
                    University of Computer Science
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-slate-200 dark:border-slate-800 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                        An artist of considerable range, Jenna the name taken by Melbourne-raised,
                        Brooklyn-based Nick Murphy writes, performs and records all of his own
                        music, giving it a warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                      </p>
                      <Link
                        href="#"
                        className="font-normal text-sky-500"
                        onClick={(e) => e.preventDefault()}
                      >
                        Show more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
