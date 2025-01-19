import styled from "styled-components";
import { useState } from "react";
import { Sidebar } from "../components/organismo/sidebar/Sidebar";
import { MenuHambur } from "../components/organismo/MenuHambur";
import { Device } from "../styles/breackpoints";

export function Layout({children}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <Container className={sidebarOpen ? "active" : ""}>
    <section className="ContentSidebar">
      <Sidebar
        state={sidebarOpen}
        setState={() => setSidebarOpen(!sidebarOpen)}
      />
    </section>
    <section className="ContentMenuambur">
      <MenuHambur />
    </section>

    {/* <MyRoutes /> */}
    <section className="ContentRoutes">{children} </section>
  </Container>
);
}

const Container = styled.main`
display: grid;
grid-template-columns: 1fr;
background-color: ${({ theme }) => theme.bgtotal};
.ContentSidebar {
  display: none;
}
.ContentMenuambur {
  display: block;
  position: absolute;
  left: 20px;
}
@media ${Device.tablet} {
  grid-template-columns: 65px 1fr;
  &.active {
    grid-template-columns: 220px 1fr;
  }
  .ContentSidebar {
    display: initial;
  }
  .ContentMenuambur {
    display: none;
  }
}
.ContentRoutes {
  grid-column: 1;
  width: 100%;
  @media ${Device.tablet} {
    grid-column: 2;
  }
}
`;
