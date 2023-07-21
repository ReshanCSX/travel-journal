import pin from '../images/pin.png'

export default function Card(props){
    return(
        <div className="card--container">

            <img src={props.imageURL} className="card--image"/>

            <div className="card--info">
                
                <div className="card--header">
                    <img src={pin} className='header--pin'/>
                    <h4 className="header--location">{props.location}</h4>
                    <a href={props.googleMapsURL} className="header--mapLink">View on Google Maps</a>
                </div>

                <h1 className="card--title">{props.title}</h1>

                <div className="card--duration">
                    <h5>{props.startDate} - {props.endDate}</h5>
                </div>

                <p className="card--description">{props.description}</p>
            </div>

        </div>
    
    )
    
}