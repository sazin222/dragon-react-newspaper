import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navber from "../Shared/Navber/Navber";
import RightSideNav from "../Shared/Rightsidenav/RightSideNav";

const News = () => {
    const {id} = useParams()
    return (
        <div>
            <Header></Header>
            <Navber></Navber>
            <div className="grid md:grid-cols-4">
               <div className="col-span-3">
                   <h2>Dragon News {id}</h2>
               </div>
               <div>
                <RightSideNav></RightSideNav>
               </div>
            </div>
        </div>
    );
};

export default News;