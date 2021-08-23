import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import {Text} from '../App.style';
import { CourseContainer, CourseItem, CourseList, LikeButton } from './Courses.style';
import { BsHeartFill } from 'react-icons/bs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export const Courses = () => {
    const url = "http://localhost:5000/api/courses";
    const [courses, setCourses] = useState(null);

    useEffect(() => {
        axios.get(url).then(response => {
            setCourses(response.data)
        });    
    }, [courses]);

    const likeCourse = (id) => {
        axios.post(`${url}/likes/${id}`);
    }

    return (
        <Container>
            <Row xs={1} sm={2} md={3} lg={4}>
                {courses && courses.map((course) => (
                    <Col>
                        <CourseItem>
                            <Text id={course.id}>{course.name}</Text>
                            <LikeButton onClick={() => likeCourse(course.id)}>
                                <BsHeartFill color="ff5c5c" size="2rem" />
                                <Text>{course.likes}</Text>
                            </LikeButton> 
                        </CourseItem>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}