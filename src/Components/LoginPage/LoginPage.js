import React, { Component } from 'react';

import Grid from '@mui/material/Grid';
import inst_image from '../../images/9364675fb26a.svg';
import insta_logo from  '../../images/logoinsta.png';
import './LoginPage.css';
import fb from   '../../images/fb.png';
import appstore from '../../images/app.png';
import playstore from '../../images/play.png';

import SignUp from '../SignUp/SignUp';
import SignIN from '../SignIn/SignIN';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {   isLogin: true
        }
      
    }
changeLogin=()=>{
    if(this.state.isLogin)
    this.setState({isLogin:false});
    else
    this.setState({isLogin:true}); 
}



    render() {
        return (
            <div>
                <Grid container>
                <Grid item xs={3}>
                    
                    </Grid>
                    <Grid item xs={6}>
                        <div className='loginpage_main'>
                            <div>
                            <img src = {inst_image} width="454px" />
                            </div>
                            <div>
                                <div className='loginpage_rightcomponent'>
                                   <img className='loginpage_logo' src={insta_logo} />
                                   <div className='loginPage_signin'>
                                     {
                                        this.state.isLogin ?    <SignIN/> :  <SignUp />


                                     }
                                     
                                     
                                     
                                  

                                        

                                        <div className='login_ordiv'>
                                            <div className='login_divider'></div>
                                            <div className='login_or'>OR</div>
                                            <div className='login_divider'></div>
                                        </div>
                                        <div className='login_fb'><img src={fb} width='15px' style={{ "marginRight":"5px" }} />Log in with Facebook</div>
                                        <div className='login_forgot'>Forgot password?</div>
                                    </div>
                                </div>
                                <div className='loginpage_signupoption'>
                                    {
                                        this.state.isLogin ? <div className='loginpage_signin'>
                                        Don't have an account?<span onClick={this.changeLogin} style={{ "fontWeight":"bold","color":"#663399"}}> Sign up </span>
                                        </div> :<div className='loginpage_signup'>
                                   Have an account?<span onClick={this.changeLogin} style={{ "fontWeight":"bold","color":"#663399"}}>Sign in</span> 
                                   </div>
                                    }



                                   
                                   
                                </div>
                                <div className='loginpage_downloadSection'>
                                    <div>Get the App.</div>
                                    <div className='loginpage_option'>
                                        <img className='loginpage_dwimg' src={appstore} width="136px" />
                                        <img className='loginpage_dwimg' src={playstore} width="136px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Grid>
                        <Grid item xs={3}>
                            
                        </Grid>
                </Grid>
                
            </div>
        );
    }
}
export default LoginPage;