import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import './App.css'
import React, { useContext, useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useData } from './Context';
import Navbar from './Navbar';
import Noteslist from './Noteslist';
import Tasklist from './Tasklist'

function Home(){
  const { state, dispatch } = useData();
  const [newTask, setNewTask] = useState('');
  const [newDate, setNewDate] = useState('');


  const [sortedTasks, setSortedTasks] = useState([]);

  useEffect(() => {
    // Sort the tasks by remaining days
    const now = new Date();
    const sorted = state.tasks
      .map((task) => {
        const taskDate = new Date(task.date);
        const timeDifference = taskDate - now;
        const remainingDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        return { ...task, remainingDays };
      })
      .sort((a, b) => a.remainingDays - b.remainingDays);

    setSortedTasks(sorted);
  }, [state.tasks]);


  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const taskData = {
        task: newTask,
        date: newDate,
      };
      dispatch({ type: 'ADD_TASK', payload: taskData });
      setNewTask('');
      setNewDate('');
    }
  };

    return(
        <Container fluid>
          <Row>
        <Col sm={3} className='menu'>
          <Navbar></Navbar>

        </Col>
        <Col sm={9} className='cons'>
          
          


        <div>
          <br></br>
          <h2 className='wel'>Welcome John Doe</h2>
          <br></br>
     <Noteslist></Noteslist>
     <Tasklist></Tasklist>
    </div>


        </Col>
      </Row>
      </Container>

    );
}
export default Home;