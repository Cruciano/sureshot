import React, { useEffect, useState } from 'react';
import Layout from "../components/layout";
import CoursePreview from "../components/common/coursePreview";
import { getAllCourses } from "../api/courses";
import mapCourseToProps from "../utils/mappers/courses";

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getAllCourses(9, 1).then(data => {
      setCourses(data.map(course => mapCourseToProps(course)));
    });
  }, [])

  return (
    <Layout>
      <div className='h-full text-black'>
        <h1 className="text-5xl font-bold mt-12 text-center mb-8">Welcome to SureShot</h1>
        <h3 className="text-3xl text-center py-5 max-w-[800px] m-auto">
          Courses for everyone and about everything. Take the knowledge from us,
          because we are freaking best. Seriously.
        </h3>
        <div className="grid grid-cols-3 gap-10 py-16">
          {courses.map(course =>
            <CoursePreview
              key={course.id}
              {...course}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Home;