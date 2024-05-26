import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import contact from "../../../assets/img/contact.webp"
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import sendImg from "../../../assets/img/send.svg"
import {S} from './Contact_Styled'

export const Contact = () => {
    return (
        <S.Contact>
            <Container>
                <SectionTitle>Contact me</SectionTitle>
                <FlexWrapper wrap="wrap" alignItems="center" justifyContent="space-around">
                    <S.Photo src={contact} alt="Contact"/>
                    <S.StyledForm>
                        <S.Field placeholder="Enter email address" name="e-mail" type="email" />
                        <S.Field as={'textarea'} name={'textarea'} placeholder="Enter message..."/>
                        <S.ButtonForm type={'submit'}>Send Message <img src={sendImg} alt={''}/> {/*<Icon iconId={'send'}/>*/} </S.ButtonForm>
                    </S.StyledForm>
                </FlexWrapper>
            </Container>
        </S.Contact>
    );
};

