import { getRenderer } from 'E:/Code/TransferFunction.github.io/.codedoc/node_modules/@codedoc/core/dist/es5/transport/renderer.js';
import { initJssCs } from 'E:/Code/TransferFunction.github.io/.codedoc/node_modules/@codedoc/core/dist/es5/transport/setup-jss.js';initJssCs();
import { installTheme } from 'E:/Code/TransferFunction.github.io/.codedoc/content/theme.ts';installTheme();
import { codeSelection } from 'E:/Code/TransferFunction.github.io/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from 'E:/Code/TransferFunction.github.io/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from 'E:/Code/TransferFunction.github.io/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from 'E:/Code/TransferFunction.github.io/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from 'E:/Code/TransferFunction.github.io/.codedoc/node_modules/@codedoc/core/dist/es5/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from 'E:/Code/TransferFunction.github.io/.codedoc/node_modules/@codedoc/core/dist/es5/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from 'E:/Code/TransferFunction.github.io/.codedoc/node_modules/@codedoc/core/dist/es5/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from 'E:/Code/TransferFunction.github.io/.codedoc/node_modules/@codedoc/core/dist/es5/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from 'E:/Code/TransferFunction.github.io/.codedoc/node_modules/@codedoc/core/dist/es5/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from 'E:/Code/TransferFunction.github.io/.codedoc/node_modules/@codedoc/core/dist/es5/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from 'E:/Code/TransferFunction.github.io/.codedoc/node_modules/@codedoc/core/dist/es5/components/page/toc/search/post-nav/index.js';postNavSearch();
import { reloadOnChange } from 'E:/Code/TransferFunction.github.io/.codedoc/node_modules/@codedoc/core/dist/es5/serve/reload.js';reloadOnChange();
import { ToCPrevNext } from 'E:/Code/TransferFunction.github.io/.codedoc/node_modules/@codedoc/core/dist/es5/components/page/toc/prevnext/index.js';
import { ToCToggle } from 'E:/Code/TransferFunction.github.io/.codedoc/node_modules/@codedoc/core/dist/es5/components/page/toc/toggle/index.js';
import { DarkModeSwitch } from 'E:/Code/TransferFunction.github.io/.codedoc/node_modules/@codedoc/core/dist/es5/components/darkmode/index.js';
import { ConfigTransport } from 'E:/Code/TransferFunction.github.io/.codedoc/node_modules/@codedoc/core/dist/es5/transport/config.js';
import { TabSelector } from 'E:/Code/TransferFunction.github.io/.codedoc/node_modules/@codedoc/core/dist/es5/components/tabs/selector.js';
import { CollapseControl } from 'E:/Code/TransferFunction.github.io/.codedoc/node_modules/@codedoc/core/dist/es5/components/collapse/collapse-control.js';

const components = {
  'bdvnXSUbZghEDX6qMcrwxg==': ToCPrevNext,
  'M8JESI1sZd2Mjeio5WUSXw==': ToCToggle,
  'Iwtv5q7cDgmKnYWAZ0bPfA==': DarkModeSwitch,
  'vCLSAyCnLGGVKoV415QQKg==': ConfigTransport,
  'bcZDyyDMmiAJXhQswoYcoQ==': TabSelector,
  'iLVWldLo5BvQXvR3ryShmg==': CollapseControl
};

const renderer = getRenderer();
const ogtransport = window.__sdh_transport;
window.__sdh_transport = function(id, hash, props) {
  if (hash in components) {
    const target = document.getElementById(id);
    renderer.render(renderer.create(components[hash], props)).after(target);
    target.remove();
  }
  else if (ogtransport) ogtransport(id, hash, props);
}
