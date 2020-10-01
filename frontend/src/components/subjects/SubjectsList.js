import React from "react"
const TaskList = (props) => {
  return (
    props.classList.map((val, idx) => {
     // let projectName = `projectName-${idx}`, task = `task-${idx}`, taskNotes = `taskNotes-${idx}`, taskStatus = `taskStatus-${idx}`
     
      return (
        <tr key={val.index}>
          <td>
            <input type="text" required  name="i_subject_name" data-id={idx} className="form-control " />
          </td>
          <td>
            <textarea  name="c_description" data-id={idx} className="form-control"></textarea>
          </td>
          <td>
       
       <select name="c_type" data-id={idx} className="form-control" >
         <option value="Optional">Optional</option>
         <option value="Mandate">Mandate</option>
       </select>
     </td> 
          <td>
            {
            idx===0?<button onClick={()=>props.add()} type="button" className="btn btn-primary text-center"><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
            : <button className="btn btn-danger" onClick={(() => props.delete(val))} ><i className="fa fa-minus" aria-hidden="true"></i></button>
            }
          </td>
        </tr >
      )
    })
  )
}
export default TaskList