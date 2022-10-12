import { Picker } from "@react-native-picker/picker";
import React from "react";

function CustomPicker({ options = [], value, setValue }) {
  return (
    <Picker
      selectedValue={value}
      onValueChange={(itemValue, itemIndex) => setValue(itemValue)}
      style={{ width: 200 }}
    >
      {options.map((option) => (
        <Picker.Item label={option} value={option} key={option} />
      ))}
    </Picker>
  );
}

export default CustomPicker;
