import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import {Text} from '../App.style';
import { CourseContainer, CourseItem, CourseList } from './Courses.style';

export const Courses = () => {
    const url = "http://localhost:5000/api/courses";
    const [courses, setCourses] = useState(null);

    useEffect(() => {
        axios.get(url).then(response => {
            setCourses(response.data)
        });    
    }, [url]);

    const renderList = () => {
        console.log(courses)
        return (
            <CourseList>
            {courses.map((course) => (
                <CourseItem>
                    <Text id={course.id}>{course.name}</Text>
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