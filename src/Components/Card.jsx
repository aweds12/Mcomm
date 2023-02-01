import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Card = ({ x }) => {
  const navigate = useNavigate();

  return (
    <CardHolder onClick={() => navigate(`/${x.id}`)}>
      <div className="imgbox">
        <img src={x.thumbnail} alt="" />
      </div>
      <div className="cardbody">
        <p>
          Name: <b>{x.title}</b>
        </p>
        <p>
          Brand: <b>{x.brand}</b>
        </p>
        <p>
          Price: <b>${x.price}</b>
        </p>
        <p>
          Rating: <b>{x.rating}</b>/5
        </p>
      </div>
    </CardHolder>
  );
};

export default Card;

const CardHolder = styled.div`
  position: relative;
  background: #fff;
  box-shadow: 0 0 2px 1px #cdcdcd;
  border-radius: 0.25rem;
  overflow: hidden;
  cursor: pointer;
  transition: all 200ms linear;

  &:hover {
    .imgbox {
      width: 100%;
      height: 100%;
      aspect-ratio: inherit;
    }

    .cardbody {
      opacity: 0;
    }
  }

  .imgbox {
    position: relative;
    width: 100%;
    height: 62.5%;
    aspect-ratio: 5 / 4;
    overflow: hidden;
    transition: all 200ms linear;

    img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .cardbody {
    padding: 1rem;
    font-size: 0.9em;
    transition: all 200ms linear;

    p {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
`;
