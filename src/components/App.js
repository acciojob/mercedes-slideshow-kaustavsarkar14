
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const images = [
  "https://img.freepik.com/premium-photo/bangkok-thailand-08082022-lamborghini-luxury-super-car-fast-sports-premium-lighting-background-3d-illustration_67092-1599.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1698710400&semt=ais",
  "https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg",
  "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVyY2VkZXMlMjBjYXJ8ZW58MHx8MHx8fDA%3D"
]

const App = () => {
  const [imageId, setImageId] = useState(0)
  let timer
  useEffect(()=>{
    clearTimeout(timer)
     timer = setTimeout(() => {
      const newImageId = images[imageId+1]==undefined?0:imageId+1
      setImageId(newImageId)
    }, 5000);
  },[imageId])
  return (
    <div>
        {/* Do not remove the main div */}
        <img src={images[imageId]} alt="" />
    </div>
  )
}

export default App
