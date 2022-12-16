import React from 'react';
import Layout from "../components/layout";
import CoursePreview from "../components/common/coursePreview";

const coursesData = [
  {
    name: 'The best course',
    image: 'https://unblast.com/wp-content/uploads/2019/11/MacBook-Pro-on-Table-Mockup-1.jpg',
    author: 'The best company',
    description: 'Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing' +
      ' mauris non. Purus parturient viverra nunc, tortor sit laoreet. Quam tincidunt aliquam adipiscing tempor.',
    link: '/',
  },
  {
    name: 'Bester course',
    image: 'https://unblast.com/wp-content/uploads/2019/11/MacBook-Pro-on-Table-Mockup-1.jpg',
    author: 'The best company',
    description: 'Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing' +
      ' mauris non. Purus parturient viverra nunc, tortor sit laoreet. Quam tincidunt aliquam adipiscing tempor.',
    link: '/',
  },
  {
    name: 'The bestest course',
    image: 'https://unblast.com/wp-content/uploads/2019/11/MacBook-Pro-on-Table-Mockup-1.jpg',
    author: 'The best company',
    description: 'Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing' +
      ' mauris non. Purus parturient viverra nunc, tortor sit laoreet. Quam tincidunt aliquam adipiscing tempor.',
    link: '/',
  },
];

const Home = () => {
  return (
    <Layout>
      <div className='h-full text-black'>
        <h1 className="text-5xl font-bold mt-12 text-center mb-8">Welcome to SureShot</h1>
        <h3 className="text-3xl text-center py-5 max-w-[800px] m-auto">
          Courses for everyone and about everything. Take the knowledge from us,
          because we are freaking best. Seriously.
        </h3>
        <div className="grid grid-cols-3 gap-x-10 py-16">
          {coursesData.map(course =>
            <CoursePreview
              key={course.name}
              {...course}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Home;