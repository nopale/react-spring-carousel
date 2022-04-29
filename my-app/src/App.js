import "./App.css";
import React, { useEffect, useState } from "react";
import { request } from "graphql-request";

function App() {
  const [homepageContent, setHomepageContent] = useState();
  useEffect(() => {
    const fetchContent = async () => {
      const { homepage } = await request(
        "https://api-eu-central-1.graphcms.com/v2/cl2kitktp0i4t01xr2vgy5kyj/master",
        `
        {
          homepage(where: {id: "cl2kjlavem6ze0bul9q08sydf"}) {
            id
            homeSlides {
              header
              image {
                id
              }
              subHeader
            }
            heroBanner {
              id
              title
              copy {
                html
              }
            }
          }
        }
    `
      );

      setHomepageContent(homepage);
      // setBanners(homepageContent.banners);
      // setHeroImage(homepageContent.heroImage);
    };

    fetchContent();
  }, []);
  console.log(homepageContent);

  return (
    <div className="App">
      <div className=""></div>
    </div>
  );
}

export default App;
