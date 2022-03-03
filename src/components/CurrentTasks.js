import React, {useEffect,useState} from 'react'
import "./CurrentTasks.css"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

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
            }))
        })
    }

  return (


    <div className='CurrentTask'>
    <table class="table border shadow">
        <thead>
            <tr class="bg-light">
                <th scope="col">Id</th>
                <th scope="col">Tasks</th>
                <th scope="col">Date</th>
                <th scope="col"></th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>

        {tasks.map((task, index) => (
            <>
            <tr>
            <th scope="row">{index + 1}</th>
            <td>{task.task_title}         
            </td>
            <td>{task.task_date}         
            </td>
            
            <td>
            <button class="btn btn-primary mr-2"  onClick={()=> deleteTasks(task.id)}>
                Completed
            </button >
            </td>  

            <td>
            <button class="btn btn-danger mr-2" onClick={()=> deleteTasks(task.id)}>
                Delete
            </button >
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