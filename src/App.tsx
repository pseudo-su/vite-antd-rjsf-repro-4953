import { withTheme } from "@rjsf/core";
import { Theme as AntDTheme } from "@rjsf/antd";
import validator from "@rjsf/validator-ajv8";
import type { RJSFSchema } from "@rjsf/utils";
import schema from "./example.schema.json";
import uiSchema from "./example.uiSchema.json";
import formData from "./example.formData.json";

const JsonSchemaForm = withTheme(AntDTheme);

import { Button } from "antd";

const App = () => (
  <div className="App">
    <Button type="primary">Button</Button>
    <JsonSchemaForm
      schema={schema as RJSFSchema}
      uiSchema={uiSchema}
      initialFormData={formData}
      validator={validator}
    />
  </div>
);

export default App;
