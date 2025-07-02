import { Alarm } from '@filament-icons/react/alarm';
import { ChevronDown } from '@filament-icons/react/chevron-down';
import { HamburgerMenu } from '@filament-icons/react/hamburger-menu';
import { Lock } from '@filament-icons/react/lock';
import { PersonPortraitCircle } from '@filament-icons/react/person-portrait-circle';
import { PhilipsLogo } from '@filament-icons/react/philips-logo';
import { QuestionMarkCircle } from '@filament-icons/react/question-mark-circle';
import { Settings } from '@filament-icons/react/settings';
import {
  Avatar,
  Badge,
  Button,
  DotSeparator,
  FlexBox,
  H1,
  Item,
  Label,
  MenuButton,
  PatientInfo,
  PatientInfoGroup,
  PatientInfoHeader,
  PatientInfoItem,
  TopBar,
  TopBarTitle,
  TopBarUserInfo,
} from '@filament/react';
import { useContext } from 'react';
import * as globalStyles from '~/global-styles.css';
import { SidebarContextProps, SidebarProvider } from '~/providers';
import * as styles from './styles.css';

export const Navigation = () => {
  const sidebarContext = useContext(SidebarProvider) as SidebarContextProps;
  const { isMenuOpen, setIsMenuOpen } = sidebarContext;

  return (
    <TopBar className={styles.headerStyle}>
      <FlexBox className={styles.container}>
        <Button
          onPress={() => setIsMenuOpen?.(!isMenuOpen)}
          className={globalStyles.hideOnDesktop}
          variant="quiet"
          shape="square"
          isIconOnly
          aria-label="close"
        >
          <HamburgerMenu />
        </Button>

        <TopBarTitle className={globalStyles.showOnDesktop}>
          <PhilipsLogo className={styles.logo} />
          <H1>Application Name</H1>
        </TopBarTitle>

        <PatientInfo>
          <PersonPortraitCircle />
          <PatientInfoHeader title="Doe, John"></PatientInfoHeader>
          <PatientInfoGroup variant="single-line">
            <PatientInfoItem>
              <Label>ID</Label>
              <Label>12345678</Label>
            </PatientInfoItem>
            <DotSeparator className={globalStyles.showOnDesktop} />
            <PatientInfoItem className={globalStyles.showOnDesktop}>
              <Label>DOB</Label>
              <Label>05 Jun 2022</Label>
            </PatientInfoItem>
            <DotSeparator />
            <PatientInfoItem>
              <Label>Gender</Label>
              <Label>Male</Label>
            </PatientInfoItem>
          </PatientInfoGroup>
        </PatientInfo>

        <TopBarUserInfo>
          <Badge value="1">
            <Button
              aria-label="notification"
              variant="quiet"
              shape="square"
              isIconOnly
            >
              <Alarm />
            </Button>
          </Badge>
          <Button
            aria-label="question"
            variant="quiet"
            shape="square"
            isIconOnly
            className={globalStyles.showOnDesktop}
          >
            <QuestionMarkCircle />
          </Button>
          <MenuButton
            hideArrow
            variant="quiet"
            shape="square"
            buttonContent={
              <>
                <Avatar className={globalStyles.hideOnDesktop}>JD</Avatar>
                <span className={globalStyles.showOnDesktop}>John Doe</span>
                <ChevronDown
                  size="small"
                  className={globalStyles.showOnDesktop}
                />
              </>
            }
          >
            <Item key="settings">
              <Settings />
              Settings
            </Item>
            <Item key="logOut">
              <Lock />
              Log Out
            </Item>
          </MenuButton>
        </TopBarUserInfo>
      </FlexBox>
    </TopBar>
  );
};
