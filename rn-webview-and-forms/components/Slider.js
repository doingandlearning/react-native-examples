import Slider from "@react-native-community/slider";

export default function CustomSlider({
  min = 0,
  max = 1,
  minColor = "#FFF",
  maxColor = "#000",
}) {
  return (
    <Slider
      style={{ width: 200, height: 40, backgroundColor: "#ddd" }}
      minimumValue={min}
      maximumValue={max}
      minimumTrackTintColor={minColor}
      maximumTrackTintColor={maxColor}
      value={0.2}
      onValueChange={() => {}}
      onSlidingComplete={() => {}}
    />
  );
}
