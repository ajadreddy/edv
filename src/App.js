import React, { useState, useEffect } from "react";
import './App.css';
const App=()=> {

  const [userData,setuserData] = useState(null);
  const [rides,setRides] = useState(null);
  const [page,setPage] = useState(0);
  const [isActive,setIsactive] = useState(false);
  const [isActive2,setIsactive2] = useState(false);
  const [selectedOption,setSelectedOption] = useState("");
  const [selectedOption2,setSelectedOption2] = useState("");
  const currDate = new Date().toLocaleDateString();
  // const currTime = new Date().toLocaleTimeString();
  const [past,setPast] = useState(null);
  const [post,setPost] = useState(null);
  const [present,setPresent] = useState(null);

  const handleDate = (date)=>{
    // console.log(date)
    // console.log(currDate)
    if(currDate[1]==='/'){  
      let year1 = date.substring(6,10);
      let year2 = currDate.substring(5,9)
      // console.log(year1)
      // console.log(year2)
      if(parseInt(year1)<parseInt(year2)){
        return true
      }else if(parseInt(year1) === parseInt(year2)){
        let mon1 = date.substring(0,2);
        let mon2 = currDate.substring(0,1)
        if(parseInt(mon1)<parseInt(mon2)){
          return true
        }
        else if(parseInt(mon1)===parseInt(mon2)){
          let dt1 = date.substring(3,5);
          let dt2 = currDate.substring(2,4);
          if(parseInt(dt1)<parseInt(dt2)){
            return true
          }
          else{
            return false
          }
        }
        else{
          return false
        }
      }
      else{
        return false
      } 
    }
    else{
      let year1 = date.substring(6,10);
      let year2 = currDate.substring(6,10)
      // console.log(year1)
      // console.log(year2)
      if(parseInt(year1)<parseInt(year2)){
        return true
      }else if(parseInt(year1) === parseInt(year2)){
        let mon1 = date.substring(0,2);
        let mon2 = currDate.substring(0,2)
        if(parseInt(mon1)<parseInt(mon2)){
          return true
        } 
        else if(parseInt(mon1)===parseInt(mon2)){
          let dt1 = date.substring(3,5);
          let dt2 = currDate.substring(3,5);
          if(parseInt(dt1)<parseInt(dt2)){
            return true
          }
          else{
            return false
          }
        }
        else{
          return false
        }
      }
      else{
        return false
      }
    }
  }

  const handlePost = (date)=>{
    // console.log(date)
    // console.log(currDate)
    if(currDate[1]==='/'){  
      let year1 = date.substring(6,10);
      let year2 = currDate.substring(5,9)
      // console.log(year1)
      // console.log(year2)
      if(parseInt(year1)>parseInt(year2)){
        return true
      }else if(parseInt(year1) === parseInt(year2)){
        let mon1 = date.substring(0,2);
        let mon2 = currDate.substring(0,1)
        if(parseInt(mon1)>parseInt(mon2)){
          return true
        }
        else if(parseInt(mon1)===parseInt(mon2)){
          let dt1 = date.substring(3,5);
          let dt2 = currDate.substring(2,4);
          if(parseInt(dt1)>parseInt(dt2)){
            return true
          }
          else{
            return false
          }
        }
        else{
          return false
        }
      }
      else{
        return false
      }
    }
    else{
      let year1 = date.substring(6,10);
      let year2 = currDate.substring(6,10)
      // console.log(year1)
      // console.log(year2)
      if(parseInt(year1)<parseInt(year2)){
        return true
      }else if(parseInt(year1) === parseInt(year2)){
        let mon1 = date.substring(0,2);
        let mon2 = currDate.substring(0,2)
        if(parseInt(mon1)<parseInt(mon2)){
          return true
        }
        else if(parseInt(mon1)===parseInt(mon2)){
          let dt1 = date.substring(3,5);
          let dt2 = currDate.substring(3,5);
          if(parseInt(dt1)<parseInt(dt2)){
            return true
          }
          else{
            return false
          }
        }
        else{
          return false
        }
      }
      else{
        return false
      }
    }
  }

  const handlePresent = (date)=>{
    // console.log(date)
    // console.log(currDate)
    if(currDate[1]==='/'){  
      let year1 = date.substring(6,10);
      let year2 = currDate.substring(5,9)
      // console.log(year1)
      // console.log(year2)
      if(parseInt(year1)===parseInt(year2)){
        let mon1 = date.substring(0,2);
        let mon2 = currDate.substring(0,1)
        if(parseInt(mon1)===parseInt(mon2)){
          let dt1 = date.substring(3,5);
          let dt2 = currDate.substring(2,4);
          if(parseInt(dt1)===parseInt(dt2)){
            return true
          }else{
            return false
          }
        }
        else{
          return false
        }
      }
      else{
        return false
      }
    }
    else{
      let year1 = date.substring(6,10);
      let year2 = currDate.substring(6,10)
      // console.log(year1)
      // console.log(year2)
      if(parseInt(year1)===parseInt(year2)){
        let mon1 = date.substring(0,2);
        let mon2 = currDate.substring(0,2)
        if(parseInt(mon1)===parseInt(mon2)){
          let dt1 = date.substring(3,5);
          let dt2 = currDate.substring(3,5);
          if(parseInt(dt1)===parseInt(dt2)){
            return true
          }else{
            return false
          }
        }
        else{
          return false
        }
      }
      else{
        return false
      }
    
    }
  }
     

  useEffect(() => {
    const fun = async (e) => {
      const response = await fetch(
        "https://assessment.api.vweb.app/user",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
        setuserData(json);
    };
    fun();
    // eslint-disable-next-line
  }, []);


  useEffect(() => {
    const fun = async (e) => {
      const response = await fetch(
        "https://assessment.api.vweb.app/rides",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
        setRides(json);
        setPast(json.filter((ele)=>
          handleDate(ele.date)
        ))
        setPost(json.filter((ele)=>
          handlePost(ele.date)
        ))
        setPresent(json.filter((ele)=>
          handlePresent(ele.date)
        ))
   
    };
    fun();
    // eslint-disable-next-line
  }, []);
  
  useEffect(()=>{
    for(let i=0;i<rides.length;i++){
      const a = rides[i].station_path;
      
    }
  })

  return (
    <div style={{background:"#302c2c"}} >
      {/* <Router>
        <Switch>
          <Route path='/past'><Past/></Route>
        </Switch>
      </Router> */}
      <div style={{background:"black",color:"white",display:"flex",justifyContent:"space-between",padding:"4px 40px",alignItems:"center"}}>
        <div><h2>Edvora</h2></div>
        {userData?
        <div style={{display:"flex",flexDirection:"row",gap:"20px"}}>
        <p>{userData.name}</p>
        <img style={{width:"40px",height:"40px",margin:"auto 0px",borderRadius:"25px"}} src={userData.url} alt="" />
      </div>
      :
      <>
      </>
      }
      </div>
      <div style={{background:"#302c2c",color:"white",display:"flex",justifyContent:"space-between",padding:"4px 40px",alignItems:"center"}}>
        <div style={{display:"flex",flexDirection:"row",gap:"20px"}}>
          <div style={{cursor:"pointer"}} onClick={()=>setPage(0)}><p>Nearest Rides</p></div>
          <div style={{cursor:"pointer"}} onClick={()=>setPage(1)}><p>Upcomming Rides</p></div>
          <div style={{cursor:"pointer"}} onClick={()=>setPage(2)}><p>Past Rides</p></div>
        </div>
        <div>
          <div >Filters</div>
          <div onClick={()=>{setIsactive(!isActive)}} className="dropdown" >State</div>
          {isActive && (
            <div className="dropdown-content">
            {rides && rides.map((ride)=>{
              return(
                <div onClick={()=>{setSelectedOption(ride.state);setIsactive(false);}}>{ride.state}</div>
              )
            })}
            </div>
          )}
          <div onClick={()=>{setIsactive2(!isActive2)}} className="dropdown">City</div>
          {isActive2 && (
            <div className="dropdown-content">
            {rides && rides.map((ride)=>{
              return(
                <div onClick={()=>{setSelectedOption2(ride.city);setIsactive2(false);}}>{ride.city}</div>
              )
            })}
          </div>
          )}
        </div>
      </div>
      <div style={{display:"flex",flexDirection:"column"}}>
      {page===0 && 
        present && present.filter(
          (ride) =>{
           if (selectedOption){
             return ride.state === selectedOption
           }
           if(selectedOption2){
             return ride.city === selectedOption2
           } 
           else {
             return ride.state
           }
         }
         ).map((ride)=>{
         return (
           <div style={{justifyContent:"space-between", display:"flex",flexDirection:"row",background:"#171717",margin:"5px 35px",padding:"5px 35px",borderRadius:"10px"}}>
             <div style={{display:"flex",flexDirection:"row"}}>
             <div><img style={{width:"296px",height:"153px",borderRadius:"5px",marginLeft: "29px",marginTop: "22px"}} src={ride.map_url} alt="" /></div>
         <div style={{color:"#CFCFCF",marginLeft: "29px"}}>
         <div><p>Ride Id : <span style={{color:"white"}}>{ride.id}</span> </p></div>
           <div><p>Origin Station : <span style={{color:"white"}}>{ride.origin_station_code}</span> </p></div>
           <div><p>station_path : <span style={{color:"white"}}>{JSON.stringify(ride.station_path)}</span></p></div>
           <div><p>Date : <span style={{color:"white"}}>{ride.date}</span></p></div>
           <div><p>Distance : <span style={{color:"white"}}>{}</span></p></div>
         </div>
             </div>
         <div style={{display:"flex",flexDirection:"row",color:"white",gap:"20px"}}>
           <div style={{background: "rgba(0, 0, 0, 0.56)",borderRadius: "16px",height:"50px",padding:"0px 10px"}}><p >{ride.city}</p></div>
           <div style={{background: "rgba(0, 0, 0, 0.56)",borderRadius: "16px",height:"50px",padding:"0px 10px"}}><p>{ride.state}</p></div>
         </div>
       </div>
         )
       })}

{page===1 && 
        post && post.filter(
          (ride) =>{
           if (selectedOption){
             return ride.state === selectedOption
           }
           if(selectedOption2){
             return ride.city === selectedOption2
           } 
           else {
             return ride.state
           }
         }
         ).map((ride)=>{
         return (
           <div style={{justifyContent:"space-between", display:"flex",flexDirection:"row",background:"#171717",margin:"5px 35px",padding:"5px 35px",borderRadius:"10px"}}>
             <div style={{display:"flex",flexDirection:"row"}}>
             <div><img style={{width:"296px",height:"153px",borderRadius:"5px",marginLeft: "29px",marginTop: "22px"}} src={ride.map_url} alt="" /></div>
         <div style={{color:"#CFCFCF",marginLeft: "29px"}}>
         <div><p>Ride Id : <span style={{color:"white"}}>{ride.id}</span> </p></div>
           <div><p>Origin Station : <span style={{color:"white"}}>{ride.origin_station_code}</span> </p></div>
           <div><p>station_path : <span style={{color:"white"}}>{JSON.stringify(ride.station_path)}</span></p></div>
           <div><p>Date : <span style={{color:"white"}}>{ride.date}</span></p></div>
           <div><p>Distance : <span style={{color:"white"}}>{ride.destination_station_code-ride.origin_station_code}</span></p></div>
         </div>
             </div>
         <div style={{display:"flex",flexDirection:"row",color:"white",gap:"20px"}}>
           <div style={{background: "rgba(0, 0, 0, 0.56)",borderRadius: "16px",height:"50px",padding:"0px 10px"}}><p >{ride.city}</p></div>
           <div style={{background: "rgba(0, 0, 0, 0.56)",borderRadius: "16px",height:"50px",padding:"0px 10px"}}><p>{ride.state}</p></div>
         </div>
       </div>
         )
       })}

{page===2 && 
        past && past.filter(
          (ride) =>{
           if (selectedOption){
             return ride.state === selectedOption
           }
           if(selectedOption2){
             return ride.city === selectedOption2
           } 
           else {
             return ride.state 
           }
         }
         ).map((ride)=>{
         return (
           <div style={{justifyContent:"space-between", display:"flex",flexDirection:"row",background:"#171717",margin:"5px 35px",padding:"5px 35px",borderRadius:"10px"}}>
             <div style={{display:"flex",flexDirection:"row"}}>
             <div><img style={{width:"296px",height:"153px",borderRadius:"5px",marginLeft: "29px",marginTop: "22px"}} src={ride.map_url} alt="" /></div>
         <div style={{color:"#CFCFCF",marginLeft: "29px"}}>
           <div><p>Ride Id : <span style={{color:"white"}}>{ride.id}</span> </p></div>
           <div><p>Origin Station : <span style={{color:"white"}}>{ride.origin_station_code}</span> </p></div>
           <div><p>station_path : <span style={{color:"white"}}>{JSON.stringify(ride.station_path)}</span></p></div>
           <div><p>Date : <span style={{color:"white"}}>{ride.date}</span></p></div>
           <div><p>Distance : <span style={{color:"white"}}>{ride.destination_station_code-ride.origin_station_code}</span></p></div>
         </div>
             </div>
         <div style={{display:"flex",flexDirection:"row",color:"white",gap:"20px"}}>
           <div style={{background: "rgba(0, 0, 0, 0.56)",borderRadius: "16px",height:"50px",padding:"0px 10px"}}><p >{ride.city}</p></div>
           <div style={{background: "rgba(0, 0, 0, 0.56)",borderRadius: "16px",height:"50px",padding:"0px 10px"}}><p>{ride.state}</p></div>
         </div>
       </div>
         )
       })}
      
      </div>
    </div>
  );
}

export default App;
