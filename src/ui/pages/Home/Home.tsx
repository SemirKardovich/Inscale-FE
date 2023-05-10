import { Box } from "@mui/material";
import { Container, ServicesContainer, Title } from "./Home.style";
import { HomeMessages } from "./Home.utils";
import { Service, services } from '../../../services/mocks'
import ServiceCard from "../../components/ServiceCard";
import { useState } from "react";
import BookingModal from "../../components/BookingModal";

export default function Home() {
    const [bookingResource, setBookingResource] = useState('')

    return (
        <Container>
            <Title>{HomeMessages.Title}</Title>
            <ServicesContainer>
                {services.map((service: Service) => <ServiceCard service={service} key={service.name} handleClick={setBookingResource} />)}
            </ServicesContainer>
            <BookingModal resource={bookingResource} onClose={() => setBookingResource('')} />
        </Container>
    )
}
