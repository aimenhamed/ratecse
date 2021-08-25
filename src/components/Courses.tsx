import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Text } from '../App.style';
import { CourseItem, LikeButton } from './Courses.style';
import { BsHeartFill, BsHeart } from 'react-icons/bs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

let likedList = [];

export const Courses = () => {
    const [courses, setCourses] = useState(null);
    const url = "https://ratecseapi.herokuapp.com/api/courses";

    useEffect(() => {
        axios.get(url).then(response => {
            setCourses(response.data)
        });
    }, [courses]);

    const likeCourse = (id) => {
        if (!likedList[parseInt(id)]) {
            axios.put(`${url}/likes/${id}`);
            likedList[parseInt(id)] = true;
        } else {
            axios.delete(`${url}/likes/${id}`);
            likedList[parseInt(id)] = false;
        }
    }

    return (
        <Container>
            <Row xs={1} sm={2} md={3}>
                {courses && courses.map((course) => (
                    <Col>
                        <CourseItem>
                            <Text id={course.id}>{course.name}</Text>
                            <LikeButton onClick={() => likeCourse(course.id)}>
                                {likedList[course.id] == true ?
                                    <BsHeartFill color="ff5c5c" size="2rem" />
                                    :
                                    <BsHeart color="ff5c5c" size="2rem" />
                                }
                                <Text>{course.likes}</Text>
                            </LikeButton>
                        </CourseItem>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}