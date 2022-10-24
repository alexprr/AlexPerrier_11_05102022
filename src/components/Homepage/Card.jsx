import PropTypes from "prop-types";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 340px;
  height: 340px;
  border-radius: 10px;
  transition: 200ms;
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
    borderRadius: "25px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${cover})`,
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
