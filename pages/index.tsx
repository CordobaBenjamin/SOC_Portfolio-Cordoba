import React from "react";
import IndexLayout from "../app/indexLayout"
import { LanguageProvider } from "@/app/components/index components/components/lenguageSwitcher";
import { LanguageSwitcher } from "@/app/components/index components/components/lenguageSwitcher";

const IndexPage: React.FC = () => {
  return (
    <div> 
    <LanguageProvider>
    <IndexLayout>
      <div>
        {null}
      </div>
    </IndexLayout>
    </LanguageProvider>
    </div>
  );
};

export default IndexPage;