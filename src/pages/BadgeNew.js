import React from 'react';
import header from '../images/badge-header.svg'
import './styles/BadgeNew.css'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

class BadgeNew extends React.Component{
    state={
        form:{
            firstName:'',
            lastName:'',
            email:'',
            twitter:'',
            jobTitle:'',
        }
    }

    handleChange = e=>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            },
        });
    }

    render(){
        return(
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img src={header} alt="" className="img-fluid"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                twitter={this.state.form.twitter}
                                jobTitle={this.state.form.jobTitle}
                                email={this.state.form.email}
                                avatarUrl= "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y"
                            />
                        </div>
                        <div className="col -6">
                            <BadgeForm 
                                onChange={this.handleChange}
                                formValues={this.state.form}
                            />
                        </div> 
                    </div>
                </div>


            </React.Fragment>
        )
    }
}

export default BadgeNew