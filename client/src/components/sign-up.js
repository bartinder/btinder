import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import FacebookLoginWithButton from "../components/Facebook/facebook-with-button";


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
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
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
		axios.post('/user/', {
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
				if (!response.data.error && !response.data.errors) {
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
					// if (rd.error) {this.setState({ errorMessage: response.data.error})}
					// if (response.data.errors.profilePicture.message) {{this.setState({errorMessage: response.data.errors.profilePicture.message})}}
					// else {this.setState({errorMessage: response.data.errors.email.message})};
				}
			
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
		// this.setState({profilePicture: response.picture.data.url});
		// this.setState({firstName: response.first_name});
		// this.setState({lastName: response.last_name});
		// this.setState({loggedIn: true});
		// console.log(this.state.loggedIn);
		console.log(response.id);
		console.log(response.accessToken);
		console.log(response.picture.data.url);
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
		color: "#FFF"
	}
	const imageStyle = {
		height: "200px"
	}
	if (this.state.redirectTo) {
		return <Redirect to={{ pathname: this.state.redirectTo }} />
	} else {
	return (
		<div className="SignupForm">
			<h4>Sign Up</h4>
			<form className="form-horizontal">
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="firstName">First Name: </label>
					</div>
					<div className="col-3 col-mr-auto">
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
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="lastName">Last Name: </label>
					</div>
					<div className="col-3 col-mr-auto">
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
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="username">Email: </label>
					</div>
					<div className="col-3 col-mr-auto">
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
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="password">Password: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							placeholder="Password"
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="password">Age: </label>
					</div>
					<div className="col-3 col-mr-auto">
						<input className="form-input"
							placeholder="Age"
							type="number"
							name="age"
							value={this.state.age}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="col-1 col-ml-auto">
						<label className="form-label" htmlFor="avatar">Profile Picture: </label>
					</div>
					{!this.state.profilePicture ? (
					<div className="col-3 col-mr-auto">
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
						<div className="col-3 col-mr-auto">
						<input className="form-input"
							placeholder="Facebook Image Chosen!"
							type="text"
							name="avatar"
							value= ""
							accept="image/png, image/jpeg"
						/>
					</div>
					)}
				</div>
				<div>
				{!this.state.profilePicture ? (
				<div>
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
					/>
				</div>
				) : (<img src= {this.state.profilePicture} style={imageStyle}/>)}
				</div>
				<div className="form-group ">
					<div className="col-7"></div>
					<button
						className="btn btn-primary col-1 col-mr-auto"
						onClick={this.handleSubmit}
						type="submit"
					>Sign up</button>
				</div>
				<div>
				{this.state.errorMessage}
				</div>
			</form>
		</div>

	)
}
}
}

export default Signup
