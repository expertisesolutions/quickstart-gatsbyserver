import React from 'react';
import { ThemeProvider } from 'styled-components';

import light from '../src/styles/themes/light';
import { BaseCSS } from '../src/styles/BaseCSS';

export function wrapRootElement ({ element }) {
  return (
  <ThemeProvider theme={light}>
    <BaseCSS/>
    {element}
  </ThemeProvider>
  );
}