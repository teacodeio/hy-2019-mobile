import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import {
  Container,
  Content,
  Button,
  Icon,
  Text,
  List,
  ListItem,
  Left, Body, Title, Right, Header
} from 'native-base'

const users = [
  'User14rvxs563',
  'User14c5d63',
  'User1xc45xvc63',
  'User14cvc5xcv63',
  'User14xxv563',
  'User14xcv63',
  'User3xcv4xc3',
  'Userxcv5vb63',
  'Userc145cvbc63',
  'User1tg4cvccv563',
  'User1u4vcc563',
  'User1b4sdfg563',
  'User1cv4sc563',
  'User1cv4563',
  'User84vx5b63c',
  'User94563',
  'User34563',
  'User24563',
  'User54dfu5i6o3'
]

const LeaderBoard = (props) => {
  return (
    <Container>
      <Header>
        <Left>
          <Button
            transparent
            onPress={() => {
              props.navigation.goBack()
            }}
          >
            <Icon
              type='MaterialIcons'
              name='keyboard-arrow-left'
            />
          </Button>
        </Left>
        <Body>
          <Title>Leaderboard</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <List>
          {users.map(user =>
            <ListItem>
              <Body>
                <Text>{user}</Text>
              </Body>
            </ListItem>
          )}
        </List>
      </Content>
    </Container>
  )
}

export default LeaderBoard
