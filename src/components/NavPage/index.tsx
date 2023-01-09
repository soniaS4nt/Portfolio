import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { Props } from "./interface";
import { ContainerPage } from "./styles";

const NavPage: React.FC<Props> = ({ page, setPage }) => {
  const handleBack = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < 4) setPage(page + 1);
  };

  return (
    <ContainerPage>
      <IconButton
        variant="outline"
        colorScheme="purple"
        aria-label="back page"
        icon={<ChevronLeftIcon />}
        onClick={handleBack}
      />
      <p>{`Page ${page}`}</p>
      <IconButton
        variant="outline"
        colorScheme="purple"
        aria-label="next page"
        icon={<ChevronRightIcon />}
        onClick={handleNext}
      />
    </ContainerPage>
  );
};

export default NavPage;
