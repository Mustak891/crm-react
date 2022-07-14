import React from "react";
import "./Service.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const Service = () => {
  return (
    <div className="service">
      <div className="serviceleft">
        <h2>Our Services</h2>
        <div className="servicesubhead">
          Our <b className="servicewe">Awesome</b> Services
        </div>
      </div>
      <div className="serviceright">
        <div className="i-title">
          <div className="i-title-warpper">
            <div className="i-title-item">
              <Card sx={{ Width: 300, height: 400 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://99designs-blog.imgix.net/blog/wp-content/uploads/2021/12/Digital-marketing-trends-2022.jpg?auto=format&q=60&w=1860&h=1090&fit=crop&crop=faces"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Monday marketer
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      For marketing & creative teams Manage and collaborate on
                      marketing and creative projects to launch effective
                      campaigns.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Learn more
                  </Button>
                </CardActions>
              </Card>
            </div>

            <div className="i-title-item">
              <Card sx={{ Width: 300, height: 400 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://www.leadsquared.com/wp-content/uploads/2021/11/446-Converted-02.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Monday sales crm
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      For customer-facing teams Track and manage all aspects of
                      your sales cycle, customer data, and more in one place.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Learn more
                  </Button>
                </CardActions>
              </Card>
            </div>

            <div className="i-title-item">
              <Card sx={{ Width: 300, height: 400 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://metphilippines.com/wp-content/uploads/2021/11/crm-dev.png"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Monday dev
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      For product & dev teams Easily build agile workflows to
                      drive impact across your product, design, and R&D teams.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Learn more
                  </Button>
                </CardActions>
              </Card>
            </div>

            <div className="i-title-item">
              <Card sx={{ Width: 300, height: 400 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://www.predictiveanalyticstoday.com/wp-content/uploads/2018/11/15-Steps-for-a-Successful-Small-Business-CRM-Implementation-921x1024.png"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Monday Projects
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      For teams managing projects Plan, collaborate, and execute
                      on every project and portfolio to reach your goals,
                      faster.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Learn more
                  </Button>
                </CardActions>
              </Card>
            </div>

            <div className="i-title-item">
              <Card sx={{ Width: 300, height: 400 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://i0.wp.com/www.marketcircle.com/blog/wp-content/uploads/2021/07/DEY0RMzKEkW36HLLtoTD3uULQH-Da_w5Fma_TH2RLBby5G_XLXVguqoFVVwGZSKqsC_UDQiGg34xEbRwN3ohJfhs-VEX3PaI7PJraZEWjj6_7OPOCdsrpE-CMD0-hse9Gdy91qQT.png?ssl=1"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Monday CRM data
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Find any information you need from your CRM data,
                      instantly with the help of Zia, your AI-powered sales
                      assistan
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Learn more
                  </Button>
                </CardActions>
              </Card>
            </div>

            <div className="i-title-item">
              <Card sx={{ Width: 300, height: 400 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://www.icepts.com/wp-content/uploads/2021/07/Mapping-for-CRM.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Advanced CRM data
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Get advanced lead and deal predictions from Zia so that
                      you can identify the leads that are likely to convert and
                      ultimately close more deals
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Learn more
                  </Button>
                </CardActions>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
