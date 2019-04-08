import React from 'react';
import header from '../images/platziconf-logo.svg'
import './styles/BadgeEdit.css'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import api from '../api'
import PageLoading from '../components/PageLoading'

class BadgeEdit extends React.Component{
    state={
        loading:true,
        error:null,
        form:{
            firstName:'',
            lastName:'',
            email:'',
            twitter:'',
            jobTitle:'',
        }
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async e=>{
        this.setState({
            loading:true, error:null
        })

        try{
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )
            this.setState({
                loading:false, form:data
            })
        }
        catch(error){
            this.setState({
                loading:false, error:error
            })
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

    handleSubmit = async e=>{
        e.preventDefault()
        this.setState({
            loading:true, error:null
        })

        try{
            await api.badges.update(this.props.match.params.badgeId,this.state.form)
            this.setState({
                loading:false
            })

            this.props.history.push('/badges')
        } catch(error){
            this.setState({
                loading:false, error:error
            })
        }
    }

    render(){
        if(this.state.loading){
            return <PageLoading/>
        }

        return(
            <React.Fragment>
                <div className="BadgeEdit__hero">
                    <img src={header} alt="" className="img-fluid BadgeNew__hero-image"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h1>Edit Attendant</h1>
                            <Badge
                                firstName={this.state.form.firstName || 'First_Name'}
                                lastName={this.state.form.lastName || 'Last_Name'}
                                twitter={this.state.form.twitter || 'Twitter'}
                                jobTitle={this.state.form.jobTitle || 'Job Title'}
                                email={this.state.form.email|| 'Email'}
                                avatarUrl= "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y"
                            />
                        </div>
                        <div className="col -6">
                            <BadgeForm
                                onSubmit={this.handleSubmit}
                                onChange={this.handleChange}
                                formValues={this.state.form}
                                error={this.state.error}
                            />
                        </div> 
                    </div>
                </div>


            </React.Fragment>
        )
    }
}

export default BadgeEdit