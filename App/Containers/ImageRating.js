import React, { useEffect, useState } from 'react'
import { Dimensions, Image, View } from 'react-native'
import {
  H1,
  Container,
  Content,
  Button,
  Icon,
  Text,
  DeckSwiper,
  Card,
  Left, Body, Title, Right, Header,
  Subtitle,
  CardItem
} from 'native-base'
import client from '../client'

const { width, height } = Dimensions.get('window')

const ImageRating = (props) => {
  const [images, setImages] = useState([])
  const [answer, setAnswer] = useState(null)

  useEffect(() => {
    if (answer) {
      setTimeout(() => {
        setAnswer(null)
      }, 1000)
    }
  }, [answer])

  useEffect(() => {
    const getImages = async () => {
      try {
        const res = await client.service('images').find()

        setImages(res.data)
      } catch (e) {
        console.log('e', e)
      }
    }

    getImages()
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
          <Title>Spot the butt</Title>
          <Subtitle>No - left, Yes - right</Subtitle>
        </Body>
        <Right />
      </Header>
      <Content>
        {images.length ? <View
          // style={{
          //   marginTop: 20,
          //   marginLeft: 20,
          //   marginRight: 20
          // }}
        >
          <DeckSwiper
            // looping={false}
            dataSource={images}
          //   renderEmpty={() => (
          //     <View
          //       style={{
          //         width: width,
          //         height: 200,
          //         alignItems: 'center',
          //         justifyContent: 'center'
          //       }}
          //   >
          //       <Text>You are done</Text>
          //     </View>
          // )}
            onSwipeRight={() => setAnswer('YES')}
            onSwipeLeft={() => setAnswer('NO')}
            renderItem={item =>
              <Card
                style={{ elevation: 3 }}
            >
                <CardItem cardBody>
                  <Image
                    style={{ height: 300, flex: 1 }}
                    source={{ uri: item.cloudinary }} />
                </CardItem>
              </Card>
          }
        />
        </View> : null}
        {answer ? <View
          style={{
            flexDirection: 'row',
            flex: 1,
            fontSize: 50,
            justifyContent: 'center',
            alignItems: 'center',
            height: 300
          }}
        >
          <Text
            style={{
              fontSize: 60,
              color: answer === 'YES' ? 'green' : 'red',
              backgroundColor: 'rgba(255,255,255,0.4)'
            }}
          >
            {answer}
          </Text>
        </View> : null}
      </Content>
    </Container>
  )
}

export default ImageRating
