(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(7),u=n.n(r),c=(n(14),n(1)),o=n(2),l=n(4),s=n(3),d=n(8),p=n.n(d),m=(n(15),function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.tabTitle,n=e.isSelected,a=e.hanleClick;return i.a.createElement("button",{type:"button",onClick:a,className:p()("tab",{"tab--active":n})},t)}}]),n}(i.a.PureComponent)),b=n(5),f=n.n(b),v=(f.a.shape({title:f.a.string.isRequired,content:f.a.string.isRequired}).isRequired,function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={selectedTab:0},e.selectTab=function(t){e.setState({selectedTab:t})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props.tabs,n=this.state.selectedTab;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"Tabs"},t.map((function(t,a){return i.a.createElement(m,{key:t.title,tabTitle:t.title,isSelected:a===n,hanleClick:function(){return e.selectTab(a)}})}))),i.a.createElement("div",{className:"App__content"},t[n].content))}}]),n}(i.a.PureComponent)),h=[{title:"Tab 1",content:"1 Lorem ipsum dolor sit amet,\n    consectetur adipiscing elit, sed do eiusmod tempor\n    incididunt ut labore et dolore magna aliqua. Ut enim\n    ad minim veniam, quis nostrud exercitation ullamco\n    laboris nisi ut aliquip ex ea commodo consequat.\n    Duis aute irure dolor in reprehenderit in voluptate\n    velit esse cillum dolore eu fugiat nulla pariatur.\n    Excepteur sint occaecat cupidatat non proident,\n    sunt in culpa qui officia deserunt mollit anim id\n    est laborum."},{title:"Tab 2",content:"2 Lorem ipsum dolor sit amet,\n    Duis aute irure dolor in reprehenderit in voluptate\n    velit esse cillum dolore eu fugiat nulla pariatur.\n    Excepteur sint occaecat cupidatat non proident,\n    sunt in culpa qui officia deserunt mollit anim id\n    est laborum."},{title:"Tab 3",content:"3 Duis aute irure dolor in reprehenderit in voluptate\n    velit esse cillum dolore eu fugiat nulla pariatur.\n    Excepteur sint occaecat cupidatat non proident,\n    sunt in culpa qui officia deserunt mollit anim id\n    est laborum."}],E=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(v,{tabs:h}))};u.a.render(i.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.f6a558f8.chunk.js.map