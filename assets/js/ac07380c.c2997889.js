(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(124)),c={title:"Bee Using Docker",id:"docker"},i={unversionedId:"installation/docker",id:"installation/docker",isDocsHomePage:!1,title:"Bee Using Docker",description:"Docker containers for Bee are hosted at Docker Hub for your convenience.",source:"@site/docs/installation/docker.md",slug:"/installation/docker",permalink:"/docs/installation/docker",editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/installation/docker.md",version:"current",sidebar:"Balls",previous:{title:"Hive",permalink:"/docs/installation/hive"},next:{title:"Bee Clef",permalink:"/docs/installation/bee-clef"}},l=[{value:"Quick Start",id:"quick-start",children:[]},{value:"Versions",id:"versions",children:[]},{value:"Docker Compose",id:"docker-compose",children:[]}],b={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Docker containers for Bee are hosted at ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://hub.docker.com/r/ethersphere/bee"}),"Docker Hub")," for your convenience. "),Object(o.b)("p",null,"If running a full Bee node, it is recommended that you make use of Ethereum's external signer, ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/installation/bee-clef"}),"Clef"),". See below for instructions on how to use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/installation/docker#docker-compose"}),"Docker Compose")," to easily set up Bee with persistent storage and integration with the Bee Clef container."),Object(o.b)("h3",{id:"quick-start"},"Quick Start"),Object(o.b)("p",null,"Try Bee out by simply running the following command in your Terminal. "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'docker run\\\n  -p 1635:1635 \\\n  -p 1634:1634 \\\n  -p 1633:1633\\\n  --rm -it ethersphere/bee:latest\\\n  start \\\n    --welcome-message="Bzzzz bzzz bzz bzz. \ud83d\udc1d" \\\n    --swap-endpoint wss://goerli.infura.io/ws/v3/your-api-key \\\n    --debug-api-enable\n')),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If starting your node for the first time, you will need to deploy a chequebook contract. See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/installation/manual"}),"Manual Installation")," for more info."))),Object(o.b)("p",null,"To persist files, mount a local directory as follows and enter the password used to encrypt your keyfiles. Note, Docker insists on absolute paths when mounting volumes, so you must replace ",Object(o.b)("inlineCode",{parentName:"p"},"/path/to/.bee-docker")," with a valid path from your local filesystem."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'docker run\\\n  -v /path/to/.bee-docker:/home/bee/.bee\\\n  -p 1635:1635 \\\n  -p 1634:1634 \\\n  -p 1633:1633\\\n  --rm -it ethersphere/bee:latest\\\n  start \\\n    --welcome-message="Bzzzz bzzz bzz bzz. \ud83d\udc1d" \\\n    --swap-endpoint wss://goerli.infura.io/ws/v3/your-api-key \\\n      --debug-api-enable\n')),Object(o.b)("p",null,"Once you have generated your keys, leave Bee to run in the background..."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'docker run\\\n  -d \n  -v /path/to/.bee-docker:/home/bee/.bee\\\n  -p 1635:1635 \\\n  -p 1634:1634 \\\n  -p 1633:1633\\\n  --rm -it ethersphere/bee:latest\\\n  start \\\n    --welcome-message="Bzzzz bzzz bzz bzz. \ud83d\udc1d" \\\n    --swap-endpoint wss://goerli.infura.io/ws/v3/your-api-key \\\n      --debug-api-enable\n')),Object(o.b)("h3",{id:"versions"},"Versions"),Object(o.b)("p",null,"Other versions of the Bee container are also available."),Object(o.b)("h4",{id:"latest-beta-release"},"Latest Beta Release"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker pull ethersphere/bee:beta\n")),Object(o.b)("h4",{id:"specific-versions"},"Specific Versions"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker pull ethersphere/bee:0.6.0\n")),Object(o.b)("h4",{id:"edge"},"Edge"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker pull ethersphere/bee:latest\n")),Object(o.b)("p",null,"Please see the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://hub.docker.com/r/ethersphere/bee"}),"Docker Hub repository")," for more information."),Object(o.b)("h3",{id:"docker-compose"},"Docker Compose"),Object(o.b)("p",null,"Configuration files for Bee and Bee Clef are provided to enable quick and easy installation of both projects with persistent storage and secure secret management. To install Bee without Clef, simply omit the relevant steps."),Object(o.b)("h4",{id:"setup"},"Setup"),Object(o.b)("p",null,"First, retrieve the current ",Object(o.b)("inlineCode",{parentName:"p"},"docker-compose.yaml")," file."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"wget -q https://raw.githubusercontent.com/ethersphere/bee/v0.6.1/packaging/docker/docker-compose.yml\n")),Object(o.b)("p",null,"Next, create a ",Object(o.b)("inlineCode",{parentName:"p"},".env")," file using the example file provided. This file will be responsible for storing configuration and secrets for our Bee and Bee Clef applications."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"wget -q https://raw.githubusercontent.com/ethersphere/bee/v0.6.1/packaging/docker/env -O .env\n")),Object(o.b)("p",null,"There are some important configuration parameters which must be set in order for our projects to work. To affect configuration in the ",Object(o.b)("inlineCode",{parentName:"p"},".env")," file, we first remove the ",Object(o.b)("inlineCode",{parentName:"p"},"#")," at the beginning of the line and then change the value after ",Object(o.b)("inlineCode",{parentName:"p"},"=")," to our desired config."),Object(o.b)("p",null,"For Bee, amend the following parameters:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"BEE_SWAP_ENDPOINT=wss://goerli.infura.io/ws/v3/your-api-key\nBEE_PASSWORD=my-password\n")),Object(o.b)("p",null,"To enable Clef support, we must also change the following params: "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"CLEF_CHAINID=5\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"BEE_CLEF_SIGNER_ENABLE=true\nBEE_CLEF_SIGNER_ENDPOINT=http://clef-1:8550\n")),Object(o.b)("p",null,"With the configuration settings complete, run ",Object(o.b)("inlineCode",{parentName:"p"},"docker-compose up")," with the ",Object(o.b)("inlineCode",{parentName:"p"},"-d")," flag to run Bee and Bee Clef as a daemon."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker-compose up -d\n")),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Docker Compose will create a Docker Volume called ",Object(o.b)("inlineCode",{parentName:"p"},"bee")," containing important key material. Make sure to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/working-with-bee/backups"}),"backup")," the contents of your Docker volume!"))),Object(o.b)("p",null,"To determine our address to fund, we can check the logs for our Bee container:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker-compose logs -f bee-1\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'bee_1 | time="2020-12-15T18:43:14Z" level=warning msg="cannot continue until there is sufficient ETH (for Gas) and at least 1 BZZ available on 7a977fa660e2e93e1eba40030c6b8da68d01971e"\ntime="2020-12-15T18:43:14Z" level=warning msg="learn how to fund your node by visiting our docs at https://docs.ethswarm.org/docs/installation/fund-your-node"\n')),Object(o.b)("p",null,"Once you have determined your Ethereum addresses, ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/installation/fund-your-node"}),"fund your node")),Object(o.b)("p",null,"After your transaction has been completed, your node should recognise that your wallet has been funded, and begin to deploy and fund your Bee chequebook!"),Object(o.b)("p",null,"Once Bee has completed this procedure, you may query the Bee ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api-reference/api-reference"}),"HTTP API")," at ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:1633"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"curl localhost:1633\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"Ethereum Swarm Bee\n")),Object(o.b)("p",null,"Congratulations! Your Bee is up and running! \ud83d\udc1d"))}s.isMDXComponent=!0},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return n?r.a.createElement(m,i(i({ref:t},b),{},{components:n})):r.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var b=2;b<o;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);