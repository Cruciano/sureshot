const mapCourseToProps = (course) => {
  return {
    id: course.id,
    name: course.name,
    image: course.picturePath,
    author: 'The best company',
    description: course.description,
    link: '/',
  };
}

export default mapCourseToProps;