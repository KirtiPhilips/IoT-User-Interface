import { Portal } from '@filament/react';
import { atomicBackgroundPrimary, base } from '@filament/react/styles';
import { blue, light, medium } from '@filament/react/themes';
import { clsx } from 'clsx';
import { useState } from 'react';
import { Outlet } from 'react-router';

import { Navigation } from '~/components/navigation';
import { Sidebar } from '~/components/sidebar';
import { SidebarProvider } from '~/providers';

import * as styles from './styles.css';

export const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <SidebarProvider.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
      }}
    >
      <div
        className={clsx(
          blue,
          light,
          medium,
          base,
          atomicBackgroundPrimary,
          styles.page
        )}
      >
        <Portal>
          <Navigation />
          <Sidebar />
          <main className={styles.content}>
            <Outlet />
          </main>
        </Portal>
      </div>
    </SidebarProvider.Provider>
  );
};
