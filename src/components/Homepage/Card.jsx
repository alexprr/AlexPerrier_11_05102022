import PropTypes from "prop-types";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 340px;
  height: 340px;
  transition: 200ms;
  border-radius: 25px;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`;

const CardTitle = styled.span`
  color: #fff;
  font-size: 18px;
  margin: 20px 20px;
  font-weight: 500;
  align-self: start;
`;

function Card({ title, cover }) {
  const CardStyle = {
    // backgroundImage: `url(${cover})`,
    background: `linear-gradient(0deg, rgba(106,106,106,.8) 0%, rgba(217,217,217,.1) 40%, rgba(255,255,255,.1) 77%), url(${cover}`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <CardWrapper style={CardStyle}>
      <CardTitle>{title}</CardTitle>
    </CardWrapper>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string,
};

export default Card;
