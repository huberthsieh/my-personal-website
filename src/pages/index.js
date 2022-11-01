import * as React from "react"
import { ThemeProvider } from "styled-components";
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout";
import "../sass/style.sass"


const theme = {
    black: '#363636',
    white: '#F3F3F3',
    purple: '#CDB4FF',
    green: '#B4FFC9'
}


const IndexPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <main>
                <Layout>
                    <section className="intro">
                        <div className="title"># ABOUT ME</div>

                        <div className="intro-inner">
                            <div className="intro-wrap">

                                <div className="intro-text">
                                    <h2 className="intro-title">
                                        I'm Hubert Hsieh. <br/> A Front-end Developer living in Taichung, Taiwan.
                                    </h2>

                                    <p className="intro-text">
                                        我是多年設計師經驗轉前端工程師，擅長客製化網站與RWD製作，
                                        喜歡追求美與有趣的事物，發現新奇的技術會想盡辦法學以實踐，
                                        期許自己能成為美感與技術兼具，最好還能帶點有趣想法的工程師。
                                    </p>
                                </div>

                                <div className="social">
                                    <StaticImage src="../images/github.png" alt="Github"/>
                                    <StaticImage src="../images/linkedin.png" alt="LinkedIn"/>
                                    <StaticImage src="../images/codepen.png" alt="Codepen"/>
                                </div>
                            </div>

                            <div className="intro-photo"></div>
                        </div>
                    </section>

                    <section>
                        <div className="title"># SKILL</div>

                        <div className="inner flex">
                            <p>React/Next/Gatsby.js</p>
                            <p>Vue2/Vue3.js</p>
                            <p>SpringBoot</p>
                            <p>Html/Pug/Css/Scss/Sass</p>
                            <p>Javascript</p>
                        </div>
                    </section>

                    <section>
                        <div className="title"># Experience</div>

                        <div className="inner">
                            <p>海鑫科技 2020 年 8 月 ~ 至今</p>
                            <p>麗仁科技 2019 年 6 月 ~ 2020 年 6 月</p>
                            <p>威德數位 2018 年 8 月 ~ 2019 年 5 月</p>
                        </div>
                    </section>

                    <section>
                        <div className="title"># Education</div>

                        <div className="inner">
                            <p>國立臺中科技大學 2007 - 2011</p>
                            <p>臺中市立臺中工業高級中等學校 2004 - 2007</p>
                        </div>
                    </section>

                    <section>
                        <div className="title"># Project</div>

                        <div className="inner">
                            <p>國立臺中科技大學 2007 - 2011</p>
                            <p>臺中市立臺中工業高級中等學校 2004 - 2007</p>
                        </div>
                    </section>

                </Layout>
            </main>
        </ThemeProvider>
    )
}


export default IndexPage

export const Head = () => <title>Home Page</title>
