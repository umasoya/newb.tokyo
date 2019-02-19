import hljs from 'highlight.js/lib/highlight';

import bash       from 'highlight.js/lib/languages/bash';
import dockerfile from 'highlight.js/lib/languages/dockerfile';
import go         from 'highlight.js/lib/languages/go';
import ini        from 'highlight.js/lib/languages/ini';
import javascript from 'highlight.js/lib/languages/javascript';
import json       from 'highlight.js/lib/languages/json';
import makefile   from 'highlight.js/lib/languages/makefile';
import nginx      from 'highlight.js/lib/languages/nginx';
import php        from 'highlight.js/lib/languages/php';
import sql        from 'highlight.js/lib/languages/sql';
import vim        from 'highlight.js/lib/languages/vim';
import xml        from 'highlight.js/lib/languages/xml';
import yaml       from 'highlight.js/lib/languages/yaml';

hljs.registerLanguage('sh', bash);
hljs.registerLanguage('dockerfile', dockerfile);
hljs.registerLanguage('go', go);
hljs.registerLanguage('ini', ini);
hljs.registerLanguage('js', javascript);
hljs.registerLanguage('json', json);
hljs.registerLanguage('makefile', makefile);
hljs.registerLanguage('nginx', nginx);
hljs.registerLanguage('php', php);
hljs.registerLanguage('sql', sql);
hljs.registerLanguage('vim', vim);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('yaml', yaml);

hljs.initHighlighting();
