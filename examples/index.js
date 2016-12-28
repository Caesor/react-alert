import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import Alert, { SingleAlert } from 'react-ios-alert'

import 'react-ios-alert/dist/react-ios-alert.css'

class Main extends Component {
    state = {
        showAlert: false
    }
    render() {
        const alertOpt = {
                title: 'Alert',
                content: 'This is a demo!',
                confirmText: 'Yes',
                cancelText: 'Cancel',
                callback: function(){alert('yes callback called!')},
                cancelCallback: function(){alert('cancel callback called!')},
                close: this.hide.bind(this)
            };
        return (
            <div>
                {
                    !!this.state.showAlert && <Alert {...alertOpt} />
                }
                <button onClick={e=>this.show()}>click me to show Alert</button>
                <br/>
                <button onClick={e=>this.showSingle1()}>click me to show Singleton Alert 1</button>
                <br/>
                <button onClick={e=>this.showSingle2()}>click me to show Singleton Alert 2</button>
            </div>
        )
    }
    show() {
        this.setState({
            showAlert: true
        })
    }
    hide() {
        this.setState({
            showAlert: false
        })
    }
    showSingle1() {
        SingleAlert.show({
            content: 'Alert Singleton 1',
            confirmText: 'OK'
        });
    }
    showSingle2() {
        SingleAlert.show({
            content: 'Alert Singleton 2',
            confirmText: 'OK'
        });
    }
}

render(
    <Main />,
    document.getElementById('app')
)
