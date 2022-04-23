import React from 'react'

export default function TARequestChange() {
  return (
    <>
    <form className="rounded float-end my-4 mx-5 shadow p-3 mb-5 rounded" style={{backgroundColor:'#FBBA72'}}>
      <div className="mx-5">
      <select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
  </div>
      <div className="mx-5">
      <label htmlFor="exampleInputPassword1" className="form-label"></label>
  </div>
  <button type="submit" className="btn text-light mx-5 my-3 shadow" style={{borderRadius:'12px',backgroundColor:'#CA5310'}}>Submit</button>
    </form>
    </>
  )
}
