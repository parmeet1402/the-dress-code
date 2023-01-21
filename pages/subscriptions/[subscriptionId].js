import { useRouter } from "next/router";

import SingleSubscriptionPageContainer from "pageContainer/SingleSubscriptionPageContainer";

const SingleSubscriptionPage = () => {
  const router = useRouter();
  const subscriptionId = router.query.subscriptionId;

  return <SingleSubscriptionPageContainer subscriptionId={subscriptionId} />;
};
export default SingleSubscriptionPage;
