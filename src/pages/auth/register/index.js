import React, { Component } from 'react';
import { Form, Button,  Grid, Header, Segment, Message, Icon } from 'semantic-ui-react';
import { setLoginInfo } from '../../../components/redux/action/auth';
import { connect } from 'react-redux';
import { apiOpenApiSetAccount } from "../../../core/api";
import { Link } from 'react-router-dom';
import { history } from '../../../core/history';
import './index.css';
import { toast } from 'react-semantic-toasts';
class RegisterPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            account: '',
            password: '',
            email: '',
            name: '',
            submitted: false
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
        const { account, password, email, name } = this.state;
        if (account && password) {
            const body = {
                "account": account,
                "pwd": password,
                "email": email,
                "name": name
            };

            apiOpenApiSetAccount(body)
                .then(res => {
                    console.log(res);
                    if (res.data.setStatusCode === 200) {
                        toast(
                            {
                                title: 'Registe Success.',
                                type: 'success',
                                description: <p>You can login your account now.</p>
                            },
                            () => console.log('toast closed'),
                            () => console.log('toast clicked'),
                            () => console.log('toast dismissed')
                        );
                        history.push('/login');
                    }
                })
                .catch(err => {
                    toast(
                        {
                            title: 'Registe Failed.',
                            type: 'error',
                            description: <p>Omg...This is error.</p>
                        },
                        () => console.log('toast closed'),
                        () => console.log('toast clicked'),
                        () => console.log('toast dismissed')
                    );
                    console.log(err);
                });
        }
    }

    render() {
        const { password, submitted, account, name, email } = this.state;

        return (
            <div className="Cus_fullScreen">
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Row >
                        <Grid.Column style={{ maxWidth: 400 }} >
                            <Header as='h2' color='teal' textAlign='center'>
                                <Icon name="registered"></Icon>Register
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

                                    <Form.Input
                                        fluid
                                        icon='mail'
                                        iconPosition='left'
                                        placeholder='Email'
                                        name="email"
                                        type='email'
                                        value={email}
                                        onChange={this.handleChange}
                                        error={submitted && !email}
                                    />

                                    <Form.Input
                                        fluid
                                        icon='user secret'
                                        iconPosition='left'
                                        placeholder='Name'
                                        name="name"
                                        value={name}
                                        onChange={this.handleChange}
                                        error={submitted && !name}
                                    />

                                    {submitted && !password && !account && !name && !email && <div className="Cus_errMsg" > All fields are required.</div>}
                                    {/* {submitted && password && account && name && !email && <div className="Cus_errMsg" > Email is required.</div>}
                                    {submitted && !password && account && name && email && <div className="Cus_errMsg" > Password is required.</div>}
                                    {submitted && password && !account && name && email && <div className="Cus_errMsg" > Account is required.</div>}
                                    {submitted && password && account && !name && email && <div className="Cus_errMsg" > Name is required.</div>} */}
                                    <Button color='teal' fluid size='large' type="submit" >
                                        Register
                                </Button>
                                </Segment>
                            </Form>
                            <Message>
                                Would you have account ? please click <Link to="/login"> <b>here</b> </Link>  to login
                            </Message>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div >
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage) 
