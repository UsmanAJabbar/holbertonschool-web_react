import { normalize, schema } from 'normalizr';


const coursesNormalizer = (data) => {
  const courses = new schema.Entity('courses');
  const normalizedCourses = normalize(data, [courses]);
  return normalizedCourses.entities.courses;
}

export {
  coursesNormalizer
}
