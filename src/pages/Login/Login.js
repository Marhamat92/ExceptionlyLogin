import {
  Container,
  CssBaseline,
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
  Tooltip,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@mui/system";
import { useRef, useState, useEffect } from "react";
import * as React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useForm } from "react-hook-form";
import { GoogleLogin } from "react-google-login";
import { useLinkedIn } from "react-linkedin-login-oauth2";
import linkedin from "react-linkedin-login-oauth2";
import MicrosoftLogin from "react-microsoft-login";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "App.css";
import { gapi } from "gapi-script";
import { Zoom } from "react-reveal";
// import GoogleLoginButton from "components/GoogleLogin";

const clientId =
  "1037051315722-2q6e8qn3c218qmb5pa37atacpiuuiqk3.apps.googleusercontent.com";

const useStyles = makeStyles(() => ({
  // container: {
  //   animationDuration: "0.25s",
  //   animationTimingFunction: "ease-out",
  //   animationDelay: "0s",
  //   animationIterationCount: "1",
  //   animationDirection: "normal",
  //   animationFillMode: "none",
  //   animationPlayState: "running",
  //   animationName: "iVcGVT",
  // }
}));

function Login(props) {
  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
  };

  const onFailure = (res) => {
    console.log("LOGIN FAILED! res: ", res);
  };

  React.useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  const [showSignUp, setShowSignUp] = useState();

  const classes = useStyles();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const [right, setRight] = React.useState(false);
  const tooltipPlacement = right ? "right" : "top";
  
  

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handlePopper = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  //  const [email, setEmail] = useState('');
  //   const [password, setlPassword] = useState('');
  //   const [emailError, setEmailError] = useState('');

  //   const emailValidation = (e) => {
  //       const tempEmail = (e && e.target && e.target.value) || e;
  //       setEmail(tempEmail);
  //       const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  //       const isValidEmail = re.test(String(tempEmail).toLowerCase());
  //       if(!tempEmail){
  //           setEmailError('Enter a Email Address')
  //       } else if(!isValidEmail) {
  //           setEmailError('Enter a Valid Email')
  //       }
  //   }
  //   console.log(emailError,"emailerror");
  //   onChange={emailValidation}

  //Linkedin login below
  const { linkedInLogin } = useLinkedIn({
    clientId: "86vhj2q7ukf83q",
    redirectUri: `${window.location.origin}/linkedin`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
    onSuccess: (code) => {
      console.log(code);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  //Linkedin login above

  //Microsoft login below
  const authHandler = (err, data) => {
    console.log(err, data);
  };

  const microsoftClick = () => {
    <MicrosoftLogin
      clientId="00cc6a80-43b3-4aea-b8dd-72ec6d80f4eb"
      authCallback={authHandler}
    />;
  };
  //Microsoft login above



  const changeScale=()=>{
if(document.getElementById('box').classList.contains('scale-75')){
  document.getElementById('box').classList.remove('scale-75');
  document.getElementById('box').classList.add('scale-100');}
   
};

useEffect(()=>{

  changeScale();

   
 
    
})
  

  


  return (
    <>
      <CssBaseline />
      <div className="bg-bgimage py-12 px-4   bg-cover flex items-center justify-center max-w-full min-h-screen width-screen">
         {/* <div className="  ">  */}
        
        <Container
        id="box"
        fixed
         className="flex items-center scale-75   border-transparent rounded-md    justify-center transition-transform   duration-300 ease-out delay-0 min-h-150"
          maxWidth="md"
        >
          <Grid
            className="justify-center"
            container
            spacing={0}
            justify="center"
          >
            <Grid
              className="bg-firstGridBg px-4 lg:px-2  hidden lg:grid "
              item
              md={6}
              xs={12}
            >
              <div className="flex justify-center mx-18 mt-32">
                <img className="h-80 w-80" src="/dotlogo.png" alt="" />
              </div>
              <div className="flex flex-col items-center mt-14 ">
                <Typography
                  className="text-center text-textWhiteColor opacity-80"
                  variant="body1"
                  // color="white"
                >
                  WELCOME TO THE MARKETPLACE
                </Typography>
                <div className="mt-4 text-center mx-14">
                  <Typography
                    className=" flex items-center leading-5 text-textWhiteColor opacity-80"
                    variant="body2"
                    // color="white"
                    fontSize={14}
                  >
                    Exceptionly provides hands on tested remote software
                    engineers unlike any other outsourcing company. Our product
                    delivers talent directly for hiring without a lifetime
                    markup over 400%
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid className="bg-white" item md={6} xs={12}>
              <div className="flex justify-center mt-16">
                <img src="/Logo.png" alt="" />
              </div>

              {!showSignUp && (
                <div className="mt-6 flex justify-center">
                  <Typography
                    className="font-normal text-xl text-secondaryText"
                    variant="p"
                  >
                    Sign in to your account
                  </Typography>
                </div>
              )}

              {showSignUp && (
                <div className="mt-6 flex justify-center">
                  <Typography
                    className="font-normal text-xl text-secondaryText"
                    variant="p"
                  >
                    Sign up to your account
                  </Typography>
                </div>
              )}

              <div
                className={`${
                  showSignUp &&
                  "hidden transition-all ease-in-out  delay-300 duration-300"
                } px-14`}
              >
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Box>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      type="email"
                      label="Email"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      variant="standard"
                      {...register("email", {
                        required: "This is a required field",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      error={!!errors?.email}
                      helperText={errors?.email ? errors.email.message : null}
                    />
                    {/* <p className="text-red-500 text-xs">{emailError}</p> */}

                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      variant="standard"
                      {...register("password", {
                        required: "This is a required field",
                        pattern: {
                          value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
                          message: "Invalid Password",
                        },
                      })}
                      error={!!errors?.password}
                      helperText={
                        errors?.password ? errors.password.message : null
                      }
                    />

                    <div className="flex justify-center items-center space-x-16 mt-5">
                      
                        {/* <FormControlLabel
                          control={
                            <Checkbox value="remember" color="primary" />
                          }
                          label="Remember me"
                        /> */}
                        <div className="flex items-center justify-between space-x-3">
                          <input className="h-4 w-4" type="checkbox" name="" id="" />
                          <label htmlFor="checkbox" className="text-rememberMe text-sm font-normal">Remember Me</label>
                        </div>
                        <div>
                        <Link className="no-underline text-sm" href="#" variant="p">
                          Forgot password?
                        </Link>
                        </div>
                    </div>

                    <Button
                      type="submit"
                      fullWidth
                      className="h-9 w-70 bg-googlebutton transition-all duration-300 hover:bg-blue-600"
                      sx={{ mt: 6 }}
                    >
                      <span className="font-normal text-white">Sign In</span>
                    </Button>
                    <Typography
                      className="flex justify-center mt-4"
                      variant="body2"
                      color="initial"
                    >
                      OR
                    </Typography>

                    <GoogleLogin
                      render={(renderProps) => (
                        <Button
                          onClick={renderProps.onClick}
                          // isSignedIn={true}
                          className="flex justify-center items-center transition-all duration-300 bg-googlebutton hover:bg-blue-600"
                          fullWidth
                          sx={{ mt: 2 }}
                        >
                          <GoogleIcon
                            className="text-white"
                            fontSize="medium"
                          />
                          <span className="ml-1 font-normal text-white">
                            SIGN IN WITH GOOGLE
                          </span>
                        </Button>
                      )}
                      clientId={clientId}
                      onSuccess={onSuccess}
                      onFailure={onFailure}
                      cookiePolicy={"single_host_origin"}
                      isSignedIn={true}
                    />

                    <Button
                      onClick={linkedInLogin}
                      className="bg-linkedinbutton shadow-none transition-all duration-300 hover:bg-blue-500"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 2 }}
                    >
                      <LinkedInIcon fontSize="medium" />
                      <span className="ml-1 font-normal">
                        SIGN IN WITH LINKEDIN
                      </span>
                    </Button>
                    <MicrosoftLogin
                      className="hidden"
                      clientId="00cc6a80-43b3-4aea-b8dd-72ec6d80f4eb"
                      authCallback={authHandler}
                    />
                    <Button
                      className="shadow-none transition-all duration-300 hover:bg-red-400 flex justify-center items-center bg-microsoftbutton"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 2 }}
                    >
                      <i class="ri-microsoft-fill text-xl"></i>
                      <span className="ml-1 font-normal">
                        SIGN IN WITH MICROSOFT
                      </span>
                    </Button>
                  </Box>
                </form>
              </div>

              {/* sign up below */}
              <div
                className={`${
                  !showSignUp ? "hidden opacity-0 " : " flex  opacity-100"
                } transition delay-300 duration-300   px-14`}
              >
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Box>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="name"
                      label="Name"
                      name="name"
                      autoComplete="name"
                      autoFocus
                      variant="standard"
                      {...register("name", {
                        required: "This is a required field",
                        // pattern: {
                        //   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        //   message: "Invalid email address",
                        // },
                      })}
                      error={!!errors?.name}
                      helperText={errors?.name ? errors.name.message : null}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="lastname"
                      label="Last Name"
                      name="lastname"
                      autoComplete="lastname"
                      autoFocus
                      variant="standard"
                      {...register("lastname", {
                        required: "This is a required field",
                        // pattern: {
                        //   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        //   message: "Invalid email address",
                        // },
                      })}
                      error={!!errors?.lastname}
                      helperText={
                        errors?.lastname ? errors.lastname.message : null
                      }
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="signupemail"
                      label="Email"
                      name="signupemail"
                      autoComplete="email"
                      autoFocus
                      variant="standard"
                      {...register("signupemail", {
                        required: "This is a required field",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      error={!!errors?.email}
                      helperText={errors?.email ? errors.email.message : null}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="retypesignupemail"
                      label="Retype Email"
                      name="retypesignupemail"
                      autoComplete="email"
                      autoFocus
                      variant="standard"
                      {...register("retypesignupemail", {
                        required: "This is a required field",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      error={!!errors?.email}
                      helperText={errors?.email ? errors.email.message : null}
                    />

                    <Tooltip
                
                      title={
                        "Must contain 8 characters, at least 1 uppercase, 1 lowercase, a number and 1 special character"
                      }
                      placement={tooltipPlacement}
                      padding
                    >
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="signuppassword"
                        label="Password"
                        type="password"
                        id="signuppassword"
                        autoComplete="current-password"
                        variant="standard"
                        {...register("signuppassword", {
                          required: "This is a required field",
                          pattern: {
                            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
                            message: "Invalid Password",
                          },
                        })}
                        error={!!errors?.password}
                        helperText={
                          errors?.password ? errors.password.message : null
                        }
                      />
                    </Tooltip>

                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="retypesignuppassword"
                      label="Retype Password"
                      type="password"
                      id="retypesignuppassword"
                      autoComplete="current-password"
                      variant="standard"
                      {...register("retypesignuppassword", {
                        required: "This is a required field",
                        pattern: {
                          value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
                          message: "Invalid Password",
                        },
                      })}
                      error={!!errors?.password}
                      helperText={
                        errors?.password ? errors.password.message : null
                      }
                    />

                    <Button
                      type="submit"
                      fullWidth
                      className="bg-googlebutton transition-all duration-300  hover:bg-blue-600"
                      sx={{ mt: 5 }}
                    >
                      <span className="font-normal text-white">SIGN UP</span>
                    </Button>
                    <Typography
                      className="flex justify-center mt-4"
                      variant="body2"
                      color="initial"
                    >
                      OR SIGN UP USING
                    </Typography>
                    <div className="flex items-center justify-center space-x-2">
                      <GoogleLogin
                        render={(renderProps) => (
                          <button
                            onClick={renderProps.onClick}
                            // isSignedIn={true}
                            className="w-9 h-9 mt-4 rounded-md bg-googlebutton transition-all duration-300 hover:bg-blue-600 flex justify-center items-center"
                          >
                            <GoogleIcon
                              className="text-white "
                              fontSize="small"
                            />
                          </button>
                        )}
                        clientId={clientId}
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={"single_host_origin"}
                        isSignedIn={true}
                      />

                      <button
                        onClick={linkedInLogin}
                        className="w-9 h-9 mt-4 bg-linkedinbutton transition-all duration-300 hover:bg-blue-500 rounded-md"
                        type="submit"
                      >
                        <LinkedInIcon className="text-white" fontSize="small" />
                      </button>
                      <button
                        className="w-9 h-9 mt-4 rounded-md flex justify-center items-center transition-all duration-300 hover:bg-red-400 bg-microsoftbutton"
                        type="submit"
                      >
                        <i class="ri-microsoft-fill text-white text-l"></i>
                      </button>
                    </div>
                  </Box>
                </form>
              </div>

              {/* sign up above */}

              {!showSignUp && (
                <div className="bg-footerBg py-4  mt-20">
                  <div className="flex items-center justify-center">
                   
                      <Typography
                        variant="body2"
                       className="text-textWhiteColor"
                        color="white"
                      >
                        Don't have an account?
                      </Typography>
                   
                    
                      <Typography
                        className=" cursor-pointer"
                        variant="body1"
                      >
                        <span
                      
                          onClick={() => (changeScale(),
                            setShowSignUp(true))
                          }
                          className="ml-2  text-createanaccount text-sm hover:text-blue-400 "
                        >
                          CREATE AN ACCOUNT
                        </span>
                      </Typography>
                
                  </div>
                </div>
              )}

              {showSignUp && (
                <div className="bg-footerBg py-4 mt-20">
                     <div className="flex items-center justify-center">
                
                      <Typography
                      className="text-textWhiteColor"
                        variant="body2"
                        color="white"
                      >
                        Already have an account?
                      </Typography>
                
                
                      <Typography
                        className="ml-2 text-center cursor-pointer"
                        variant="body1"
                      >
                        <span
                          onClick={() => (changeScale(),
                            setShowSignUp(false))
                          }
                          className="text-sm text-createanaccount hover:text-blue-400 "
                        >
                          SIGN IN HERE
                        </span>
                      </Typography>
                   
                  </div>
                </div>
              )}
            </Grid>
          </Grid>
        </Container>
      
         {/* </div> */}

        {/* sign up below */}

        {/* <div className="hidden">
              <Container maxWidth="md">
                <Grid container spacing={0} justify="center">
                  <Grid
                    className="bg-firstGridBg px-4 lg:px-2  hidden lg:grid"
                    item
                    md={6}
                    xs={12}
                  >
                    <div className="flex justify-center mt-24">
                      <img className="py-10" src="/dotlogo.png" alt="" />
                    </div>
                    <div className="flex flex-col items-center mt-24 ">
                      <Typography variant="h6" color="white">
                        WELCOME TO THE MARKETPLACE
                      </Typography>
                      <div className="mt-6 text-center">
                        <Typography
                          className=" flex items-center"
                          fontSize="medium"
                          variant="p"
                          color="white"
                        >
                          Exceptionly provides hands on tested remote software
                          engineers unlike any other outsourcing company. Our
                          product delivers talent directly for hiring without a
                          lifetime markup over 400%
                        </Typography>
                      </div>
                    </div>
                  </Grid>
                  <Grid className="bg-white" item md={6} xs={12}>
                    <div className="flex justify-center mt-16">
                      <img src="/Logo.png" alt="" />
                    </div>
                    <div className="mt-4 flex justify-center">
                      <Typography variant="h6" color="#000000C2">
                        Sign in to your account
                      </Typography>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                     
                    </form>
                 

                  </Grid>
                </Grid>
              </Container>
          </div> */}

        {/* sign up below */}
      </div>
    </>
  );
}

export default Login;
