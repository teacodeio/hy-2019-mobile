import React, { Component, useEffect, useState } from 'react'
import { ListItem, Container, Header, Content, Button, Left, Right, Body, Icon, Text } from 'native-base'
import { View } from 'react-native'

const Sidebar = (props) => {
  return (
    <Container>
      <Header>
        <Text>Menu</Text>
      </Header>
      <Content>
        <ListItem icon>
          <Left>
            <Icon name='trending-up' />
          </Left>
          <Body
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start'
            }}
          >
            <Text>999 points</Text>
          </Body>
        </ListItem>
        <ListItem icon>
          <Left>
            <Icon name='body' />
          </Left>
          <Body
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start'
            }}
          >
            <Text>Leaderboard</Text>
          </Body>
        </ListItem>
        <ListItem icon>
          <Left>
            <Icon name='images' />
          </Left>
          <Body
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start'
            }}
          >
            <Text>Image rating</Text>
          </Body>
        </ListItem>
      </Content>
    </Container>
  )
}

export default Sidebar
