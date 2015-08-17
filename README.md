# Stylistic Elements

A set of React components that make it easy to style elements using props.

For example:

```js
import {Element} from 'stylistic-elements';

<Element
  tag="input"
  type="text"
  id="myElement"
  onClick={onClickHandler}
  marginTop={12}
  translateY={24}
/>

// Renders as:

<input
  type="text"
  id="myElement"
  onClick={onClickHandler}
  style={{
    marginTop: 12,
    transform: 'translate(0, 24px)',
  }}
/>
```

## Available elements

- `Element`: the most basic one, simply converts props into inline styles. I recommend using one of the higher-level components below instead.
- `ResetElement`: like `Element` but resets some common user-agent styles to their defaults.
- `Block`: a block-level element. Defaults to `div`.
- `Inline`: an inline element. Defaults to `span`.
- `InlineBlock`: an inline-block element. Defaults to a `div` with `display: inline-block` and `vertical-align: middle`.

## Supported attributes

See [stylistic](https://github.com/steadicat/stylistic) for the list of supported attributes.

