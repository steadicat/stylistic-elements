import React from 'react';
import {extract} from 'stylistic';

export class Element {
  static displayName = 'Element';

  render() {
    const attributes = extract(this.props);

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
}

export class ResetElement {
  static displayName = 'ResetElement';
  render() {
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
        {...this.props}
      />
    );
  }
}

export class Block {
  static displayName = 'Block';
  render() {
    return <Element display="block" {...this.props} />
  }
}

export class Inline {
  static displayName = 'Inline';
  render() {
    return <Element tag="span" {...this.props} />
  }
}

export class InlineBlock {
  static displayName = 'InlineBlock';
  render() {
    return <Element display="inline-block" verticalAlign="middle" {...this.props} />
  }
}
