import React from 'react';

class YouTubeDebugger extends React.Component {

  constructor(){
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  dealWithBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  dealWithResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    })
  }

  render(){
    return (
      <div>
        <button className="bitrate" onClick={this.dealWithBitrate}>Bitrate</button>
        <button className="resolution" onClick={this.dealWithResolution}>Resolution</button>
      </div>
    )
  }
}

export default YouTubeDebugger;
