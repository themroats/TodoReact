(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(t,e,o){t.exports=o(44)},24:function(t,e,o){},44:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),i=o(16),c=o.n(i),s=(o(24),o(2)),r=o(3),l=o(6),u=o(4),d=o(7),h=o(5),p=function(t){function e(){return Object(s.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this;return n.createElement("li",null,n.createElement("button",{onClick:function(){return t.props.xClick(t.props.task._id)}},"X"),n.createElement("button",{onClick:function(){return t.props.toggleClick(t.props.task._id)}},"Toggle"),n.createElement("span",{style:{textDecoration:this.props.task.completed?"line-through":"none"}},this.props.task.task))}}]),e}(n.Component),m=function(t){function e(){return Object(s.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this;return n.createElement("div",null,n.createElement("ul",null,this.props.todos.map(function(e,o){return n.createElement(p,{key:e._id,toggleClick:t.props.todoToggleClick,xClick:t.props.todoXClick,task:e})})))}}]),e}(n.Component),f=function(t){function e(t){var o;return Object(s.a)(this,e),(o=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={typedText:""},o.handleKey=o.handleKey.bind(Object(d.a)(o)),o}return Object(h.a)(e,t),Object(r.a)(e,[{key:"handleTyping",value:function(t){this.setState({typedText:t.target.value})}},{key:"handleSubmit",value:function(){this.props.onSubmit(this.state.typedText),this.setState({typedText:""})}},{key:"handleKey",value:function(t){"Enter"===t.key&&this.handleSubmit()}},{key:"render",value:function(){var t=this;return n.createElement("div",null,n.createElement("input",{type:"text",onKeyPress:this.handleKey,value:this.state.typedText,onChange:function(e){return t.handleTyping(e)}}),n.createElement("button",{onClick:function(){return t.handleSubmit()}},"Submit"))}}]),e}(n.Component),b=o(8),v=o.n(b),g=o(17),k=o.n(g),y="http://localhost:3001/todos",j=function(t){function e(t){var o;return Object(s.a)(this,e),(o=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={todos:[]},o.addTodo=o.addTodo.bind(Object(d.a)(o)),o.removeTodo=o.removeTodo.bind(Object(d.a)(o)),o.toggleTodo=o.toggleTodo.bind(Object(d.a)(o)),o}return Object(h.a)(e,t),Object(r.a)(e,[{key:"addTodo",value:function(t){var e=this,o={taskText:t,completed:!1};v.a.post("http://localhost:3001/todos/add",o).then(function(t){e.setState({todos:e.state.todos.concat(t.data)})}).catch(function(t){console.log(t)})}},{key:"removeTodo",value:function(t){var e=this;v.a.post(y+"/remove",{id:t}).then(function(o){e.setState(function(e){for(var o=0;o<e.todos.length;o++)e.todos[o]._id===t&&(e.todos.splice(o,1),o--);return{todos:e.todos}})}).catch(function(t){console.log(t)})}},{key:"toggleTodo",value:function(t){var e=this;v.a.post(y+"/toggle",{id:t}).then(function(){e.setState(function(e){return k.a.each(e.todos,function(){this._id===t&&(this.completed=!this.completed)}),{todos:e.todos}})}).catch(function(t){console.log(t)})}},{key:"componentDidMount",value:function(){var t=this;v.a.get(y+"/all").then(function(e){t.setState({todos:e.data})}).catch(function(t){console.log(t)})}},{key:"render",value:function(){return n.createElement("div",null,n.createElement(f,{onKey:this.handleKey,onSubmit:this.addTodo}),n.createElement(m,{todoToggleClick:this.toggleTodo,todoXClick:this.removeTodo,todos:this.state.todos}))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.cda07362.chunk.js.map