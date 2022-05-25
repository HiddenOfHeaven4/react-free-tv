import React, { Component } from 'react'
import { Container, Tab, Stack } from 'react-bootstrap'
import styles from '../styles/App.module.css';
import { Accordion } from 'react-bootstrap';


export default class Donate extends Component {
    render() {
        return (
            <Container style={{ width: '1000px'}}>
                <Tab.Container>
                    <Tab.Content className='mt-5'>
                    <Stack gap={3}>
                    <div className={styles.broadcastText}>Ваша поддержка очень важна для нас, и мотивирует делать новые проекты.</div>
                    </Stack>
                    <Stack>
                    <iframe src="https://yoomoney.ru/quickpay/shop-widget?writer=seller&targets=%D0%A1%D0%BF%D0%B0%D1%81%D0%B8%D0%B1%D0%BE%20%D0%B7%D0%B0%20%D1%82%D1%80%D0%B0%D0%BD%D1%81%D0%BB%D1%8F%D1%86%D0%B8%D1%8E)))&default-sum=50&button-text=14&payment-type-choice=on&mobile-payment-type-choice=on&successURL=&quickpay=shop&account=4100117806510074&" width="100%" height="222" frameborder="0" allowtransparency="true" scrolling="no"></iframe>
                    </Stack>
                    </Tab.Content>
                </Tab.Container>
                <Accordion className='d-flex justify-content-center'>
                 <Accordion.Item className={styles.payment} eventKey="0">
                 <Accordion.Header>Помочь прямым переводом на Тинькофф</Accordion.Header>
                    <Accordion.Body>
                        2200 7001 4270 4617 
                        Получатель: Отто Г.В.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className={styles.payment} eventKey="1">
                <Accordion.Header>Помочь прямым переводом на Сбербанк</Accordion.Header>
                    <Accordion.Body>
                        5469 5400 1982 5734
                        Получатель: Кузьминых В.А.
                    </Accordion.Body>
                </Accordion.Item>
                </Accordion>
            </Container>
        )
    }
}

