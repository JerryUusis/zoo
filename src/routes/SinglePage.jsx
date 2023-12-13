import { useParams, useNavigate } from "react-router-dom";

const SinglePage = ({ zoo }) => {
    const navigate = useNavigate();
    const params = useParams()
    let data = zoo[params.categories];

    data = zoo[params.categories].find((item) => item.name === params.name)
    return (
        <div className="single-page-main-container">
            <img src={`https://source.unsplash.com/400x400/?${data.name}`} alt={data.name} />
            <div className="single-page-text-container">
                <h2>{data.name}</h2>
                <p>This {data.name} is a one rad fella! Just look at it go.</p>
                <p>It&apos;s rocking {data.likes} likes so far!</p>
                <button onClick={() => navigate(-1)}>Back</button>
            </div>
        </div>
    )
}

export default SinglePage;