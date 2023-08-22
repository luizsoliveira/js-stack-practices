import React, {useState, useEffect} from 'react';
import './style.css'
import Card from '../../components/Card'
import { nanoid } from "nanoid";

function Home() {

  const [studentName, setStudentName] = useState("");

  const [students, setStudents] = useState([]);

  const [user, setUser] = useState([{name: '', avatar: ''}]);

  function deleteStudent(id) {
    const remainingStudents = students.filter((student) => id !== student.id);
    setStudents(remainingStudents);
  }

  function addStudent() {

    fetch('https://api.github.com/users/' + studentName)
    .then(response => response.json())
    .then(data =>  {
      const time = new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
      const [name, avatar] = data.hasOwnProperty('message') ? [studentName, `https://picsum.photos/60?random=${studentName}`] : [data.name, data.avatar_url];
      const newStudent = {
        id: `student-${nanoid()}`,
        name: name,
        avatar: avatar,
        time: time,
      };
      
      setStudents((prevState) => [...prevState, newStudent])
      document.getElementById('studentNameField').value=""
      setStudentName("")
      
    } )

  }

  useEffect(() => {
    fetch('https://api.github.com/users/luizsoliveira')
    .then(response => response.json())
    .then(data =>  {
      setUser({
        name: data.name,
        avatar: data.avatar_url

      })
    } )
  },
  [students])
  
  return (
    <div className='container'>
      <header>
        <h1> Dev Attendance List{studentName != "" ? ": " + studentName : "" } </h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de perfil" />
        </div>
      </header>
      
      <input type="text"
      id='studentNameField'
      placeholder='Insert the github user id or the complete name' 
      onChange={(e) => setStudentName(e.target.value)}
      />
      <button 
        type="button"
        onClick={addStudent}>
          Adicionar
      </button>
      
      <div className='statsline'>
      <small> {`Exibindo ${students.length} estudante${students.length>1 ? 's' : ''}.`}</small>
      </div>
      


      {
        students.map( student => (
          <Card
            name={student.name}
            time={student.time}
            avatar={student.avatar}
            key={student.id}
            id={student.id}
            deleteStudent={deleteStudent}
          />
        ))
      }
      
    </div>
  )
}

export default Home
