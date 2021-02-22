import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const BurgerImg = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fixed(width: 225) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

      if (!image) {
        return null;
      }

      const imageFixed = image.node.childImageSharp.fixed;
      return <Img alt={alt} fixed={imageFixed} />;
    }}
  />
);

BurgerImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default BurgerImg;
