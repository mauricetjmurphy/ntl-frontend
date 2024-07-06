import { FC } from "react";

import { ContentLayout } from "../../global";
import { privacyPolicyData } from "../../../data/privacyPolicyData";
import { LegalTitle } from "../components/LegalTitle";
import { ParagraphList } from "../components/ParagraphList";

interface PrivacyProps {}

const Privacy: FC<PrivacyProps> = (props) => {
  return (
    <>
      <LegalTitle title={"Privacy Policy"} />
      <ContentLayout title={"Privacy Policy Page"} description={""}>
        <ParagraphList data={privacyPolicyData} />
      </ContentLayout>
    </>
  );
};

export default Privacy;
