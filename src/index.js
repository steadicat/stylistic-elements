import React from 'react';
import {extract} from 'stylistic';

export function Element(props) {
  const attributes = extract(props);

  const {
    tag: Tag='div',
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
}

export function ResetElement(props) {
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
}

export function Block(props) {
  return <Element display="block" {...props} />;
}

export function Inline(props) {
  return <Element tag="span" {...props} />
}

export function InlineBlock(props) {
  return <Element display="inline-block" verticalAlign="middle" {...props} />
}
