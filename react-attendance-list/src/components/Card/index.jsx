import './style.css'

function Card(props) {

    return (
        <div className='card'>
            <div>
                <img src={props.avatar} alt="" />
                <strong>{props.name}</strong>
            </div>
            <div>
                <small>{props.time}</small>
                <button onClick={() => props.deleteStudent(props.id)}>Delete</button>
            </div>
            
            
        </div>
    )
}

export default Card