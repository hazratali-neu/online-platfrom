
export const getData=async()=>{
     const res = await fetch('https://online-platfrom-bice.vercel.app/data.json');
     return res.json();
    
}