import React, {useEffect,useState} from 'react'
import "./CurrentTasks.css"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import Button from '@mui/material/Button';

  

function CurrentTasks() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        loadTasks();
    }, [])

    const loadTasks = async () => {
        const result = await axios.get("http://localhost:3006/tasks");
        setTasks(result.data);

    }

    const deleteTasks = id =>{
        axios.delete("http://localhost:3006/tasks/" + id)
        .then((result) => {   
            setTasks(prev => prev.filter((tasks)=>{
                if(!tasks.id.toString().toLowerCase().includes(id.toString().toLowerCase())){
                    return tasks;
                }
                return null
            }))
        })
    }

  return (


    <div className='CurrentTask'>
    <table class="table border shadow">
        {/* <thead>
            <tr class="bg-light">
                <th scope="col">Id</th>
                <th scope="col">Tasks</th>
                <th scope="col">Date</th>
                <th scope="col"></th>
                <th scope="col"></th>
            </tr>
        </thead> */}
        <tbody class='table1'>

        {tasks.map((task, index) => (
            <>
            <tr class='row1'>
            <th scope="row">{index + 1}</th>
            <td>{task.task_title}         
            </td>
            <td>{task.task_date}         
            </td>
            
            <td>
            <Button
              type="submit"
              variant="contained"
    
              onClick={()=> deleteTasks(task.id)}
            >
              Completed
            </Button>
            </td>  

            <td>
            <Button color='error'               variant="contained"
              onClick={()=> deleteTasks(task.id)}>
                Delete
            </Button >
            </td> 
            </tr>
            </> 

))
}            
        </tbody>
    </table>
</div>
  )
}

export default CurrentTasks