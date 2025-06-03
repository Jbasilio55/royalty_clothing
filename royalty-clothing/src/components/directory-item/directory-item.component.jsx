import {
  DirectoryItemContainer,
  DirectoryLink,
  BackgroundImage,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <DirectoryLink to={`/shop/${title.toLowerCase()}`}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryLink>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
