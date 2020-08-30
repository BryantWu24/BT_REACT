import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import {
    handleTextInput
} from '../redux/action'


class textInput extends Component {
    render() {
        return (
            <div >
                <Input placeholder='Search...'
                    onChange={this.props.handleTextInput}
                    value={this.props.textInput} />
                <div>
                    Your input is {this.props.textInput}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        textInput: state.handleTextInput
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleTextInput: (val) => {
            dispatch(handleTextInput(val))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(textInput)