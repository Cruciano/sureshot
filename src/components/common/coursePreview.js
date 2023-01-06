import React from 'react';
import Button from "./button";
import { Link } from "react-router-dom";

const CoursePreview = ({ id, name, image, author, description, link }) => {
  return (
    <Link to={`/course/${id}`}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-sh-pink">
        <img
          className="h-[300px] w-full object-cover"
          src={image}
          alt="course"
        />
        <div className="px-4 py-3 flex flex-col">
          <h4 className="text-pink-dark">{author}</h4>
          <h3 className="text-2xl font-semibold py-2">{name}</h3>
          <p>{description}</p>
          <Button className="self-end my-2 mr-3">
            Learn more
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default CoursePreview;