import {useReducer, useRef} from 'react'
import { NavLink } from 'react-router-dom';
import Content from './content';

//Init state
const initState = {
  job:"",
  jobs:[],
}
//Actions
const SET_JOB='set_job'
const ADD_JOB='add_job'
const DELETE_JOB='delete_job'

const setJob = payload =>{
  return {
    type:SET_JOB,
    payload
  }
}
const addJob = payload =>{
  return {
    type:ADD_JOB,
    payload
  }
}
const deleteJob= payload =>{
  return {
    type:DELETE_JOB,
    payload
  }
}
//Reducer
const reducer = (state,action) =>{
  console.log("Action",action);
  console.log("State",state);
  let newState
    switch (action.type){
      case SET_JOB:
        newState={
          ...state,
          job:action.payload,
        }
        break
      case ADD_JOB:
        newState={
          ...state,
          jobs:[...state.jobs,action.payload]
        }
        break
      case DELETE_JOB:
        const newJobs= [...state.jobs]
        newJobs.splice(action.payload,1)
        newState={
          ...state,
          jobs:newJobs,
        }
        break
      default:
        throw new Error('Invalid action')
    }
    console.log(newState)
    return newState
}


const Learn = () => {
  const inputRef=useRef()
  const [state,dispatch] = useReducer(reducer,initState)
  const {job,jobs}= state
  const handleSubmit = () =>{
    dispatch(addJob(job))
    dispatch(setJob(''))
    inputRef.current.focus()
  }
  

  return (
    <div className='hoctap'>
      <h1>Todo List</h1>
      <input ref={inputRef} value={job} type="text" placeholder='Add job' onChange={e =>{ dispatch(setJob(e.target.value))}} />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job,index)=>(
          <li key={index}>{job} <span onClick={()=>{dispatch(deleteJob(index))}}>&times;</span></li>
        ))}
        
      </ul>
    </div>
  )
}

export default Learn