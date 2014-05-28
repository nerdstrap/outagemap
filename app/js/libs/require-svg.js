define(
    [
        'module'
    ],
    function (module) {

        var masterConfig = (module.config && module.config()) || {};

        var svg = {
            load: function (name, req, load, config) {
                config = config || {};

                var extension = masterConfig.extension;
                if (config.extension) {
                    extension = config.extension;
                }
                extension = extension || 'svg';

                var textName = 'text!' + name + '.' + extension;

                return req([textName], function (template) {
                    if (!config.isBuild) {
                        load(template);
                    }
                    else {
                        load(template);
                    }
                });
            }
        };

        return svg;
    });