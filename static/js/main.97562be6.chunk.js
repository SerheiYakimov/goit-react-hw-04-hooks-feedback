(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,,function(e,t,n){e.exports={button:"FeedbackOptions_button__3n-hy"}},,,,,function(e,t,n){e.exports={container:"Section_container__37ABw"}},function(e,t,n){e.exports={container:"Notification_container__2Ycj5"}},,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(4),r=n.n(o),i=(n(16),n(5)),s=n(6),d=n(7),l=n(11),u=n(10),b=(n(17),n(0));function j(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,o=e.positivePercentage;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{children:["Good:",t]}),Object(b.jsxs)("p",{children:["Neutral:",n]}),Object(b.jsxs)("p",{children:["Bad:",a]}),Object(b.jsxs)("p",{children:["Total:",c]}),Object(b.jsxs)("p",{children:["PositiveFeedback:",o,"%"]})]})}j.defaultProps={good:0,neutral:0,bad:0,total:0,positivePercentage:0};var h=n(3),v=n.n(h);function p(e){var t=e.options,n=e.onLeaveFedback;return Object(b.jsx)("div",{className:v.a.item,children:t.map((function(e){return Object(b.jsx)("button",{name:e,onClick:n,className:v.a.button,children:e},e)}))})}var f=n(8),O=n.n(f);function g(e){var t=e.title,n=e.children;return Object(b.jsxs)("section",{className:O.a.container,children:[Object(b.jsx)("h2",{children:t}),n]})}var k=n(9),x=n.n(k);function m(e){var t=e.message;return Object(b.jsx)("p",{className:x.a.container,children:t})}var F=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleClick=function(t){var n=t.currentTarget.name;console.log(n),e.setState((function(e){return Object(i.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){return Math.round(e.state.good/e.countTotalFeedback()*100)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(g,{title:"Please leave feedback",children:Object(b.jsx)(p,{options:["good","neutral","bad"],onLeaveFedback:this.handleClick})}),this.countTotalFeedback()>0?Object(b.jsx)(g,{title:"Statistics",children:Object(b.jsx)(j,{good:t,neutral:n,bad:a,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})}):Object(b.jsx)(m,{message:"No feedback given"})]})}}]),n}(a.Component),P=F;r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(P,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.97562be6.chunk.js.map