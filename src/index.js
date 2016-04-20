import React from 'react';
import {extract} from 'stylistic';

let RENDER_LOGGING = false;

export function enableRenderLogging(enabled) {
  RENDER_LOGGING = enabled;
}

const log = process.env.NODE_ENV === 'production' ?
  (x => x) :
  ((shouldRender, displayName, reason) => {
    if (RENDER_LOGGING && shouldRender) {
      /* eslint no-console:0 */
      console.info(`${displayName} rerendered because ${reason}.`);
    }
    return shouldRender;
  });

export function component(statelessComponent) {
  const displayName = statelessComponent.name;
  class PureComponent extends React.Component {
    static displayName = displayName;
    shouldComponentUpdate(nextProps) {
      const props = this.props;
      if (props.children !== nextProps.children) log(true, displayName, 'children changed');
      for (let k in props) {
        if (props[k] !== nextProps[k]) return log(true, displayName, `${k} changed`);
      }
      for (let k in nextProps) {
        if (props[k] !== nextProps[k]) return log(true, displayName, `${k} changed`);
      }
      return false;
    }
    render() {
      return statelessComponent(this.props);
    }
  }
  return PureComponent;
}

export const Element = component(function Element(props) {
  const attributes = extract(props);

  const {
    tag: Tag = 'div',
    canvasHeight,
    canvasWidth,
    style,
    ...plainAttributes,
  } = attributes;

  return (
    <Tag
      style={style}
      width={canvasWidth}
      height={canvasHeight}
      {...plainAttributes}
    />
  );
});

export const ResetElement = component(function ResetElement(props) {
  return (
    <Element
      color="inherit"
      fontFamily="inherit"
      fontWeight="inherit"
      fontSize="inherit"
      textDecoration="none"
      marginTop={0}
      marginRight={0}
      marginBottom={0}
      marginLeft={0}
      paddingTop={0}
      paddingRight={0}
      paddingBottom={0}
      paddingLeft={0}
      {...props}
    />
  );
});

export const Block = component(function Block(props) {
  return <Element display="block" {...props} />;
});

export const Inline = component(function Inline(props) {
  return <Element tag="span" {...props} />
});

export const InlineBlock = component(function InlineBlock(props) {
  return <Element display="inline-block" verticalAlign="middle" {...props} />
});
