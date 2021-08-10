import React from 'react';


function withLogging(HOCComponent) {
  const HOCname = HOCComponent.displayName || HOCComponent.name || 'Component'

  class WithLogging extends React.Component {
    constructor(props) {
      super(props);
      this.HOCname = HOCname;
    }

    componentDidMount() {
      console.log(`Component ${this.HOCname} is mounted`);
    }
    componentWillUnmount() {
      console.log(`Component ${this.HOCname} is going to unmount`)
    }
    render () { <HOCComponent /> }
  }

  WithLogging.displayName = `WithLogging(${HOCname})`;
  return WithLogging;
}

export default withLogging;
