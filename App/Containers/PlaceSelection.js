import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import {
  H1,
  Container,
  Content,
  Button,
  Icon,
  Text,
  List,
  ListItem,
  Left, Body, Title, Right, Header,
  Subtitle
} from 'native-base'
import client from '../client'
import ImagePicker from 'react-native-image-picker'

const pickerOptions = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
}

const PlaceSelection = (props) => {
  const [places, setPlaces] = useState([])
  useEffect(() => {
    const position = props.navigation.getParam('position')

    const getPlaces = async () => {
      try {
        const res = await client.service('places').find({
          query: {
            latitude: position.latitude,
            longitude: position.longitude
          }
        })
        console.log('res', res)

        setPlaces(res.results)
      } catch (e) {
        console.log('e', e)
      }
    }

    getPlaces()
  }, [])

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
          <Title>Select place</Title>
          <Subtitle>List of nearest places</Subtitle>
        </Body>
        <Right />
      </Header>
      <Content>
        <List>
          {places.map(place =>
            <ListItem
              key={place.id}
              onPress={() => {
                Alert.alert(
                  'Add review',
                  `Are you sure you want to add a review for ${place.name}?`,
                  [
                    {
                      text: 'No',
                      style: 'cancel'
                    },
                    {
                      text: 'Yes',
                      onPress: async () => {
                        ImagePicker.showImagePicker(pickerOptions, async response => {
                          console.log('response', response)
                          const position = props.navigation.getParam('position')

                          try {
                            await client.service('ratings').create({
                              user: props.navigation.getParam('myId'),
                              weight: props.navigation.getParam('weight'),
                              loc: {
                                type: 'Point',
                                coordinates: [position.latitude, position.longitude]
                              },
                              placeId: place.id
                            })
                            props.navigation.goBack()
                            Alert.alert('Thank you for adding a review.')
                          } catch (e) {
                            console.log(e)
                          }
                        })
                      }
                    }
                  ],
                  {
                    cancelable: true
                  }
                )
              }}
              // icon
            >
              {/*<Left>*/}
              {/*  <Icon*/}
              {/*    // type='MaterialIcons'*/}
              {/*    name='airplane'*/}
              {/*  />*/}
              {/*</Left>*/}
              <Body>
                <Text>{place.name}</Text>
              </Body>
              {/*<Right>*/}
              {/*  <Text>200m</Text>*/}
              {/*</Right>*/}
            </ListItem>
          )}
        </List>
      </Content>
    </Container>
  )
}

export default PlaceSelection
