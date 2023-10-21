import { Link } from 'react-router-dom';
import React, { useContext, useState ,useEffect } from 'react';
import { useData } from './Context';
function Noteslist(){
    const [sortedTasks, setSortedTasks] = useState([]);
    const { state, dispatch } = useData();
  useEffect(() => {
    // Sort the tasks by remaining days
    const now = new Date();
    const sorted = state.notes
      .map((task) => {
        const taskDate = new Date(task.date);
        const timeDifference = taskDate - now;
        const remainingDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        return { ...task, remainingDays };
      })
      .sort((a, b) => a.remainingDays - b.remainingDays);

    setSortedTasks(sorted);
    console.log(sorted);
  }, [state.notes]);
    return(
        <div className='mylist'>
        <table>
          <tr>
            <td></td>
            <td><h3><i className='fa fa-file-text-o'></i>My Notes</h3></td>
          </tr>
          <tr><td></td><td>Recently viewed</td></tr>
        </table>
      <ul className='inner'>
              {sortedTasks.map((task, index) => (
                <li key={index}>
                  <table>
      
                    <tr>
                      <td width="80%"><h3>{task.title}</h3></td>
                      <td width="10%"><i className='fa fa-pencil'></i></td>
                      <td width="10%"><i className='fa fa-trash'></i></td>
                    </tr>
                  </table>
                  {task.notes}
                  <br></br><span className='s1'>  {task.remainingDays} days ago</span>
                </li>
              ))}
            </ul>
      </div>

    );
}
export default Noteslist