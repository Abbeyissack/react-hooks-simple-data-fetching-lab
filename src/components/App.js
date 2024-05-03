// create your App component here
import React, { useEffect, useState } from "react";
const App = () => {
  const [image, setImage] = useState();
  const [loaded, setIsloaded] = useState(false);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((r) => r.json())
      .then((data) => {
        setImage(data.message);
        setIsloaded(true);
      });
  }, []);
  console.log(image);
  if (!loaded) {
    return <p>Loading...</p>;
  }
  return <img src={image} alt="A Random Dog" />;
};

// export your App component
export default App;
