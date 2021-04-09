import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions, StyleSheet, ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import styled from 'styled-components/native';
import {banner_images} from '../constants/images';
const {width} = Dimensions.get('window');

const Banner = () => {
    const [bannerData, setBannerData] = useState([]);

    useEffect(() => {
        setBannerData(banner_images);

        return () => {
            setBannerData([]);
        };
    }, []);

    return (
        <ScrollView>
            <Container>
                <View style={styles.swiper}>
                    <Swiper
                        style={{height: width / 2}}
                        showsButtons={false}
                        // autoplay={true}
                        // autoplayTimeout={2}
                    >
                        {bannerData.map((banner, i) => {
                            return (
                                <Image
                                    key={i}
                                    source={{uri: banner}}
                                    resizeMode="contain"
                                />
                            );
                        })}
                    </Swiper>
                    <View style={{height: 20}}></View>
                </View>
            </Container>
        </ScrollView>
    );
};

export default Banner;

const styles = StyleSheet.create({
    swiper: {
        width: width,
        alignItems: 'center',
        marginTop: 10,
    },
});

const Container = styled.View`
    flex: 1;
    background-color: gainsboro;
`;

const Image = styled.Image`
    height: ${width / 2}px;
    width: ${width - 40}px;
    border-radius: 10px;
    margin: 0px 20px 0px 20px;
`;
