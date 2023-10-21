import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import './App.css'
import React, { useContext, useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useData } from './Context';
import Navbar from './Navbar';
import Tasklist from './Tasklist'
function Task(){
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
          
          


        <div className='note'>
      <h1>New Task</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New Task" className='tasktitle'
      />
      <br></br>
     <label htmlFor="dateInput">Date:</label>
      <input
        type="date"
        value={newDate}
        onChange={(e) => setNewDate(e.target.value)}
        id="dateInput"
        placeholder="Today 10 AM"
      />
      <br></br>
      <button onClick={handleAddTask} className='bt'>Add Task</button>
      
     
    </div>
<Tasklist></Tasklist>

        </Col>
      </Row>
      </Container>

    );
}
export default Task;