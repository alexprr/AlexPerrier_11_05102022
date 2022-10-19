import { styles } from "../../utils/ratings"
import EmptyStar from "../../assets/icons/empty-star.svg";
import RedStar from "../../assets/icons/red-star.svg";

export default function Ratings({color}) {

    const stars = Array(5).fill(0);

    return (
        <div style={styles.container}>
            <div style={styles.stars}>
                {stars.map((_, index) => (
                    color.rating > index 
                    ? <img key={index} alt='' src={EmptyStar}/> 
                    : <img key={index} alt='' src={RedStar} />
                ))}
            </div>
        </div>
    )
}