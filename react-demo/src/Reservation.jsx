//Reservation.jsx
import {motion} from 'framer-motion' ;
import {useState} from 'react' ;
import WeekCalendar from './WeekCalendar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbaro from './Navbar';
import Footer from './footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useCallback } from 'react';



function Reservation() {

    const [currentSection, setCurrentSection] = useState('');
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [userInfo, setUserInfo] = useState('');
    const[isOpenSpecs, setIsOpenSpecs] = useState(true);
    const[isOpenDerma, setIsOpenDerma] = useState(false);
    const[isOpenDermaDrs, setIsOpenDermaDrs] = useState(false);
    const[isOpenDent, setIsOpenDent] = useState(false);
    const[isOpenDentDrs, setIsOpenDentDrs] = useState(false);
    const[isOpenNutr, setIsOpenNutr] = useState(false);
    const[isOpenNutrDrs, setIsOpenNutrDrs] = useState(false);
    const[isOpenPed, setIsOpenPed] = useState(false);
    const[isOpenPedDrs, setIsOpenPedDrs] = useState(false);
    const[isOpenDate, setIsOpenDate] = useState(false);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const nav = useNavigate();


    useEffect(() => {
        axios
          .get("http://localhost:8800/check-login-status")
          .then((response) => {
            if (response.data.authenticated) {
                const { name, id, phoneNumber } = response.data.user;
                setUserInfo({
                  name: name,
                  id: id,
                  phoneNumber: phoneNumber,
                });
                setIsLoading(false);
            } else {
              // User is not authenticated, navigate to login page
              setTimeout(() => {
                // Use your navigation method to redirect to the login page
                nav("/login");
              }, 1000);
            }
          })
          .catch((error) => {
            console.error("Error checking authentication status:", error);
          });
      }, []);



    
    const handleDoctorSelection = (doctorName) => {
            setSelectedDoctor(doctorName);
        
        
    };

    const toggleDerma = () => {
        setCurrentSection('DERMA');
        setIsOpenDerma(!isOpenDerma);
        setIsOpenDent(false); // Close section B when opening section A
        setIsOpenSpecs(false);
        setIsOpenDentDrs(false);
        setIsOpenDermaDrs(false);
        setIsOpenDate(false);
        setIsOpenNutr(false);
        setIsOpenNutrDrs(false);


    };

    const toggleDent = () => {
        setCurrentSection('DENT');
        setIsOpenDent(!isOpenDent);
        setIsOpenDerma(false); // Close section A when opening section B
        setIsOpenSpecs(false);
        setIsOpenDentDrs(false);
        setIsOpenDermaDrs(false);
        setIsOpenDate(false);
        setIsOpenNutr(false);
        setIsOpenNutrDrs(false);
        setIsOpenPed(false);
        setIsOpenPedDrs(false);
    };

    const togglePed = () => {
        setCurrentSection('PED');
        setIsOpenPed(!isOpenDent);
        setIsOpenDerma(false);
        setIsOpenDent(false); // Close section A when opening section B
        setIsOpenSpecs(false);
        setIsOpenDentDrs(false);
        setIsOpenDermaDrs(false);
        setIsOpenDate(false);
        setIsOpenPedDrs(false);
        setIsOpenNutr(false);
        setIsOpenNutrDrs(false);

    };

    const toggleNutr = () => {
        setCurrentSection('NUTR');
        setIsOpenNutr(!isOpenNutr);
        setIsOpenDerma(false); // Close section A when opening section B
        setIsOpenSpecs(false);
        setIsOpenDentDrs(false);
        setIsOpenDermaDrs(false);
        setIsOpenDate(false);
        setIsOpenDerma(false);
        setIsOpenNutrDrs(false);
        setIsOpenPed(false);
        setIsOpenPedDrs(false);
    };

    const toggleDermaDrs = () => {
        setCurrentSection('DERMADRS');
        setIsOpenDermaDrs(!isOpenDermaDrs);
        setIsOpenDerma(false);
        setIsOpenSpecs(false);
        setIsOpenDentDrs(false);
        setIsOpenDent(false);
        setIsOpenDate(false);
        setIsOpenNutr(false);
        setIsOpenNutrDrs(false);
        setIsOpenPed(false);
        setIsOpenPedDrs(false);
      };

      const toggleNutrDrs = () => {
        setCurrentSection('NUTRDRS');
        setIsOpenNutrDrs(!isOpenDermaDrs);
        setIsOpenDerma(false);
        setIsOpenSpecs(false);
        setIsOpenDentDrs(false);
        setIsOpenDent(false);
        setIsOpenDate(false);
        setIsOpenNutr(false);
        setIsOpenDermaDrs(false);
        setIsOpenPed(false);
        setIsOpenPedDrs(false);
      };

      
    const toggleDentDrs = () => {
        setCurrentSection('DENTDRS');
        setIsOpenDentDrs(!isOpenDermaDrs);
        setIsOpenDerma(false);
        setIsOpenSpecs(false);
        setIsOpenDermaDrs(false);
        setIsOpenDent(false);
        setIsOpenDate(false);
        setIsOpenNutr(false);
        setIsOpenNutrDrs(false);
        setIsOpenPed(false);
        setIsOpenPedDrs(false);
      };

      const togglePedDrs = () => {
        setCurrentSection('PEDDRS');
        setIsOpenPedDrs(!isOpenDent);
        setIsOpenDerma(false);
        setIsOpenDent(false); // Close section A when opening section B
        setIsOpenSpecs(false);
        setIsOpenDentDrs(false);
        setIsOpenDermaDrs(false);
        setIsOpenDate(false);
        setIsOpenPed(false);
        setIsOpenNutr(false);
        setIsOpenNutrDrs(false);
        

    };
    
    
    
    const toggleSpecs = () => {
        setCurrentSection('SPECS');
        setIsOpenSpecs(!isOpenSpecs);
        setIsOpenDerma(false); // Close section A when opening section B
        setIsOpenDermaDrs(false);
        setIsOpenDent(false);
        setIsOpenDentDrs(false);
        setIsOpenDate(false);
        setIsOpenNutr(false);
        setIsOpenNutrDrs(false);
        setIsOpenPed(false);
        setIsOpenPedDrs(false);
    };

    const toggleDate = () => {
       
        setIsOpenDate(!isOpenSpecs);
        setIsOpenDerma(false); // Close section A when opening section B
        setIsOpenDermaDrs(false);
        setIsOpenDent(false);
        setIsOpenDentDrs(false);
        setIsOpenSpecs(false);
        setIsOpenNutr(false);
        setIsOpenNutrDrs(false);
        setIsOpenPed(false);
        setIsOpenPedDrs(false);
    };


    const goBack= () => {
        if (isOpenDent){
            toggleSpecs();
        } else if (isOpenDerma){
            toggleSpecs();
        }else if (isOpenNutr){
            toggleSpecs();
        }else if (isOpenDermaDrs){
            toggleDerma();
        }else if (isOpenDentDrs){
            toggleDent();
        }else if (isOpenNutrDrs){
            toggleNutr();
        }else if (isOpenDate){
            if (currentSection === 'DERMADRS') {
                toggleDermaDrs();
              } else if (currentSection === 'DENTDRS') {
                toggleDentDrs();
              } else if (currentSection === 'NUTRDRS') {
                toggleNutrDrs();
              }else if (currentSection === 'PEDDRS') {
                togglePedDrs(); }
            //this is wrong, I need a way to have history of previous open
            //because how would I know the previous? but later do it
        }
    }

    const handleClick = useCallback(() => {
        setIsFormSubmitted(true);
      }, []);

    return (
        <div className="wrap">
          
            {isLoading ? (
                <div className="wrap">
             <div className="d-flex justify-content-center align-items-center min-vh-100">
              <div className="loader"></div>
            </div>
              </div>
            ) : isFormSubmitted ? (

                <div className="container lan">
                    <div className="row my-3">
                        <div className="col-lg-4 offset-lg-4">
                            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                            <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                            <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                            </svg>
                        </div>
                    </div>
                </div>

                ) : (
                <div className="wrap bbbb">
                    <Navbaro></Navbaro>
                <div className="container ">
                
                {/* <div className="row"> */}
                {/* <div className="col-md-7"> */}
            <motion.button className="bot col-lg-2 my-5" onClick={goBack}>BACK</motion.button>
            <motion.div transition={{ layout:{duration: .7 , type: "spring"}}}layout className='ani' style={{borderRadius: "1rem" , boxShadow: '0px 10px 30px rgba(0,0,0, 0.5)'}}>
                <motion.h1 layout="position" className='headd'>1. Speciality</motion.h1>
             
                {isOpenSpecs &&
               
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duartion: 1}}className="expand"> 
                    <div className="row text-center my-5" >
                    <div className="col-lg-3 col-md-6 col-6" >
                        <button className="box col-12 col-lg-12" onClick={toggleDent}>Dentistry</button>
                        <img src="https://cdn.discordapp.com/attachments/1125750837889736704/1125767926167904396/yassinyasser_close_up_smiling_mouth_of_beautiful_woman_woman_sm_d91830fb-3750-4d7d-a96b-ca84a002b69b.png" alt="" className="img-fluid"/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6" >
                        <button className="box col-12 col-lg-12" onClick={toggleDerma}>Dermatology</button>
                        <img src="https://cdn.shopify.com/s/files/1/0523/6683/5909/files/Rectangle_2636_2x_ed645a02-a35a-4ece-a871-a3841073dac7.png?v=1628161883" alt="" className="img-fluid"/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6 mt-lg-0 mt-md-0 mt-4" >
                        <button className="box col-12 col-lg-12" onClick={toggleNutr}>Nutrition</button>
                        <img src="https://cdn.discordapp.com/attachments/1125750837889736704/1126194470447230976/yassinyasser_Close-up_photo_of_white_background_that_has_realis_37cbaebc-ede4-4680-983b-78fcdeb24c59.png" alt="" className="img-fluid"/>
                    </div>
                </div>

                   
                </motion.div>
                 }
                 
            </motion.div>

            <motion.div  transition={{ layout:{duration:.7 , type: "spring"}}} layout className='ani my-5' style={{borderRadius: "1rem" , boxShadow: '0px 10px 30px rgba(0,0,0, 0.5)'}}>
                <motion.h1 layout="position" className='headd'>2. Services</motion.h1>
                
                {isOpenDerma &&
               
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duartion: 1}} className="expand"> 
                <div className="row my-3">
                <div className="col-lg-3 col-md-6 col-6 mt-lg-0 mt-md-0 mt-4" >
                        <button className="box col-12 col-lg-12" onClick={toggleDermaDrs}>Laser</button>
                        <img src="https://cdn.discordapp.com/attachments/1125750837889736704/1126806349032992850/yassinyasser_close_up_face_of_a_beautiful_woman_having_a_laser__61694faf-85b9-4ff4-b675-310b22e0ebe0.png" alt="" className="img-fluid"/>
                </div>
                <div className="col-lg-3 col-md-6 col-6 mt-lg-0 mt-md-0 mt-4" >
                        <button className="box col-12 col-lg-12" onClick={toggleDermaDrs}>Consultation</button>
                        <img src="https://media.discordapp.net/attachments/1125750837889736704/1154437401310134282/yassinyasser_patient_and_doctor_having_a_dermatology_consultati_0caa99d8-3fec-4455-98db-526355a3abcf.png?width=671&height=671" alt="" className="img-fluid"/>
                </div>
                    </div>
                </motion.div>
                 }
                  {isOpenDent &&
               
               <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duartion: 1}} className="expand"> 
                   <motion.button className="but col-lg-6"  onClick={toggleDentDrs}> WHITENING</motion.button>
                    <motion.button className="but col-lg-6"  onClick={toggleDentDrs}> CROWN </motion.button>
               </motion.div>
                }
                {isOpenNutr &&
               
               <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duartion: 1}} className="expand"> 
                   <motion.button className="but col-lg-6" onClick={toggleNutrDrs}> Something I don't know</motion.button>
                   <motion.button  className="but col-lg-6" onClick={toggleNutrDrs}> Consultation</motion.button>
               </motion.div>
                }
            
            </motion.div>


            <motion.div  transition={{ layout:{duration:.7 , type: "spring"}}} layout className='ani my-5' style={{borderRadius: "1rem" , boxShadow: '0px 10px 30px rgba(0,0,0, 0.5)'}}>
                <motion.h1 layout="position" className='headd'>3. Doctor</motion.h1>
                
                {isOpenDermaDrs &&
               
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duartion: 1}} className="expand"> 
                <div className="row my-5">
                    <motion.button className="but col-lg-3 " onClick={() => { toggleDate(); handleDoctorSelection('Amr Lotfy Monib'); }}>Amr Lotfy Monib</motion.button>
                    <motion.button className="but col-lg-3 offset-lg-1"  onClick={toggleDate}>Youssef Selimah</motion.button>
                    <motion.button className="but col-lg-3 offset-lg-1"  onClick={toggleDate}>Yassin Yasser</motion.button>
                </div>
                <div className="row my-5">
                    <motion.button className="but col-lg-3"  onClick={toggleDate}>Salsabil Lotfy</motion.button>
                    <motion.button className="but col-lg-3 offset-lg-1"  onClick={toggleDate}>Emad Nawar</motion.button>
                    <motion.button className="but col-lg-3 offset-lg-1"  onClick={toggleDate}> Youssef Mazen</motion.button>
                </div>

                </motion.div>
                 }
                  {isOpenDentDrs &&
               
               <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duartion: 1}} className="expand"> 
                   <motion.button className="but col-lg-6" onClick={toggleDate}> TEETH DOC 1</motion.button>
                    <motion.button className="but col-lg-6" onClick={toggleDate}> TEETH DOC 2</motion.button>
               </motion.div>
                }
                 {isOpenNutrDrs &&
               
               <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duartion: 1}} className="expand"> 
                   <motion.button className="but col-lg-6"  onClick={toggleDate}> DOCTOR Nutr 1</motion.button>
                   <motion.button className="but col-lg-6"  onClick={toggleDate}> DOCTOR Nutr 2</motion.button>
               </motion.div>
                }
            </motion.div>

          
            {/* </div> */}
           
            {/* <div className="col-md-5"> */}

            <motion.div transition={{ layout:{duration: .7 , type: "spring"}}}layout className='ani my-5' style={{borderRadius: "1rem" , boxShadow: '0px 10px 30px rgba(0,0,0, 0.5)' }}>
                <motion.h1 layout="position" className='headd'>4. Date</motion.h1>
             
                {isOpenDate &&
               
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duartion: 1}}className="expand"> 
                    <br />

                    <motion.h1>Smouha</motion.h1>
                    <WeekCalendar selectedDoctor={selectedDoctor} extraParam="Smouha" userInfo={userInfo}/>

                    <hr className="line" />
                    <br />
                    
                    <motion.h1> Fouad St.</motion.h1>
                    <WeekCalendar selectedDoctor={selectedDoctor} extraParam="Fouad St." userInfo={userInfo} onConfirm={handleClick}/>
                </motion.div>
                 }
                 
            </motion.div>
            {/* </div> */}
            {/* </div> */}
         </div>
         <Footer></Footer>
         </div>
            )}
          </div>   
      );
    }
 
export default Reservation; 