import React from 'react';
import { ThemeProvider } from 'styled-components';

import light from '../src/styles/themes/light';
import { BaseCSS } from '../src/styles/BaseCSS';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={light}>
    <BaseCSS/>
    {element}
  </ThemeProvider>
);
