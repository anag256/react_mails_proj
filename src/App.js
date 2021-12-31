import React, { createContext, useEffect, useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import './App.css';
import HomeScreen from './components/HomeScreen';
import SentMails from './components/SentMails';
import MailComponent from './components/MailComponent';

export const AppContext=createContext(null);
function App() {
  const [showComposeMail,setShowComposeMail]=useState(false);
  const [showInbox,setShowInbox]=useState(false);
  const [showSentMail,setShowSentMail]=useState(true);
  const [emailTo,setEmailTo]=useState("");
  const [emailcc,setEmailcc]=useState("");
  const [emailSub,setEmailSub]=useState("");
  const [emailBody,setEmailBody]=useState("");
  const [totalSentMail,setTotalSentMail]=useState("");
  const [selected,setIsSelected]=useState([]);
  const [indexesAr,setIndexesAr]=useState([]);
  const [search,setSearch]=useState([]);
  const [flag,setFlag]=useState(false);
  const [mailsAr,setmailsAr]=useState([]);
  const [showSearchResults,setShowSearchResults]=useState(false);
  let serachres=[];
  // useEffect(() => {
  //   localStorage.setItem("emails",`[{"emailTo":"Anna Tripathy","emailcc":"test","emailSub":"Regarding Job Application","emailBody":"test","emailDate":"2021-12-30T17:10:57.111Z","emailID":30.086942086811},{"emailTo":"Rajat Sethi","emailcc":"test","emailSub":"Car Delievery","emailBody":"test","emailDate":"2021-12-30T17:11:04.659Z","emailID":30.222507975633828},{"emailTo":"Shruta Rai","emailcc":"test","emailSub":"Study Material","emailBody":"test","emailDate":"2021-12-30T17:11:12.901Z","emailID":30.344010050711432},{"emailTo":"Rachit Jain","emailcc":"","emailSub":"ReactJS Training","emailBody":"test","emailDate":"2021-12-30T17:11:23.183Z","emailID":30.29827501472882}]`	
  //   );
  // }, [])
  function showEmails() {
      let emails=localStorage.getItem("emails");
      let emailsObj;
      if(emails==null){
          emailsObj=[];
       }
       else{
          emailsObj= JSON.parse(emails);
       }
      
       let ar=[];
       let indexes=0;
      
       emailsObj.forEach(function(email,index){
      
         ar.push(<MailComponent key={index} email_to={email['emailTo']} email_cc={email['emailcc']} email_sub={email['emailSub']} email_body={email['emailBody']} email_date={email['emailDate']} emailID={email['emailID']} />) ;
          indexes++;
       
      });
     
      // console.log(ar);
      serachres=[...emailsObj];
       return ar;

  }
 
  function DeleteEmails(delAr) {
      let emails=localStorage.getItem("emails");
      let emailsObj;
      if(emails==null){
         emailsObj=[];
       }
       else{
         emailsObj= JSON.parse(emails);
       }
       for(let i=0;i<delAr.length;i++){
       let delind = emailsObj.findIndex(email => email.emailID == delAr[i]);
       if(delind!==-1){
                     emailsObj.splice(delind,1);
                     console.log("multiple delete",emailsObj);
                     }
       }
    
       localStorage.setItem("emails",JSON.stringify(emailsObj));
      
       setIsSelected([])
       showEmails();
  }
  
  const handleSearch= (e)=>{
    setShowSearchResults(true);  
    let sear=e.target.value;
    sear=sear.toLowerCase();
 
    let searchResults;
    let emails=localStorage.getItem("emails");
    let emailsObj;
  if(emails!==null){
        emailsObj= JSON.parse(emails);
     }
    if(sear==""){
      setShowSentMail(true);
      setShowSearchResults(false);
      return;
    }
   if(sear!==""){
    let ar=[];
    
   
    emailsObj.forEach(function(email,index){
   if(((email.emailSub.toLowerCase().includes(sear))||(email.emailTo.toLowerCase().includes(sear)))){
      ar.push(<MailComponent key={index} email_to={email['emailTo']} email_cc={email['emailcc']} email_sub={email['emailSub']} email_body={email['emailBody']} email_date={email['emailDate']} emailID={email['emailID']} />) ;
    // ar.push(email);
    }   
    
   });
  
  // searchResults= emailsObj.filter((email)=>((email.emailSub.toLowerCase().includes(sear))||(email.emailTo.toLowerCase().includes(sear))));
  setSearch(ar);
 
}


}
  const handleSubmit=(e)=>{
    console.log('handle submit');
    setFlag(true);
      e.preventDefault();
      let emailObj;
      const today = new Date();
      const emailDate=today;
      const rand=today.getDate()+Math.random(0,1);
      let addEmail={
          emailTo,
          emailcc,
          emailSub,
          emailBody,
          emailDate,
          emailID:rand,
          ID:rand
      }
      let email=localStorage.getItem("emails");
      if(email==null){
      //   emailObj=[];
      emailObj=[];
      }
      else{
        emailObj=JSON.parse(email);
      }
      emailObj.push(addEmail);
     
      localStorage.setItem("emails",JSON.stringify(emailObj));
      setEmailTo("");
      setEmailcc("");
      setEmailSub("");
      setEmailBody("");
      setShowComposeMail(false);
      showEmails();

    }
  return (
    <AppContext.Provider value={{selected,setIsSelected,setSearch,search,showComposeMail,setShowComposeMail,showInbox,setShowInbox,showSentMail,setShowSentMail,emailTo,setEmailTo,emailcc,setEmailcc,totalSentMail,setTotalSentMail,indexesAr,setIndexesAr,handleSubmit,showEmails,DeleteEmails,emailSub,setEmailSub,emailBody,setEmailBody,handleSearch,setmailsAr,flag,setFlag,setShowSearchResults,showSearchResults}}>
    <div className="App">
    {/* <HomeScreen/> */}
    <Router>
        <Routes>
   
           <Route path="/" element={<HomeScreen/>}/>
        </Routes>
    </Router> 
    </div>
    </AppContext.Provider>
  );
}

export default App;
