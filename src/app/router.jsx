import { createBrowserRouter } from "react-router-dom";

// layouts
import GuestLayout from "../layouts/GuestLayout";
import ClientLayout from "../layouts/ClientLayout";
import FreelancerLayout from "../layouts/FreelancerLayout";

// guest pages
import HomeGuest from "../pages/Guest/HomeGuest";
import AllJobsGuest from "../pages/Guest/AllJobsGuest";
import AllTagsGuest from "../pages/Guest/AllTagsGuest";

import CategoryDetailsGuest from "../pages/Guest/CategoryDetailsGuest";

// common
import NotFound from "../pages/common/NotFound";
import JobDetailsGuest from "../pages/Guest/JobDetailsGuest";
import CategoriesGuest from "../pages/Guest/CategoriesGuest";
import TagsDetailGuest from "../pages/Guest/TagsDetailGuest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      { index: true, element: <HomeGuest /> },
      { path: "jobs", element: <AllJobsGuest /> },
      { path: "jobs/:id", element: <JobDetailsGuest /> },
      { path: "categories", element: <CategoriesGuest /> },
      {
        path: "categories/:slug",
        element: <CategoryDetailsGuest />,
      },

      {
        path: "tags",
        element: <AllTagsGuest />,
      },
      { path: "/tags/:id", element: <TagsDetailGuest /> },
    ],
  },
  {
    path: "/client",
    element: <ClientLayout />,
    children: [],
  },
  {
    path: "/freelancer",
    element: <FreelancerLayout />,
    children: [],
  },

  { path: "*", element: <NotFound /> },
]);

export default router;
