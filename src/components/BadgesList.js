import React from 'react'
import './styles/BadgesList.css'
import {Link} from 'react-router-dom'
import Gravatar from '../components/Gravatar'

class BadgesList extends React.Component{
    render(){
        if(this.props.badges.length===0){
            return(
                <div>
                    <h3>
                        No badges were found
                    </h3>
                    <Link to="/badges/new" className="btn btn-primary">
                        Create new Batch
                    </Link>
                </div>
            )
        }
        return (
            <ul className="list-unstyled">
            {this.props.badges.map((badge)=>{
                return(
                    <li key={badge.id}>
                        <Link   to={`/badges/${badge.id}/edit`} 
                                className="text-reset text-decoration-none"
                        >     
                            <div className="contenedor">
                                <div>
                                    <Gravatar email={badge.email} alt=""/>
                                </div>
                                <div className="info">
                                    <h5>
                                        {badge.firstName} {badge.lastName}
                                    </h5>
                                    <span className="twitter">
                                        @{badge.twitter}
                                    </span>
                                    <br/>
                                    <span>
                                        {badge.jobTitle}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </li>
                )
            })}
            </ul>

        )
    }
}

export default BadgesList