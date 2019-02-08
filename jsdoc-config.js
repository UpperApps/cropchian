'use strict';

module.exports = {
    plugins: ['node_modules/jsdoc-vuejs', 'plugins/markdown'],
    source: {
        includePattern: '\\.(vue|js)$',
        include: ['src', 'tests']
    },
    babel: {
        extensions: ['js', 'es6', 'jsx'],
        presets: ['es2015', 'es2015-loose', 'stage-1']
    },
    opts: {
        template: 'node_modules/tui-jsdoc-template', // same as -t templates/default
        encoding: 'utf8', // same as -e utf8
        destination: './docs/', // same as -d ./out/
        recurse: true, // same as -r
        readme: 'README.md'
    },
    tags: {
        allowUnknownTags: true,
        dictionaries: ['jsdoc']
    },
    templates: {
        name: 'Sample JSDoc Doc',
        logo: {
            url:
                'C:/Repositories/UpperApps/cropchien/public/img/icons/favicon-32x32.png',
            width: '32px',
            height: '32px',
            link: 'C:/Repositories/UpperApps/cropchien/docs/index.html'
        },
        footerText: 'Code rocks!',
        useCollapsibles: true,
        tabNames: {
            api: 'API',
            tutorials: 'Examples'
        },
        cleverLinks: true,
        monospaceLinks: true
    },
    default: {
        outputSourceFiles: true,
        includeDate: true
    }
};
