/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    StyleSheet, Text, ScrollView,
    View, Image, FlatList, TouchableOpacity
} from 'react-native';
import { images, iimgTest, imgTest } from '../asset';
import { Width } from '../styles/sizes';
import Utils from '../app/Utils';


const stListStatus = StyleSheet.create({
    iconItem: { width: 25, height: 25, marginRight: 10 },
    line: { height: 1, backgroundColor: 'black', opacity: 0.1, marginVertical: 10 },
    textItem: {}
});


const dataTemp = [
    imgTest.img1, imgTest.img2,
    imgTest.img3, imgTest.img1,
    imgTest.img2, imgTest.img3,
    imgTest.img1, imgTest.img2
];
export default class Profiles extends React.Component {
    constructor(props) {
        super(props);
        this.valItem = Utils.getParam(this, 'valItem', {});
    }

    onItemClick = (item) => () => {

    }

    renderItemList = ({ item, index }) => {
        return (
            <TouchableOpacity activeOpacity={0.8} style={{ flex: 1, height: 140, borderRadius: 10, margin: 5 }}>
                <Image source={item} style={{ width: '100%', height: '100%', borderRadius: 10 }} />
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {/* header */}
                <View style={{ height: 80, justifyContent: 'flex-end' }}>
                    <View style={{ height: 50, flexDirection: 'row' }}>
                        {/* left */}
                        <View style={{ flex: 0.15, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity style={{ padding: 5 }} onPress={() => Utils.goback(this)}>
                                <Image
                                    source={images.icBack}
                                    style={{ height: 25, width: 25 }}
                                    resizeMode='contain'
                                />
                            </TouchableOpacity>

                        </View>
                        {/* mid */}
                        <View style={{ flex: 0.7, justifyContent: 'center', alignItems: 'center' }}>

                        </View>
                        {/* right */}
                        <View style={{ flex: 0.15, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity style={{ padding: 5 }}>
                                <Image
                                    source={images.icFull}
                                    style={{ height: 25, width: 25 }}
                                    resizeMode='contain'
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {/* body */}
                <ScrollView>
                    <View style={{ flex: 1, paddingHorizontal: 20, marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <Image source={this.valItem.avata} style={{ width: 100, height: 100, borderRadius: 50, marginRight: 10 }} />
                            <View>
                                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{this.valItem.name}</Text>
                                <Text style={{ fontWeight: '500', fontSize: 13, color: '#B2B3BD' }}>{this.valItem.job}</Text>
                                <View style={{ flexDirection: 'row', marginVertical: 15 }}>
                                    <TouchableOpacity style={{ paddingHorizontal: 20, paddingVertical: 4, borderRadius: 20, backgroundColor: '#4076FA' }}>
                                        <Text style={{ color: 'white' }}>Follow</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{
                                        paddingHorizontal: 15, paddingRight: 12, paddingVertical: 4,
                                        borderRadius: 20, backgroundColor: '#5DD8FB', marginLeft: 8
                                    }}>
                                        <Image source={images.icSend} style={{ width: 15, height: 15, tintColor: 'white' }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 28 }}>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontWeight: '600', fontSize: 18, marginBottom: 5 }}>210</Text>
                                <Text style={{ fontWeight: '500', fontSize: 12, color: '#B2B3BD' }}>Photos</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontWeight: '600', fontSize: 18, marginBottom: 5 }}>18K</Text>
                                <Text style={{ fontWeight: '500', fontSize: 11, color: '#B2B3BD' }}>Photos</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontWeight: '600', fontSize: 18, marginBottom: 5 }}>1082</Text>
                                <Text style={{ fontWeight: '500', fontSize: 11, color: '#B2B3BD' }}>Photos</Text>
                            </View>
                        </View>
                        <FlatList
                            data={dataTemp}
                            numColumns={2}
                            style={{ marginHorizontal: -5 }}
                            renderItem={this.renderItemList}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </ScrollView>
                {/* bottom */}
                <View style={{ flexDirection: 'row', height: 60, justifyContent: 'center', paddingBottom: 20 }}>
                    <TouchableOpacity style={{ padding: 5 }}>
                        <Image
                            source={images.icTab1}
                            style={{ height: 50, width: 50 }}
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 5, marginHorizontal: 35 }}>
                        <Image
                            source={images.icTab2}
                            style={{ height: 50, width: 50 }}
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 5 }}>
                        <Image
                            source={images.icTab3}
                            style={{ height: 50, width: 50 }}
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

