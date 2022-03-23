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
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@mui/system";
import { React, useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useForm } from "react-hook-form";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "App.css";


const useStyles = makeStyles(() => ({
  //  container: {"transitionDelay":"300ms","transitionProperty":"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform","transitionDuration":"300ms","transitionTimingFunction":"cubic-bezier(0.4, 0, 0.2, 1)"}
}));

function Login(props) {
  const [showSignUp, setShowSignUp] = useState();

  const classes = useStyles();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  // function changeLinkedinBackground(e) {
  //   e.target.style.background = 'rgb(59 130 246)';
  // }

  // function changeMicrosoftBackground(e) {
  //   e.target.style.background = 'rgb(248 113 113)';
  // }

  return (
    <>
      <CssBaseline />
      <div className="bg-bgimage h-full   overflow-auto bg-no-repeat bg-cover   flex items-center justify-center">
        <div class="my-36">
            <Container className="h-180 " maxWidth="md">
              <Grid className="justify-center" container spacing={0} justify="center">
                <Grid
                  className="bg-firstGridBg px-4 lg:px-2  hidden lg:grid  "
                  item
                  md={6}
                  xs={12}
                >
                  <div className="flex justify-center mx-18 mt-32">
                    <img className="h-80 w-80"  src="/dotlogo.png" alt="" />
                  </div>
                  <div className="flex flex-col items-center mt-14 ">
                    <Typography className="text-center" variant="body1" color="white">
                      WELCOME TO THE MARKETPLACE
                    </Typography>
                    <div className="mt-4 text-center mx-14">
                      <Typography
                        className=" flex items-center leading-5"
                        variant="body2"
                        color="white"
                        fontSize={14}
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

                 {!showSignUp && <div className="mt-6 flex justify-center">
                    <Typography className="font-normal text-xl text-secondaryText"  variant="p" >
                      Sign in to your account
                    </Typography>
                  </div>}

                 {showSignUp&& <div className="mt-6 flex justify-center">
                    <Typography className="font-normal text-xl text-secondaryText"  variant="p" >
                      Sign up to your account
                    </Typography>
                  </div>}

                  <form onSubmit={handleSubmit(onSubmit)}>
               <div className={`${showSignUp && "hidden transition-all ease-in-out  delay-300 duration-300"} px-14`}>
                    <Box >
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
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

                      <Grid container className="items-center">
                        <Grid item xs>
                          <FormControlLabel
                          
                            control={
                              <Checkbox  value="remember" color="primary" />
                            }
                            label="Remember me"
                          />
                        </Grid>
                        <Grid item>
                          <Link href="#" variant="p">
                            Forgot password?
                          </Link>
                        </Grid>
                      </Grid>

                      <Button
                        type="submit"
                        fullWidth
                        className="h-9 w-70 bg-googlebutton"
                        
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
                      <Button
                        className="flex justify-center items-center bg-googlebutton"
                        type="submit"
                        fullWidth
                        
                        sx={{ mt: 2 }}
                      >
                        <GoogleIcon className="text-white" fontSize="medium" />
                        <span className="ml-1 font-normal text-white">SIGN IN WITH GOOGLE</span>
                      </Button>
                      <Button
                        className="bg-linkedinbutton"
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2 }}
                      >
                        <LinkedInIcon fontSize="medium" />
                        <span className="ml-1 font-normal">SIGN IN WITH LINKEDIN</span>
                      </Button>
                      <Button
                        className=" flex justify-center items-center bg-microsoftbutton"
                        
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2 }}
                      >
                        <i class="ri-microsoft-fill text-xl"></i>
                        <span className="ml-1 font-normal">SIGN IN WITH MICROSOFT</span>
                      </Button>
                    </Box>
                    </div>

{/* sign up below */}
             <div className={`${!showSignUp ? "hidden opacity-0 " :" flex  opacity-100"} transition delay-300 duration-300   px-14`}>
                <Box >
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
                          id="email"
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
                          helperText={
                            errors?.email ? errors.email.message : null
                          }
                        />
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="email"
                          label="Retype Email"
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
                          helperText={
                            errors?.email ? errors.email.message : null
                          }
                        />

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
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          name="password"
                          label="Retype Password"
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

                        <Button
                          type="submit"
                          fullWidth
                         className="bg-googlebutton"
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
                          <button
                            className="w-9 h-9 mt-4 rounded-md bg-googlebutton  flex justify-center items-center"
                            type="submit"
                           
                          >
                            <GoogleIcon className="text-white" fontSize="small" />
                          </button>
                          <button
                            
                            className="w-9 h-9 mt-4 bg-linkedinbutton rounded-md"
                            type="submit"
                           
                          >
                            <LinkedInIcon className="text-white" fontSize="small" />
                          </button>
                          <button
                            className="w-9 h-9 mt-4 rounded-md flex justify-center items-center bg-microsoftbutton"
                            type="submit"
                          >
                            <i class="ri-microsoft-fill text-white text-l"></i>
                          </button>
                        </div>
                      </Box>
                      </div>

{/* sign up above */}

                  </form>

                 {!showSignUp && <div className="bg-footerBg py-4  mt-20">
                    <Grid container  className="items-center ">
                      <Grid  item lg={6} >
                        <Typography variant="body2" className="ml-12" color="white">
                          Don't have an account?
                        </Typography>
                      </Grid>
                      <Grid item lg={6} >
                        <Typography className=" cursor-pointer ml-2" variant="body1">
                          <span
                            onClick={() => {
                              setShowSignUp(true);
                            }}
                            className="-ml-2  text-createanaccount text-md hover:text-blue-400 "
                          >
                            CREATE AN ACCOUNT
                          </span>
                        </Typography>
                      </Grid>
                    </Grid>
                  </div>}

                  {showSignUp && <div className="bg-footerBg py-4 mt-20">
                      <Grid container className="items-center">
                        <Grid item lg={6} >
                          <Typography className="text-center ml-12"  variant="body2" color="white">
                            Already have an account?
                          </Typography>
                        </Grid>
                        <Grid item lg={6}>
                          <Typography className="-ml-10 text-center cursor-pointer" variant="body1">
                            <span
                              onClick={() => {
                                setShowSignUp(false);
                              }}
                              className=" text-createanaccount hover:text-blue-400 ml-2"
                            >
                              SIGN IN HERE
                            </span>
                          </Typography>
                        </Grid>
                      </Grid>
                    </div>}

                </Grid>
              </Grid>
            </Container>
        </div>

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
