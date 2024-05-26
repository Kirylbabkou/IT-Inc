import React from 'react';
import photo from '../../../assets/img/photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {Icon} from "../../../components/icon/Icon";
import {S} from '../main/Main_Styles'


export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper  alignItems="center" justifyContent="space-around"
                              wrap="wrap-reverse"
                >
                    <S.BlockInfo>
                        <S.MainSpanTitle>Hi👋, I’m a</S.MainSpanTitle>
                        <S.MainTitle>Software Developer</S.MainTitle>
                        <S.MainSpan>I’m <b>Kirill Bobkov</b>, a developer dedicated to making the world a better place one line of code at a time.</S.MainSpan>
                        <div>
                            <S.MainButton>Hire me</S.MainButton>
                        </div>
                    </S.BlockInfo>
                    <S.PhotoWrapper>
                        <Icon id={'ring'} width="22" height="22" viewBox="0 0 22 22" iconId={"ring"}/>
                        {/*<span id={'ring'}><Icon width="22" height="22" viewBox="0 0 22 22" iconId={"ring"}/></span>*/}
                        <Icon id={'zigzag'} width="38" height="98" viewBox="0 0 43 98" iconId={"zigzag"}/>
                        <Icon id={'plus'} width="27" height="27" viewBox="0 0 27 27" iconId={"plus"}/>
                        <Icon id={'cube'} width="40" height="40" viewBox="0 0 40 40" iconId={"cube"}/>
                        <Icon id={'circles'} width="120" height="76" viewBox="0 0 120 76" iconId={"circles"}/>

                        <S.Photo src={photo} alt=""/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};


