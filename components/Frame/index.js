import Frame from './Frame';
import { IntlProvider } from 'react-intl';
import { IntlProvider as RSIntlProvider } from 'rsuite';

import enGB from 'rsuite/lib/IntlProvider/locales/en_GB';
import locales from '../../locales';

import './styles.less';

export default ({ children, activeKey }) => {
  return (
    <IntlProvider locale="en" messages={locales.en}>
      <RSIntlProvider locale={enGB}>
        <Frame activeKey={activeKey}>{children}</Frame>
      </RSIntlProvider>
    </IntlProvider>
  );
};
