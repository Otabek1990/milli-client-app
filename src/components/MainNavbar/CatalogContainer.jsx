import { useCategoriesQuery } from "../../services/categoriesApi";
import { response } from "../Global/Response";
import CatalogContainerUi from "./CatalogContainerUi";

function CatalogContainer({ showCatalog, setShowCatalog }) {
  const { data: categories, isSuccess } = useCategoriesQuery();

  return (
    <div
      className={`${showCatalog ? "block" : "hidden"
        } ${response.containerBoxPadding} transition-all duration-300 min-h-screen  bg-white-Default w-full z-60 left-0 top-16 absolute z-40`}
    >
      {isSuccess && (
        <CatalogContainerUi
          setShowCatalog={setShowCatalog}
          categories={categories}
        />
      )}
    </div>
  );
}

export default CatalogContainer;
