import React from "react";
import IndexLayout from "../app/indexLayout";

import { LanguageProvider } from "@/app/components/index components/SwitchMode/lenguageSwitcher/lenguageSwitcher";
import { ModeProvider } from "@/app/components/index components/SwitchMode/modeSwitcher/modeSwitcher";

const IndexPage: React.FC = () => {
  return (
    <div>
      <ModeProvider>
        <LanguageProvider>
          <IndexLayout>
            <div>{null}</div>
          </IndexLayout>
        </LanguageProvider>
      </ModeProvider>
    </div>
  );
};

export default IndexPage;
