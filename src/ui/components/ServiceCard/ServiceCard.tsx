import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { resourceNameToImg, resourceNameToImgType, ServiceType } from './ServiceCard.utils'

interface ServiceCardProps {
  service: ServiceType,
  handleClick: () => void
}

export default function ServiceCard({ service, handleClick }: ServiceCardProps) {
  return (
    <Card sx={{ maxWidth: 380 }} onClick={handleClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={resourceNameToImg[service.name as keyof resourceNameToImgType]}
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
