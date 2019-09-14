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
        <ListItem
          icon
          onPress={() => props.navigation.navigate('Leaderboard')}
        >
          <Left>
            <Icon name='body' style={{color: '#ff9800'}} />
          </Left>
          <Body
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start'
            }}
          >
            <Text>You have 29 points</Text>
          </Body>
        </ListItem>
        <ListItem
          icon
          onPress={() => {
            props.onCleanScreen()
            props.navigation.navigate('CleanScreen')
          }}
        >
          <Left>
            <Icon
              type='MaterialIcons'
              name='delete'
              style={{color: '#ff9800'}}
            />
          </Left>
          <Body
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start'
            }}
          >
            <Text>Where to clean</Text>
          </Body>
        </ListItem>
        <ListItem
          icon
          onPress={() => {
            props.navigation.navigate('ImageRating')
          }}
        >
          <Left>
            <Icon name='images' style={{color: '#ff9800'}} />
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
