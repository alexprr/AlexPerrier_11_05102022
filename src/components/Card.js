import PropTypes from "prop-types";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 15px;
  background: linear-gradient(180deg, rgba(255, 96, 96, 1), rgba(0, 0, 0, 1));
  border-radius: 10px;
  width: 340px;
  height: 340px;
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

function Card({ title }) {
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
    </CardWrapper>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Card;
