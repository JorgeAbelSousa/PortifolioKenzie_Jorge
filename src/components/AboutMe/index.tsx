import {
  AboutMeArea,
  ProjectsAreaSocialMediaMessage,
} from "@/pages/home/style";
import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";

export const AboutMe = () => {
  return (
    <AboutMeArea id="about">
      <Container>
        <ProjectsAreaSocialMediaMessage>
          <Text as="h2" type="heading4" color="grey4">
            Sobre mim
          </Text>
          <Text as="p" type="body1" color="grey2">
            Olá! Sou o Jorge e minha jornada na tecnologia começou com os jogos,
            despertando minha paixão pelo universo digital. Como entusiasta do
            design, aprendi e utilizei o Adobe Photoshop para criar designs
            impactantes em artes para mídias impressas e redes sociais. Minha
            atração pela simplicidade e automação me levou a buscar formas de
            otimizar processos e a conhecer o mundo da programação. Atualmente,
            estou concluindo um curso FullStack na Kenzie Academy Brasil,
            obtendo uma visão abrangente do desenvolvimento de software. Minha
            curiosidade pelos bastidores tecnológicos me motiva a explorar
            soluções inovadoras para melhorar a vida das pessoas. Estou
            entusiasmado com as oportunidades futuras e animado para contribuir
            com minha paixão pelo design, eficiência e automação.
          </Text>
        </ProjectsAreaSocialMediaMessage>
      </Container>
    </AboutMeArea>
  );
};
