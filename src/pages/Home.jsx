import { NavLink } from "react-router-dom";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

function Home() {
  return (
    <div className="container">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="hover-card-wrap">
        {" "}
        <HoverCard>
          <HoverCardTrigger>
            <NavLink to="/shamp"> Shampoo Juicy Fruits & Warm Woods</NavLink>
          </HoverCardTrigger>

          <HoverCardContent>
            <div className="hover-card-content">
              <img
                src="src/img/shampoo.jpg"
                alt="shampoo"
                width="100"
                loading="lazy"
              />
              <div className="hover-card-text">
                <p>Moisturizing Shampoo Juicy Fruits & Warm Woods</p>
                <p>$14.90</p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger>Cosmetic set Curology</HoverCardTrigger>
          <HoverCardContent>
            <div className="hover-card-content">
              <img
                src="src/img/cosmetic.png"
                alt="cosmetic set"
                width="100"
                loading="lazy"
              />
              <div className="hover-card-text">
                <p>Curology V3 Face Wash, Body Wash & Hair Growth Gel</p>
                <p>$45.00</p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
}

export default Home;
