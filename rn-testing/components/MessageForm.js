import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export default function MessageForm({ onSend }) {
  const [inputText, setInputText] = React.useState("");
  const handleSend = () => {
    if (onSend) {
      onSend(inputText);
    }
    setInputText("");
  };

  return (
    <View>
      <TextInput
        placeholder="Message"
        value={inputText}
        onChangeText={setInputText}
      />
      <Pressable onPress={handleSend}>
        <Text>Send</Text>
      </Pressable>
    </View>
  );
}
