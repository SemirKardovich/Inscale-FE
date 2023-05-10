import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { Service } from '../../../services/mocks'

interface ServiceCardProps {
  service: Service,
  handleClick: (value: string) => void
}

export default function ServiceCard({ service, handleClick }: ServiceCardProps) {
  return (
    <Card sx={{ maxWidth: 380 }} onClick={() => handleClick(service.name)}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={service.img}
          alt={service.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {service.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {service.info}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
