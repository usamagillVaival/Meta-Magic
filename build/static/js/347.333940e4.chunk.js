"use strict";(self.webpackChunkmetamagicmap=self.webpackChunkmetamagicmap||[]).push([[347],{36347:function(e,t,r){r.r(t),r.d(t,{PortisConnector:function(){return a}});var n=r(57776),o=r(56111);function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var c={1:"mainnet",3:"ropsten",4:"rinkeby",5:"goerli",42:"kovan",100:"xdai",30:"orchid",31:"orchidTestnet",99:"core",77:"sokol",61:"classic",8:"ubiq",108:"thundercore",18:"thundercoreTestnet",163:"lightstreams",122:"fuse",15001:"maticTestnet"},a=function(e){var t,n;function a(t){var r,n=t.dAppId,a=t.networks,s=t.config,u=void 0===s?{}:s,h=a.map((function(e){return"number"===typeof e?e:Number(e.chainId)}));return h.every((function(e){return!!c[e]}))||(0,o.Z)(!1),(r=e.call(this,{supportedChainIds:h})||this).dAppId=n,r.networks=a,r.config=u,r.handleOnLogout=r.handleOnLogout.bind(i(r)),r.handleOnActiveWalletChanged=r.handleOnActiveWalletChanged.bind(i(r)),r.handleOnError=r.handleOnError.bind(i(r)),r}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s=a.prototype;return s.handleOnLogout=function(){this.emitDeactivate()},s.handleOnActiveWalletChanged=function(e){this.emitUpdate({account:e})},s.handleOnError=function(e){this.emitError(e)},s.activate=function(){try{var e=function(){return t.portis.onLogout(t.handleOnLogout),t.portis.onActiveWalletChanged(t.handleOnActiveWalletChanged),t.portis.onError(t.handleOnError),Promise.resolve(t.portis.provider.enable().then((function(e){return e[0]}))).then((function(e){return{provider:t.portis.provider,account:e}}))},t=this,n=function(){if(!t.portis)return Promise.resolve(r.e(643).then(r.t.bind(r,85643,23)).then((function(e){var t;return null!=(t=null==e?void 0:e.default)?t:e}))).then((function(e){t.portis=new e(t.dAppId,"number"===typeof t.networks[0]?c[t.networks[0]]:t.networks[0],t.config)}))}();return Promise.resolve(n&&n.then?n.then(e):e())}catch(o){return Promise.reject(o)}},s.getProvider=function(){try{return Promise.resolve(this.portis.provider)}catch(e){return Promise.reject(e)}},s.getChainId=function(){try{return Promise.resolve(this.portis.provider.send("eth_chainId"))}catch(e){return Promise.reject(e)}},s.getAccount=function(){try{return Promise.resolve(this.portis.provider.send("eth_accounts").then((function(e){return e[0]})))}catch(e){return Promise.reject(e)}},s.deactivate=function(){this.portis.onLogout((function(){})),this.portis.onActiveWalletChanged((function(){})),this.portis.onError((function(){}))},s.changeNetwork=function(e,t){try{var r=this;return"number"===typeof e?(c[e]||(0,o.Z)(!1),r.portis.changeNetwork(c[e],t),r.emitUpdate({chainId:e})):(r.portis.changeNetwork(e,t),r.emitUpdate({chainId:Number(e.chainId)})),Promise.resolve()}catch(n){return Promise.reject(n)}},s.close=function(){try{var e=this;return Promise.resolve(e.portis.logout()).then((function(){e.emitDeactivate()}))}catch(t){return Promise.reject(t)}},a}(n.Q)}}]);
//# sourceMappingURL=347.333940e4.chunk.js.map