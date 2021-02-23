import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Danny Berger | Dev</title>
        <html lang={lang} />
        <meta name="description" content="Full Stack Software Mobile and Web Developer" />
        <meta name="keywords" content="Full, Stack, Fullstack, Web, Software, Developer, Engineer, Programmer, React, Javascript, Node, Portfolio" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta property="og:title" content="Danny Berger | Dev" />
        <meta property="og:description" content="Full Stack Software Mobile and Web Developer" />
        <meta property="og:image" content="https://www.danny-berger.dev/screen_shot.png" />
        <meta property="og:url" content="https://www.danny-berger.dev/" />
      </Helmet>
      <App />
    </>
  );
};
