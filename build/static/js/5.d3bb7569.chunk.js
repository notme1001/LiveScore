(this.webpackJsonplivesoccer=this.webpackJsonplivesoccer||[]).push([[5],{35:function(e,t,s){"use strict";t.a=s.p+"static/media/rightImg.ccfb7e10.png"},36:function(e,t,s){"use strict";s.d(t,"a",(function(){return d}));var c=s(47),l=s(40),n=s(41),a=s(42),i=s.n(a),r=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BASE_URL:"https://client.elevenscore.com",REACT_APP_API_KEY:"24578cdb-fc01-4794-9bb0-865dd8ac405c"}).REACT_APP_API_ENDPOINT,o=i.a.create({baseURL:r,headers:{"X-Api-Key":"24578cdb-fc01-4794-9bb0-865dd8ac405c","Content-Type":"application/json"}}),d=function(){function e(){Object(l.a)(this,e)}return Object(n.a)(e,null,[{key:"get",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return o({method:"GET",url:e,headers:Object(c.a)({},{"X-Api-Key":"24578cdb-fc01-4794-9bb0-865dd8ac405c"})})}},{key:"post",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return o({method:"POST",url:e,data:t,headers:Object(c.a)(Object(c.a)({},{"X-Api-Key":"24578cdb-fc01-4794-9bb0-865dd8ac405c"}),s)})}},{key:"patch",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o({method:"PATCH",url:e,data:JSON.stringify(t),headers:Object(c.a)({},{"X-Api-Key":"24578cdb-fc01-4794-9bb0-865dd8ac405c"})})}},{key:"put",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o({method:"PUT",url:e,data:JSON.stringify(t),headers:Object(c.a)({},{"X-Api-Key":"24578cdb-fc01-4794-9bb0-865dd8ac405c"})})}},{key:"delete",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o({method:"DELETE",url:e,data:JSON.stringify(t),headers:Object(c.a)({},{"X-Api-Key":"24578cdb-fc01-4794-9bb0-865dd8ac405c"})})}}]),e}();o.interceptors.request.use((function(e){var t=e,s=e.headers;return t.headers=Object(c.a)(Object(c.a)({},s),{},{"X-Api-Key":"24578cdb-fc01-4794-9bb0-865dd8ac405c"}),t})),o.interceptors.response.use((function(e){return e}),(function(e){var t=e.response,s=e.config;return t&&500!==t.status?s:Promise.reject(e)}))},38:function(e,t,s){"use strict";var c=s(37),l=s(3),n=s(0),a=s(8);t.a=function(){var e=Object(n.useRef)(null),t=Object(n.useRef)(null),s=Object(n.useState)(!1),i=Object(c.a)(s,2),r=i[0],o=i[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("nav",{className:"flex items-center justify-between flex-wrap bg-grey-darkest w-full pin-t p-8",children:[Object(l.jsx)("div",{className:"flex items-center justify-end px-4",children:Object(l.jsx)(a.b,{to:"/",children:Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI4AAAAmCAYAAAASsqOLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAApzSURBVHgB7VxtbBTHGX537zCKTYndBIOiNllTVWA3JjaERqSKOFRAqJGaMy2IFCQffxKpVDKmrVA/fW6bSlQVHK2IFCrhs0TVH6i1UdWGNGl9VtSCoI0dUIGoKV5KooqSxK7kz7vb3bzP7qy9d9673TPY8UX7SOPdnXnnY2+eez9m5kw0Bzy6dU/k4vVbbe++P9Vz64OpoXc+mBrmZIjE9+kBlF28erOtYduuJgrwsUPYr6ASiVYvD1e0kUSxxoY1ykO1tWRwvjRbtJrIaDIkanpo1apoc30DhWi3KkkUT8vp/uvnelUKUPaQ/Qit27q74xPhiiEmStwwSNm6+Snyi727WphHpBg6JZdoFX1oiwKUPaRihWt37FHCWa1HImna3Kxc8SAlTxyjUhA70E6377zn7FXNhNJbAu1TviiocdZ9cXfrkqw+4CQNsHfXTioVz3xpR24Ga6Al2YqBxu1fiVKAsoQrcUAa9lGSZPorM4C22Rbxb6ZsbOc6VZVV+dnVpId60BcFKDvMIg60gCDNLKz7XD3NBVVVlRR9ertrGfoKyFN+yImq4NNQVu+qqqykZcsqcyXZM65dsYLmCjhTaHdl7YM0Nj4+nT86Oo7nxNod0SDiKiPkOMdYk+EMxU3w8j+v0Y9+nqATR37Ck18agW7/7w7FvnGIjnR8t4jWkgY/9cmKZgpQFpg2Ve8OZzoKkQbAhG/jMPzoi7+iUoE68I2Kmzqj6db7E3EKUBYwifPf4QlFN/SYl/A+jqhu37lDvX98hfyi9w+vmHX8RGOSJLcNDRvVFGDRwySOplGkmLaxASf30Nefo9NnfmeaHy9ABrIgDSIyH6gO65MHaR5hGEYbpwFOEQowZ5jEMWTZ92ouzM26hnpfJuv0mR568vMbSgvhJfmuIiwmRJQTr3AbhfbIQEyUfSSRHI+rWpC3S6REkbEuWkjvDKeb+G0GSqk0NjZOrQcOMYnW0rLKSleZUY6cbqg36Uj8e361zTQMTd/y6RX3pWgO4ElIkkWK/ZIkJV3KQZzNnDq5fJAWENy3wpc+ctfucR5PJ5UJwqRnIySFSqoEk7Wy9gE6f+kfReVWKw+XTBpAks3V6hTNA3hyEnxJ0D0AiMDtqSVU6SKLNN2c4mQtsGL1HBofWrKf20sV6Kuay0bI37h8yxaS5zxcCr6fLFFoM5UI+C431P94ykEmZ4/KJyRZfozmCfyBHOM0xOkZ8TwgniMusjFR1uXIU4R5GeZHlBmiDT+mLyKuCUwINB6nOFlESlGeJsKYOPUZ1iwOo09h3hSXsfqSdb4/pw7xHlFHeRPaQRuO9/tLfjsyr9zOGoQX/nbpDd+y5y/9nUqFPr+Oaw1ZE1Qjns+KZ7d9s1ZRlsKDw9S0ifKkKIOGTAozWAz2tzoncmTyxDhtcZpW+EGir4joo1fUjyHfOZEggEN2UMi7ytLM+8dpRuvZ7TQ52lHF+6G9LZxuOL9c8i9eOuVs1BcueJgoJ85f9E8yG788eWohQ/JecW2FyrYzxYcdIWsCzorsOFkfei9Pcg0n+FH4ULeI8g5nGy5IiWuf0AYRNyHRd1w8tgtStXCqoxnNdNBFFnLNYkxYTO0Wsl0u3YAkLZxqHITtIYtInaKd/aId+F5YLD5lV5Zf/nNf9dETJ8kvYKYuX73mWx6yY2NjvuWPvniSXn6tb8GIIxzkFFkfmDO6iYgrSDIiCGGbo/a8NlC/V7QRo8LARHSLe8j1FTApEdFWSvhk+W2AGEnxbGu5pNM/Ej4LynCNuJg3yPfavo0gMWRUYT7tdnABcVSU22SXDV2nV/tfJ7/kuXz1OpUKtO8HIM2rqdf5JXRaYNgaxemn2ObInmgnqfqEnzCdaIZoBUmPSYJZ4ltoDjcSKXl9venSBiY25YgIbX+w360/siacHOOjAm0r9tXl3W443suUk1kBmYzzS57XUv5I4IQfc2WTxoSu+44I7hGSZH0zo2KdRSFr8lTHt9g5JtUl2ZpLJQ+IyU8KEjWLugrNaI97CXvcwwXy3eRVcn+/fnFPYV3XRkIh2WSTrRkOHXiOTdJ7dOPmTRplM4PoCGs3eP63j2gqHzBXh+M/NcN4O0RfyTvteP6M8kguach0jlVaQAhTBK0DjROlmW9X3CGmOu5bSgl3bWBhUtwm7PogEecfp5lQ3dnXYy5tVNvjE6EyNEeEcjWiLas48m9ScajiOiJ8pKIIs6kapNBMZAXy2ATCEQgchcDk1vJ9o7ngV0UvdZ/2HWaDJM+37uMFwTGzDkh4hc0d9q9ATjcYuub1kvOBJFnEsSMpYFr9C3KlyJokRDHTfo6IRuxF1Loiazswf5j0+ynXT4qIq+oYC/qAbxLJW9sBwaJCBuauV7TbimUCu29BsA7R36DXYif6MKwvLExVh70YaUX3pibEeeEhzl+NjHAmne4PL1maE4o+H9tL0fzjng6srnvE3IPyMltYWf7ht9pNzVIIaOfXZ3py8nRNS9HdAx+kc40KfkF3IWHxwZmOpMg660IATBTC1YMsi88sJfJj4trpsSCIyTgm6pumkCySRsR9QowFJLVl4fvYobhTttMxbtyDJEMOWVtzQraF/MF+v7hwglVHn2DQIVswzJQa1LUsyaGZM12bNj5etHVokW/yZieu+ZMOQEvt291SlHw2WljG2QbGoqfTKbp7RFzyuj3qwGTY+3azXkyYFajxOFmaKSaKMFGdLhFQfv2EIGdb3vhSZG2RqC6yGE/UQzYutIVTdsRN1mN8ICEc9y6X8XXmRG34s+YLTw9V3Fel4B6bmDhw5RcwP4fjL0ybLpDpB99uZ/P2sO824P/YIX5mYkK9/tff19Eih4uvMdf6I17+Uomyirj1lC3SBon+CvYpjlVkuvFNBzZtXE+lAEQ58bMXzB3zRiYd7kshDQDfyRwwLw3oWiZOZQARWqtzIU1efc/JLVFW9StbpA3PPk3iZCfTiWw6bQo0NpR+IB0+DJznVUyiYv5MITz5+AbzmpkcV9Mu6xEBFh9M4qiDqRFNSx9/oHq5GUEtNOBso29N17vVC+dUCrDoMX3m+O0Lf4o/sX7DoKYt+Kotr/cZ9NQTm9S3L5yLU4CyQM7vqmLP7mkZn8iMYCIXCuhrbDwz8rWv7vRcdAqweJBDnPq6GlXTtHaeSFoI8pikGcuQoWX3o28KUDaY9UvOR+tqkhpPJMiTzc6f2ULbo0yajG7sb6ir6aUAZQXX346DPBkt2zLKJmRqSiMv4Md6VzjhjLHXrx+wRjA5meUtiPRIlkmzrm55kgKUHYr+m5NrQ8OKLsl9siwrS5eGqGJJ7tlkEAarvvnnc/DDPfxfnPxffKYzGk1NaryJqQ/Kht4SmKfyheRH6MrQ/+OyRK0gUDgs01v/eot+89uznge6sCj47M4vU/2aeppKm4ThPRg63lh3f5wClDV8EQeA9mGjFfnxkSMdbwwOKObqohzCwXJiQjmaMtjp1WGTzH0nmKb1Tc3q9w9/p5t3oRLNdTULfdYmwDzAN3Gc+OzGbU3Mls0GNsJkQ5F03kGVJOsMCzbmzN1d3srnzTFDkt7k9ZkUBfhY4UPuNlO0lz/94QAAAABJRU5ErkJggg==",alt:"Soccerr right img",className:"lazyautosizes lazyloaded"})})}),Object(l.jsx)("div",{className:"lg:hidden",children:Object(l.jsx)("button",{id:"nav-toggle",className:"flex items-center px-3 py-2 border-0 rounded text-grey text-white text-bold",children:Object(l.jsxs)("div",{ref:t,onClick:function(){e.current.classList.add("touched"),e.current.classList.toggle("translate-x-full"),o(!r)},className:"iconNav order-3 h-6 w-5 cursor-pointer relative",children:[Object(l.jsx)("span",{className:"transform transition duration-300 ease-in-out absolute h-1 w-full bg-white dark:bg-orange rounded-lg left-0 ".concat(r?"rotate-135 top-2":"rotate-0")}),Object(l.jsx)("span",{className:"absolute transition duration-300 ease-in-out h-1 w-full bg-white dark:bg-orange rounded-lg left-0 top-2 ".concat(r?"opacity-0 -left-40":"opacity-100")}),Object(l.jsx)("span",{className:"transform transition duration-300 ease-in-out absolute h-1 w-full bg-white dark:bg-orange rounded-lg left-0 ".concat(r?"-rotate-135 top-2":"rotate-0 top-4")})]})})}),Object(l.jsx)("div",{className:"w-full flex-grow lg:flex lg:items-center lg:w-auto ".concat(r?"py-5":"hidden"," lg:block lg:pt-0"),id:"nav-content",children:Object(l.jsxs)("ul",{ref:e,className:"list-reset lg:flex justify-end flex-1 items-center",children:[Object(l.jsx)("li",{className:"mr-3",children:Object(l.jsx)(a.b,{to:"/",className:"inline-block py-2 px-4 text-white no-underline",href:"#",children:Object(l.jsx)("div",{className:"flex items-center justify-center flex-1 h-full py-1 px-6 bg-gray-800 rounded-xl",children:Object(l.jsx)("p",{className:"text-lg font-semibold text-white",children:"Home"})})})}),Object(l.jsx)("li",{className:"mr-3",children:Object(l.jsx)(a.b,{className:"inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline py-2 px-4",href:"#",children:Object(l.jsx)("p",{className:"text-lg font-medium text-white",children:"Player"})})}),Object(l.jsx)("li",{className:"mr-3",children:Object(l.jsx)(a.b,{className:"inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline py-2 px-4",href:"#",children:Object(l.jsx)("p",{className:"text-lg font-medium text-white",children:"Fifa Ranking"})})}),Object(l.jsx)("li",{className:"mr-3",children:Object(l.jsx)(a.b,{className:"inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline py-2 px-4",href:"#",children:Object(l.jsx)("p",{className:"text-lg font-medium text-white",children:"Season"})})})]})})]})})}},39:function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var c=s(3),l=s(38),n=s(35);function a(e){e.preview;var t=e.children;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"min-h-screen bg-normal dark:text-whitedarktheme",children:[Object(c.jsxs)("div",{className:"bg-gradient-to-b from-blue-500 to-blue-600 m-0 md:m-8 md:rounded-3xl",children:[Object(c.jsx)(l.a,{}),Object(c.jsxs)("div",{className:"bghead flex flex-wrap justify-between md:item-center",children:[Object(c.jsxs)("div",{className:"px-10 pb-20 lg:flex-1 m-auto",children:[Object(c.jsx)("h2",{className:"text-5xl font-semibold text-white",children:"Dicover all about sport"}),Object(c.jsx)("p",{className:"text-lg md:px-10 text-white w-10/12",children:"Search millions of jobs and get the inside scoop on companies. Wait for what? Let\u2019s get start it! "})]}),Object(c.jsx)("div",{className:"lg:flex-shrink-0 w-full lg:w-1/2",children:Object(c.jsx)("img",{src:n.a,alt:"Soccerr right img",className:"lazyautosizes lazyloaded w-10/12 sm:px-10 md:px-16 m-auto"})})]})]}),Object(c.jsx)("main",{children:t})]})})}},43:function(e,t,s){"use strict";var c=s(3),l=(s(0),s(14)),n=s(15),a=s(8);t.a=function(e){var t,s,i,r,o,d,m,x,j=e.response;return Object(c.jsx)(a.b,{to:"/detail/".concat(j.gameId),children:Object(c.jsxs)("div",{className:"grid grid-flow-col md:grid-flow-col p-5 mx-10 bg-white border rounded-2xl border-gray-300 mb-8",children:[Object(c.jsxs)("div",{className:"flex items-center",children:[Object(c.jsx)("div",{className:"w-4 h-4 ".concat((null===j||void 0===j?void 0:j.status)>=8?"bg-red-400":(null===j||void 0===j?void 0:j.status)<=8?"bg-green-400":"bg-yellow-400"," rounded-full mr-2")}),Object(c.jsx)("p",{className:"text-lg font-medium ".concat((null===j||void 0===j?void 0:j.status)>=8?"text-red-400":(null===j||void 0===j?void 0:j.status)<=8?"text-green-400":"bg-yellow-400"),children:null===j||void 0===j?void 0:j.statusName})]}),Object(c.jsx)("div",{className:"flex justify-center items-center",children:Object(c.jsxs)("div",{className:"flex justify-between",children:[Object(c.jsx)("div",{className:"px-5",style:{width:120},children:Object(c.jsx)("img",{alt:null===j||void 0===j||null===(t=j.homeTeamEvent)||void 0===t?void 0:t.name,src:null===j||void 0===j||null===(s=j.homeTeamEvent)||void 0===s?void 0:s.logoUrl,width:100,className:"lazyautosizes lazyloaded"})}),Object(c.jsxs)("div",{className:"flex space-x-4 items-center",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{className:"text-md font-semibold text-gray-800",children:null===j||void 0===j||null===(i=j.homeTeamEvent)||void 0===i?void 0:i.name}),Object(c.jsx)("p",{className:"text-md font-semibold text-gray-800 text-center mt-2",children:null===j||void 0===j||null===(r=j.homeTeamEvent)||void 0===r?void 0:r.score})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{className:"text-md font-semibold text-gray-800",children:" vs "}),Object(c.jsx)("p",{className:"text-md font-semibold text-gray-800 text-center mt-2",children:" - "})]}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{className:"text-md font-semibold text-gray-800",children:[" ",null===j||void 0===j||null===(o=j.awayTeamEvent)||void 0===o?void 0:o.name," "]}),Object(c.jsxs)("p",{className:"text-md font-semibold text-gray-800 text-center mt-2",children:[" ",null===j||void 0===j||null===(d=j.awayTeamEvent)||void 0===d?void 0:d.score," "]})]})]}),Object(c.jsx)("div",{className:"px-5",style:{width:120},children:Object(c.jsx)("img",{alt:null===j||void 0===j||null===(m=j.homeTeamEvent)||void 0===m?void 0:m.name,src:null===j||void 0===j||null===(x=j.awayTeamEvent)||void 0===x?void 0:x.logoUrl,width:100,className:"lazyautosizes lazyloaded"})})]})}),Object(c.jsxs)("span",{className:"text-right my-auto",children:["Detail  ",Object(c.jsx)(l.a,{icon:n.b})," "]})]})})}},46:function(e,t,s){"use strict";var c=s(3),l=(s(0),s(8)),n=s.p+"static/media/soccer.c9896be4.svg";t.a=function(e){var t,s,a,i,r,o,d,m,x=e.response;return Object(c.jsx)(l.b,{to:"/detail/".concat(x.gameId),children:Object(c.jsxs)("div",{className:"my-4 bg-white border hover:shadow-md cursor-pointer rounded-2xl border-gray-300",children:[Object(c.jsxs)("div",{className:"flex items-center justify-center space-x-8 py-6 px-6",children:[Object(c.jsx)("div",{className:"p-2 rounded-full ",children:Object(c.jsx)("img",{width:80,alt:null===x||void 0===x||null===(t=x.homeTeamEvent)||void 0===t?void 0:t.name,src:(null===x||void 0===x||null===(s=x.homeTeamEvent)||void 0===s?void 0:s.logoUrl)||n,className:"lazyautosizes lazyloaded"})}),Object(c.jsx)("div",{className:"p-2 rounded-full",children:Object(c.jsx)("img",{width:80,alt:null===x||void 0===x||null===(a=x.homeTeamEvent)||void 0===a?void 0:a.name,src:(null===x||void 0===x||null===(i=x.awayTeamEvent)||void 0===i?void 0:i.logoUrl)||n,className:"lazyautosizes lazyloaded"})})]}),Object(c.jsxs)("div",{className:"flex space-x-4 items-center justify-center w-full",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{className:"text-md font-semibold text-center text-gray-800",children:null===x||void 0===x||null===(r=x.homeTeamEvent)||void 0===r?void 0:r.name}),Object(c.jsx)("p",{className:"text-md font-semibold text-gray-800 text-center mt-2",children:null===x||void 0===x||null===(o=x.homeTeamEvent)||void 0===o?void 0:o.score})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{className:"text-md font-semibold  text-center text-gray-800",children:" vs "}),Object(c.jsx)("p",{className:"text-md font-semibold text-gray-800 text-center mt-2",children:" - "})]}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("p",{className:"text-md font-semibold  text-center text-gray-800",children:[" ",null===x||void 0===x||null===(d=x.awayTeamEvent)||void 0===d?void 0:d.name," "]}),Object(c.jsxs)("p",{className:"text-md font-semibold text-gray-800 text-center mt-2",children:[" ",null===x||void 0===x||null===(m=x.awayTeamEvent)||void 0===m?void 0:m.score," "]})]})]}),Object(c.jsx)("div",{className:"".concat((null===x||void 0===x?void 0:x.status)>=8?"bg-red-400":(null===x||void 0===x?void 0:x.status)<=8?"bg-green-400":"bg-yellow-400"," rounded-b-xl px-2 text-white items-center justify-center flex flex-col"),children:null===x||void 0===x?void 0:x.statusName})]})})}},74:function(e,t,s){"use strict";s.r(t);var c=s(37),l=s(3),n=s(0),a=s(39),i=s(14),r=s(15),o=s(36),d=s(43),m=s(46),x=s(8),j=s(45),b=s(44),u=s.n(b),h=function(e){return o.a.get(e).then()};t.default=function(){var e,t,s=u()(new Date).format("YYYYMMDD"),o=Object(n.useState)(null),b=Object(c.a)(o,2),v=b[0],f=(b[1],Object(n.useState)("7")),O=Object(c.a)(f,2),g=O[0],p=(O[1],Object(j.a)("".concat("https://client.elevenscore.com","/api/football/match/matchfixtures?date=").concat(null!==v&&void 0!==v?v:s,"&utc=").concat(g),h)),N=(p.mutate,p.error,p.data),y=null===N||void 0===N||null===(e=N.data)||void 0===e?void 0:e.result.sort((function(e,t){return e.status-t.status})).slice(0,5),w=null===N||void 0===N||null===(t=N.data)||void 0===t?void 0:t.result.filter((function(e){return e.status>=2})).slice(0,3);return Object(l.jsxs)(a.a,{children:[Object(l.jsx)("div",{className:"container mx-auto mb-5",children:Object(l.jsx)("p",{className:"text-4xl lg:text-5xl lg:mt-8 mt-5 font-semibold text-gray-800 text-center",children:"Score Board"})}),Object(l.jsxs)("div",{className:"hidden md:block",children:[Object(l.jsx)("div",{className:"container mx-auto mb-8",children:Object(l.jsx)("p",{className:"text-3xl lg:mt-8 mt-5 font-semibold text-gray-800",children:"Now"})}),N?w.map((function(e,t){return Object(l.jsx)(d.a,{response:e})})):Object(l.jsx)("div",{className:"flex justify-center items-center w-screen h-screen bg-primeSand",children:Object(l.jsx)(i.a,{icon:r.c,className:"animate-spin text-xl text-blue-500 outline-none"})}),Object(l.jsx)(x.b,{to:"/allscore",children:Object(l.jsxs)("p",{className:"text-center text-lg text-blue-600",children:["More ",Object(l.jsx)(i.a,{icon:r.a,className:"text-sm"})]})}),Object(l.jsx)("div",{className:"container mx-auto mb-8",children:Object(l.jsx)("p",{className:"text-3xl lg:mt-8 mt-5 font-semibold text-gray-800",children:"Comming Soon"})}),N?y.map((function(e,t){return Object(l.jsx)(d.a,{response:e})})):Object(l.jsx)("div",{className:"flex justify-center items-center w-screen h-screen bg-primeSand",children:Object(l.jsx)(i.a,{icon:r.c,className:"animate-spin text-xl text-blue-500 outline-none"})}),Object(l.jsx)(x.b,{to:"/allscore",children:Object(l.jsxs)("p",{className:"text-center text-lg text-blue-600",children:["More ",Object(l.jsx)(i.a,{icon:r.a,className:"text-sm"})]})})]}),Object(l.jsxs)("div",{className:"block md:hidden px-8",children:[Object(l.jsx)("div",{className:"container mx-auto mb-8",children:Object(l.jsx)("p",{className:"text-3xl lg:mt-8 mt-5 font-semibold text-gray-800",children:"Now"})}),N?w.map((function(e,t){return Object(l.jsx)(m.a,{response:e})})):Object(l.jsx)("div",{className:"flex justify-center items-center w-screen h-screen bg-primeSand",children:Object(l.jsx)(i.a,{icon:r.c,className:"animate-spin text-xl text-blue-500 outline-none"})}),Object(l.jsx)(x.b,{to:"/allscore",children:Object(l.jsxs)("p",{className:"text-center text-lg text-blue-600",children:["More ",Object(l.jsx)(i.a,{icon:r.a,className:"text-sm"})]})}),Object(l.jsx)("div",{className:"container mx-auto mb-8",children:Object(l.jsx)("p",{className:"text-3xl lg:mt-8 mt-5 font-semibold text-gray-800",children:"Comming Soon"})}),N?y.map((function(e,t){return Object(l.jsx)(m.a,{response:e})})):Object(l.jsx)("div",{className:"flex justify-center items-center w-screen h-screen bg-primeSand",children:Object(l.jsx)(i.a,{icon:r.c,className:"animate-spin text-xl text-blue-500 outline-none"})}),Object(l.jsx)(x.b,{to:"/allscore",children:Object(l.jsxs)("p",{className:"text-center text-lg text-blue-600",children:["More ",Object(l.jsx)(i.a,{icon:r.a,className:"text-sm"})]})})]}),Object(l.jsx)("div",{className:"border-t mt-10",style:{height:161,backgroundColor:"#f5f6f8"}})]})}}}]);
//# sourceMappingURL=5.d3bb7569.chunk.js.map