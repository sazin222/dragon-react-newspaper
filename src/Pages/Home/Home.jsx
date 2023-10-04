import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSIdeNav/LeftSideNav";
import Navber from "../Shared/Navber/Navber";
import RightSideNav from "../Shared/Rightsidenav/RightSideNav";
import BreakingNews from "./BreakingNews";
import Newscard from "./Newscard";

const Home = () => {
  const news =  useLoaderData()
  console.log(news);
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navber></Navber>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
       
       <div>
         <LeftSideNav></LeftSideNav>
       </div>
       <div className="md:col-span-2">
         <h2 className="text-2xl ">Dragon News Home</h2>
         {
          news.map(aNews=> <Newscard
          key={aNews._id} 
          news={aNews}

          >

          </Newscard>)
         }
       </div>
       <div>
          <RightSideNav></RightSideNav>
       </div>


            </div>
        </div>
    );
};

export default Home;