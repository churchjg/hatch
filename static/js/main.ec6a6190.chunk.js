(this.webpackJsonphatchassess=this.webpackJsonphatchassess||[]).push([[0],{23:function(t,e,a){},42:function(t,e,a){},43:function(t,e,a){"use strict";a.r(e);var s=a(0),n=a(2),r=a.n(n),c=a(16),i=a.n(c),d=(a(23),a(3)),u=a(4),l=a(6),o=a(5),h=a(17),j=a.n(h),p=(a(42),function(t){Object(l.a)(a,t);var e=Object(o.a)(a);function a(){var t;return Object(d.a)(this,a),(t=e.call(this)).seeGrades=function(){t.setState({gradesVisible:!0})},t.hideGrades=function(){t.setState({gradesVisible:!1})},t.handleTagChange=function(e){t.setState({newTag:e.target.value})},t.addTag=function(e,a){e.preventDefault();var s=Array.from(t.state.tags);s.push(t.state.newTag),t.setState({tags:s},(function(){t.props.addTag(a,t.state.tags)})),t.tagInput.current.value=""},t.tagInput=r.a.createRef(),t.state={gradesVisible:!1,tags:[]},t}return Object(u.a)(a,[{key:"render",value:function(){var t=this;return Object(s.jsxs)("div",{className:"student",children:[Object(s.jsx)("div",{className:"buttonHolder",children:this.state.gradesVisible?Object(s.jsx)("button",{onClick:this.hideGrades,children:Object(s.jsx)("i",{className:"fas fa-minus"})}):Object(s.jsx)("button",{onClick:this.seeGrades,children:Object(s.jsx)("i",{className:"fas fa-plus"})})}),Object(s.jsx)("img",{className:"robotAvatar",src:this.props.pic,alt:"student avatar"}),Object(s.jsxs)("div",{className:"studentInfo",children:[Object(s.jsx)("p",{className:"studentName",children:this.props.student.name}),Object(s.jsxs)("div",{className:"infoIndented",children:[Object(s.jsxs)("p",{children:["Company: ",this.props.student.company]}),Object(s.jsxs)("p",{children:["Email: ",this.props.student.email]}),Object(s.jsxs)("p",{children:["Skill: ",this.props.student.skill]}),Object(s.jsxs)("p",{children:["Average: ",this.props.student.average]}),this.state.gradesVisible?Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"gradeList",children:this.props.student.gradeArray.map((function(e){return Object(s.jsxs)("p",{children:["Test ",t.props.student.gradeArray.indexOf(e)+1,": ",Object(s.jsx)("span",{className:"grade",children:e}),"%"]},e)}))}),this.state.tags?Object(s.jsx)("div",{children:this.state.tags.map((function(t){return Object(s.jsx)("p",{className:"tag",children:t},t)}))}):null,Object(s.jsx)("form",{action:"",className:"tagForm",onSubmit:function(e){t.addTag(e,t.props.student.key)},children:Object(s.jsx)("input",{ref:this.tagInput,type:"text",placeholder:"Add a tag",onChange:this.handleTagChange})})]}):null]})]})]})}}]),a}(n.Component)),g=function(t){Object(l.a)(a,t);var e=Object(o.a)(a);function a(){var t;return Object(d.a)(this,a),(t=e.call(this)).componentDidMount=function(){j()({method:"GET",url:"https://www.hatchways.io/api/assessment/students"}).then((function(e){var a=e.data.students;t.studentData(a)}))},t.studentData=function(e){var a=[],s=function(t,e){return Number(t)+Number(e)};e.forEach((function(t){var e=t.grades,n=e.reduce(s),r="".concat(n/e.length,"%"),c={pic:t.pic,firstName:t.firstName.toLowerCase(),lastName:t.lastName.toLowerCase(),name:"".concat(t.firstName," ").concat(t.lastName),company:t.company,email:t.email,skill:t.skill,gradeArray:t.grades,average:r,key:t.id,tags:[]};a.push(c)})),t.setState({students:a,filteredArray:a})},t.addTag=function(e,a){var s=Array.from(t.state.students);s[e-1].tags=a,t.setState({students:s})},t.handleNameChange=function(e){var a=e.target.value.toLowerCase(),s=t.state.students.filter((function(t){return t.firstName.includes(a)||t.lastName.includes(a)}));t.setState({filteredArray:s})},t.handleTagChange=function(e){var a=e.target.value.toLowerCase(),s=t.state.students,n=t.state.students;s.forEach((function(t){t.tags.forEach((function(e){t.tagMatch=!1,e.includes(a)&&(t.tagMatch=!0)}))})),n=s.filter((function(t){return!0===t.tagMatch})),0===a.length&&(n=t.state.students),t.setState({filteredArray:n})},t.state={},t}return Object(u.a)(a,[{key:"render",value:function(){var t=this;return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)("section",{className:"studentContainer",children:[Object(s.jsxs)("form",{action:"",className:"searchForm",children:[Object(s.jsx)("input",{type:"text",placeholder:"Search by name",onChange:this.handleNameChange}),Object(s.jsx)("input",{type:"text",placeholder:"Search by tag",onChange:this.handleTagChange})]}),this.state.students?Object(s.jsx)("div",{children:this.state.filteredArray.map((function(e){return Object(s.jsx)(p,{pic:e.pic,student:e,addTag:t.addTag},e.key)}))}):null]})})}}]),a}(n.Component),f=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,44)).then((function(e){var a=e.getCLS,s=e.getFID,n=e.getFCP,r=e.getLCP,c=e.getTTFB;a(t),s(t),n(t),r(t),c(t)}))};i.a.render(Object(s.jsx)(g,{}),document.getElementById("root")),f()}},[[43,1,2]]]);
//# sourceMappingURL=main.ec6a6190.chunk.js.map