import React from 'react';
import Button from '@mui/material/Button';

import styles from './Header.module.sass';
import Container from '@mui/material/Container';

export const Header = () => {
  const isAuth = false;

  const onClickLogout = () => {};

  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <a className={styles.logo} href="/">
            <div>HOME</div>
          </a>
          <div className={styles.buttons}>
            {isAuth ? (
              <>
                <a href="/add">
                  <Button variant="contained">Write</Button>
                </a>
                <Button onClick={onClickLogout} variant="contained" color="error">
                  Log off
                </Button>
              </>
            ) : (
              <>
                <a href="/login">
                  <Button variant="outlined">Log in</Button>
                </a>
                <a href="/reg">
                  <Button variant="contained">Set up</Button>
                </a>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
