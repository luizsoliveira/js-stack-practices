import './style.css'

function Card(props) {

    return (
        <div className='card' onClick={() => props.deleteStudent(props.id)}>
            <div>
                <img src={props.avatar} alt="" />
                <strong>{props.name}</strong>
            </div>
            <small >{props.time}</small>
        </div>
    )
}

export default Card