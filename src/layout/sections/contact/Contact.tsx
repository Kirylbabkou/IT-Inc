import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import contact from "../../../assets/img/contact.webp"
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {Icon} from "../../../components/icon/Icon";

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <SectionTitle>Contact me</SectionTitle>
                <FlexWrapper wrap="wrap" alignItems="center" justifyContent="space-around">
                    <Photo src={contact} alt="Contact"/>
                    <StyledForm>
                        <Field placeholder="Enter email address" name="e-mail" type="email" />
                        <Field as={'textarea'} name={'textarea'} placeholder="Enter message..."/>
                        <ButtonForm type={'submit'}>Send Message <Icon iconId={'send'}/> </ButtonForm>
                    </StyledForm>
                </FlexWrapper>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section` 
    min-height: 450px;
    margin: 100px 0 70px 0;        
`

const Photo = styled.img`
    max-width: 563px;
    //min-height: 389px;
    object-fit: cover;
    margin: 10px    
`
const StyledForm = styled.form`
    max-width: 613px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
        
    textarea {
        resize: none;
        height: 158px;
    }
`

const Field = styled.input`
    //margin-bottom: 20px;
    padding: 11px 19px 11px 19px;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    font-family: "Be Vietnam Pro", sans-serif;
    font-size: 14px;
    line-height: 207%;
    color: ${theme.colors.secondaryFont};
    
    &:focus-visible {
        outline: 1px solid rgba(0, 0, 0, 0.12);
    }      
`
const ButtonForm = styled.button`
    background-color: ${theme.colors.secondary};
    border-radius: 4px;
    padding: 12px 24px;
    width: 213px;
    height: 50px;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    border: none;    
`