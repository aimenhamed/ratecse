import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import {Text} from '../App.style';
import { CourseContainer, CourseItem, CourseList, LikeButton } from './Courses.style';
import { BsHeartFill } from 'react-icons/bs';

export const Courses = () => {
    const url = "http://localhost:5000/api/courses";
    const [courses, setCourses] = useState(null);

    useEffect(() => {
        axios.get(url).then(response => {
            setCourses(response.data)
        });    
    }, [url]);

    const likeCourse = () => {
        console.log("HI")
    }

    const renderList = () => {
        console.log(courses)
        return (
            <CourseList>
            {courses.map((course) => (
                <CourseItem>
                    <Text id={course.id}>{course.name}</Text>
                    <LikeButton onClick={likeCourse}><BsHeartFill color="#ff5c5c" size="2rem" /><Text>{course.likes}</Text></LikeButton>
                </CourseItem>
            ))}
            </CourseList>
        );
    }

    return (
        <CourseContainer>
            {courses && renderList()}
        </CourseContainer>
    );
}