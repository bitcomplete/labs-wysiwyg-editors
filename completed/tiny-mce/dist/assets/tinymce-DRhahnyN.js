import{r as E}from"./react-YsBxPMQB.js";var R={exports:{}},A="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",H=A,K=H;function j(){}function N(){}N.resetWarningCache=j;var V=function(){function t(a,i,u,e,s,c){if(c!==K){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}t.isRequired=t;function r(){return t}var o={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:r,element:t,elementType:t,instanceOf:r,node:t,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:N,resetWarningCache:j};return o.PropTypes=o,o};R.exports=V();var n=R.exports,k=function(){return k=Object.assign||function(t){for(var r,o=1,a=arguments.length;o<a;o++){r=arguments[o];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},k.apply(this,arguments)},x={onActivate:n.func,onAddUndo:n.func,onBeforeAddUndo:n.func,onBeforeExecCommand:n.func,onBeforeGetContent:n.func,onBeforeRenderUI:n.func,onBeforeSetContent:n.func,onBeforePaste:n.func,onBlur:n.func,onChange:n.func,onClearUndos:n.func,onClick:n.func,onContextMenu:n.func,onCommentChange:n.func,onCompositionEnd:n.func,onCompositionStart:n.func,onCompositionUpdate:n.func,onCopy:n.func,onCut:n.func,onDblclick:n.func,onDeactivate:n.func,onDirty:n.func,onDrag:n.func,onDragDrop:n.func,onDragEnd:n.func,onDragGesture:n.func,onDragOver:n.func,onDrop:n.func,onExecCommand:n.func,onFocus:n.func,onFocusIn:n.func,onFocusOut:n.func,onGetContent:n.func,onHide:n.func,onInit:n.func,onInput:n.func,onKeyDown:n.func,onKeyPress:n.func,onKeyUp:n.func,onLoadContent:n.func,onMouseDown:n.func,onMouseEnter:n.func,onMouseLeave:n.func,onMouseMove:n.func,onMouseOut:n.func,onMouseOver:n.func,onMouseUp:n.func,onNodeChange:n.func,onObjectResizeStart:n.func,onObjectResized:n.func,onObjectSelected:n.func,onPaste:n.func,onPostProcess:n.func,onPostRender:n.func,onPreProcess:n.func,onProgressState:n.func,onRedo:n.func,onRemove:n.func,onReset:n.func,onSaveContent:n.func,onSelectionChange:n.func,onSetAttrib:n.func,onSetContent:n.func,onShow:n.func,onSubmit:n.func,onUndo:n.func,onVisualAid:n.func,onSkinLoadError:n.func,onThemeLoadError:n.func,onModelLoadError:n.func,onPluginLoadError:n.func,onIconsLoadError:n.func,onLanguageLoadError:n.func,onScriptsLoad:n.func,onScriptsLoadError:n.func},F=k({apiKey:n.string,licenseKey:n.string,id:n.string,inline:n.bool,init:n.object,initialValue:n.string,onEditorChange:n.func,value:n.string,tagName:n.string,tabIndex:n.number,cloudChannel:n.string,plugins:n.oneOfType([n.string,n.array]),toolbar:n.oneOfType([n.string,n.array]),disabled:n.bool,textareaName:n.string,tinymceScriptSrc:n.oneOfType([n.string,n.arrayOf(n.string),n.arrayOf(n.shape({src:n.string,async:n.bool,defer:n.bool}))]),rollback:n.oneOfType([n.number,n.oneOf([!1])]),scriptLoading:n.shape({async:n.bool,defer:n.bool,delay:n.number})},x),S=function(t){return typeof t=="function"},T=function(t){return t in x},w=function(t){return t.substr(2)},U=function(t,r,o,a,i,u,e){var s=Object.keys(i).filter(T),c=Object.keys(u).filter(T),l=s.filter(function(f){return u[f]===void 0}),d=c.filter(function(f){return i[f]===void 0});l.forEach(function(f){var p=w(f),h=e[p];o(p,h),delete e[p]}),d.forEach(function(f){var p=a(t,f),h=w(f);e[h]=p,r(h,p)})},z=function(t,r,o,a,i){return U(i,t.on.bind(t),t.off.bind(t),function(u,e){return function(s){var c;return(c=u(e))===null||c===void 0?void 0:c(s,t)}},r,o,a)},L=0,M=function(t){var r=Date.now(),o=Math.floor(Math.random()*1e9);return L++,t+"_"+o+L+String(r)},D=function(t){return t!==null&&(t.tagName.toLowerCase()==="textarea"||t.tagName.toLowerCase()==="input")},P=function(t){return typeof t>"u"||t===""?[]:Array.isArray(t)?t:t.split(" ")},W=function(t,r){return P(t).concat(P(r))},G=function(){return window.InputEvent&&typeof InputEvent.prototype.getTargetRanges=="function"},$=function(t){if(!("isConnected"in Node.prototype)){for(var r=t,o=t.parentNode;o!=null;)r=o,o=r.parentNode;return r===t.ownerDocument}return t.isConnected},B=function(t,r){t!==void 0&&(t.mode!=null&&typeof t.mode=="object"&&typeof t.mode.set=="function"?t.mode.set(r):t.setMode(r))},I=function(){return I=Object.assign||function(t){for(var r,o=1,a=arguments.length;o<a;o++){r=arguments[o];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},I.apply(this,arguments)},q=function(t,r,o){var a,i,u=t.createElement("script");u.referrerPolicy="origin",u.type="application/javascript",u.id=r.id,u.src=r.src,u.async=(a=r.async)!==null&&a!==void 0?a:!1,u.defer=(i=r.defer)!==null&&i!==void 0?i:!1;var e=function(){u.removeEventListener("load",e),u.removeEventListener("error",s),o(r.src)},s=function(c){u.removeEventListener("load",e),u.removeEventListener("error",s),o(r.src,c)};u.addEventListener("load",e),u.addEventListener("error",s),t.head&&t.head.appendChild(u)},J=function(t){var r={},o=function(e,s){var c=r[e];c.done=!0,c.error=s;for(var l=0,d=c.handlers;l<d.length;l++){var f=d[l];f(e,s)}c.handlers=[]},a=function(e,s,c){var l=function(C){return c!==void 0?c(C):console.error(C)};if(e.length===0){l(new Error("At least one script must be provided"));return}for(var d=0,f=!1,p=function(C,O){f||(O?(f=!0,l(O)):++d===e.length&&s())},h=0,v=e;h<v.length;h++){var y=v[h],g=r[y.src];if(g)g.done?p(y.src,g.error):g.handlers.push(p);else{var m=M("tiny-");r[y.src]={id:m,src:y.src,done:!1,error:null,handlers:[p]},q(t,I({id:m},y),o)}}},i=function(){for(var e,s=0,c=Object.values(r);s<c.length;s++){var l=c[s],d=t.getElementById(l.id);d!=null&&d.tagName==="SCRIPT"&&((e=d.parentNode)===null||e===void 0||e.removeChild(d))}r={}},u=function(){return t};return{loadScripts:a,deleteScripts:i,getDocument:u}},Y=function(){var t=[],r=function(i){var u=t.find(function(e){return e.getDocument()===i});return u===void 0&&(u=J(i),t.push(u)),u},o=function(i,u,e,s,c){var l=function(){return r(i).loadScripts(u,s,c)};e>0?setTimeout(l,e):l()},a=function(){for(var i=t.pop();i!=null;i=t.pop())i.deleteScripts()};return{loadList:o,reinitialize:a}},Q=Y(),_=function(t){var r=t;return r&&r.tinymce?r.tinymce:null},X=function(){var t=function(r,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,i){a.__proto__=i}||function(a,i){for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&(a[u]=i[u])},t(r,o)};return function(r,o){if(typeof o!="function"&&o!==null)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");t(r,o);function a(){this.constructor=r}r.prototype=o===null?Object.create(o):(a.prototype=o.prototype,new a)}}(),b=function(){return b=Object.assign||function(t){for(var r,o=1,a=arguments.length;o<a;o++){r=arguments[o];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},b.apply(this,arguments)},ee=function(t){X(r,t);function r(o){var a,i,u,e=t.call(this,o)||this;return e.rollbackTimer=void 0,e.valueCursor=void 0,e.rollbackChange=function(){var s=e.editor,c=e.props.value;s&&c&&c!==e.currentContent&&s.undoManager.ignore(function(){if(s.setContent(c),e.valueCursor&&(!e.inline||s.hasFocus()))try{s.selection.moveToBookmark(e.valueCursor)}catch{}}),e.rollbackTimer=void 0},e.handleBeforeInput=function(s){if(e.props.value!==void 0&&e.props.value===e.currentContent&&e.editor&&(!e.inline||e.editor.hasFocus()))try{e.valueCursor=e.editor.selection.getBookmark(3)}catch{}},e.handleBeforeInputSpecial=function(s){(s.key==="Enter"||s.key==="Backspace"||s.key==="Delete")&&e.handleBeforeInput(s)},e.handleEditorChange=function(s){var c=e.editor;if(c&&c.initialized){var l=c.getContent();e.props.value!==void 0&&e.props.value!==l&&e.props.rollback!==!1&&(e.rollbackTimer||(e.rollbackTimer=window.setTimeout(e.rollbackChange,typeof e.props.rollback=="number"?e.props.rollback:200))),l!==e.currentContent&&(e.currentContent=l,S(e.props.onEditorChange)&&e.props.onEditorChange(l,c))}},e.handleEditorChangeSpecial=function(s){(s.key==="Backspace"||s.key==="Delete")&&e.handleEditorChange(s)},e.initialise=function(s){var c,l,d;s===void 0&&(s=0);var f=e.elementRef.current;if(f){if(!$(f)){if(s===0)setTimeout(function(){return e.initialise(1)},1);else if(s<100)setTimeout(function(){return e.initialise(s+1)},100);else throw new Error("tinymce can only be initialised when in a document");return}var p=_(e.view);if(!p)throw new Error("tinymce should have been loaded into global scope");var h=b(b(b(b({},e.props.init),{selector:void 0,target:f,readonly:e.props.disabled,inline:e.inline,plugins:W((c=e.props.init)===null||c===void 0?void 0:c.plugins,e.props.plugins),toolbar:(l=e.props.toolbar)!==null&&l!==void 0?l:(d=e.props.init)===null||d===void 0?void 0:d.toolbar}),e.props.licenseKey?{license_key:e.props.licenseKey}:{}),{setup:function(v){e.editor=v,e.bindHandlers({}),e.inline&&!D(f)&&v.once("PostRender",function(y){v.setContent(e.getInitialValue(),{no_events:!0})}),e.props.init&&S(e.props.init.setup)&&e.props.init.setup(v)},init_instance_callback:function(v){var y,g,m=e.getInitialValue();e.currentContent=(y=e.currentContent)!==null&&y!==void 0?y:v.getContent(),e.currentContent!==m&&(e.currentContent=m,v.setContent(m),v.undoManager.clear(),v.undoManager.add(),v.setDirty(!1));var C=(g=e.props.disabled)!==null&&g!==void 0?g:!1;B(e.editor,C?"readonly":"design"),e.props.init&&S(e.props.init.init_instance_callback)&&e.props.init.init_instance_callback(v)}});e.inline||(f.style.visibility=""),D(f)&&(f.value=e.getInitialValue()),p.init(h)}},e.id=e.props.id||M("tiny-react"),e.elementRef=E.createRef(),e.inline=(u=(a=e.props.inline)!==null&&a!==void 0?a:(i=e.props.init)===null||i===void 0?void 0:i.inline)!==null&&u!==void 0?u:!1,e.boundHandlers={},e}return Object.defineProperty(r.prototype,"view",{get:function(){var o,a;return(a=(o=this.elementRef.current)===null||o===void 0?void 0:o.ownerDocument.defaultView)!==null&&a!==void 0?a:window},enumerable:!1,configurable:!0}),r.prototype.componentDidUpdate=function(o){var a=this,i,u;if(this.rollbackTimer&&(clearTimeout(this.rollbackTimer),this.rollbackTimer=void 0),this.editor&&(this.bindHandlers(o),this.editor.initialized)){if(this.currentContent=(i=this.currentContent)!==null&&i!==void 0?i:this.editor.getContent(),typeof this.props.initialValue=="string"&&this.props.initialValue!==o.initialValue)this.editor.setContent(this.props.initialValue),this.editor.undoManager.clear(),this.editor.undoManager.add(),this.editor.setDirty(!1);else if(typeof this.props.value=="string"&&this.props.value!==this.currentContent){var e=this.editor;e.undoManager.transact(function(){var c;if(!a.inline||e.hasFocus())try{c=e.selection.getBookmark(3)}catch{}var l=a.valueCursor;if(e.setContent(a.props.value),!a.inline||e.hasFocus())for(var d=0,f=[c,l];d<f.length;d++){var p=f[d];if(p)try{e.selection.moveToBookmark(p),a.valueCursor=p;break}catch{}}})}if(this.props.disabled!==o.disabled){var s=(u=this.props.disabled)!==null&&u!==void 0?u:!1;B(this.editor,s?"readonly":"design")}}},r.prototype.componentDidMount=function(){var o=this,a,i,u,e,s;if(_(this.view)!==null)this.initialise();else if(Array.isArray(this.props.tinymceScriptSrc)&&this.props.tinymceScriptSrc.length===0)(i=(a=this.props).onScriptsLoadError)===null||i===void 0||i.call(a,new Error("No `tinymce` global is present but the `tinymceScriptSrc` prop was an empty array."));else if(!((u=this.elementRef.current)===null||u===void 0)&&u.ownerDocument){var c=function(){var d,f;(f=(d=o.props).onScriptsLoad)===null||f===void 0||f.call(d),o.initialise()},l=function(d){var f,p;(p=(f=o.props).onScriptsLoadError)===null||p===void 0||p.call(f,d)};Q.loadList(this.elementRef.current.ownerDocument,this.getScriptSources(),(s=(e=this.props.scriptLoading)===null||e===void 0?void 0:e.delay)!==null&&s!==void 0?s:0,c,l)}},r.prototype.componentWillUnmount=function(){var o=this,a=this.editor;a&&(a.off(this.changeEvents(),this.handleEditorChange),a.off(this.beforeInputEvent(),this.handleBeforeInput),a.off("keypress",this.handleEditorChangeSpecial),a.off("keydown",this.handleBeforeInputSpecial),a.off("NewBlock",this.handleEditorChange),Object.keys(this.boundHandlers).forEach(function(i){a.off(i,o.boundHandlers[i])}),this.boundHandlers={},a.remove(),this.editor=void 0)},r.prototype.render=function(){return this.inline?this.renderInline():this.renderIframe()},r.prototype.changeEvents=function(){var o,a,i,u=(i=(a=(o=_(this.view))===null||o===void 0?void 0:o.Env)===null||a===void 0?void 0:a.browser)===null||i===void 0?void 0:i.isIE();return u?"change keyup compositionend setcontent CommentChange":"change input compositionend setcontent CommentChange"},r.prototype.beforeInputEvent=function(){return G()?"beforeinput SelectionChange":"SelectionChange"},r.prototype.renderInline=function(){var o=this.props.tagName,a=o===void 0?"div":o;return E.createElement(a,{ref:this.elementRef,id:this.id,tabIndex:this.props.tabIndex})},r.prototype.renderIframe=function(){return E.createElement("textarea",{ref:this.elementRef,style:{visibility:"hidden"},name:this.props.textareaName,id:this.id,tabIndex:this.props.tabIndex})},r.prototype.getScriptSources=function(){var o,a,i=(o=this.props.scriptLoading)===null||o===void 0?void 0:o.async,u=(a=this.props.scriptLoading)===null||a===void 0?void 0:a.defer;if(this.props.tinymceScriptSrc!==void 0)return typeof this.props.tinymceScriptSrc=="string"?[{src:this.props.tinymceScriptSrc,async:i,defer:u}]:this.props.tinymceScriptSrc.map(function(l){return typeof l=="string"?{src:l,async:i,defer:u}:l});var e=this.props.cloudChannel,s=this.props.apiKey?this.props.apiKey:"no-api-key",c="https://cdn.tiny.cloud/1/".concat(s,"/tinymce/").concat(e,"/tinymce.min.js");return[{src:c,async:i,defer:u}]},r.prototype.getInitialValue=function(){return typeof this.props.initialValue=="string"?this.props.initialValue:typeof this.props.value=="string"?this.props.value:""},r.prototype.bindHandlers=function(o){var a=this;if(this.editor!==void 0){z(this.editor,o,this.props,this.boundHandlers,function(s){return a.props[s]});var i=function(s){return s.onEditorChange!==void 0||s.value!==void 0},u=i(o),e=i(this.props);!u&&e?(this.editor.on(this.changeEvents(),this.handleEditorChange),this.editor.on(this.beforeInputEvent(),this.handleBeforeInput),this.editor.on("keydown",this.handleBeforeInputSpecial),this.editor.on("keyup",this.handleEditorChangeSpecial),this.editor.on("NewBlock",this.handleEditorChange)):u&&!e&&(this.editor.off(this.changeEvents(),this.handleEditorChange),this.editor.off(this.beforeInputEvent(),this.handleBeforeInput),this.editor.off("keydown",this.handleBeforeInputSpecial),this.editor.off("keyup",this.handleEditorChangeSpecial),this.editor.off("NewBlock",this.handleEditorChange))}},r.propTypes=F,r.defaultProps={cloudChannel:"7"},r}(E.Component);export{ee as E};
