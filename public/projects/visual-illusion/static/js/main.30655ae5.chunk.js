(this.webpackJsonpillusion=this.webpackJsonpillusion||[]).push([[0],{13:function(e,t,i){},15:function(e,t,i){"use strict";i.r(t);var s=i(2),n=i.n(s),o=i(4),a=i.n(o),c=i(5),r=i(6),l=i(1),h=i(8),b=i(7),u=(i(13),["apple.png","banana.webp","brain.png","car.webp","citgo.png","cocacola.png","cookie.png","jam.webp","mit.png","oreo.webp","panda.png","penny.png","stop.webp","tennis.png","washington.png"]),d=i(0);function j(){var e=Math.floor(Math.random()*u.length);return"./images/".concat(u[e])}var p=function(e){Object(h.a)(i,e);var t=Object(b.a)(i);function i(){var e;return Object(c.a)(this,i),(e=t.call(this)).state={cols:150,ratio:25,animation:"slide-right",speed:2.5,grey:!0,image:j()},e.setCols=e.setCols.bind(Object(l.a)(e)),e.setRatio=e.setRatio.bind(Object(l.a)(e)),e.setSpeed=e.setSpeed.bind(Object(l.a)(e)),e.reverse=e.reverse.bind(Object(l.a)(e)),e.newImage=e.newImage.bind(Object(l.a)(e)),e.toggleGrey=e.toggleGrey.bind(Object(l.a)(e)),e.reset=e.reset.bind(Object(l.a)(e)),e}return Object(r.a)(i,[{key:"setCols",value:function(e){e.preventDefault(),this.setState({cols:e.target.value})}},{key:"setRatio",value:function(e){e.preventDefault(),this.setState({ratio:e.target.value})}},{key:"setSpeed",value:function(e){e.preventDefault(),this.setState({speed:e.target.value})}},{key:"reverse",value:function(e){e.preventDefault(),"slide-right"===this.state.animation?this.setState({animation:"slide-left"}):this.setState({animation:"slide-right"})}},{key:"newImage",value:function(e){e.preventDefault(),this.setState({image:j()})}},{key:"toggleGrey",value:function(e){e.preventDefault(),this.setState({grey:!this.state.grey})}},{key:"reset",value:function(e){e.preventDefault(),this.setState({cols:150,ratio:25,animation:"slide-right",speed:2.5,grey:!0})}},{key:"render",value:function(){for(var e=[],t=0;t<2*this.state.cols;){for(var i=0;i<this.state.ratio;i++)e.push(Object(d.jsx)("div",{className:"occlude"},t)),t++;e.push(Object(d.jsx)("div",{className:"pass"},t)),t++}var s=this.state.grey?"anime grey":"anime",n=Object(d.jsx)("img",{className:s,style:{animationDuration:"".concat(this.state.speed,"s"),animationName:this.state.animation},src:this.state.image});return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"title",children:[Object(d.jsx)("h2",{children:"The Effect of Obscured Motion on Object Recognition"}),Object(d.jsx)("span",{className:"byline",children:"Sean Knight"})]}),Object(d.jsx)("h3",{children:"What mode of concealment has the most perceivable effect on object recognition ability?"}),Object(d.jsx)("p",{children:"The following illusion aims to determine the ability of individuals to fill in object information over space and time with the ultimate task of recognition. As you proceed through the illusion, you might find that some objects are harder to determine than others and I encourage you to think about the settings that might make object recognition hard. Is it the lack of color? Is it frequency of occlusion? Is it the object speed? Moreover, some objects might be harder to determine due to familiarity with the object itself."}),Object(d.jsx)("p",{children:"Through this illusion, we are able to see the effect of priors and the weight our visual system might put on recognition for specific objects (do we need color? do we need to see more?). The combination of the two make up the basics of the Bayesian framework (priors and likelihood)."}),Object(d.jsx)("p",{children:"The default settings for occlusion should be 150 Occlusion Columns, 25:1 size ratio for Occlusion Columns, an animation speed of 2.5s, and a greyscale image. You should attempt to play around with the settings for various images and determine what your object-specific recognition thresholds might be."}),Object(d.jsx)("p",{children:'Some objects should be determinable at the default settings, if you are having trouble, it might be helpful to track and foveate the object motion. Once you have played around with the settings for an object, you can see the unobsecured object by setting the "Number of Occlusion Columns" to 0.'}),Object(d.jsx)("p",{children:"For this question, you might want to note which objects were most easily recognizable (minimal changes in settings) and which settings had to only be slightly adjusted for object recognition."}),Object(d.jsxs)("div",{className:"animation-wrapper",children:[Object(d.jsxs)("div",{className:"settings",children:[Object(d.jsx)("h2",{children:"Illusion Settings"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{htmlFor:"cols",children:"Number of Occlusion Columns: "}),Object(d.jsx)("input",{id:"cols",type:"number",value:this.state.cols,onChange:this.setCols}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{htmlFor:"ratio",children:"Size Ratio of Occlusion Column to Transparent Column: "}),Object(d.jsx)("input",{id:"ratio",type:"number",value:this.state.ratio,onChange:this.setRatio}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{htmlFor:"speed",children:"Animation Speed (sec): "}),Object(d.jsx)("input",{id:"speed",type:"number",step:".1",value:this.state.speed,onChange:this.setSpeed}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{id:"reverse",type:"button",value:"Reverse Direction",onClick:this.reverse}),Object(d.jsx)("input",{id:"random",type:"button",value:"Randomize Image",onClick:this.newImage}),Object(d.jsx)("input",{id:"grey",type:"button",value:"Toggle Greyscale",onClick:this.toggleGrey}),Object(d.jsx)("input",{id:"reset",type:"button",value:"Reset Settings",onClick:this.reset}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{})]}),Object(d.jsxs)("div",{className:"animation-container",children:[n,Object(d.jsx)("div",{className:"col-container",children:e})]})]}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsxs)("p",{children:["1. McDermott J, Weiss Y, Adelson EH. Beyond Junctions: Nonlocal form Constraints on Motion Interpretation. Perception. 2001;30(8):905-923. ",Object(d.jsx)("a",{href:"https://doi.org/10.1068/p3219",children:"doi:10.1068/p3219"})]}),Object(d.jsxs)("p",{children:["Kellman, P. J., & Shipley, T. F. (1991). A theory of visual interpolation in object perception. Cognitive Psychology, 23(2), 141\u2013221. ",Object(d.jsx)("a",{href:"https://doi.org/10.1016/0010-0285(91)90009-D",children:"https://doi.org/10.1016/0010-0285(91)90009-D"})]})]})}}]),i}(n.a.Component);a.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.30655ae5.chunk.js.map