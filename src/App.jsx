import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Header from "./component/Information"
import Expereince from "./component/Expereince"
import Education from './component/Education';
import Skills from './component/Skills';

function App() {

  return (
    <>
    <div className="container shadow-lg rounded mt-5 mb-5 p-5 bg-dark border">
        <Header />
        <div className="row">
          <div className="col-md-8 mt-3">
            <Expereince />
          </div>
          <div className="col-md-4  mt-3"> 
            <Education />
            <Skills />

          </div>
        </div>
       
    
    </div>
    <div class="bg-dark p-2 pl-5 pr-5  mt-2 bottom ">...</div>
    </>
  )
}

export default App
