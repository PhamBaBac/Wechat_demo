import React, { useContext } from 'react';
import { Text, SafeAreaView, FlatList, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, IMGS, ROUTES } from '../../constants';
import { useNavigation } from "@react-navigation/native";
import { ContextApp } from '../../context/contextApp';
import { dis } from '..';
import { ScrollView } from 'react-native-web';

const discover = () => {


    return (
        <ScrollView>
            <View style={{ backgroundColor: COLORS.grayLight }}>

                <TouchableOpacity style={{ backgroundColor: '#fff', paddingLeft: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 50, marginTop: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={IMGS.shutter} style={{ height: 24, width: 24 }} />
                        <Text style={{ fontSize: 20, paddingLeft: 10 }}>Moment</Text>
                    </View>
                    <Image source={IMGS.nextpage} style={{ height: 24, width: 24, marginRight: 10 }} />
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: '#fff', paddingLeft: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 50, marginTop: 30 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={IMGS.scan} style={{ height: 24, width: 24 }} />
                        <Text style={{ fontSize: 20, paddingLeft: 10 }}>Scan QR Code</Text>
                    </View>
                    <Image source={IMGS.nextpage} style={{ height: 24, width: 24, marginRight: 10 }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#fff', paddingLeft: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 50, marginTop: 1 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={IMGS.shake} style={{ height: 24, width: 24 }} />
                        <Text style={{ fontSize: 20, paddingLeft: 10 }}>Shake</Text>
                    </View>
                    <Image source={IMGS.nextpage} style={{ height: 24, width: 24, marginRight: 10 }} />
                </TouchableOpacity>


                <TouchableOpacity style={{ backgroundColor: '#fff', paddingLeft: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 50, marginTop: 30 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={IMGS.scan} style={{ height: 24, width: 24 }} />
                        <Text style={{ fontSize: 20, paddingLeft: 10 }}>Top Stories</Text>
                    </View>
                    <Image source={IMGS.nextpage} style={{ height: 24, width: 24, marginRight: 10 }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#fff', paddingLeft: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 50, marginTop: 1 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={IMGS.searchIcon} style={{ height: 24, width: 24 }} />
                        <Text style={{ fontSize: 20, paddingLeft: 10 }}>Search</Text>
                    </View>
                    <Image source={IMGS.nextpage} style={{ height: 24, width: 24, marginRight: 10 }} />
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: '#fff', paddingLeft: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 50, marginTop: 30 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={IMGS.team} style={{ height: 24, width: 24 }} />
                        <Text style={{ fontSize: 20, paddingLeft: 10 }}>People Nearby</Text>
                    </View>
                    <Image source={IMGS.nextpage} style={{ height: 24, width: 24, marginRight: 10 }} />
                </TouchableOpacity>


                <TouchableOpacity style={{ backgroundColor: '#fff', paddingLeft: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 50, marginTop: 30 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={IMGS.games} style={{ height: 24, width: 24 }} />
                        <Text style={{ fontSize: 20, paddingLeft: 10 }}>Games</Text>
                    </View>
                    <Image source={IMGS.nextpage} style={{ height: 24, width: 24, marginRight: 10 }} />
                </TouchableOpacity>



                <TouchableOpacity style={{ backgroundColor: '#fff', paddingLeft: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 50, marginTop: 30 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={IMGS.program} style={{ height: 24, width: 24 }} />
                        <Text style={{ fontSize: 20, paddingLeft: 10 }}>Mini Programs</Text>
                    </View>
                    <Image source={IMGS.nextpage} style={{ height: 24, width: 24, marginRight: 10 }} />
                </TouchableOpacity>

            </View>
        </ScrollView >
    );
};

export default discover;