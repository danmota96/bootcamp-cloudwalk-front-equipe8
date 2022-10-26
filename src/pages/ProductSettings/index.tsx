import { SearchIcon } from "assets/icons";
import DeleteProductModal from "components/Modal/DeleteProductModal";
import ProductModal from "components/Modal/ProductModal";
import ProductSettingsCard from "components/ProductSettingsCard";
import SettingsMenu from "components/SettingsMenu";
import { useProducts } from "contexts/products";
import { useState } from "react";
import { Product } from "types";
import * as styled from "./styles";


const ProductSettings = () => {
  const { products } = useProducts();
  const [product, setProduct] = useState<Product | undefined>(undefined);

  /* ----MODAL---    */
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };
  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  };
  /* --------- */

  return (
    <styled.SettingsContainer>
      <SettingsMenu path={"products"} />
      <styled.EditEntitiesContainer>
        <h2>Manage Products</h2>
        <styled.SettingsNav>
        <styled.AddEntitieCard onClick={handleOpenModal}>
            <p>Create Product</p>
          </styled.AddEntitieCard>
          <styled.SearchInputContainer>
          <div>
            <SearchIcon />
          </div>
          <input type="text" />
        </styled.SearchInputContainer>
        </styled.SettingsNav>
        <styled.Bar />
        <styled.Header>
        <h2>Code</h2>
        <h2>Name</h2>
        <h2>Category</h2>
        <h2>Price</h2>
        <h2>Image</h2>
        <div>
        <h2>Action</h2>
        </div>
     
        </styled.Header>
        <styled.Bar />
        <styled.EntitiesList>
         

          {products.map((element) => (
            <ProductSettingsCard
              handleOpenModal={handleOpenModal}
              handleOpenDeleteModal={handleOpenDeleteModal}
              setProduct={setProduct}
              product={element}
              key={element.id}
            />
          ))}
        </styled.EntitiesList>
      </styled.EditEntitiesContainer>

      {openModal && (
        <ProductModal
          setProduct={setProduct}
          product={product}
          handleOpenModal={handleOpenModal}
        />
      )}

      {openDeleteModal && (
        <DeleteProductModal
          setProduct={setProduct}
          productId={product?.id}
          handleOpenDeleteModal={handleOpenDeleteModal}
        />
      )}
    </styled.SettingsContainer>
  );
};

export default ProductSettings;
