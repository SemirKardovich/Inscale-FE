import { Container, ServicesContainer, Title } from "./Home.style";
import { HomeMessages } from "./Home.utils";
import ServiceCard from "../../components/ServiceCard";
import { useState } from "react";
import BookingModal from "../../components/BookingModal";
import { useGetResourcesQuery } from "../../../services/api";
import LoadingContainer from "../../components/LoadingContainer/LoadingContainer";
import { ResourceType } from "../../../services/types";

export default function Home() {
    const [bookingResource, setBookingResource] = useState<ResourceType | undefined>()
    const { data, isLoading } = useGetResourcesQuery();

    return (
        <Container>
            <Title>{HomeMessages.Title}</Title>
            <LoadingContainer isLoading={isLoading}>
                <ServicesContainer>
                    {data?.map((service: ResourceType) => <ServiceCard service={service} key={service.id} handleClick={() => setBookingResource(service)} />)}
                </ServicesContainer>
            </LoadingContainer>
            {bookingResource && <BookingModal resource={bookingResource} onClose={() => setBookingResource(undefined)} />}
        </Container>
    )
}
