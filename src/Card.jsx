import profilePicture from './assets/Archie.jpg'

function Card(){
    return(
        <div className="card">
            <img className='card-image' src={profilePicture} alt="Profile Picture" />
            <h2 className='card-title'>Acarya Mordekhai</h2>
            <p className='card-text'>I am a Front End Developer that believe I will get a job this year</p>
        </div>
    );
}

export default Card