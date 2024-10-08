'use client';

import { useTheme } from 'next-themes';
import React from 'react';
import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      duration={5000}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:shadow-lg ' +
            // light
            'group-[.toaster]:bg-white group-[.toaster]:text-slate-950 group-[.toaster]:border-slate-200 ' +
            // dark
            'dark:group-[.toaster]:bg-slate-950 dark:group-[.toaster]:text-slate-50 dark:group-[.toaster]:border-slate-800',
          description:
            // light
            'group-[.toast]:text-slate-500 ' +
            // dark
            'dark:group-[.toast]:text-slate-400',
          actionButton:
            // light
            'group-[.toast]:bg-slate-900 group-[.toast]:text-slate-50 ' +
            // dark
            'dark:group-[.toast]:bg-slate-50 dark:group-[.toast]:text-slate-900',
          cancelButton:
            // light
            'group-[.toast]:bg-slate-100 group-[.toast]:text-slate-500 ' +
            // dark
            'dark:group-[.toast]:bg-slate-800 dark:group-[.toast]:text-slate-400',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
