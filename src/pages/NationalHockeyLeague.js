import React, { Component } from 'react';
import { Nav, Row, Col, Tab, Container, Stack, Button } from 'react-bootstrap';
import styles from '../styles/App.module.css';

export default class NationalHockeyLeague extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id='ledt-tabs-example' defaultActiveKey='zero'>
                    <Row>
                        <Col sm={3}>
                            <Nav className='flex-column mt-4'>
                                <Nav.Item>
                                    <Nav.Link className={styles.broadcastText} eventKey='zero'>Восточная конференция №1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={styles.broadcastText} eventKey='one'>Восточная конференция №2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={styles.broadcastText} eventKey='two'>Западная конференция №1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={styles.broadcastText} eventKey='three'>Западная конференция №2</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className='mt-5'>
                                <Tab.Pane eventKey='zero'>
                                <Stack gap={3}>
                                     <div className={styles.broadcastText}>Кубок Стэнли. Первый раунд плей-офф 1/8. Caroline Hurricanes vs. Boston Bruins</div>
                                    </Stack>
                                    <iframe src="https://vk.com/video_ext.php?oid=-213069774&id=456239018&hash=bde8263833a0022a"  width="965" height="480" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
                                    <Stack gap={2} className="col-md-5 mx-auto">
                                        <Button href='/donate' className={styles.donateText}>Поддержать проект</Button>
                                        </Stack>
                                        <Stack gap={3}>
                                     <div className={styles.broadcastText}>Кубок Стэнли. Первый раунд плей-офф 1/8. Toronto Maple Leafs vs. Tampa Bay Lightning</div>
                                    </Stack>
                                    <iframe src="https://vk.com/video_ext.php?oid=-119970738&id=456247890&hash=d78952206c3df82e&hd=2"  width="965" height="480" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
                                        <Stack gap={2} className="col-md-5 mx-auto">
                                        <Button href='/donate' className={styles.donateText}>Поддержать проект</Button>
                                        </Stack>
                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content>
                                <Tab.Pane eventKey='one'>
                                <Stack gap={3}>
                                     <div className={styles.broadcastText}>Кубок Стэнли. Первый раунд плей-офф 1/8. New York Rangers vs. Pittsburgh Penguins</div>
                                    </Stack>
                                    <iframe src="https://vk.com/video_ext.php?oid=-6450839&id=456243074&hash=01f80c6ee6a66c35&hd=2" width="965" height="480" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
                                    <Stack gap={2} className="col-md-5 mx-auto">
                                        <Button href='/donate' className={styles.donateText}>Поддержать проект</Button>
                                        </Stack>
                                        <Stack gap={3}>
                                     <div className={styles.broadcastText}>Кубок Стэнли. Первый раунд плей-офф 1/8. Florira Panthers vs. Washington Capitals</div>
                                    </Stack>
                                    <iframe src="https://vk.com/video_ext.php?oid=-6450839&id=456243074&hash=01f80c6ee6a66c35&hd=2" width="965" height="480" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
                                        <Stack gap={2} className="col-md-5 mx-auto">
                                        <Button href='/donate' className={styles.donateText}>Поддержать проект</Button>
                                        </Stack>
                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content>
                                <Tab.Pane eventKey='two'>
                                <Stack gap={3}>
                                     <div className={styles.broadcastText}>Кубок Стэнли. Первый раунд плей-офф 1/8. Edmonton Oilers vs. Los Angeles Kings</div>
                                    </Stack>
                                    <iframe src="https://vk.com/video_ext.php?oid=-6450839&id=456243075&hash=4f4ef557d224f9a8&hd=2"  width="965" height="480" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
                                        <Stack gap={2} className="col-md-5 mx-auto">
                                        <Button href='/donate' className={styles.broadcastText}>Поддержать проект</Button>
                                        </Stack>
                                        <Stack gap={3}>
                                     <div className={styles.broadcastText}>Кубок Стэнли. Первый раунд плей-офф 1/8. Minnesota Wild vs. St.Louis Blues</div>
                                    </Stack>
                                    <iframe src="https://vk.com/video_ext.php?oid=-119970738&id=456247891&hash=3bb60153a2927b2a&hd=2" width="965" height="480" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
                                        <Stack gap={2} className="col-md-5 mx-auto">
                                        <Button href='/donate' className={styles.broadcastText}>Поддержать проект</Button>
                                        </Stack>
                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content>
                                <Tab.Pane eventKey='three'>
                                <Stack gap={3}>
                                     <div className={styles.broadcastText}>Кубок Стэнли. Первый раунд плей-офф 1/8. Calgary Flames vs. Dallas Stars</div>
                                    </Stack>
                                    <iframe src="https://vk.com/video_ext.php?oid=-6450839&id=456243074&hash=01f80c6ee6a66c35&hd=2" width="965" height="480" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
                                        <Stack gap={2} className="col-md-5 mx-auto">
                                        <Button href='/donate' className={styles.broadcastText}>Поддержать проект</Button>
                                        </Stack>
                                        <Stack gap={3}>
                                     <div className={styles.broadcastText}>Кубок Стэнли. Первый раунд плей-офф 1/8. Colorado Avalanche vs. Nashville Predators</div>
                                    </Stack>
                                    <iframe src="https://vk.com/video_ext.php?oid=-6450839&id=456243074&hash=01f80c6ee6a66c35&hd=2" width="965" height="480" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen></iframe>
                                        <Stack gap={2} className="col-md-5 mx-auto">
                                        <Button href='/donate' className={styles.broadcastText}>Поддержать проект</Button>
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