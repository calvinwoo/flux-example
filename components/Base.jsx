import React from 'react';

export default class Base extends React.Component {
  render() {
    return (
      <div>
        Hello World!
      </div>
    )
  }
}

React.render(
  <Base />,
  document.getElementById('react-app')
)
