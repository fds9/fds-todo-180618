import React from 'react';

export default function(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <UserConsumer>
          {value => (
            <WrappedComponent {...value} {...this.props} />
          )}
        </UserConsumer>
      )
    }
  }
}