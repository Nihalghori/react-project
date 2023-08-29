import React from 'react';
import ReactDOM from 'react-dom';
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";

import {  HandThumbsUp, ChatLeftText, Share } from "react-bootstrap-icons";
import profile from "./profile.jpg";
import "./styles.css";



function Hi() {
  return <div>
  
  <nav className="navbar">
      <div className="container">
        <div className="logo">
       
        </div>
        <div className="nav-elements">
          <ul>
            <li>
            <BsFillHouseDoorFill/>home
            </li>
            <li>
            
            < BsFillFileEarmarkPostFill/> post
            </li>
            <li>
            <BsFillPersonFill />about
            </li>
            <li>
            logout
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
    <div className='head'>
      <div>
        <h1 className='logoname'><BsFillHouseDoorFill/>HANDBOOK</h1>
      </div>
      
      <div>
        <ul className='nav2'>
        <li className='list'>live</li>
        <li className='list'>videos</li>
        <li className='list'>Reels</li>
        <li className='list'>Settings</li>
        </ul>
      </div>
        <input typeof='text' placeholder='search'></input>
        <button>
        <BsSearch />
        </button>
        
    </div>
    <div>
       
      </div>
      
  </div>;
}
 function Post(props) {
  return (
 
   
    <div className="post">
     
      <div className="postHead">
        <img src={props.profile} width={60} height={60} alt="" />
        
        <div>
          <h1> {props.name} </h1>
          <div className="date"> {props.date}</div>
        </div>
      </div>

      <p> {props.text}</p>

      <img className="postImg" src={props.img} alt="" />
    
      <div className="postFooter">
        <div className="button">
          <HandThumbsUp />
          Like
        </div>
        <div className="button">
          <ChatLeftText /> Comment
        </div>
        <div className="button">
          <Share /> Share
       
        </div>
      </div>
    </div>
    
  );
}

ReactDOM.render(
  <div>
     <Hi/>
    <Post
      profile={profile}
      name="Muhammad Nihal Ghouri"
      date="3-Aug-2023 9:30 pm"
      img="https://www.sciencenews.org/wp-content/uploads/2019/11/110819_ts_ai_feat-1028x579.jpg"
      text="Artificial intelligence (AI) refers to the simulation or approximation of human intelligence in machines. The goals of artificial intelligence include computer-enhanced learning, reasoning, and perception. 
            AI is being used today across different industries from finance to healthcare."
    />
    <Post
      profile={profile}
      name="Hasnain Irfan"
      date="20-Feb-2023 5:00 pm"
      img="https://techslax.com/wp-content/uploads/2022/12/Sophia-the-Robot.webp"
      text="Sophia, a socially intelligent humanoid robot, was developed by the Hong Kong-based engineering and robotics company Hanson Robotics. Compared to previous robots, Sophia is very advanced and can mimic human gestures as well as hold a simple conversation."
    />
    <Post
      profile={profile}
      name="Hamza"
      date="20-Jan-2013 5:00 pm"
      img="https://image.cnbcfm.com/api/v1/image/106929546-1629264747396-Robin_Li_Baidu_Robocarpic_hd_copy.jpg?v=1629264961"
      text="Quick warning though: this tutorial is compleeete. And by that I mean looong. I turned this into a full-fledged free 5-day course, and I made a nice-looking PDF you can read on your iPad or [whatever Android device is cool these days]. Drop your email in the box to get both. (it’s spread over 5 days, but you can jump ahead whenever you want)."
    />,
  
   </div>,
  document.querySelector("#root"))
