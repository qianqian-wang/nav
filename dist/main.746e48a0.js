// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"epB2":[function(require,module,exports) {

var x = localStorage.getItem('x');
var url = JSON.parse(x);
var localHash = url || [{ logo: 'B', url: 'www.baidu.com' }];
var simplifyUrl = function simplifyUrl(url) {
    return url.replace('https://', '').replace('http://', '').replace('www.', '').replace(/\/.*/, '');
};
var render = function render() {
    $('.content').find('.little:not(.add)').remove();
    localHash.forEach(function (node, index) {
        var $li = $('\n        <div class="little">\n            <div class=\'logo\'>' + node.logo + '</div>\n            <div class=\'url\'>' + simplifyUrl(node.url) + '</div>\n            <div class=\'close\'>x</div>\n        </div>').insertBefore('.black>.add');
        $li.on('click', function () {
            window.open(node.url);
        });
        $li.on('click', '.close', function (e) {
            e.stopPropagation();
            localHash.splice(index, 1);
            localStorage.setItem('x', JSON.stringify(localHash));
            render();
        });
    });
};
render();
$('.add').on('click', function () {
    var url = window.prompt('请输入网址');
    if (url) {
        if (url.indexOf('http') !== 0) {
            url = 'https://' + url;
        }
        localHash.push({
            logo: simplifyUrl(url)[0].toUpperCase(),
            url: url
        });
        localStorage.setItem('x', JSON.stringify(localHash));
    }
    render();
});

// $(window).scroll(function(){
//     if($("#date").offset().top - $(document).scrollTop() < 0){
//          let pos = $(document).scrollTop()
//          $("#date").stop().animate({top: pos+"px"}, "fast");
//     }else if($(window).height()-[$("#date").offset().top - $(document).scrollTop()]-$("#date").height() < 0){
//          let pos = $(document).scrollTop()
//          $("#date").stop().animate({top: pos+"px"}, "fast");
//      }
// })

var stone = [{ title: 'MDN Web文档', url: 'https://developer.mozilla.org/zh-CN/docs/Learn', intro: '' }, { title: 'JS Bin', url: 'https://jsbin.com/', intro: '' }, { title: '掘金', url: 'https://juejin.cn/', intro: '' }, { title: 'Element', url: 'https://element.eleme.cn/#/zh-CN', intro: '' }, { title: 'jQuery中文文档', url: ' https://www.jquery123.com/', intro: '' }, { title: 'jQuery中文文档', url: ' https://www.jquery123.com/', intro: '' }, { title: 'MDN Web文档', url: 'https://developer.mozilla.org/zh-CN/docs/Learn', intro: '' }, { title: 'JS Bin', url: 'https://jsbin.com/', intro: '' }, { title: '掘金', url: 'https://juejin.cn/', intro: '' }, { title: 'Element', url: 'https://element.eleme.cn/#/zh-CN', intro: '' }, { title: 'jQuery中文文档', url: ' https://www.jquery123.com/', intro: '' }, { title: 'jQuery中文文档', url: ' https://www.jquery123.com/', intro: '' }];

var mStone = function mStone() {
    stone.forEach(function (node, index) {
        var $li = $('\n        <div class="col-little">\n          <div class=\'title\'>' + node.title + '</div>\n        </div>').appendTo('.col-black');
        $li.on('click', function () {
            window.open(node.url);
        });
    });
};
mStone();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.746e48a0.map