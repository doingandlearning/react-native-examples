import { Picker } from "@react-native-picker/picker";
import React from "react";

function CustomPicker() {
  const [selectedLanguage, setSelectedLanguage] = React.useState();
  return (
    <Picker
      selectedValue={selectedLanguage}
      onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
      style={{ width: 200 }}
    >
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
  );
}

export default CustomPicker;
