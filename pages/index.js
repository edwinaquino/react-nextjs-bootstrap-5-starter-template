import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (<>
    <p>This is a React NextJs Starter Template with <br /><a href="https://getbootstrap.com/docs/5.0/components/modal/" target="_blank">Bootstrap V5.2</a> used as CDN.</p>


    <div className="loginContainer">

      <main className="form-signin w-100 m-auto">
        <form className="text-center">
          <Image className="" src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width={72} height={58} />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Password</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="button">Sign in</button>
          <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
        </form>

        <hr />
        {/* <!-- Button trigger modal --> */}
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button>

        {/* <!-- Modal --> */}
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  </>
  )
}
