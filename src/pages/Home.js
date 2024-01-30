import React from "react";
import Main from "../components/Main";
import Row from "../components/Row"
import requests from "../Requests";

const Home = () => {
  return (
    <div>
      <Main />
      <Row rowID="1" title="UpComing" fetchURL={requests.RequestUpcoming} />
      <Row rowID="2" title="Popular" fetchURL={requests.RequestPopular} />
      <Row rowID="3" title="Trending" fetchURL={requests.RequestTrending} />
      <Row rowID="4" title="Top Rated" fetchURL={requests.RequestTopRated} />
    </div>
  );
};

export default Home;
