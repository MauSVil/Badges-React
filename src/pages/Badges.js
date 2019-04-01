import React from 'react'
import './styles/Badges.css'
import confLogo from '../images/badge-header.svg'
import BadgesList from '../components/BadgesList'
import {Link} from 'react-router-dom'
import api from '../api'
import PageLoading from '../components/PageLoading.js'
import PageError from '../components/PageError.js'

class Badges extends React.Component{
    state={
        loading:true,
        error:null,
        data: undefined
    }

    // constructor(props){
    //     super(props)
    //     console.log('1.constructor()');
    //     this.state = {
    //         data:[] 
    //     }
    // }

    componentDidMount(){
        this.fetchData()
    }

    fetchData= async ()=>{
        this.setState({loading:true, error:null})
        try{
            const data = await api.badges.list();
            this.setState({loading:false, data:data})
        } catch (error){
            this.setState({loading:false,error:error})
        }
    }

    // componentDidUpdate(prevProps, prevState){
    //     console.log('5. componentDidUpdate()');
    //     console.log({
    //         prevProps: prevProps,
    //         prevState: prevState
    //     });
    //     console.log({
    //         props:this.props,
    //         state:this.state,
    //     });
    // }

    // componentWillUnmount(){
    //     console.log('6. componentWillUnmount');
    //     clearTimeout(this.timeoutId)
    // }

    render(){
        if(this.state.loading===true){
            return <PageLoading/>
        }

        if(this.state.error){
            return <PageError error={this.state.error}/>
        }

        console.log('2/4. render()')
        return(
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img 
                                className="Badges_conf-logo"
                                src={confLogo} 
                                alt=""/>
                        </div>
                    </div>
                </div>

                <div className="Badge__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                    </div>

                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgesList
                                badges={this.state.data}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Badges