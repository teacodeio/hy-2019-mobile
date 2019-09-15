import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import {
  Badge,
  Container,
  Content,
  Button,
  Icon,
  Text,
  List,
  ListItem,
  Left, Body, Title, Right, Header
} from 'native-base'
import colors from '../Config/colors'

const levels = ['Novice', 'Intermediate', 'Pro', 'Expert', 'Master', 'GrandMaster', 'Perfect']

const LevelsScreen = (props) => {
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
              style={{color: '#ff9800'}}
            />
          </Button>
        </Left>
        <Body>
          <Title>Levels</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <List>
          {levels.map((level, index) =>
            <ListItem>
              <Left>
                <Badge style={{backgroundColor: colors.levels[level]}}>
                  <Text>
                    {level}
                  </Text>
                </Badge>
              </Left>
              <Right>
                <Text style={{ fontStyle: 'italic' }}>{100 - (index + 1) * 10} points</Text>
              </Right>
            </ListItem>
          )}
          <ListItem itemDivider style={{ textAlign: 'center' }}>
            <Text style={{ alignSelf: 'center', justifySelf: 'center' }}>Your level</Text>
          </ListItem>
          <ListItem>
            <Left>
              <Badge style={{ backgroundColor: colors.levels.Intermediate }}>
                <Text>
                  Intermediate
                </Text>
              </Badge>
            </Left>
            <Right>
              <Text style={{ fontStyle: 'italic' }}>29 points</Text>
            </Right>
          </ListItem>
        </List>
      </Content>
    </Container>
  )
}

export default LevelsScreen
