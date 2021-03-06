import React from 'react';
import TextField from 'material-ui/TextField';
import { Card, CardText } from 'material-ui/Card';

const SnippetArea = () => (
  <Card>
    <CardText>
    <TextField
      name="snippetName"
      hintText="Snippet Name"
    />
    <TextField
      fullWidth={true}
      floatingLabelFixed={true}
      floatingLabelText="Enter code here"
      multiLine={true}
      name="snippetArea"
      rows={30}
      textareaStyle={{
        'fontFamily': 'monospace',
      }}
    />
    </CardText>
  </Card>
);

export default SnippetArea;
