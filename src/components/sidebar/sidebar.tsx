import { Cross } from '@filament-icons/react/cross';
import { Button, Sidebar as SidebarComponent } from '@filament/react';
import { atomicBackgroundPrimary as backgroundPrimary } from '@filament/react/styles';
import { useContext } from 'react';
import { SidebarContent } from '~/components/sidebar-content';
import * as globalStyles from '~/global-styles.css';
import { SidebarContextProps, SidebarProvider } from '~/providers';
import * as styles from './styles.css';

export const Sidebar = () => {
  const sidebarContext = useContext(SidebarProvider) as SidebarContextProps;
  const { isMenuOpen, setIsMenuOpen } = sidebarContext;

  return (
    <>
      <SidebarComponent
        className={[styles.sidebar, globalStyles.showOnDesktop]}
      >
        <SidebarContent />
      </SidebarComponent>
      <SidebarComponent
        className={[
          styles.sidebar,
          styles.sidebarModal,
          globalStyles.hideOnDesktop,
          backgroundPrimary,
        ]}
        mode="modal"
        isOpen={isMenuOpen}
        setOpen={setIsMenuOpen}
      >
        <Button
          onPress={() => setIsMenuOpen?.(false)}
          variant="quiet"
          shape="square"
          isIconOnly
          aria-label="close"
          marginStart={8}
          marginEnd="auto"
          marginTop={8}
          marginBottom={8}
        >
          <Cross />
        </Button>
        <SidebarContent />
      </SidebarComponent>
    </>
  );
};
