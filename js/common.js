!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e){document.addEventListener("copy",(function(t){var e=document.querySelector("title").innerText,n=document.querySelector("meta[name='description']").getAttribute("content"),o=window.location.href.split("?")[0],i=window.location.protocol+"//"+window.location.hostname,r=i+"/px.gif"+encodeURI("?utm_source=dmca_copy&utm_medium="+e+"&utm_campaign="+o+"&utm_content="+n),c="this.src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='",a="position:initial;top:initial;right:initial;left:initial;bottom:initial;border:none;opacity:0;visibility:visible;width:1px;height:1px;max-width:1px;max-height:1px;display:inline-block;margin:0;padding:0;text-decoration:none;border:none;background:none;color:initial;cursor:auto;",l='<span itemprop="isBasedOn" itemscope itemtype="https://schema.org/WebPage" style="'.concat(a,'"><a href="').concat(o,'" target="_blank" title="').concat(e,'" itemprop="mainEntityOfPage" content="').concat(n,'" style="').concat(a,'"><img src="').concat(r,'" alt="').concat(e,'" title="').concat(e,'" border="0" width="1" height="1" onerror="').concat(c,'" /></a><a href="').concat(i,'" target="_blank" title="This article is referenced content from ').concat(i," - ").concat(e,'" itemprop="mainEntityOfPage" content="This article is referenced content from ').concat(i," - ").concat(n,'" style="').concat(a,'"><img src="').concat(r,'" alt="This article is referenced content from ').concat(i," - ").concat(e,'" title="This article is referenced content from ').concat(i," - ").concat(e,'" border="0" width="1" height="1" onerror="').concat(c,'" /></a></span>'),d=document.createElement("div");d.innerHTML=l;for(var p=window.getSelection().getRangeAt(0).cloneContents(),u=document.createElement("div"),m=!1,s=0;s<p.children.length;s++){if("p"==p.children.item(s).localName){p.children.item(s).append(d.children.item(0)),m=!0;break}}m||p.append(d.children.item(0)),u.appendChild(p),t.clipboardData.setData("text/plain",u.innerText),t.clipboardData.setData("text/html",u.innerHTML),t.preventDefault()}))}]);