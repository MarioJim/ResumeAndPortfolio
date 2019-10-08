// Credits to https://github.com/and-who
// From https://github.com/and-who/react-p5-wrapper

import React from 'react';
import p5 from 'p5';
import styled from 'styled-components';

const breakpoint = '680px';

const Wrapper = styled.div`
  position: relative;
  @media (max-width: ${breakpoint}) {
    display: none;
  }
`;

const Error = styled.p`
  display: none;
  font-size: 1.2em;
  @media (max-width: ${breakpoint}) {
    display: block;
  }
`;

export interface P5WrapperProps {
  sketch: (p: p5) => void;
}

export interface P5WrapperState {
  sketch: (p: p5) => void;
  canvas: p5;
  wrapper: HTMLElement;
}

export default class P5Wrapper extends React.Component <P5WrapperProps, P5WrapperState> {
  wrapper: HTMLElement;

  constructor(props: any) {
    super(props);
    this.state  = {
      sketch: props.sketch,
      canvas: null,
      wrapper: null
    };
  }

  componentDidMount() {
    const canvas = new p5(this.state.sketch, this.wrapper);
    this.setState({
      canvas: canvas,
      wrapper: this.wrapper
    })
  }

  static getDerivedStateFromProps(props: P5WrapperProps, state: P5WrapperState){
    let canvas = state.canvas;
    if (state.sketch !== props.sketch) {
      state.wrapper.removeChild(state.wrapper.childNodes[0]);
      canvas.remove();
      canvas = new p5(props.sketch, state.wrapper)
      return {
        ...state,
        sketch: props.sketch,
        canvas: canvas
      };
    }
    return state;
  }

  componentWillUnmount() {
		this.state.canvas.remove();
	}

  render() {
    return (
      <React.Fragment>
        <Wrapper ref={wrapper => this.wrapper = wrapper} />
        <Error>For a better experience, open this in a wider screen.</Error>
      </React.Fragment>
    );
  }
}
