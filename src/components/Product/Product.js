import {
  Container,
  ImageWrapper,
  Image,
  NameWrapper,
  Name,
} from "./Product.elements.js";
import { getUserId } from "../../services/api.js";

const getName = (nameObj) => {
  return Object.values(nameObj)[0];
};

const Product = ({ productData }) => {
  const user_id = getUserId();
  const { images, name, id } = productData;
  return (
    <Container href={`http://localhost:1234/?store=${user_id}&id=${id}`}>
      <ImageWrapper>
        <Image alt={getName(name)} src={images[0].src} />
      </ImageWrapper>
      <NameWrapper>
        <Name>{getName(name)}</Name>
      </NameWrapper>
    </Container>
  );
};
export default Product;
