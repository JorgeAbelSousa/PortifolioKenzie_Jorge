// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";
import { AboutMe } from "@/components/AboutMe";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
} from "./style";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}/PortifolioKenzie_Jorge`;

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"60px"}
                height={"60px"}
              />
              <Text color="grey4">Olá, meu nome é {userData.nameUser}</Text>
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
            Eu{" "}
              <Text as="span" type="heading1" color="brand1">
                amo
              </Text>{" "}
              criar e {" "}
              <Text as="span" type="heading1" color="brand1">
                desenvolver
              </Text>{" "}
              projetos
            </Text>
            <Text type="body1" color="grey2">
              Descubra aqui neste ambiente, criado especialmente para você, todos os meus projetos e tecnologias que domino.</Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                Ver projetos
              </Button>
              <Button as="a" type="outline" target="_blank" href={portfolioUrl}>
                Ver o source code deste portifolio
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <AboutMe />
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                Meus projetos
              </Text>
              <Text as="p" type="body1" color="grey2">
                Alguns dos meus{" "}
                <Text as="span" color="brand5">
                  projetos paralelos
                </Text>
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
