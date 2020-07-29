import { GetServerSideProps } from 'next'
import { getCourse } from '../api/services/course.service';
import { Course } from '../interfaces/course';
import ClpLayout from '../components/layouts/Clp.layout';
import BatchComponent from '../components/clp/batch/Batch.component';
import ReviewsComponent from '../components/clp/reviews/Reviews.component';


type Props = {
  data: {
    course: Course
    reviews: String[]
  }
  errors?: string
}

const CoursePage = ({ data, errors }: Props) => {
  if (errors) {
    return (
      <div>
        <span style={{ color: 'red' }}>Error:</span> {errors}
      </div>
    )
  }

  return (
    <ClpLayout>
        <h1 className="{styles.heading1}"> {data.course?.title}</h1>

        <BatchComponent course={data.course} batches = {[]}/>

        <ReviewsComponent  reviews= {data.reviews}/>

    </ClpLayout>
  )
}


export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const slug = params?.slug;
    
    const course:Course = await getCourse(String(slug))
    
    const reviews = ['review 1', 'review 2', 'review 3', 'review 4']

    // Pass data to the page via props
    return { 
      props: {
        data: { 
          course: course, 
          reviews: reviews 
        }
      }
    }

  } catch (err) {
    // Pass error to the page via props
    return { props: { errors: err.message } }
  }
}


export default CoursePage


