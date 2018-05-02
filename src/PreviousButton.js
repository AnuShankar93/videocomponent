import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
const propTypes = {
    player: PropTypes.object,
    className: PropTypes.string,
};
export default class PreviousButton extends Component {
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
    
PreviousButton.propTypes = propTypes;

  