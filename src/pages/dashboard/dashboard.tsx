import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardSubtitle,
  CardTitle,
  FlexBox,
} from '@filament/react';

import * as styles from './styles.css';

const CardTemplate = () => (
  <Card className={styles.card}>
    <CardHeader>
      <CardTitle>Card title</CardTitle>
      <CardSubtitle>Card Subtitle</CardSubtitle>
    </CardHeader>
    <CardBody height={160}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </CardBody>
    <CardFooter alignment="end">
      <Button variant="quiet">Action One</Button>
      <Button variant="quiet">Action Two</Button>
    </CardFooter>
  </Card>
);

export const Dashboard = () => {
  return (
    <FlexBox className={styles.content}>
      {Array.from({ length: 8 }, (_, i) => (
        <CardTemplate key={i} />
      ))}
    </FlexBox>
  );
};
