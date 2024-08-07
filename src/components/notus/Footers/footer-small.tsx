import Link from 'next/link';
import React from 'react';

export type FooterSmallProps = {
  absolute: boolean;
};

export function FooterSmall(props: FooterSmallProps) {
  return (
    <>
      <footer
        className={
          (props.absolute
            ? 'absolute w-full bottom-0 bg-slate-800 dark:bg-slate-200'
            : 'relative') + ' pb-6'
        }
      >
        <div className="container mx-auto px-4">
          <hr className="mb-6 border-b-1 border-slate-600 dark:border-slate-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-slate-500 font-semibold py-1 text-center md:text-left">
                Copyright © {new Date().getFullYear()}{' '}
                <Link
                  href="https://www.creative-tim.com?ref=nnjs-footer-small"
                  className="text-white dark:text-black hover:text-slate-300 dark:hover:text-slate-700 text-sm font-semibold py-1"
                >
                  Creative Tim
                </Link>
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li>
                  <Link
                    href="https://www.creative-tim.com?ref=nnjs-footer-small"
                    className="text-white dark:text-black hover:text-slate-300 dark:hover:text-slate-700 text-sm font-semibold block py-1 px-3"
                  >
                    Creative Tim
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.creative-tim.com/presentation?ref=nnjs-footer-small"
                    className="text-white dark:text-black hover:text-slate-300 dark:hover:text-slate-700 text-sm font-semibold block py-1 px-3"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://blog.creative-tim.com?ref=nnjs-footer-small"
                    className="text-white dark:text-black hover:text-slate-300 dark:hover:text-slate-700 text-sm font-semibold block py-1 px-3"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/creativetimofficial/notus-nextjs/blob/main/LICENSE.md?ref=nnjs-footer-small"
                    className="text-white dark:text-black hover:text-slate-300 dark:hover:text-slate-700 text-sm font-semibold block py-1 px-3"
                  >
                    MIT License
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
