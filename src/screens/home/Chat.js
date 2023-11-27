import React, { useState, useCallback, useEffect, useContext } from "react";
import { Bubble, GiftedChat, Send, InputToolbar } from "react-native-gifted-chat";
import { COLORS} from "../../constants";
import { View} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useRoute } from "@react-navigation/native";
import { ContextApp } from "../../context/contextApp";
const ChatScreen = () => {
  const { theme } = useContext(ContextApp);
  const [messages, setMessages] = useState([]);
  const route = useRoute();
  useEffect(() => {
    const userImg = route.params.userImg;
    console.log(userImg);
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: userImg,
        },
      },
    ]);
  }, []);

  const onSend = useCallback((newMessages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );
  }, []);

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: COLORS.green,
          },
        }}
        textStyle={{
          right: {
            color: theme.color,
          },
        }}
      />
    );
  };

  const scrollToBottomComponent = () => {
    return (
      <FontAwesome name="angle-double-down" size={22} color="#3333" />
    );
  };

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <MaterialCommunityIcons
            name="send-circle"
            style={{ marginBottom: 5, marginRight: 5, }}
            size={32}
            color={COLORS.green}
          />
        </View>
      </Send>
    );
  };

  const renderInputToolbar = (props) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: theme.backgroundColor[1],
          borderWidth: 1,
          borderColor: COLORS.grayLight,
        }}
      />
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.backgroundColor[0]}}>
      <GiftedChat
        messages={messages}
        onSend={(newMessages) => onSend(newMessages)}
        user={{
          _id: 1,
        }}
        renderBubble={renderBubble}
        alwaysShowSend
        renderSend={renderSend}
        scrollToBottom
        scrollToBottomComponent={scrollToBottomComponent}
        renderInputToolbar={renderInputToolbar}
      />
    </View>
  );
};

export default ChatScreen;
