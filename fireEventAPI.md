# Built in helper methods

There are a few fireEvent helper methods:

- fireEvent.press
- fireEvent.changeText
- fireEvent.scroll

# Other events

If you are trying to fire an event that does not have an associated helper method, you can use `fireEvent` directly. Here's an example from the docs.

```js
import { TextInput, View } from 'react-native';
import { fireEvent, render } from '@testing-library/react-native';

const onBlurMock = jest.fn();

render(
  <View>
    <TextInput placeholder="my placeholder" onBlur={onBlurMock} />
  </View>
);

// you omit the `on` prefix
fireEvent(screen.getByPlaceholderText('my placeholder'), 'blur');
```

[The fuller documentation can be found here](https://callstack.github.io/react-native-testing-library/docs/api/#fireeventeventname).