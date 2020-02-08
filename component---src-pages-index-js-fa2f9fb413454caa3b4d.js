(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{173:function(e,t,a){"use strict";a.r(t);a(175),a(33);var n=a(0),i=a.n(n),o=a(177),r=a.n(o),l=a(184),s=i.a.createContext(l);var c={layout:{fontFamily:"Helvetica, arial, sans-serif",margin:"auto",padding:"10px 30px 10px 30px",maxWidth:"720px"}},m=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.children;return i.a.createElement(s.Consumer,null,function(t){var a=t.meta;return i.a.createElement("div",null,i.a.createElement(r.a,{title:a.title,meta:[{name:"description",content:a.description},{name:"keywords",content:a.keywords},{name:"og:title",content:a.title},{name:"og:description",content:a.description},{name:"og:type",content:"website"},{name:"og:locale",content:"vi_VN"},{name:"og:site_name",content:a.title}]}),i.a.createElement("div",{style:c.layout},e))})},n}(n.Component),d={header:{paddingBottom:10,borderBottom:"solid 1px"}};t.default=function(){return i.a.createElement(s.Consumer,null,function(e){var t=e.info,a=e.summary,n=e.awards,o=e.history,r=e.educations;return i.a.createElement(m,null,i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("h1",null,t.name),i.a.createElement("p",null,i.a.createElement("span",null,t.location),i.a.createElement("span",null," · "),i.a.createElement("span",null,t.mobile),i.a.createElement("span",null," · "),i.a.createElement("span",null,i.a.createElement("a",{href:t.email},t.email))),i.a.createElement("p",null,i.a.createElement("span",null,i.a.createElement("a",{href:t.linkedin},t.linkedin)),i.a.createElement("span",null," · "),i.a.createElement("span",null,i.a.createElement("a",{href:t.github},t.github)),i.a.createElement("span",null," · "),i.a.createElement("span",null,i.a.createElement("a",{href:t.blog},t.blog)))),i.a.createElement("div",null,i.a.createElement("h2",{style:d.header},"Career summary"),i.a.createElement("ul",null,a.map(function(e,t){return i.a.createElement("li",{key:"summary-"+t},e)}))),i.a.createElement("div",null,i.a.createElement("h2",{style:d.header},"Awards"),i.a.createElement("ul",null,n.map(function(e,t){return i.a.createElement("li",{key:"award-"+t},i.a.createElement("span",null,e.year),i.a.createElement("span",null," – "),i.a.createElement("span",null,e.detail))}))),i.a.createElement("div",null,i.a.createElement("h2",{style:d.header},"Work history"),i.a.createElement("div",null,o.map(function(e,t){return i.a.createElement("div",{key:"history-"+t},i.a.createElement("h3",null,i.a.createElement("span",null,e.title),i.a.createElement("span",null,", "),i.a.createElement("span",null,e.company)),i.a.createElement("p",null,i.a.createElement("span",null,i.a.createElement("i",null,e.time))),i.a.createElement("p",null,i.a.createElement("span",null,i.a.createElement("strong",null,"Skill: ")),i.a.createElement("span",null,i.a.createElement("i",null,e.skills))),i.a.createElement("div",null,e.projects.map(function(e,t){return i.a.createElement("div",{key:"project-"+t},i.a.createElement("p",null,i.a.createElement("span",null,i.a.createElement("strong",null,e.name)),!!e.link&&i.a.createElement("span",null,i.a.createElement("span",null," ("),i.a.createElement("span",null,i.a.createElement("a",{href:e.link},e.link)),i.a.createElement("span",null,")")),i.a.createElement("span",null,": "),i.a.createElement("span",null,e.description)),i.a.createElement("ul",null,e.responsibilities.map(function(e,t){return i.a.createElement("li",{key:"responsibility-"+t},e)})))})))}))),i.a.createElement("div",null,i.a.createElement("h2",{style:d.header},"Education"),i.a.createElement("div",null,r.map(function(e,t){return i.a.createElement("div",{key:"education-"+t},i.a.createElement("h3",null,i.a.createElement("span",null,e.major),i.a.createElement("span",null,", "),i.a.createElement("span",null,e.school)),i.a.createElement("p",null,i.a.createElement("i",null,e.time)),i.a.createElement("ul",null,e.achievements.map(function(e,t){return i.a.createElement("li",{key:"achievement-"+t},e)})))})))))})}},184:function(e){e.exports={meta:{title:"Nguyen Nhat Hoang",description:"Nguyen Nhat Hoang Curriculum Vitae",keywords:"cv, nguyen nhat hoang, codeaholicguy, curriculum vitae, resume"},info:{name:"Nguyen Nhat Hoang",location:"Ho Chi Minh, VN",mobile:"+841698246714",email:"hoangnn93@gmail.com",linkedin:"https://vn.linkedin.com/in/nguyennhathoang",github:"https://github.com/codeaholicguy",blog:"https://codeaholicguy.com"},summary:["I am a polyglot Engineering Manager, accomplished public speaker, and thoughtful software engineer. I have been a full-stack software engineer with more than 6 years in Web Application Development, Enterprise Application and Cloud Computing Development with good knowledge of Object-Oriented Analysis and Design, Architecture Design, Database Design, Design Pattern.","I have extensive knowledge of JavaScript, NodeJS, Java, and related technologies like React/Redux, Spring framework, Hibernate, etc.","I have considerable experience in designing scalability, high availability and high-performance back end services using Load Balancing, RPC, Caching, Message Queue System.","I am strong at leading, communication skill, like to help other and tend to work well within a group. I passionate about learning new languages and technologies as well as sharing with others.","I own a Vietnamese IT blog, love to share my working experience and knowledge with other developers.","I am also a speaker, a maintainer of some open-source projects and I love doing that."],awards:[{year:"2016",detail:"Best product in Marketing Category of Facebook Hackathon Vietnam 2016, team Ambar."}],history:[{title:"Engineering Manager",company:"ShopBack",time:"April 2018 to present",skills:"JavaScript, NodeJS, ReactJS, Redux, MySQL, AWS, Kubernetes, Microservices, Chef, Consul",projects:[{name:"Micro-services extraction",description:"I lead a tribe of 7 senior engineers. We are an inclusive and diverse team doing core micro-services extraction from a monolith system to Kubetnetes. The team partners closely with our business, stakeholders, product managers, and designers.",responsibilities:["I oversee and make the decision on all aspects of architecture and development, including business-focussed trade-offs around technology, features, quality and test strategy.","I work closely with the team and stakeholders to define tech and organizational debt, gather requirements from partners, introduce agile, communicate team strategy and sponsor team members to new learning opportunities.","I own and am responsible for hiring top talent in a high-performance engineering team, craft a structured and fair interview process and create a diverse candidate pipeline in collaboration with HR and technical recruiters.","I envision and build out team-wide strategy bets in collaboration with high-level leadership."]},{name:"Service Operation Platform",description:"I led a 5 engineers team, creating a sophisticated Service Operation Platform for 7 countries. We enabled ShopBack engineers to significantly scale the way to develop the new features for the system. We eliminated many pain points from the engineering side and unified the development process so that they become more productive since they can optimize the development time by putting concern into the app instead of setting up things. Today, that platform is the primary way to develop features for Service Operation in ShopBack.",responsibilities:["I was the Architect who handles the architecture design of the platform, we transformed from a single code base for Service Operation Tool to multiple React apps, which is called sub-apps and plugged into the platform. The platform handles authentication, access control, audit log, controlling the accessible of sub-apps based on countries, etc.","I led the team and oversaw and made the decision on all aspects of architecture and development of both frontend and backend of the platform."]}]},{title:"Web Team Lead",company:"Kobiton, KMS Technology",time:"April 2016 to April 2018",skills:"JavaScript, NodeJS, ReactJS, Redux, Jest, Enzyme, Electron, KoaJS, Sequelize, Appium, Babel, Gulp, Webpack, Nginx, PostgreSQL, ElasticSearch, LogStash, Kibana, Jenkins, AWS",projects:[{name:"Kobiton",link:"https://kobiton.com",description:"Kobiton is a mobile application testing service enables the user to test their Android, iOS, and Web apps on real, physical phones and tablets that are hosted by Kobiton cloud. A test report will be generated for each device being part of test execution, which contains playback, detailed logs, HTTP Commands, and Metadata. Support test automation using the Appium framework, which allows testing of native and hybrid Android, iOS applications created with PhoneGap, Titanium, Xamarin, Unity, and other frameworks.",responsibilities:["I managed the team with 5 members, we were responsible for Kobiton portal.","I oversaw and made the decision on all aspects of architecture and development of both frontend and backend of the product, including business focussed trade-offs around technology, features, quality and test strategy.","I mentored and paired with team members to help them learn new technologies, resolve their problems and ship features.","I validated customer problems and found user-focussed solutions by working directly with customers, product and sales teams."]}]},{title:"Senior Software Engineer",company:"NCT Corporation",time:"April 2015 to April 2016",skills:"Java, ElasticSearch, Solr, Gearman, Apache Kafka, Apache Thrift, Redis, Memcached, Kyoto Cabinet, Jetty Embedded, Nginx, MySQL, HTML5/CSS3, Javascript, jQuery",projects:[{name:"XMusic",link:"http://xmusic-apps.com",description:"XMusic is a quite new product of online music and video streaming of NCT Corporation. With premium content from major music record labels like Sony Music, Universal Music, Warner Music topped with most popular local artists. Currently, it has over 1 million downloads from two main platform iOS and Android.",responsibilities:["I was the lead developer of the team 3 members, we were responsible for building a scalability, high availability and high-performance back -end services using Microservices architecture.","I handled designing, estimation, development, code review of all modules of the backend system.","I mentored and paired with others to help them and coordinated with other teams (product, mobile app, admin dashboard) for shipping features."]},{name:"nhaccuatui.com",link:"https://nhaccuatui.com",description:"nhaccuatui.com is one of the largest Vietnamese music on demand services, which runs on multiple platforms like Web, Android, iOS, Smart TV, WAP, Window Phone, Windows with over millions of views per day and average concurrent user on all types of device is over 30000.",responsibilities:["I was the core developer of backend team.","I re-designed the architecture of the backend system follow Microservices architecture in order to reduce the cost of operation and increase the scalability as well as the performance of the system.","I involved in designing, estimation, and development of various modules of the backend system.","I mentored and paired with team members to help them learn new technologies and ship features, I was also the one who usually did research new things and shared it with the team.","I coordinated with other teams for shipping features."]}]},{title:"Software Engineer",company:"FPT Software Ho Chi Minh",time:"Jan 2013 to April 2015",skills:"HTML5/CSS3, Javascript, Java, Spring, Jersey, Thyme leaf, Hibernate, JPA, ElasticSearch, Redis, Memcached, MySQL, OracleDB, LDAP, Tomcat, OAuth, Facebook Graph API, Twitter API, AWS",projects:[{name:"Actvila",link:"https://actvila.jp",description:"Actvila is a large Japanese video on demand service, which provides streaming multimedia content on multiple platforms such as Web, iOS, Android and especially focus on TV.",responsibilities:["I was the core developer of the project, who handled the Authentication services and various features in backend side.","I worked directly with the customer to understand the requirements of the project and finalize its scope.","I played full-stack developer role in the project and joined in whole project process include designing, estimation, and implementation."]},{name:"Toshiba Cloud TV",description:"Toshiba Cloud TV Services provide services for millions Toshiba Smart TV users in multiple markets such as Euro, North America, Japanese. With key features are  multimedia playback via USB or WIFI/LAN network, providing media guide approach to listings browsing, link TV with mobile device such as iOS, Android for control as well as link multiple TV for sharing information, booking calendar for recording TV program, future viewing history-based recommendations system, interaction with social network services such as Facebook, Twitter.",responsibilities:["I was the backend developer of various modules.","I worked directly with the customer to understand the requirements of the project and finalize its scope as well as help them in changing requirements.","I designed and implemented the backend for the recommendation module, the social network modules."]}]}],educations:[{school:"FPT University",major:"Software Engineering",time:"September 2010 to April 2014",achievements:["I had 50% scholarship.","I completed 8 semesters grade Good.","I was chosen as Team leader for Capstone project ."]}]}}}]);
//# sourceMappingURL=component---src-pages-index-js-fa2f9fb413454caa3b4d.js.map