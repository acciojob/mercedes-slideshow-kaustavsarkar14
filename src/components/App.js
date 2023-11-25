
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const images = [
  "https://www.mercedes-benz.com/en/vehicles/mercedes-eq/eqs-suv/_jcr_content/root/verticalgallery_copy/parsys/verticalgalleryitem/image/MQ6-0-image-20220419101504/01-mercedes-benz-the-new-eqs-suv-x296-2021-1080x1350.jpeg",
  "https://www.mercedes-benz.com/en/vehicles/mercedes-eq/eqs-suv/_jcr_content/root/verticalgallery_copy/parsys/verticalgalleryitem_546277676/image/MQ6-0-image-20220819111550/02-mercedes-benz-the-new-eqs-suv-x296-2021-1680x1680.jpeg",
  "https://www.mercedes-benz.com/en/vehicles/mercedes-eq/eqs-suv/_jcr_content/root/verticalgallery_copy/parsys/verticalgalleryitem_546277676/image/MQ6-0-image-20220819111550/02-mercedes-benz-the-new-eqs-suv-x296-2021-1680x1680.jpeg"
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
