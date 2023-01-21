import { useRouter } from "next/router";
import ThemePageContainer from "pageContainer/ThemePageContainer";

const ThemePage = () => {
  const router = useRouter();
  const selectedTheme = router.query.selectedTheme;
  return <ThemePageContainer selectedTheme={selectedTheme} />;
};

export default ThemePage;
