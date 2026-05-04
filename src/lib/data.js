
export const getData=async()=>{
     const res = await fetch(`https://online-platfrom-server.onrender.com/courses`);
     return res.json();
    
}