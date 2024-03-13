let menudata = [
    {
        parent:{
            path:"/hooks/state",
            title:"State hooks",
            subroute:[
              {
                path:"/hooks/state/useState",
                title:"useState hooks"
              },
              {
                path:"/hooks/state/useReducer",
                title:"useReducer hooks"
              }
            ]
        }
    },

    {
        parent:{
            path:"/hooks/effect",
            title:"Effect hooks",
            subroute:[
              {
                path:"/hooks/effect/useEffect",
                title:"useEffect hooks"
              },
              {
                path:"/hooks/effect/useEffect/2",
                title:"useEffect-2 hooks"
              },
              {
                path:"/hooks/effect/useLayoutEffect",
                title:"useLayoutEffect hooks"
              }
            ]
        }
    },

    {
        parent:{
            path:"/hooks/ref",
            title:"Ref hooks",
            subroute:[
              {
                path:"/hooks/ref/useRef",
                title:"useEffect hooks"
              },
            ]
        }
    },

    {
        parent:{
            path:"/hooks/perform",
            title:"Performanance hooks",
            subroute:[
              {
                path:"/hooks/perform/useCallback",
                title:"useCallback hooks"
              },
              {
                path:"/hooks/perform/useMemo",
                title:"useMemo hooks"
              }
            ]
        }
    },
    {
        parent:{
            path:"/hooks/context",
            title:"Context hooks",
            subroute:[
              {
                path:"/hooks/context/useContext",
                title:"useContext hooks",
              }
            ]
        }
    },

]

export default menudata