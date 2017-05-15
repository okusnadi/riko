module.exports = () => {
    const Mock = {};

    Mock.config = {
        bail: 'boolean',
        context: 'string',
        devtool: 'string',
        entry: 'object',
        module: 'object',
        output: 'object',
        plugins: 'array',
        resolve: 'object',
        stats: 'object'
    };
    Mock.customConfig = {
        vars:  'object',
        moduleName:  'string',
        baseDir:  'string',
        destDir:  'string',
        srcDir:  'string',
        tempDir: 'string',
        SERVER_PORT:  'number',
        EXPRESS_ROOT:  'string',
        eslintConfig:  'string',
        stylelintConfig:  'string',
        packageJson:  'string',
        nightwatchConfig: 'string',
        srcFiles: 'array',
        electronPackagerOptions: 'object',
        buildFiles: 'array',
        js_main_file_name:  'string',
        js_main_entry_path:  'string',
        js_output_path:  'string',
        js_external_scripts: 'array',
        js_runtime_configs: 'array',
        styles_main_file_name:  'string',
        styles_external_stylesheets: 'array',
        requiresTemplate: 'boolean',
        template_main_file_name:  'string',
        template_stats_file_name:  'string',
        template_src_path:  'string',
        template_engine:  'string',
        gaEnable: 'boolean',
        gaTrackingId: 'string',
        gaPageViewOnLoad: 'boolean',
        media_audio_output_path:  'string',
        media_files_output_path:  'string',
        media_fonts_output_path:  'string',
        media_images_output_path:  'string',
        media_video_output_path:  'string',
        media_favicon_path: 'string',
        imageminConfig:  'object',
        externalModulePaths: 'object',
        externalModules:  'object',
        browserstackUsername: 'string',
        browserstackAccessKey: 'string',
        hotExecuteTests: 'boolean',
        sourcemapDev: 'boolean',
        sourcemapProd: 'boolean',
        sourcemapType: 'string',
        autoprefixerOptions:  'object',
        useWebpackDevMiddleWareInsteadOfDevServer: 'boolean',
        hotReloadingOptions:  'object',
        BrowserSyncReloadOnChange: 'boolean',
        enableRemoteDebugging: 'boolean',
        onBuildStartShellCommands:  'array',
        onBuildEndShellCommands:  'array',
        onBuildExitShellCommands:  'array',
        failOnProdBuildJsError:  'boolean',
        failOnProdBuildStyleError:  'boolean',
        eslintQuietMode: 'boolean',
        enableWebpackVisualizer: 'boolean'
    };
    Mock.packageJson = {};
    Mock.packageJson.devDependencies = {
        "autoprefixer": "^6.4.0",
        "babel-cli": "^6.11.4",
        "babel-core": "^6.13.2",
        "babel-eslint": "^7.0.0",
        "babel-jest": "^17.0.0",
        "babel-loader": "^6.2.4",
        "babel-plugin-istanbul": "^3.0.0",
        "babel-plugin-react-transform": "^2.0.2",
        "babel-plugin-transform-runtime": "^6.12.0",
        "babel-polyfill": "^6.13.0",
        "babel-preset-es2015": "^6.14.0",
        "babel-preset-react": "^6.11.1",
        "babel-preset-react-hmre": "^1.1.1",
        "babel-register": "^6.11.6",
        "babel-runtime": "^6.11.6",
        "browser-sync": "^2.14.0",
        "browser-sync-webpack-plugin": "^1.1.2",
        "chai": "^3.5.0",
        "chalk": "^1.1.3",
        "chokidar": "^1.6.1",
        "clean-webpack-plugin": "^0.1.10",
        "connect-history-api-fallback": "^1.3.0",
        "copy-webpack-plugin": "^4.0.0",
        "css-loader": "^0.25.0",
        "electron": "^1.4.5",
        "electron-packager": "^8.2.0",
        "eslint": "^3.3.0",
        "eslint-loader": "1.5.0",
        "eslint-plugin-react": "^6.7.1",
        "expose-loader": "^0.7.1",
        "express": "^4.14.0",
        "express-history-api-fallback": "^2.0.0",
        "extract-text-webpack-plugin": "^1.0.1",
        "file-loader": "^0.9.0",
        "flow-bin": "^0.37.0",
        "fs-extra": "^1.0.0",
        "gulp": "^3.9.1",
        "gulp-debug": "^3.0.0",
        "gulp-eslint": "^3.0.1",
        "gulp-load-plugins": "^1.2.4",
        "gulp-nightwatch": "^0.3.2",
        "gulp-plumber": "^1.1.0",
        "gulp-util": "^3.0.7",
        "html-webpack-plugin": "^2.22.0",
        "imagemin-webpack-plugin": "^1.1.0",
        "ip": "^1.1.3",
        "istanbul": "^0.4.5",
        "jasmine-core": "^2.4.1",
        "jest": "^17.0.0",
        "jest-cli": "^17.0.0",
        "json-loader": "^0.5.4",
        "less": "^2.7.1",
        "less-loader": "^2.2.3",
        "lodash": "^4.15.0",
        "mocha": "^3.0.2",
        "mocha-lcov-reporter": "^1.2.0",
        "morgan": "^1.7.0",
        "node-sass": "^3.8.0",
        "postcss-loader": "^1.0.0",
        "progress-bar-webpack-plugin": "^1.9.0",
        "pug": "^2.0.0-beta5",
        "pug-loader": "^2.2.1",
        "q": "^1.4.1",
        "q-io": "^1.13.2",
        "react-addons-test-utils": "^15.3.0",
        "react-hot-loader": "^3.0.0-beta.6",
        "react-test-renderer": "^15.3.1",
        "react-tools": "^0.13.3",
        "react-transform-hmr": "^1.0.4",
        "redux-devtools": "^3.3.1",
        "sass-loader": "^4.0.0",
        "selenium-server-standalone-jar": "^3.0.1",
        "style-loader": "^0.13.1",
        "stylelint": "^7.6.0",
        "stylelint-config-standard": "^14.0.0",
        "stylelint-webpack-plugin": "^0.4.0",
        "template-html-loader": "0.0.3",
        "url-loader": "^0.5.7",
        "vorlon": "^0.4.0",
        "webpack": "^1.13.1",
        "webpack-dev-middleware": "^1.6.1",
        "webpack-dev-server": "^1.14.1",
        "webpack-hot-middleware": "^2.12.2",
        "webpack-notifier": "^1.4.1",
        "webpack-shell-plugin": "^0.4.3",
        "webpack-visualizer-plugin": "^0.1.5",
        "worker-loader": "^0.7.1"
    };

    return Mock;
};