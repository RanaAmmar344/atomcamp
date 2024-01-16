import React from 'react'
import { BsArrowRight } from "react-icons/bs";

const Publication = () => {
  return (
    <>
    <div className="publication-header">
     <h1 className='text-white fw-bold text-center pt-5 ' >Publications</h1>
    </div>
    <h1 className=' fw-bold text-center pt-5' >atom insight</h1>
      <div className="row mx-5  mt-5"> 
      <div className="col-md-4 "> 
    <div className="public-card  " >
  <img height={500} src="https://www.atomcamp.com/wp-content/uploads/2023/01/ai-ecosystem-report-by-atomcamp-1447x2048.png"  alt="..."/>
    <p className=" fs-3 fw-bold mt-2">Artificial Intelligence <br /> Ecosystem in Pakistan</p>
</div>
    </div>
      <div className="col-md-4 "> 
    <div className="public-card  " >
  <img height={500} src="https://www.atomcamp.com/wp-content/uploads/2023/03/data-science-ecosystem.png"  alt="..."/>
    <p className=" fs-3 fw-bold mt-2">Data Science <br /> EcoSystem</p>
</div>
    </div>
      <div className="col-md-4 "> 
    <div className="public-card  " >
  <img height={500} src="https://www.atomcamp.com/wp-content/uploads/2023/05/healthcare-analytics-report-atomcmap.png"  alt="..."/>
    <p className=" fs-3 fw-bold mt-2">HealthCare Analytics <br /> Report AtomCmap</p>
</div>
    </div>
      </div>
      <h1 className=' fw-bold text-center pt-5 mt-5 ' >atom conversations</h1>
      <div className="row mx-5">
      <div className="col-md-6 "> 
    <div className="public-card-2  " >
  <img  width={500} className='public-card-img' src="https://www.atomcamp.com/wp-content/uploads/2023/07/Ahmad-Anis-632-atomconversations.png"  alt="..."/>
    <p className=" fs-5  fw-bold mt-2">Ahmad Anis: Exploring the Art & Science of <br />Machine Learning</p>
    <p>4th July, 2023</p>
    <p className='fw-bold'> Read Artical <BsArrowRight /></p>
</div>
    </div>
      <div className="col-md-6 "> 
    <div className="public-card-2  " >
  <img  width={500} className='public-card-img' src="https://www.atomcamp.com/wp-content/uploads/2023/06/Mubashar-632-atomconversations.png"  alt="..."/>
    <p className=" fs-5  fw-bold mt-2">Mubashar Awan: Navigating the Data Science <br /> Landscape</p>
    <p>4th July, 2023</p>
    <p className='fw-bold'> Read Artical <BsArrowRight /></p>
</div>
    </div>

      </div>
      <div className="row mx-5  ">
      <div className="col-md-6 "> 
    <div className="public-card-2  " >
  <img  width={500} className='public-card-img' src="https://www.atomcamp.com/wp-content/uploads/2023/05/Furqan-Afzal-Banner-632.png"  alt="..."/>
    <p className=" fs-5  fw-bold mt-2">Dr. Furqan Afzal: On Creating AI tools to study <br /> Neuroscience</p>
    <p>22th July, 2023</p>
    <p className='fw-bold'> Read Artical <BsArrowRight /></p>
</div>
    </div>
      <div className="col-md-6 "> 
    <div className="public-card-2  " >
  <img  width={500} className='public-card-img' src="https://www.atomcamp.com/wp-content/uploads/2023/05/Arjumand-631.png"  alt="..."/>
    <p className=" fs-5  fw-bold mt-2">Dr. Arjumand Younus: Leveraging AI to foster <br /> Social Good</p>
    <p>12th July, 2023</p>
    <p className='fw-bold'> Read Artical <BsArrowRight /></p>
</div>
    </div>

      </div>
      <div className="row mx-5">
      <div className="col-md-6 "> 
    <div className="public-card-2  " >
  <img  width={500} className='public-card-img' src="https://www.atomcamp.com/wp-content/uploads/2023/05/Bushra-Anjum-Banner-632.png"  alt="..."/>
    <p className=" fs-5  fw-bold mt-2">Dr. Bushra Anjum: Breaking Barriers & Shaping <br /> Futures in Big Data</p>
    <p>10th July, 2023</p>
    <p className='fw-bold'> Read Artical <BsArrowRight /></p>
</div>
    </div>
      <div className="col-md-6 "> 
    <div className="public-card-2  " >
  <img  width={500} className='public-card-img' src="https://www.atomcamp.com/wp-content/uploads/2023/05/Fahad-Mirza.png"  alt="..."/>
    <p className=" fs-5  fw-bold mt-2">Fahad Mirza: On Unleashing your Curiosity to  <br />Decode your Data</p>
    <p>17th July, 2023</p>
    <p className='fw-bold'> Read Artical <BsArrowRight /></p>
</div>
    </div>

      </div>

    


     
    </>
  )
}

export default Publication
