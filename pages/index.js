import React from 'react';
import Head from 'next/head';
import styled from '@emotion/primitives';
import Profile from '../data/Profile';

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1%;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.backgroundColor};
`;

const Description = styled.Text`
  font-size: 2em;
  font-weight: bold;
  color: ${props => props.theme.color};
`;

const Image = styled.Image`
  padding: 40px;
`;

class Index extends React.Component {
  render() {
    return (
      <Container>
        <Head>
          <title>TED Vortex Official</title>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(Profile, null, 4),
            }}
          />
        </Head>

        <Description>Under Construction</Description>
        <Image
          source={{
            uri: '/static/solid-state-heart.gif',
            width: 165,
            height: 250,
          }}
        />
      </Container>
    );
  }
}

export default Index;
