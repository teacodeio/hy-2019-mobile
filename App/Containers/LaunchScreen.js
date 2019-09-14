import React, { Component, useEffect, useState } from 'react'
import { View, Dimensions, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, ActionSheet, Drawer } from 'native-base'
import MapView, { Marker } from 'react-native-maps'

import client from '../client'
import DeviceInfo from 'react-native-device-info'
import Sidebar from './Sidebar'

const headerHeight = 60

const { width, height } = Dimensions.get('window')
const SCREEN_WIDTH = width
const SCREEN_HEIGHT = height

const actionButtons = [
  {
    weight: 3,
    icon: 'sentiment-very-dissatisfied'
  },
  {
    weight: 2,
    icon: 'mood-bad'
  },
  {
    weight: 1,
    icon: 'sentiment-dissatisfied'
  }
]

const LaunchScreen = (props) => {
  const [meState, setState] = useState({})
  const [position, setPosition] = useState()
  const [ageConfirmad, setAgeConfirmed] = useState(false)
  // props.navigation.navigate('ImageRating')
  useEffect(() => {
    if (ageConfirmad) return

    // props.navigation.navigate('AgeConfirmationScreen')
  }, [ageConfirmad])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(
          `Got location: ${position.coords.latitude}, ${position.coords.longitude}`)

      setPosition(position.coords)
    },
      e => console.log('e', e)
    )
  }, [])

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

  const closeDrawer = () => {
    this.drawer._root.close()
  }

  const openDrawer = () => { this.drawer._root.open() }

  return (
    <Drawer
      ref={(ref) => { this.drawer = ref }}
      content={<Sidebar navigation={props.navigation} navigator={this.navigator} />}
      onClose={() => closeDrawer()}>
      <Container>
        <Header
          style={{
            height: headerHeight
          }}
      >
          <Left>
            <Button
              onPress={openDrawer}
              transparent>
              <Icon style={{color: '#ff9800'}} name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Butt Buster</Title>
          </Body>
          <Right />
        </Header>
        <Content
          style={{
            position: 'relative'
          }}
      >
          <View
            style={{
              position: 'absolute',
              zIndex: 10,
              bottom: 100,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              width: width
            }}
        >
            {actionButtons.map(button => (
              <TouchableOpacity
                key={button.icon}
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 10,
                  backgroundColor: 'white',
                  alignItems: 'center',
                  justifyContent: 'center',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5
                }}
                onPress={() => {
                  props.navigation.navigate('PlaceSelection', {
                    myId: meState._id,
                    weight: button.weight,
                    position: position
                  })
                }}
            >
                <Icon
                  style={{fontSize: 60, color: 'red'}}
                  type='MaterialIcons'
                  name={button.icon}
              />
              </TouchableOpacity>
          ))}
          </View>
          {position && <MapView
            style={styles.map}
            mapType={'standard'}
            initialRegion={{
              latitude: position.latitude,
              longitude: position.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
            region={{
              latitude: position.latitude,
              longitude: position.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          >
            <Marker
              coordinate={{
                latitude: position.latitude,
                longitude: position.longitude
              }}
          />
          </MapView>}
        </Content>
      </Container>
    </Drawer>
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
    height: SCREEN_HEIGHT - headerHeight
  }
})

export default LaunchScreen
