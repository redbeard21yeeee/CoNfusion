import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
    

    function RenderComments({comments}) {
        if (comments != null) {
            const commentItems = comments.map((comment) => {
                return (
                    <li key={comment.id} className='list-unstyled'>
                        <div className='mb-2'>{comment.comment}</div>
                        <div className='mb-2'>--{comment.author} {comment.date}</div>
                    </li>
                );
            });

            return (
                <div className='col-12 col-md-5 m-1'>
                    <h4>Comments</h4>
                    <ul>
                        {commentItems}
                    </ul>
                </div>
            );
        } else {
            return <div></div>;
        }
    }

    function RenderDish({dish}) {
        return (
            <div className='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg width='100%' src={dish.image} alt={dish.name} />
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </Card>
            </div>
        );
    }

    const  DishDetail = (props) => {
        const { dish } = props;
        if (props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className="row">
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            );
        }
    }
            

export default DishDetail;