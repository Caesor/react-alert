/**********************************************************************************************
 *  This component is designed for Tribe Project in QQ mobile as a Alert to simulate system tips
 *  You can use it as a independent Alert component in your App
 *
 *  @ examples  you can find examples in README.md
 *
 *  @ param(string)       title: The brief description of purpose
 *  @ param(string/JSX)   content: The detail statement of purpose
 *  @ param(string)       confirmText: The text in CONFIRM button
 *  @ param(string)       cancelText: The text in CANCEL button
 *  @ param(bool)         confirmAtRight: The CONFIRM is at the right of CANCEL button or not
 *  @ param(bool)         useTap: Use Tap event as default, not Click
 *  @ param(function)     callback: Events called after CONFIRM button is clicked
 *  @ param(function)     cancelCallback: Events called after CANCEL button is clicked
 *
 *  Copyright by nemoliao( liaozksysu@gmail.com), nemo is a member of AlloyTeam in Tencent.
 *
 **********************************************************************************************/

import React, { Component } from 'react'
import Singleton from 'Singleton'
import 'react-tap'
import './index.less'

class Button extends Component{
    render() {
        const { children, useTap, callback, ...childProps } = this.props;
        return <button className="btn" onClick={this.tapHandler.bind(this)} onTap={this.tapHandler.bind(this)} {...childProps}>{children}</button>
    }

    tapHandler() {
        const { useTap, callback } = this.props;

        useTap && callback && callback();

        return false;
    }
}

class Alert extends Component {
    static defaultProps = {
        title: '',
        content: '',
        confirmText: '确认',
        useTap: true
    }

    static propTypes = {
        title: React.PropTypes.string,
        confirmAtRight: React.PropTypes.bool,
        cancelText: React.PropTypes.string,
        confirmText: React.PropTypes.string,
        useTap: React.PropTypes.bool,
        callback: React.PropTypes.func,
        cancelCallback: React.PropTypes.func
    }

    constructor(props) {
        super(props);
    }

    state = {
        show: true
    }

    render() {
        const { show } = this.state,
            { containerClass, title, content, confirmAtRight, cancelText, confirmText, useTap, callback, cancelCallback } = this.props,
            cancelBtn = (
                <Button useTap={useTap} callback={this.clickHandler.bind(this, cancelCallback)}>{cancelText}</Button>
            );

        let style = Object.assign({}, this.props.style, {display: show?'block':'none'});

        return (
            <div id="Alert" className={containerClass} style={style}>
                <div className="frame">
                    <h3 className="title">{ title }</h3>
                    <div className="content">{ content }</div>
                    <div className="btn-group border-1px-up">
                        { confirmAtRight && cancelText && cancelBtn }
                        <Button useTap={useTap} callback={this.clickHandler.bind(this, callback)}>{confirmText}</Button>
                        { !confirmAtRight && cancelText && cancelBtn }
                    </div>
                </div>
            </div>
        )
    }

    clickHandler(cb) {
        this.setState({
            show: false
        });
        cb && cb();
    }
}

export const SingleAlert = new Singleton(Alert)

export default Alert
