import React, { useReducer, useRef } from 'react';
import { patientReducer, patientState } from '../Reducers/PatientsReducers';

const PatientManagement = () => {
      const [state, dispatch] = useReducer(patientReducer, patientState);
      const nameRef = useRef();
       const handleForm = (event) =>{
             event.preventDefault();
             dispatch({
                   type: 'ADD_PATIENT',
                  id :state.patients.length +1,
                  name : nameRef.current.value
                  })
                  nameRef.current.value ='';
            //  console.log(nameRef.current.value);
       } 
      return (
            <div>
                  <h1> Patient management {state.patients.length}</h1>

                  <form onSubmit={handleForm}>
                        <input ref={nameRef} />
                  </form>
                  {
                        state.patients.map(pt =><li
                        onClick={()=>dispatch({type: 'REMOVE_PATINENT',id:pt.id})}>
                        
                        {pt.name}</li>)
                  }
            </div>
      );
};

export default PatientManagement;