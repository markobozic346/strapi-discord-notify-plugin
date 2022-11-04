/*
 *
 * HomePage
 *
 */

import React from "react";
import { TextInput } from "@strapi/design-system/TextInput";

import { Button } from "@strapi/design-system/Button";
import { Box } from "@strapi/design-system/Box";
import { BaseHeaderLayout, HeaderLayout } from "@strapi/design-system/Layout";
const HomePage: React.VoidFunctionComponent = () => {
  return (
    <>
      <BaseHeaderLayout
        title="Discord Notify"
        primaryAction={<Button>Save</Button>}
      />
      <Box padding={10}>
        <TextInput
          placeholder="Discord web hook url here"
          label="Discord WebHook Url"
          hint="Description line"
        />
      </Box>
    </>
  );
};

export default HomePage;
