import React from 'react';
import Button from "./button";

const CoursePreview = ({ name, image, author, description, link }) => {
  return (
    <a href={link}>
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
    </a>
  );
};

export default CoursePreview;