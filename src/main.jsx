import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";

import { HelmetProvider } from "react-helmet-async";
import Authproviders from "./Components/Providers/Authproviders";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authproviders>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </HelmetProvider>
    </Authproviders>
  </React.StrictMode>
);





// const queryClient = new QueryClient()
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <AuthProvider>
//       <HelmetProvider>
//         <QueryClientProvider client={queryClient}>
//           <div className='max-w-screen-xl mx-auto'>
//             <RouterProvider router={router} />
//           </div>
//         </QueryClientProvider>
//       </HelmetProvider>
//     </AuthProvider>
//   </React.StrictMode>,
// )
