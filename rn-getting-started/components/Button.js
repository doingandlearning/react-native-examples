import { Text, TouchableOpacity, StyleSheet, Button } from "react-native";

const CustomButton = () => {
  const handleClick = (target) => console.log(`Clicking the ${target}!`);
  return (
    <>
      <Button
        title="Click me"
        style={styles.button}
        onPress={handleClick("button")}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleClick("touchable")}
      >
        <Text>Hello World</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ccc",
    borderRadius: 20,
    borderWidth: 2,
    padding: 10,
    margin: 2,
  },
});

export default CustomButton;
