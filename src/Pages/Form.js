import React, { Component } from 'react'
import SearchAppBar from '../Components/AppBar'
import { submit } from '../Database/uploadData'
import emailjs from 'emailjs-com';

export class Form extends Component {

    state = {
        name: null,
        adress: null,
        mobile_number: null,
        education: null,
        experience: null,
        subjects: null,
        submitted: false,
        image: null
    }

    sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_h67d3rY4_clone', e.target, 'user_rdnQ08wROAm4vj2HIcVdc')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        console.log(e.target)
    }

    upload_data = () => {
        var done = submit({
            name: this.state.name,
            location: this.state.adress,
            image: this.state.image,
            exp: this.state.experience,
            subject: this.state.subjects,
            education: this.state.education
        })

        this.setState({ submitted: "done" })

        console.log(done)
    }

    render() {
        return (
            <div>
                <SearchAppBar />
                <div className="wrap" >
                    <form onSubmit={this.sendEmail} >
                        <div style={{ width: "1000px" }} >
                            <h1>
                                Teacher Form
                            </h1>

                            <div>
                                <label>
                                    Name
                            </label>
                                <input value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }} placeholder="name" name="name" >

                                </input>
                            </div>

                            <div>
                                <label>
                                    Location
                            </label>
                                <input value={this.state.adress} onChange={(e) => { this.setState({ adress: e.target.value }) }} placeholder="location" name="location" >

                                </input>
                            </div>

                            <div>
                                <label>
                                    Mobile Number
                            </label>
                                <input value={this.state.mobile_number} onChange={(e) => { this.setState({ mobile_number: e.target.value }) }} placeholder="mobile_number" name="mobile_number" >

                                </input>
                            </div>

                            <div>
                                <label>
                                    Subjects
                                </label>
                                <input value={this.state.subjects} onChange={(e) => { this.setState({ subjects: e.target.value }) }} placeholder="subjects" name="subjects" >

                                </input>
                            </div>

                            <div>
                                <label>
                                    Education
                                </label>
                                <input value={this.state.education} onChange={(e) => { this.setState({ education: e.target.value }) }} placeholder="education" name="education" >

                                </input>
                            </div>

                            <div>
                                <label>
                                    Experience
                            </label>
                                <input value={this.state.experience} onChange={(e) => { this.setState({ experience: e.target.value }) }} placeholder="experience" name="experience" >

                                </input>
                            </div>

                            <div>
                                <label>
                                    Photo
                            </label> 
                                <input value={this.state.image} onChange={(e) => { this.setState({ image: e.target.value }) }} placeholder="photo" name="photo">

                                </input>
                            </div>

                            <div>
                                <input  onClick={this.upload_data} value="SUBMIT" type="submit" >
                                    
                                </input>
                            </div>

                            {
                                this.state.submitted ? (
                                    <div>
                                        Submitted!!
                                    </div>
                                ) : (
                                    <div></div>
                                )
                            }
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form
