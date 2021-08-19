import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import {Text} from '../App.style';

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
            courses.map((course) => (
                <Text>{course.name}</Text>
            ))
        );
    }

    return (
        <div>
            {courses && renderList()}
        </div>
    );
}