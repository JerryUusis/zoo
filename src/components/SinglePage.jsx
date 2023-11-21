import { useParams } from "react-router-dom";

const SinglePage = ({categoryData}) => {
    const params = useParams()
    let data = categoryData;
    data = categoryData.find((animal) => animal.name === params.name)
    return (
        <div>
            <h2>{data.name}</h2>
            <img src={`https://source.unsplash.com/400x400/?${data.name}`} alt={data.name} />
            <p>This {data.name} is a one rad fella! Just look at it go.</p>
            <p>It&apos;s rocking {data.likes} likes so far!</p>
        </div>
    )
}

export default SinglePage;