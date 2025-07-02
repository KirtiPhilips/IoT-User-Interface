import type { Dispatch, SetStateAction } from 'react';
import { createContext } from 'react';

export type SidebarContextProps = {
  isMenuOpen?: boolean;
  setIsMenuOpen?: Dispatch<SetStateAction<boolean>>;
};

export const SidebarProvider = createContext<SidebarContextProps | null>(null);
