// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aPJuQ":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0a8ecb283d214d75";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('???? [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] ???? Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ??? Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>???? ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bB7Pu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./src/model.js");
var _commentViewJs = require("./src/commentView.js");
var _commentViewJsDefault = parcelHelpers.interopDefault(_commentViewJs);
var _commentFieldJs = require("./src/commentField.js");
var _scoreUpdateJs = require("./src/scoreUpdate.js");
var _replyJs = require("./src/reply.js");
var _editJs = require("./src/edit.js");
var _deleteCommentJs = require("./src/deleteComment.js");
const state = _modelJs.state;
const commentRenderer = function({ comment , RCid , replied =false , current  }) {
    // if (RCid) post.render(comment, RCid);
    // else post.render(comment);
    const byCurrent = current ? current : replied;
    _commentViewJsDefault.default.render(comment, RCid, replied, byCurrent);
};
/*======================================================== SEND-HANDLER =============================================*/ const sendHandler = function(content, idReplyingTo, inReplied) {
    const comment = {
        content: content,
        createdAt: new Date().getDay(),
        score: 0,
        user: _modelJs.state.currentUser
    };
    if (idReplyingTo) {
        const parentCommentId = parseInt(idReplyingTo);
        const commentReplyTo = _modelJs.dataProvide(parentCommentId);
        if (!+idReplyingTo) {
            const replyingTo = _modelJs.dataProvide(idReplyingTo).user.username;
            // console.log(replyingTo);
            comment.replyingTo = replyingTo;
        }
        if (+idReplyingTo) {
            // GETTIN USER NAME
            const replyingTo = commentReplyTo.user.username;
            // setting USERNAME
            comment.replyingTo = replyingTo;
        }
        // creating new EXTENSION ID
        const newExtensionId = new Date().getTime();
        // the id of the  new replied comment
        comment.id = parentCommentId + "-" + newExtensionId;
        _modelJs.dataPush(comment, comment.id);
        const argumentsObj = {
            RCid: parentCommentId + "RC",
            replied: true,
            comment: comment
        };
        commentRenderer(argumentsObj);
    // console.log(parentCommentId + "rc");
    } else {
        comment.id = new Date().getTime();
        comment.replies = [];
        // console.log(comment.id)
        // model.state.comments.push(comment);
        _modelJs.dataPush(comment, comment.id);
        commentRenderer({
            comment: comment,
            current: true
        });
    }
    _commentFieldJs.field.render(_modelJs.state.currentUser, null, sendHandler);
};
// ============================================================= SCORE HANDLER ======================================
const scoreHandler = function(id, add) {
    const score = _modelJs.scoreUpdate(id, add);
    return score;
};
/*=================================================== REPLY Handler ======================================== */ const replyChecker = function(isRepliedContainer, commentId) {
    const rcIdcId = parseInt(commentId) + "RCto" + commentId;
    if (!isRepliedContainer) {
        // checking whether the comment already have a container when clicked
        const alreadyHaveReplies = _modelJs.dataProvide(commentId).replies.length > 0;
        // console.log(alreadyHaveReplies);
        // commentId because the field will create the replies  container and render it with the id of commentID + RC
        _commentFieldJs.field.render(_modelJs.state.currentUser, rcIdcId, sendHandler, alreadyHaveReplies);
        return alreadyHaveReplies;
    } else // console.log(parseInt(rcId));
    _commentFieldJs.field.render(_modelJs.state.currentUser, rcIdcId, sendHandler);
// return false;
};
/*================================================= Edit handler ==========================================*/ const editHandler = function(id, content) {
    // console.log("clicked");
    // const idP = parseInt(id);
    const toBeEditedComment = _modelJs.dataProvide(id);
    if (!content) {
        if (!+id) return {
            content: toBeEditedComment.content,
            replyingTo: toBeEditedComment.replyingTo
        };
        return {
            content: toBeEditedComment.content
        };
    }
    _commentFieldJs.field.render(_modelJs.state.currentUser, null, sendHandler);
    return _modelJs.contentUpdate(id, content);
};
/*================================================ DELETE-handler =========================================*/ const deleteHandler = function(id) {
    _modelJs.deleteComment(id);
};
const init = function() {
    // initialCommentRenderer();
    _commentViewJsDefault.default.init(_modelJs.state.comments);
    _commentFieldJs.field.render(_modelJs.state.currentUser, null, sendHandler);
    _scoreUpdateJs.scoreInit(scoreHandler);
    _replyJs.reply(replyChecker);
    _editJs.edit.init(editHandler);
    _deleteCommentJs.deleteComment(deleteHandler);
};
init();

},{"./src/model.js":"dEDha","./src/commentView.js":"G8mbZ","./src/commentField.js":"k8aWd","./src/scoreUpdate.js":"hN0ub","./src/reply.js":"4l7Xb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./src/edit.js":"gHqEs","./src/deleteComment.js":"ae7qP"}],"dEDha":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
parcelHelpers.export(exports, "scoreUpdate", ()=>scoreUpdate
);
parcelHelpers.export(exports, "indexFinder", ()=>indexFinder
);
parcelHelpers.export(exports, "dataProvide", ()=>dataProvide
);
parcelHelpers.export(exports, "contentUpdate", ()=>contentUpdate
);
parcelHelpers.export(exports, "dataPush", ()=>dataPush
);
parcelHelpers.export(exports, "deleteComment", ()=>deleteComment
);
const state = {
    currentUser: {
        image: {
            png: "./images/avatars/image-juliusomo.png",
            webp: "./images/avatars/image-juliusomo.webp"
        },
        username: "juliusomo"
    },
    comments: [
        {
            id: 1,
            content: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
            createdAt: "1 month ago",
            score: 12,
            user: {
                image: {
                    png: "./images/avatars/image-amyrobson.png",
                    webp: "./images/avatars/image-amyrobson.webp"
                },
                username: "amyrobson"
            },
            replies: []
        },
        {
            id: 2,
            content: "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
            createdAt: "2 weeks ago",
            score: 5,
            user: {
                image: {
                    png: "./images/avatars/image-maxblagun.png",
                    webp: "./images/avatars/image-maxblagun.webp"
                },
                username: "maxblagun"
            },
            replies: [
                {
                    id: "2-1",
                    content: "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
                    createdAt: "1 week ago",
                    score: 7,
                    replyingTo: "maxblagun",
                    user: {
                        image: {
                            png: "./images/avatars/image-ramsesmiron.png",
                            webp: "./images/avatars/image-ramsesmiron.webp"
                        },
                        username: "ramsesmiron"
                    }
                },
                {
                    id: "2-2",
                    content: "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
                    createdAt: "2 days ago",
                    score: 2,
                    replyingTo: "ramsesmiron",
                    user: {
                        image: {
                            png: "./images/avatars/image-juliusomo.png",
                            webp: "./images/avatars/image-juliusomo.webp"
                        },
                        username: "juliusomo"
                    }
                }, 
            ]
        }, 
    ]
};
// ====================================== LOCAL-STORAGE persist ======================================
const persistState = function() {
    localStorage.setItem("state", JSON.stringify(state));
};
const scoreUpdate = function(id, add = true) {
    const parentIndex = state.comments.findIndex((el)=>el.id === parseInt(id)
    );
    if (+id) {
        // console.log(add);
        if (add) state.comments[parentIndex].score++;
        else state.comments[parentIndex].score--;
        // persisting the updated state
        persistState();
        return state.comments[parentIndex].score;
    }
    // const parentId = state.comments[parentIndex].id;
    const repliesIndex = state.comments[parentIndex].replies.findIndex((el)=>el.id === id
    );
    // console.log(repliesIndex, id);
    if (add) state.comments[parentIndex].replies[repliesIndex].score++;
    else state.comments[parentIndex].replies[repliesIndex].score--;
    // persisting the updated state
    persistState();
    return state.comments[parentIndex].replies[repliesIndex].score;
};
const indexFinder = function(array, id) {
    const index = array.findIndex((el)=>el.id === id
    );
    return index;
};
const dataProvide = function(id) {
    const idP = parseInt(id);
    const indP = indexFinder(state.comments, +idP);
    //                                                              isInRPLIES
    if (!+id) {
        const indR = indexFinder(state.comments[indP].replies, id); // INDEX of repled
        const data = state.comments[indP].replies[indR]; // DATA of replied
        return data;
    }
    return state.comments[indP];
};
const contentUpdate = function(id, content) {
    const idP = parseInt(id);
    const indP = indexFinder(state.comments, +idP);
    //                                                              isInRPLIES
    if (!+id) {
        const indR = indexFinder(state.comments[indP].replies, id); // INDEX of repiled
        state.comments[indP].replies[indR].content = content; // UPDATING the content
        persistState();
        //                                                        ASURING CONTROLLED DATA MOVMENT
        return state.comments[indP].replies[indR].content; // UPDATING the content
    }
    state.comments[indP].content = content;
    persistState();
    //                                                        ASURING CONTROLLED DATA MOVMENT
    return state.comments[indP].content;
};
const dataPush = function(data, id) {
    // normal COMMENT
    if (+id) {
        state.comments.push(data);
        persistState();
        return state.comments[-1];
    }
    // REPLIED data
    const idP = parseInt(id);
    const indP = indexFinder(state.comments, idP);
    // console.log(indP);
    state.comments[indP].replies.push(data);
    persistState();
    return state.comments[indP].replies[-1];
};
const deleteComment = function(id) {
    if (+id) {
        state.comments.splice(indexFinder(state.comments, id));
        persistState();
    }
    if (!+id) {
        const idP = parseInt(id);
        const indP = indexFinder(state.comments, idP);
        const indR = indexFinder(state.comments[indP].replies, id);
        console.log(state.comments[indP].replies.splice(indR));
        persistState();
    }
};
/*========================================================  INITIALIZER function ==================================*/ // localStorage.clear("state");
const init = function() {
    const newState = JSON.parse(localStorage.getItem("state"));
    if (newState) {
        state.comments = newState.comments;
        state.currentUser = newState.currentUser;
    }
};
init();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"G8mbZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _configJs = require("../../../../Java Script/complete-javascript-course-master/18-forkify/starter/src/js/config.js");
var _viewJs = require("./view.js");
class CommentView extends _viewJs.View {
    deleteEdit = `
        <div class="delete-edit-container flex">
          <div class="delete-container flex">
            <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z"
                fill="#ED6368"
              />
            </svg>

            <label for="#delete" class="delete">Delete</label>
          </div>

          <div class="edit-container flex">
            <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z"
                fill="#5357B6"
              />
            </svg>

            <label for="#edit" class="edit">Edit</label>
          </div>
        </div>
  `;
    reply = `
      <div class="reply-container flex">
        <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
            fill="#5357B6"
          />
        </svg>

        <label for="#reply" class="reply">Reply</label>
    </div>
    
  `;
    repliedContainer;
    /////////////////////////////////////////////////////             MARKUP GENERATOR
    ////////////////////////////////
    _generateMarkup(replied, byCurret) {
        // Setting the apropriate parent element
        if (!replied) this._parentElement = document.querySelector(".comment-card-container");
        else this._parentElement = document.querySelector(".replied-container");
        // console.log(this._data);
        return `
     <div class="comment-card grid grid--2-cols" id = "${this._data.id}" data-id = "${this._data.id}">
      <div class="avatar-container flex">
        <img
          class="img-avatar"
          src="${this._data.user.image.webp}"
          alt="photo of ${this._data.user.username}"
        />
        <p class="user-name">${this._data.user.username}</p>
        <p class="comment-time">${this._data.createdAt}</p>
      </div>

      <div class="comment-container">
        <p class="comment">

          ${replied ? "<span class='replying-to'>@" + this._data.replyingTo + "</span> " + this._data.content : this._data.content}
        </p>
      </div>

      <!-- //////////////////////////////////////////////////////////         comment SCORE -->

      <div class="score-container flex">
        <button class="btn btn-score plus flex">
          <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
              fill="hsl(211, 10%, 45%)"
            />
          </svg>
        </button>

        <p class="score">${this._data.score}</p>

        <button class="btn btn-score minus flex">
          <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
              fill="hsl(211, 10%, 45%)"
            />
          </svg>
        </button>
      </div>

      <!-- //////////////////////////////////////////////////////               REPLY PART -->
      <!-- ////////////////////////////////////////////////////// -->
      <div class ="comment-btn-container">
         ${byCurret ? this.deleteEdit : this.reply}
      </div>
    </div>
    `;
    }
    ////////////////////////////////////////////////              PARENT ELEMENT SETER
    ////////////////////////////////////////////////
    repliedContainerSetter(parentElId) {
        const rc = document.createElement("div");
        // `<div class="replied-container flex" id = "${id}" data-id = "${id}"></div>`;
        rc.classList.add("replied-container");
        rc.classList.add("flex");
        rc.id = rc.dataset.id = parentElId;
        document.getElementById(parseInt(parentElId)).after(rc);
        this.parentSet(parentElId);
    // this.repliedContainer = `<div class="replied-container flex" id = "${id}" data-id = "${id}"></div>`;
    }
    init(data) {
        data.forEach((comment)=>{
            this.render(comment);
        });
    }
}
const commentView = new CommentView();
exports.default = commentView;

},{"./view.js":"ai2uB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../../../Java Script/complete-javascript-course-master/18-forkify/starter/src/js/config.js":"64eb0"}],"ai2uB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "View", ()=>View
);
class View {
    _data;
    _parentElement;
    render(data, parentElId, replies = false, byCurret) {
        this._data = data;
        // generating the markup
        const markup = this._generateMarkup(replies, byCurret);
        // This will allow us to OVERIDE any parent setting made before rendering
        if (parentElId) this.parentSet(parentElId);
        // RENDERING the replied markup to the dom
        this._parentElement.insertAdjacentHTML("beforeend", markup);
        if (byCurret) {
            const thisComment = document.getElementById(this._data.id);
            const deleteEditConta = thisComment.querySelector(".delete-edit-container");
            setTimeout(()=>{
                deleteEditConta.remove();
                thisComment.querySelector(".comment-btn-container").insertAdjacentHTML("beforeend", this.reply);
            }, 300000);
        }
        if (this._data.replies && this._data.replies.length >= 1) {
            this.repliedContainerSetter(this._data.id + "RC");
            // RENDERING the replied container
            // this._parentElement.insertAdjacentHTML(
            //   "beforeend",
            //   this.repliedContainer
            // );
            // RENDERING each REPLIED message
            this._data.replies.forEach((reply)=>{
                this.render(reply, parseInt(this._data.id) + "RC", true);
            });
        }
    }
    parentSet(id) {
        this._parentElement = document.getElementById(id);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"64eb0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL
);
parcelHelpers.export(exports, "API_KEY", ()=>API_KEY
);
parcelHelpers.export(exports, "TIMEOUT_SECONDS", ()=>TIMEOUT_SECONDS
);
parcelHelpers.export(exports, "API_SEARCH_URL_EXTENSION", ()=>API_SEARCH_URL_EXTENSION
);
parcelHelpers.export(exports, "RESULTS_PER_PAGE", ()=>RESULTS_PER_PAGE
);
parcelHelpers.export(exports, "CLOSE_WINDOW_SEC", ()=>CLOSE_WINDOW_SEC
);
const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes'; // upercase indicatse that a varriable that should not change forever
const API_KEY = '7cbf8f3d-b280-4f29-b23e-816c085e91b6';
const TIMEOUT_SECONDS = 10;
const API_SEARCH_URL_EXTENSION = '?search=';
const RESULTS_PER_PAGE = 10;
const CLOSE_WINDOW_SEC = 2.5;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k8aWd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "field", ()=>field
);
var _viewJs = require("./view.js");
class CommentField extends _viewJs.View {
    _parentElement = document.querySelector(".comment-section ");
    _btnSend;
    /* ================================================== the RENDER METHOD ========================================= */ render(data, rcIdcId, sendHandler, haveReplies = true) {
        // getting the ParentElId and the Comment replying to id
        const [parentElId, cId] = rcIdcId ? rcIdcId.split("to") : [
            null,
            null
        ];
        const commentFieldContainer = document.querySelector(".section-comment-send");
        if (parentElId && !haveReplies) {
            /* ======================================= this CREATES the REPLIED-CONTAINER in the dom ===================== */ const rc = document.createElement("div");
            // `<div class="replied-container flex" id = "${id}" data-id = "${id}"></div>`;
            rc.classList.add("replied-container");
            rc.classList.add("flex");
            rc.id = rc.dataset.id = parentElId;
            document.getElementById(parseInt(parentElId)).after(rc);
            // rc.scrollIntoView({ behavior: "smooth" });
            this.parentSet(parentElId);
        }
        if (parentElId && haveReplies) {
            this.parentSet(parentElId);
            this._parentElement.lastElementChild.scrollIntoView({
                behavior: "smooth"
            });
        }
        // console.log(this._parentElement);
        this._data = data;
        if (commentFieldContainer?.parentElement.classList.contains("replied-container") && !commentFieldContainer.parentElement.querySelector(".comment-card")) {
            const nullConta = commentFieldContainer.parentElement;
            // console.log();
            commentFieldContainer.remove();
            nullConta.remove();
        }
        // REMOVING THE ALREADY EXISTED COMMENT FIELD
        commentFieldContainer?.remove();
        // generating the markup
        const markup = this._generateMarkup();
        // OVERIDING ANY ParentElement settings if no id is provided
        if (!rcIdcId) this._parentElement = document.querySelector(".comment-section ");
        // RENDERING the replied markup to the dom
        this._parentElement.insertAdjacentHTML("beforeend", markup);
        // console.log(document.getElementById(parentElId));
        // document.querySelector(".section-comment-send");
        // .scrollIntoView({ behavior: "smooth" });
        // calling the eventListner initializer with the event handler
        this.events(sendHandler, cId);
    }
    //  ====================================================== MARKUP GENERATOR =========================================
    _generateMarkup() {
        return `
    <section class="section-comment-send grid grid--2-cols">
        <form action="submit" class="comment-form">
            <textarea
            name="comment-field"
            class="comment-field"
            id=""
            cols="30"
            rows="10"
            placeholder="Add a comment..."
            ></textarea>
        </form>

        <img
            class="avatar-typing"
            src="${this._data.image.png}"
            alt="photo of ${this._data.username}"
        />
        <button class="btn btn-send">Send</button>
    </section>
    `;
    }
    /*============================================ SEND BUTTON event listning and handling ========================== */ events(sendHandler, cId) {
        this._textarea = document.querySelector(".comment-field");
        // this is because we cannot select what doesnt exist..
        this._btnSend = document.querySelector(".btn-send");
        const handler = ()=>{
            // console.log("clicked");
            if (!this._textarea.value) return;
            sendHandler(this._textarea.value, cId);
            this._textarea.value = null;
        };
        this._btnSend.removeEventListener("click", handler);
        // EVENT LSTNER FOR send-btn
        this._btnSend.addEventListener("click", handler);
    }
}
const field = new CommentField();

},{"./view.js":"ai2uB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hN0ub":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scoreInit", ()=>scoreInit
);
const scoreUpdate = function(handler) {
    window.addEventListener("click", (e)=>{
        const target = e.target;
        //   console.log(e.target);
        if (!target.closest(".btn-score")) return;
        const currentScore = +target.closest(".score-container").textContent.trim();
        //   if (target.closest(".plus")) console.log(currentScore + 1);
        const id = target.closest(".comment-card").id;
        const newScore = handler(id, target.closest(".plus") ? true : false);
        document.getElementById(id).querySelector(".score").textContent = newScore;
    // console.log()
    });
};
const scoreInit = function(handler) {
    scoreUpdate(handler);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4l7Xb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "reply", ()=>reply
);
const reply = function(handler) {
    const replyHandler = (e)=>{
        // console.log("cl");
        // GUARD KEY
        if (!e.target.closest(".reply-container")) return;
        const target = e.target;
        const commentCardId = target.closest(".comment-card").dataset.id;
        // this checks whether the Reply btn is clicked from the comment card inside a comment replied container or not
        if (!target.closest(".replied-container")) handler(false, commentCardId);
        else handler(true, commentCardId);
    };
    window.addEventListener("click", replyHandler);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gHqEs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "edit", ()=>edit
);
var _viewJs = require("./view.js");
// const updateSec = `
//             <section class="comment-update flex">
//                 <form action="submit" class="comment-form">
//                     <textarea
//                     name="comment-field"
//                     class="update-field"
//                     id="wetpussy"
//                     id=""
//                     cols="30"
//                     rows="10"
//                     ></textarea>
//                 </form>
//                 <button class="btn btn-update">Update</button>
//             </section>
// `;
// let value, toBeEditedCommentCardId;
// const toggler = (target) => {
//   document.querySelector(".comment-update")?.remove();
//   target.closest(".delete-edit-container").classList.toggle("hidden");
// };
// const editor = function (handler) {
//   window.addEventListener("click", (e) => {
//     const target = e.target;
//     // GUARDKEY
//     if (target.closest(".edit-container")) {
//       const toBeEditedCommentCard = target.closest(".comment-card");
//       toBeEditedCommentCardId = toBeEditedCommentCard.dataset.id;
//       // if some editing is ALREADY TAKING PLACE
//       if (document.getElementById("wetpussy")) {
//         const wetpussy = document
//           .getElementById("wetpussy")
//           .closest(".comment-container");
//         const com = wetpussy.querySelector(".comment");
//         com.textContent = value;
//       }
//       // REMOVING already placed comment update with previous value
//       toggler(target);
//       // getting the data from the state to insure CONTROLED DATA MOVEMENT
//       const [content, replyingTo] = handler(toBeEditedCommentCardId);
//       value = replyingTo ? "@" + replyingTo + " " + content : content;
//       // Empitying the comment
//       toBeEditedCommentCard.querySelector(".comment").textContent = "";
//       // RENDERING the text Field
//       toBeEditedCommentCard
//         .querySelector(".comment-container")
//         .insertAdjacentHTML("beforeend", updateSec);
//       //   filling the Field with the content we got
//       document.getElementById("wetpussy").value = handler(
//         toBeEditedCommentCard
//       );
//     }
//     if (target.classList.contains("btn-update")) {
//       // const content = value.trim().split(' ').shift().join(' ');
//       // handler(toBeEditedCommentCardId, content );
//       // target.closest('.comment-container').querySelector('.comment') = value;
//       // target.closest('.comment-update').remove();
//       if (!+toBeEditedCommentCardId) {
//         const contentForReplies = value.trim().split(" ");
//         const replyingTo = contentForReplies.shift();
//         const updatedcontent = handler(
//           toBeEditedCommentCardId,
//           contentForReplies.join(" ")
//         );
//         document
//           .getElementById(toBeEditedCommentCardId)
//           .querySelector(".comment").textContent = updatedcontent;
//         document
//           .getElementById(toBeEditedCommentCardId)
//           .querySelector(".comment")
//           .insertAdjacentHTML(
//             "afterbegin",
//             `<span class='replying-to'>${replyingTo} </span>`
//           );
//       }
//       // value = '';
//       //   console.log("licked");
//     }
//   });
// };
// export const edit = function (handler) {
//   editor(handler);
// };
class Edit extends _viewJs.View {
    toBeEditedId;
    toBeEditedcomment;
    btnUpdate;
    updateField;
    _updateSection = `
            <section class="comment-update flex">
                <form action="submit" class="comment-form">
                    <textarea
                    name="comment-field"
                    class="update-field"
                    id="wetpussy"
                    id=""
                    cols="30"
                    rows="10"
                    ></textarea>
                </form>

                <button class="btn btn-update">Update</button>
            </section>
`;
    render(btnUpdate = false) {
        // render UPDATE-SECTION
        this.parentSet(this.toBeEditedId);
        if (!btnUpdate) {
            // EMPITYING the comment
            this.toBeEditedcomment.textContent = "";
            // removing comment field
            document.querySelector(".section-comment-send").remove();
            // RENDERING section update
            this._parentElement.querySelector(".comment-container").insertAdjacentHTML("beforeend", this._updateSection);
            // setting the update Field
            this.updateField = document.getElementById("wetpussy");
            // FILLING the updatecommentSection with the previous COMMENT
            this.updateField.value = this._data.content;
        }
        // render UPDATED content
        if (btnUpdate) {
            this.updateField.closest(".comment-update").remove();
            // setting THE COMMENT TO ITS PREVIOUS VALUE
            this.toBeEditedcomment.insertAdjacentHTML("beforeend", this._generateMarkup());
            this._parentElement.querySelector(".delete-edit-container").classList.remove("hidden");
        }
    }
    _generateMarkup() {
        return `
    ${this._data.replyingTo ? "<span class='replying-to'>@" + this._data.replyingTo + "</span> " + this._data.content : this._data.content}
    `;
    }
    events(handler) {
        // UPDATE HANDLER
        const btnUpdateHandler = (e)=>{
            // console.log("clicked update");
            this._data.content = handler(this.toBeEditedId, this.updateField.value);
            this.render(true);
        };
        // EDIT HANDLER
        const editHandler = (e)=>{
            const target = e.target;
            if (!target.closest(".edit-container")) return;
            // CHECKING if another editing is happening and removing appropriately
            if (this.updateField) {
                this.updateField.closest(".comment-update").remove();
                // setting THE COMMENT TO ITS PREVIOUS VALUE
                this.toBeEditedcomment.textContent = this._data.replyingTo ? "<span class='replying-to'>@" + this._data.replyingTo + "</span> " + this._data.content : this._data.content;
            }
            // retriving the id of the TOBE EDITED comment card
            this.toBeEditedId = target.closest(".comment-card").dataset.id;
            // getting the toBeEdited comment element
            this.toBeEditedcomment = document.getElementById(this.toBeEditedId).querySelector(".comment");
            target.closest(".delete-edit-container").classList.add("hidden");
            // geting the current content of the comment
            this._data = handler(this.toBeEditedId);
            this.render();
            // removing if there is already btnUpdateListner
            this.btnUpdate?.removeEventListener("click", btnUpdateHandler);
            // SELECTING btn-update
            this.btnUpdate = document.querySelector(".btn-update");
            // adding EVENTlISTNER TO BTN-UPDATE
            this.btnUpdate.addEventListener("click", btnUpdateHandler);
        };
        // REMOVINGeventListner for windows with this handler if any
        window.removeEventListener("click", editHandler);
        // Listninig to CLLICK event to handle edit
        window.addEventListener("click", editHandler);
    }
    init(handler) {
        this.events(handler);
    }
}
const edit = new Edit();

},{"./view.js":"ai2uB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ae7qP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "deleteComment", ()=>deleteComment
);
const rootC = document.body;
let toBeDeletedCommentId;
const popupConta = `
        <div class="delete-popup">
            <div class="overlay"></div>
            <div class="popup-card flex">
            <p class="popup-header">Delete comment</p>
            <p>
                Are you sure you want to delete this comment? This will remove the comment
                and it can't be undone.
            </p>
            <footer class="popup-footer flex">
                <button class="btn-cancel btn">no, cancel</button>
                <button class="btn-yes btn">yes, delete</button>
            </footer>
            </div>
        </div>
`;
const deleteComment = function(deleteHandler) {
    const overlayHandle = (e)=>{
        //   DELLETING
        if (e.target.classList.contains("btn-yes")) {
            deleteHandler(toBeDeletedCommentId);
            document.getElementById(toBeDeletedCommentId).remove();
            document.querySelector(".delete-popup").remove();
        }
        // CANCELLING
        if (e.target.classList.contains("btn-cancel") || e.target.classList.contains("overlay")) {
            //   document.getElementById(commentId).remove();
            console.log("click");
            document.querySelector(".delete-popup").remove();
        }
    };
    const overlayPass = (e)=>{
        overlayHandle(e, this);
    };
    const handleDe = function(e) {
        if (!e.target.closest(".delete-container")) return;
        toBeDeletedCommentId = e.target.closest(".comment-card").dataset.id;
        // RENDERING the popup
        rootC.insertAdjacentHTML("beforeend", popupConta);
        // REMOVING event listner if any
        rootC.removeEventListener("click", overlayPass);
        // ATTACHING eventListner
        rootC.addEventListener("click", overlayPass);
    // deleteHandler(toBeDeletedCommentId.dataset.id);
    };
    window.addEventListener("click", handleDe);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["aPJuQ","bB7Pu"], "bB7Pu", "parcelRequirebaf5")

//# sourceMappingURL=index.3d214d75.js.map
