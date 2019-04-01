import React from 'react'
import './styles/BadgesList.css'

class BadgesList extends React.Component{
    render(){
        return (
            <ul className="list-unstyled">
            {this.props.badges.map((badge)=>{
                return(
                    <li key={badge.id}>
                    <div className="contenedor">
                        <div>
                            <img src={badge.avatarUrl} alt=""/>
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
                    </li>
                )
            })}
            </ul>

        )
    }
}

export default BadgesList