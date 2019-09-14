import React, { Component, useEffect, useState } from 'react'
import { View, Dimensions, ScrollView, StyleSheet } from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'
import MapView, { Marker } from 'react-native-maps'
import client from '../client'
import DeviceInfo from 'react-native-device-info'

const { width, height } = Dimensions.get('window')
const SCREEN_WIDTH = width
const SCREEN_HEIGHT = height

const LaunchScreen = (props) => {
  const [meState, setState] = useState({})

  useEffect(() => {
    const getUser = async () => {
      try {
        let me = null
        const uniqueId = DeviceInfo.getUniqueID()

        const users = await client.service('users').find({
          query: {
            uniqueId
          }
        })
        if (!users.total) {
          me = await client.service('users').create({
            uniqueId,
            password: uniqueId,
            email: 'tmp@tmp.com'
          })
        } else {
          me = users.data[0]
        }

        setState(me)
      } catch (e) {
        console.log('e', e)
      }
    }

    getUser()
  }, [])

  console.log('meState', meState)
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <MapView
          style={styles.map}
          mapType={'standard'}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          >
          <Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324
            }}
            />
        </MapView>
      </Content>
      <Footer>
        <FooterTab>
          <Button full>
            <Text>Footer</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  scrollview: {
    alignItems: 'center'
  },
  map: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT
  }
})

export default LaunchScreen
