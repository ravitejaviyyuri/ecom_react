import { Batch } from "../../../interfaces/batch"
import { Course } from "../../../interfaces/course"
import CoursePage from "../../../pages/[slug]"
import styles from './batch.module.scss'


type Props = {
    batches: Batch[]
    course: Course
}

const BatchComponent = ({ batches, course }: Props) => {
    return (
        <div className={styles.batches}>
            Batch for Course: {course.title}
        </div>
    )
}
  
export default BatchComponent