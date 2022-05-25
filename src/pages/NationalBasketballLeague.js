import React, { Component } from 'react';
import { Nav, Row, Col, Tab, Container, Stack, Button } from 'react-bootstrap';
import styles from '../styles/App.module.css';

export default class NationalBasketballLeague extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id='ledt-tabs-example' defaultActiveKey='four'>
                    <Row>
                        <Col sm={3}>
                            <Nav className='flex-column mt-4'>
                                <Nav.Item>
                                    <Nav.Link className={styles.broadcastText} eventKey='four'>Восточная конференция №1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={styles.broadcastText} eventKey='five'>Восточная конференция №2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={styles.broadcastText} eventKey='six'>Западная конференция №1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={styles.broadcastText} eventKey='seven'>Западная конференция №2</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className='mt-5'>
                                <Tab.Pane eventKey='four'>
                                <Stack gap={3}>
                                     <div className={styles.broadcastText}>Плейофф НБА. Второй раунд 1/4. Boston Celtics vs. Milwaukee Bucks</div>
                                    </Stack>
                                    <iframe src="https://vk.com/video_ext.php?oid=-154666590&id=456239072&hash=46e6c01a4d9844fa&hd=2"  width="965" height="480" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
                                        <Stack gap={2} className="col-md-5 mx-auto">
                                        <Button href='/donate' className={styles.donateText}>Поддержать проект</Button>
                                        </Stack>
                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content>
                                <Tab.Pane eventKey='five'>
                                <Stack gap={3}>
                                      <div className={styles.broadcastText}>Плейофф НБА. Второй раунд 1/4. Miami Heat vs. Philadelphia 76ers</div>
                                    </Stack>
                                    <iframe src="https://vk.com/video_ext.php?oid=-154666590&id=456239072&hash=46e6c01a4d9844fa&hd=2" width="965" height="480" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
                                        <Stack gap={2} className="col-md-5 mx-auto">
                                        <Button href='/donate' className={styles.donateText}>Поддержать проект</Button>
                                        </Stack>
                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content>
                                <Tab.Pane eventKey='six'>
                                <Stack gap={3}>
                                      <div className={styles.broadcastText}>Плейофф НБА. Второй раунд 1/4. Memphis Grizzlies vs. Golden State Warriors</div>
                                    </Stack>
                                    <iframe src="https://vk.com/video_ext.php?oid=-154666590&id=456239072&hash=46e6c01a4d9844fa&hd=2" width="965" height="480" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
                                        <Stack gap={2} className="col-md-5 mx-auto">
                                        <Button href='/donate' className={styles.donateText}>Поддержать проект</Button>
                                        </Stack>
                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content>
                                <Tab.Pane eventKey='seven'>
                                <Stack gap={3}>
                                      <div className={styles.broadcastText}>Плейофф НБА. Второй раунд 1/4. Phoenix Suns vs. Dallas Mavericks</div>
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