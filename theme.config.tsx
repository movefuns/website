import { DocsThemeConfig } from "nextra-theme-docs";
import { Footer } from "./components/layout/footer";
import Image from "next/image";
import { ExpandIcon } from "nextra/icons";
import { useRouter } from "next/router";

const theme: DocsThemeConfig = {
  docsRepositoryBase: "https://github.com/movefuns/website",
  logo: <Image src="/logo/logo.jpeg" alt="MoveFuns" width={50} height={50} />,
  useNextSeoProps() {
    return {
      titleTemplate: "%s – MoveFuns",
    };
  },
  project: {
    link: "https://github.com/movefuns",
  },
  i18n: [
    { locale: "en-US", text: "English" },
    // { locale: "zh-CN", text: "简体中文" },
  ],
  footer: {
    component: Footer,
  },
  search: {
    placeholder: () => {
      let {locale} = useRouter()
      return locale === "zh-CN" ? "搜索文章" : "Search Docs"
    }
    
  },
};

export default theme;
