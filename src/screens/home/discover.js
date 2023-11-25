import React, { useContext } from "react";
import {
  Text,
  SafeAreaView,
  FlatList,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { COLORS, IMGS } from "../../constants";
import { ScrollView } from "react-native";
import { ContextApp } from "../../context/contextApp";

const discover = () => {
  const { theme } = useContext(ContextApp);
  return (
    <ScrollView style={{backgroundColor: theme.backgroundColor[0] , flex: 1}} >
      <View style={{ backgroundColor: theme.backgroundColor[0] }}>
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: theme.backgroundColor[1],
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", paddingLeft: 10 }}>
            <Image source={IMGS.shutter} style={{ width: 24, height: 24 }} />
            <Text style={{ fontSize: 18, marginLeft: 10, color: theme.color }}>Moment</Text>
          </View>

          <Image
            source={IMGS.nextpage}
            style={{
              width: 18,
              height: 18,
              borderRadius: 15,
              marginRight: 15,
            }}
          />
        </TouchableOpacity>
        <View style={{ backgroundColor: theme.backgroundColor[1], marginTop: 6 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={IMGS.scan}
              style={{ width: 24, height: 24, marginLeft: 10 }}
            />
            <TouchableOpacity style={styles.TextSection}>
              <Text style={{ fontSize: 18,  color: theme.color }}>Scan QR Code</Text>
              <Image
                source={IMGS.nextpage}
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: 15,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingRight: 15,
              backgroundColor: theme.backgroundColor[1]
            }}
          >
            <TouchableOpacity
              style={{ padding: 15, paddingLeft: 0, marginLeft: 10 }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image source={IMGS.shake} style={{ width: 24, height: 24 }} />
                <Text style={{ fontSize: 18, marginLeft: 10,  color: theme.color}}>Shake</Text>
              </View>
            </TouchableOpacity>
            <Image
              source={IMGS.nextpage}
              style={{
                width: 18,
                height: 18,
                borderRadius: 15,
              }}
            />
          </View>
        </View>
        <View style={{  backgroundColor: theme.backgroundColor[1], marginTop: 6 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={IMGS.scan}
              style={{ width: 24, height: 24, marginLeft: 10 }}
            />
            <TouchableOpacity style={styles.TextSection}>
              <Text style={{ fontSize: 18,  color: theme.color }}>Top Stories</Text>
              <Image
                source={IMGS.nextpage}
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: 15,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingRight: 15,
              backgroundColor: theme.backgroundColor[1],
            }}
          >
            <TouchableOpacity
              style={{ padding: 15, paddingLeft: 0, marginLeft: 10 }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={IMGS.searchIcon}
                  style={{ width: 24, height: 24 }}
                />
                <Text style={{ fontSize: 18, marginLeft: 10,  color: theme.color }}>search</Text>
              </View>
            </TouchableOpacity>
            <Image
              source={IMGS.nextpage}
              style={{
                width: 18,
                height: 18,
                borderRadius: 15,
              }}
            />
          </View>
        </View>
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: theme.backgroundColor[1],
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 6,
          }}
        >
          <View style={{ flexDirection: "row", paddingLeft: 10 }}>
            <Image source={IMGS.team} style={{ width: 24, height: 24 }} />
            <Text style={{ fontSize: 18, marginLeft: 10,  color: theme.color }}>People Nearby</Text>
          </View>

          <Image
            source={IMGS.nextpage}
            style={{
              width: 18,
              height: 18,
              borderRadius: 15,
              marginRight: 15,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: theme.backgroundColor[1],
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 6,
          }}
        >
          <View style={{ flexDirection: "row", paddingLeft: 10 }}>
            <Image source={IMGS.games} style={{ width: 24, height: 24 }} />
            <Text style={{ fontSize: 18, marginLeft: 10,  color: theme.color}}>Games</Text>
          </View>

          <Image
            source={IMGS.nextpage}
            style={{
              width: 18,
              height: 18,
              borderRadius: 15,
              marginRight: 15,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: theme.backgroundColor[1],
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 6,
          }}
        >
          <View style={{ flexDirection: "row", paddingLeft: 10 }}>
            <Image source={IMGS.program} style={{ width: 24, height: 24 }} />
            <Text style={{ fontSize: 18, marginLeft: 10,  color: theme.color }}>Mini Programs</Text>
          </View>

          <Image
            source={IMGS.nextpage}
            style={{
              width: 18,
              height: 18,
              borderRadius: 15,
              marginRight: 15,
            }}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default discover;
const styles = StyleSheet.create({
  TextSection: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    paddingLeft: 0,
    marginLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
});
