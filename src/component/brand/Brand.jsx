import React from "react";
import { google, slack, atlassian, dropbox, shopify } from "./imports";
import "./brand.css";

const Brand = () => {
  const imageBrand = [google, slack, atlassian, dropbox, shopify];
  return (
    <div className='gpt3__brand section__padding'>
      {imageBrand.map((e) => (
        <div>
          <img src={e} alt='brandImage' />
        </div>
      ))}
    </div>
  );
};

export default Brand;
