
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div className="flex shadow-inner">
            <button className="btn-secondary rounded-lg text-white "> Breaking News</button>
             <Marquee className="text-black font-bold bg-slate-100" pauseOnHover={true} speed={50}>
       <Link className="mr-12" to={"/"}>Match Highlights: Germany vs Spain — as it happened!....</Link>
       <Link className="mr-12" to={"/"}> Match Highlights: Germany vs Spain — as it happened! ....</Link>
       <Link to={"/"}> Match Highlights: Germany vs Spain — as it happened !....</Link>
</Marquee>
        </div>
    );
};

export default BreakingNews;