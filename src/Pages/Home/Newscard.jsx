import { Link } from "react-router-dom";


const Newscard = ({news}) => {
    const {title,image_url,details,_id}= news
    return (
        <div className="card  bg-base-100 mb-6 border-b-2">
  <figure><img src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    
     {
        details.length > 200 ? <p> {details.slice(0,200)}
          <Link to={`/news/${_id}`} className="text-blue-500 font-semibold" > Read more.. </Link>
        </p> : <p>{details}</p>
     }
    
  </div>
</div>
    );
};

export default Newscard;