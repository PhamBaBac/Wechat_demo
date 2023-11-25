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
import { COLORS, IMGS, ROUTES } from "../../constants";
import { ScrollView } from "react-native";

const discover = () => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: COLORS.gray }}>
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: COLORS.white,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", paddingLeft: 10 }}>
            <Image source={IMGS.shutter} style={{ width: 24, height: 24 }} />
            <Text style={{ fontSize: 18, marginLeft: 10 }}>Moment</Text>
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
        <View style={{ backgroundColor: COLORS.white, marginTop: 6 }}>
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
              <Text style={{ fontSize: 18 }}>Scan QR Code</Text>
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
              backgroundColor: COLORS.white,
            }}
          >
            <TouchableOpacity
              style={{ padding: 15, paddingLeft: 0, marginLeft: 10 }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image source={IMGS.shake} style={{ width: 24, height: 24 }} />
                <Text style={{ fontSize: 18, marginLeft: 10 }}>Shake</Text>
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
        <View style={{ backgroundColor: COLORS.white, marginTop: 6 }}>
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
              <Text style={{ fontSize: 18 }}>Top Stories</Text>
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
              backgroundColor: COLORS.white,
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
                <Text style={{ fontSize: 18, marginLeft: 10 }}>search</Text>
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
            backgroundColor: COLORS.white,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 6,
          }}
        >
          <View style={{ flexDirection: "row", paddingLeft: 10 }}>
            <Image source={IMGS.team} style={{ width: 24, height: 24 }} />
            <Text style={{ fontSize: 18, marginLeft: 10 }}>People Nearby</Text>
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
            backgroundColor: COLORS.white,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 6,
          }}
        >
          <View style={{ flexDirection: "row", paddingLeft: 10 }}>
            <Image source={IMGS.games} style={{ width: 24, height: 24 }} />
            <Text style={{ fontSize: 18, marginLeft: 10 }}>Games</Text>
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
            backgroundColor: COLORS.white,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 6,
          }}
        >
          <View style={{ flexDirection: "row", paddingLeft: 10 }}>
            <Image source={IMGS.program} style={{ width: 24, height: 24 }} />
            <Text style={{ fontSize: 18, marginLeft: 10 }}>Mini Programs</Text>
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
