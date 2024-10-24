import profilePic from './assets/moose.jpg'


function Card(){
    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture"></img>
            <h2 className='card-title'>iAM7ander</h2>
            <p className='card-text'>computer engineering and play video games</p>
        </div>
    );
}

export default Card