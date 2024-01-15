// import React from 'react'
import { FaArrowDown } from "react-icons/fa6";
import AutoTypeText from '../../components/AutoTypeText';
import { FaLinkedin } from "react-icons/fa";
import React, { useEffect, useState } from 'react';
import Footer from "../../components/Footer";



const Home = () => {
  const Counter = ({ endValue }) => {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < endValue) {
            return prevCount + 1;
          } else {
            clearInterval(interval); // Stop counting when reaching the end value
            return prevCount;
          }
        });
      }, 50); // Adjust the interval as needed
  
      return () => clearInterval(interval); // Cleanup on component unmount
    }, [endValue]);
  
    return <h1 className='text-side-col'>{count}%</h1>;
  };

  return (
    <>
      <div className="home">
        {/* <img src="https://www.atomcamp.com/wp-content/uploads/2023/12/main-banner.png" className='home-bg' alt="" /> */}
      
      <div className="row home-res  mx-5">
        <div className="col-md-8 home-col1 ">
          <p className=' home-heading'>Data Science & AI Upskilling <br/>  for  </p> <span className='auto-type  ' > <AutoTypeText />  </span> 
          <a type="button" className="home-btn mx-5 fw-bold ps-3 mt-4">Start Learing <FaArrowDown className='mx-2 fw-bold' /></a>
        </div>
        <div className="col-md-4">
          <div className="home-side-text fw-bold  ">
            <h1 className='text-side-col ' > <Counter endValue={70} /></h1>
            <p className='p-color'>Job Placement</p>
            <h1 className='text-side-col '> <Counter endValue={45} /></h1>
            <p className='p-color'>Women Participation</p>
            <h1 className='text-side-col'><Counter endValue={30} /></h1>
            <p className='p-color'>Corporate Clients</p>
            <h1 className='text-side-col '><Counter endValue={2000} /></h1>
            <p className='p-color'>People Trained in Bootcamps</p>
            <h1 className='text-side-col '> <Counter endValue={200} /></h1>
            <p className='p-color'>Soft Skills Trainings</p>

          </div>
        </div>
      </div>

      </div>
      {/* ------------sponsers---------- */}

      
      <div className="sponser">

        <div className="row mx-5 p-5   ">
          <div className="col-md-5 sponser-col-1 mt-5">
            <h1 className='fw-bold text-secondary-emphasis  ' >Delivering <span className='bg-yellow'>trainings</span>  for tech, government, startups.</h1>
            <p className=' fs-4 mt-4'>Helping them push towards a data-driven future.</p>
          </div>
          <div className="col-md-6 mt-5  sponser-col-2 pt-2 mx-3">
            <div className="row mb-5 ">
              <div className="col">
                <img className='mx-1 sponser-logo' src="https://www.atomcamp.com/wp-content/uploads/2023/12/careem-logo.webp" width={110} alt="" />
              </div>
              <div className="col">
                <img className='mx-1 sponser-logo' src="https://www.atomcamp.com/wp-content/uploads/2023/12/arca-01.png" width={110} alt="" />
              </div>
              <div className="col">
                <img className='mx-1 sponser-logo' src="https://www.atomcamp.com/wp-content/uploads/2023/12/interloop-logo.webp" width={110} alt="" />
              </div>
              <div className="col">
                <img className='mx-1 sponser-logo' src="https://www.atomcamp.com/wp-content/uploads/2023/12/adam-smith-logo-removebg-preview.png" width={110} alt="" />
              </div>
              
            </div>
            <div className="row   mb-5">
              <div className="col">
                <img className='mx-1 sponser-logo' src="https://www.atomcamp.com/wp-content/uploads/2023/12/tamimi-group-logo-removebg-preview.png" width={110} alt="" />
              </div>
              <div className="col">
                <img className='mx-1 sponser-logo mt-4' src="https://www.atomcamp.com/wp-content/uploads/2023/12/seeland-logo.webp" height={40} width={110} alt="" />
              </div>
              
              <div className="col">
                <img className='mx-1 sponser-logo' src="https://www.atomcamp.com/wp-content/uploads/2023/12/khaadi-logo.webp" width={110} alt="" />
              </div>
              <div className="col">
                <img className='mx-1 sponser-logo' src="https://www.atomcamp.com/wp-content/uploads/2023/12/Packages-group-1.png" width={110} alt="" />
              </div>
            </div>
            <div className="row mb-5">
              <div className="col">
                <img className='mx-1 sponser-logo' src="https://www.atomcamp.com/wp-content/uploads/2023/12/Planning-Commission-of-Pakistan-removebg-preview.png" width={110} alt="" />
              </div>
              <div className="col">
                <img className='mx-1 sponser-logo' src="https://www.atomcamp.com/wp-content/uploads/2023/12/Logo_of_Ministry_of_Digital_Development_and_Transportation_of_Azerbaijan.svg-1.png" width={110} alt="" />
              </div>
              
              <div className="col">
                <img className='mx-1 sponser-logo1' src="https://www.atomcamp.com/wp-content/uploads/2023/12/undp-logo-removebg-preview-1.webp"  height={100} width={80} alt="" />
              </div>
              <div className="col">
                <img className='mx-1 sponser-logo' src="https://www.atomcamp.com/wp-content/uploads/2023/12/jazz-logo.webp" width={110} alt="" />
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="workforce">

        <div className="row mx-5">
          <div className="col-md-5 workforce-col-1">
            <p className='fw-bold fs-1'  >  <span className='w-color' > Bridging skill gaps  </span> globally<span className='w-color ' >.</span></p>
            <p className='fw-normal fs-5 lh-base'> Empowering the workforce from Neom city to Silicon valley.  </p>
          </div>
          <div className="col-md-6 workforce-col-2  ">
          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
<div className="d-flex  mt-5 "> 
      <img className='mx-3' src="https://www.atomcamp.com/wp-content/uploads/2023/11/3-1024x1024.png "  width={330} height={300} alt="..."/>
      <img src="https://www.atomcamp.com/wp-content/uploads/2023/11/7-1024x1024.png"  width={300} height={300} alt="..."/>
      </div>
    </div>
    
    <div className="carousel-item">
      <div className="d-flex  mt-5"> 
      <img className='mx-3' src="https://www.atomcamp.com/wp-content/uploads/2023/11/5-1024x1024.png"  width={330} height={300}  alt="..."/>
      <img src="https://www.atomcamp.com/wp-content/uploads/2023/11/1-1024x1024.png"  width={330} height={300}  alt="..."/>
      </div>
    </div>
    <div className="carousel-item  mt-5">
      <div className="d-flex">  
      <img className='mx-3' src="https://www.atomcamp.com/wp-content/uploads/2023/11/1-1024x1024.png"  width={300} height={300}  alt="..."/>
      <img src="https://www.atomcamp.com/wp-content/uploads/2023/11/6-1024x1024.png"  width={300} height={300}  alt="..."/>
      </div>
    </div>
  </div>
  
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>




          </div>
        </div>

      </div>

      <div className="learning m-5 p-5">
        <h1 className='fw-bold learning-heading ' >Learning <span className='bg-yellow' > begins </span>here<span className='bg-yellow'>.</span></h1>
        <p className='fw-bold fs-5'>Scale up and stay ahead!</p>

        <div className="row">
        <div className="card" >
  <img className='px-3 rounded-1'  src="https://www.atomcamp.com/wp-content/uploads/2024/01/UPSKILL-Program-Updated.jpeg"  alt="..."/>
  <div className="card-body">
    <h5 className="card-title fw-bold text-center ">UpSkill Khyber Pakhtunkhwa Program</h5>
    <div className="row">
      <div className="col-md-8 lh-sm fw-normal fs-6">
        <p>. 15 January </p>
        <p>. 4 months </p>
        <p>. In-Person & Live  </p>
      </div>
      <div className="col-md-4 card-free-icon ">
         <p className='card-free fw-bold  p-2 text-center' >Free</p>
      </div>
    </div>
  </div>
</div>
<div className="card" >
  <img className='px-3 rounded-1'  src="https://www.atomcamp.com/wp-content/uploads/2023/11/05918a56-ccfb-49de-8bb9-a43e410c2ced-1.jpg"  alt="..."/>
  <div className="card-body">
    <h5 className="card-title fw-bold text-center ">UpSkill Khyber Pakhtunkhwa Program</h5>
    <div className="row">
      <div className="col-md-8 lh-sm fw-normal fs-6">
        <p>. 15 January </p>
        <p>. 4 months </p>
        <p>. In-Person & Live  </p>
      </div>
      <div className="col-md-4 card-free-icon ">
         <p className='card-free fw-bold  p-2 text-center' >Free</p>
      </div>
    </div>
  </div>
</div>
        <div className="card" >
  <img className='px-3 rounded-1'  src="https://www.atomcamp.com/wp-content/uploads/2024/01/UPSKILL-Program-Updated.jpeg"  alt="..."/>
  <div className="card-body">
    <h5 className="card-title fw-bold text-center ">UpSkill Khyber Pakhtunkhwa Program</h5>
    <div className="row">
      <div className="col-md-8 lh-sm fw-normal fs-6">
        <p>. 15 January </p>
        <p>. 4 months </p>
        <p>. In-Person & Live  </p>
      </div>
      <div className="col-md-4 card-free-icon ">
         <p className='card-free fw-bold  p-2 text-center' >Free</p>
      </div>
    </div>
  </div>
</div>
        <div className="card" >
  <img className='px-3 rounded-1'  src="https://www.atomcamp.com/wp-content/uploads/2023/12/safas-course-posters.png"  alt="..."/>
  <div className="card-body">
    <h5 className="card-title fw-bold text-center ">UpSkill Khyber Pakhtunkhwa Program</h5>
    <div className="row">
      <div className="col-md-8 lh-sm fw-normal fs-6">
        <p>. 15 January </p>
        <p>. 4 months </p>
        <p>. In-Person & Live  </p>
      </div>
      <div className="col-md-4 card-free-icon ">
         <p className='card-free fw-bold  p-2 text-center' >Free</p>
      </div>
    </div>
  </div>
</div>
  

        </div>

        <h1 className='fw-bold mt-5 pt-5 ' >Recommended for <span className='bg-yellow' >YOU</span>.</h1>
        <p className='fw-bold fs-5'>To kickstart your learning, check out these free recorded courses</p>

        <div className="row">
        <div className="card" >
  <img className='px-3 rounded-1'  src="https://www.atomcamp.com/wp-content/uploads/2023/12/Diversity-and-Inclusion.png"  alt="..."/>
  <div className="card-body">
    <h5 className="card-title fw-bold text-center ">Diversity and Inclusion</h5>
    <div className="row">
      <div className="col-md-8 lh-sm fw-normal fs-6">
        <p>. 15 January </p>
        <p>. 4 months </p>
        <p>. In-Person & Live  </p>
      </div>
      <div className="col-md-4 card-free-icon ">
         <p className='card-free fw-bold  p-2 text-center' >Free</p>
      </div>
    </div>
  </div>
</div>
<div className="card" >
  <img className='px-3 rounded-1'  src="https://www.atomcamp.com/wp-content/uploads/2023/12/Python-.png"  alt="..."/>
  <div className="card-body">
    <h5 className="card-title fw-bold text-center ">Python for beginners</h5>
    <div className="row">
      <div className="col-md-8 lh-sm fw-normal fs-6">
        <p>. 15 January </p>
        <p>. 4 months </p>
        <p>. In-Person & Live  </p>
      </div>
      <div className="col-md-4 card-free-icon ">
         <p className='card-free fw-bold  p-2 text-center' >Free</p>
      </div>
    </div>
  </div>
</div>
        <div className="card" >
  <img className='px-3 rounded-1'  src="https://www.atomcamp.com/wp-content/uploads/2023/12/LinkedIn.png"  alt="..."/>
  <div className="card-body">
    <h5 className="card-title fw-bold text-center ">Python for beginners</h5>
    <div className="row">
      <div className="col-md-8 lh-sm fw-normal fs-6">
        <p>. 15 January </p>
        <p>. 4 months </p>
        <p>. In-Person & Live  </p>
      </div>
      <div className="col-md-4 card-free-icon ">
         <p className='card-free fw-bold  p-2 text-center' >Free</p>
      </div>
    </div>
  </div>
</div>
        <div className="card" >
  <img className='px-3 rounded-1'  src="https://www.atomcamp.com/wp-content/uploads/2023/12/Career-Development.png"  alt="..."/>
  <div className="card-body">
    <h5 className="card-title fw-bold text-center ">Career development</h5>
    <div className="row">
      <div className="col-md-8 lh-sm fw-normal fs-6">
        <p>. 15 January </p>
        <p>. 4 months </p>
        <p>. In-Person & Live  </p>
      </div>
      <div className="col-md-4 card-free-icon ">
         <p className='card-free fw-bold  p-2 text-center' >Free</p>
      </div>
    </div>
  </div>
</div>
  

        </div>

      </div>
      {/* -------------------------------- */}

      <div className="workforce2">

        <div className="row mx-5">
          <div className="col-md-4 workforce-col-11 text-white mt-5 pt-5">
            <p className='fw-bold fs-1'  > Learn from the best, <span className='w-color' >become</span>   the. </p>
            <p className='fw-normal fs-5 lh-base'> Chat and network with industry leaders. <span className='w-color' >Discover emerging technologies</span>  in Data and AI. </p>
          </div>
          <div className="col-md-8 members   ">
            <div className="album  mx-3 "> 
  <img width={130} className='team-img'  src="https://www.atomcamp.com/wp-content/uploads/2024/01/Naveed-Iftikhar-768x771.jpeg " alt="" />
  <h5>Naveed Iftikhar</h5>
  <FaLinkedin className='fs-4 fw-bold' />

  </div>
            <div className="album mx-3  "> 
  <img width={130}  className='team-img'  src="https://www.atomcamp.com/wp-content/uploads/2023/09/Sidra-cheema-Trainer.png" alt="" />
  <h5>Sidra Cheema</h5>
  <FaLinkedin className='fs-4 fw-bold' />

  </div>
            <div className="album  mx-3 "> 
  <img width={130}  className='team-img'  src="https://www.atomcamp.com/wp-content/uploads/2023/12/Usman-Rashid-1.png" alt="" />
  <h5>Hussain Shahbaz</h5>
  <FaLinkedin className='fs-4 fw-bold' />

  </div>
            <div className="album mx-3  "> 
  <img width={130}  className='team-img'  src="https://www.atomcamp.com/wp-content/uploads/2023/12/husain-khawaja.png" alt="" />
  <h5>Yahya Bajwa</h5>
  <FaLinkedin className='fs-4 fw-bold' />

  </div>



          </div>
        </div>

      </div>
      <div className="mastering">
        <div className="row">
          <div className="col-md-12 m-5 ">
            <p className='fw-bold fs-1'>Step up your game by <span className='bg-yellow' >mastering</span>  these tools.</p>
          </div>
          <div className="col-md-12  logo-grid  d-flex mx-5">
            <div className="mastering-logo">
              <img width={150} src="https://www.atomcamp.com/wp-content/uploads/2023/12/ChatGPT-Logo-1-1024x576.png" alt="" />
            </div>
            <div className="mastering-logo">
              <img width={150} src="https://www.atomcamp.com/wp-content/uploads/2023/12/matplotlib-01.png" alt="" />
            </div>
            <div className="mastering-logo">
              <img width={150} src="https://www.atomcamp.com/wp-content/uploads/2023/12/Pandas_logo.svg.png" alt="" />
            </div>
            <div className="mastering-logo">
              <img width={150} src="https://www.atomcamp.com/wp-content/uploads/2023/12/seaborn-01.png" alt="" />
            </div>
            <div className="mastering-logo">
              <img width={150} src="https://www.atomcamp.com/wp-content/uploads/2023/12/seaborn-01-2048x586.png" alt="" />
            </div>
            <div className="mastering-logo">
              <img width={150} src="https://www.atomcamp.com/wp-content/uploads/2023/12/matplotlib-01-2048x492.png" alt="" />
            </div>
          </div>
          <div className="col-md-12 d-flex  logo-grid mx-5 mt-3">
            <div className="mastering-logo">
              <img width={150} src="https://www.atomcamp.com/wp-content/uploads/2023/12/tableau-logo-01-1024x432.png" alt="" />
            </div>
            <div className="mastering-logo">
              <img width={150} src="https://www.atomcamp.com/wp-content/uploads/2023/12/numpy-tools-01-1024x432.png" alt="" />
            </div>
            <div className="mastering-logo">
              <img width={150} src="https://www.atomcamp.com/wp-content/uploads/2023/12/powerbi-tool.webp" alt="" />
            </div>
            <div className="mastering-logo">
              <img width={150} src="https://www.atomcamp.com/wp-content/uploads/2023/12/mysql-tool.webp" alt="" />
            </div>
            <div className="mastering-logo">
              <img width={150} src="https://www.atomcamp.com/wp-content/uploads/2023/12/python-logo-1.png" alt="" />
            </div>
            <div className="mastering-logo">
              <img width={150} src="https://www.atomcamp.com/wp-content/uploads/2023/12/ChatGPT-Logo-1-1024x576.png" alt="" />
            </div>
          </div>
        </div>


      </div>

      {/* ------------------------------------------- */}

      <div className="feedback mt-5  "> 
        <div className="row feadback-header m-5 p-5 lh-1 ">
          <div className="">
          <h1 className="w-color fw-bold fs-1 ">Words are cool,</h1>
<p className=" fw-bold fs-1 text-white" >but have you met our incredible results?</p>
          </div>


<div className="col-md-12 mt-5 all-feedback  d-flex">
  <div className="feadback-cards px-3  mx-2">
    <div className="feedback-card-header">
      <img className="feadback-card-img" src="https://www.atomcamp.com/wp-content/uploads/2023/12/Farwa-zahid.jpg" alt="" />
      <div className="feadback-text  ">
      <h5 className="fw-bold ">Farwa Zahid</h5>
      <p className="fb-position  ">Data Science Traniee</p>
      </div>
    
    </div>
      <p className="fb-career  fw-bold fs-5"> <span className="feed-p"> Internship to a Full time career </span> </p>

      <p className="fw-bold fs-4 text-start text-wrap"> <span className="feed-p"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, modi. Exercitationem sequi cupiditate vitae eos facilis consequuntur mollitia quis repellendus alias non. Fuga vero dolorem quo voluptates tempore ad voluptate! </span>  </p>
  </div>
  <div className="feadback-cards px-3 ">
    <div className="feedback-card-header">
      <img className="feadback-card-img" src="https://www.atomcamp.com/wp-content/uploads/2023/12/Haris-Dilawar.jpg" alt="" />
      <div className="feadback-text  ">
      <h5 className="fw-bold ">Rana Amir</h5>
      <p className="fb-position  ">Mern Stack </p>
      </div>
    
    </div>
    <p className="fb-career  fw-bold fs-5"> <span className="feed-p"> Internship to a Full time career </span> </p>

<p className="fw-bold fs-4 text-start text-wrap"> <span className="feed-p"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, modi. Exercitationem sequi cupiditate vitae eos facilis consequuntur mollitia quis repellendus alias non. Fuga vero dolorem quo voluptates tempore ad voluptate! </span>  </p>
  </div>
  <div className="feadback-cards px-3  mx-2">
    <div className="feedback-card-header">
      <img className="feadback-card-img" src="https://www.atomcamp.com/wp-content/uploads/2023/12/Mehroz-Anwar.jpeg" alt="" />
      <div className="feadback-text  ">
      <h5 className="fw-bold ">M Zain</h5>
      <p className="fb-position  ">Python Dev</p>
      </div>
    
    </div>
    <p className="fb-career  fw-bold fs-5"> <span className="feed-p"> Internship to a Full time career </span> </p>

<p className="fw-bold fs-4 text-start text-wrap"> <span className="feed-p"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, modi. Exercitationem sequi cupiditate vitae eos facilis consequuntur mollitia quis repellendus alias non. Fuga vero dolorem quo voluptates tempore ad voluptate! </span>  </p>
  </div>
  <div className="feadback-cards px-3 ">
    <div className="feedback-card-header">
      <img className="feadback-card-img" src="https://www.atomcamp.com/wp-content/uploads/2023/12/Hajra-Anwar.jpg" alt="" />
      <div className="feadback-text  ">
      <h5 className="fw-bold ">Fatima</h5>
      <p className="fb-position  ">HR Manager </p>
      </div>
    
    </div>
    <p className="fb-career  fw-bold fs-5"> <span className="feed-p"> Internship to a Full time career </span> </p>

<p className="fw-bold fs-4 text-start text-wrap"> <span className="feed-p"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, modi. Exercitationem sequi cupiditate vitae eos facilis consequuntur mollitia quis repellendus alias non. Fuga vero dolorem quo voluptates tempore ad voluptate! </span>  </p>
  </div>
  
</div>

        </div>

      </div>

      {/* ------------------------------------------ */}

      <div className="joinus">

        <div className="row d-flex   ">
          <div className="col-md-6 m-5 p-5 joinus-main ">
            <h1 className="w-color  fw-bold">Ditch the doubt,</h1>
            <h1 className="text-white">join atomcamp.</h1>
            <p className="fw-bold  text-white"> <span className=" joinus-p"> atom's community is an ecosystem where learners come together to share knowledge and grow collectively in Data Science and Artificial Intelligence. </span> </p>
          </div>
          <div className="col-md-4">
          <a type="button" className="joinus-btn fw-bold ps-2 ">Join Now <FaArrowDown className='mx-2 fw-bold' /></a>

          </div>
        </div>
        <Footer/>

      </div>


    </>
  )
}

export default Home
