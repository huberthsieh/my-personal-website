import * as React from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Layout from "../components/Layout";

const theme = {
    black: '#363636',
    white: '#F3F3F3',
    purple: '#CDB4FF',
    green: '#B4FFC9'
}

const GlobalStyle = createGlobalStyle`
    html, body {
        fontFamily: "微軟正黑體, -apple-system, Roboto, sans-serif, serif";
      
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
    }
    a {
        color: ${theme.black};
        text-decoration: none;
    }
    main {
        width: 100%;
        height: 100%;
    }
`

const IndexPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <main style={theme}>
                <Layout>

                    <Intro>
                        <Title># User Name</Title>

                        <IntroInner>
                            <p>
                                I'm Hubert Hsieh. A Front-end Developer living in Taiwan.
                            </p>
                            <div>
                                這是圖片
                            </div>
                        </IntroInner>
                    </Intro>

                    <Section>
                        <Title># Experience</Title>

                        <ExperienceInner>
                            <p>111111</p>
                            <p>111111</p>
                            <p>111111</p>
                            <p>111111</p>
                            <p>111111</p>
                            <p>111111</p>
                        </ExperienceInner>
                    </Section>

                    <Section>
                        <Title># Education</Title>

                        <EducationInner>
                            <p>111111</p>
                            <p>111111</p>
                            <p>111111</p>
                            <p>111111</p>
                            <p>111111</p>
                            <p>111111</p>
                        </EducationInner>

                    </Section>

                    <Section>
                        <Title># Skill</Title>
                    </Section>

                </Layout>
            </main>
        </ThemeProvider>
    )
}

// Styled
const Title = styled.h2`
  border: solid 2px blue;
  width: 100%;
  padding: 20px 35px;
  font-size: 32px;
`

const Intro = styled.section`
    border: solid 2px red;
`

const IntroInner = styled.div`
    border: solid 2px green;
    display: flex;
    width: 100%;
    height: 500px;
    
    p {
        padding: 20px 35px;
    }
  
    & * {
        width: 50%;
        border: solid 2px orange;
    }
`

const Section = styled.section`
    border: solid 2px red;
`

const ExperienceInner = styled.div`
    border: solid 2px blue;
    padding: 20px 35px;
    display: flex;
    flex-wrap: wrap;
  
    p {
        border: solid 2px black;
        padding: 20px 35px;
        width: calc(100% / 3);
    }
`

const Education = styled.div`
    border: solid 2px red;
`

const EducationInner = styled.div`
    border: solid 2px green;
`


export default IndexPage

export const Head = () => <title>Home Page</title>
