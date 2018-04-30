import React from 'react'


class LogoTitle extends React.Component {
    render() {
      return (
        <Image
          source={require('../assets/image/pink.jpg')}
          style={{ width: 30, height: 30 }}
        />
      );
    }
  }

  export default LogoTitle;