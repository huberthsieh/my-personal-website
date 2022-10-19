import * as React from "react"
import styled from "styled-components";
import {Link} from "gatsby";

import Layout from "../components/layout";

const pageStyles = {
    color: "#232129",
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const Title = styled.h2`
  color: red;
`;

const IndexPage = () => {
    return (
        <main style={pageStyles}>
            <Layout>
                <Title>
                    Hubert's Site
                </Title>

                <Link to="/portfolio">
                    Go portfolio
                </Link>

                <Link to="/blog">
                    Go blog
                </Link>
            </Layout>
        </main>
    )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
