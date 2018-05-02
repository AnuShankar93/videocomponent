import React, { Component } from 'react';
import { Player,ControlBar,ReplayControl,BigPlayButton } from 'video-react';
//import DownloadButton from './DownloadButton';
import PreviousButton from './PreviousButton';
import NextButton from './NextButton';

import './App.css';
class App extends Component {
 
  constructor(props) {
    super(props);
  
    this.state = {
      "isFullscreen": false,
    }
    
 }
 componentWillMount() {
  
  console.log('Component WILL MOUNT!')
}
getPlayerDetails = (state, prevState) => {
  if(state.isFullscreen!==prevState.isFullscreen)
    console.log(state.isFullscreen)
  // console.log(prevState.player.isFullscreen, state.player.isFullscreen)
}
componentDidMount(){
  console.log(this.player.getState())
  this.player.subscribeToStateChange(this.getPlayerDetails)
}
  render() {
   
    
    return (
      <div className="App">
       <div className="Player_div">
          <Player autoPlay
          ref={(node)=>this.player=node}
            playsInline
            poster="/assets/poster.png"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          >
          <ControlBar autoHide={false}>
          <NextButton order = {2}/>
          <PreviousButton order = {7}/>
        </ControlBar><BigPlayButton position="center" /></Player>
      </div>
      <div className="Player_div">
        
          <Player 
            ref="player"
            playsInline preload="auto"
            poster="/assets/poster.png"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          >
          <button>test</button><BigPlayButton position="center" />
          <ControlBar autoHide={false}>
          <ReplayControl seconds={5} order={2.1} />
          <ReplayControl seconds={10} order={2.2} />
          <ReplayControl seconds={30} order={2.3} />
        </ControlBar></Player>
      </div>
      </div>
    );
  }
}

export default App;
