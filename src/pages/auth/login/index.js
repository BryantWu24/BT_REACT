import React, { Component } from 'react';
import { Form, Button, Grid, Header, Segment, Message, Icon } from 'semantic-ui-react';
import { setLoginInfo } from '../../../components/redux/action/auth';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { apiOpenApiLogin } from "../../../core/api"; 
import './index.css';

class LoginPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            account : '',
            password:'',
            submitted:false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { account, password } = this.state;
        if (account && password) {
            const body={
                "account":account,
                "pwd":password
            };
            
            apiOpenApiLogin(body)
            .then(res=> {
                console.log(res);        
                if(res.data.setStatusCode === 200){
                    this.props.setLoginInfo(res);
                }
            })
            .catch(err=> {
                console.log(err);
            });
        }
    }

    render() {
        const { password ,  submitted,account }  = this.state;

        return (
            <div className="Cus_fullScreen">
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Row >
                        <Grid.Column style={{ maxWidth: 400 }} >
                            <Header as='h2' color='teal' textAlign='center'>
                                <Icon name="star" loading></Icon> Bryant Tools
                        </Header>
                            <Form size='large' onSubmit={this.handleSubmit} >
                                <Segment stacked>
                                    <Form.Input
                                        fluid
                                        icon='user'
                                        iconPosition='left'
                                        placeholder='Account'
                                        name="account"
                                        value={account}
                                        onChange={this.handleChange}
                                        error={submitted && !account}
                                    />
                                    {submitted && !account && password && <div className="Cus_errMsg" >Account is required</div> }
                                    <Form.Input
                                        fluid
                                        icon='lock'
                                        iconPosition='left'
                                        placeholder='Password'
                                        name="password"
                                        type='password'
                                        value={password}
                                        onChange={this.handleChange}
                                        error={submitted && !password}
                                    />
                                    {submitted && !password && account && <div className="Cus_errMsg" >Password is required</div> }
                                    {submitted && !password && !account && <div className="Cus_errMsg" > Account and password are required</div> }
                                    <Button color='teal' fluid size='large' type="submit" >
                                        Login
                                </Button>
                                </Segment>
                            </Form>
                            <Message>
                                New to us?  Please click  <Link to="/register"> <b>here</b> </Link> to register.
                            </Message>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        account:state.account,
        userId:state.userId,
        token:state.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLoginInfo:((data)=>{
            dispatch(setLoginInfo(data))
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage) 
