import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { ProductsView } from './components/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Produtos - ${CONFIG.appName}`}</title>
      </Helmet>

      <ProductsView />
    </>
  );
}
