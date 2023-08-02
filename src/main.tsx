import React from 'react'
import ReactDOM from 'react-dom/client'
import {MantineProvider} from "@mantine/core";
import {RouterProvider} from "react-router-dom";
import {router} from "./router.tsx";
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider withNormalizeCSS withGlobalStyles theme={{ colorScheme: "dark"}}>
      <RouterProvider router={router}/>
    </MantineProvider>
  </React.StrictMode>,
)
