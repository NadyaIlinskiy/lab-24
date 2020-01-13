import React, { useState } from "react";

const GetBio = (props) => {
    const aboutMe = { 
    English: "  My name is Nayda. I’m Software Developer with with quite a lot of technical sophistication and intuition that only comes with experience. I’ve spent the last 10 years playing different roles in the tech field, but pursuing the very same idea and passion of mine - bringing quality software to people. Software that makes people's lives easier and happier. ",
    Russian: " Меня зовут Надя. Я разработчик программного обеспечения с огромным опытом. Последние 10 лет я занимала различные должности в технологических компаниях, но преследовала всю ту же цель - разрабатывать качаственное программное обеспечение, которое помогает людям достигать поставленных целей.  "
    };
  const [bio, setBio] = useState(aboutMe.English)

   const updateLang=(e)=>{
      if (e.target.value === "English") {
        setBio(aboutMe.English);
      } else if (e.target.value === "Russian") {
        setBio(aboutMe.Russian);
      }    
      }   
    return <div className="bio"> {bio} </div>
}
export default GetBio;