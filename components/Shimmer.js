import { Spinner } from "react-bootstrap";

const Shimmer = () => {
    return(
        <div style={{ display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100vh" }}
        >
            <Spinner variant="border"/>
        </div>
    )
}

export default Shimmer;