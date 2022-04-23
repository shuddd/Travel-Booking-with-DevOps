import React from 'react'

export default function TAProfile() {
  return (
    <>
    <form className="rounded float-start my-4 mx-5 shadow p-3 mb-5 rounded" style={{backgroundColor:'#FBBA72'}}>
    <div className="mx-5">
        <label htmlFor="exampleInputPassword1" className="form-label"></label>
        <input id="password" type="password" className="form-control shadow rounded" placeholder='Enter Current Password'/>
      </div>
      <div className="mx-5">
        <label htmlFor="exampleInputPassword1" className="form-label"></label>
        <input id="password" type="password" className="form-control shadow rounded" placeholder='Enter New Password'/>
      </div>
      <div className="mx-5">
        <label htmlFor="exampleInputPassword1" className="form-label"></label>
        <input id="password" type="password" className="form-control shadow rounded" placeholder='Re-enter New Password'/>
      </div>
      <div className="mx-5">
      <label htmlFor="exampleInputPassword1" className="form-label"></label>
  </div>
  <button type="submit" className="btn text-light mx-5 my-3 shadow" style={{borderRadius:'12px',backgroundColor:'#CA5310'}}>Submit</button>
    </form>
    <form className="rounded float-start my-4 mx-5 shadow p-3 mb-5 rounded" style={{backgroundColor:'#FBBA72'}}>
      <div className="mx-5">
      <textarea class="form-control" style={{width:"300px", height:"190px"}} placeholder="Enter New Address" id="floatingTextarea"></textarea>
  </div>
      <div className="mx-5">
      <label htmlFor="exampleInputPassword1" className="form-label"></label>
  </div>
  <button type="submit" className="btn text-light mx-5 my-3 shadow" style={{borderRadius:'12px',backgroundColor:'#CA5310'}}>Submit</button>
    </form>
    <form className="rounded float-start my-4 mx-5 shadow p-3 mb-5 rounded" style={{backgroundColor:'#FBBA72'}}>
      <div className="mx-5">
      <input type="text" class="form-control" placeholder="Enter New Contact no." aria-label="Username"/>
  </div>
      <div className="mx-5">
      <label htmlFor="exampleInputPassword1" className="form-label"></label>
  </div>
  <button type="submit" className="btn text-light mx-5 my-3 shadow" style={{borderRadius:'12px',backgroundColor:'#CA5310'}}>Submit</button>
    </form>
    </>
  )
}
