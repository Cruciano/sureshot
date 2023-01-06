import Axios from "axios";

export const getAllCourses = async (pageSize, pageNumber) => {
  try {
    const {
      data: data
    } = await Axios.get(`${process.env.REACT_APP_BACKEND_URL}courses?PageSize=${pageSize}&PageNumber=${pageNumber}`);

    return data;
  } catch (error) {
    throw error.message;
  }
}

export const getCourseById = async (courseId) => {
  try {
    const {
      data: data
    } = await Axios.get(`${process.env.REACT_APP_BACKEND_URL}courses/${courseId}`);

    return data;
  } catch (error) {
    throw error.message;
  }
}

