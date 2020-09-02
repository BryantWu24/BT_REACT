import React, { Component } from 'react';
import { Button, Grid, Header, Segment, Icon } from 'semantic-ui-react';
import { setLoginInfo } from '../../../components/redux/action/auth';
import { connect } from 'react-redux';
import './index.css';
import { createBrowserHistory } from 'history'

class NotFoundPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            account: '',
            password: '',
            submitted: false
        }
    }

    goBack() {
        const history = createBrowserHistory();

        history.goBack();
    }

    render() {
        return (
            <div className="Cus_fullScreen">
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Row >
                        <Grid.Column style={{ maxWidth: 400 }} >
                            <Header as='h2' color='teal' textAlign='center'>
                            NotFoundPage <Icon name="exclamation" color="red"> </Icon>
                            </Header>
                            <Segment stacked>
                                <h1>ಥ_ಥ Page Not Found. </h1>
                                <Button color='teal' fluid size='large' onClick={this.goBack} >
                                    Go Back.
                                </Button>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        account: state.account,
        userId: state.userId,
        token: state.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLoginInfo: ((data) => {
            dispatch(setLoginInfo(data))
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotFoundPage) 
