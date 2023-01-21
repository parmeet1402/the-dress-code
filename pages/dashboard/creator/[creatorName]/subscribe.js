import { useRouter } from "next/router";

import SubscribePageContainer from "pageContainer/SubscribePageContainer";

const SubscribePage = () => {
  const router = useRouter();
  const creatorName = router.query.creatorName;
  return <SubscribePageContainer creatorName={creatorName} />;
};

export default SubscribePage;
