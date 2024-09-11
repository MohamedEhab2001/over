import React from "react";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";

const HomeMobileMenu = [
  {
    name: "Event Organiser",
    routerPath: "/",
  },
  {
    name: "Project Management",
    routerPath: "/project-management",
  },
  {
    name: "Customer Support",
    routerPath: "/customer-support",
  },
  {
    name: "Doc landing",
    routerPath: "/doc-landing",
  },
  {
    name: "Product landing",
    routerPath: "/product-landing",
  },
  {
    name: "Product landing Dark",
    routerPath: "/product-landing-dark",
  },
  {
    name: "Note Taking App landing",
    routerPath: "/note-taking-landing",
  },
  {
    name: "Video Editor Landing",
    routerPath: "/video-editor-landing",
  },
  {
    name: "Appointment Scheduling",
    routerPath: "/appointment-scheduling",
  },
  {
    name: "Mobile App",
    routerPath: "/mobile-app-landing",
  },
  {
    name: "Doc Signature",
    routerPath: "/doc-signature",
  },
  {
    name: "Website Builder",
    routerPath: "/website-builder",
  },
  {
    name: "Form Survey",
    routerPath: "/form-survey-landing",
  },
  {
    name: "VR Landing",
    routerPath: "/vr-landing",
  },
  {
    name: "E-Commerce",
    routerPath: "/e-commerce",
  },
  {
    name: "Coming Soon",
    routerPath: "/coming-soon",
  },
];

const Pricing = [
  {
    name: "Customer Support",
    routerPath: "/pricing-cs",
  },
  {
    name: "Event Organiser",
    routerPath: "/pricing-eo",
  },
  {
    name: "Project Management",
    routerPath: "/pricing-pm",
  },
];
const AboutUs = [
  {
    name: "Customer Support",
    routerPath: "/about-cs",
  },
  {
    name: "Event Organiser",
    routerPath: "/about-eo",
  },
  {
    name: "Project Management",
    routerPath: "/about-pm",
  },
  {
    name: "Documentation",
    routerPath: "/about-doc",
  },
];
const ContactUs = [
  {
    name: "Custom Support",
    routerPath: "/contact-cs",
  },
  {
    name: "Event Organizer",
    routerPath: "/contact-eo",
  },
  {
    name: "Project Management",
    routerPath: "/contact-pm",
  },
  {
    name: "Documentation",
    routerPath: "/contact-doc",
  },
];
const Team = [
  {
    name: "Team Version 01",
    routerPath: "/team-1",
  },
  {
    name: "Team Version 02",
    routerPath: "/team-2",
  },
  {
    name: "Team Version 03",
    routerPath: "/team-3",
  },
  {
    name: "Team Version 04",
    routerPath: "/team-4",
  },
  {
    name: "Team Version 05",
    routerPath: "/team-5",
  },
  {
    name: "Team Version 06",
    routerPath: "/team-6",
  },
  {
    name: "Team Details",
    routerPath: "/team-details-v1",
  },
  {
    name: "Team Details Slider",
    routerPath: "/team-details-v2",
  },
];
const Services = [
  {
    name: "Service Version 01",
    routerPath: "service-v1",
  },
  {
    name: "Service Version 02",
    routerPath: "service-v2",
  },
  {
    name: "Service Version 03",
    routerPath: "service-v3",
  },
  {
    name: "Service Version 04",
    routerPath: "service-v4",
  },
  {
    name: "Service Details",
    routerPath: "service-details",
  },
];
const Miscellaneous = [
  {
    name: "Terms & Condition)",
    routerPath: "terms-conditions",
  },
  {
    name: "Login",
    routerPath: "/login",
  },
  {
    name: "Signup",
    routerPath: "/signup",
  },
  {
    name: "404",
    routerPath: "/404",
  },
];
const Portfolio = [
  {
    name: "Classic Style",
    routerPath: "/classic-style",
  },
  {
    name: "Grid 2 Columns",
    routerPath: "grid-two-col",
  },
  {
    name: "Grid 3 Columns",
    routerPath: "grid-three-col",
  },
  {
    name: "Gallery Slider",
    routerPath: "gallery-slider",
  },
  {
    name: "Grid Single",
    routerPath: "grid-single",
  },
  {
    name: "Classic Details",
    routerPath: "portfolio-details-v1",
  },
];
const Blogs = [
  {
    name: "Blog Version 01",
    routerPath: "/blog-v1",
  },
  {
    name: "Blog Version 02",
    routerPath: "blog-v2",
  },
  {
    name: "Blog Version 03",
    routerPath: "blog-v3",
  },
  {
    name: "Blog Version 04",
    routerPath: "blog-v4",
  },
  {
    name: "Blog Version 05",
    routerPath: "blog-v5",
  },
  {
    name: "Blog Version 06",
    routerPath: "blog-v6",
  },
  {
    name: "Blog Details",
    routerPath: "blog-details",
  },
];
const Docs = [
  {
    name: "Full Width",
    routerPath: "/doc-full-width",
  },
  {
    name: "Full Width Banner",
    routerPath: "/doc-full-width-banner",
  },
  {
    name: "Doc Box",
    routerPath: "doc-box",
  },
  {
    name: "Doc Box With Banner",
    routerPath: "/doc-box-with-banner",
  },
  {
    name: "Changelog",
    routerPath: "/changelog",
  },
];

const Sidebar = () => {
  return (
    <div className="mega-menu-wrapper ecommer-sidebar-wrapper mt-6">
      <ProSidebar>
        <SidebarContent>
          <div className="d-flex flex-column p-3 text-dark">
            <Link to="/da">Home</Link>
            <hr />
            <Link to="/asd">Products</Link>
            <hr />
          </div>
        </SidebarContent>
      </ProSidebar>
    </div>
  );
};

export default Sidebar;
