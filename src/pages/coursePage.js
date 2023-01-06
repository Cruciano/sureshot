import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import { getCourseById } from "../api/courses";
import Button from "../components/common/button";

const CoursePage = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState([]);

  useEffect(() => {
    if (courseId) {
      getCourseById(courseId).then(course => {
        setCourse(course);
      });
    }
  }, [courseId]);


  return (
    <Layout>
      <div className='h-full text-black ml-5'>
        <h1 className="text-4xl font-semibold mt-12 mb-8">
          {course.name}
        </h1>
        <p className="text-right">
          {new Date(course.createdAt).toLocaleString("en-US", {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
          })}
        </p>
        <div className="grid grid-cols-2 gap-x-20 mt-10 mb-20">
          <img className="h-[400px] w-full object-cover rounded-2xl"
               src={course.picturePath}
               alt={course.name}
          />
          <div className="flex flex-col pt-10">
            <p>{course.description}</p>
            <Button className="py-1 px-16 mt-10 self-end">Join</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CoursePage;