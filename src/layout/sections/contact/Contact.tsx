import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import contact from "../../../assets/img/contact.webp"
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";

export const Contact = () => {
    return (
        <StyledContact>
            <SectionTitle>Contact me</SectionTitle>

            <FlexWrapper /*wrap="wrap"*/ alignItems="center" justifyContent="space-between">

                    <Photo src={contact} alt="Contact"/>
                    <StyledForm>
                        <Field placeholder="Enter email address" name="e-mail" type="email" />
                        <Field as={'textarea'} name={'textarea'} placeholder="Enter message..."/>
                        <Button type={'submit'}>Send Message</Button>
                    </StyledForm>

            </FlexWrapper>

        </StyledContact>
    );
};

const StyledContact = styled.section`
 background: #F7F6FB;
    min-height: 450px;
    //align-content: center;
    
`

const Photo = styled.img`
    //min-width: 344px;
    //min-height: 389px;
    object-fit: cover;
`
const StyledForm = styled.form`
    max-width: 613px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const Field = styled.input`
    //margin-bottom: 20px;
    padding: 11px 19px 11px 19px;
   
    
      
`