export interface Course{
    id: number,
    course_group: number,
    course_type: number,
    title: string,
    description: string,
    slug: string,
    price_usd: string,
    price_inr: string,
    image: string,
    rating: number,
    learners_count: number,
    business_unit: string,
    course_sections: any
}