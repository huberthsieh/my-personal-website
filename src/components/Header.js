import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

const links = [
    {
        id: 1,
        url: '/',
        text: 'HOME'
    },
    {
        id: 2,
        url: '/portfolio',
        text: 'AAA'
    },
    {
        id: 3,
        url: '/BLOG',
        text: 'BBB'
    },
    {
        id: 4,
        url: '/portfolio',
        text: 'CCC'
    },
    {
        id: 5,
        url: '/BLOG',
        text: 'DDD'
    },
    {
        id: 6,
        url: '/BLOG',
        text: 'EEE'
    }
]

// const isActive = true;

const useEffect = (() => {
    console.log('First Rendering');
}, [])

const Header = props => {
    return (
        <CustomHeader id="header">
            {
                links.map(link => (
                    <Link key={ link.id } to={ link.url }> { link.text } </Link>
                ))
            }
        </CustomHeader>
    );
};

// Header.propTypes = {
//
// };

const CustomHeader = styled.header`
    width: 100%;
    height: auto;
    display: flex;
  
    a {
        border: solid 2px ${props => props.theme.black};
        width: calc(100% / 6);
        text-align: center;
        padding: 12px 24px;
        font-size: 18px;
        font-weight: 700;
      
        &:not(:last-child) {
            border-right: none;
        }
      
        &:hover {
            background-color: ${props => props.theme.purple};
        }
    }
`

export default Header;