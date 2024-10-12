import React from 'react'

function Alert(props) {
    const capitalize = (str) =>{
        const lower = str.toLowerCase();
        return lower[0].toUpperCase();
    }

  return (
    <>
    props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{capitalize(props.alert.type)}</strong> {props.alert.message}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    </>
  )
}

export default Alert