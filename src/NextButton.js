import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
const propTypes = {
    player: PropTypes.object,
    className: PropTypes.string,
};
export default class NextButton extends Component {
    constructor(props, context) {
        super(props, context);
        console.log("check",props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
    } 
    render() {
        const { player, className } = this.props;
        const { currentSrc } = player;
    
        return (
          <a
            ref={
              (c) => {
                this.button = c;
              }
            }
            className={classNames(className, {
              'video-react-control': true,
              'video-react-button': true,
            })}
            href={currentSrc}
            download
            style={{
              backgroundImage: 'url(data:image/png;base64,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)',
              backgroundRepeat: 'no-repeat',
              backgroundSize:'100% 100%',
              backgroundPosition: 'center',
              bottom: '161px'
            }}
            tabIndex="0"
            onClick={this.handleClick}
          />
        );
    }
}
    
NextButton.propTypes = propTypes;

  