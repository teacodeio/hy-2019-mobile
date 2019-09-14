import React, { Component, useEffect, useState } from 'react'
import { ListItem, Container, Header, Content, Button, Left, Right, Body, Icon, Text } from 'native-base'
import { View, Image } from 'react-native'

const Sidebar = (props) => {
  return (
    <Container>
      <Header style={{
        display: 'flex',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
      }}
      >
        <Image
          style={{
            alignSelf: 'center',
            justifySelf: 'center',
            width: 100,
            height: 60
          }}
          source={require('../Images/philipMorrisLogotype.png')}
          />
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
        <ListItem
          icon
          onPress={() => props.navigation.navigate('Leaderboard')}
        >
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
        <ListItem
          icon
          onPress={() => {
            props.navigation.navigate('ImageRating')
          }}
        >
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
