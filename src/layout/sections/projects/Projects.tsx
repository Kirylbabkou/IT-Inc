import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";


export const Projects = () => {
    return (
        <StyledProjects>

                <div>

                    <h3><Icon iconId={'projectsSvg'} />Projects</h3>
                </div>
                <span>A select number of projects</span>
            <FlexWrapper wrap="wrap">

                <ul>
                    <li><img src="" alt=""/>
                        <span>Made a social media manager template using HTML 5, CSS and JS.</span>
                        <button>
                            <a>Learn More</a>
                        </button>
                    </li>
                    <li><img src="" alt=""/></li>
                    <li><img src="" alt=""/></li>
                </ul>

            </FlexWrapper>

        </StyledProjects>
    );
};

const StyledProjects = styled.div``