import './index.css'

const UserProfile = (props) => {
    const {userDetails} = props 
    const {imageUrl, name, profession} = userDetails

    return(
        <li className="user-profile-container">
            <img src={imageUrl} alt="person" className="avatar"/>
            <div className="user-details-container">
                <h1 className="user-name">{name}</h1>
                <p className="user-role">{profession}</p>
            </div>
        </li>
    )
}

export default UserProfile