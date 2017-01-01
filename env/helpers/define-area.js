"use strict";

var merge = require('extend-shallow');

module.exports = function(data) {
    var assemble = data.assemble;
    var engine = data.engine;

    return function(items, options) {

        var data, fn = options.fn,
            inverse = options.inverse;

        if (options.data) {
            data = engine.createFrame(options.data);
        }

        var html = '';
        if (arguments.length > 2) {
            var key, name, ctx, localContext, index = 0,
                maxIndex = 0;
            for (key in items) {
                if (items.hasOwnProperty(key)) {
                    maxIndex++;
                }
            }

            for (key in items) {
                if (items.hasOwnProperty(key)) {
                    var context = items[key];
                    ctx = merge({}, context);
                    name = ctx.partial;
                    delete ctx.partial;
                    localContext = assemble.views.partials[name].context();
                    if (localContext) {
                        ctx = merge({}, data, localContext, ctx);
                    }
                    ctx.relativeToRoot = options.data.root.relativeToRoot;
                    if (fn) {
                        /**
                         * Inner content.
                         * Use @elememnt for render partial.
                          * <ul>
                          *  {{#define-area partials}}
                          *     <li>{{{@element}}}</li>
                          *  {{/definea-rea}}
                          * </ul>
                         */
                        html += fn(ctx, {
                            data: {
                                key: key,
                                index: index,
                                first: index === 0,
                                last: maxIndex - 1 === index,
                                element: engine.helpers.extend(name, ctx, options)
                            }
                        });
                    } else {
                        // {{{define-area partials}}}
                        html += engine.helpers.extend(name, ctx, options);
                    }
                    index++;
                }
            }
        }
        if (html === '') {
            html = inverse(this);
        }
        arguments[arguments.length - 1](null, html);
    };

};
