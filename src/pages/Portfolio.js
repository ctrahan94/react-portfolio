import React from "react";
import MusicCard from "../components/MusicCard";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import ShelfCard from "../components/ShelfCard";
import BurgerCard from "../components/BurgerCard";
import PasswordCard from "../components/PasswordCard";
import PlannerCard from "../components/PlannerCard";
import WeatherCard from "../components/WeatherCard";


function Portfolio() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="sm-12 md-3">
            <MusicCard></MusicCard>
          </Col>
          <Col size="sm-12 md-3">
            <ShelfCard></ShelfCard>
          </Col>
          <Col size="sm-12 md-3">
            <BurgerCard></BurgerCard>
          </Col>
        </Row>
        <Row>
          <Col size="sm-12 md-3">
            <PasswordCard></PasswordCard>
          </Col>
          <Col size="sm-12 md-3">
            <PlannerCard></PlannerCard>
          </Col>
          <Col size="sm-12 md-3">
            <WeatherCard></WeatherCard>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
