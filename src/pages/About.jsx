import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import Footer from "../../components/Footer";

const About = () => {
  return (
    <>
    <div className="founder-div row m-5 p-5">
      <div className="col-md-6 mt-5">
        <h1 className=' comon-heading'>What is <span className='w-color'>atomcamp</span>? </h1>
        <p className='fw-normal fs-5' >We are a young ed-tech platform focused on  <span className='bg-yellow'>  Data Science and AI.  </span>We commenced operations in 2021. Since then, we have experienced a continuous upward trajectory, both within the ed-tech ecosystem and within our own team.<br/>We are a young ed-tech platform focused on Data Science and AI. We commenced operations in 2021. Since then, we have experienced a continuous upward trajectory, both within the ed-tech ecosystem and within our own team. 

Two years down the lane, we are proud to have a team of 35 employees, with the distinction of <span className='bg-yellow' > 75%  </span>of them being women. This remarkable achievement reflects the efforts of our founders, Dr. Naveed Iftikhar and Nida Mehmood, who have carefully curated this team with dedication.<br/> Our <span className='bg-yellow'>mission,</span>  focused on providing accessible and all-inclusive education in the fields of Data Science and AI, has witnessed exponential growth with each successive cohort of bootcamps. 

Through these training initiatives, we have nurtured a community of lifelong learners who not only contribute to the Data and AI ecosystem but have also honed the art of effective collaboration between diverse entities.

By offering immersive <span className='bg-yellow' >learning experiences, </span>  real-world projects, and personalized mentorship, atomcamp is dedicated to establishing a global community of Data Scientists and AI Professionals.</p>

      </div>
      <div className="col-md-6 d-flex text-center mt-5  ">
        <div className="row founder-co ">
          <div className="col-md-6">
          <div className=' border border-3 rounded px-3'>
          <img width={200} src="https://www.atomcamp.com/wp-content/uploads/2024/01/Naveed-Iftikhar.jpeg" alt="" />
          <h5 className='fw-bold mt-2'>Dr Naveed Iftikhar</h5>
          <p className='bg-yellow'>Co-founder</p>
        </div>
          </div>
          <div className="col-md-6">
          <div  className=' border border-3 rounded px-3'>
          <img width={200}  src="https://www.atomcamp.com/wp-content/uploads/2023/12/Nida-Mahmood-scaled-1.jpg" alt="" />
          <h5 className='fw-bold mt-2'>Nida Mahmood</h5>
          <p className='bg-yellow'>Co-founder</p>
        </div>
          </div>
        
        </div>
      </div>
    </div>

    {/* ------------------------------ Section 2----------------------------------------------- */}

     <div className="meet-team">
      <div className="row">
        <div className="col-md-3 m-5 p-5">
          <h1 className='comon-heading  meet-heading fs-2 text-white' >  Meet our incredible <span className='w-color' >team. </span> </h1>
        </div>
        <div className="col-md-6">

        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className='d-flex  mt-5' > 
      <div className="card-2 text-center " >
  <img src="https://www.atomcamp.com/wp-content/uploads/2023/12/Nida-Mahmood-scaled-1.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Nida Mahmood </h5>
    <p className="card-text">Ai Engineer</p>
    
  </div>
</div>
      <div className="card-2 text-center" >
  <img src="https://www.atomcamp.com/wp-content/uploads/2024/01/Safa-Baig-1.jpeg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Safa Baig</h5>
    <p className="card-text">wen Dev</p>
    
  </div>
</div>
      <div className="card-2 text-center" >
  <img src="https://www.atomcamp.com/wp-content/uploads/2024/01/Naveed-Iftikhar.jpeg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Naveed Iftikhar</h5>
    <p className="card-text">Co-founder</p>
  </div>
</div>
</div>
    </div>
    <div className="carousel-item">
      <div className='d-flex  mt-5' > 
      <div className="card-2 text-center" >
  <img src="https://www.atomcamp.com/wp-content/uploads/2023/12/Rida-mughess-1.jpg.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Rida Mughess</h5>
    <p className="card-text">Full Stack</p>

  </div>
</div>
      <div className="card-2 text-center" >
  <img src="https://www.atomcamp.com/wp-content/uploads/2024/01/Ayman-rehan-atomcamp.jpeg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Ayman Rehan</h5>
    <p className="card-text">Account officer</p>
  </div>
</div>
      <div className="card-2 text-center" >
  <img src="https://www.atomcamp.com/wp-content/uploads/2023/12/zumer-zia-1.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Zumeer Zia</h5>
    <p className="card-text">CEO</p>
    
  </div>
</div>
</div>
    </div>
    <div className="carousel-item">
    <div className='d-flex  mt-5' > 
      <div className="card-2 text-center" >
  <img src="https://www.atomcamp.com/wp-content/uploads/2024/01/Maria-Qitbiya.jpeg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Maria Qitbiya</h5>
    <p className="card-text">Business Developer</p>
  </div>
</div>
      <div className="card-2 text-center" >
  <img src="https://www.atomcamp.com/wp-content/uploads/2023/12/Usman-Rashid-1.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Usman Rashid</h5>
    <p className="card-text">Software Engineer</p>

  </div>
</div>
      <div className="card-2 text-center" >
  <img src="https://www.atomcamp.com/wp-content/uploads/2023/09/Sidra-cheema-Trainer.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Sidra Cheema</h5>
    <p className="card-text">Ml Engineer</p>
    
  </div>
</div>
</div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  


      
   </div>
</div>
    
 
        {/* -------------------- Section-3-------------------------- */}
        <h1 className='gateway m-5 p-5' >A gateway to unlocking <span className="bg-yellow" > opportunities </span>  with <span className='w-color' > Artificial Intelligence</span>  & <span className='w-color' > Data Science</span>.</h1>
        
        <div className="row pb-5 mb-5">
          <div className="col-md-6">
            <p className='text-white fw-normal fs-5 p-5 m-5 lh-2 ' >By providing accessible education in data science and AI, we aspire to cultivate a community of lifelong learners who not only embrace the digital age but also shape its trajectory.
            <br/>

Through immersive learning experiences, real-world projects, and personalized mentorship, atomcamp is building a global community in data-driven excellence.</p>
          </div>
          <div className="col-md-6 mb-5">
            <img src="https://www.atomcamp.com/wp-content/uploads/elementor/thumbs/NIC-Fasialabad-event-atomcamp-4-qbo8lz4ser1d28g7bkviuuec6nfx8c3tf6m06sst5g.jpg" alt="" />
          </div>
        </div>
        
        
        </div>
{/* -------------------------------Secton-4------------------------------- */}

<div className="sponser">

        <div className="row mx-5 p-5   ">
          <div className="col-md-5 sponser-col-1 mt-5">
            <h1 className='fw-bold text-secondary-emphasis education' >Our <span className='bg-yellow'  > educational </span>  partners.</h1>
           
          </div>
          <div className="col-md-6 mt-5  sponser-col-3 pt-2 mx-3">
            <div className="row mb-5 ">
              <div className="col">
                <img className='mx-1 sponser-logo' src="https://www.atomcamp.com/wp-content/uploads/2023/12/LUMS-Logo-removebg-preview.png" width={150} alt="" />
              </div>
              <div className="col">
                <img className='mx-1 sponser-logo' src="https://www.atomcamp.com/wp-content/uploads/2023/12/Updated-ITU-logo-removebg-preview-768x255.png" height={50} width={150} alt="" />
              </div>
              <div className="col">
                <img className='mx-1 sponser-logo' src="https://www.atomcamp.com/wp-content/uploads/2023/12/Fast-logo.png" width={150} alt="" />
              </div>
              
              
            </div>
            <div className="row   mb-5">
              <div className="col">
                <img className='mx-1 sponser-logo' src="https://www.atomcamp.com/wp-content/uploads/2023/12/nust-full-logo-removebg-preview.png" width={150} alt="" />
              </div>
              <div className="col">
                <img className='mx-1 sponser-logo ' src="https://www.atomcamp.com/wp-content/uploads/2023/12/learner-republic-removebg-preview.png"  width={150} alt="" />
              </div>
              
              <div className="col">
                <img className='mx-1 sponser-logo' src="https://www.atomcamp.com/wp-content/uploads/2024/01/logo-imsciences-removebg-preview-1.png" width={150} alt="" />
              </div>
             
            </div>
            
          </div>
        </div>

      </div>




        {/* ----------------------- Secton-5 ------------------------------- */}

        <div className="workforce3">

        <div className="row   ">
          <div className="col-md-3 workforce-col-11 text-white m-5 p-5">
            <p className='fw-bold fs-1 mt-5 remarkable pt-5'  > Hello from remarkable <span className='w-color' >trainers</span>.</p>
          
          </div>
        
          <div className="col-md-8 mb-5 mt-3 ">
            <div className="members-2"> 
            <div className="album  "> 
  <img width={130} className='team-img'  src="https://www.atomcamp.com/wp-content/uploads/2024/01/Naveed-Iftikhar-768x771.jpeg " alt="" />
  <h5>Naveed Iftikhar</h5>
  <FaLinkedin className='fs-4 fw-bold' />

  </div>
  
            <div className="album  "> 
  <img width={130}  className='team-img'  src="https://www.atomcamp.com/wp-content/uploads/2023/09/Sidra-cheema-Trainer.png" alt="" />
  <h5>Sidra Cheema</h5>
  <FaLinkedin className='fs-4 fw-bold' />

  </div>
            <div className="album  "> 
  <img width={130}  className='team-img'  src="https://www.atomcamp.com/wp-content/uploads/2023/12/Usman-Rashid-1.png" alt="" />
  <h5>Hussain Shahbaz</h5>
  <FaLinkedin className='fs-4 fw-bold' />

  </div>
            <div className="album   "> 
  <img width={130}  className='team-img'  src="https://www.atomcamp.com/wp-content/uploads/2023/12/husain-khawaja.png" alt="" />
  <h5>Yahya Bajwa</h5>
  <FaLinkedin className='fs-4 fw-bold' />

  </div>

  <div className="album  "> 
  <img width={130} className='team-img'  src="https://www.atomcamp.com/wp-content/uploads/2024/01/Naveed-Iftikhar-768x771.jpeg " alt="" />
  <h5>Naveed Iftikhar</h5>
  <FaLinkedin className='fs-4 fw-bold' />

  </div>
  
            <div className="album  "> 
  <img width={130}  className='team-img'  src="https://www.atomcamp.com/wp-content/uploads/2023/12/3H8A2605-scaled.jpg" alt="" />
  <h5>hasan Cheema</h5>
  <FaLinkedin className='fs-4 fw-bold' />

  </div>
            <div className="album  "> 
  <img width={130}  className='team-img'  src="https://www.atomcamp.com/wp-content/uploads/2024/01/Hussain-Shahbaz-2045x2048.jpg" alt="" />
  <h5>Hussain Shahbaz</h5>
  <FaLinkedin className='fs-4 fw-bold' />

  </div>
            <div className="album   "> 
  <img width={130}  className='team-img'  src="https://www.atomcamp.com/wp-content/uploads/2023/12/Nida-Mahmood-scaled-1.jpg" alt="" />
  <h5>Nida Mahmood</h5>
  <FaLinkedin className='fs-4 fw-bold' />

  </div>
    

  <div className="album  "> 
  <img width={130} className='team-img'  src="https://www.atomcamp.com/wp-content/uploads/2024/01/Safa-Baig-1.jpeg " alt="" />
  <h5>Safa Baig</h5>
  <FaLinkedin className='fs-4 fw-bold' />

  </div>
  
            <div className="album  "> 
  <img width={130}  className='team-img'  src="https://www.atomcamp.com/wp-content/uploads/2023/12/Rida-mughess-1.jpg.png" alt="" />
  <h5>Rida mughess</h5>
  <FaLinkedin className='fs-4 fw-bold' />

  </div>
            <div className="album  "> 
  <img width={130}  className='team-img'  src="https://www.atomcamp.com/wp-content/uploads/2024/01/Ayman-rehan-atomcamp.jpeg" alt="" />
  <h5>Ayman rehan</h5>
  <FaLinkedin className='fs-4 fw-bold' />

  </div>
            <div className="album   "> 
  <img width={130}  className='team-img'  src="https://www.atomcamp.com/wp-content/uploads/2023/12/zumer-zia-1.png" alt="" />
  <h5>zumer zia</h5>
  <FaLinkedin className='fs-4 fw-bold' />

  </div>
    
  
          </div>
      
          </div>
           
        </div>
        <div className="div"> </div>
  <Footer/>
      </div>
        

    </>
  )
}

export default About
