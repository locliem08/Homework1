/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    StyleSheet, Text,
    View, Image, FlatList, TouchableOpacity
} from 'react-native';
import { images, imgTest } from '../asset';
import { Width } from '../styles/sizes';
import Utils from '../app/Utils';


const stListStatus = StyleSheet.create({
    iconItem: { width: 25, height: 25, marginRight: 10 },
    line: { height: 1, backgroundColor: 'black', opacity: 0.1, marginVertical: 10 },
    textItem: {}
});


const dataTemp = [
    { idItem: 1, img: imgTest.img1, avata: imgTest.imgAvatar, name: 'Tien Nhat', likeCount: 120, job: 'Deverloper' },
    { idItem: 2, img: imgTest.img3, avata: imgTest.imgAvatar, name: 'A Bin', likeCount: 223, job: 'Photographer' },
    { idItem: 3, img: imgTest.img2, avata: imgTest.imgAvatar, name: 'Huynh Nhu', likeCount: 10, job: 'Teacher' },
    { idItem: 4, img: imgTest.img1, avata: imgTest.imgAvatar, name: 'aBin', likeCount: 187, job: 'Student' },
    { idItem: 5, img: imgTest.img2, avata: imgTest.imgAvatar, name: 'Van Teo', likeCount: 8320, job: 'Deverloper' },
    { idItem: 6, img: imgTest.img3, avata: imgTest.imgAvatar, name: 'Van Teo', likeCount: 322, job: 'Student' }

];
export default class ListStatus extends React.Component {
    constructor(props) {
        super(props);
      
    }

    onItemClick = (item) => () => {
        Utils.goscreen(this, 'sc_Profiles', { valItem: item })
    }

    renderItemList = ({ item, index }) => {
        const imgWidth = Width;
        const imgHeight = imgWidth * 0.8;
        return (
            <View>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}
                    onPress={this.onItemClick(item)}>
                    <Image source={item.avata} style={{ width: 60, height: 60, borderRadius: 35, marginRight: 10 }} />
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{item.name}</Text>
                </TouchableOpacity>
                <Image source={item.img} style={{ width: imgWidth, height: imgHeight, marginBottom: 10 }} />
                <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
                    <TouchableOpacity onPress={() => alert('Like')}>
                        <Image source={images.icLike} style={stListStatus.iconItem} />
                    </TouchableOpacity >
                    <TouchableOpacity onPress={() => alert('Comment')}>
                        <Image source={images.icComment} style={stListStatus.iconItem} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert('Share')}>
                        <Image source={images.icShare} style={stListStatus.iconItem} />
                    </TouchableOpacity>
                </View>
                <View style={stListStatus.line} />
                <View style={{ flexDirection: 'row', marginHorizontal: 10, alignItems: 'center' }}>
                    <Image source={images.icLikeFull} style={stListStatus.iconItem} />
                    <Text style={{ fontWeight: 'bold', fontSize: 13 }}>{item.likeCount} likes</Text>
                </View>
                <View style={stListStatus.line} />
            </View>
        )
    }

    render() {
        return (
                <View style={{ flex: 1 }}>
                    {/* header */}
                    <View style={{ backgroundColor: '#F3F6FA', height: 80, justifyContent: 'flex-end' }}>
                        <View style={{ height: 50, flexDirection: 'row' }}>
                            {/* left */}
                            <View style={{ flex: 0.15, justifyContent: 'center', alignItems: 'center' }}>

                            </View>
                            {/* mid */}
                            <View style={{ flex: 0.7, justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png' }}
                                    style={{ height: 40, width: 120 }}
                                />
                            </View>
                            {/* right */}
                            <View style={{ flex: 0.15, justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={images.inbox2}
                                    style={{ height: 25, width: 25 }}
                                    resizeMode='contain'
                                />
                            </View>
                        </View>
                    </View>
                    {/* body */}
                    <View style={{ flex: 1 }}>
                        <FlatList
                            data={dataTemp}
                            renderItem={this.renderItemList}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </View>
        )
    }
}

