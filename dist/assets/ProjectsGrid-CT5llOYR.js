import{j as e,m as p,L as h,r as l,e as j}from"./index-bYeM-1e6.js";import{I as u,a as b,b as k,c as P,d as N,e as f}from"./ui-project-2-B89WGbom.js";const m=({title:a,category:t,image:n})=>e.jsx(p.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:e.jsx(h,{to:"/projects/single-project","aria-label":"Single Project",children:e.jsxs("div",{className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[e.jsx("div",{children:e.jsx("img",{src:n,className:"rounded-t-xl border-none",alt:"Single Project"})}),e.jsxs("div",{className:"text-center px-4 py-6",children:[e.jsx("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:a}),e.jsx("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:t})]})]})})}),v=[{id:1,title:"Google Health Platform",category:"Web Application",img:u,ProjectHeader:{title:"Project Management UI - From Context",publishDate:"Jul 26, 2021",tags:"UI / Frontend"}},{id:2,title:"Phoenix Digital Agency",category:"Mobile Application",img:b},{id:3,title:"Project Management UI",category:"UI/UX Design",img:k},{id:4,title:"Cloud Storage Platform",category:"UI/UX Design",img:P},{id:5,title:"React Social App",category:"Mobile Application",img:N},{id:6,title:"Apple Design System",category:"Web Application",img:f}],g=l.createContext(),U=a=>{const[t,n]=l.useState(v),[i,c]=l.useState(""),[o,d]=l.useState(""),r=t.filter(s=>s.title.toLowerCase().includes(i.toLowerCase())||i===""?s:""),x=t.filter(s=>(s.category.charAt(0).toUpperCase()+s.category.slice(1)).includes(o));return e.jsx(g.Provider,{value:{projects:t,setProjects:n,searchProject:i,setSearchProject:c,searchProjectsByTitle:r,selectProject:o,setSelectProject:d,selectProjectsByCategory:x},children:a.children})},S=["Web Application","Mobile Application","UI/UX Design","Branding"],I=({setSelectProject:a})=>e.jsxs("select",{onChange:t=>{a(t.target.value)},className:`font-general-medium \r
                px-4\r
                sm:px-6\r
                py-2\r
                border\r
                dark:border-secondary-dark\r
                rounded-lg\r
                text-sm\r
                sm:text-md\r
                dark:font-medium\r
                bg-secondary-light\r
                dark:bg-ternary-dark\r
                text-primary-dark\r
                dark:text-ternary-light\r
            `,children:[e.jsx("option",{value:a,className:"text-sm sm:text-md",children:"All Projects"}),S.map(t=>e.jsx("option",{className:"text-normal sm:text-md",children:t},t))]}),w=()=>{const{projects:a,searchProject:t,setSearchProject:n,searchProjectsByTitle:i,selectProject:c,setSelectProject:o,selectProjectsByCategory:d}=l.useContext(g);return e.jsxs("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[e.jsx("div",{className:"text-center",children:e.jsx("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Projects portfolio"})}),e.jsxs("div",{className:"mt-10 sm:mt-16",children:[e.jsx("h3",{className:`font-general-regular \r
                        text-center text-secondary-dark\r
                        dark:text-ternary-light\r
                        text-md\r
                        sm:text-xl\r
                        mb-3\r
                        `,children:"Search projects by title or filter by category"}),e.jsxs("div",{className:`\r
                        flex\r
                        justify-between\r
                        border-b border-primary-light\r
                        dark:border-secondary-dark\r
                        pb-3\r
                        gap-3\r
                        `,children:[e.jsxs("div",{className:"flex justify-between gap-2",children:[e.jsx("span",{className:`\r
                                hidden\r
                                sm:block\r
                                bg-primary-light\r
                                dark:bg-ternary-dark\r
                                p-2.5\r
                                shadow-sm\r
                                rounded-xl\r
                                cursor-pointer\r
                                `,children:e.jsx(j,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),e.jsx("input",{onChange:r=>{n(r.target.value)},className:`font-general-medium \r
                                pl-3\r
                                pr-1\r
                                sm:px-4\r
                                py-2\r
                                border \r
                            border-gray-200\r
                                dark:border-secondary-dark\r
                                rounded-lg\r
                                text-sm\r
                                sm:text-md\r
                                bg-secondary-light\r
                                dark:bg-ternary-dark\r
                                text-primary-dark\r
                                dark:text-ternary-light\r
                                `,id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})]}),e.jsx(I,{setSelectProject:o})]})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:c?d.map(r=>e.jsx(m,{title:r.title,category:r.category,image:r.img},r.id)):t?i.map(r=>e.jsx(m,{title:r.title,category:r.category,image:r.img},r.id)):a.map(r=>e.jsx(m,{title:r.title,category:r.category,image:r.img},r.id))})]})};export{U as P,w as a};
