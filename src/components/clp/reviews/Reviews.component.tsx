import { Course } from "../../../interfaces/course"
import CoursePage from "../../../pages/[slug]"
import styles from './reviews.module.scss'

type Props = {
    reviews: String[]
}

const ReviewsComponent = ({ reviews }: Props) => {
    return (
        <section className={styles.reviews}>
            {
                reviews.map((review) => (
                    <p>{review}</p>
                ))
            }
        </section>
    )
}
  
export default ReviewsComponent