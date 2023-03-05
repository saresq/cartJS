import packImage from "@assets/products/pack.png";
import genericImage from "@assets/products/generic.png";

const imagesById = {
  [0]: genericImage,
  [1]: genericImage,
  [2]: genericImage,
  [3]: genericImage,
  [4]: genericImage,
  [5]: packImage,
};

const getImage = (id) => imagesById[id];

export default getImage;
