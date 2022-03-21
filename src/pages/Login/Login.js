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
import { Bounce, Fade, Zoom } from "react-reveal";

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
      <div className="bg-bgimage  lg:h-screen flex items-center justify-center">
        <div class={`${showSignUp && "hidden"}`}>
          <Fade duration={1500}>
            <Container maxWidth="md">
              <Grid container spacing={0} justify="center">
                <Grid
                  className="bg-firstGridBg px-4 lg:px-2  hidden lg:grid"
                  item
                  md={6}
                  xs={12}
                >
                  <div className="flex justify-center mt-24">
                    <img className="" src="/dotlogo.png" alt="" />
                  </div>
                  <div className="flex flex-col items-center mt-24 ">
                    <Typography variant="h6" color="white">
                      WELCOME TO THE MARKETPLACE
                    </Typography>
                    <div className="mt-6 text-center">
                      <Typography
                        className=" flex items-center"
                        variant="p"
                        color="white"
                        fontSize="medium"
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
                    <img src="/logo.png" alt="" />
                  </div>
                  <div className="mt-4 flex justify-center">
                    <Typography variant="h6" color="#000000C2">
                      Sign in to your account
                    </Typography>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Box className="px-14" sx={{ mt: 1 }}>
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
                              <Checkbox value="remember" color="primary" />
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
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Sign In
                      </Button>
                      <Typography
                        className="flex justify-center"
                        variant="p"
                        color="initial"
                      >
                        OR
                      </Typography>
                      <Button
                        className="flex justify-center items-center"
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2 }}
                      >
                        <GoogleIcon fontSize="medium" />
                        <span className="ml-1">SIGN IN WITH GOOGLE</span>
                      </Button>
                      <Button
                        //  class={classes.linkedin}
                        style={{ backgroundColor: "#2867B2" }}
                        className={classes.linkedin}
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2 }}
                      >
                        <LinkedInIcon fontSize="medium" />
                        <span className="ml-1">SIGN IN WITH LINKEDIN</span>
                      </Button>
                      <Button
                        className=" flex justify-center items-center"
                        style={{ backgroundColor: "#F25022" }}
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2 }}
                      >
                        <i class="ri-microsoft-fill text-xl"></i>
                        <span className="ml-1">SIGN IN WITH MICROSOFT</span>
                      </Button>
                    </Box>
                  </form>
                  <div className="bg-footerBg py-6 px-10 mt-20">
                    <Grid container className="items-center">
                      <Grid item xs>
                        <Typography variant="p" color="white">
                          Don't have an account?
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography className=" cursor-pointer" variant="p">
                          <span
                            onClick={() => {
                              setShowSignUp(true);
                            }}
                            className="text-createanaccount hover:text-blue-400"
                          >
                            CREATE AN ACCOUNT
                          </span>
                        </Typography>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </Fade>
        </div>

        {/* sign up below */}

        {showSignUp && (
          <div className="">
            <Fade duration={1500}>
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
                      <img src="/logo.png" alt="" />
                    </div>
                    <div className="mt-4 flex justify-center">
                      <Typography variant="h6" color="#000000C2">
                        Sign in to your account
                      </Typography>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <Box className="px-14" sx={{ mt: 1 }}>
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
                          variant="contained"
                          sx={{ mt: 3, mb: 2 }}
                        >
                          SIGN UP
                        </Button>
                        <Typography
                          className="flex justify-center"
                          variant="p"
                          color="initial"
                        >
                          OR SIGN UP USING
                        </Typography>
                        <div className="flex items-center justify-center space-x-2">
                          <Button
                            className="flex justify-center items-center"
                            type="submit"
                            variant="contained"
                            sx={{ mt: 2 }}
                          >
                            <GoogleIcon fontSize="small" />
                          </Button>
                          <Button
                            //  class={classes.linkedin}
                            style={{
                              backgroundColor: "#2867B2",
                              maxWidth: "4px",
                            }}
                            className=""
                            type="submit"
                            variant="contained"
                            sx={{ mt: 2 }}
                          >
                            <LinkedInIcon fontSize="small" />
                          </Button>
                          <Button
                            className=" flex justify-center items-center"
                            style={{ backgroundColor: "#F25022" }}
                            type="submit"
                            size="small"
                            variant="contained"
                            sx={{ mt: 2 }}
                          >
                            <i class="ri-microsoft-fill text-l"></i>
                          </Button>
                        </div>
                      </Box>
                    </form>
                    <div className="bg-footerBg py-6 px-10 mt-20">
                      <Grid container className="items-center">
                        <Grid item xs>
                          <Typography variant="p" color="white">
                            Already have an account?
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography className=" cursor-pointer" variant="p">
                            <span
                              onClick={() => {
                                setShowSignUp(false);
                              }}
                              className="text-createanaccount hover:text-blue-400"
                            >
                              SIGN IN HERE
                            </span>
                          </Typography>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                </Grid>
              </Container>
            </Fade>
          </div>
        )}
        {/* sign up below */}
      </div>
    </>
  );
}

export default Login;
