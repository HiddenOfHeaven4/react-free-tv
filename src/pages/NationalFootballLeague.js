import React, { Component } from 'react';
import { Nav, Row, Col, Tab, Container, Stack, Button } from 'react-bootstrap';
import styles from '../styles/App.module.css';

export default class NationalFootballLeague extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id='ledt-tabs-example' defaultActiveKey='eight'>
                    <Row>
                        <Col sm={3}>
                            <Nav className='flex-column mt-4'>
                                <Nav.Item>
                                    <Nav.Link className={styles.broadcastText} eventKey='eight'>Трансляция №1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={styles.broadcastText} eventKey='nine'>Трансляция №2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={styles.broadcastText} eventKey='ten'>Трансляция №3</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={styles.broadcastText} eventKey='eleven'>Трансляция №4</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className='mt-5'>
                                <Tab.Pane eventKey='eight'>
                                <Stack gap={3}>
                                     <div className={styles.broadcastText}>Регулярный чемпионат NFL. Dallas vs. Tampa Bay</div>
                                    </Stack>
                                    <iframe src="https://vk.com/video_ext.php?oid=-154666590&id=456239072&hash=46e6c01a4d9844fa&hd=2"  width="965" height="480" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
                                        <Stack gap={2} className="col-md-5 mx-auto">
                                        <Button href='/donate' className={styles.donateText}>Поддержать проект</Button>
                                        </Stack>
                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content>
                                <Tab.Pane eventKey='nine'>
                                <Stack gap={3}>
                                      <div className={styles.broadcastText}>Регулярный чемпионат NFL. Philadelphia vs. Atlanta</div>
                                    </Stack>
                                    <iframe src="https://vk.com/video_ext.php?oid=-154666590&id=456239072&hash=46e6c01a4d9844fa&hd=2" width="965" height="480" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
                                        <Stack gap={2} className="col-md-5 mx-auto">
                                        <Button href='/donate' className={styles.donateText}>Поддержать проект</Button>
                                        </Stack>
                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content>
                                <Tab.Pane eventKey='ten'>
                                <Stack gap={3}>
                                      <div className={styles.broadcastText}>Регулярный чемпионат NFL. Arizona vs. Tennessee</div>
                                    </Stack>
                                    <iframe src="https://vk.com/video_ext.php?oid=-154666590&id=456239072&hash=46e6c01a4d9844fa&hd=2" width="965" height="480" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
                                        <Stack gap={2} className="col-md-5 mx-auto">
                                        <Button href='/donate' className={styles.donateText}>Поддержать проект</Button>
                                        </Stack>
                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content>
                                <Tab.Pane eventKey='eleven'>
                                <Stack gap={3}>
                                      <div className={styles.broadcastText}>Регулярный чемпионат NFL. Green Bay vs. New Orleans</div>
                                    </Stack>
                                    <iframe src="https://vk.com/video_ext.php?oid=-154666590&id=456239072&hash=46e6c01a4d9844fa&hd=2" width="965" height="480" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
                                        <Stack gap={2} className="col-md-5 mx-auto">
                                        <Button href='/donate' className={styles.donateText}>Поддержать проект</Button>
                                        </Stack>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}