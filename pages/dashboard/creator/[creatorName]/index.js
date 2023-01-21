import { useRouter } from "next/router";
import CreatorPageContainer from "pageContainer/CreatorPageContainer";

const CreatorPage = () => {
  const router = useRouter();
  const creatorName = router.query.creatorName;
  return <CreatorPageContainer creatorName={creatorName} />;
};

export default CreatorPage;
