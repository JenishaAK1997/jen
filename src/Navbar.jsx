import { Link } from 'react-router-dom';
function Navbar(){
    return(
        <div>
 <div className='dp'>
            <table>
              <tr>
                <td><img src="john.png"></img></td>
                <td className='dn'><h5>John Doe</h5><span className='sf'>johndoe@gmail.com</span></td>
              </tr>
            </table>
          </div>
        <ul className='mbar'>
            <li>
              <Link className="sas" to="/"><h5><i className='fa  fa-home'></i>Home</h5></Link>
            </li>
            <li>
      
              <Link className="sas" to="/"><h5>      <i className='fa fa-search'></i>Search</h5></Link>
            </li>
            <li>
           
              <Link className="sas" to="/notes"> <h5><i className='fa fa-file-text-o'></i>Notes</h5></Link>
            </li>
            <li>
            
              <Link className="sas" to="/task"><h5><i className='fa fa-check-circle-o'></i>Tasks</h5></Link>
            </li>
            <li>
            
              <Link className="sas" to="/"><h5><i className='fa fa-archive'></i>Archive</h5></Link>
            </li>
            <li>
            
              <Link className="sas" to="/"><h5><i className='fa fa-trash'></i> Bin</h5></Link>
            </li>
          </ul>

        </div>


    );
}
export default Navbar