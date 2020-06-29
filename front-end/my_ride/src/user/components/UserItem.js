import React from 'react'; 

import Card from '../../shared/components/UIElements/Card'; 
import { Link } from 'react-router-dom'; 
import Avatar from '../../shared/components/UIElements/Avatar';


const UserProfile = props => {
    return (
        <li className="user-profile">
            <Card className="user-profile_content">
                <Link to={`/${props.id}/mycars`}>
                    <div className="user-profile_image">
                        <Avatar image={props.image} alt={props.name} />
                    </div>
                    <div className="user-profile_info">
                        <h2>{props.name}</h2>
                    </div>
                </Link>
            </Card>
        </li>
    )
}

export default UserProfile; 