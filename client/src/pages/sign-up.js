import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import FacebookLoginWithButton from "../components/Facebook/facebook-with-button";
import "./sign-up.css"


class Signup extends Component {
	constructor() {
		super()
		this.state = {
			email: '',
			password: '',
			firstName: '',
			lastName: "",
			age: "",
			redirectTo: null,
			errorMessage: null,
			facebookId: "",
			accessToken: "",
			profilePicture: null
		
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	
	}


	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit(event) {
		
		console.log('sign-up handleSubmit, email: ')
		console.log(this.state.email)
		event.preventDefault()
		this.setState({errorMessage: ""})

		if (this.state.password.length > 7) {
		//request to server to add a new email/password
		axios.post('/api/users/', {
			email: this.state.email,
			password: this.state.password,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			age: this.state.age,
			profilePicture: this.state.profilePicture
		})
			.then(response => {
				console.log(response)
				const rd = response.data
				if (!rd.error && !rd.errors) {
					console.log('successful signup')
					this.setState({ //redirect to login page
						redirectTo: '/login'
					})
				} else {
					if (rd.error) 
						{console.log(rd.error)};

					if (rd.errors) {
						console.log(rd.errors)
						if (rd.errors.email) {
							this.setState({errorMessage: rd.errors.email.message});
							console.log(rd.errors.email.message);
						}
						else if (rd.errors.firstName) {
							this.setState({errorMessage: rd.errors.firstName.message});
							console.log(rd.errors.firstName.message);
						}
						else if (rd.errors.lastName) {
							this.setState({errorMessage: rd.errors.lastName.message});
							console.log(rd.errors.lastName.message);
						}
						else if (rd.errors.age) {
							this.setState({errorMessage: rd.errors.age.message})
							console.log(rd.errors.profilePicture.message);
						}
						else if (rd.errors.profilePicture) {
							this.setState({errorMessage: rd.errors.profilePicture.message})
							console.log(rd.errors.profilePicture.message);
						}
					};
				
				};
			
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
		} else {
			console.log("Password Not Long Enough");
			this.setState({ errorMessage: "Password Must Be Longer Than 6 Characters!"});
		}
	}

	responseFacebook = (response) => {
		console.log(response);
		this.setState({facebookId: response.id});
		this.setState({accessToken: response.accessToken});
		axios.get("https://graph.facebook.com/v2.11/" + response.id 
				  + "?fields=picture.height(961)&access_token=" + response.accessToken)
		.then(res => {
		   console.log(res)
		   this.setState({profilePicture: res.data.picture.data.url});
		   console.log("Profile Picture: ", this.state.profilePicture);
		   this.setState({errorMessage: ""});
		})
	  };


render() {
	const buttonStyle = {
		backgroundColor: "#4C69BA",
		borderColor: "#4C69BA",
		color: "#FFF",
		cursor: "pointer",
		// height:
	}
	const imageStyle = {
		height: "200px",
		position: "absolute",
		marginLeft: "40%"
	}
	if (this.state.redirectTo) {
		return <Redirect to={{ pathname: this.state.redirectTo }} />
	} else {
	return (
		<div className="bg SignupForm">
			{/* <h4>Sign Up</h4> */}
			<form className="form-horizontal signup-form">
				<div className="form-group signup-form">
					<div className="col col-mr-auto">
						<input className="form-input"
							type="text"
							id="firstName"
							name="firstName"
							placeholder="First Name"
							value={this.state.firstName}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group signup-form">
					<div className="col col-mr-auto">
						<input className="form-input"
							type="text"
							id="lastName"
							name="lastName"
							placeholder="Last Name"
							value={this.state.lastName}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group signup-form">
					<div className="col col-mr-auto">
						<input className="form-input"
							type="text"
							id="email"
							name="email"
							placeholder="Email"
							value={this.state.email}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group signup-form">
					<div className="col col-mr-auto">
						<input className="form-input"
							placeholder="Password"
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group signup-form">
					<div className="col col-mr-auto">
						<input className="form-input"
							placeholder="Age"
							type="number"
							name="age"
							value={this.state.age}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group signup-form">
					{!this.state.profilePicture ? (
					
					<div className="col col-mr-auto" style={{marginRight: 0}}>
						<input className="form-input"
							placeholder="Picture"
							type="file"
							name="avatar"
							value= ""
							accept="image/png, image/jpeg"
							onChange={this.handleChange}
						/>
					</div>
					) : (
					<div className="col col-mr-auto">
						<input className="form-input"
							placeholder="Facebook Image Chosen!"
							type="text"
							name="avatar"
							value= ""
							accept="image/png, image/jpeg"
						/>
					</div>
					)}
			
				
				{!this.state.profilePicture && (
        <div className="form-group signup-form">  
				<div className="facebook">
					<FacebookLoginWithButton
						appId="2035101990142770"
						autoLoad={true}
						fields="name,email,picture,first_name,last_name"
						callback={this.responseFacebook}
						icon="fa-facebook"
						render={renderProps => (
						<button onClick={renderProps.onClick}></button>
						)}
						scope="user_friends, user_location"
						show_faces={true}
						size="large"
						buttonStyle= {buttonStyle}
						onMouseEnter={this.mouseEnter}
					/>
				</div>
        </div>
				)}
				</div>
				<div className="form-group signup-form ">
					<div className="col-7"></div>
					{/* {this.state.profilePicture && (<img src= {this.state.profilePicture} style={imageStyle}/>)} */}
					<button
						className="btn click"
						onClick={this.handleSubmit}
						type="submit"
					>Sign up</button>
				</div>
				<div style={{color:"black"}}>
				{this.state.errorMessage}
				</div>
			</form>
		</div>

	)
}
}
}

export default Signup
